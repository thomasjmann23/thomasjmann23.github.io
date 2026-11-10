"""Render the social preview image (assets/og.png, 1200x630) from content/resume.json.

    python3 tools/make_og.py

Uses the site's own self-hosted fonts and palette, so the card looks like the
site: stone paper, ink, one cobalt rule, Archivo's width axis. Re-run whenever
the name, headline or current role in resume.json changes.
Set PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers if Chromium lives there.
"""
import html
import json
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets/og.png"


def card(d):
    e = html.escape
    role = d["experience"][0]["role"]
    fonts = (ROOT / "assets/fonts").as_uri()
    return f"""<!doctype html><meta charset="utf-8"><style>
@font-face {{ font-family: A; src: url({fonts}/archivo-var.woff2); font-weight: 100 900; font-stretch: 62% 125%; }}
@font-face {{ font-family: M; src: url({fonts}/plex-mono-500.woff2); }}
* {{ margin: 0; box-sizing: border-box; }}
html, body {{ width: 1200px; height: 630px; }}
body {{ background: #e7e7e2; color: #16181c; font-family: A; padding: 56px 72px 52px;
  display: grid; grid-template-rows: auto 1fr auto; position: relative; overflow: hidden;
  /* ledger: faint horizontal rules, like a credit file worksheet */
  background-image: repeating-linear-gradient(to bottom, transparent 0 41px, rgba(22,24,28,.06) 41px 42px); }}
.row {{ display: flex; justify-content: space-between; font-family: M; font-size: 19px; letter-spacing: .08em;
  text-transform: uppercase; color: #50555d; padding-bottom: 16px; border-bottom: 1px solid rgba(22,24,28,.3); }}
.mid {{ align-self: end; padding-bottom: 40px; }}
h1 {{ font-size: 150px; line-height: .86; font-weight: 820; font-stretch: 125%; letter-spacing: -.02em; }}
.rule {{ width: 300px; height: 6px; background: #2346d8; margin: 30px 0 26px; border-radius: 3px; }}
p {{ font-size: 44px; font-weight: 330; font-stretch: 72%; line-height: 1.1; max-width: 900px; }}
.foot {{ border-top: 1px solid rgba(22,24,28,.3); border-bottom: 0; padding: 16px 0 0; }}
.foot b {{ color: #2346d8; font-weight: inherit; }}
</style>
<div class="row"><span>{e(d["name"])}</span><span>{e(d["location"])}</span></div>
<div class="mid"><h1>{e(d["shortName"])}</h1><div class="rule"></div><p>{e(d["headline"])}.</p></div>
<div class="row foot"><span>{e(role)}</span><span><b>thomasjmann23.github.io</b></span></div>
"""


def main():
    d = json.loads((ROOT / "content/resume.json").read_text())
    src = ROOT / "tools/.og.html"
    src.write_text(card(d))
    try:
        with sync_playwright() as p:
            b = p.chromium.launch()
            pg = b.new_page(viewport={"width": 1200, "height": 630})
            pg.goto(src.as_uri())
            pg.evaluate("document.fonts.ready")
            pg.screenshot(path=str(OUT))
            b.close()
    finally:
        src.unlink(missing_ok=True)
    print(f"wrote {OUT.relative_to(ROOT)} ({OUT.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
