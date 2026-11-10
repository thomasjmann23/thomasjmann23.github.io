## Executive summary

Spreading is the step where a credit analyst copies a borrower's financial statements and tax returns into the lender's standard template so that ratios, cash flow and debt service coverage can be calculated the same way for every deal. Lenders have automated this for over a decade with dedicated "auto-spreading" tools. Since 2023, general-purpose large language models (LLMs) that can read page images have become a credible alternative. This paper compares the two on accuracy, failure modes, auditability, cost and validation, using only public sources.

Key findings:

- **The leading dedicated tools are hybrids, not pure OCR.** Moody's, nCino, Abrigo and FlashSpread all describe pipelines that combine OCR or the PDF text layer with machine-learned mapping to a chart of accounts, plus tie-out checks and human review [4][5][7][10][3]. None of them publishes an independently audited accuracy figure, and none publishes a price.
- **"FlashSpreads" does not appear to exist under that exact name.** The closest match is FlashSpread (singular), a tax-return spreading product owned by BeSmartee since 2021 and integrated with Baker Hill and Finastra [1][2][3]. This paper assumes that is the product meant.
- **On reading the numbers off a page, frontier LLMs now match or beat good OCR pipelines in published benchmarks, but not uniformly.** On FinCriticalED, a 2026 benchmark of 859 financial pages, the best vision-language models scored 97.2% to 98.6% on financial facts, while an older frontier model scored 59.6% on numeric facts. A strong OCR pipeline scored 98.8% on numbers but 54.1% on monetary units [16].
- **Spreading is more than extraction.** In the only public benchmark that scores end-to-end spreading against a human baseline (run by a vendor, Taktile), the best LLM configuration matched 96.5% of fields against about 89% for human underwriters, while smaller models from the same families scored 34% to 55%, often because they returned an incomplete template [13]. Most remaining errors there were classification and mapping judgments, not misread digits.
- **The two approaches fail differently.** OCR errors are visible and local: a low-confidence character, a broken table, a missed merged cell [21]. LLM errors can be fluent and silent: a plausible number that is not on the page, a dropped parenthesis that flips a sign, a skipped paragraph [16][38]. That difference matters more for control design than headline accuracy.
- **Raw compute is cheap for both.** Cloud OCR list prices range from about $1.50 to $70 per 1,000 pages depending on the feature [20][22][23]. Using published API prices, an LLM pass over a statement page plausibly costs between under $1 and about $14 per 1,000 pages (author's estimate, assumptions stated below) [24][26]. Analyst review time, not extraction cost, is the main cost driver.
- **The regulatory frame shifted in 2026.** The agencies replaced SR 11-7 and OCC Bulletin 2011-12 in April 2026 with revised model risk guidance that explicitly leaves generative and agentic AI out of scope [31][32]. Third-party risk guidance still applies to any vendor [34], and SBA 7(a) lenders must still reconcile borrower financial data against IRS tax transcripts before first disbursement [40]. That reconciliation is a natural, independent check on any extraction tool.

The practical conclusion: the choice is less "OCR or LLM" than "which controls sit around the extractor". A lender can make either approach safe with arithmetic tie-outs, source-linked values, transcript reconciliation and sampled human re-spreads. Without those controls, an LLM's errors are harder to catch than an OCR tool's.

## Background

### What spreading is and why it is slow

A commercial or small-business credit file usually contains several years of business tax returns (Forms 1120, 1120-S or 1065 in the US), accountant-prepared or company-prepared financial statements, interim statements, and personal returns for guarantors. Each arrives in a different layout. The analyst's job is to place every line into a fixed template (revenue, cost of goods sold, officer compensation, depreciation, interest, current assets, funded debt and so on), add back non-cash and discretionary items, and calculate cash flow available for debt service.

The work has three parts that are easy to blur together:

1. **Reading.** Getting the right characters and numbers off the page, including signs, units ("in thousands") and column alignment.
2. **Mapping.** Deciding which template line each source line belongs to. "Due to shareholder" may be debt or equity depending on policy; "Other deductions" on a tax return may hide depreciation or interest that should be added back.
3. **Checking.** Confirming that the spread ties out: assets equal liabilities plus equity, subtotals add up, net income agrees across the income statement and the reconciliation schedule, and the spread agrees with the tax return or transcript.

Dedicated spreading tools were built to automate the first two and support the third. General LLMs are being tried for all three.

### The two families compared

**Dedicated spreading tools** are products sold to lenders, usually inside or alongside a loan origination or credit analysis system. Their extraction step uses OCR or the PDF text layer, then models trained on prior spreads map lines into the lender's template. They are configured to the lender's chart of accounts and spreading policies, and they present a review screen where the analyst confirms or corrects each value.

**General LLM-based extraction** uses a foundation model that accepts page images or PDFs (from OpenAI, Anthropic, Google or open-weight providers) and is prompted to return structured output, such as JSON matching the template. It may be combined with a cloud OCR service, used as a second opinion, or wrapped in an "agent" that also performs the arithmetic and mapping. Some newer vendors package this approach as a product; some lenders build it themselves.

The boundary is blurring. nCino now offers role-based AI agents, including an "Analyst" agent for financial analysis, alongside its existing automated spreading [9]. Moody's has announced a generative AI research assistant (2023) and an integration with Anthropic's Claude for credit and compliance workflows (2026), though none of the announcements reviewed for this paper is specifically about spreading [44][45]. Several venture-backed entrants describe LLM-based or "agentic" underwriting that includes spreading [14][15].

![Two pipelines for spreading: dedicated tool vs LLM extraction, with the control points both need](research/ocr-spreading-vs-llm-extraction/fig1-pipelines.svg)

*Figure 1. Where the two approaches differ and where the controls sit. The dedicated pipeline follows vendor descriptions [5][7][10]; the LLM pipeline is a generic design. The four control points apply to both. Diagram by the author.*

## The dedicated tools: what is public

This section records what each vendor says about its own product. No vendor accuracy figure below has been independently audited, as far as public sources show.

### FlashSpread (BeSmartee)

The research queue for this paper named "FlashSpreads". A search for that exact name found no lending product. The closest match is **FlashSpread**, described at acquisition as "instant tax spreading" that turns scanned tax returns into reports such as global debt service. BeSmartee, a mortgage technology company, announced the acquisition in January 2022 after closing in November 2021; at that time FlashSpread said it served more than 100 financial institutions [1]. Baker Hill announced a partnership in January 2023 to auto-spread PDF and scanned tax returns inside its NextGen platform [2].

FlashSpread's listing on Finastra's app marketplace makes the most specific claims found for any tool in this study: a 96% reduction in data-entry time for deal and tax-return spreading, manual intervention needed on only 18% of tax returns, and a side-by-side validation screen for human review [3]. These are vendor statements. The 18% figure is useful because it is an honest admission that roughly one return in five still needs a person, which matches the hybrid design every vendor describes.

### Moody's (QUIQspread and CreditLens)

Moody's announced QUIQspread in September 2020 as a software-as-a-service tool built by its Analytics Accelerator. It integrates with CreditLens and uses machine learning trained on the financials of more than 22 million private firms to learn an institution's spreading policies [4]. Moody's current automated spreading page describes text extraction from the PDF text layer or OCR, followed by a machine-learning layer, with a Moody's "spread review team" and with validation, manual adjustments and discrepancy resolution performed by the client [5]. A Nedbank case study reports qualitative benefits only: time, consistency and fewer errors [6]. No accuracy or speed figures were found.

### nCino Automated Spreading

nCino describes Automated Spreading as OCR for structured and unstructured documents combined with machine learning that learns from previous mappings, covering tax returns, audited and company-prepared statements, and 10-K and 10-Q filings. Quality control is described as line-by-line reconciliation, with unclear fields flagged for review [7]. Desjardins selected the product in March 2024, with nCino noting multilingual and multi-currency support [8]. In November 2025 nCino introduced role-based "Digital Partner" agents, including an Analyst agent for financial analysis [9]. No launch date or accuracy figure for Automated Spreading was found in nCino's own materials. A secondary report of a 60% to 70% reduction in credit review time from one unnamed bank could not be traced to a primary source and is not relied on here.

### Abrigo (Sageworks)

Abrigo sells Auto-Spreading as an add-on to its credit analysis software. It says the tool uses AI, OCR and proprietary algorithms to extract tax-return data and produce spreads in minutes, and it names one community bank customer. It publishes no numeric accuracy claim or price [10].

### Baker Hill, Ocrolus and others

Baker Hill's own statement-spreading page stresses templates, data lineage, peer benchmarks and spreads that flow into the credit memo. It lists unattributed customer metrics (for example, eight hours saved per loan) without naming the customer or method [11]. Baker Hill relies on partners for document extraction, including FlashSpread [2].

Ocrolus is often mentioned alongside spreading tools but focuses on bank statements, pay stubs and tax forms for small-business and consumer lenders, not classic commercial statement spreading. It offers a human-reviewed product and a machine-only "Instant" product, and claims over 99% accuracy for the human-in-the-loop version [12].

Outsourcing and services firms also publish spreading case studies. Evalueserve, for example, claims 99.6% accuracy and 70% faster extraction for an unnamed global bank using Moody's CreditLens [29]. Like the vendor claims above, these are self-reported and do not state how accuracy was measured.

### LLM-native entrants

A wave of startups since 2023 positions general LLMs as the engine for credit analysis:

- **F2** raised $24 million in total equity (announced June 2026) for an LLM-agnostic analysis platform. It says it is deployed at more than 100 funds and banks and names Live Oak Bank as a customer [14].
- **Kaaj** raised a $3.8 million seed round (November 2025) for agentic underwriting aimed at small-business and equipment lenders. It claims 90% fewer manual tasks and names several equipment finance customers [15].
- **Taktile**, a credit decisioning software company, sells a financial spreading agent and publishes the FinSpread-Bench benchmark discussed below [13].

All of these claims are self-reported. The entrants' value proposition is not only better reading. They also say an LLM can apply the lender's written spreading policy in plain language without training a mapping model on years of prior spreads.

## What the evidence says about accuracy

Public evidence comes in three kinds: academic benchmarks of reading accuracy, one vendor-run benchmark of end-to-end spreading, and vendor or consultant case studies. They measure different things and should not be compared directly.

### Reading: fact-level OCR on financial pages

The most relevant academic source is **FinCriticalED** (He et al., version 3, April 2026). It scores 13 systems on 859 real financial document pages with 9,481 facts annotated by experts. Instead of text similarity, it checks whether each financial fact (number, sign, unit, date, entity) was reproduced correctly [16].

Its results, in Figure 2, show three things:

- The best vision-language models (Claude Sonnet 4.6 at 97.2% overall and 98.6% on numbers, Gemini 2.5 Pro at 96.7% and 97.2%) are at least as accurate as strong OCR pipelines on numeric facts.
- Model choice matters more than "LLM or not." GPT-4o scored 59.6% on numeric facts and GPT-5 66.8% in the same test, well below the OCR pipelines.
- A dedicated OCR pipeline can be excellent on digits and weak on context. MinerU2.5 scored 98.8% on numeric facts but only 54.1% on monetary-unit facts, even though its text-similarity score looked high.

The authors find that digits, decimal points, signs and unit markers are the most error-sensitive elements. They note that dropping the parentheses used for negative numbers inverts the meaning of a figure. Even the strongest systems made at least one critical error on 17.6% to 23.5% of pages [16]. For a lender, that page-level figure is the one that matters: a multi-page tax return will very likely contain at least one error somewhere, whichever tool reads it.

![Bar chart of financial-fact accuracy on FinCriticalED for six systems](research/ocr-spreading-vs-llm-extraction/fig2-fincriticaled.svg)

*Figure 2. Fact-level accuracy on FinCriticalED (859 pages, 9,481 facts). FFA is accuracy on all financial facts; N-FFA is accuracy on numeric facts. Source: He et al., arXiv:2511.14998v3, Table 5 [16]. Chart by the author.*

Other benchmarks point the same way with less financial focus. A 2025 ACL workshop paper comparing multimodal LLMs with a traditional table-recognition and OCR pipeline on PubTables-1M found the traditional pipeline slightly better at table structure (98.2% vs 94.9% layout F1 for GPT-4o) and the LLM better at cell content. GPT-4o also added extra rows to 5.2% of tables [17]. OmniDocBench found that vision-language models handle merged cells poorly and tend to merge multi-column text in financial reports [18]. Financial statements and tax schedules are full of both.

### Reasoning about numbers is a different test

Benchmarks that ask models to answer questions about financial filings, rather than transcribe them, show much lower scores. The FinanceBench authors reported in 2023 that GPT-4-Turbo with a retrieval system answered incorrectly or refused 81% of their sample questions [19]. That result is older and tests question answering over long filings, not spreading, but it is a reminder that reading a number correctly and using it correctly are separate skills.

### End-to-end spreading against a human baseline

**FinSpread-Bench**, published by Taktile Labs and last updated in March 2026, is the only public benchmark found that scores complete spreads against human performance. It uses 84 real underwriting documents and 1,312 fields, and reports a field match rate. Human underwriters scored about 89%, which the authors attribute partly to humans not following underwriting guidelines perfectly [13].

![Bar chart of field match rate on FinSpread-Bench for selected configurations and the human baseline](research/ocr-spreading-vs-llm-extraction/fig3-finspread.svg)

*Figure 3. Field match rate on FinSpread-Bench (84 documents, 1,312 fields). Each LLM row names the reasoning model and, after the plus sign, the extraction model; "all tools" includes a calculator. Benchmark run by Taktile, which sells a spreading agent; not peer-reviewed. Source: [13]. Chart by the author.*

Three results stand out:

- The best configurations (a reasoning model paired with a separate extraction model and a calculator tool) reached 94% to 96.5%, above the human baseline.
- Removing the calculator tool cut the leading configuration from 96.5% to 94.0%. Letting the model do arithmetic itself costs accuracy.
- Smaller models failed badly, mostly by not returning a complete template: 59.5% of Claude Haiku 4.5 outputs and 38.1% of Claude Sonnet 4.5 outputs were incomplete. A model that is "good at reading" can still be a poor spreader if it cannot follow a long schema.

The benchmark classifies errors as extraction, reasoning or mapping, and computation [13]. Its design is relevant, but its independence is limited. It is run by a vendor of the approach it tests, the documents are not public, and the human baseline's own error rate means "match" partly measures agreement with a reference spread rather than ground truth.

### Case studies

Published case studies of LLM-assisted document extraction at banks report large speed gains but rarely measure accuracy rigorously, and none names the bank. Cognizant reports 96% key-field accuracy with Azure OCR plus GPT-4o and a human reviewing every field, but on documents such as bank statements rather than financial statements [28]. Dedicated vendors' case studies (Moody's/Nedbank, Evalueserve, FlashSpread) give either qualitative claims or unaudited percentages [3][6][29]. No public study was found in which a named bank reports field-level accuracy for either approach on its own portfolio.

