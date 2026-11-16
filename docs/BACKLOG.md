# Backlog

Pick from the top unless yesterday's log suggests something better. Rotate categories. Remove items when done. When this runs low, research (award-winning portfolios, new CSS/browser features) and add ideas.

## Up next
1. **Downloadable résumé:** PDF generated from resume.json (`tools/make_resume_pdf.py`, reportlab), no phone/address. Note: inside the Artifact preview, download links are blocked; the button should only show on the real site.
2. **Interactivity:** "AI governance" mini-explainer: an interactive policy decision tree (is this tool enterprise-approved? does it touch customer data?), generic, not the bank's actual policy.
3. **Content:** each project detail page could show "What I'd do next" or "What it taught me", only from what the repo shows.
4. **Project showcases:** a similar replay for another project (e.g. the SBA FOIA analyzer), only if its repo supports the steps shown.
5. **Motion:** research article titles could get the same word reveal (they carry their own `r-<id>` morph from the list, so it needs care).
6. **Performance:** apply the same core/ext split to IBM Plex Mono 400 and 500 (~30 KB together) via `tools/subset_fonts.py`.
7. **Accessibility:** when a skill filter dims non-matching projects, screen readers still read them as normal; consider marking them (e.g. `aria-description="doesn't use <skill>"`) or reordering matches first. Also run axe on research articles (markdown headings).

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
