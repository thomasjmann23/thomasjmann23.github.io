## Executive summary

The SBA's 7(a) and 504 programs guaranteed about 62,000 loans worth $39.5 billion in fiscal 2026 [23]. Over the past eighteen months, a handful of the largest 7(a) lenders have started to put generative AI into how those loans are made: helping applicants fill in SBA forms, spreading financial statements, assembling credit packages and checking files against SBA rules. In the same period the SBA tightened its underwriting rules, retired the credit score it used to screen small loans, and narrowed which vendors lenders may use. This paper maps where AI is used across the 7(a) and 504 process, sets out what SBA rules and wider banking guidance say about it, and assesses the risks. It separates what lenders and vendors say about themselves from what anyone independent has confirmed.

Key findings:

- **No SBA rule mentions AI by name, but the SOP already decides how AI may be used.** Neither the current lender SOP (50 10 8.1, effective October 1, 2026) nor its predecessor uses the words "artificial intelligence" or "machine learning" for lender underwriting [1][2]. What they do say is specific: a lender's scoring model can only sit on top of its own credit analysis, a vendor whose technology pre-qualifies or underwrites is a Lender Service Provider that needs an SBA-reviewed agreement, and from October 2026 no agent or service provider may be located outside the United States [1].
- **The SBA moved the scoring decision back to lenders.** It raised the minimum FICO SBSS score for 7(a) Small loans to 165 in June 2025 [2], then stopped using SBSS altogether on March 1, 2026. Lenders must now use the credit analysis they apply to similar non-SBA loans, meet a 1.10x debt service coverage floor, and record any model score and its approval range in the credit memo [4][5]. For a lender with a machine-learning model, that is both an opening and a documentation burden.
- **The public AI deployments cluster in loans of $350,000 or less.** Live Oak and Huntington (both investors in the start-up Casca), Celtic Bank (Casca), Colony Bank (Lama AI) and Newtek (its in-house NewTracker) have all described AI in small-dollar origination [24][27][28][29][31]. Every metric they publish is their own. This research found no independent measurement of time to close, approval rates or losses for any of them.
- **Generative AI falls into a regulatory gap.** The April 2026 interagency model risk guidance, SR 26-2, puts generative and agentic AI outside its scope while keeping traditional machine-learning models in [40][41]. The SBA has issued nothing on AI tools. An LLM that reads tax returns or drafts a credit memo is therefore governed mainly by general third-party risk guidance and by the SBA's rule that the lender, not the vendor, bears full responsibility [1][43].
- **The SBA's guaranty is the real control.** The SBA can deny or reduce its guaranty when a lender fails to comply materially with program rules or to make, close or service a loan prudently [9]. Nothing in the rules excuses an error because software made it. An AI shortcut that skips tax transcript reconciliation, for example, exposes the guaranty directly [1].
- **The evidence on automation and risk points both ways.** In the Paycheck Protection Program, non-bank lenders had a suspected-fraud rate of 24.63% against 4.3% at traditional lenders, and loans involving service providers ran at 16.2% against 4.9% [18]. Peer-reviewed work links some fintech PPP lenders to fraud [44] but also finds that automation widened access for Black-owned firms [45]. Neither result was measured in ordinary 7(a) lending with credit risk.
- **The SBA's own AI is small and early.** The agency paused nearly all of its AI use in March 2025 and published its first AI inventory in March 2026 [16][15]. The most lending-relevant entry is a pre-deployment model to decide which guaranty purchase files need manual review [15]. SBA officials have also described an "AI-integrated" replacement for E-Tran, but only in a law firm's conference summary [20].
- **Outside visibility into fair-lending outcomes is shrinking.** The CFPB withdrew its AI adverse-action circulars in May 2025 [36], removed disparate-impact liability from Regulation B from July 2026 [37], and dropped denial reasons and pricing from the Section 1071 small-business data rule, which now starts in 2028 [38][39]. The Regulation B duty to give specific, accurate reasons for a denial still applies to any model [35].

## Background

### The two programs

The 7(a) program is the SBA's main guaranteed loan: a lender makes the loan and the SBA guarantees part of it. Within 7(a), the SOP sets separate rules for Standard 7(a) loans above $350,000, 7(a) Small loans of $350,000 or less, and SBA Express loans of up to $500,000, where the lender makes the credit decision under delegated authority [1]. The 504 program finances real estate and equipment through Certified Development Companies (CDCs), which work alongside a third-party bank lender [1].

The programs are large. The SBA reports 77,600 7(a) loans for $37.0 billion and 6,750 504 loans for $7.8 billion in fiscal 2025 [22], and 56,130 7(a) loans for $32.4 billion and 6,075 504 loans for $7.1 billion in fiscal 2026 [23]. The SBA attributes about $5 billion of lost fiscal 2026 approvals to the government shutdown [23]. It does not attribute the fall to its tighter underwriting rules, and this paper does not test that link.

![Paired bar charts of SBA 7(a) and 504 loan counts and dollars in fiscal 2025 and 2026](research/ai-in-sba-lending/fig1-volume.svg)

*Figure 1. SBA 7(a) and 504 approvals in fiscal 2025 and 2026, as reported by the SBA [22][23]. Chart by the author.*

### The process, stage by stage

An SBA loan passes through five stages, each with SBA-specific work that sits on top of ordinary commercial credit:

1. **Intake.** The borrower completes SBA forms (such as Form 1919, the borrower information form, and Form 413, the personal financial statement) and supplies tax returns, financial statements and ownership details.
2. **Eligibility.** The lender checks size, business type, use of proceeds, citizenship of owners, federal debt (CAIVRS) and debarment (SAM.gov), and documents why credit is not available elsewhere [1].
3. **Underwriting.** The lender spreads the financials, assesses repayment ability, equity and collateral, and writes a credit memo. Delegated lenders decide; others submit to the SBA.
4. **Closing.** The lender reconciles IRS tax transcripts against the borrower's financials, prepares loan documents and disburses [1].
5. **Servicing and liquidation.** The lender services the loan under SOP 50 57 4 and, if it defaults, liquidates collateral and asks the SBA to purchase the guaranty [10].

Most of this is document-heavy and rule-driven, which is why it attracts both rules-based automation and, more recently, generative AI.

### How the rules got here: 2023 to 2026

The current rules are the product of two swings. In April 2023 the SBA rewrote its lending criteria so that lenders could use the credit processes they apply to similar non-SBA loans, including business credit scoring models [11]. In the preamble, the SBA said technological advances and modelling were giving more accurate ways to measure risk, and noted that lenders were already using data analytics and "machine learning modelling" for small-dollar loans [11]. A separate rule lifted a moratorium on new Small Business Lending Company (SBLC) licences that had stood since 1982 [12]. Those two preamble passages remain the SBA's most explicit statements about AI in lender underwriting.

From 2025 the SBA reversed course through its SOP and notices rather than by changing the regulation, which still carries the 2023 text [6]. It reinstated a moratorium on new Community Advantage licences in May 2025, citing a 7% default rate [13]. SOP 50 10 8 (June 1, 2025) restored stricter criteria [2]. On March 1, 2026 it ended SBSS screening and restricted ownership to U.S. citizens and nationals [5][1]. SOP 50 10 8.1 (October 1, 2026) consolidated these changes and added the ban on offshore agents [3][1]. In September 2026 the SBA's Office of Inspector General (OIG) reported that SBLCs had a 7(a) default rate of 14.97% against 9.79% for other lenders, and that the SBA had not examined SBLCs for safety and soundness since April 2023 [14].