## Failure modes

Headline accuracy hides the more important question for a credit team: when the tool is wrong, will anyone notice?

### Dedicated OCR-based tools

- **Image quality.** AWS's Textract guidance calls for at least 150 DPI and warns against downsampling [21]. Faxed, photographed or skewed pages degrade OCR quickly.
- **Table structure.** Merged cells that span columns and irregular rows produce inconsistent results, according to AWS's own documentation [21]. Multi-column schedules and statements with notes beside the numbers are common in small-business files.
- **Template drift.** Tools trained on prior spreads do best on familiar layouts. Accountant-prepared statements vary widely, and an unusual layout can be mapped to the wrong line.
- **Units and context.** As FinCriticalED shows for one pipeline, an OCR engine can read every digit correctly and still miss that the column is in thousands [16].

These errors usually leave traces: a low confidence score, an empty field, a subtotal that does not foot. AWS itself suggests that financial decisions may need confidence thresholds of 90% or higher [21]. Vendors build their review screens around these signals.

### General LLM extraction

- **Confabulation.** NIST's Generative AI Profile describes confabulation as the confident presentation of false content and calls it a natural result of how generative models work [38]. In extraction, this looks like a plausible number that is not on the page or a "hallucinated continuation" of a table [16].
- **Sign and unit errors.** Dropped parentheses and missed unit labels change the meaning of a figure without producing an obviously malformed output [16].
- **Omission.** A model can skip a paragraph, a row or a page and return a well-formed result. FinCriticalED records cases where a frontier model missed a whole paragraph or stopped part-way through [16]; the ACL study found added rows as well as missing ones [17].
- **Incomplete schemas.** On long templates, smaller models frequently fail to return every field [13].
- **Arithmetic.** Models are less accurate when they compute ratios and totals themselves than when they call a calculator [13].
- **Non-determinism and version change.** The same page can produce different output on different runs, and providers retire and update models on their own schedules. A validation result is only valid for the model version tested.

