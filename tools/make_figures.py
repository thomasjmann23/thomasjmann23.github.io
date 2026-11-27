"""Write research/figures.json: the pixel size of every image a research article uses.

    python3 tools/make_figures.py          # write research/figures.json
    python3 tools/make_figures.py --check  # exit 1 if it's out of date

site.js reads it alongside an article's Markdown and gives each <img> its width and
height before the body is laid out, so figures reserve their space and nothing below
them moves when they load (and they can lazy-load). Re-run when a study's images
change; check.py fails if it's stale.
"""
import json
import re
import struct
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "research/figures.json"
IMG = re.compile(r'!\[[^\]]*\]\(\s*<?([^)\s>]+)>?(?:\s+"[^"]*")?\s*\)|<img\b[^>]*\bsrc=["\']([^"\']+)["\']', re.I)


def svg_size(text):
    head = text[: text.find(">", text.find("<svg")) + 1]
    vb = re.search(r'viewBox=["\']\s*[-\d.]+[\s,]+[-\d.]+[\s,]+([\d.]+)[\s,]+([\d.]+)', head)
    if vb:
        return float(vb.group(1)), float(vb.group(2))
    w = re.search(r'\bwidth=["\']([\d.]+)(?:px)?["\']', head)
    h = re.search(r'\bheight=["\']([\d.]+)(?:px)?["\']', head)
    return (float(w.group(1)), float(h.group(1))) if w and h else None


def raster_size(b):
    if b[:8] == b"\x89PNG\r\n\x1a\n":
        return struct.unpack(">II", b[16:24])
    if b[:4] == b"RIFF" and b[8:12] == b"WEBP":
        kind = b[12:16]
        if kind == b"VP8X":
            return 1 + int.from_bytes(b[24:27], "little"), 1 + int.from_bytes(b[27:30], "little")
        if kind == b"VP8 ":
            w, h = struct.unpack("<HH", b[26:30])
            return w & 0x3FFF, h & 0x3FFF
        if kind == b"VP8L":
            n = int.from_bytes(b[21:25], "little")
            return (n & 0x3FFF) + 1, ((n >> 14) & 0x3FFF) + 1
    if b[:2] == b"\xff\xd8":
        i = 2
        while i < len(b) - 9:
            if b[i] != 0xFF:
                i += 1
                continue
            m = b[i + 1]
            if 0xC0 <= m <= 0xCF and m not in (0xC4, 0xC8, 0xCC):
                h, w = struct.unpack(">HH", b[i + 5:i + 9])
                return w, h
            i += 2 + struct.unpack(">H", b[i + 2:i + 4])[0]
    return None


def size(path):
    if path.suffix.lower() == ".svg":
        return svg_size(path.read_text(errors="replace"))
    return raster_size(path.read_bytes())


def build():
    studies = json.loads((ROOT / "research/index.json").read_text()).get("items", [])
    dims = {}
    for s in studies:
        md = ROOT / s.get("file", "")
        if not md.is_file():
            continue
        for m in IMG.finditer(md.read_text()):
            src = (m.group(1) or m.group(2)).split("#")[0].split("?")[0]
            if "://" in src or src.startswith("data:"):
                continue
            f = (ROOT / src).resolve()
            if f.is_file() and ROOT in f.parents and (wh := size(f)):
                dims[src] = [round(wh[0]), round(wh[1])]
    rows = [f"  {json.dumps(k)}: [{w}, {h}]" for k, (w, h) in sorted(dims.items())]
    return "{\n" + ",\n".join(rows) + "\n}\n"


def is_current():
    return OUT.exists() and OUT.read_text() == build()


if __name__ == "__main__":
    if "--check" in sys.argv:
        sys.exit(0 if is_current() else 1)
    OUT.write_text(build())
    print(f"wrote {OUT.relative_to(ROOT)} ({len(json.loads(OUT.read_text()))} images)")