![Timeline of SBA and regulatory events and AI launches in SBA lending from 2023 to 2026](research/ai-in-sba-lending/fig2-timeline.svg)

*Figure 2. Rules and launches, 2023 to 2026. Regulatory events from the SBA, the banking agencies, the CFPB and SBA OIG [2][5][11][12][13][14][16][37][40]; industry events from company releases and press [24][28][29][30][32]. Industry dates are announcements, not go-live dates. Timeline by the author.*

## Where AI is used, stage by stage

This section lists what lenders, vendors and the SBA have said in public. Unless stated otherwise, every claim is the company's own.

### Intake and application

Intake is where generative AI is most visible. Casca (legal name Cascading AI, Inc.) sells an online application, an "AI Loan Assistant" and a borrower portal for commercial and SBA lending [25]. In its April 2026 release announcing Celtic Bank as a customer, Casca said its software guides borrowers through SBA Forms 1919, 413 and 159 and connects to credit bureaus and document-verification providers [28]. Casca says Huntington planned to use the software in 2026 for SBA 7(a) loans under $350,000, from help with applications to a borrower chatbot available around the clock [26]. This research found no public confirmation from Huntington that the rollout has gone live, or any results.

Parlay, a smaller vendor, announced an integration with nCino in October 2026: Parlay handles SBA intake, eligibility screening and early deal structuring, then hands the file to nCino's small-business lending system [32]. Parlay says it processed more than $500 million of SBA loan inquiries in 2026 and cuts manual work by up to 80%. Those figures come from a secondary summary of the announcement and are customer-reported [32].

### Eligibility screening

Eligibility checks are mostly rules-based, and the evidence that matters here is about the SBA's own screening rather than lender AI. An OIG audit of 7(a) loans disbursed between August 2023 and December 2024 found that the SBA's automated Risk Mitigation Framework did not screen, or only partly screened, three of six eligibility requirements (for-profit status, size and ineligible business type). For 38% of sampled loans that triggered error codes, the clearing of those codes was unsupported. OIG flagged 73,302 loans and about $32.0 billion in questioned costs for review at guaranty purchase, and the SBA agreed [19]. The OIG also reports that the SBA is adding front-end Do Not Pay checks for 7(a) and 504 loans [17].

Parlay is the only vendor found that markets SBA eligibility screening specifically [32]. Any such tool now has to handle rules that changed three times in sixteen months, including the March 2026 requirement that 100% of direct and indirect owners and required guarantors be U.S. citizens or nationals [1].

### Underwriting and credit analysis

Underwriting is where lenders make the strongest claims.

- **Live Oak Bank** uses Casca for 7(a) loans under $350,000 in its Live Oak Express program, according to Casca [26]. Live Oak's co-founder told American Banker in 2025 that the bank had previously turned down small requests because underwriting them took too long [24]. In April 2026 American Banker reported that Live Oak originated $56 million through its small-dollar SBA program in the first quarter and aims for $750 million a year within a few years, with origination times expected to fall to as little as seven days [27]. A secondary blog citing the bank's earnings remarks adds that underwriting took about two weeks once documents were in, against a target of 7 to 10 days from application to funding [33].
- **Celtic Bank**, a long-standing top-ten 7(a) lender, selected Casca in April 2026. The release says Casca automates financial spreading and analysis and supports SBA Express from application to funding. It claims timelines compressed from months to days and spreading from hours to minutes, with no volume or conversion figures [28].
- **Colony Bank** in Georgia uses generative AI from Lama AI to originate SBA loans, American Banker reported in October 2026. A Colony executive estimated the August 2026 rule changes would add about five days to a typical ten-day approval. Despite the headline, the article gives no figure for days saved [29]. Lama AI raised a $10 million Series A in June 2026 and says its agents cover intake through portfolio monitoring, with human oversight at each step, and that it plans to expand into SBA loans [30].
- **Newtek** launched a seven-day business loan of up to $350,000 in March 2026. It describes the product as a term loan, not as an SBA loan. Newtek says its proprietary NewTracker system uses AI to analyse historical financials, project cash flow and assemble the credit package for a human credit committee, and its CEO credits AI in part for tripling loan closings over three years without adding closing staff [31].
- **Bankwell Bank** was Casca's first customer and is an investor. American Banker reported it expects more than $100 million of SBA loans in 2026 [25][27].

The overlap between investors and customers matters. Live Oak, Huntington and Bankwell all invested in Casca's $29 million Series A in August 2025 and are also its customers [24][25]. Their public statements about the product are not independent of their investment.

One date conflict is worth noting: Casca's newsroom page on Huntington and Live Oak carries an August 2026 date in its metadata, but its text and American Banker date the news August 19, 2025 [24][26]. This paper uses 2025.

### Closing

Closing work (document preparation, lien filing, transcript reconciliation) is less visible in public announcements. Newtek says NewTracker takes liens and reviews corporate documents [31]. The SBA's own rules make clear that technology costs for preparing loan documents, underwriting or closing can be recovered within the lender's packaging fee: up to $2,500 without itemising, and with SBA Form 159 above that [1].

### Servicing, monitoring and liquidation

This research found no lender or vendor describing AI built specifically for SBA servicing, collections or liquidation, and no AI product aimed at 504 CDCs. Lama AI lists portfolio monitoring among its agents' tasks [30], but not for SBA loans in particular. NADCO, the 504 industry association, has published nothing on AI that this research could find.

The most concrete servicing-side AI is the SBA's own (see below).

### Comparison

| Deployment | Stage | Built or bought | Status (public) | Headline claim | Who says so |
|---|---|---|---|---|---|
| Live Oak Express, Casca [26][27] | Underwriting, origination | Bought (and invested) | In use; co-design from late 2025 | $56M in Q1 2026; aims for $750M/yr and ~7 days | Bank management, via press |
| Huntington, Casca [26] | Intake, borrower chat | Bought (and invested) | Planned for 2026 | None | Vendor |
| Celtic Bank, Casca [28] | Intake, spreading, Express | Bought | Selected Apr 2026 | "Months to days"; spreading "hours to minutes" | Vendor release |
| Colony Bank, Lama AI [29] | Origination, underwriting | Bought | In use, Oct 2026 | Days saved, unquantified | Bank, via press |
| Newtek, NewTracker [31] | Underwriting, liens, credit package | Built | 7-day loan launched Mar 2026 (not SBA) | Closings tripled in 3 years | Company |
| Parlay + nCino [32] | Intake, eligibility | Bought | Integration announced Oct 2026 | $500M+ inquiries; up to 80% less manual work | Vendor, secondary summary |
| SBA, 7(a) Purchases ML Model [15] | Guaranty purchase review | Built | Pre-deployment | None | SBA inventory |

![Map of AI uses and governing SBA rules across intake, eligibility, underwriting, closing and servicing](research/ai-in-sba-lending/fig3-lifecycle.svg)

*Figure 3. Where AI shows up in an SBA loan and the rule each use must satisfy. AI uses from company and SBA statements [15][17][20][26][28][30][31][32]; rules from SOP 50 10 8.1, SOP 50 57 4 and 13 CFR 120.524 [1][9][10]. Diagram by the author.*

### What independent evidence exists

Very little that is specific to SBA lending. A 2025 Census Bureau working paper, using confidential survey data for 2017 to 2019, found the share of banks using AI rose from 14% to 43%, and that banks using more AI lent more to distant small businesses, with lower default rates and lower pricing for those borrowers [34]. It covers small-business lending in general, predates generative AI, and does not isolate SBA loans. This research found no survey of how many SBA lenders use AI, no published application-completion or approval-rate data from any SBA lender, and no regulator or analyst measurement of AI's effect on time to close or losses.

