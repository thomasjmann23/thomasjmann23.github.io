#!/usr/bin/env bash
# Lighthouse (mobile) against a local server or a URL. Usage: bash tools/lighthouse.sh [url]
set -e
cd "$(dirname "$0")/.."
URL="${1:-}"
if [ -z "$URL" ]; then
  python3 -m http.server 8799 >/dev/null 2>&1 & SRV=$!; trap 'kill $SRV' EXIT; sleep 1
  URL="http://127.0.0.1:8799/"
fi
CHROME=$(ls /opt/pw-browsers/chromium-*/chrome-linux64/chrome 2>/dev/null | head -1)
OUT=$(mktemp -d)/lh.json
CHROME_PATH="$CHROME" npx --yes lighthouse@12 "$URL" --quiet --chrome-flags="--headless=new --no-sandbox" --output=json --output-path="$OUT" >/dev/null 2>&1
python3 -c "
import json,sys; d=json.load(open('$OUT'))
s={k:round(v['score']*100) for k,v in d['categories'].items()}; print(s)
# SEO is capped while the site is noindex (private preview); ignore it until launch
noindex='noindex' in open('index.html').read()
ok=all(v>=90 for k,v in s.items() if not (k=='seo' and noindex))
print('SEO ignored: noindex is on' if noindex else '')
sys.exit(0 if ok else 1)"