The key difference is the absence of a reliable signal. An LLM's output does not come with a per-character confidence that corresponds to OCR confidence, and its errors are formatted as neatly as its correct answers. The US Treasury's 2024 report on AI-specific cybersecurity risk made a related point, cautioning that the word "hallucination" can create a false sense of trust and that generative AI may not yet suit uses that need high explainability [37].

### Comparison

| Dimension | Dedicated spreading tool | General LLM extraction |
|---|---|---|
| Reading accuracy (public evidence) | Strong on clean digits; weaker on units, merged cells and poor scans [16][21] | Best models match or beat OCR on financial facts; wide spread between models [16] |
| Mapping to template | Learned from the lender's prior spreads and configured policy [4][7] | Prompted with written policy; strong models score above a human baseline in one vendor benchmark [13] |
| Typical error | Visible: low confidence, blank or misaligned field | Silent: plausible wrong value, flipped sign, omitted row [16][38] |
| Audit trail | Source coordinates and review history built into product [5][7][11] | Must be built: page and box references, prompt and model version logs |
| Consistency over time | Stable between releases; vendor controls updates | Varies by run and by model version; provider controls retirement |
| Integration | Native to LOS and credit systems [2][7][10] | API work, or a newer vendor's platform [14][15] |
| Published accuracy | Vendor claims only; none audited [3][12][29] | Academic benchmarks [16][17] and one vendor benchmark [13] |
| Published price | None found | Per-token API prices are public [24][26][43] |
| Regulatory frame (US, 2026) | May fall inside or outside revised model guidance; third-party guidance applies [31][34] | Generative AI explicitly outside revised model guidance; third-party guidance and NIST profile apply [31][38] |

