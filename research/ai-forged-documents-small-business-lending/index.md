## Executive summary

Small-business lending runs on documents the borrower supplies: bank statements, tax returns, profit-and-loss statements, payroll records and identity papers. Since 2023, generative AI and cheap online template tools have made those documents easier to fake. FinCEN, the FBI and the trade press have all warned about it, and fraud-detection vendors now publish headline rates for how often they flag documents. This paper sets out what is publicly known about AI-assisted document fraud in small-business and SBA lending: how large it is, how it works, how well people and software catch it, and which controls still hold. It separates what vendors say from their own data from what regulators, auditors and researchers confirm.

Key findings:

- **The warnings come from regulators, but the numbers come from vendors.** FinCEN's November 2024 alert says suspicious activity reports describing deepfake media have risen since 2023 and names loan fraud among the schemes [1][3]. The FBI warned the next month that criminals use AI images to fake identity documents [4]. Neither publishes a rate. Every figure on how often documents are forged comes from companies that sell detection tools [6][8][10].
- **The vendor rates are high but not comparable.** Inscribe flagged about 6% of documents it processed in 2025 [6]. Resistant AI says about 9% of 2025 documents showed high-risk markers [8]. Ocrolus says one in eight small-business loan applications in a recent 90-day window contained a suspicious document [10]. They count different things (documents versus applications, "flagged" versus "high risk") and none publishes its definitions or a false-positive rate.
- **Fully AI-generated documents are still a small share. Templates and edits do most of the damage.** Inscribe says AI-generated documents were under 5% of the fraudulent ones it found in 2025, and that template-based fraud still ran two to three times higher in early 2026 [6][7]. What has grown fastest is organised, repeated fraud: Resistant AI reports serial fraud up seven-fold in a year [8], and Inscribe says template fraud rose from 1 in 14 flagged documents in 2024 to 1 in 5 in 2025 [6]. AI matters most as a way to make edits cleaner and faster, not as a source of fakes made from nothing.
- **Bank statements are the main target.** Bank statements are about a quarter of the documents Inscribe flags as AI-generated, and 85.6% of the fraud leaders it surveyed named them as their top concern [6][7]. Most altered documents change financial figures, and a growing share change identity and figures together [6].
- **Human review is not a reliable defence, and the evidence is thin.** The only controlled test found is a small study, written by staff of a detection vendor, in which three experienced loan reviewers checked 134 identity-swapped PDFs. They raised a supported concern on 14 of 132 judgements (10.6%), every time because of a mismatched identifier. No visual cue exposed an edit [14]. A widely repeated claim that lenders' visual catch rate fell from 85% to 5% has no stated source [18].
- **For tax data, the SBA's own rule is the strongest control.** SOP 50 10 8.1 requires lenders (Express aside) to get IRS tax transcripts and reconcile them with the applicant's financials before first disbursement, through IVES or a Form 8821 that the borrower's own preparer may not file [23]. A forged tax return does not survive that check. Bank statements, interim financials and debt schedules have no equivalent federal source.
- **The guaranty is where weak verification shows up.** The SBA's inspector general found that 16 of 32 high-risk guaranty-purchase reversals it sampled were unsupported, including two of four in which IRS tax verification was the issue [26]. GAO found that the SBA's improper-payment reviews check whether documents are present but are not built to spot falsified ones [28].
- **The clearest large case so far is outside the US.** Commonwealth Bank of Australia reportedly referred itself to police in February 2026 over as much as A$1 billion of home loans that may have been obtained with fabricated documents, some reportedly made with AI [20][21][22]. CBA has given few details, and the role of AI is reported rather than confirmed.

## Background

### Why small-business lending is exposed

A small-business loan file is mostly borrower-supplied paper. A lender typically asks for two or three years of business and personal tax returns, recent bank statements, interim financial statements, a debt schedule, a personal financial statement, ownership records and identity documents. Few of these come straight from an independent source. Most arrive as PDFs or phone photos uploaded to a portal.

Three trends have raised the risk. First, applications have moved online, so the lender may never meet the borrower or see original documents. A small-business trade publisher argues that this has removed the local knowledge that once helped experienced lenders spot red flags [18]. Second, lenders have automated the reading of documents. A spreading tool or language model that extracts figures from a statement trusts the page it is given, so a forged statement produces a clean, well-formatted spread. Third, the tools to make convincing fakes have become cheap and easy to use, which is the subject of this paper.

### What changed with generative AI

There are three broad ways to fake a financial document, and AI helps with all of them.

- **Editing a genuine document.** The fraudster takes a real statement or return and changes figures, names or account numbers. PDF editors have allowed this for years. AI tools make the edits faster and help keep fonts, spacing and totals consistent.
- **Filling a template.** Websites sell editable templates that imitate specific banks' statements and other issuers' documents. Resistant AI says it tracked more than 160 such sites offering over 350,000 templates across 65 document types in February 2026, at an average price of about $28 per template [8].
- **Generating from a prompt.** Image and text models can produce a whole document from a description. The best-known demonstration came in March 2025, when users of OpenAI's new image generator in ChatGPT posted realistic fake restaurant receipts [5]. TechCrunch's own attempt had errors, such as totals that did not add up, but the article noted these could be fixed by editing or better prompting. OpenAI said its images carry metadata marking them as made by ChatGPT [5].

Resistant AI describes a fourth category, the "AI bank statement generator": a site that looks like a design or testing tool but produces bank-statement-style files from a prompt, a template or an uploaded example, often with a disclaimer that the output is for testing or education [9]. It also says public chatbots can produce statements with enough prompting [9]. These are the vendor's descriptions. This research found no independent survey of such sites.

### What regulators and law enforcement have said

