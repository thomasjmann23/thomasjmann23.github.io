"""Render the downloadable résumé (assets/thomas-mann-resume.pdf) from content/resume.json.

    python3 tools/make_resume_pdf.py

One A4 page, set in the site's own self-hosted fonts (Archivo's width axis for
the name and headings, IBM Plex Mono for dates and labels) so the PDF reads as
part of the site, printed. Every word comes from resume.json: no phone number,
no street address, no repo links (the repos are private). Links are live in
the PDF.

Writes tools/resume_pdf.stamp (sha256 of resume.json); tools/check.py fails
when resume.json changes without the PDF being regenerated.
Set PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers if Chromium lives there.
"""
import hashlib
import html
import json
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets/thomas-mann-resume.pdf"
STAMP = ROOT / "tools/resume_pdf.stamp"
SITE = "https://thomasjmann23.github.io/"


def e(s):
    return html.escape(str(s))


def bare(url):
    return url.split("://", 1)[-1].rstrip("/")


def doc(d):
    fonts = (ROOT / "assets/fonts").as_uri()
    c = d["contact"]

    jobs = []
    for x in d["experience"]:
        earlier = ""
        if x.get("story"):
            roles = [r for s in x["story"] for r in s["roles"] if r != x["role"]]
            if roles:
                earlier = f'<p class="earlier">Earlier at the bank: {" → ".join(e(r) for r in roles)}</p>'
        award = f'<p class="award">{e(x["award"])}</p>' if x.get("award") else ""
        items = "".join(f"<li>{e(h)}</li>" for h in x["highlights"])
        jobs.append(f"""<article class="job">
  <div class="when">{e(x["start"])} – {e(x["end"])}<br>{e(x["place"])}</div>
  <div><h3>{e(x["role"])} <span class="org">{e(x["org"])}</span></h3>{earlier}<ul>{items}</ul>{award}</div>
</article>""")

    edu = "".join(f"""<article class="job">
  <div class="when">{e(x["start"])} – {e(x["end"])}<br>{e(x["place"])}</div>
  <div><h3>{e(x["degree"])} <span class="org">{e(x["school"])}</span></h3><p class="detail">{e(x["detail"])}</p></div>
</article>""" for x in d["education"])

    feat = [p for p in d["projects"] if p.get("featured")]
    projects = "".join(
        f'<li><a href="{SITE}project.html?id={e(p["id"])}"><b>{e(p["name"])}</b></a> {e(p["tagline"])}. '
        f'<span class="tools">{e(", ".join(p["skills"][:4]))}</span></li>' for p in feat)

    skills = "".join(f"<dt>{e(k)}</dt><dd>{e(', '.join(v))}</dd>" for k, v in d["skills"].items())
    extras = "".join(f"<li>{e(x)}</li>" for x in d["extras"])
    focus = " · ".join(e(f) for f in d["focus"])

    return f"""<!doctype html><html lang="en"><meta charset="utf-8"><title>{e(d["name"])}, résumé</title><style>
@font-face {{ font-family: A; src: url({fonts}/archivo-core.woff2); font-weight: 100 900; font-stretch: 62% 125%; }}
@font-face {{ font-family: A; src: url({fonts}/archivo-ext.woff2); font-weight: 100 900; font-stretch: 62% 125%; unicode-range: U+80-FF, U+2000-206F, U+20AC, U+2122, U+2190-21FF; }}
@font-face {{ font-family: M; src: url({fonts}/plex-mono-400-core.woff2); font-weight: 400; }}
@font-face {{ font-family: M; src: url({fonts}/plex-mono-400-ext.woff2); font-weight: 400; unicode-range: U+80-FF, U+2000-206F, U+20AC, U+2122, U+2190-21FF; }}
@font-face {{ font-family: M; src: url({fonts}/plex-mono-500-core.woff2); font-weight: 500; }}
@font-face {{ font-family: M; src: url({fonts}/plex-mono-500-ext.woff2); font-weight: 500; unicode-range: U+80-FF, U+2000-206F, U+20AC, U+2122, U+2190-21FF; }}
@page {{ size: A4; margin: 11mm 15mm 10mm; }}
* {{ margin: 0; padding: 0; box-sizing: border-box; }}
body {{ font: 400 8.9pt/1.36 A; color: #16181c; font-stretch: 100%; word-spacing: .04em; }}
a {{ color: inherit; text-decoration: none; }}
header {{ display: grid; grid-template-columns: 1fr auto; align-items: end; gap: 6mm; }}
h1 {{ font-size: 24pt; line-height: .95; font-weight: 800; font-stretch: 116%; white-space: nowrap; letter-spacing: -.02em; }}
.role {{ margin-top: 2.2mm; font-size: 12pt; font-weight: 340; font-stretch: 74%; }}
.contact {{ font: 400 7.6pt/1.6 M; text-align: right; color: #3d4148; }}
.contact a {{ color: #2346d8; }}
.rule {{ height: 1.4mm; width: 46mm; background: #2346d8; border-radius: .7mm; margin: 3.2mm 0 3mm; }}
.summary {{ font-size: 9.6pt; line-height: 1.42; max-width: 165mm; }}
.focus {{ margin-top: 1.6mm; font: 400 7.4pt M; letter-spacing: .04em; text-transform: uppercase; color: #50555d; }}
h2 {{ font: 500 7.4pt M; letter-spacing: .1em; text-transform: uppercase; color: #50555d;
  border-bottom: .3mm solid #16181c; padding-bottom: 1.2mm; margin: 3.8mm 0 1.8mm; }}
.job {{ display: grid; grid-template-columns: 34mm 1fr; gap: 3mm; padding: 1mm 0 1.4mm; break-inside: avoid; }}
.job + .job {{ border-top: .2mm solid #c9c9c2; padding-top: 1.6mm; }}
.when {{ font: 400 7.4pt/1.5 M; color: #50555d; padding-top: .6mm; }}
h3 {{ font-size: 10.4pt; font-weight: 700; font-stretch: 108%; line-height: 1.2; }}
h3 .org {{ font-weight: 380; font-stretch: 80%; color: #3d4148; margin-left: 1mm; }}
.earlier, .detail {{ margin-top: .6mm; color: #3d4148; font-stretch: 88%; }}
ul {{ list-style: none; margin-top: 1mm; }}
.job li {{ position: relative; padding-left: 3.6mm; margin-top: .3mm; }}
.job li::before {{ content: ""; position: absolute; left: 0; top: .62em; width: 1.8mm; height: .25mm; background: #2346d8; }}
.award {{ margin-top: 1mm; font: 500 7.6pt M; color: #2346d8; letter-spacing: .03em; }}
.cols {{ display: grid; grid-template-columns: 1fr 1fr; gap: 0 8mm; }}
.projects li {{ margin-top: 1.1mm; }}
.projects b {{ font-weight: 700; font-stretch: 104%; color: #2346d8; }}
.tools {{ font: 400 7pt M; color: #50555d; }}
dl {{ display: grid; grid-template-columns: 22mm 1fr; gap: 1mm 3mm; }}
dt {{ font: 500 7.2pt/1.7 M; color: #50555d; }}
.extras li {{ margin-top: 1mm; }}
footer {{ margin-top: 3mm; padding-top: 1.6mm; border-top: .2mm solid #c9c9c2; font: 400 6.8pt M; color: #6a6f77;
  display: flex; justify-content: space-between; }}
</style>
<header>
  <div><h1>{e(d["name"])}</h1><p class="role">{e(d["title"])} · {e(d["location"])}</p></div>
  <p class="contact"><a href="mailto:{e(c["email"])}">{e(c["email"])}</a><br>
    <a href="{e(c["linkedin"])}">{e(bare(c["linkedin"]))}</a><br><a href="{SITE}">{e(bare(SITE))}</a></p>
</header>
<div class="rule"></div>
<p class="summary">{e(d["summary"])}</p>
<p class="focus">{focus}</p>
<h2>Experience</h2>
{"".join(jobs)}
<h2>Education</h2>
{edu}
<div class="cols">
  <section><h2>Selected projects</h2><ul class="projects">{projects}</ul>
    <h2>Also</h2><ul class="extras">{extras}</ul></section>
  <section><h2>Skills</h2><dl>{skills}</dl></section>
</div>
<footer><span>{e(d["name"])} · résumé</span><span>Projects, demos and research: {e(bare(SITE))}</span></footer>
</html>"""


def main():
    raw = (ROOT / "content/resume.json").read_bytes()
    d = json.loads(raw)
    src = ROOT / "tools/.resume.html"
    src.write_text(doc(d))
    try:
        with sync_playwright() as p:
            b = p.chromium.launch()
            pg = b.new_page()
            pg.goto(src.as_uri())
            pg.evaluate("document.fonts.ready")
            pg.emulate_media(media="print")
            pg.pdf(path=str(OUT), format="A4", print_background=True, prefer_css_page_size=True)
            b.close()
    finally:
        src.unlink(missing_ok=True)
    STAMP.write_text(hashlib.sha256(raw).hexdigest() + "\n")
    print(f"wrote {OUT.relative_to(ROOT)} ({OUT.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