## Cost

Dedicated spreading vendors do not publish prices [1][5][7][10][11], so a like-for-like cost comparison is impossible from public data. What can be compared is the cost of the raw extraction step.

Cloud OCR and document-AI services publish per-page list prices. At first-tier pay-as-you-go rates: AWS Textract charges $0.0015 per page for plain text detection, $0.015 for table analysis, $0.05 for forms and $0.07 for its lending-document workflow (US West) [20]. Azure Document Intelligence charges $1.50 per 1,000 pages for its Read model and $10 per 1,000 for its layout and prebuilt models [22]. Google Document AI charges $1.50 per 1,000 pages for enterprise OCR and $30 per 1,000 for its Form Parser and custom extractor [23].

LLM providers price by tokens. The following estimate is the author's, not a published figure. It assumes one statement page sent as an image of about 1,300 tokens (Anthropic counts images by 28-pixel tiles [25]; Google counts each PDF page as 258 tokens [27]), about 500 tokens of instructions, and about 1,000 tokens of JSON output, with no batch discount and no "thinking" tokens. At list prices on November 10, 2026 [24][26], that gives roughly:

- Claude Sonnet 5.5 ($2 / $10 per million input / output tokens): about $13.60 per 1,000 pages
- Gemini 3.1 Pro ($2 / $12): about $13.50 per 1,000 pages
- Gemini 3.1 Flash-Lite ($0.25 / $1.50): about $1.70 per 1,000 pages
- Claude Haiku 5.5 ($0.10 / $0.50): about $0.70 per 1,000 pages

Output tokens dominate, batch processing roughly halves these figures, and reasoning tokens can multiply them several times [24][26]. The FinSpread-Bench results suggest that the cheapest models are not adequate for full spreads [13]. In practice, a lender would likely pay for a capable model plus an extraction step, so a realistic range for an LLM pass is low tens of dollars per 1,000 pages.

![Dot plot of published list prices per 1,000 pages for cloud OCR services and estimated LLM costs](research/ocr-spreading-vs-llm-extraction/fig4-cost.svg)

*Figure 4. Extraction cost per 1,000 pages on a log scale. Cloud services: published first-tier list prices [20][22][23]. LLM rows: author's estimate from published token prices [24][26] under the assumptions in the text. Dedicated spreading vendors publish no prices. Chart by the author.*

Either way, the compute is trivial next to labor. A commercial file might contain 50 to 200 pages; even at $70 per 1,000 pages, extraction costs a few dollars per deal. The real economics are in how many minutes of analyst review each approach needs per spread, how often a reviewer misses an error, and what the license, integration and validation work costs. None of these has public, comparable data.

## Auditability and validation

### What examiners and auditors will ask

Credit files are reviewed after the fact by loan review, internal audit, examiners and, for SBA loans, the SBA when it decides on guaranty purchase. Each needs to trace a number in the credit memo back to the source document. Dedicated tools are built for this: they store the source location of each value, the mapping rule applied, and who changed what [5][7][11]. A home-built LLM pipeline must create the same trail itself, recording the page, the bounding box or quoted text, the model version, the prompt and the reviewer's action for every field.

### Model risk guidance after April 2026

![Timeline of US guidance relevant to spreading tools, 2011 to 2026](research/ocr-spreading-vs-llm-extraction/fig5-timeline.svg)

*Figure 5. US guidance relevant to validating extraction tools. Sources: [30][34][38][36][33][31][32][35][40][42]. Diagram by the author.*

For fifteen years the reference point was SR 11-7 and OCC Bulletin 2011-12. They defined a model broadly and expected validation (conceptual soundness, ongoing monitoring, outcomes analysis) and effective challenge for vendor and in-house models alike [30]. On April 17, 2026 the Federal Reserve, OCC and FDIC issued revised interagency model risk guidance (SR 26-2, OCC Bulletin 2026-13) that replaced SR 11-7, OCC 2011-12 and related issuances [31][32]. Three changes matter here:

- The revised definition of a model covers complex quantitative methods. It excludes simple spreadsheet arithmetic and deterministic rule-based software [31].
- Generative AI and agentic AI are explicitly out of scope, described as novel and fast-changing. The agencies said they plan a request for information on model risk management that covers banks' use of AI, including generative and agentic AI [31][46]. No such request had been published as of this paper's date.
- The guidance is non-binding and aimed mostly at organizations above $30 billion in assets. Separately, the OCC told community banks in 2025 that it does not require annual model validation [33].