**FinCEN.** On November 13, 2024, FinCEN issued alert FIN-2024-Alert004 on fraud schemes using deepfake media [1]. It said institutions had filed more suspicious activity reports (SARs) describing suspected deepfakes, especially fake identity documents used to get past identity checks, a rise that one summary dates to 2023 [1][3]. The schemes listed include account opening for money movement and check, card, payment, unemployment and loan fraud [2]. According to two legal and supervisory summaries of the alert, its red flags include:

- a photo that looks altered or does not fit other details, such as an age that does not match the date of birth;
- several identity documents that disagree with each other;
- a third-party webcam plug-in, or a switch of channel after repeated technical glitches, during live verification;
- a customer who declines multifactor authentication;
- an ID photo that matches an image in an online gallery of AI-generated faces;
- deepfake- or AI-text-detection software flagging the customer's photo, video or written responses;
- device or location data that does not fit the identity documents; and
- new accounts with rapid, high-risk transactions or many chargebacks [2][3].

FinCEN asks filers to use the key term "FIN-2024-DEEPFAKEFRAUD" in SARs about these schemes [3], and points to multifactor authentication and live audio or video verification as practices that reduce exposure [2]. The FinCEN alert PDF itself could not be retrieved for this paper, so these details rest on those two summaries.

**FBI.** On December 3, 2024, the FBI's Internet Crime Complaint Center warned that criminals use AI-generated images to make fake driver's licences and fake government and banking credentials, alongside voice cloning and deepfake video [4]. The warning is aimed at the public, not at lenders.

**Bank supervisors.** The OCC's spring 2026 Semiannual Risk Perspective says fraud remains elevated and increasingly sophisticated, and that AI lowers the barrier to fraud and social engineering [31]. It does not discuss forged loan documents or small-business lending fraud specifically. This research found no interagency or SBA guidance aimed at AI-forged loan documents.

![Timeline of warnings, tools and incidents in AI-assisted document fraud from 2023 to 2026](research/ai-forged-documents-small-business-lending/fig1-timeline.svg)

*Figure 1. Warnings, tools and incidents, 2023 to 2026. Regulatory and law-enforcement items from FinCEN, the FBI and SBA OIG [1][4][25][26]; tools and incidents from press and vendor sources [5][8][10][12][20]. Vendor items are announcements, not independently confirmed events. Timeline by the author.*

## How big is the problem?

### Three vendors, three numbers

Three detection vendors have published the figures most often quoted on document fraud in lending. All three are self-reported, drawn from each vendor's own customers, and none has been audited.

**Inscribe** (2026 State of Document Fraud, January 2026, updated July 2026) says about 6% of documents processed on its network in 2025, roughly 1 in 16, showed signs of manipulation, fabrication or misrepresentation [6]. The data covers "millions" of documents from banks, credit unions, fintechs and lenders, without an exact count or a split by lending type. Most verification documents (bank statements, pay stubs, tax forms, business filings) sat at a 4% to 7% baseline, with utility bills higher [6]. The report also includes a survey of 90 fraud and risk leaders fielded in late 2025 [6].

**Resistant AI** (Global Document Fraud Report 2026, February 2026, updated July 2026) says about 9.08% of documents it analysed in 2025 showed high-risk markers, meaning tampering with fraudulent intent or a synthetic document, up 28.5% on 2024. About one in three documents showed some tampering [8]. It describes its data as more than 170 million documents, which appears to be cumulative since 2019. It gives no lending-specific rate in the text; the highest rate it reports is 19.1% for online marketplaces [8].

**Ocrolus** says one in eight of 1.46 million small-business loan applications it analysed over "a recent 90-day period" contained suspicious documents, and that the rate held steady across the window [10]. A later post gives 175,000 flagged applications, which is about 12% [11], and October 2026 announcements say "around 12%" of loan applications it processes contain suspicious activity [12][13]. Ocrolus does not define "suspicious" beyond its high, medium and low risk tiers. Ocrolus Detect uses Resistant AI's forensic engine [12], so the second and third sources are not fully independent.

![Bar chart comparing vendor-reported document fraud rates with their different denominators](research/ai-forged-documents-small-business-lending/fig2-rates.svg)

*Figure 2. Vendor-reported fraud rates, each on its own basis: Inscribe, share of documents flagged in 2025 [6]; Resistant AI, share of documents with high-risk markers in 2025 [8]; Ocrolus, share of small-business applications with a suspicious document over 90 days in 2026 [10]. Not comparable with each other; none is independently verified. Chart by the author.*

These figures are useful as a sign that forged documents are routine, not rare. They are not a measure of fraud losses. A flag is a model output, not a confirmed fraud. A document can be edited for innocent reasons (a borrower redacting an account number, an accountant correcting a PDF), and none of the vendors publishes how many flags turn out to be false. The populations are also self-selected: lenders who buy fraud detection may be the ones who see more fraud.

### Independent signals

Independent evidence is scarcer and mostly indirect.

- **Practitioner surveys.** A 2025 webinar poll of fraud specialists, reported by a bankers' bank newsletter, found 40% had seen AI-generated fake documents, 21% had not and 39% were unsure [17]. The large "unsure" share is itself a finding.
- **Press accounts.** American Banker reported in February 2026 that banks were coping with AI-faked documents; one consultant quoted there called them "nearly impossible to spot" and made a fake receipt with Microsoft Copilot to show it [16]. Only the summary of that article could be read for this paper.
- **Enforcement records.** The SBA inspector general's spring 2026 report describes many pandemic-loan cases built on falsified tax forms, payroll records and bank statements, including a scheme that spanned 7(a), EIDL and PPP loans, involved 19 defendants and caused more than $24 million in losses [25]. These cases show the methods. They do not show how much AI was used, and the report does not say.
- **Pandemic lending.** The PPP, which ran under 7(a) authority, is the largest natural experiment in remote, document-light lending. The SBA OIG found suspected-fraud rates of 24.63% at non-bank lenders against 4.3% at traditional lenders [29], and peer-reviewed research links suspicious PPP loans to particular fintech lenders [30]. That fraud predates today's generative tools, and PPP loans carried no credit risk for the lender, so it is a warning about weak verification rather than evidence about AI.

