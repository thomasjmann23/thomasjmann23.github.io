"""Browser checks for every page of the site.

    python tools/check.py [base_url] [outdir]

With no URL it serves the repo locally. For each page and width (1440, 390):
console errors, layout shift, horizontal overflow, alt text, named controls,
one h1, rendered content, page weight. Also: light + reduced-motion pass,
command menu opens with Ctrl+K and navigates, theme toggle works.
Screenshots go to tools/shots/. Exits 1 if anything fails.
Needs `pip install playwright`; set PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers if Chromium lives there.
"""
import http.server
import json
import os
import socketserver
import sys
import threading
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
WIDTHS = {"desktop": (1440, 900), "phone": (390, 844)}
MAX_BYTES = 1_000_000


def pages():
    data = json.loads((ROOT / "content/resume.json").read_text())
    first = data["projects"][0]["id"]
    return {
        "home": ("index.html", ".cards .card"),
        "work": ("work.html", ".job"),
        "projects": ("projects.html", ".cards .card"),
        "project": (f"project.html?id={first}", ".pipeline li"),
        "research": ("research.html", ".page-head h1"),
    }


def serve():
    os.chdir(ROOT)
    handler = http.server.SimpleHTTPRequestHandler
    handler.log_message = lambda *a: None
    srv = socketserver.ThreadingTCPServer(("127.0.0.1", 0), handler)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return f"http://127.0.0.1:{srv.server_address[1]}/"


SCROLL = """async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 400) {
    scrollTo({top: y, behavior: 'instant'}); await new Promise(r => setTimeout(r, 50));
  }
  scrollTo({top: 0, behavior: 'instant'});
}"""

AUDIT = """(sel) => ({
  rendered: document.querySelectorAll(sel).length,
  stillLoading: document.documentElement.classList.contains('loading'),
  imgsNoAlt: [...document.images].filter(i => !i.hasAttribute('alt')).length,
  unnamed: [...document.querySelectorAll('button, a')].filter(b => !(b.getAttribute('aria-label') || b.textContent.trim())).map(b => b.outerHTML.slice(0, 80)),
  h1: document.querySelectorAll('h1').length,
  dupIds: (() => { const ids = [...document.querySelectorAll('[id]')].map(e => e.id); return ids.filter((x, i) => ids.indexOf(x) !== i); })(),
  overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
})"""


def check_page(browser, url, name, sel, width, outdir):
    problems, errors, total = [], [], {"bytes": 0}
    w, h = WIDTHS[width]
    page = browser.new_page(viewport={"width": w, "height": h})
    page.on("console", lambda m: m.type == "error" and errors.append(m.text))
    page.on("pageerror", lambda e: errors.append(str(e)))

    def on_response(r):
        try:
            total["bytes"] += len(r.body())
        except Exception:
            pass

    page.on("response", on_response)
    page.add_init_script("""window.__cls = 0; new PerformanceObserver(l => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__cls += e.value; }).observe({type: 'layout-shift', buffered: true});""")
    page.goto(url, wait_until="networkidle")
    page.wait_for_timeout(900)
    page.evaluate(SCROLL)
    page.wait_for_timeout(600)
    a = page.evaluate(AUDIT, sel)
    cls = page.evaluate("window.__cls")
    page.screenshot(path=str(outdir / f"{name}-{width}.png"))
    if width == "phone" or name == "home":
        page.screenshot(path=str(outdir / f"{name}-{width}-full.png"), full_page=True)
    tag = f"{name}@{w}"
    if errors: problems.append(f"{tag}: console errors {errors}")
    if cls > 0.1: problems.append(f"{tag}: layout shift {cls:.3f}")
    if a["overflow"] > 0: problems.append(f"{tag}: horizontal overflow {a['overflow']}px")
    if a["imgsNoAlt"]: problems.append(f"{tag}: images without alt")
    if a["unnamed"]: problems.append(f"{tag}: unnamed controls {a['unnamed']}")
    if a["h1"] != 1: problems.append(f"{tag}: {a['h1']} h1 elements")
    if a["dupIds"]: problems.append(f"{tag}: duplicate ids {a['dupIds']}")
    if not a["rendered"] or a["stillLoading"]: problems.append(f"{tag}: content did not render ({sel})")
    if total["bytes"] > MAX_BYTES: problems.append(f"{tag}: page weight {total['bytes']/1e6:.2f} MB")
    print(f"[{tag}] CLS={cls:.3f} weight={total['bytes']/1024:.0f}KB rendered={a['rendered']}")
    page.close()
    return problems


def main():
    base = sys.argv[1] if len(sys.argv) > 1 else serve()
    if not base.endswith("/"):
        base += "/"
    outdir = Path(sys.argv[2] if len(sys.argv) > 2 else ROOT / "tools" / "shots")
    outdir.mkdir(parents=True, exist_ok=True)
    problems = []
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for name, (path, sel) in pages().items():
            for width in WIDTHS:
                problems += check_page(browser, base + path, name, sel, width, outdir)

        # Light theme + reduced motion
        ctx = browser.new_context(reduced_motion="reduce", viewport={"width": 1440, "height": 900})
        ctx.add_init_script("try { localStorage.setItem('theme', 'light') } catch (e) {}")
        pg = ctx.new_page()
        pg.goto(base + "index.html", wait_until="networkidle")
        pg.wait_for_timeout(600)
        if not pg.evaluate("document.querySelector('.demo')?.classList.contains('paused')"):
            problems.append("reduced-motion: demo did not start paused")
        pg.screenshot(path=str(outdir / "home-light.png"))
        ctx.close()

        # Interactions: command menu, navigation, theme toggle
        pg = browser.new_page(viewport={"width": 1440, "height": 900})
        errs = []
        pg.on("pageerror", lambda e: errs.append(str(e)))
        pg.goto(base + "index.html", wait_until="networkidle")
        pg.wait_for_timeout(500)
        pg.keyboard.press("Control+k")
        pg.wait_for_timeout(300)
        if not pg.evaluate("document.querySelector('.palette').open"):
            problems.append("command menu did not open with Ctrl+K")
        pg.keyboard.type("deep")
        pg.keyboard.press("Enter")
        pg.wait_for_load_state("networkidle")
        pg.wait_for_timeout(900)
        if "project.html" not in pg.url or not pg.evaluate("document.querySelectorAll('.pipeline li').length"):
            problems.append(f"command menu navigation failed ({pg.url})")
        before = pg.evaluate("document.documentElement.dataset.mode")
        pg.click(".theme-toggle")
        pg.wait_for_timeout(900)
        if pg.evaluate("document.documentElement.dataset.mode") == before:
            problems.append("theme toggle did not switch")
        pg.screenshot(path=str(outdir / "project-after-theme.png"))
        if errs:
            problems.append(f"interaction errors: {errs}")
        browser.close()
    print("\n".join(problems) if problems else "ALL CHECKS PASSED")
    sys.exit(1 if problems else 0)


if __name__ == "__main__":
    main()