So an LLM-based spreading tool is not covered by the current interagency model guidance, and a template-driven OCR tool may not be either. In the author's reading, that does not mean "no validation". It means the obligation comes from elsewhere: safety and soundness, third-party risk management, accurate books and records, and program rules such as the SBA's. Federal Reserve Vice Chair for Supervision Bowman said in May 2026 that AI uses directly affecting credit decisions carry more risk [41]. In November 2026 the OCC published an examiner framework that treats such technology as a factor within existing risk categories, not as a separate risk, and weighs the degree of human oversight [42]. The Treasury's December 2024 report on AI in financial services similarly urged firms to review AI use cases for compliance with existing law before deployment [36].

### Third-party and program rules

The 2023 interagency third-party guidance says using a vendor does not reduce a bank's responsibility. It expects due diligence on the vendor's information security and how it measures performance, and contracts with clearly defined performance measures, audit rights and data ownership [34]. In September 2026 the agencies proposed replacing it with simpler, principles-based guidance [35]. For an LLM pipeline, the "vendor" chain includes the model provider, and NIST's Generative AI Profile adds value-chain and integration risk to the list [38].

For SBA 7(a) lenders, SOP 50 10 requires lenders (outside SBA Express and Export Express) to obtain IRS tax transcripts and reconcile any discrepancies between the applicant's financial data and the transcripts before first disbursement. Under the current version, SOP 50 10 8.1, it also requires a Quality of Earnings report that reconciles statements, returns and transcripts for business acquisitions of $3 million or more [40]. Whatever tool did the spreading, the transcript is an independent source of truth for key tax-return figures. A lender can use it to measure the extractor's error rate on every deal, not just in a periodic validation.

### A validation design that works for both

Drawing on the guidance above and the failure modes documented in the benchmarks, a credit team can validate either approach with the same core tests:

1. **Golden set.** Hand-spread a sample of the lender's own documents, weighted toward hard cases (scans, handwritten amendments, multi-column schedules, consolidated statements), and measure field-level accuracy separately for reading, mapping and computation, following FinSpread-Bench's error taxonomy [13].
2. **Fact-level scoring.** Score signs, units and periods as separate facts, not just text similarity. FinCriticalED shows that similarity scores can hide unit errors [16].
3. **Hard arithmetic checks.** Balance sheet balances, subtotals foot, net income agrees across schedules, and multi-year comparatives match prior-year spreads. These catch many silent LLM errors and are deterministic.
4. **Independent reconciliation.** Compare to IRS transcripts and to audited figures where available [40].
5. **Source linking.** Require every extracted value to carry a page reference and, for LLMs, the quoted source text, so reviewers check against the page rather than accept the output.
6. **Ongoing monitoring.** Track analyst override rates by field and document type, and re-run the golden set whenever the vendor releases an update or the model version changes. NIST's profile recommends fact-checking generated outputs and verifying sources [38], and the core NIST AI framework treats "valid and reliable" as a basic trustworthiness property, confirmed by objective evidence for the specific intended use [39].

## Implications for lenders and credit teams

- **Separate the three jobs when buying or building.** A tool can be excellent at reading and mediocre at mapping. Ask vendors for accuracy broken down by reading, mapping and arithmetic, on documents like yours.
- **Treat vendor accuracy claims as marketing until tested.** None of the figures found for this paper (96% less data entry, 99%+ accuracy, 99.6% accuracy) states the test set or the method [3][12][29]. FlashSpread's admission that 18% of returns need manual work is the kind of figure worth asking every vendor for [3].
- **Keep LLMs away from arithmetic.** Let deterministic code compute totals and ratios; the benchmark evidence shows a measurable gain from doing so [13].
- **Design for silent errors.** With an LLM in the loop, the review screen must force comparison with the source, not just display a tidy spread. Show the page snippet next to each value and require explicit sign-off on high-impact lines such as depreciation, interest, officer compensation and debt.
- **Pin and re-test model versions.** A validation result for one model version says little about the next. Contracts and internal procedures should require notice of model changes.
- **Use the controls you already have.** SBA transcript reconciliation, loan review and quality control sampling measure extraction quality at no extra cost if results are recorded by field.
- **Do not let the 2026 scope change lower the bar.** Generative AI sitting outside the revised model guidance removes one checklist, not the risk. Expect the planned request for information and further guidance [31][46].
- **Hybrid is the likely end state.** Dedicated vendors are adding LLM agents [9], and LLM-native firms are adding templates, audit trails and integrations [14]. The practical question for a lender is whether the control layer is good enough, not which engine sits underneath.

## Open questions and limitations

- **No independent, lender-relevant benchmark exists.** FinCriticalED measures reading, not spreading, and its documents are not US small-business tax returns [16]. FinSpread-Bench measures spreading but is run by a vendor with a commercial interest, and its documents are private [13]. Neither tests any dedicated commercial spreading product, so the two families have never been compared head to head in public.
- **Vendor claims are unverified.** No vendor in this study publishes its test set, method or price.
- **The product name in the brief was ambiguous.** "FlashSpreads" was assumed to mean FlashSpread (BeSmartee). If a different product was intended, the conclusions about the category still hold, but the vendor section would need revising.
- **Model names and prices change quickly.** The LLM results and prices cited are point-in-time. Several models in the benchmarks have already been superseded, and the cost estimate is the author's arithmetic from list prices.
- **Regulation is in flux.** The model risk request for information, the proposed third-party guidance and examiner practice under the OCC's new framework may change the picture within months [35][42][46].
- **Labor cost is the missing variable.** The most decision-relevant metric (analyst minutes per spread, including review, at a given residual error rate) has no public, comparable data for either approach.