### What kind of fraud is growing

The vendor reports agree on the shape of the problem even where their numbers differ.

**Templates and serial fraud are growing faster than pure AI generation.** Inscribe says template-based fraud rose from 1 in 14 flagged documents in 2024 to 1 in 5 in 2025, and in the first half of 2026 still ran at two to three times the volume of AI-generated fraud [6][7]. Resistant AI says serial fraud, where the same template or base document is reused across many applications, rose seven-fold from 2024 to 2025 and made up 23% of high-risk documents [8]. It says 80% of serial campaigns last less than 25 days [8], which suggests organised groups that test a lender, exploit it briefly and move on.

**Fully AI-generated documents are rising from a low base.** Inscribe launched an AI-generated-document detector in April 2025. It says such documents were under 5% of fraudulent documents in 2025, but that monthly volume rose about fourfold between June 2025 and May 2026 [6][7]. Resistant AI says about 5% of fraud declines in one sample came from AI-generated documents [8]. Its report is inconsistent on growth, giving both a 90-fold and a 90% increase in generative-AI detections [8]. Both vendors say their AI figures are a floor, since an AI-edited real document is harder to classify than one made from scratch [6][7].

**Most edits change the money.** Inscribe says 91.2% of altered documents in 2025 had financial edits, and that the share of altered documents with both identity and financial edits rose from 40.2% in 2024 to 59.8% in 2025 [6]. For a lender, this means a forged statement more often comes with a borrowed or invented identity than before.

