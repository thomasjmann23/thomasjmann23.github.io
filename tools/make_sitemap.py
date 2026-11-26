"""Write sitemap.xml from the site's pages, resume.json projects and research/index.json.

    python3 tools/make_sitemap.py          # write sitemap.xml
    python3 tools/make_sitemap.py --check  # exit 1 if sitemap.xml is out of date

Re-run whenever a project or research study is added or removed (check.py fails if it's stale).
"""
import json
import sys
from pathlib import Path
from urllib.parse import quote
from xml.sax.saxutils import escape

ROOT = Path(__file__).resolve().parent.parent
SITE = "https://thomasjmann23.github.io/"


def build():
    data = json.loads((ROOT / "content/resume.json").read_text())
    studies = json.loads((ROOT / "research/index.json").read_text()).get("items", [])
    urls = [("", None), ("work.html", None), ("projects.html", None), ("research.html", None)]
    urls += [(f"project.html?id={quote(p['id'])}", None) for p in data["projects"]]
    urls += [(f"research.html?id={quote(s['id'])}", s.get("date")) for s in studies]
    rows = []
    for path, date in urls:
        lastmod = f"<lastmod>{escape(date)}</lastmod>" if date else ""
        rows.append(f"  <url><loc>{escape(SITE + path)}</loc>{lastmod}</url>")
    return ('<?xml version="1.0" encoding="UTF-8"?>\n'
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + "\n".join(rows) + "\n</urlset>\n")


def is_current():
    f = ROOT / "sitemap.xml"
    return f.exists() and f.read_text() == build()


if __name__ == "__main__":
    if "--check" in sys.argv:
        sys.exit(0 if is_current() else 1)
    (ROOT / "sitemap.xml").write_text(build())
    print("wrote sitemap.xml")