The industry is clearly paying attention. NAGGL, the 7(a) lenders' association, held a members-only "AI in 7(a) Lending" meeting in February 2026 on what prudent lending looks like with AI [21].

## The SBA's own use of AI

The SBA is a minor user so far, and its record is uneven.

- **A pause and a late inventory.** GAO reported in May 2026 that the SBA paused nearly all AI use in March 2025 to review compliance with new executive orders, that only seven pilot or pre-pilot projects were active as of April 2026, that the SBA reported its first AI inventory in March 2026, and that it had not consistently met its reporting requirements [16]. The OIG noted that as of November 2025 the SBA had reported no AI use cases [17]. FedScoop, citing the GAO work, reports that a machine-learning fraud tool from the pandemic period has been discontinued [51].
- **A model for guaranty purchases.** The 2025 inventory lists a "7(a) Purchases ML Model", built in-house and in pre-deployment, that would use E-Tran and other SBA data to decide which guaranty purchase applications need manual review. Its impact assessment and independent review were listed as in progress, and the SBA classes it as not high-impact [15]. If deployed, it would change how lender deficiencies are found at purchase, the point where the SBA decides whether to honour its guaranty.
- **Rewriting legacy code.** A second entry describes a multi-agent tool on Amazon Bedrock to help refactor and test the legacy ColdFusion and COBOL code behind the SBA's lending systems. The SBA itself lists AI-introduced logic errors in financial calculations among the risks, with mandatory human code review as a mitigation [15].
- **Oversight and a new platform.** At NAGGL's spring 2026 conference, according to a law firm's summary, the SBA's chief information officer described replacing E-Tran with an "AI-integrated" life-of-loan platform, and an Office of Credit Risk Management official said the lender-monitoring portal uses AI to find patterns that may indicate weak controls or fraud [20]. This research found no SBA document describing either, so they should be treated as reported statements.
- **The SBSS retreat.** Until March 2026 the SBA itself ran an automated credit screen, the FICO SBSS score, on every 7(a) Small application [2]. Its retirement means the SBA no longer runs any automated credit decision on small loans; that work has moved to lenders [4][5].

## What the SBA rules require

### Scoring models: allowed, but only as a supplement

The regulation still says lenders, CDCs and the SBA may use a business credit scoring model [6]. The SOP narrows that permission:

- **7(a) Small.** Since March 1, 2026, the lender must use the credit analysis it applies to similarly sized non-SBA loans, which may include scoring models its primary federal regulator permits. A model may combine applicant and guarantor data but may not rely solely on consumer credit scores. If a model is used, its result and the approval range must be stated in the credit memo. The loan must also show debt service coverage of at least 1.10x, and the lender must review two months of bank statements on the main operating account; loans that miss the coverage floor move to Standard 7(a) or Express processing [5][1].
- **SBA Express.** A lender may use a business scoring model only in addition to its credit analysis, and must validate with accepted statistical methods, and document, that the model predicts loan performance. It must give the SBA that documentation on request. SBLCs must provide validation annually [1].
- **SBLCs.** Non-bank lenders may use scoring, but the SBA may ask for the model for review [5].

The SOP never defines "model" by technique, so a gradient-boosted machine-learning score is treated the same as a scorecard. The practical effect is that a lender can use machine learning for SBA small loans only if it already uses the same approach for comparable conventional loans, can show the result in the memo, and (for Express) can show statistical validation.

### Credit elsewhere: a model decline is not enough

SBA loans are for borrowers who cannot get reasonable credit elsewhere. The SOP requires the lender to identify a specific weakness, such as a longer maturity than policy allows or collateral shortfalls, and it bars the lender from citing a failed conventional credit-score policy as the only reason [1]. A conventional model's decline therefore cannot by itself justify putting a loan into the SBA program. An AI tool that drafts the credit-elsewhere section has to point to the actual weakness.

### Vendors: when an AI tool becomes a Lender Service Provider

This is the rule most directly aimed at technology vendors. Under the SBA's definitions, a Lender Service Provider (LSP) is an agent that carries out lender functions in originating, disbursing, servicing or liquidating SBA loans for pay from the lender [7]. SOP 50 10 8.1 gives examples that read directly onto AI products [1]:

- an agent that interacts with the applicant in person or through technology to obtain financial information;
- an agent that performs any pre-qualification review against SBA rules or the lender's own policies;
- an agent that delivers an underwritten application, whether through technology or otherwise; and
- any entity providing technology services that include underwriting.

Each LSP must have a written agreement with the lender, which the SBA reviews; LSP fees cannot be charged to the borrower; and the agreement cannot give the LSP power of attorney [8][1]. From October 1, 2026, lenders may not use any LSP or agent located outside the United States and its territories [1]. In 504, technology without underwriting is not treated as an agent, but technology that includes underwriting must be provided under an SBA-approved professional services contract, and CDCs cannot pass the cost of automated decision systems to borrowers [1].

The SOP is blunt about who is accountable: "the 7(a) Lender itself, not the LSP, bears full responsibility" for its SBA loan operation, and the lender must be able to show it exercises day-to-day responsibility for evaluating, closing and servicing its portfolio [1].

Two open points follow. First, a document-extraction or memo-drafting tool that does not decide anything may or may not "include underwriting"; the SOP does not say where that line falls, and the SBA decides LSP status loan by loan [7]. Second, "located" in the United States is not defined for cloud software, so it is unclear how the offshore ban applies to a U.S. vendor that uses offshore model hosting or developers.

### Tax transcripts: AI extraction does not replace the IRS check

Except for Express and Export Express, lenders must obtain IRS tax transcripts and reconcile them with the borrower's financial data before first disbursement (7(a)) or the debenture funding request (504). If a delegated lender disburses and cannot later obtain and reconcile the transcript, the guaranty may be repaired or denied. Where a scoring model does not use business financials, the lender must still obtain transcripts to verify filing and size, but need not reconcile them [1].

This matters for document AI. OCR or an LLM can extract figures from a borrower-supplied tax return quickly, but the SBA's control is the comparison with what the IRS holds. That control is also the main defence against forged returns, which FinCEN has warned generative AI makes easier to produce [46].

### The guaranty: why a tool error is a lender error

Under 13 CFR 120.524, the SBA may be released from its guaranty, in whole or in part, if the lender failed to comply materially with program requirements, failed to make, close, service or liquidate the loan prudently, or misrepresented a material fact, and it may recover money already paid if it later finds such a failure [9]. SOP 50 57 4 requires servicing and liquidation in a commercially reasonable manner and no less diligently than for the lender's non-SBA loans [10]. Neither text makes any allowance for automation. An AI spreading error that overstates cash flow, a chatbot that collects an incomplete form, or a model that misses an ineligible owner is, for guaranty purposes, the lender's error.

## Wider banking rules that apply

### Model risk: SR 26-2 covers machine learning, not generative AI

In April 2026 the Federal Reserve, OCC and FDIC replaced SR 11-7 with SR 26-2 [40]. The new guidance keeps traditional statistical models and non-generative, non-agentic AI in scope, but a footnote puts generative and agentic AI outside it as novel and fast-changing [41]. It is aimed mainly at banks with more than $30 billion in assets; smaller banks are expected to manage models in proportion to their size unless their model risk is significant. Vendor models stay in scope, and limited access to a vendor's internals does not remove the bank's duty to understand and monitor them [41].

