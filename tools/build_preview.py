"""Build a private-preview copy of the site for publishing as a Claude Artifact.

    python tools/build_preview.py            -> writes preview/ (gitignored)

The Artifact host wraps the main page in its own <html>/<head>/<body>, so the
home page is stripped of those tags (its head contents and body contents are
kept). Every other file is copied unchanged; extra HTML pages are served as-is.
Prints the `files` map to pass to the Artifact tool.
"""
import json
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "preview"
# index.html itself is not listed: the host serves the main page (home.html) as index.html
FILES = ["work.html", "projects.html", "project.html", "research.html",
         "assets/css/style.css", "assets/js/site.js", "assets/favicon.svg",
         "assets/fonts/archivo-var.woff2", "assets/fonts/plex-mono-400.woff2", "assets/fonts/plex-mono-500.woff2",
         "content/resume.json", "research/index.json"]


def strip_document(html: str) -> str:
    head = re.search(r"<head>(.*?)</head>", html, re.S).group(1)
    head = re.sub(r'\s*<meta charset="utf-8">|\s*<meta name="viewport"[^>]*>', "", head)
    body_tag = re.search(r"<body([^>]*)>", html)
    page = re.search(r'data-page="([^"]+)"', body_tag.group(1)).group(1)
    body = re.search(r"<body[^>]*>(.*)</body>", html, re.S).group(1)
    head = re.sub(r"<title>.*?</title>", "<title>Thomas Mann Portfolio</title>", head)
    return f"{head.strip()}\n<script>document.body.dataset.page = '{page}';</script>\n{body.strip()}\n"


def main():
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir()
    for f in FILES:
        dst = OUT / f
        dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy(ROOT / f, dst)
    # research articles and their assets (index.json is already listed)
    for md in (ROOT / "research").rglob("*"):
        if md.is_dir() or md.name == "index.json" and md.parent.name == "research":
            continue
        rel = md.relative_to(ROOT)
        (OUT / rel).parent.mkdir(parents=True, exist_ok=True)
        shutil.copy(md, OUT / rel)
        FILES.append(str(rel))
    (OUT / "home.html").write_text(strip_document((ROOT / "index.html").read_text()))
    files = {f: f"preview/{f}" for f in FILES}
    print(json.dumps({"file_path": "preview/home.html", "files": files}, indent=2))


if __name__ == "__main__":
    main()
