# Iteration log

Newest first. One entry per run.

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
