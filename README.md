# thomasjmann23.github.io

Personal site of Thomas Jefferies Mann: https://thomasjmann23.github.io

- Plain HTML/CSS/JS, no build step. All resume content is in `content/resume.json`; `assets/js/site.js` renders every page from it.
- Research is published via `research/index.json` + Markdown. See `docs/RESEARCH_CONTRACT.md`.
- `tools/check.py`: browser checks for every page at 1440px and 390px.
- `tools/lighthouse.sh`: Lighthouse scores.
- `tools/build_preview.py`: builds a private Claude Artifact preview copy.
- Improved daily by Claude following `docs/DAILY_INSTRUCTIONS.md`; history in `docs/ITERATION_LOG.md`.