For SBA lenders this splits the toolkit in two. A machine-learning credit score used on 7(a) Small loans is a model under SR 26-2 (and must also meet the SOP's memo and validation rules). An LLM that spreads tax returns, drafts the credit memo or answers borrower questions is outside SR 26-2. The Fed's Vice Chair for Supervision said in May 2026 that credit determinations are an example of high-impact AI use and that the Fed is revising third-party guidance she called vague; she raised, but did not answer, how third-party expectations apply to vendor AI [42]. Until that happens, the June 2023 interagency third-party guidance remains the main framework for AI vendors at banks [43]. Most 7(a) lenders are community banks well below $30 billion, and non-bank SBLCs are outside SR 26-2 entirely.

### Fair lending: the rules thinned, the core duty did not

Regulation B applies to business credit. For applicants with revenue of $1 million or less, which covers most SBA borrowers, a lender may give adverse action notice orally or in writing, but if it gives reasons they must be specific and reflect the factors actually considered or scored; saying the applicant failed to reach a qualifying score is not enough [35]. That duty applies whatever the model.

What has changed is the guidance and enforcement around it:

- The CFPB withdrew Circular 2022-03 (adverse action with complex algorithms) and Circular 2023-03 on May 12, 2025, as part of a batch of 67 guidance documents, according to a law firm tracker [36].
- A CFPB final rule published April 22, 2026 and effective July 21, 2026 removed disparate-impact ("effects test") liability from Regulation B and narrowed the definition of discouragement. Disparate treatment remains illegal [37][39].
- The CFPB's revised Section 1071 rule (May 2026) delays first compliance to January 1, 2028, covers only lenders with at least 1,000 small-business originations in two consecutive years, defines small businesses as those with revenue of $1 million or less, and drops denial reasons, pricing and application method from the data [38][39].

Together these mean that public data will not show whether AI-assisted underwriting produces different denial or pricing outcomes by owner demographics, and federal disparate-impact exposure is gone. Bias testing of SBA credit models has become mainly a lender's own risk decision. State law was outside the scope of this research.

### Data protection

Non-bank lenders are covered by the FTC Safeguards Rule, which requires a written risk assessment, encryption, multi-factor authentication and oversight of service providers, and since May 2024 requires notifying the FTC of a breach affecting 500 or more consumers [50]. SBA files carry personal guarantor data, Social Security numbers and personal financial statements, so sending them to a third-party model provider is a service-provider relationship under the Safeguards Rule for non-banks and under the third-party guidance for banks [50][43]. Treasury's December 2024 report on AI in financial services recorded industry concern about concentration among a few foundation-model providers and lock-in for smaller firms [48].

## Risks

### Fraud through automated pipelines

The clearest evidence about automation and fraud in SBA-backed lending comes from the PPP, which ran under 7(a) authority. The OIG found that non-bank lenders made about 715,000 suspected fraudulent loans totalling $14.2 billion, a rate of 24.63% against 4.3% for traditional lenders, and that loans involving lender service providers had a suspected-fraud rate of 16.2% against 4.9% without. Eighteen of twenty lenders reviewed had no accepted LSP agreement on file [18]. Griffin, Kruger and Mahajan, in the Journal of Finance, found suspicious PPP loans concentrated at certain fintech lenders [44]. The OIG's 2026 management challenges report describes one LSP-facilitated scheme of about 1,300 applications and $600 million in fraud [17].

Three cautions apply. PPP loans carried no credit risk for the lender, so incentives differed from 7(a). The fraud findings concern weak verification and service-provider control, not the use of AI models as such. And the regular 7(a) program has its own screening gaps, as the $32.0 billion in questioned costs flagged by OIG shows [19]. The lesson for AI in SBA lending is about verification: a faster application pipeline needs independent checks of identity, business existence and tax data, especially now that FinCEN has warned about generative-AI forgeries of identity documents [46].

![Bar chart of suspected fraud and default rates from SBA OIG reports](research/ai-in-sba-lending/fig4-oig.svg)

*Figure 4. What the SBA's inspector general measured. PPP suspected-fraud rates by lender type and by whether a service provider was involved [18]; 7(a) default and early default rates for SBLCs against other lenders as of March 31, 2025 [14]. Chart by the author.*

### Access and bias

Automation can also widen access. Howell, Kuchler, Snitkof, Stroebel and Wong found that Black-owned firms got PPP loans mainly from automated fintech lenders, and that when traditional banks automated, their lending to Black-owned firms rose; they attribute part of the effect to removing human bias [45]. The Fed's 2026 Small Business Credit Survey shows the other side of the non-bank market: 29% of credit applicants applied to online lenders, but only 35% of them were satisfied, against 64% to 76% at banks and credit unions, and 60% of online-lender borrowers said costs were higher than expected [47]. Neither study is about AI in SBA lending specifically. An analyst should not treat "automated" as uniformly good or bad for borrowers.

### Errors that compound

Generative AI adds a different risk from traditional scoring: confident errors in extraction and drafting. GAO reported in May 2025 that hallucinations are a key reason banks have avoided generative AI in underwriting [49]. In SBA lending, an extraction or drafting error does not stay in the memo; it flows into the eligibility determination, the credit-elsewhere justification and the E-Tran record, and can surface years later at guaranty purchase. The SBA's own planned purchase-review model [15] could make those errors more likely to be found.

### Rule churn

The SBA changed its small-loan underwriting rules in June 2025, March 2026 and October 2026, and changed citizenship rules twice [1][2][5]. Colony Bank's executive expected the October 2026 SOP to add days to each loan [29]. AI tools that encode eligibility logic or draft against SOP requirements need version control tied to the SBA loan number date, because SOP 50 10 8 applies to loan numbers issued through September 30, 2026 and 8.1 from October 1 [3]. A tool that applies the wrong version produces a compliance defect, not a style issue.

### Concentration and conflicts

Three of the most visible SBA AI deployments use the same start-up, and those three banks invested in it [24][25]. That concentration is common for a young market but means much of the public narrative about AI in SBA lending comes from one vendor and its investors.

## Implications for lenders and credit teams

1. **Treat any vendor that touches pre-qualification or underwriting as a likely LSP.** Check the SOP examples before signing, send the agreement to the SBA for review, confirm the vendor and its agents are U.S.-located, and make sure the fee structure fits the packaging-fee and Form 159 rules [1][8].
2. **Keep the lender's own analysis primary.** For 7(a) Small and Express, a model score must sit on top of the lender's credit analysis, appear in the memo with its approval range, and (for Express) be backed by documented validation [1][5]. Use the same approach the bank uses for comparable conventional loans, or expect the SBA to question it.
3. **Do not let extraction stand in for verification.** Use AI to read tax returns and statements, but reconcile against IRS transcripts and bank statements as the SOP requires; that is also the main protection against AI-forged documents [1][46].
4. **Write the credit-elsewhere section from facts, not scores.** A conventional model decline is not an acceptable sole reason [1].
5. **Govern generative AI even though SR 26-2 does not require it.** Keep a register of LLM uses, test extraction accuracy on the bank's own files, require human sign-off on every memo, log sources, and manage the vendor under the 2023 third-party guidance [41][43].
6. **Pin rules to SOP versions.** Any eligibility or drafting logic should apply the SOP in force for the loan number's date and be updated when notices change it [3].
7. **Keep reasons explainable.** Whatever happens to federal disparate-impact policy, Regulation B still requires specific, accurate denial reasons [35]. Bias testing on owner demographics, where lawful data exist, remains good risk management and protects against disparate-treatment and state-law exposure.
8. **Ask vendors for evidence, not adjectives.** None of the public claims reviewed here includes a baseline, a sample or an independent check. Ask for measured results on comparable SBA files before relying on speed or accuracy claims.

## Open questions and limitations

- **No independent outcome data.** Every lender and vendor metric in this paper is self-reported. The only independent quantitative evidence on AI and small-business lending is pre-2020 and not SBA-specific [34].
- **Coverage gaps.** This research did not find SBA-specific AI announcements from several large 7(a) lenders and non-banks (including SmartBiz, Funding Circle, Lendio, Biz2Credit, Ready Capital and Byline), but its search of them was limited; absence of evidence is not evidence of absence. It found no AI products aimed at 504 CDCs or SBA servicing.
- **Huntington's rollout.** The Huntington–Casca plan is confirmed by the vendor and by press [24][26], but Huntington has published no go-live date or results.
- **SBA statements reported second-hand.** The "AI-integrated" E-Tran replacement and AI in the lender-monitoring portal come from a law firm's conference summary, not an SBA document [20].
- **Undefined boundaries in the SOP.** Whether a document-extraction or memo-drafting tool "includes underwriting", and what "located" in the U.S. means for cloud AI, are not defined [1][7].
- **SOP 50 10 7.1 detail.** The earlier SBSS minimum of 155 is reported by secondary sources only; this paper relies on the primary SOP 50 10 8 text for the 165 figure [2].
- **Pending guidance.** The banking agencies said AI would be addressed separately from SR 26-2, and the Fed is revising third-party guidance [42]. Neither had been issued as of this writing, as far as this research found.
- **Legal status.** This paper does not cover state fair-lending law or any litigation over the July 2026 Regulation B rule. It is analysis, not legal advice.
- **Sources read via secondary copies.** Some SBA documents were read from legacy.sba.gov copies because the main site blocks automated download; SBA release 25-51 was read from a copy hosted by a third party [13]; the Parlay announcement was read from a secondary summary [32].

## Sources

1. U.S. Small Business Administration, SOP 50 10 8.1, Lender and Development Company Loan Programs (Technical Policy Updates), effective October 1, 2026. [legacy<wbr>.sba<wbr>.gov<wbr>/sites<wbr>/default<wbr>/files<wbr>/2026<wbr>-10<wbr>/SOP<wbr>%2050<wbr>%2010<wbr>%208<wbr>.1<wbr>%20Technical<wbr>%20Policy<wbr>%20Updates<wbr>%20effective<wbr>%20<wbr>%2010<wbr>.1<wbr>.2026<wbr>.docx](https://legacy.sba.gov/sites/default/files/2026-10/SOP%2050%2010%208.1%20Technical%20Policy%20Updates%20effective%20%2010.1.2026.docx)
2. U.S. Small Business Administration, SOP 50 10 8, Lender and Development Company Loan Programs, effective June 1, 2025. [legacy<wbr>.sba<wbr>.gov<wbr>/sites<wbr>/default<wbr>/files<wbr>/2025<wbr>-05<wbr>/SOP<wbr>%2050<wbr>%2010<wbr>%208<wbr>%20Technical<wbr>%20Updates<wbr>%20effective<wbr>%206<wbr>.1<wbr>.2025<wbr>.docx](https://legacy.sba.gov/sites/default/files/2025-05/SOP%2050%2010%208%20Technical%20Updates%20effective%206.1.2025.docx)
3. U.S. Small Business Administration, Information Notice 5000-880695, "Issuance of SOP 50 10 8.1," August 2026. [legacy<wbr>.sba<wbr>.gov<wbr>/sites<wbr>/default<wbr>/files<wbr>/2026<wbr>-08<wbr>/SBA<wbr>%20Information<wbr>%20Notice<wbr>%205000<wbr>-880695<wbr>%20<wbr>-<wbr>%20Issuance<wbr>%20of<wbr>%20SOP<wbr>%2050<wbr>%2010<wbr>%208<wbr>.1<wbr>.pdf](https://legacy.sba.gov/sites/default/files/2026-08/SBA%20Information%20Notice%205000-880695%20-%20Issuance%20of%20SOP%2050%2010%208.1.pdf)
4. U.S. Small Business Administration, Procedural Notice 5000-875701, "Sunset of SBSS Score for 7(a) Small Loans," January 16, 2026. [legacy<wbr>.sba<wbr>.gov<wbr>/sites<wbr>/default<wbr>/files<wbr>/2026<wbr>-01<wbr>/SBA<wbr>%20Procedural<wbr>%20Notice<wbr>%205000<wbr>-875701<wbr>%20<wbr>-<wbr>%20Sunset<wbr>%20of<wbr>%20SBSS<wbr>%20Score<wbr>%20for<wbr>%207a<wbr>%20Small<wbr>%20Loans<wbr>.pdf](https://legacy.sba.gov/sites/default/files/2026-01/SBA%20Procedural%20Notice%205000-875701%20-%20Sunset%20of%20SBSS%20Score%20for%207a%20Small%20Loans.pdf)
5. U.S. Small Business Administration, Procedural Notice 5000-876777, "Sunset of SBSS Score: Supplemental Guidance," February 20, 2026 (corrected February 24). [legacy<wbr>.sba<wbr>.gov<wbr>/sites<wbr>/default<wbr>/files<wbr>/2026<wbr>-02<wbr>/Procedural<wbr>%20Notice<wbr>%20<wbr>-<wbr>%20Sunset<wbr>%20of<wbr>%20SBSS<wbr>%20Score<wbr>%20<wbr>-<wbr>%20Supplemental<wbr>%20Guidance<wbr>%20Corrected<wbr>%202<wbr>.24<wbr>.pdf](https://legacy.sba.gov/sites/default/files/2026-02/Procedural%20Notice%20-%20Sunset%20of%20SBSS%20Score%20-%20Supplemental%20Guidance%20Corrected%202.24.pdf)
6. Electronic Code of Federal Regulations, 13 CFR 120.150, "What are SBA's lending criteria?" [www<wbr>.ecfr<wbr>.gov<wbr>/current<wbr>/title<wbr>-13<wbr>/chapter<wbr>-I<wbr>/part<wbr>-120<wbr>/subpart<wbr>-A<wbr>/subject<wbr>-group<wbr>-ECFR0b4a7d1ac0e5ec0<wbr>/section<wbr>-120<wbr>.150](https://www.ecfr.gov/current/title-13/chapter-I/part-120/subpart-A/subject-group-ECFR0b4a7d1ac0e5ec0/section-120.150)
7. Electronic Code of Federal Regulations, 13 CFR 103.1, Definitions (Agent, Lender Service Provider). [www<wbr>.ecfr<wbr>.gov<wbr>/current<wbr>/title<wbr>-13<wbr>/chapter<wbr>-I<wbr>/part<wbr>-103<wbr>/section<wbr>-103<wbr>.1](https://www.ecfr.gov/current/title-13/chapter-I/part-103/section-103.1)
8. Electronic Code of Federal Regulations, 13 CFR 103.5, "How does SBA regulate an Agent's fees and provision of service?" [www<wbr>.ecfr<wbr>.gov<wbr>/current<wbr>/title<wbr>-13<wbr>/chapter<wbr>-I<wbr>/part<wbr>-103<wbr>/section<wbr>-103<wbr>.5](https://www.ecfr.gov/current/title-13/chapter-I/part-103/section-103.5)
9. Electronic Code of Federal Regulations, 13 CFR 120.524, "When is SBA released from liability on its guarantee?" [www<wbr>.ecfr<wbr>.gov<wbr>/current<wbr>/title<wbr>-13<wbr>/chapter<wbr>-I<wbr>/part<wbr>-120<wbr>/subpart<wbr>-E<wbr>/subject<wbr>-group<wbr>-ECFR4c8b7f0a1a9f1f9<wbr>/section<wbr>-120<wbr>.524](https://www.ecfr.gov/current/title-13/chapter-I/part-120/subpart-E/subject-group-ECFR4c8b7f0a1a9f1f9/section-120.524)
10. U.S. Small Business Administration, SOP 50 57 4, 7(a) Loan Servicing and Liquidation, effective November 1, 2025. [legacy<wbr>.sba<wbr>.gov<wbr>/sites<wbr>/default<wbr>/files<wbr>/2025<wbr>-09<wbr>/FINAL<wbr>%20SOP<wbr>%205057<wbr>%204<wbr>%20version<wbr>.pdf](https://legacy.sba.gov/sites/default/files/2025-09/FINAL%20SOP%205057%204%20version.pdf)
11. U.S. Small Business Administration, "Affiliation and Lending Criteria for the SBA Business Loan Programs," final rule, 88 FR 21074, April 10, 2023. [www<wbr>.govinfo<wbr>.gov<wbr>/content<wbr>/pkg<wbr>/FR<wbr>-2023<wbr>-04<wbr>-10<wbr>/pdf<wbr>/2023<wbr>-07173<wbr>.pdf](https://www.govinfo.gov/content/pkg/FR-2023-04-10/pdf/2023-07173.pdf)
12. U.S. Small Business Administration, "Small Business Lending Company (SBLC) Moratorium Rescission and Removal of the Requirement for a Loan Authorization," final rule, 88 FR 21890, April 12, 2023. [www<wbr>.govinfo<wbr>.gov<wbr>/content<wbr>/pkg<wbr>/FR<wbr>-2023<wbr>-04<wbr>-12<wbr>/pdf<wbr>/2023<wbr>-07181<wbr>.pdf](https://www.govinfo.gov/content/pkg/FR-2023-04-12/pdf/2023-07181.pdf)
13. U.S. Small Business Administration, News Release 25-51, "SBA Overhauls Reckless Biden-Era Lending Program," May 19, 2025. Read via a copy hosted by ProgressFund. [www<wbr>.sba<wbr>.gov<wbr>/article<wbr>/2025<wbr>/05<wbr>/19<wbr>/sba<wbr>-overhauls<wbr>-reckless<wbr>-biden<wbr>-era<wbr>-lending<wbr>-program](https://www.sba.gov/article/2025/05/19/sba-overhauls-reckless-biden-era-lending-program) [www<wbr>.progressfund<wbr>.org<wbr>/wp<wbr>-content<wbr>/uploads<wbr>/2025<wbr>/05<wbr>/25<wbr>-51<wbr>-SBA<wbr>-Overhauls<wbr>-Reckless<wbr>-Biden<wbr>-Era<wbr>-Lending<wbr>-Program<wbr>.pdf](https://www.progressfund.org/wp-content/uploads/2025/05/25-51-SBA-Overhauls-Reckless-Biden-Era-Lending-Program.pdf)
14. SBA Office of Inspector General, Report 26-14, "Small Business Lending Companies' Performance in the 7(a) Loan Program and SBA's Oversight," September 17, 2026. [www<wbr>.oversight<wbr>.gov<wbr>/sites<wbr>/default<wbr>/files<wbr>/documents<wbr>/reports<wbr>/2026<wbr>-09<wbr>/SBA<wbr>%20OIG<wbr>%20Report<wbr>%2026<wbr>-14<wbr>%20<wbr>-<wbr>%20Small<wbr>%20Business<wbr>%20Lending<wbr>%20Companies<wbr>%E2<wbr>%80<wbr>%99<wbr>%20Performance<wbr>%20in<wbr>%20the<wbr>%207<wbr>%28a<wbr>%29<wbr>%20Loan<wbr>%20Program<wbr>%20and<wbr>%20SBA<wbr>%E2<wbr>%80<wbr>%99s<wbr>%20Oversight<wbr>.pdf](https://www.oversight.gov/sites/default/files/documents/reports/2026-09/SBA%20OIG%20Report%2026-14%20-%20Small%20Business%20Lending%20Companies%E2%80%99%20Performance%20in%20the%207%28a%29%20Loan%20Program%20and%20SBA%E2%80%99s%20Oversight.pdf)
15. U.S. Small Business Administration, 2025 AI Use Case Inventory, published March 2026 (document page and spreadsheet). [legacy<wbr>.sba<wbr>.gov<wbr>/document<wbr>/support<wbr>-sba<wbr>-ai<wbr>-use<wbr>-case<wbr>-inventory](https://legacy.sba.gov/document/support-sba-ai-use-case-inventory) [legacy<wbr>.sba<wbr>.gov<wbr>/sites<wbr>/default<wbr>/files<wbr>/2026<wbr>-03<wbr>/SBA<wbr>%202025<wbr>%20AI<wbr>%20Use<wbr>%20Case<wbr>%20Inventory<wbr>_0<wbr>.xlsx](https://legacy.sba.gov/sites/default/files/2026-03/SBA%202025%20AI%20Use%20Case%20Inventory_0.xlsx)
16. U.S. Government Accountability Office, GAO-26-107828, "Artificial Intelligence: Uses and Risks for Small Business Contracting and Innovation Research," May 4, 2026. [www<wbr>.gao<wbr>.gov<wbr>/products<wbr>/gao<wbr>-26<wbr>-107828](https://www.gao.gov/products/gao-26-107828)
17. SBA Office of Inspector General, Report 26-01, "Top Management and Performance Challenges Facing the SBA in Fiscal Year 2026," December 2025. [www<wbr>.oversight<wbr>.gov<wbr>/sites<wbr>/default<wbr>/files<wbr>/documents<wbr>/reports<wbr>/2025<wbr>-12<wbr>/SBA<wbr>%20OIG<wbr>%20Report<wbr>%2026<wbr>-01<wbr>%20<wbr>-<wbr>%20Top<wbr>%20Management<wbr>%20and<wbr>%20Performance<wbr>%20Challenges<wbr>%20Facing<wbr>%20the<wbr>%20SBA<wbr>%20in<wbr>%20Fiscal<wbr>%20Year<wbr>%202026<wbr>.pdf](https://www.oversight.gov/sites/default/files/documents/reports/2025-12/SBA%20OIG%20Report%2026-01%20-%20Top%20Management%20and%20Performance%20Challenges%20Facing%20the%20SBA%20in%20Fiscal%20Year%202026.pdf)
18. SBA Office of Inspector General, Report 25-04, oversight of non-bank lenders and lender service providers in the Paycheck Protection Program, November 13, 2024. [www<wbr>.oversight<wbr>.gov<wbr>/sites<wbr>/default<wbr>/files<wbr>/documents<wbr>/reports<wbr>/2024<wbr>-11<wbr>/SBA<wbr>%20OIG<wbr>%20Report<wbr>%2025<wbr>-04<wbr>.pdf](https://www.oversight.gov/sites/default/files/documents/reports/2024-11/SBA%20OIG%20Report%2025-04.pdf)
19. SBA Office of Inspector General, Report 26-07, "SBA's Screening of 7(a) Loan Applications Under its Risk Mitigation Framework," March 2026. [www<wbr>.oversight<wbr>.gov<wbr>/sites<wbr>/default<wbr>/files<wbr>/documents<wbr>/reports<wbr>/2026<wbr>-03<wbr>/SBA<wbr>%20OIG<wbr>%20Report<wbr>%2026<wbr>-07<wbr>%20<wbr>-<wbr>%20SBA<wbr>%27s<wbr>%20Screening<wbr>%20of<wbr>%207<wbr>%28a<wbr>%29<wbr>%20Loan<wbr>%20Applications<wbr>%20Under<wbr>%20its<wbr>%20Risk<wbr>%20Mitigation<wbr>%20Framework<wbr>.pdf](https://www.oversight.gov/sites/default/files/documents/reports/2026-03/SBA%20OIG%20Report%2026-07%20-%20SBA%27s%20Screening%20of%207%28a%29%20Loan%20Applications%20Under%20its%20Risk%20Mitigation%20Framework.pdf)
20. Wenda Roycraft, "Key Takeaways from the 2026 Spring NAGGL Conference," Womble Bond Dickinson, 2026. [www<wbr>.wbd<wbr>.org<wbr>/key<wbr>-takeaways<wbr>-from<wbr>-the<wbr>-2026<wbr>-spring<wbr>-naggl<wbr>-conference](https://www.wbd.org/key-takeaways-from-the-2026-spring-naggl-conference)
21. NAGGL, "2026 Member Meetup: AI in 7(a) Lending," event page, February 4–5, 2026. [my<wbr>.naggl<wbr>.org<wbr>/Events<wbr>/Calendar<wbr>-Of<wbr>-Events<wbr>/Meeting<wbr>-Home<wbr>-Page<wbr>?meetingid<wbr>=a91e8f31<wbr>-479a<wbr>-f011<wbr>-b4cc<wbr>-6045bd060164](https://my.naggl.org/Events/Calendar-Of-Events/Meeting-Home-Page?meetingid=a91e8f31-479a-f011-b4cc-6045bd060164)
22. U.S. Small Business Administration, News Release 25-83, fiscal 2025 lending results, September 30, 2025. [legacy<wbr>.sba<wbr>.gov<wbr>/article<wbr>/2025<wbr>/09<wbr>/30<wbr>/trump<wbr>-sba<wbr>-delivers<wbr>-record<wbr>-capital<wbr>-small<wbr>-businesses<wbr>-fy25](https://legacy.sba.gov/article/2025/09/30/trump-sba-delivers-record-capital-small-businesses-fy25)
23. U.S. Small Business Administration, fiscal 2026 lending results, November 2, 2026. [legacy<wbr>.sba<wbr>.gov<wbr>/article<wbr>/2026<wbr>/11<wbr>/02<wbr>/sba<wbr>-fuels<wbr>-main<wbr>-street<wbr>-growth<wbr>-100<wbr>-billion<wbr>-delivered<wbr>-fy26](https://legacy.sba.gov/article/2026/11/02/sba-fuels-main-street-growth-100-billion-delivered-fy26)
24. Penny Crosman, "Huntington, Live Oak to invest in, deploy gen-AI-based lending," American Banker, August 19, 2025. [www<wbr>.americanbanker<wbr>.com<wbr>/news<wbr>/huntington<wbr>-live<wbr>-oak<wbr>-to<wbr>-invest<wbr>-in<wbr>-deploy<wbr>-gen<wbr>-ai<wbr>-based<wbr>-lending](https://www.americanbanker.com/news/huntington-live-oak-to-invest-in-deploy-gen-ai-based-lending)
25. Casca, "Series A announcement," August 2025. [www<wbr>.cascading<wbr>.ai<wbr>/company<wbr>/series<wbr>-a<wbr>-announcement](https://www.cascading.ai/company/series-a-announcement)
26. Casca newsroom, "Huntington and Live Oak to deploy gen AI lending." [www<wbr>.cascading<wbr>.ai<wbr>/news<wbr>/huntington<wbr>-live<wbr>-oak<wbr>-gen<wbr>-ai<wbr>-lending](https://www.cascading.ai/news/huntington-live-oak-gen-ai-lending)
27. John Reosti, "How AI is quickly overhauling one segment of SBA lending," American Banker, April 28, 2026. [www<wbr>.americanbanker<wbr>.com<wbr>/news<wbr>/how<wbr>-ai<wbr>-is<wbr>-quickly<wbr>-overhauling<wbr>-one<wbr>-segment<wbr>-of<wbr>-sba<wbr>-lending](https://www.americanbanker.com/news/how-ai-is-quickly-overhauling-one-segment-of-sba-lending)
28. Casca, "Casca Selected by Celtic Bank to Power Its SBA Lending Program," PR Newswire, April 29, 2026. [www<wbr>.prnewswire<wbr>.com<wbr>/news<wbr>-releases<wbr>/casca<wbr>-selected<wbr>-by<wbr>-celtic<wbr>-bank<wbr>-to<wbr>-power<wbr>-its<wbr>-sba<wbr>-lending<wbr>-program<wbr>-302757486<wbr>.html](https://www.prnewswire.com/news-releases/casca-selected-by-celtic-bank-to-power-its-sba-lending-program-302757486.html)
29. Penny Crosman, "Colony Bank uses gen AI to shave days off SBA loan approvals," American Banker, October 16, 2026. [www<wbr>.americanbanker<wbr>.com<wbr>/news<wbr>/colony<wbr>-bank<wbr>-uses<wbr>-gen<wbr>-ai<wbr>-to<wbr>-shave<wbr>-days<wbr>-off<wbr>-sba<wbr>-loan<wbr>-approvals](https://www.americanbanker.com/news/colony-bank-uses-gen-ai-to-shave-days-off-sba-loan-approvals)
30. SiliconANGLE, "Lama AI raises $10M to accelerate automated loan originations," June 23, 2026. [siliconangle<wbr>.com<wbr>/2026<wbr>/06<wbr>/23<wbr>/lama<wbr>-ai<wbr>-raises<wbr>-10m<wbr>-accelerate<wbr>-automated<wbr>-loan<wbr>-originations](https://siliconangle.com/2026/06/23/lama-ai-raises-10m-accelerate-automated-loan-originations)
31. Funderintel, "Newtek just made 7-day loans the new standard," March 11, 2026 (summarising Newtek's release). [www<wbr>.funderintel<wbr>.com<wbr>/post<wbr>/newtek<wbr>-just<wbr>-made<wbr>-7<wbr>-day<wbr>-loans<wbr>-the<wbr>-new<wbr>-standard](https://www.funderintel.com/post/newtek-just-made-7-day-loans-the-new-standard)
32. LetsDataScience, "nCino integrates Parlay AI for SBA lending intake," October 18, 2026 (summarising The Fintech Times). [letsdatascience<wbr>.com<wbr>/news<wbr>/ncino<wbr>-integrates<wbr>-parlay<wbr>-ai<wbr>-for<wbr>-sba<wbr>-lending<wbr>-intake<wbr>-0ca2771c](https://letsdatascience.com/news/ncino-integrates-parlay-ai-for-sba-lending-intake-0ca2771c)
33. Funderintel, "When the banks get fast: how AI is collapsing small-dollar SBA loan times," 2026 (secondary, citing American Banker and Live Oak remarks). [www<wbr>.funderintel<wbr>.com<wbr>/post<wbr>/when<wbr>-the<wbr>-banks<wbr>-get<wbr>-fast<wbr>-how<wbr>-ai<wbr>-is<wbr>-collapsing<wbr>-small<wbr>-dollar<wbr>-sba<wbr>-loan<wbr>-times](https://www.funderintel.com/post/when-the-banks-get-fast-how-ai-is-collapsing-small-dollar-sba-loan-times)
34. U.S. Census Bureau, Center for Economic Studies, Working Paper CES-WP-25-07, 2025, on bank AI adoption and small-business lending. [census<wbr>.gov<wbr>/library<wbr>/working<wbr>-papers<wbr>/2025<wbr>/adrm<wbr>/CES<wbr>-WP<wbr>-25<wbr>-07<wbr>.html](https://census.gov/library/working-papers/2025/adrm/CES-WP-25-07.html)
35. Consumer Financial Protection Bureau, Regulation B, 12 CFR 1002.9 (Notifications) and Official Interpretations. [www<wbr>.consumerfinance<wbr>.gov<wbr>/rules<wbr>-policy<wbr>/regulations<wbr>/1002<wbr>/9](https://www.consumerfinance.gov/rules-policy/regulations/1002/9)
36. Morgan Lewis, "CFPB Guidance Tracker: Rescinded and Remaining." [www<wbr>.morganlewis<wbr>.com<wbr>/de<wbr>/topics<wbr>/cfpb<wbr>-guidance<wbr>-tracker<wbr>-rescinded<wbr>-and<wbr>-remaining](https://www.morganlewis.com/de/topics/cfpb-guidance-tracker-rescinded-and-remaining)
37. Consumer Financial Protection Bureau, final rule amending Regulation B (disparate impact, discouragement, special purpose credit programs), 91 FR 21620, April 22, 2026. [www<wbr>.govinfo<wbr>.gov<wbr>/content<wbr>/pkg<wbr>/FR<wbr>-2026<wbr>-04<wbr>-22<wbr>/pdf<wbr>/2026<wbr>-07804<wbr>.pdf](https://www.govinfo.gov/content/pkg/FR-2026-04-22/pdf/2026-07804.pdf)
38. Consumer Financial Protection Bureau, Small Business Lending Rule (Section 1071) page. [www<wbr>.consumerfinance<wbr>.gov<wbr>/1071<wbr>-rule<wbr>/](https://www.consumerfinance.gov/1071-rule/)
39. KPMG, "CFPB final rules: Regulation B, Section 1071 and disparate impact liability," Reg Alert, May 18, 2026. [kpmg<wbr>.com<wbr>/us<wbr>/en<wbr>/articles<wbr>/2026<wbr>/cfpb<wbr>-final<wbr>-rules<wbr>-regulation<wbr>-b<wbr>-Section<wbr>-1071<wbr>-and<wbr>-disparate<wbr>-impact<wbr>-liability<wbr>-reg<wbr>-alert<wbr>.html](https://kpmg.com/us/en/articles/2026/cfpb-final-rules-regulation-b-Section-1071-and-disparate-impact-liability-reg-alert.html)
40. Board of Governors of the Federal Reserve System, SR 26-2, "Revised Guidance on Model Risk Management," April 17, 2026. [www<wbr>.federalreserve<wbr>.gov<wbr>/supervisionreg<wbr>/srletters<wbr>/SR2602<wbr>.htm](https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm)
41. Federal Reserve, OCC and FDIC, attachment to SR 26-2, "Guidance on Model Risk Management." [www<wbr>.federalreserve<wbr>.gov<wbr>/supervisionreg<wbr>/srletters<wbr>/SR2602a1<wbr>.pdf](https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf)
42. Michelle W. Bowman, Vice Chair for Supervision, speech, Board of Governors of the Federal Reserve System, May 1, 2026. [www<wbr>.federalreserve<wbr>.gov<wbr>/newsevents<wbr>/speech<wbr>/bowman20260501a<wbr>.htm](https://www.federalreserve.gov/newsevents/speech/bowman20260501a.htm)
43. Office of the Comptroller of the Currency, Bulletin 2023-17, "Third-Party Relationships: Interagency Guidance on Risk Management," June 6, 2023. [www<wbr>.occ<wbr>.gov<wbr>/news<wbr>-issuances<wbr>/bulletins<wbr>/2023<wbr>/bulletin<wbr>-2023<wbr>-17<wbr>.html](https://www.occ.gov/news-issuances/bulletins/2023/bulletin-2023-17.html)
44. John M. Griffin, Samuel Kruger and Prateek Mahajan, "Did FinTech Lenders Facilitate PPP Fraud?" Journal of Finance 78(3), 2023, 1777–1827. [ideas<wbr>.repec<wbr>.org<wbr>/a<wbr>/bla<wbr>/jfinan<wbr>/v78y2023i3p1777<wbr>-1827<wbr>.html](https://ideas.repec.org/a/bla/jfinan/v78y2023i3p1777-1827.html)
45. Sabrina T. Howell, Theresa Kuchler, David Snitkof, Johannes Stroebel and Jun Wong, "Lender Automation and Racial Disparities in Credit Access," Journal of Finance 79(2), 2024; NBER Working Paper 29364. [www<wbr>.nber<wbr>.org<wbr>/papers<wbr>/w29364](https://www.nber.org/papers/w29364)
46. Financial Crimes Enforcement Network, "FinCEN Issues Alert on Fraud Schemes Involving Deepfake Media Targeting Financial Institutions" (FIN-2024-Alert004), November 13, 2024. [www<wbr>.fincen<wbr>.gov<wbr>/news<wbr>/news<wbr>-releases<wbr>/fincen<wbr>-issues<wbr>-alert<wbr>-fraud<wbr>-schemes<wbr>-involving<wbr>-deepfake<wbr>-media<wbr>-targeting<wbr>-financial](https://www.fincen.gov/news/news-releases/fincen-issues-alert-fraud-schemes-involving-deepfake-media-targeting-financial)
47. Federal Reserve Banks, Small Business Credit Survey, 2026 Report on Employer Firms. [www<wbr>.fedsmallbusiness<wbr>.org<wbr>/<wbr>-<wbr>/media<wbr>/project<wbr>/clevelandfedtenant<wbr>/fsbsite<wbr>/reports<wbr>/2026<wbr>/2026<wbr>-report<wbr>-on<wbr>-employer<wbr>-firms<wbr>/2026<wbr>-report<wbr>-on<wbr>-employer<wbr>-firms<wbr>.pdf](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)
48. U.S. Department of the Treasury, "Uses, Opportunities, and Risks of Artificial Intelligence in the Financial Services Sector," December 2024. [home<wbr>.treasury<wbr>.gov<wbr>/system<wbr>/files<wbr>/136<wbr>/Artificial<wbr>-Intelligence<wbr>-in<wbr>-Financial<wbr>-Services<wbr>.pdf](https://home.treasury.gov/system/files/136/Artificial-Intelligence-in-Financial-Services.pdf)
49. U.S. Government Accountability Office, GAO-25-107197, "Artificial Intelligence: Use and Oversight in Financial Services," May 19, 2025. [files<wbr>.gao<wbr>.gov<wbr>/reports<wbr>/GAO<wbr>-25<wbr>-107197<wbr>/index<wbr>.html](https://files.gao.gov/reports/GAO-25-107197/index.html)
50. Federal Trade Commission, "FTC Safeguards Rule: What Your Business Needs to Know." [www<wbr>.ftc<wbr>.gov<wbr>/business<wbr>-guidance<wbr>/resources<wbr>/ftc<wbr>-safeguards<wbr>-rule<wbr>-what<wbr>-your<wbr>-business<wbr>-needs<wbr>-know](https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know)
51. FedScoop, "Small Business Administration AI use cases," May 2026 (reporting on GAO-26-107828). [fedscoop<wbr>.com<wbr>/small<wbr>-business<wbr>-administration<wbr>-ai<wbr>-use<wbr>-cases<wbr>-gao<wbr>-report<wbr>/](https://fedscoop.com/small-business-administration-ai-use-cases-gao-report/)
