#!/usr/bin/env python3
"""Split the Archivo variable font (Fontsource latin file) into two woff2 files.

  archivo-core.woff2  ASCII + the few extra characters the site really uses.
                      Preloaded on every page.
  archivo-ext.woff2   the rest of Latin-1 and typographic extras. Declared with
                      unicode-range, so the browser fetches it only when a page
                      contains one of those characters (e.g. an accented name
                      in a research article).

Usage: python3 tools/subset_fonts.py path/to/archivo-latin-standard-normal.woff2
Needs fonttools + brotli (pip install fonttools brotli). Both axes (wght 100-900,
wdth 62-125) are kept. If you add a character to CORE, update the unicode-range
lines in assets/css/style.css to match.
"""
import subprocess, sys
from pathlib import Path

CORE = "U+0020-007E,U+00A0,U+00A9,U+00B7,U+00D7,U+00E9,U+2013-2014,U+2018-2019,U+201C-201D,U+2022,U+2026,U+2212"
EXT = ("U+00A1-00A8,U+00AA-00B6,U+00B8-00D6,U+00D8-00E8,U+00EA-00FF,U+0131,U+0152-0153,"
       "U+02C6,U+02DA,U+02DC,U+201A,U+201E,U+2032-2033,U+2039-203A,U+2044,U+20AC,U+2122,U+2191,U+2193")
FEATURES = "kern,liga,tnum,pnum,mark,mkmk,rvrn,ccmp"

src = Path(sys.argv[1])
out = Path(__file__).resolve().parent.parent / "assets" / "fonts"
for name, uni in (("archivo-core.woff2", CORE), ("archivo-ext.woff2", EXT)):
    subprocess.run(["pyftsubset", str(src), f"--unicodes={uni}", f"--layout-features={FEATURES}",
                    "--flavor=woff2", f"--output-file={out / name}"], check=True)
    print(name, (out / name).stat().st_size, "bytes")