![Paired bar chart of Inscribe's 2024 and 2025 figures on template fraud and edit types](research/ai-forged-documents-small-business-lending/fig3-shift.svg)

*Figure 3. How flagged documents changed from 2024 to 2025 on Inscribe's network: share of flagged documents that were template-based, share of altered documents with financial edits, and share with both identity and financial edits [6]. Vendor data, not independently verified. Chart by the author.*

**Bank statements lead.** In Inscribe's June 2026 data, bank statements were 23.7% of documents flagged as AI-generated, ahead of invoices and payslips at 13.9% each [6]. In its survey, 85.6% of fraud leaders named bank statements as their top concern [6]. That matters for small-business credit, where bank statements drive cash-flow analysis and, for many non-bank lenders, the whole credit decision.

### The Commonwealth Bank case

The largest reported case involving AI-assisted documents is Australian and concerns home loans, but it is relevant to small-business lenders for two reasons. In February 2026 the Australian Financial Review reported that CBA believed up to A$1 billion of home loans might have been obtained fraudulently, partly with AI-generated documents, and that CBA had reported the matter to police and the regulator [20][22]. Reporting cited by a mortgage trade title said the loans included fake income statements from several accountants, written through broker and referral channels [21]. CBA itself has said little publicly beyond a spokesman's comment that the industry faces sustained and rising attempted fraud through broking and referral channels [20][21]. In March 2026 the securities regulator, ASIC, told a parliamentary committee it was making compliance inquiries [21].

First, the reported method (fabricated income evidence from purported accountants) is the self-employed and small-business borrower's route to a loan. A July 2026 PYMNTS piece, citing Australian press, describes many of the applicants as purported small businesses with AI-generated accounts, profits and invoices [19]; this detail could not be checked against a primary source. Second, the case was reportedly found partly through whistleblowers, not detection software [20]. The role of AI in the case is reported, not confirmed by CBA or a court.

## How well does detection work?

### People

The only controlled test of human reviewers found for this paper is a 2026 preprint, "Can Loan Processors and Underwriters Spot AI-Edited Statements?" by Ren, Shen, Duong and Raj [14]. The authors work for Scam.ai, which sells document-fraud detection, and say so in the paper. They took 47 genuine financial PDFs from one consenting person, used AI coding agents and an in-house PDF editing tool to swap in three fictitious identities, and kept the amounts, dates and balances. Three freelancers with underwriting or loan-processing experience, paid $25 to $30 each and not told the files were altered, each reviewed one package.

Of 132 judgements, reviewers marked 115 clear. Fourteen (10.6%) raised a concern that the edits supported, and all fourteen came from identifiers that did not match, such as account numbers within a file or tax IDs across files. Where a document had an internal mismatch, reviewers caught 9 of 23 (39.1%); where the only mismatch was across files, 5 of 78 (6.4%); where there was none, 0 of 31. No reviewer pointed to a visual cue that actually exposed an edit [14].

![Bar chart of reviewer detection by type of inconsistency in the Ren et al. study](research/ai-forged-documents-small-business-lending/fig4-reviewers.svg)

*Figure 4. Share of reviewer judgements that raised an edit-supported concern, by the kind of inconsistency the forged file contained, in a study of three reviewers and 132 judgements [14]. Small sample; authors employed by a detection vendor. Chart by the author.*

The authors are clear about the limits: three reviewers, one source of documents, no genuine control files (so false positives cannot be measured), and edits to identity fields only [14]. A fully consistent forged package was not tested. Read narrowly, the study suggests that a careful forger who keeps identifiers consistent would pass this kind of review, and that cross-document checks are where humans did catch problems, though rarely.

The industry claim that lenders could once spot 85% of fake statements by eye and now only 5%, repeated in SBA trade commentary, has no cited source and should not be relied on [18].

### Software

Detection products combine several kinds of signal. From vendor descriptions, the main ones are:

- **File forensics.** Metadata, the software that produced the PDF, edit history, embedded fonts and object structure. Resistant AI says high-risk documents are more than five times as likely as normal ones to have stripped metadata [8], so missing metadata is itself a signal.
- **Visual forensics.** Pixel-level traces of editing or generation in images and scans.
- **Content consistency.** Whether balances roll forward, totals add up and identifiers match across pages and documents.
- **Network signals.** Whether the same template, layout or base document has appeared in other applications, which is how serial fraud is found [8][10].
- **Provenance markers.** Metadata or watermarks that some AI tools add to their output [5]. These help only when the fraudster leaves them in, and a re-saved or photographed copy loses them.

Ocrolus says each document receives a high, medium or low authenticity score with reason codes, so that clean files can pass straight through and suspicious ones go to review [10][12]. Resistant AI says its generative-AI detector has a false-positive rate under 1% [9], without describing the test.

Academic research on document tampering is real but narrower than the products. The best-known benchmark, DocTamper (Qu et al., CVPR 2023), contains 170,000 document images with tampered text; the authors' model improved F-measure over prior methods both on the test set and on two cross-domain sets, and was designed to be robust to image compression [15]. Benchmarks of this kind test whether an edit can be found in an image. They do not test whether a fully generated, internally consistent document can be told apart from a real one, which is the harder problem lenders now face. This research found no independent, published benchmark of commercial detection tools on lending documents.

### The structural limit of document-only checks

Detection tools and human reviewers share a ceiling: both judge the document, not the facts behind it. A forger who controls a whole package, keeps identifiers consistent, makes balances roll forward and strips or rebuilds metadata leaves fewer traces with each generation of tools. The vendors make the same point in their own way, pairing forensic scores with "data validations and deterministic processes" [11] and recommending that lenders re-review recent funded loans [10]. The durable answer is to check documents against data the borrower did not supply.

| Control | What it checks | Strength against AI-made fakes | Main gap | Public evidence |
|---|---|---|---|---|
| Visual review by staff | Look and feel, obvious errors | Weak | Clean edits leave no visible trace | One small vendor-authored study [14] |
| Cross-document consistency | Names, account numbers, tax IDs, totals across the file | Moderate | Fails against a consistent forged package | Same study: the only cue that worked [14] |
| Forensic detection software | Metadata, pixels, structure, template reuse | Moderate to strong for edits and templates | Unknown false-positive rates; weaker on clean generation and re-photographed copies | Vendor claims only [6][8][10] |
| IRS transcript reconciliation | Filed tax returns against the borrower's financials | Strong for tax data | Covers only filed returns, not bank statements or interim figures; lag of up to a year | SBA rule [23]; OIG findings [26] |
| Direct bank data | Balances and transactions from the bank or an account connection | Strong for statements | Borrower must connect; not required by SBA rules | Recommended in trade commentary [18] |
| Identity verification | That the person and business exist and match | Strong against stolen or synthetic identities | Deepfake attacks on remote verification | FinCEN red flags [1][2] |

*Table 1. Controls against forged documents in small-business lending. The strength column is the author's assessment from the sources cited, not a measured result.*

## What SBA rules already require

### Tax transcripts

The SBA's lender SOP is unusually specific about checking tax data, and it is the strongest built-in defence against forged returns in SBA lending. Under SOP 50 10 8.1, effective October 1, 2026 [23]:

- The purpose of tax verification is to confirm that the applicant filed its business returns and that the financial statements it gave the lender agree with what it filed. An applicant that has not filed required federal returns is ineligible.
- Except in the Express and Export Express programs, lenders must obtain tax return transcripts and reconcile any discrepancies before first disbursement for 7(a), or before requesting debenture funding for 504. Three years are required under the industry size standard and two under the alternative size standard.
- Transcripts come through the IRS Income Verification Express Service (IVES), directly or via an IVES participant, or through Form 8821 with the lender (and any service provider) named as designee. The borrower, its own tax preparer or its enrolled agent may not file the 8821. The transcript must show changes to the original return.
- If the IRS has no record of a required return, no disbursement may be made until the issue is resolved, subject to narrow exceptions with proof of tax paid or refunded.
- A delegated lender may close if the IRS does not respond in time, but if it cannot later obtain and reconcile the transcript, the guaranty may be repaired or denied. Express lenders may disburse first but must verify afterwards, on the same terms.
- Where a lender's scoring model does not use business financials, it must still get transcripts to confirm filing and size, but need not reconcile them [23].

The IRS describes IVES as a consent-based service that releases transcripts to lenders on a signed Form 4506-C [24]. The design of the rule is what makes it robust: the data comes from the IRS to the lender, not through the borrower, and the person who prepared the return cannot be the channel.

The rule has three limits that matter for AI forgery. It covers tax returns, not bank statements, interim financial statements, debt schedules or personal financial statements. Transcripts lag: a business's most recent filed year may be well over a year old, so a borrower's current trading rests on documents the IRS cannot confirm. And it says nothing about a fully fabricated business that has filed fabricated returns, which is an identity and existence problem, not a document problem.

### Guaranty consequences

Verification failures surface when a loan defaults and the lender asks the SBA to honour its guaranty. The SBA can deny or reduce its guaranty when a lender fails materially to comply with program rules [32]. In August 2026 the SBA OIG reviewed the SBA's process for deciding guaranty purchases that staff had first recommended for repair or denial. Of 545 such loans, the SBA overturned 197 (36%), paying about $168 million. The OIG sampled 32 high-risk overturned loans and found 16 unsupported, with about $11.5 million in questioned costs. Two of the four in which IRS tax verification was the issue were unsupported [26].

The report does not discuss forged documents. It shows, though, that tax verification failures are a recognised reason to deny a guaranty, and that the SBA's own review of them has been inconsistent [26]. A lender that relies on AI-extracted figures and skips or fudges reconciliation is carrying that risk itself.

### Wider oversight gaps

Two federal reports show how little of the SBA's oversight is designed to find falsified documents. GAO's November 2026 review of SBA improper payments says the reviews check whether required documentation is present but are not designed to identify falsified documentation, and that the SBA has not done recovery audits for 7(a) in about ten years [28]. In March 2026 the SBA OIG found that from August 2023 to December 2024 the SBA disbursed 73,302 7(a) loans, worth about $32 billion, without fully screening applicants for several eligibility requirements, before moving that screening back to lenders in June 2025 [25][27]. Neither report mentions AI. Both mean that the lender's own controls are, in practice, the main line of defence.

The SOP also gives lenders a reporting route: it lists a dedicated mailbox for notifying the SBA's Office of Credit Risk Management of suspected fraud [23]. Banks have the separate SAR duty, and FinCEN's key term applies where deepfake media is involved [3].

## Implications for lenders and credit teams

1. **Treat every uploaded document as unverified until matched to a source.** Use AI to read documents, but build the credit decision on figures confirmed by data the borrower did not supply: IRS transcripts for tax data, direct bank data for statements, and payroll or accounting-system connections where available. This also protects the guaranty [23][26].

2. **Reconcile tax transcripts before relying on extracted financials.** For SBA loans, run the IVES or 8821 request at intake rather than at closing, so a mismatch is found before the credit memo is written. Make the reconciliation a structured step with its own record, not a sentence in the memo.

3. **Get bank data from the bank where you can.** Bank statements are the most-forged document type in the vendor data [6][7] and have no federal verification channel. Account connections or bank-issued statements remove most of the forgery risk. Where a borrower refuses, treat the refusal as information.

4. **Make cross-document checks automatic.** The one cue that worked for human reviewers was identifiers that did not match [14]. Software does this better than people: compare names, addresses, account numbers, tax IDs and figures across every document in the file, and against the bureau and the transcript.

5. **Use forensic detection as a triage layer, and measure it.** Vendor tools are useful for finding edits, templates and serial fraud across many applications [8][10]. Ask vendors for false-positive rates on comparable files, run a back-test on your own recent funded loans as Ocrolus itself suggests [10], and track how many flags turn out to be fraud. Under the April 2026 model risk guidance, traditional machine-learning models stay in scope while generative AI is excluded [33]; a detection model that drives decisions should be validated like any other model.

6. **Watch the identity, not just the paper.** Inscribe's data shows identity and financial edits increasingly travel together [6]. Follow FinCEN's red flags in remote onboarding, use live verification and multifactor authentication, and confirm that the business exists through its filings, location and transaction history [1][2].

7. **Look for patterns across applications.** Serial fraud reuses the same templates and base documents across many files, often within a few weeks [8]. A lender that compares applications against each other, or uses a vendor network that does, will see campaigns that no single-file review can.

8. **Train staff on where the weak points are, not on visual tells.** Visual tells will keep disappearing. Training should cover the controls that still work (source data, cross-checks, escalation) and the behaviours that signal risk: urgency, reluctance to connect accounts, broker-only contact and documents that arrive only as images.

9. **Close the loop on confirmed fraud.** Report through SAR and, for SBA loans, to the SBA's fraud mailbox [3][23]. Feed confirmed cases back into detection rules and vendor models.

## Open questions and limitations

- **No independent prevalence data.** Every rate in this paper comes from a detection vendor's own network, without published definitions, false-positive rates or audits [6][8][10]. Regulators confirm the trend but publish no rate [1][31].
- **AI's share is uncertain.** Vendors classify only documents they can recognise as AI-generated. AI-edited real documents are not measured in aggregate, so AI's true share of forgery is unknown [6][7].
- **The only human-review study is small and vendor-authored.** Three reviewers, one source of documents and no genuine controls [14]. It is a pointer, not a benchmark.
- **No public benchmark of detection tools.** This research found no independent comparison of commercial detection products on lending documents. Academic benchmarks such as DocTamper test text tampering in images, not consistent synthetic packages [15].
- **The CBA case is reported, not adjudicated.** The A$1 billion figure and the role of AI come from press reports; CBA has disclosed little [20][21][22]. The description of applicants as purported small businesses is from a secondary source [19].
- **Unsourced trade claims.** The 85%-to-5% visual-detection figure [18] and some vendor statistics (such as the "$25 fake statement" cited by Ocrolus from Resistant AI research [10]) could not be traced to underlying data. Resistant AI's own report gives an average template price of $28.29 [8].
- **Primary documents read through summaries.** The FinCEN alert PDF could not be retrieved; its red flags and key term come from Ballard Spahr and NASCUS summaries [2][3]. SBA OIG Report 26-07 was read through the OIG's semiannual report [25]. The American Banker article was available only as a summary [16]. OpenAI's own documentation of its image provenance metadata could not be read; its claim comes via TechCrunch [5].
- **Scope.** This paper covers US small-business and SBA lending, with one Australian case. It does not cover state law, mortgage-specific rules, or the CFPB's open-banking rule. It is analysis, not legal advice.

## Sources

1. Financial Crimes Enforcement Network, "FinCEN Issues Alert on Fraud Schemes Involving Deepfake Media Targeting Financial Institutions" (FIN-2024-Alert004), November 13, 2024. [www<wbr>.fincen<wbr>.gov<wbr>/news<wbr>/news<wbr>-releases<wbr>/fincen<wbr>-issues<wbr>-alert<wbr>-fraud<wbr>-schemes<wbr>-involving<wbr>-deepfake<wbr>-media<wbr>-targeting<wbr>-financial](https://www.fincen.gov/news/news-releases/fincen-issues-alert-fraud-schemes-involving-deepfake-media-targeting-financial)
2. Ballard Spahr, Consumer Finance Monitor, "FinCEN Alert: Fraud Schemes Using Generative Artificial Intelligence to Circumvent Financial Institutions' Identity Verification, Authentication, and Due Diligence Controls," November 20, 2024. [www<wbr>.consumerfinancemonitor<wbr>.com<wbr>/2024<wbr>/11<wbr>/20<wbr>/fincen<wbr>-alert<wbr>-fraud<wbr>-schemes<wbr>-using<wbr>-generative<wbr>-artificial<wbr>-intelligence<wbr>-to<wbr>-circumvent<wbr>-financial<wbr>-institutions<wbr>-identity<wbr>-verification<wbr>-authentication<wbr>-and<wbr>-due<wbr>-diligence<wbr>-controls<wbr>/](https://www.consumerfinancemonitor.com/2024/11/20/fincen-alert-fraud-schemes-using-generative-artificial-intelligence-to-circumvent-financial-institutions-identity-verification-authentication-and-due-diligence-controls/)
3. NASCUS, "Summary: FinCEN Alert on Fraud Schemes Involving Deepfake Media Targeting Financial Institutions," December 2, 2024. [www<wbr>.nascus<wbr>.org<wbr>/summaries<wbr>/2024<wbr>-fincen<wbr>-summaries<wbr>/nascus<wbr>-summary<wbr>-fincen<wbr>-alert<wbr>-on<wbr>-fraud<wbr>-schemes<wbr>-involving<wbr>-deepfake<wbr>-media<wbr>-targeting<wbr>-financial<wbr>-institutions<wbr>/](https://www.nascus.org/summaries/2024-fincen-summaries/nascus-summary-fincen-alert-on-fraud-schemes-involving-deepfake-media-targeting-financial-institutions/)
4. FBI Internet Crime Complaint Center, "Criminals Use Generative Artificial Intelligence to Facilitate Financial Fraud," Alert I-120324-PSA, December 3, 2024. [www<wbr>.ic3<wbr>.gov<wbr>/PSA<wbr>/2024<wbr>/PSA241203](https://www.ic3.gov/PSA/2024/PSA241203)
5. Charles Rollet, "ChatGPT's new image generator is really good at faking receipts," TechCrunch, March 31, 2025. [techcrunch<wbr>.com<wbr>/2025<wbr>/03<wbr>/31<wbr>/chatgpts<wbr>-new<wbr>-image<wbr>-generator<wbr>-is<wbr>-really<wbr>-good<wbr>-at<wbr>-faking<wbr>-receipts<wbr>/](https://techcrunch.com/2025/03/31/chatgpts-new-image-generator-is-really-good-at-faking-receipts/)
6. Inscribe, "2026 State of Document Fraud" (vendor report), January 20, 2026, with July 2026 update. [www<wbr>.inscribe<wbr>.ai<wbr>/reports<wbr>/2026<wbr>-document<wbr>-fraud<wbr>-report](https://www.inscribe.ai/reports/2026-document-fraud-report)
7. Jessica Lara, Inscribe, "What does AI-generated document fraud look like in 2026?" (vendor blog), July 8, 2026. [www<wbr>.inscribe<wbr>.ai<wbr>/blog<wbr>/reports<wbr>-ai<wbr>-document<wbr>-fraud<wbr>-mid<wbr>-year<wbr>-2026](https://www.inscribe.ai/blog/reports-ai-document-fraud-mid-year-2026)
8. Resistant AI, "Global Document Fraud Report 2026" (vendor report), February 26, 2026, updated July 22, 2026. [resistant<wbr>.ai<wbr>/blog<wbr>/document<wbr>-fraud<wbr>-report<wbr>-2026](https://resistant.ai/blog/document-fraud-report-2026)
9. David Gregory, Resistant AI, "What is an AI bank statement generator?" (vendor blog), May 18, 2026. [resistant<wbr>.ai<wbr>/blog<wbr>/ai<wbr>-bank<wbr>-statement<wbr>-generator](https://resistant.ai/blog/ai-bank-statement-generator)
10. David Kistler, Ocrolus, "1 in 8 SMB applications contain suspicious documents: what lenders should do next" (vendor blog), October 29, 2026. [www<wbr>.ocrolus<wbr>.com<wbr>/blog<wbr>/smb<wbr>-applications<wbr>-suspicious<wbr>-documents<wbr>/](https://www.ocrolus.com/blog/smb-applications-suspicious-documents/)
11. David Kistler, Ocrolus, "AI-generated document fraud: what catches a fake statement" (vendor blog, interview with CEO Sam Bobley), November 3, 2026. [www<wbr>.ocrolus<wbr>.com<wbr>/blog<wbr>/fake<wbr>-bank<wbr>-statement<wbr>-one<wbr>-prompt<wbr>-ai<wbr>-document<wbr>-fraud<wbr>/](https://www.ocrolus.com/blog/fake-bank-statement-one-prompt-ai-document-fraud/)
12. Claudia Pincovski, "Ocrolus adds Resistant AI forensics to Detect fraud tool," The Paypers, October 9, 2026. [thepaypers<wbr>.com<wbr>/fraud<wbr>-and<wbr>-fincrime<wbr>/news<wbr>/ocrolus<wbr>-adds<wbr>-resistant<wbr>-ai<wbr>-forensics<wbr>-to<wbr>-detect<wbr>-fraud<wbr>-tool](https://thepaypers.com/fraud-and-fincrime/news/ocrolus-adds-resistant-ai-forensics-to-detect-fraud-tool)
13. David Penn, "Ocrolus Adds Document Fraud Detection to Mortgage Workflows," Finovate, October 13, 2026. [finovate<wbr>.com<wbr>/ocrolus<wbr>-adds<wbr>-document<wbr>-fraud<wbr>-detection<wbr>-to<wbr>-mortgage<wbr>-workflows<wbr>/](https://finovate.com/ocrolus-adds-document-fraud-detection-to-mortgage-workflows/)
14. Simiao Ren, Xingyu Shen, Tommy Duong and Ankit Raj (Scam.ai), "Can Loan Processors and Underwriters Spot AI-Edited Statements? An Empirical Study," arXiv:2610.30758, 2026. [arxiv<wbr>.org<wbr>/abs<wbr>/2610<wbr>.30758](https://arxiv.org/abs/2610.30758)
15. Chenfan Qu, Chongyu Liu, Yuliang Liu, Xinhong Chen, Dezhi Peng, Fengjun Guo and Lianwen Jin, "Towards Robust Tampered Text Detection in Document Image: New Dataset and New Solution," CVPR 2023, pp. 5937–5946. [openaccess<wbr>.thecvf<wbr>.com<wbr>/content<wbr>/CVPR2023<wbr>/html<wbr>/Qu<wbr>_Towards<wbr>_Robust<wbr>_Tampered<wbr>_Text<wbr>_Detection<wbr>_in<wbr>_Document<wbr>_Image<wbr>_New<wbr>_Dataset<wbr>_CVPR<wbr>_2023<wbr>_paper<wbr>.html](https://openaccess.thecvf.com/content/CVPR2023/html/Qu_Towards_Robust_Tampered_Text_Detection_in_Document_Image_New_Dataset_CVPR_2023_paper.html)
16. Penny Crosman, "'This is an arms race': Banks cope with AI-faked documents," American Banker, February 5, 2026 (summary only read). [www<wbr>.americanbanker<wbr>.com<wbr>/news<wbr>/this<wbr>-is<wbr>-an<wbr>-arms<wbr>-race<wbr>-banks<wbr>-cope<wbr>-with<wbr>-ai<wbr>-faked<wbr>-documents](https://www.americanbanker.com/news/this-is-an-arms-race-banks-cope-with-ai-faked-documents)
17. PCBB, BID Daily Newsletter, "Fighting AI Document Fraud: Tools and Tactics for CFIs," March 12, 2026. [www<wbr>.pcbb<wbr>.com<wbr>/bid<wbr>/2026<wbr>-03<wbr>-12<wbr>-fighting<wbr>-ai<wbr>-document<wbr>-fraud<wbr>-tools<wbr>-and<wbr>-tactics<wbr>-for<wbr>-cfis](https://www.pcbb.com/bid/2026-03-12-fighting-ai-document-fraud-tools-and-tactics-for-cfis)
18. Bob Coleman, "AI-Generated Fraud Creates New Challenges for SBA Lenders," Coleman Report (commentary), September 19, 2025. [colemanreport<wbr>.com<wbr>/ai<wbr>-powered<wbr>-fraud<wbr>-puts<wbr>-sba<wbr>-loan<wbr>-programs<wbr>-at<wbr>-risk<wbr>/](https://colemanreport.com/ai-powered-fraud-puts-sba-loan-programs-at-risk/)
19. PYMNTS, "AI Cracked the Mortgage Verification System," July 10, 2026. [www<wbr>.pymnts<wbr>.com<wbr>/news<wbr>/artificial<wbr>-intelligence<wbr>/2026<wbr>/ai<wbr>-cracked<wbr>-mortgage<wbr>-verification<wbr>-system<wbr>/](https://www.pymnts.com/news/artificial-intelligence/2026/ai-cracked-mortgage-verification-system/)
20. Toby Walsh, "Why Commonwealth Bank's $1 billion suspected loan fraud should change how we bank and do business," UNSW Newsroom (from The Conversation), March 2026. [www<wbr>.unsw<wbr>.edu<wbr>.au<wbr>/newsroom<wbr>/news<wbr>/2026<wbr>/03<wbr>/commonwealth<wbr>-bank<wbr>-one<wbr>-billion<wbr>-dollars<wbr>-suspected<wbr>-loan<wbr>-fraud<wbr>-change<wbr>-AI](https://www.unsw.edu.au/newsroom/news/2026/03/commonwealth-bank-one-billion-dollars-suspected-loan-fraud-change-AI)
21. Annie Kane, "ASIC confirms it is investigating CBA loan fraud," The Adviser, March 9, 2026. [www<wbr>.theadviser<wbr>.com<wbr>.au<wbr>/compliance<wbr>/48173<wbr>-asic<wbr>-confirms<wbr>-it<wbr>-is<wbr>-investigating<wbr>-cba<wbr>-loan<wbr>-fraud](https://www.theadviser.com.au/compliance/48173-asic-confirms-it-is-investigating-cba-loan-fraud)
22. The Nightly, "Commonwealth Bank reports itself to police over possible $1 billion mortgage fraud scheme," February 27, 2026. [thenightly<wbr>.com<wbr>.au<wbr>/business<wbr>/commonwealth<wbr>-bank<wbr>-reports<wbr>-itself<wbr>-to<wbr>-police<wbr>-over<wbr>-possible<wbr>-1<wbr>-billion<wbr>-mortgage<wbr>-fraud<wbr>-scheme<wbr>-c<wbr>-21776944](https://thenightly.com.au/business/commonwealth-bank-reports-itself-to-police-over-possible-1-billion-mortgage-fraud-scheme-c-21776944)
23. U.S. Small Business Administration, SOP 50 10 8.1, Lender and Development Company Loan Programs (Technical Policy Updates), effective October 1, 2026. [legacy<wbr>.sba<wbr>.gov<wbr>/sites<wbr>/default<wbr>/files<wbr>/2026<wbr>-10<wbr>/SOP<wbr>%2050<wbr>%2010<wbr>%208<wbr>.1<wbr>%20Technical<wbr>%20Policy<wbr>%20Updates<wbr>%20effective<wbr>%20<wbr>%2010<wbr>.1<wbr>.2026<wbr>.docx](https://legacy.sba.gov/sites/default/files/2026-10/SOP%2050%2010%208.1%20Technical%20Policy%20Updates%20effective%20%2010.1.2026.docx)
24. Internal Revenue Service, "Income Verification Express Service," reviewed September 11, 2026. [www<wbr>.irs<wbr>.gov<wbr>/individuals<wbr>/income<wbr>-verification<wbr>-express<wbr>-service](https://www.irs.gov/individuals/income-verification-express-service)
25. SBA Office of Inspector General, Semiannual Report to Congress, October 1, 2025 – March 31, 2026. [www<wbr>.oversight<wbr>.gov<wbr>/sites<wbr>/default<wbr>/files<wbr>/documents<wbr>/reports<wbr>/2026<wbr>-05<wbr>/SBA<wbr>%20OIG<wbr>%20Spring<wbr>%202026<wbr>%20Semiannual<wbr>%20Report<wbr>%20to<wbr>%20Congress<wbr>.pdf](https://www.oversight.gov/sites/default/files/documents/reports/2026-05/SBA%20OIG%20Spring%202026%20Semiannual%20Report%20to%20Congress.pdf)
26. SBA Office of Inspector General, Report 26-12, "SBA's 7(a) Loan Guaranty Purchase Denial Review Process," August 27, 2026. [www<wbr>.oversight<wbr>.gov<wbr>/sites<wbr>/default<wbr>/files<wbr>/documents<wbr>/reports<wbr>/2026<wbr>-08<wbr>/SBA<wbr>%20OIG<wbr>%20Report<wbr>%2026<wbr>-12<wbr>%20<wbr>-<wbr>%20SBA<wbr>'s<wbr>%207<wbr>%28a<wbr>%29<wbr>%20Loan<wbr>%20Guaranty<wbr>%20Purchase<wbr>%20Denial<wbr>%20Review<wbr>%20Process<wbr>.pdf](https://www.oversight.gov/sites/default/files/documents/reports/2026-08/SBA%20OIG%20Report%2026-12%20-%20SBA's%207%28a%29%20Loan%20Guaranty%20Purchase%20Denial%20Review%20Process.pdf)
27. SBA Office of Inspector General, Report 26-07, "SBA's Screening of 7(a) Loan Applications Under its Risk Mitigation Framework," March 2026 (read via the semiannual report [25]). [www<wbr>.oversight<wbr>.gov<wbr>/sites<wbr>/default<wbr>/files<wbr>/documents<wbr>/reports<wbr>/2026<wbr>-03<wbr>/SBA<wbr>%20OIG<wbr>%20Report<wbr>%2026<wbr>-07<wbr>%20<wbr>-<wbr>%20SBA<wbr>'s<wbr>%20Screening<wbr>%20of<wbr>%207<wbr>%28a<wbr>%29<wbr>%20Loan<wbr>%20Applications<wbr>%20Under<wbr>%20its<wbr>%20Risk<wbr>%20Mitigation<wbr>%20Framework<wbr>.pdf](https://www.oversight.gov/sites/default/files/documents/reports/2026-03/SBA%20OIG%20Report%2026-07%20-%20SBA's%20Screening%20of%207%28a%29%20Loan%20Applications%20Under%20its%20Risk%20Mitigation%20Framework.pdf)
28. U.S. Government Accountability Office, GAO-27-107701, "Small Business Administration: Opportunities Exist to Improve Improper Payment Estimation and Recovery Processes," released November 9, 2026. [files<wbr>.gao<wbr>.gov<wbr>/reports<wbr>/GAO<wbr>-27<wbr>-107701<wbr>/index<wbr>.html](https://files.gao.gov/reports/GAO-27-107701/index.html)
29. SBA Office of Inspector General, Report 25-04, oversight of non-bank lenders and lender service providers in the Paycheck Protection Program, November 13, 2024. [www<wbr>.oversight<wbr>.gov<wbr>/sites<wbr>/default<wbr>/files<wbr>/documents<wbr>/reports<wbr>/2024<wbr>-11<wbr>/SBA<wbr>%20OIG<wbr>%20Report<wbr>%2025<wbr>-04<wbr>.pdf](https://www.oversight.gov/sites/default/files/documents/reports/2024-11/SBA%20OIG%20Report%2025-04.pdf)
30. John M. Griffin, Samuel Kruger and Prateek Mahajan, "Did FinTech Lenders Facilitate PPP Fraud?" Journal of Finance 78(3), 2023, 1777–1827. [ideas<wbr>.repec<wbr>.org<wbr>/a<wbr>/bla<wbr>/jfinan<wbr>/v78y2023i3p1777<wbr>-1827<wbr>.html](https://ideas.repec.org/a/bla/jfinan/v78y2023i3p1777-1827.html)
31. Office of the Comptroller of the Currency, Semiannual Risk Perspective, Spring 2026. [www<wbr>.occ<wbr>.gov<wbr>/publications<wbr>-and<wbr>-resources<wbr>/publications<wbr>/semiannual<wbr>-risk<wbr>-perspective<wbr>/files<wbr>/pub<wbr>-semiannual<wbr>-risk<wbr>-perspective<wbr>-spring<wbr>-2026<wbr>.pdf](https://www.occ.gov/publications-and-resources/publications/semiannual-risk-perspective/files/pub-semiannual-risk-perspective-spring-2026.pdf)
32. Electronic Code of Federal Regulations, 13 CFR 120.524, "When is SBA released from liability on its guarantee?" [www<wbr>.ecfr<wbr>.gov<wbr>/current<wbr>/title<wbr>-13<wbr>/chapter<wbr>-I<wbr>/part<wbr>-120<wbr>/subpart<wbr>-E<wbr>/subject<wbr>-group<wbr>-ECFR4c8b7f0a1a9f1f9<wbr>/section<wbr>-120<wbr>.524](https://www.ecfr.gov/current/title-13/chapter-I/part-120/subpart-E/subject-group-ECFR4c8b7f0a1a9f1f9/section-120.524)
33. Board of Governors of the Federal Reserve System, SR 26-2, "Revised Guidance on Model Risk Management," April 17, 2026. [www<wbr>.federalreserve<wbr>.gov<wbr>/supervisionreg<wbr>/srletters<wbr>/SR2602<wbr>.htm](https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm)
