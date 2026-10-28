# Research section: how to publish a study

Another agent (or Thomas) publishes research to this site. The site picks it up automatically: no HTML changes needed.

## Files
```
research/
  index.json                 list of studies (the site reads this)
  <id>/index.md              the article, in Markdown
  <id>/<images or data>      optional assets referenced from the article (relative paths)
```

## index.json
```json
{
  "items": [
    {
      "id": "llm-credit-memo-accuracy",
      "title": "How accurate are LLM-drafted credit memos?",
      "date": "2026-11-15",
      "status": "Complete",
      "summary": "One or two sentences shown on the card and under the title.",
      "tags": ["Credit", "LLMs", "Evaluation"],
      "file": "research/llm-credit-memo-accuracy/index.md"
    }
  ]
}
```
- `id`: lowercase letters, digits and hyphens; unique; stable (it's in the URL `research.html?id=<id>`).
- Newest first. `status` is free text, e.g. "Complete", "In progress", "Working paper".
- `file` is a path relative to the site root.

## Article Markdown
- Standard Markdown (rendered with `marked`, sanitised with DOMPurify, so no scripts or iframes).
- Start with the body; the page already shows title, date and summary. Use `##` and `###` for sections.
- Tables, code blocks, blockquotes and images work. Image paths are relative to the site root (e.g. `research/<id>/chart.svg`). Prefer SVG or compressed PNG/WebP; keep each study's assets under ~500 KB.

## Rules
- Same content rules as the rest of the site (`docs/DAILY_INSTRUCTIONS.md`): true, no confidential employer or client data, no personal info beyond what's allowed.
- Publish through a PR to `main`. Run `python3 tools/check.py` and open `research.html?id=<id>` in the screenshots before merging.
- After merging, republish the private preview (`python3 tools/build_preview.py`, which includes research Markdown files).
