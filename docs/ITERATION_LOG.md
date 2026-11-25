# Iteration log

Newest first. One entry per run.

## 2026-11-25 — "Let's talk." opens on the width axis as it scrolls in
- **Category:** motion & transitions (backlog #4)
- **What:** The home page's closing heading now has its own scroll-driven moment: as "Let's talk." rises from the bottom edge it opens from condensed and light (62%, weight 500) to its full wide, heavy setting (125% desktop / 90% phone, weight 750), finishing 240px of scroll later. It uses the heading's own `view()` timeline, so on desktop (where the heading is bottom-aligned in its block) the motion happens while it is actually on screen; at the end of the page the heading sits about 300px (desktop) / 560px (phone) above the bottom edge, so it always completes. The heading's box doesn't change height, so nothing moves around it. Pure CSS; without `animation-timeline` support or under reduced motion it is static at full width, and it is readable at every point of the animation.
- **PR:** see the PR for daily/2026-11-25-lets-talk-width.
- **Checks:** tools/check.py all pages at 1440/390: ALL CHECKS PASSED (home CLS 0.001 / 0.001). Extra Playwright pass at 1440×900, 1440×1400, 1024×768 and 390×844: stretch measured at 40/120/200/280 px into the scroll and at the page end (completes at every size; heading height constant); reduced motion stays at full width. Mid-scroll and end screenshots reviewed. Full-page screenshots show the heading condensed (they're captured from the top of the page). No new controls; colours unchanged (contrast unchanged). Lighthouse not re-run (CSS-only motion).
- **Preview:** not republished (optional).
- **Suggested next:** performance (backlog #3, SVG figure dimensions) or SEO/meta (backlog #4), which haven't run for a while; content #1 needs repo access beyond this site's repo.

## 2026-11-25 — Research: AI-forged documents in small-business lending
- **Category:** research (scheduled research task)
- **What:** New study `ai-forged-documents-small-business-lending` (~5,400 words, 33 sources, 4 SVG figures, 1 table): FinCEN's deepfake alert and FBI warning; vendor-reported fraud rates (Inscribe, Resistant AI, Ocrolus) and why they are not comparable; the shift to template and serial fraud; the only controlled test of human reviewers (Ren et al., 2026); detection methods and DocTamper; the CBA case; SOP 50 10 8.1 tax-transcript rules, SBA OIG 26-12 and GAO-27-107701; implications for lenders. Queue was empty, so the run chose the topic and listed two further proposals in the queue.
- **Checks:** tools/check.py ALL CHECKS PASSED (article at 1440/390); figures and table inspected at both widths.

## 2026-11-24 — Contact block: one button row, heading on the baseline
- **Category:** design polish (backlog #3, then a polish fix)
- **Grain seam (backlog #3):** checked in real scrolling with Playwright at 390 and 1440 on the longest article (top, middle, bottom): the fixed grain covers every viewport evenly. The seam only appears in `full_page` screenshots, which paint fixed layers once over the first viewport. Not visible to visitors; closed with no change.
- **What:** The home "Let's talk." block was unbalanced on desktop: the right column (0.8fr) was too narrow for the four buttons, so "Résumé" wrapped onto a second row, and the empty copy-status line reserved space under it, so the heading (bottom-aligned) floated well below the buttons. Now the two columns are equal, all four buttons sit on one row at 1100 px and up, and the copy confirmation is positioned just under the buttons without reserving space, so the bottom of "Let's talk." lines up with the button row. Also fixed a specificity bug: `.contact p` was overriding the confirmation's 13 px mono size with 17 px. Phone layout unchanged apart from the status line.
- **PR:** see the PR for daily/2026-11-24-contact-layout.
- **Checks:** tools/check.py all pages at 1440/390: ALL CHECKS PASSED (home CLS 0.001/0.002). Contact block screenshotted at 1440 light, 1100 dark and 390 light after clicking Copy email: buttons on one row (desktop), confirmation 13 px mono under the buttons, nothing overlapping. No new controls (keyboard unchanged); colours unchanged (contrast unchanged). Lighthouse not re-run (CSS-only layout change).
- **Preview:** not republished (optional).
- **Suggested next:** content & story or project showcases (backlog #1/#2 need repo access beyond this site's repo, so may need Thomas), otherwise performance #4 or a new motion idea: "Let's talk." opening on the width axis as it scrolls in.

## 2026-11-23 — Research articles: no footer jump, body sooner
- **Category:** performance (backlog #3)
- **What:** While a research article's Markdown loads, the body (`.prose[aria-busy="true"]`) now reserves a full screen of height (`100svh`), so the footer stays below the fold and nothing visible moves when the text lands; `aria-busy` is removed once it renders (or fails). The "Loading…" placeholder is a quiet mono line. marked and DOMPurify (cdnjs) now start downloading as soon as `site.js` runs on an article URL, in parallel with resume.json and research/index.json, instead of only after both had arrived. A missing article file (non-2xx) now shows "Could not load this article." instead of rendering the 404 page as Markdown.
- **PR:** see the PR for daily/2026-11-23-article-cls.
- **Checks:** tools/check.py all pages at 1440/390: ALL CHECKS PASSED (article CLS 0.000 at both widths). Extra Playwright pass on all six articles at 390/1440, with and without 300 ms added latency on the Markdown and CDN scripts, and a step-scroll with delayed SVG figures: CLS 0 everywhere (was 0.014–0.042 on four articles on phones, all from the footer). With 300 ms latency on the JSON and CDN requests, time to article body on a phone: median 2029 ms → 1599 ms. Loading and failure states screenshotted (footer 1551 px down on an 844 px screen). Lighthouse (mobile) on an article: Performance 97 (was 96), Accessibility 100, Best Practices 100, SEO 100.
- **Preview:** not republished (optional).
- **Suggested next:** design polish, backlog #3 (grain seam in tall screenshots), or content #1.

## 2026-11-22 — Deep links and command-menu entries for the lab
- **Category:** interactivity (backlog #3)
- **What:** Each lab tab now has a deep link: `index.html#lab-inbox`, `#lab-8k`, `#lab-policy`. Opening one selects that tab before the page is revealed (no flash of the default tab) and scrolls the lab into view only as far as needed (`block: 'nearest'`, so on desktop nothing moves). Picking a tab by click or arrow keys updates the address with `replaceState`, so a shared link opens the same demo; with no hash, Inbox triage stays the default. The command menu gets three entries ("The lab: Inbox triage / 8-K alerts / AI use check", tagged "demo", searchable by e.g. "governance", "sec", "triage"): on the home page they switch the tab in place, scroll smoothly (instant under reduced motion) and move focus to the tab, which the menu no longer pulls back to its opener; on other pages they navigate to the deep link. Unknown hashes are ignored.
- **PR:** see the PR for daily/2026-11-22-lab-deep-links.
- **Checks:** tools/check.py all pages at 1440/390: ALL CHECKS PASSED (home CLS 0.001 / 0.003). Extra Playwright pass at 1440/390, with and without reduced motion: `index.html#lab-policy` opens on AI use check with the lab in view; ⌘K "8-K alerts" from Work lands on `index.html#lab-8k` with that tab open; ⌘K "ai use check" on home switches the tab, focus lands on the tab (Pause hidden as before), ArrowLeft moves to 8-K and updates the hash; no console errors. Phone screenshot of the deep link reviewed. Lighthouse not re-run (no loading or asset changes).
- **Preview:** not republished (optional).
- **Suggested next:** performance, backlog #3 (reserve space for the research article body so the footer doesn't shift on phones), or content #1.

## 2026-11-22 — Research: AI and small-business borrower information
- **Category:** research (scheduled research task)
- **What:** New study `small-business-borrower-information-ai` (~6,100 words, 37 sources, 4 SVG figures, 2 tables): what general chatbots, marketplaces (Lendio, Nav), accounting-platform AI (QuickBooks Capital in ChatGPT and Claude), lenders' own assistants and SBA Lender Match let small-business owners learn about loan options, pricing and eligibility; the Fed's evidence on cost surprises (2025 SBCS) and opaque online-lender disclosures (2019); the 2026 Regulation B changes (effects test removed, discouragement limited to statements) and revised Section 1071 (no pricing data, 2028); state commercial financing disclosure laws (APR only in California); and model accuracy and bias studies. Added to the top of research/index.json; queue item checked off (queue now empty).
- **Checks:** see the PR for research/small-business-borrower-information-ai.

## 2026-11-21 — Research article titles set word by word
- **Category:** motion & transitions (backlog #3)
- **What:** Research article titles now get the same entrance as the page titles: each word rises out of a clipped line and opens from condensed (62%) to full width on Archivo's width axis, with width locks so nothing reflows and an `.sr-only` copy for screen readers. The article h1 keeps its `r-<id>` name, so when you open a study from the Research list the card title still morphs into the header and the word reveal is skipped (the morph is the entrance; checked with `navigation.activation.from`, falling back to `document.referrer`, and evaluated at reveal time so prerendered pages decide on activation). Reached any other way (direct link, command menu, another page) the words set in. Reduced motion: no split. `tools/check.py` now also checks the newest research article at 1440/390.
- **PR:** see the PR for daily/2026-11-21-article-title-reveal.
- **Checks:** tools/check.py all pages (now incl. an article) at 1440/390: ALL CHECKS PASSED. Extra Playwright pass on all five articles, light/dark, 1440/390: no console errors, no horizontal overflow, width locks released at rest, one h1, sr-only text matches the title. List → article click: morph runs, no reveal; work → article: reveal runs. Screenshots mid-reveal and at rest reviewed (descenders intact). The article's phone CLS of 0.042 is pre-existing (footer moves when the markdown arrives; same on main). Lighthouse not re-run (no loading or asset changes).
- **Preview:** not republished (optional).
- **Suggested next:** interactivity, backlog #3 (command menu entry for the AI use check), or performance/design polish: reserve space for the article body so the footer doesn't shift on phones.

## 2026-11-20 — Skill filter: matches first, set-aside instead of faded
- **Category:** accessibility (backlog #4)
- **What:** On Projects, picking a skill used to fade non-matching projects to 22% opacity: screen readers read them as normal, and the faded text (still live links) failed contrast (axe: 54 colour-contrast failures per theme/width with a filter on). Now: (1) matching projects move to the front of each list (featured and "At the bank"), so tab order and reading order follow; they slide into place with a FLIP on the independent `translate` property (doesn't fight the scroll-reveal transform), instant under reduced motion. (2) Non-matches are "set aside" rather than faded: text drops to the faint ink, the title condenses on Archivo's width axis (74%, weight 500; opens back to 100% on hover/focus) and their chips go dashed, all within AA. (3) Each item starts with a visually hidden note, so a filtered-out link reads "Doesn't use LLM integration: SBA FOIA Analyzer…". (4) The matching skill chip is inked cobalt in each match (Highlight in forced colours). (5) The status line now says "LLM integration · 5 of 11 projects, shown first · used at …". "All" restores the original order.
- **PR:** see the PR for daily/2026-11-20-filter-a11y.
- **Checks:** tools/check.py all pages at 1440/390: ALL CHECKS PASSED. axe-core 4.10 on Projects with a filter on, light/dark, 1440/390: 0 violations (was 54 contrast failures each). axe on all five research articles (light/dark, 1440): 0 violations. `?skill=OCR` deep link: CLS 0, no console errors. Keyboard: pills operable with Enter/Space, focus stays on the pill. Reduced motion: no slide. Screenshots of the filtered state reviewed (light 1440, dark 390). Lighthouse not re-run (no loading or asset changes).
- **Preview:** not republished (optional).
- **Suggested next:** motion & transitions, backlog #2 (research article titles get the word reveal), or interactivity #4 (command menu entry for the AI use check).

## 2026-11-19 — IBM Plex Mono split into core + extended
- **Category:** performance (backlog #4)
- **What:** `tools/subset_fonts.py` now splits IBM Plex Mono 400 and 500 the same way as Archivo: `plex-mono-{400,500}-core.woff2` (ASCII + the site's few extras, plus ↑↓ for the command menu's "move" hint, about 7.8 KB each) and `plex-mono-{400,500}-ext.woff2` (rest of Latin-1, about 7.2 KB each, fetched only via `unicode-range`). Every page now loads about 15.6 KB of mono font instead of 29.6 KB. A Playwright scan of every page, project page, research article and lab tab found no mono character outside core, so today no page fetches ext. Archivo output is byte-identical to before (script re-run from the same Fontsource source). `style.css`, `fetch_fonts.sh`, `build_preview.py`, `make_resume_pdf.py` and `make_og.py` point at the new files.
- **PR:** see the PR for daily/2026-11-19-plex-subset.
- **Checks:** tools/check.py all pages at 1440/390: ALL CHECKS PASSED. Screenshots of work, projects, a project page, the research list and an article are pixel-identical to main (light/dark, 1440/390, reduced motion); the command menu (with its ↑↓ hint) loads only core; injecting "Café € Zürich" in mono pulls in ext. Résumé PDF and OG image regenerated with the new files render identically (committed PDF left as is). Lighthouse home (mobile): Performance 98, Accessibility 100, Best Practices 100, SEO 100.
- **Preview:** not republished (optional).
- **Suggested next:** motion & transitions, backlog #2 (research article titles get the word reveal), or accessibility #4.

## 2026-11-19 — Research: AI in SBA lending
- **Category:** research (scheduled research task)
- **What:** New study `ai-in-sba-lending` (~6,000 words, 51 sources, 4 SVG figures, 1 table): where lenders, vendors and the SBA use AI across the 7(a) and 504 process (intake, eligibility, underwriting, closing, servicing); what SOP 50 10 8 / 8.1, the SBSS sunset notices, the LSP rules (13 CFR 103), the guaranty rules (13 CFR 120.524) and SOP 50 57 4 require; wider rules (SR 26-2, third-party guidance, Reg B, Section 1071, FTC Safeguards); and risks (PPP fraud evidence from SBA OIG, access evidence, rule churn, vendor concentration). Added to the top of research/index.json; queue item checked off.
- **Checks:** see the PR for research/ai-in-sba-lending.

## 2026-11-18 — The lab: AI use check (governance decision tree)
- **Category:** interactivity (backlog #1)
- **What:** The home lab gets a third tab, "AI use check": a generic decision tree for using an AI tool on bank work (enterprise-approved? only public information? feeds a decision or reaches a customer? a named reviewer reads every output? uses customer data?). Each answer drops into a ruled trail with a mono Q-number and a YES/NO stamp, like conditions on a credit file; the next question rises in, and the outcome (Stop / Limited / Not yet / Allowed, with controls / Allowed / Go ahead, in the status colours) is stamped with its heading opening from condensed (62%) to wide on Archivo's width axis. Three example cases (tax return in a personal chatbot, credit memo draft in the approved assistant, training quiz) play their answers in; a click on an answer takes over from a playing case. Labelled as generic, not any bank's actual policy; no new claims about Thomas. Keyboard: answers are buttons in a group labelled by the question, focus moves to the next question's Yes and then to the outcome heading; the outcome is also announced through a status region. The Pause button hides on this tab (nothing moves on its own). Fixed min-height so walking the tree doesn't resize the panel (a few px of growth only at ~1024px on the longest outcome). Reduced motion: no rise or stamp, cases fill in instantly.
- **PR:** see the PR for daily/2026-11-18-ai-use-check.
- **Checks:** tools/check.py all pages at 1440/390: ALL CHECKS PASSED (home CLS 0.001 / 0.004). Extra Playwright pass: every case and the longest manual path at 1440, 1024, 800, 390 and 360, light and dark, no clipping or console errors; keyboard walk (arrow keys to the tab, Tab, Enter/Space through three answers, focus on the outcome); axe-core 4.10 on the lab, light/dark, 1440/390, start and finished states: 0 violations (contrast included); interrupting a playing case with a click keeps the user's path. Lighthouse not re-run (no loading or asset changes).
- **Preview:** not republished (optional).
- **Suggested next:** design polish or content & story, backlog #1 ("What it taught me" on project pages, only from what the repos show).

## 2026-11-17 — Downloadable résumé (PDF)
- **Category:** content & story (backlog #1)
- **What:** New `tools/make_resume_pdf.py` renders a one-page A4 résumé, `assets/thomas-mann-resume.pdf` (195 KB, selectable text, live links), straight from `content/resume.json` in the site's own type: Archivo wide and heavy for the name and roles, Plex Mono for dates and labels, one cobalt rule and cobalt dashes for bullets. Contents: name, title, Greenville SC, email, LinkedIn, site; summary and focus; experience with highlights, earlier bank roles and the 2023 award; education; featured projects (linked to their pages on the site, no repo links); skills; chess. No phone, address or anything not already on the site. Used Chromium's PDF output instead of reportlab so the PDF matches the site's fonts. A "Download résumé · PDF · 1 page" button sits under the Work page intro, a "Résumé PDF" button joins the home contact row, and the command menu gets "Download résumé (PDF)" (also found by "resume" or "cv"). They only appear on github.io/localhost, so the Artifact preview (which can't download) never shows a dead button. Speculation rules now skip `/assets/*` so hovering the link doesn't prerender the PDF. `check.py` fails if the PDF is stale (`tools/resume_pdf.stamp` = sha256 of resume.json) or the work-page link isn't visible and served.
- **PR:** see the PR for daily/2026-11-17-resume-pdf.
- **Checks:** tools/check.py all pages at 1440/390: ALL CHECKS PASSED (new résumé checks included). PDF rendered to PNG and reviewed: one page, nothing clipped. Screenshots of the work page and home contact row at 1440/390, light and dark, plus keyboard focus on the button; command menu "resume" + Enter downloads `thomas-mann-resume.pdf`. Lighthouse not re-run (no change to what pages load).
- **Preview:** not republished (optional; the button is hidden there by design).
- **Suggested next:** interactivity, backlog #1 (AI governance decision-tree explainer).

## 2026-11-16 — Accessibility pass: headings, filter announcements, high-contrast states
- **Category:** accessibility (backlog #1)
- **What:** Audited every page with axe-core 4.10 (light/dark, 1440/390, plus the command menu open and with no matches) and a Tab/Shift+Tab focus walk measuring each focus ring's contrast and whether the sticky nav hides it. The command menu was already clean (combobox + listbox, `aria-activedescendant`, debounced result count, focus returned to the opener) and every focus stop has a cobalt ring ≥ 3:1 in both themes, unobscured by the nav. Fixed what the audit found: (1) heading levels jumped h1 → h3 on Work, Projects and Research; each list section now has a visually hidden h2 ("Experience", "Selected projects", "Studies") that labels the section, and the "At the bank" items moved from h4 to h3 (same look). (2) Choosing "All" in the Projects skill filter now announces "All skills · N projects" instead of silence. (3) Windows High Contrast / forced colours dropped the backgrounds that mark the chosen command, filter pill, demo segment and inbox lane, so the selection was invisible; those now use the system Highlight colours, the active lab tab gets an underline and the menu input a Highlight ring. `tools/check.py` now fails on skipped heading levels.
- **PR:** see the PR for daily/2026-11-16-a11y-cmdmenu.
- **Checks:** tools/check.py all pages at 1440/390: ALL CHECKS PASSED. axe-core: 0 violations on all 20 page/theme/width combinations and the open/empty command menu (was 3 heading-order violations per theme/width). Forced-colours screenshots of the menu and filters reviewed. Normal screenshots pixel-identical to main except the running home demo. Lighthouse not re-run (no loading or asset changes).
- **Preview:** not republished (optional).
- **Suggested next:** content & story, backlog #1 (downloadable résumé PDF from resume.json).

## 2026-11-16 — Research: TD Credit Assist and AI copilots for credit analysts
- **Category:** research (scheduled research task)
- **What:** New study `td-credit-assist-ai-copilots` (~5,800 words, 57 sources, 4 SVG figures, 2 tables): what TD Bank U.S. disclosed about TD Credit Assist (Oct 2026), TD's wider AI programme, peer copilots (DBS, Moody's, S&P, nCino, Abrigo) and governance (SR 26-2, OSFI E-23, OSFI gen-AI bulletin, Reg B). Added to the top of research/index.json; queue item checked off.
- **Checks:** tools/check.py all pages at 1440/390: pass. research.html?id=td-credit-assist-ai-copilots reviewed at 1440 and 390: article, tables and figures render, no overflow, no console errors.

## 2026-11-15 — Archivo split into core + extended
- **Category:** performance (backlog #1)
- **What:** The 90 KB Archivo variable font is now two files made by `tools/subset_fonts.py` (fonttools, both axes kept): `archivo-core.woff2` (47.5 KB: ASCII plus the handful of extra characters the site uses, found by scanning every page, script, resume.json and research article) is preloaded; `archivo-ext.woff2` (38.8 KB: the rest of Latin-1, € ™ ‹ › etc.) is declared with `unicode-range`, so a browser fetches it only if a page actually contains one of those characters. Today no page does. Unused OpenType features (frac/numr/dnom/locl) dropped. `fetch_fonts.sh`, `make_og.py` and `build_preview.py` updated; architecture note in DAILY_INSTRUCTIONS.md updated.
- **PR:** see the PR for daily/2026-11-15-font-subset.
- **Checks:** tools/check.py all pages at 1440/390: ALL CHECKS PASSED. Screenshots of work, projects, a project page and a research article are pixel-identical to main (reduced motion, 1440). Network check: every page loads only core; injecting "Café Zürich €" pulls in ext. Lighthouse home (mobile): Performance 98–99, Accessibility 100, Best Practices 100, SEO 100; simulated LCP 2.4 s → 2.1 s, total weight 232 → 191 KiB.
- **Preview:** not republished (optional).
- **Suggested next:** accessibility, backlog #1 (command menu screen-reader pass and focus-ring audit).

## 2026-11-14 — Page titles set word by word
- **Category:** motion & transitions (backlog #1)
- **What:** Page titles on Work, Projects and Research now arrive word by word: each word rises out of a clipped line and opens from condensed (62%) to its full width on Archivo's width axis, 75ms apart, after the page has rendered. Each word box is locked to its measured rest width before the animation, so the widening happens inside it and nothing reflows (CLS 0); the lock is dropped when the last word lands. Screen readers get the title once from an `.sr-only` copy (visual words are `aria-hidden`). Prerendered pages wait for `prerenderingchange` so the reveal is actually seen; the cross-document `page-title` snapshot now only fades, so it doesn't double the rise. Reduced motion: no split, the title is just there. Home is skipped (the name has its own stretch). `splitTitles()` / `revealTitles()` in site.js.
- **PR:** see the PR for daily/2026-11-14-title-reveal.
- **Checks:** tools/check.py all pages at 1440/390: ALL CHECKS PASSED (CLS 0.000 on work/projects/research). Extra Playwright pass: frames at 150ms, 600ms and rest on each page, light and dark, desktop and phone; no console errors, no horizontal overflow, width locks released at rest. Lighthouse not re-run (no loading or asset changes).
- **Preview:** not republished (optional).
- **Suggested next:** performance, backlog #1 (subset Archivo), or accessibility #2 (command menu screen-reader pass).

## 2026-11-13 — DeepDiligence: replay a question
- **Category:** project showcases (backlog #1)
- **What:** The DeepDiligence detail page gets a "Replay a question" section. Two synthetic questions (over time / across companies, fictional Kestrel Logistics and Pinelake Foods filings): press Replay and the pipeline runs in four marked stages: every chunk gets a similarity bar and score, the list re-sorts itself by score (FLIP, transform only), the top 3 are kept with [1]–[3] ranks, and the answer is inked in word by word (cobalt drying to ink) with citation buttons. Hovering or focusing a citation lights its chunk and vice versa; clicking scrolls to it. The finished state is what renders at rest (nothing waits on scroll); reduced motion jumps straight to the finished answer. Data lives in `content/resume.json` (`projects[deepdiligence].replay`), labelled as synthetic and not output from the live app.
- **PR:** see the PR for daily/2026-11-13-diligence-replay.
- **Checks:** tools/check.py all pages at 1440/390: ALL CHECKS PASSED. Extra Playwright pass on the replay at 1440 light/dark and 390: no console errors, no horizontal overflow, CLS 0 during the replay, citation focus lights its chunk, reduced motion shows the finished state immediately. Screenshots reviewed at each stage. Lighthouse not re-run (no loading or asset changes).
- **Preview:** not republished (optional).
- **Suggested next:** motion & transitions, backlog #1 (per-word page-title reveal), or performance #2 (subset Archivo).

## 2026-11-13 — Research: AI-first banks in small-business lending
- **Category:** research (research task, not the daily site loop)
- **What:** New study `ai-first-banks-small-business-lending`: Live Oak and Huntington with Casca, plus Celtic, Colony, ConnectOne and Grasshopper; regulation (SR 26-2, Reg B, 1071, SBSS sunset). 4 SVG figures. Queue item checked off.
- **Checks:** tools/check.py; research.html?id=ai-first-banks-small-business-lending viewed at 1440 and 390.

## 2026-11-12 — Hero name presses under the pointer
- **Category:** design polish (backlog #2)
- **What:** On the home hero, letters of the name near the mouse press in like a nib under pressure: they condense on Archivo's width axis (125% → 90%) and get slightly heavier (750 → 860), easing back when the pointer leaves. Fine pointers with hover only; nothing under reduced motion or on touch. The name is split into letters only after the entrance stretch finishes, and each letter is then locked to its measured rest width, so nothing around it moves (no layout shift, no feedback loop). Screen readers get the name once via a `.sr-only` copy; the letter spans are `aria-hidden`. `pressName()` in site.js, name still comes from resume.json.
- **PR:** see the PR for daily/2026-11-12-pressed-name.
- **Checks:** tools/check.py all pages at 1440/390: ALL CHECKS PASSED (home CLS 0.001 / 0.002, same as before the change). Extra Playwright pass: pointer sweep across the name in light and dark, no console errors, no added layout shift, letters return to 125% at rest. Screenshots reviewed. Lighthouse not re-run (no loading or asset changes).
- **Preview:** not republished (optional).
- **Suggested next:** project showcases, backlog #1 (DeepDiligence Q&A replay), or motion #3 (per-word title reveal).

## 2026-11-11 — Underwriter → builder scroll story
- **Category:** content & story (backlog #1)
- **What:** The bank entry on work.html now tells the career arc as three ruled steps (01 Underwrite, 02 Automate, 03 Build) carrying the four role titles. A cobalt pen line draws down the rule as you scroll (`view-timeline` + `animation-timeline`), and each title opens from condensed (72%) to full width on the Archivo width axis as it crosses the middle of the screen; ledger ticks fill in as each role is reached. Replaces the small mono role ladder. Data lives in `content/resume.json` (`experience[0].story`, replacing `progression`); the "Earlier: underwrote…" highlight moved into step 01/02, nothing new claimed. Reduced motion and browsers without scroll timelines show the finished state. Titles don't wrap at 390px (measured), so no layout shift while the width animates.
- **PR:** see the PR for daily/2026-11-11-career-story.
- **Checks:** tools/check.py all pages at 1440/390: ALL CHECKS PASSED (work CLS 0.000). Story screenshots reviewed at 0/50/100% scroll, light and dark, desktop and phone. Lighthouse not re-run (no loading or asset changes).
- **Preview:** not republished (optional).
- **Suggested next:** design polish, backlog #3 (hero name width responds to the pointer), or project showcases #2 (DeepDiligence Q&A replay).

## 2026-11-10 — Research: Lumos and alternative small-business credit scoring
- **What:** Published `research.html?id=lumos-small-business-credit-scoring` (about 4,300 words, 4 SVG figures, 53 sources). Covers Lumos (Lumos Technologies / Lumos Data), bureau scores, cash-flow scoring, the SBA's March 2026 discontinuation of FICO SBSS for 7(a) Small Loans, independent evidence and governance. Queue item checked off.
- **Checks:** tools/check.py all pages: pass. Article opened at 1440 and 390: figures, table and sources render, no horizontal overflow.
- **Notes:** Lumos publishes no accuracy metrics and its website could not be fetched; the "faster portfolio data" premise from the queue is not supported by any public source and is flagged in the paper.

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
