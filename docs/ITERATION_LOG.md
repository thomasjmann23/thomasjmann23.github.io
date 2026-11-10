# Iteration log

Newest first. One entry per run.

## 2026-11-10 — Research: OCR spreading tools vs LLMs
- **What:** Published the first research paper, `research.html?id=ocr-spreading-vs-llm-extraction` (about 5,000 words, 5 hand-drawn SVG figures, 46 sources). Compares dedicated auto-spreading tools (Moody's, nCino, Abrigo, FlashSpread, Baker Hill) with general LLM extraction on accuracy, failure modes, auditability, cost and validation. Queue item checked off.
- **Checks:** tools/check.py all pages: pass. Article opened at 1440 and 390: figures, table and sources render, no horizontal overflow (long source URLs carry `<wbr>` break hints).
- **Notes:** "FlashSpreads" was not found under that name; treated as FlashSpread (BeSmartee). Vendor accuracy figures are self-reported and labelled as such.

## 2026-11-10 — Inbox triage first in the lab
- **What:** Thomas asked to prioritize Inbox triage over 8-K alerts until 8-K uses real data. Inbox is now the first, default tab; 8-K is second. Rule added to DAILY_INSTRUCTIONS.md.
- **Checks:** tools/check.py all pages: pass. Verified Inbox is selected and running on load, 8-K panel hidden.

## 2026-11-10 — Drawn arrows (second run, test fire)
- **Category:** design polish
- **What:** → ← ↗ aren't in the Archivo or Plex Mono subsets (checked the cmaps), so every arrow on the site fell back to a system font. They are now drawn: a 16px stroke SVG (`arrow()` in site.js, two static ones in index.html) for buttons, card links, back links, pager and inbox verdicts; a CSS mask (`--arrow-r`) for the pipeline steps on cards and the role ladder on work.html. Strokes follow `currentColor`, so hover colours and nudges still work; forced-colors fallback added. Fixed `.pager a span` so it no longer catches the arrow span.
- **Checks:** tools/check.py all pages at 1440/390: pass. Screenshots of buttons, cards, pager, back link, inbox verdict and work ladder reviewed in light and dark.
- **Preview:** not republished (optional).
- **Suggested next:** content & story, backlog #1: the underwriter → builder scroll story on work.html.

## 2026-11-10 — Social preview + structured data
- **Category:** SEO/meta/social preview
- **What:** Link previews now show a card in the site's own style (stone paper, ledger rules, Archivo at full width, one cobalt rule, Plex Mono labels): `assets/og.png`, 1200×630, rendered from resume.json by `tools/make_og.py` (re-run if name, headline or role change). All pages get og:image (+ size, alt), og:url, og:site_name and `twitter:card` summary_large_image. Home adds a schema.org `Person` JSON-LD block built in site.js from resume.json (name, role, employer, location, schools, focus, LinkedIn); no facts hard-coded.
- **PR:** see the PR for this branch (daily/2026-11-10-social-preview).
- **Checks:** tools/check.py all pages at 1440/390: pass. Lighthouse home (mobile): Performance 98, Accessibility 100, Best Practices 100, SEO 100.
- **Preview:** not republished (optional now that the site is live).
- **Suggested next:** design polish, backlog #9: draw the → arrows as inline SVG (they fall outside the Archivo subset), or content & story #1: the underwriter → builder scroll story on work.html.

## 2026-11-10 — Recover unpushed drafts
- **What:** Daily runs since Oct 28 couldn't push to the repo, so their work only reached the private preview. Restored it from the preview into the repo: card ⇄ detail view-transition morph (backlog #1), "The lab" tabs on the home demo with a new Inbox triage demo, and command-menu accessibility (empty state, live status, help text).
- **Checks:** tools/check.py all pages at 1440/390: pass.

## 2026-10-28 — Go live (setup, part 4)
- **What:** Thomas chose to make only this site repo public. Removed `noindex`, enabled GitHub Pages from `main`. History squashed to one commit before going public. Other repos stay private.

## 2026-10-28 — Redesign: organic, not AI-generated (setup, part 3)
- **Category:** design polish
- **Context:** Thomas said the look (serif accent, Geist, near-black + mint) "screams Claude" and asked for something organic, natural, but cutting edge.
- **What:** New identity, "a credit file, not a startup landing page": Archivo variable font with the width axis as the signature (name stretches open on load, headings widen on hover), IBM Plex Mono for figures; stone paper + ink + cobalt; paper grain; hairline rules instead of cards; flat nav. Removed particle canvas, cursor spotlight, glows, typing ticker, glass nav. Theme now follows the system. Fonts self-hosted and preloaded (Google Fonts removed). Design rules added to DAILY_INSTRUCTIONS.md.
- **Checks:** tools/check.py all pages: pass. Lighthouse home: Performance 98, Accessibility 100, Best Practices 100 (SEO ignored, noindex).
- **Preview:** republished (version 2).
- **Suggested next:** backlog #1, card → detail morph.

## 2026-10-28 — v2: multi-page site with page transitions (setup, part 2)
- **Category:** setup / motion & transitions
- **Context:** Thomas asked for lockdown (all repos private), official title AVP Credit Data Scientist, a much more high-tech site with the best page transitions, and permission to use Gmail/Drive for facts.
- **What:** Rebuilt as 5 pages (home, work, projects, project detail, research) rendered from resume.json. Cross-document View Transitions with shared elements (nav, brand, page title, project title morphs card → detail), speculation-rules prerendering, circular theme-switch reveal, ⌘K command menu, drifting "embedding field" canvas background, pointer-spotlight panels, scroll-driven reveals, typing ticker, count-up stats. Dark-first theme. Research section with a contract for the research agent (`docs/RESEARCH_CONTRACT.md`), Markdown rendered with marked + DOMPurify.
- **Content:** added facts from Thomas's "Resume - Current" (Drive): role progression at the bank, SBA 7(a) underwriting, Zions internship, Wildhorn dates, IE coursework, extra skills. Repo links removed (repos going private).
- **Checks:** tools/check.py all pages at 1440/390: pass (CLS ≤ 0.006). Lighthouse home: Performance 100, Accessibility 100, Best Practices 100 (SEO 63 only because of noindex). Cross-page transitions verified firing (type "page").
- **Preview:** published private Artifact https://claude.ai/artifact/NRC5hueE4maVQSaUn6o2Pa
- **Lockdown done (same day):** all 12 public repos made private and the private site repo created, via Thomas's signed-in desktop browser (repo settings can't be changed from the cloud workspace). Verified via the API.
- **Suggested next:** backlog #1, full card → detail morph.

## 2026-10-28 — Initial build
- First single-page version with the 8-K triage demo. Superseded by v2 the same day.
