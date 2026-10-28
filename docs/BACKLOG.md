# Backlog

Pick from the top unless yesterday's log suggests something better. Rotate categories. Remove items when done. When this runs low, research (award-winning portfolios, new CSS/browser features) and add ideas.

## Up next
1. **Motion & transitions:** shared-element morph for the whole project card into the detail page (card background → detail panel), not only the title. Use `view-transition-class` for groups; tune durations so it feels physical. Keep reduced-motion fallback.
2. **Interactivity:** turn the 8-K demo into a tabbed "lab" with a second demo: an inbox triage sorter (synthetic emails flow into lanes with a reason). Mirrors his real CLO inbox system in general terms.
3. **Content & story:** a "career as a chess game" or "underwriter → builder" scroll story on work.html: scroll-driven (`animation-timeline: view()`) progression through the four roles at the bank.
4. **Project showcases:** DeepDiligence walkthrough on its detail page: an animated Q&A replay (question → retrieved chunks highlight → answer), synthetic text, clearly labelled.
5. **Design polish:** hero name responds to the pointer by varying its width axis (letters near the cursor widen slightly), pointer: fine only, reduced-motion safe. Must feel tactile, not gimmicky.
6. **Motion:** text-split entrance for page titles (per-word mask reveal) shared across pages.
7. **SEO/meta (for launch):** social preview image (1200×630, SVG→PNG), og:image, JSON-LD Person from resume.json facts only.
8. **Performance:** subset the Archivo variable font further (only used glyphs) with fonttools/pyftsubset; it's ~90 KB now.
9. **Accessibility:** screen-reader pass of the command menu (combobox/listbox semantics), project filter announcements, transitions not stealing focus. Add a visible focus ring style audit.
10. **Downloadable résumé:** PDF generated from resume.json (`tools/make_resume_pdf.py`, reportlab), no phone/address. Note: inside the Artifact preview, download links are blocked; the button should only show on the real site.
11. **Interactivity:** "AI governance" mini-explainer: an interactive policy decision tree (is this tool enterprise-approved? does it touch customer data?), generic, not the bank's actual policy.
12. **Design polish:** arrows (→) fall outside the Archivo subset and render in a fallback face; draw them as small inline SVG or pick glyphs in the subset.
13. **Content:** each project detail page could show "What I'd do next" or "What it taught me", only from what the repo shows.

## Questions for Thomas
- Any numbers you can share publicly for the email triage system or credit memo pipeline (time saved, accuracy, adoption)?
- Spanish: resume says B1, GitHub profile says B2. Which, and should it be on the site?
- Feature the Legal Interpreter NLP project (Streamlit app on your old profile)?
- Headshot or personal photo? Only if you provide one.
- When the lockdown ends: which repos go public again, and should project pages link them?
- Personal brand direction: any name, wordmark, colours or tone you want the site to follow?

## Parked
- Custom domain (costs money).
- GitHub Pro to serve Pages from a private repo (costs money; and Pages sites are public anyway).
