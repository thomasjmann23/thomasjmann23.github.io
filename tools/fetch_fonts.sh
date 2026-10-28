#!/usr/bin/env bash
# Re-create assets/fonts/ from npm (Fontsource, OFL). Needed only when the site
# was restored from the Claude Project mirror, which can't store binary files.
set -e
cd "$(dirname "$0")/.."
TMP=$(mktemp -d); mkdir -p assets/fonts
( cd "$TMP" && npm pack @fontsource-variable/archivo@5.3.0 @fontsource/ibm-plex-mono@5.3.0 --silent >/dev/null && for f in *.tgz; do mkdir "${f%.tgz}"; tar xzf "$f" -C "${f%.tgz}"; done )
cp "$TMP"/fontsource-variable-archivo-*/package/files/archivo-latin-standard-normal.woff2 assets/fonts/archivo-var.woff2
cp "$TMP"/fontsource-ibm-plex-mono-*/package/files/ibm-plex-mono-latin-400-normal.woff2 assets/fonts/plex-mono-400.woff2
cp "$TMP"/fontsource-ibm-plex-mono-*/package/files/ibm-plex-mono-latin-500-normal.woff2 assets/fonts/plex-mono-500.woff2
cp "$TMP"/fontsource-variable-archivo-*/package/LICENSE assets/fonts/OFL-Archivo.txt
cp "$TMP"/fontsource-ibm-plex-mono-*/package/LICENSE assets/fonts/OFL-IBM-Plex-Mono.txt
ls -la assets/fonts