## Sources

1. BeSmartee, "BeSmartee Acquires FlashSpread," press release, January 2022. [www<wbr>.besmartee<wbr>.com<wbr>/press<wbr>/besmartee<wbr>-acquires<wbr>-flashspread](https://www.besmartee.com/press/besmartee-acquires-flashspread)
2. Baker Hill, "Baker Hill Partners with FlashSpread, a BeSmartee Company, to Automate the Tax Return Spreading Process," PR Newswire, January 17, 2023. [prnewswire<wbr>.com<wbr>/news<wbr>-releases<wbr>/baker<wbr>-hill<wbr>-partners<wbr>-with<wbr>-flashspread<wbr>-a<wbr>-besmartee<wbr>-company<wbr>-to<wbr>-automate<wbr>-the<wbr>-tax<wbr>-return<wbr>-spreading<wbr>-process<wbr>-301720795<wbr>.html](https://prnewswire.com/news-releases/baker-hill-partners-with-flashspread-a-besmartee-company-to-automate-the-tax-return-spreading-process-301720795.html)
3. Finastra App Finder, "FlashSpread" listing. [finastra<wbr>.com<wbr>/applications<wbr>/flashspread](https://finastra.com/applications/flashspread)
4. Moody's Analytics, QUIQspread launch announcement, Business Wire, September 10, 2020. [www<wbr>.businesswire<wbr>.com<wbr>/news<wbr>/home<wbr>/20200910005314<wbr>/en](https://www.businesswire.com/news/home/20200910005314/en)
5. Moody's, "Automated Spreading." [www<wbr>.moodys<wbr>.com<wbr>/web<wbr>/en<wbr>/us<wbr>/campaigns<wbr>/automated<wbr>-spreading<wbr>.html](https://www.moodys.com/web/en/us/campaigns/automated-spreading.html)
6. Moody's, "Automation, AI and the future of lending: case study on the QUIQspread tool." [www<wbr>.moodys<wbr>.com<wbr>/web<wbr>/en<wbr>/us<wbr>/insights<wbr>/lending<wbr>/automation<wbr>-ai<wbr>-and<wbr>-the<wbr>-future<wbr>-of<wbr>-lending<wbr>-case<wbr>-study<wbr>-on<wbr>-the<wbr>-quiqspread<wbr>-tool<wbr>.html](https://www.moodys.com/web/en/us/insights/lending/automation-ai-and-the-future-of-lending-case-study-on-the-quiqspread-tool.html)
7. nCino, "Automated Spreading." [www<wbr>.ncino<wbr>.com<wbr>/solutions<wbr>/automated<wbr>-spreading](https://www.ncino.com/solutions/automated-spreading)
8. nCino, "Desjardins Selects nCino Automated Spreading," March 21, 2024. [www<wbr>.ncino<wbr>.com<wbr>/news<wbr>/desjardins<wbr>-selects<wbr>-ncino<wbr>-automated<wbr>-spreading](https://www.ncino.com/news/desjardins-selects-ncino-automated-spreading)
9. nCino, "nCino Introduces Digital Partners, Role-Based Agents," November 4, 2025. [www<wbr>.ncino<wbr>.com<wbr>/news<wbr>/ncino<wbr>-introduces<wbr>-digital<wbr>-partners<wbr>-role<wbr>-based<wbr>-agents](https://www.ncino.com/news/ncino-introduces-digital-partners-role-based-agents)
10. Abrigo, "Credit Analysis" (Sageworks credit risk software, Auto-Spreading). [www<wbr>.abrigo<wbr>.com<wbr>/software<wbr>/lending<wbr>-and<wbr>-credit<wbr>-risk<wbr>/sageworks<wbr>-credit<wbr>-risk<wbr>-software<wbr>/credit<wbr>-analysis<wbr>/](https://www.abrigo.com/software/lending-and-credit-risk/sageworks-credit-risk-software/credit-analysis/)
11. Baker Hill, "Statement Spreading." [bakerhill<wbr>.com<wbr>/statement<wbr>-spreading](https://bakerhill.com/statement-spreading)
12. Ocrolus, "Ocrolus Launches New Cost-Effective Instant Solution for Analyzing Financial Documents," PR Newswire, September 20, 2023. [prnewswire<wbr>.com<wbr>/news<wbr>-releases<wbr>/ocrolus<wbr>-launches<wbr>-new<wbr>-cost<wbr>-effective<wbr>-instant<wbr>-solution<wbr>-for<wbr>-analyzing<wbr>-financial<wbr>-documents<wbr>-301933096<wbr>.html](https://prnewswire.com/news-releases/ocrolus-launches-new-cost-effective-instant-solution-for-analyzing-financial-documents-301933096.html)
13. Taktile Labs (N. Klees, M. Eber), "FinSpread-Bench," updated March 10, 2026. [labs<wbr>.taktile<wbr>.com<wbr>/benchmarks<wbr>/finspread](https://labs.taktile.com/benchmarks/finspread)
14. F2, "F2 Raises $24M to Deploy LLM-Agnostic Operating System across Private Credit, Commercial Banks," Business Wire, June 10, 2026. [www<wbr>.businesswire<wbr>.com<wbr>/news<wbr>/home<wbr>/20260610638134<wbr>/en<wbr>/F2<wbr>-Raises<wbr>-$24M<wbr>-to<wbr>-Deploy<wbr>-LLM<wbr>-Agnostic<wbr>-Operating<wbr>-System<wbr>-across<wbr>-Private<wbr>-Credit<wbr>-Commercial<wbr>-Banks](https://www.businesswire.com/news/home/20260610638134/en/F2-Raises-$24M-to-Deploy-LLM-Agnostic-Operating-System-across-Private-Credit-Commercial-Banks)
15. Kaaj, seed round announcement, November 2025. [kaaj<wbr>.ai<wbr>/blog<wbr>/seed<wbr>-round<wbr>-funding<wbr>-announcement](https://kaaj.ai/blog/seed-round-funding-announcement)
16. Y. He et al., "FinCriticalED: A Visual Benchmark for Financial Fact-Level OCR," arXiv:2511.14998v3, April 7, 2026. [arxiv<wbr>.org<wbr>/abs<wbr>/2511<wbr>.14998](https://arxiv.org/abs/2511.14998)
17. Nunes et al., "Benchmarking Table Extraction: Multimodal LLMs vs Traditional OCR," Proceedings of the XLLM Workshop, ACL 2025. [aclanthology<wbr>.org<wbr>/2025<wbr>.xllm<wbr>-1<wbr>.2<wbr>/](https://aclanthology.org/2025.xllm-1.2/)
18. "OmniDocBench: Benchmarking Diverse PDF Document Parsing with Comprehensive Annotations," arXiv:2412.07626. [arxiv<wbr>.org<wbr>/abs<wbr>/2412<wbr>.07626](https://arxiv.org/abs/2412.07626)
19. P. Islam et al., "FinanceBench: A New Benchmark for Financial Question Answering," arXiv:2311.11944, 2023. [arxiv<wbr>.org<wbr>/abs<wbr>/2311<wbr>.11944](https://arxiv.org/abs/2311.11944)
20. Amazon Web Services, "Amazon Textract Pricing," accessed November 10, 2026. [aws<wbr>.amazon<wbr>.com<wbr>/textract<wbr>/pricing<wbr>/](https://aws.amazon.com/textract/pricing/)
21. Amazon Web Services, "Best Practices" (Amazon Textract Developer Guide). [docs<wbr>.aws<wbr>.amazon<wbr>.com<wbr>/textract<wbr>/latest<wbr>/dg<wbr>/textract<wbr>-best<wbr>-practices<wbr>.html](https://docs.aws.amazon.com/textract/latest/dg/textract-best-practices.html)
22. Microsoft, "Azure AI Document Intelligence pricing" (East US list prices via the Azure Retail Prices API), accessed November 10, 2026. [azure<wbr>.microsoft<wbr>.com<wbr>/en<wbr>-us<wbr>/pricing<wbr>/details<wbr>/ai<wbr>-document<wbr>-intelligence<wbr>/](https://azure.microsoft.com/en-us/pricing/details/ai-document-intelligence/)
23. Google Cloud, "Document AI pricing," accessed November 10, 2026. [cloud<wbr>.google<wbr>.com<wbr>/document<wbr>-ai<wbr>/pricing](https://cloud.google.com/document-ai/pricing)
24. Anthropic, "Pricing" (Claude API), accessed November 10, 2026. [platform<wbr>.claude<wbr>.com<wbr>/docs<wbr>/en<wbr>/about<wbr>-claude<wbr>/pricing](https://platform.claude.com/docs/en/about-claude/pricing)
25. Anthropic, "Vision" (image token calculation). [platform<wbr>.claude<wbr>.com<wbr>/docs<wbr>/en<wbr>/build<wbr>-with<wbr>-claude<wbr>/vision](https://platform.claude.com/docs/en/build-with-claude/vision)
26. Google, "Gemini API pricing," accessed November 10, 2026. [ai<wbr>.google<wbr>.dev<wbr>/gemini<wbr>-api<wbr>/docs<wbr>/pricing](https://ai.google.dev/gemini-api/docs/pricing)
27. Google, "Document understanding" (Gemini API). [ai<wbr>.google<wbr>.dev<wbr>/gemini<wbr>-api<wbr>/docs<wbr>/document<wbr>-processing](https://ai.google.dev/gemini-api/docs/document-processing)
28. Cognizant, "Global bank processes documents 98% faster with generative AI," case study. [www<wbr>.cognizant<wbr>.com<wbr>/us<wbr>/en<wbr>/case<wbr>-studies<wbr>/global<wbr>-bank<wbr>-processes<wbr>-documents<wbr>-98<wbr>-percentage<wbr>-faster<wbr>-with<wbr>-generative<wbr>-ai](https://www.cognizant.com/us/en/case-studies/global-bank-processes-documents-98-percentage-faster-with-generative-ai)
29. Evalueserve, "AI-powered spreading transforms lending operations at leading global bank," case study. [www<wbr>.evalueserve<wbr>.com<wbr>/case<wbr>-study<wbr>/ai<wbr>-powered<wbr>-spreading<wbr>-transforms<wbr>-lending<wbr>-operations<wbr>-at<wbr>-leading<wbr>-global<wbr>-bank<wbr>/](https://www.evalueserve.com/case-study/ai-powered-spreading-transforms-lending-operations-at-leading-global-bank/)
30. Board of Governors of the Federal Reserve System, SR 11-7, "Guidance on Model Risk Management," April 4, 2011. [www<wbr>.federalreserve<wbr>.gov<wbr>/supervisionreg<wbr>/srletters<wbr>/sr1107<wbr>.htm](https://www.federalreserve.gov/supervisionreg/srletters/sr1107.htm)
31. Board of Governors of the Federal Reserve System, SR 26-2, "Revised Guidance on Model Risk Management," April 17, 2026. [www<wbr>.federalreserve<wbr>.gov<wbr>/supervisionreg<wbr>/srletters<wbr>/sr2602<wbr>.htm](https://www.federalreserve.gov/supervisionreg/srletters/sr2602.htm)
32. Office of the Comptroller of the Currency, Bulletin 2026-13, "Model Risk Management: Revised Guidance," April 17, 2026. [www<wbr>.occ<wbr>.gov<wbr>/news<wbr>-issuances<wbr>/bulletins<wbr>/2026<wbr>/bulletin<wbr>-2026<wbr>-13<wbr>.html](https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-13.html)
33. Office of the Comptroller of the Currency, Bulletin 2025-26, model risk management for community banks, October 6, 2025. [occ<wbr>.gov<wbr>/news<wbr>-issuances<wbr>/bulletins<wbr>/2025<wbr>/bulletin<wbr>-2025<wbr>-26<wbr>.html](https://occ.gov/news-issuances/bulletins/2025/bulletin-2025-26.html)
34. Office of the Comptroller of the Currency, Bulletin 2023-17, "Third-Party Relationships: Interagency Guidance on Risk Management," June 6, 2023. [www<wbr>.occ<wbr>.gov<wbr>/news<wbr>-issuances<wbr>/bulletins<wbr>/2023<wbr>/bulletin<wbr>-2023<wbr>-17<wbr>.html](https://www.occ.gov/news-issuances/bulletins/2023/bulletin-2023-17.html)
35. Board of Governors of the Federal Reserve System, press release on proposed third-party risk management guidance, September 11, 2026. [www<wbr>.federalreserve<wbr>.gov<wbr>/newsevents<wbr>/pressreleases<wbr>/bcreg20260911a<wbr>.htm](https://www.federalreserve.gov/newsevents/pressreleases/bcreg20260911a.htm)
36. U.S. Department of the Treasury, report on the uses, opportunities and risks of AI in financial services, press release, December 19, 2024. [home<wbr>.treasury<wbr>.gov<wbr>/news<wbr>/press<wbr>-releases<wbr>/jy2760](https://home.treasury.gov/news/press-releases/jy2760)
37. U.S. Department of the Treasury, "Managing Artificial Intelligence-Specific Cybersecurity Risks in the Financial Services Sector," March 2024. [home<wbr>.treasury<wbr>.gov<wbr>/system<wbr>/files<wbr>/136<wbr>/Managing<wbr>-Artificial<wbr>-Intelligence<wbr>-Specific<wbr>-Cybersecurity<wbr>-Risks<wbr>-In<wbr>-The<wbr>-Financial<wbr>-Services<wbr>-Sector<wbr>.pdf](https://home.treasury.gov/system/files/136/Managing-Artificial-Intelligence-Specific-Cybersecurity-Risks-In-The-Financial-Services-Sector.pdf)
38. National Institute of Standards and Technology, NIST AI 600-1, "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile," July 2024. [nvlpubs<wbr>.nist<wbr>.gov<wbr>/nistpubs<wbr>/ai<wbr>/NIST<wbr>.AI<wbr>.600<wbr>-1<wbr>.pdf](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)
39. National Institute of Standards and Technology, NIST AI 100-1, "Artificial Intelligence Risk Management Framework (AI RMF 1.0)," January 2023. [nvlpubs<wbr>.nist<wbr>.gov<wbr>/nistpubs<wbr>/ai<wbr>/NIST<wbr>.AI<wbr>.100<wbr>-1<wbr>.pdf](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf)
40. U.S. Small Business Administration, SOP 50 10, "Lender and Development Company Loan Programs" (version 8.1, effective for loans numbered on or after October 1, 2026). [legacy<wbr>.sba<wbr>.gov<wbr>/document<wbr>/sop<wbr>-50<wbr>-10<wbr>-lender<wbr>-development<wbr>-company<wbr>-loan<wbr>-programs](https://legacy.sba.gov/document/sop-50-10-lender-development-company-loan-programs)
41. M. Bowman, Vice Chair for Supervision, Federal Reserve, speech, May 1, 2026. [www<wbr>.federalreserve<wbr>.gov<wbr>/newsevents<wbr>/speech<wbr>/bowman20260501a<wbr>.htm](https://www.federalreserve.gov/newsevents/speech/bowman20260501a.htm)
42. Office of the Comptroller of the Currency, Bulletin 2026-54, supervisory framework, November 4, 2026. [occ<wbr>.gov<wbr>/news<wbr>-issuances<wbr>/bulletins<wbr>/2026<wbr>/bulletin<wbr>-2026<wbr>-54<wbr>.html](https://occ.gov/news-issuances/bulletins/2026/bulletin-2026-54.html)
43. OpenAI, "API Pricing," accessed November 10, 2026. [developers<wbr>.openai<wbr>.com<wbr>/api<wbr>/docs<wbr>/pricing](https://developers.openai.com/api/docs/pricing)
44. Moody's, launch of Moody's Research Assistant, Business Wire, December 5, 2023. [www<wbr>.businesswire<wbr>.com<wbr>/news<wbr>/home<wbr>/20231205410924<wbr>/en](https://www.businesswire.com/news/home/20231205410924/en)
45. Moody's, "Moody's Brings Credit and Compliance Workflows Directly into Anthropic's Claude," Business Wire, April 9, 2026. [www<wbr>.businesswire<wbr>.com<wbr>/news<wbr>/home<wbr>/20260409047490<wbr>/en<wbr>/Moodys<wbr>-Brings<wbr>-Credit<wbr>-and<wbr>-Compliance<wbr>-Workflows<wbr>-Directly<wbr>-into<wbr>-Anthropics<wbr>-Claude](https://www.businesswire.com/news/home/20260409047490/en/Moodys-Brings-Credit-and-Compliance-Workflows-Directly-into-Anthropics-Claude)
46. Office of the Comptroller of the Currency, news release 2026-29 on revised model risk management guidance, April 17, 2026. [www<wbr>.occ<wbr>.gov<wbr>/news<wbr>-issuances<wbr>/news<wbr>-releases<wbr>/2026<wbr>/nr<wbr>-occ<wbr>-2026<wbr>-29<wbr>.html](https://www.occ.gov/news-issuances/news-releases/2026/nr-occ-2026-29.html)
