## Executive summary

Most US small-business loans under a few hundred thousand dollars are decided with a score, not a full credit analysis. For two decades the default score in SBA lending was FICO's Small Business Scoring Service (SBSS). It is now being displaced from two directions: the SBA stopped returning SBSS scores for 7(a) Small Loans on March 1, 2026 [23], and a group of vendors is selling machine-learning scores built on loan-performance history, bank transactions and economic data. This paper looks at one of them, Lumos, and places it against bureau scores, cash-flow scoring and the evidence on what alternative data adds.

Key findings:

- **Lumos is Lumos Technologies, Inc. (branded Lumos Data), founded in 2021 in Wilmington, North Carolina, by former Live Oak Bank executives** [1][2]. It is the only lending-related company called Lumos found in public sources. Its main product, Lumos Prime+, predicts 12-month expected credit loss on small-business loans and lines under $500,000 [5].
- **Its model, as described publicly, is a machine-learning estimate of default probability and loss given default.** It is trained on about three decades of small-business loan performance, about 2 million loans, combined with economic data, industry data, lender-supplied application data and the owner's personal credit score [9][10][4]. The exact algorithm, validation results and adverse-action method are not public.
- **No public source supports the claim that Lumos gets portfolio data faster than traditional processes.** What Lumos does claim is speed of scoring (a default probability with its drivers in about 20 seconds, according to its CEO), routine rescoring of existing loans, and quarterly SBA performance benchmarks [10][6][8]. This paper treats "faster portfolio data" as unverified.
- **Lumos publishes no accuracy metrics.** It says Prime+ is more accurate and fairer than consumer and business credit scores, but gives no AUC, Gini, lift or loss figures and no independent validation [5][4]. Its one named bank customer is Live Oak Bank [13].
- **Independent research finds real but modest gains from alternative data.** In FinRegLab's 2025 study of about 38,000 fintech small-business loans, adding cash-flow data raised AUC (a measure of how well a model separates good and bad loans) from 0.652 to 0.663. The gains were concentrated among owners with credit scores under 700 [40]. An NBER study found larger gains for owners under 35 [41]. Vendor "lift" claims of 24% to 63% use different metrics and are mostly for consumer products [34][35].
- **The SBA's exit from SBSS is the opening.** For 7(a) Small Loans, lenders may now use any scoring model their regulator permits, as long as it does not rely only on consumer credit scores, and must also show debt service coverage of at least 1.10x and review two months of operating-account statements [23]. That rule change creates demand for exactly the kind of business-level scoring Lumos and its peers sell.
- **Governance obligations stay with the lender.** The CFPB withdrew its 2022 and 2023 circulars on adverse-action notices for complex algorithms in May 2025, but the underlying ECOA and Regulation B requirement to give specific reasons for denial remains [46]. The revised interagency model risk guidance of April 2026 keeps non-generative machine-learning models such as these in scope [48][49].

## Background

### Why scores dominate small-business credit

A $150,000 working capital line earns a lender too little to justify the same analyst time as a $5 million commercial real estate loan. Lenders therefore decide most small-dollar business credit with a score, a few policy rules and a light review. The score usually blends the owner's personal credit history with whatever business data exists: trade payment history at a business bureau, financial statements if the borrower has them, and application details.

Small businesses are hard to score. Many have thin or no business bureau files, financial statements are often unaudited or tax-driven, and the owner's personal credit is a noisy proxy for the business. Both the academic studies and the vendors in this paper start from that problem.

### FICO SBSS and its role in SBA lending

FICO's Small Business Scoring Service is delivered through FICO's LiquidCredit platform. FICO's 2012 release of SBSS 7.0 described models built on Equifax commercial and consumer data and data from the Small Business Financial Exchange (SBFE) [18]. A secondary source describes a 0 to 300 range and four input types: the principals' consumer credit, business bureau data, application data and financial data [19]. FICO's own pages confirming the range could not be retrieved, so that detail rests on the secondary source.

The SBA used SBSS as a screen for 7(a) Small Loans, loans of $350,000 or less. A congressional research report in 2018 recorded a minimum of 140 [20]. The SBA raised it to 155 in August 2020 [21] and to 165 under SOP 50 10 8, effective June 1, 2025 [22]. Then, by a procedural notice issued February 20, 2026, the SBA said it was discontinuing SBSS. From March 1, 2026, E-Tran no longer returns the score [23].

![Step chart of the SBA minimum SBSS score for 7(a) Small Loans, 2018 to 2026](research/lumos-small-business-credit-scoring/fig1-sbss.svg)

*Figure 1. Minimum FICO SBSS score for SBA 7(a) Small Loans. 140 recorded in October 2018 [20]; 155 from August 2020 [21]; 165 from June 1, 2025 [22]; score discontinued March 1, 2026 [23]. The exact start date of the 140 minimum is not shown in the sources. Chart by the author.*

The replacement rules for 7(a) Small Loans [23]:

- Lenders may use any credit scoring model that their primary federal regulator permits, but not consumer credit scores alone. The credit memo must state the score and the acceptable approval range.
- Debt service coverage must be at least 1.10 to 1.
- Lenders must review the two most recent months of statements for the business's main operating account to confirm commercial debts.
- Loans that fail the coverage test go through standard 7(a) or SBA Express processing.

SOP 50 10 8.1, which applies to loans numbered on or after October 1, 2026, carries this approach forward, according to trade press [25][26]. Experian, which sells business scores, described the change as the "SBSS sunset" and a shift of scoring choice to lenders [24].

### Who Lumos is

Lumos Technologies, Inc. was founded in October 2021 in Wilmington, North Carolina. Its founders are Brett Caines (CEO, a former Live Oak Bank chief financial officer), Youri Nelson (CTO, formerly Live Oak's head of analytics) and Stephen Hayes (also from Live Oak's analytics team) [1][2]. Local press reported that all ten of its 2022 hires came from Live Oak [1]. Live Oak is one of the largest SBA 7(a) lenders, which helps explain the company's focus on SBA and small-dollar business credit.

Funding reports conflict. The company announced a "multimillion-dollar" seed round in July 2024, with Live Oak founder Chip Mahan among the investors [3]. One regional outlet put that round at $2 million [2], and another later reported a $5 million round [4]. This paper does not state a total. Lumos's first distribution partner was Lenders Cooperative, which initially sold Prime+ exclusively [5].

## What Lumos sells

Lumos's own website could not be retrieved for this research, so product descriptions come from Lumos press releases, partner pages and press coverage.

### Products

- **Lumos Prime+** (January 2023). A score that predicts 12-month expected credit loss for small-business term loans and lines of credit under $500,000, using lender-specific risk parameters. It was first sold only through Lenders Cooperative [5]. A 2026 partnership release from Baker Hill says one Prime+ assessment is used for both origination and ongoing monitoring [14].
- **Lumos Portfolio Score** (February 2024), part of a "Portfolio Insights" suite. It rescores existing loans for default probability, expected loss and risk trends, and alerts lenders to emerging weakness [6].
- **Lumos Business Report** (October 2024). An automatically generated credit narrative with industry benchmarks and a qualification grade [7].
- **SBA industry and franchise reports.** Quarterly reports on SBA 7(a) and 504 loan performance by six-digit NAICS industry code and by franchise brand, covering defaults, charge-offs, paid-in-full loans and prepayments [8].

Delivery is by API, embedded in partners' loan origination systems. Announced partners include Lenders Cooperative, nCino, SPARK, Lama AI, Baker Hill and Vertical IQ [7][9][14][15][16][17].

### Model approach

nCino's partner page describes Lumos as using machine learning to estimate probability of default (PD) and loss given default (LGD) [9]. Multiplying the two (and exposure) gives the expected-loss figure that Lumos's own releases describe [5]. Press coverage adds that the model returns the main factors behind each estimate [10], that the company said it tested for bias and fairness at launch [1], and that it describes its validation as rigorous back-testing [17]. None of these sources publishes the algorithm type, the validation sample, performance statistics or the method used to produce reason codes.

In sponsored articles in BankDirector, the CEO describes models that capture non-linear relationships and adjust to market shifts in near real time. He also describes a proof of concept in which Lumos "retro-scores" a bank's past originations and declined applications so the bank can compare outcomes [11]. That retro-scoring approach is a sensible way for a lender to test any vendor score, and is discussed later in this paper.

![Diagram of Lumos inputs, model outputs, products and delivery partners](research/lumos-small-business-credit-scoring/fig2-lumos.svg)

*Figure 2. Lumos as publicly described. Inputs [4][9][10]; PD and LGD model [9]; expected-loss output [5]; products [5][6][7][8]; delivery partners [7][9][14][15][17]. Items Lumos has not disclosed are marked. Diagram by the author.*

### Data

Public descriptions of Lumos's data:

- About three decades of small-business loan performance data, plus economic data [9]; elsewhere described as about 2 million historical small-business loans over 30 years [10].
- Lender-supplied business data, the owner's credit score, industry performance, state and national economic conditions and employee count [4]; one profile also mentions the business's online presence [2].
- SBA 7(a) and 504 loan data for its industry and franchise reports [8].

The SBA publishes loan-level 7(a) and 504 data on data.sba.gov back to fiscal year 1991, updated quarterly [27]. The "30 years" figure is consistent with that public history, but no source says that Lumos's training set is the SBA data, and the author does not assume so. Public SBA data has no credit score field, which limits what can be learned from it alone [27].

No public source mentions Lumos using bank-transaction (cash-flow) data or accounting-system data. In that sense, Lumos is less an "alternative data" score than a loan-performance and macro-economic score with modern modeling. Vertical IQ, an industry-data partner, describes it as an alternative data provider [16].

### Speed and the "faster portfolio data" question

The research brief asked how Lumos gets portfolio data faster than traditional processes. No public source makes that claim, so this paper does not repeat it. The nearest claims are:

- **Speed of scoring.** The CEO told local press that the model returns a default probability and its drivers in about 20 seconds, and that automated memo writing can cut preparation from half a day or more to about a minute [10]. These are the CEO's own statements.
- **Rescoring instead of waiting.** Portfolio Score rescores existing loans routinely, so a lender can see risk drift before a payment is missed [6][12]. Traditional portfolio monitoring often relies on annual reviews and delinquency, which are lagging signals.
- **Embedded delivery.** Integration with origination and monitoring platforms removes manual data uploads, according to a partner release [15].
- **Benchmarks.** The quarterly SBA reports give lenders an industry view faster than building it themselves [8].

Each point is plausible, but none is quantified with a before-and-after comparison.

### Customers and performance claims

Live Oak Bank announced in August 2024 that it selected Lumos and that Prime+ powers Live Oak Express, its streamlined channel for small-business loans [13]. Lumos said it had onboarded more than 80 financial institutions in mid-2024 [3], and a profile later in 2024 cited more than 90 banks [4]. No other customers are named publicly.

On performance, Lumos says Prime+ is more accurate and fairer than consumer and leading business credit scores [5]. Its CTO has said it outperforms the scoring banks commonly use [4]. Lumos's own analysis, published in a sponsored article, says SBA 7(a) defaults more than doubled from 2022 to 2025 [12]. None of these statements comes with published metrics or third-party validation.

## The wider field

Alternative small-business scoring is not one thing. The products differ mainly in the data they use, as Figure 3 shows.

### Business bureau scores

The three business bureaus score firms mainly from trade payment data, public records and firm characteristics:

- **Experian Intelliscore Plus** runs from 1 to 100 (higher is lower risk). It uses trade experiences and balances, public records such as liens and judgments, and firm data such as years on file and industry [30].
- **Dun & Bradstreet** publishes PAYDEX, a 1 to 100 summary of past payment timeliness, alongside predictive scores. Its Delinquency Score predicts severe delinquency over the next 12 months, and its Failure Score predicts business failure over the same horizon [31].
- **Equifax** offers business delinquency and failure scores with 12-month horizons. Some versions blend in owner consumer data and Small Business Financial Exchange data on loans, leases and cards [32].

### Financial-statement models

**Moody's RiskCalc** estimates expected default frequency over one to five years from financial-statement ratios plus market and credit-cycle information. Moody's says the underlying database holds about 13 million financial statements from 2.5 million firms [33]. Models of this type suit larger small businesses with reliable statements, and fit poorly with very small firms that lack them.

### Cash-flow and transaction scoring

The fastest-growing category uses bank-account transactions, accessed with the borrower's permission:

- **Experian Commercial Cashflow Attributes** (September 2026) provides more than 500 attributes from business bank transactions. Experian claims up to 24% lift when they are combined with commercial credit data, especially for thin-file firms [34].
- **Ocrolus** says its cash-flow analytics support scoring for more than 175 funders, and in 2025 it launched a small-business data-sharing platform with Lendio as an early user [36].
- **Square Loans** underwrites merchants on their payment processing data. Block says an updated model can lend after a merchant's first processed payment [37], and its 2026 shareholder letter describes loans underwritten on data banks cannot see, with loss rates under 4% [38].
- **JUDI.AI**, used by Unitus Community Credit Union, underwrites small-business loans from bank-transaction data without financial statements or tax returns. The credit union reported approval rates above 50%, against often under 30% before [39].
- **Consumer cash-flow scores** from Plaid, FICO with Plaid, and Prism Data are aimed at consumer lending, though they are sometimes used for sole proprietors. Plaid claims its LendScore adds 25% predictive lift over traditional credit data [35]. FICO has announced a cash-flow UltraFICO score delivered through Plaid [53]. Prism Data has said it plans to expand into small-business lending [52].

![Matrix showing which data sources each small-business score uses](research/lumos-small-business-credit-scoring/fig3-matrix.svg)

*Figure 3. Data used by selected small-business scores, as each provider or a cited source describes it. A filled mark means the source says the data is used; an open mark means it is optional or in some versions; blank means not stated. Sources: SBSS [18][19]; Experian Intelliscore Plus [30]; D&B [31]; Equifax [32]; Moody's RiskCalc [33]; Lumos Prime+ [4][9][10]; Experian Commercial Cashflow Attributes [34]; Square Loans [37][38]. Matrix by the author.*

### Comparison

| Score | Provider type | Main data | Predicts | Public performance evidence |
|---|---|---|---|---|
| FICO SBSS | Scoring vendor | Owner consumer, business bureau, application, financials [18][19] | Credit risk (score) | No longer returned by SBA for 7(a) [23] |
| Experian Intelliscore Plus | Bureau | Trades, public records, firmographics [30] | Business credit risk | Not published |
| D&B Delinquency / Failure | Bureau | Trades, firm data [31] | Severe delinquency / failure, 12 months | Not published |
| Equifax business scores | Bureau | Commercial trades, SBFE, optional consumer [32] | Severe delinquency / failure, 12 months | Not published |
| Moody's RiskCalc | Analytics vendor | Financial statements, market, cycle [33] | Default frequency, 1–5 years | Not reviewed here |
| Lumos Prime+ | Fintech | Loan history, macro, industry, lender data, owner score [4][9][10] | Expected loss, 12 months [5] | Vendor claims only [5] |
| Experian Commercial Cashflow Attributes | Bureau | Business bank transactions [34] | Attributes, not a score | Vendor claim: up to 24% lift [34] |
| Square Loans | Platform lender | Merchant payment data [37] | Internal underwriting | Lender-reported losses under 4% [38] |

## What the evidence says alternative data adds

### Independent studies

Three bodies of research are relevant.

**FinRegLab and NYU Stern (2025).** The study used about 38,000 small-business loans made by two fintech lenders from 2015 to 2024, testing roughly two dozen bank-account metrics alongside the owner's personal credit score. Adding cash-flow data raised AUC from 0.652 to 0.663, an improvement of almost 2%. The gains were larger for owners with scores below 700: among them, 3.6 times as many borrowers were reclassified as substantially lower risk as were reclassified higher, rising to 7.6 times for low-score owners of early-stage firms. The most predictive features were deposit and balance levels and their volatility [40].

**Hair, Howell, Johnson and Matsumoto (NBER, 2025).** Using about 1.1 million applications and 74,000 loans from three fintech lenders, the authors found that cash-flow variables improved prediction of approval (AUC from 0.803 to 0.816). For default prediction, the gain was larger for owners under 35 (AUC from 0.608 to 0.638) than for older owners (0.671 to 0.679). Younger owners were 2.5 percentage points more likely to be approved at lenders that relied heavily on cash-flow data [41].

**Fintech small-business lending more broadly.** Research on the Paycheck Protection Program found that automated fintech lenders accounted for a large share of loans to Black-owned firms and that banks that automated increased their lending to these firms [42]. A Philadelphia Fed study of two online lenders found their internal scores predicted performance better than traditional scoring and that they lent more in areas with higher unemployment and business bankruptcy [43].

![Dumbbell chart of AUC before and after adding cash-flow data in two studies](research/lumos-small-business-credit-scoring/fig4-auc.svg)

*Figure 4. Predictive accuracy (AUC) without and with cash-flow data. FinRegLab and NYU Stern, default prediction, 38,000 loans [40]; Hair et al., NBER w33367, default prediction by owner age and approval prediction [41]. The horizontal axis starts at 0.55. Chart by the author.*

### Reading the evidence

Two points stand out. First, the measured gains are modest on average: about 0.01 to 0.03 AUC. They are concentrated in the population traditional scores serve worst: low-score, young and early-stage owners. Second, vendor claims ("up to 24% lift", "25% predictive lift") use different metrics, often relative lift or KS statistics on the vendor's own samples. They cannot be compared directly with the academic AUC figures [34][35]. A lender cannot tell from a press release whether a 24% lift means a large or a small gain in separating good loans from bad.

None of the studies tests a loan-history and macro-economic model like Lumos's. The cash-flow evidence is the closest independent guide to what a business-level score can add beyond the owner's personal credit.

### Demand side

The Federal Reserve's Small Business Credit Survey gives the market context. In the 2026 report (fielded in late 2025), small banks fully approved 57% of employer-firm applicants. Among firms that borrowed from online lenders, 60% reported higher-than-expected costs, compared with 37% at small banks and 32% at large banks [45]. The 2025 report found that 41% of applicants received all the financing they sought [44]. Faster or broader approval through new scores is only useful if pricing and terms remain sound.

## Regulation and governance

### SBA

For 7(a) Small Loans, choosing a scoring model is now a lender decision, made within what the lender's regulator permits. The model cannot rely solely on consumer scores, and the result must be documented in the credit memo [23]. A business-level score like Lumos Prime+ fits that requirement better than an owner-only consumer score. The rule's other two tests, 1.10x coverage and two months of operating-account statements, mean a score alone cannot approve a loan [23].

The SBA also scores its own lenders. Its Lender Risk Rating System, described in a 2024 Federal Register notice, rates lenders quarterly from 1 to 5 using SBA loan data and Experian consumer and business data [28]. Earlier, the SBA's loan monitoring system used FICO models validated on SBA's portfolio, including a Small Business Predictive Score [29]. Whether that score is still used after the system's redevelopment could not be confirmed.

### Fair lending and adverse action

The Equal Credit Opportunity Act and Regulation B require creditors to give applicants the specific principal reasons for a denial. In 2022 and 2023 the CFPB issued circulars stating that this applies in full when a decision uses complex algorithms, and that sample-form reasons are not enough if they do not reflect the actual factors. The CFPB withdrew both circulars on May 12, 2025 [46]. In the author's reading, the withdrawal removes the CFPB's interpretive gloss, not the regulation. A lender using any machine-learning score still needs reason codes it can defend. Lumos's statement that its model returns the factors behind each estimate [10] is a starting point, but the method is not public.

The CFPB's revised Section 1071 small-business lending data rule, published May 1, 2026, narrows coverage to lenders with at least 1,000 originations and defines a small business as one with $1 million or less in revenue. Compliance starts January 1, 2028 [47]. The rule will eventually give regulators application-level data to test whether new scores change outcomes for protected groups.

### Model risk

The April 2026 interagency model risk guidance replaced SR 11-7 and, for national banks, rescinded the OCC's 1997 examination guidance on credit scoring models [48][49]. The new guidance keeps traditional statistical models and non-generative, non-agentic AI in scope, so a machine-learning credit score falls inside it. Vendor models get their own section: banks are expected to understand a vendor model's conceptual soundness and development data, and to monitor it, even where the vendor limits access to code or data. The guidance is non-binding and aimed mainly at banks over $30 billion in assets [48].

### Data access

Cash-flow scores depend on access to bank data. The CFPB's 2024 Section 1033 open-banking rule covers consumers' accounts, not business accounts. It has been under reconsideration since 2025, and its compliance dates have been enjoined [50][51]. Small-business cash-flow lending relies on borrower permission and contracts with data aggregators. That is workable, but data access for business accounts has no clear regulatory footing. Lumos's reliance on loan history rather than live bank data sidesteps this question, at the cost of not using the data the independent studies found most predictive for thin-file owners.

## Implications for lenders and credit teams

- **Treat the SBSS exit as a model selection project, not a vendor swap.** Lenders now have to choose, justify and document a score for 7(a) Small Loans [23]. That calls for a written rationale, a cutoff tied to the lender's own risk appetite and evidence that the score works on the lender's borrowers.
- **Retro-score before buying.** The test Lumos itself proposes is the right one for any vendor: score the bank's past approvals and declines, and compare predicted against actual losses [11]. Insist on the bank's own data, a holdout period the vendor did not see, and results by segment (loan size, industry, owner score band).
- **Ask what the score predicts.** Expected loss (Lumos), severe delinquency (bureaus) and default frequency (RiskCalc) are different targets with different horizons [5][31][33]. A cutoff calibrated on one does not carry over to another.
- **Discount unsupported lift claims.** None of the vendor performance claims reviewed here is independently validated. The independent evidence points to modest average gains, concentrated in thin-file and younger borrowers [40][41].
- **Combine scores with cash flow, as the SBA now requires.** The two-month bank-statement review is itself a light form of cash-flow underwriting [23]. Lenders that already capture that data can test whether it adds signal on top of a vendor score.
- **Own the reason codes.** Make sure every decline can be explained in specific, accurate reasons that match the model's real drivers, whatever the status of the CFPB circulars [46].
- **Monitor drift.** A model trained on three decades of data must still be recalibrated for the 2022 to 2025 rise in SBA defaults that Lumos itself reports [12]. Set up quarterly back-testing and override tracking.
- **Look at portfolio rescoring separately.** Rescoring existing loans with a forward-looking score can surface risk earlier than delinquency [6]. That benefit is independent of whether the score is used for origination, and may be the easier first use to validate.

## Open questions and limitations

- **No independent validation of Lumos exists in public.** All Lumos performance statements come from the company, its partners or sponsored content. Its website could not be retrieved for this research.
- **The "faster portfolio data" premise is unsupported.** No source makes that claim for Lumos. If Thomas or a reader has a specific source, the relevant section should be revised.
- **Training data is not disclosed.** Whether Lumos's 2 million loans come from public SBA data, partner lenders or both is not stated.
- **Funding totals conflict** ($2 million vs $5 million) across regional press [2][4].
- **SBSS details rest partly on secondary sources.** FICO's own confirmation of the 0 to 300 range was not retrieved, and the SOP 50 10 8.1 text was summarized from trade press [19][26].
- **Evidence is mostly from fintech lenders.** The independent studies use fintech loan data, not bank or SBA portfolios, and may not generalize [40][41].
- **Regulation is moving.** Section 1033, Section 1071 and the planned model-risk request for information may each change the picture in 2027 [47][48][50].

## Sources

1. Wilmington Business Journal, "New fintech firm launches first product," January 27, 2023. [www<wbr>.wilmingtonbiz<wbr>.com<wbr>/banking<wbr>_and<wbr>_finance<wbr>/2023<wbr>/01<wbr>/27<wbr>/new<wbr>_fintech<wbr>_firm<wbr>_launches<wbr>_first<wbr>_product<wbr>/24081](https://www.wilmingtonbiz.com/banking_and_finance/2023/01/27/new_fintech_firm_launches_first_product/24081)
2. Hypepotamus, "With new funding boost, Wilmington-based Lumos is bringing more data to small dollar lending," July 18, 2024. [www<wbr>.hypepotamus<wbr>.com<wbr>/wilmington<wbr>-based<wbr>-lumos<wbr>-funding<wbr>/](https://www.hypepotamus.com/wilmington-based-lumos-funding/)
3. Lumos, "Lumos raises multimillion-dollar funding with industry veterans to accelerate growth and innovation," PRWeb, July 17, 2024. [www<wbr>.prweb<wbr>.com<wbr>/releases<wbr>/lumos<wbr>-raises<wbr>-multimillion<wbr>-dollar<wbr>-funding<wbr>-with<wbr>-industry<wbr>-veterans<wbr>-to<wbr>-accelerate<wbr>-growth<wbr>-and<wbr>-innovation<wbr>-302196868<wbr>.html](https://www.prweb.com/releases/lumos-raises-multimillion-dollar-funding-with-industry-veterans-to-accelerate-growth-and-innovation-302196868.html)
4. GrepBeat, "Shine a light on data: Wilmington's Lumos helps banks create more loans," November 13, 2024. [grepbeat<wbr>.com<wbr>/2024<wbr>/11<wbr>/13<wbr>/shine<wbr>-a<wbr>-light<wbr>-on<wbr>-data<wbr>-wilmingtons<wbr>-lumos<wbr>-helps<wbr>-banks<wbr>-create<wbr>-more<wbr>-loans<wbr>/](https://grepbeat.com/2024/11/13/shine-a-light-on-data-wilmingtons-lumos-helps-banks-create-more-loans/)
5. Lumos Technologies, "Lumos Technologies releases Lumos Prime+ score for small business loans exclusively through Lenders Cooperative," CUInsight, January 2023. [www<wbr>.cuinsight<wbr>.com<wbr>/press<wbr>-release<wbr>/lumos<wbr>-technologies<wbr>-releases<wbr>-lumos<wbr>-prime<wbr>-score<wbr>-for<wbr>-small<wbr>-business<wbr>-loans<wbr>-exclusively<wbr>-through<wbr>-lenders<wbr>-cooperative<wbr>/](https://www.cuinsight.com/press-release/lumos-technologies-releases-lumos-prime-score-for-small-business-loans-exclusively-through-lenders-cooperative/)
6. Lumos Technologies, "Lumos Technologies launches small business loan portfolio score," PRWeb, February 29, 2024. [www<wbr>.prweb<wbr>.com<wbr>/releases<wbr>/lumos<wbr>-technologies<wbr>-launches<wbr>-small<wbr>-business<wbr>-loan<wbr>-portfolio<wbr>-score<wbr>-302075919<wbr>.html](https://www.prweb.com/releases/lumos-technologies-launches-small-business-loan-portfolio-score-302075919.html)
7. Lenders Cooperative and Lumos Data, "Lenders Cooperative and Lumos Data expand partnership," Business Wire, October 2, 2024. [www<wbr>.businesswire<wbr>.com<wbr>/news<wbr>/home<wbr>/20241002446579<wbr>/en](https://www.businesswire.com/news/home/20241002446579/en)
8. Lumos, SBA industry report sample. [lumos<wbr>-public<wbr>.s3<wbr>.amazonaws<wbr>.com<wbr>/SBA<wbr>_Report<wbr>_Sample<wbr>.pdf](https://lumos-public.s3.amazonaws.com/SBA_Report_Sample.pdf)
9. nCino, partner page: Lumos. [www<wbr>.ncino<wbr>.com<wbr>/our<wbr>-partners<wbr>/lumos](https://www.ncino.com/our-partners/lumos)
10. Wilmington Business Journal, "CEA technology winner: fintech firm illuminates loan risks," May 7, 2025. [www<wbr>.wilmingtonbiz<wbr>.com<wbr>/entrepreneurs<wbr>/2025<wbr>/05<wbr>/07<wbr>/cea<wbr>_technology<wbr>_winner<wbr>_fintech<wbr>_firm<wbr>_illuminates<wbr>_loan<wbr>_risks<wbr>/26517](https://www.wilmingtonbiz.com/entrepreneurs/2025/05/07/cea_technology_winner_fintech_firm_illuminates_loan_risks/26517)
11. B. Caines, "Lenders don't have to choose between growth and risk," BankDirector (sponsored by Lumos), 2026. [www<wbr>.bankdirector<wbr>.com<wbr>/article<wbr>/lenders<wbr>-dont<wbr>-have<wbr>-to<wbr>-choose<wbr>-between<wbr>-growth<wbr>-and<wbr>-risk<wbr>/](https://www.bankdirector.com/article/lenders-dont-have-to-choose-between-growth-and-risk/)
12. B. Caines, "When a bull walks into a small business credit portfolio," BankDirector (sponsored by Lumos), 2026. [www<wbr>.bankdirector<wbr>.com<wbr>/article<wbr>/when<wbr>-a<wbr>-bull<wbr>-walks<wbr>-into<wbr>-a<wbr>-small<wbr>-business<wbr>-credit<wbr>-portfolio<wbr>/](https://www.bankdirector.com/article/when-a-bull-walks-into-a-small-business-credit-portfolio/)
13. Lumos, "Live Oak Bank selects Lumos to drive efficiencies in small business lending," PRWeb, August 7, 2024. [www<wbr>.prweb<wbr>.com<wbr>/releases<wbr>/live<wbr>-oak<wbr>-bank<wbr>-selects<wbr>-lumos<wbr>-to<wbr>-drive<wbr>-efficiencies<wbr>-in<wbr>-small<wbr>-business<wbr>-lending<wbr>-302212008<wbr>.html](https://www.prweb.com/releases/live-oak-bank-selects-lumos-to-drive-efficiencies-in-small-business-lending-302212008.html)
14. Baker Hill, "Baker Hill and Lumos partner to deliver predictive credit intelligence," June 25, 2026. [bakerhill<wbr>.com<wbr>/news<wbr>/baker<wbr>-hill<wbr>-and<wbr>-lumos<wbr>-partner<wbr>-to<wbr>-deliver<wbr>-predictive<wbr>-credit<wbr>-intelligence<wbr>-that<wbr>-enables<wbr>-smarter<wbr>-small<wbr>-business<wbr>-credit<wbr>-decisions<wbr>-and<wbr>-drives<wbr>-growth](https://bakerhill.com/news/baker-hill-and-lumos-partner-to-deliver-predictive-credit-intelligence-that-enables-smarter-small-business-credit-decisions-and-drives-growth)
15. TechIntelPro, "Lumos and Lama AI partner to embed predictive credit analytics," December 2025. [techintelpro<wbr>.com<wbr>/news<wbr>/finance<wbr>/banking<wbr>/lumos<wbr>-and<wbr>-lama<wbr>-ai<wbr>-partner<wbr>-to<wbr>-embed<wbr>-predictive<wbr>-credit<wbr>-analytics](https://techintelpro.com/news/finance/banking/lumos-and-lama-ai-partner-to-embed-predictive-credit-analytics)
16. Vertical IQ, "Vertical IQ and Lumos Data partnership empowers lenders with actionable insights," October 9, 2024. [verticaliq<wbr>.com<wbr>/2024<wbr>/10<wbr>/09<wbr>/vertical<wbr>-iq<wbr>-and<wbr>-lumos<wbr>-data<wbr>-partnership<wbr>-empowers<wbr>-lenders<wbr>-with<wbr>-actionable<wbr>-insights<wbr>/](https://verticaliq.com/2024/10/09/vertical-iq-and-lumos-data-partnership-empowers-lenders-with-actionable-insights/)
17. Lumos, "Enhancing small business lending: Lumos and SPARK announce strategic partnership," PRWeb, February 2025. [www<wbr>.prweb<wbr>.com<wbr>/releases<wbr>/enhancing<wbr>-small<wbr>-business<wbr>-lending<wbr>-lumos<wbr>-and<wbr>-spark<wbr>-announce<wbr>-strategic<wbr>-partnership<wbr>-302377814<wbr>.html](https://www.prweb.com/releases/enhancing-small-business-lending-lumos-and-spark-announce-strategic-partnership-302377814.html)
18. FICO, "FICO introduces expanded analytic service to speed small business lending," December 19, 2012. [www<wbr>.fico<wbr>.com<wbr>/en<wbr>/newsroom<wbr>/fico<wbr>-introduces<wbr>-expanded<wbr>-analytic<wbr>-service<wbr>-speed<wbr>-small<wbr>-business<wbr>-lending](https://www.fico.com/en/newsroom/fico-introduces-expanded-analytic-service-speed-small-business-lending)
19. Nav, "FICO SBSS score" (secondary source). [www<wbr>.nav<wbr>.com<wbr>/business<wbr>-credit<wbr>-scores<wbr>/fico<wbr>-sbss<wbr>/](https://www.nav.com/business-credit-scores/fico-sbss/)
20. Congressional Research Service, R41146, "Small Business Administration 7(a) Loan Guaranty Program," October 31, 2018. [www<wbr>.everycrsreport<wbr>.com<wbr>/files<wbr>/20181031<wbr>_R41146<wbr>_d8d0af543ed05c5f1e<wbr>7458f2fd63ab2b16f9<wbr>72eb<wbr>.html](https://www.everycrsreport.com/files/20181031_R41146_d8d0af543ed05c5f1e7458f2fd63ab2b16f972eb.html)
21. SBA Information Notice 5000-20043, minimum SBSS score increased to 155, August 2020 (hosted by Coleman Report). [colemanreport<wbr>.com<wbr>/wp<wbr>-content<wbr>/uploads<wbr>/2020<wbr>/08<wbr>/5000<wbr>-20043<wbr>.pdf](https://colemanreport.com/wp-content/uploads/2020/08/5000-20043.pdf)
22. Congressional Research Service, IN12549, on SOP 50 10 8. [www<wbr>.everycrsreport<wbr>.com<wbr>/reports<wbr>/IN12549<wbr>.html](https://www.everycrsreport.com/reports/IN12549.html)
23. SBA Procedural Notice 5000-876777, discontinuation of FICO SBSS and 7(a) Small Loan underwriting requirements, issued February 20, 2026, effective March 1, 2026 (hosted by NAGGL). [www<wbr>.naggl<wbr>.org<wbr>/wp<wbr>-content<wbr>/uploads<wbr>/2026<wbr>/05<wbr>/5000<wbr>-876777<wbr>.pdf](https://www.naggl.org/wp-content/uploads/2026/05/5000-876777.pdf)
24. Experian, "The SBA SBSS sunset," July 22, 2026. [www<wbr>.experian<wbr>.com<wbr>/blogs<wbr>/business<wbr>-information<wbr>/2026<wbr>/07<wbr>/22<wbr>/the<wbr>-sba<wbr>-sbss<wbr>-sunset<wbr>/](https://www.experian.com/blogs/business-information/2026/07/22/the-sba-sbss-sunset/)
25. SBA Information Notice 5000-880695, issuance of SOP 50 10 8.1, August 2026. [legacy<wbr>.sba<wbr>.gov<wbr>/document<wbr>/information<wbr>-notice<wbr>-5000<wbr>-880695<wbr>-issuance<wbr>-sop<wbr>-50<wbr>-10<wbr>-81](https://legacy.sba.gov/document/information-notice-5000-880695-issuance-sop-50-10-81)
26. Coleman Report, "New SOP 50 10 8.1 impacts business acquisition loans and small loans," August 18, 2026. [colemanreport<wbr>.com<wbr>/sba<wbr>-hot<wbr>-topic<wbr>-tuesday<wbr>-new<wbr>-sop<wbr>-5010<wbr>-8<wbr>-1<wbr>-impacts<wbr>-biz<wbr>-aq<wbr>-loans<wbr>-small<wbr>-loans<wbr>/](https://colemanreport.com/sba-hot-topic-tuesday-new-sop-5010-8-1-impacts-biz-aq-loans-small-loans/)
27. U.S. Small Business Administration, "7(a) & 504 FOIA" dataset, data.sba.gov. [data<wbr>.sba<wbr>.gov<wbr>/dataset<wbr>/7a<wbr>-504<wbr>-foia](https://data.sba.gov/dataset/7a-504-foia)
28. U.S. Small Business Administration, Lender Risk Rating System notice, 89 FR 16604, March 7, 2024. [www<wbr>.govinfo<wbr>.gov<wbr>/content<wbr>/pkg<wbr>/FR<wbr>-2024<wbr>-03<wbr>-07<wbr>/html<wbr>/2024<wbr>-04830<wbr>.htm](https://www.govinfo.gov/content/pkg/FR-2024-03-07/html/2024-04830.htm)
29. U.S. Government Accountability Office, GAO-10-53, SBA lender oversight, November 2009. [www<wbr>.gao<wbr>.gov<wbr>/assets<wbr>/a298112<wbr>.html](https://www.gao.gov/assets/a298112.html)
30. Experian, "Business credit score" (Intelliscore Plus). [www<wbr>.experian<wbr>.com<wbr>/small<wbr>-business<wbr>/business<wbr>-credit<wbr>-score<wbr>.jsp](https://www.experian.com/small-business/business-credit-score.jsp)
31. Dun & Bradstreet, Direct 2.0 documentation: analytics. [docs<wbr>.dnb<wbr>.com<wbr>/direct<wbr>/2<wbr>.0<wbr>/en<wbr>-US<wbr>/analytics](https://docs.dnb.com/direct/2.0/en-US/analytics)
32. Equifax, U.S. commercial scoring product sheet. [assets<wbr>.equifax<wbr>.com<wbr>/assets<wbr>/nacs<wbr>/efx<wbr>-1035<wbr>_commercial<wbr>_scoring<wbr>-contributors<wbr>.pdf](https://assets.equifax.com/assets/nacs/efx-1035_commercial_scoring-contributors.pdf)
33. Moody's Analytics, RiskCalc fact sheet. [www<wbr>.moodys<wbr>.com<wbr>/sites<wbr>/products<wbr>/ProductAttachments<wbr>/MA<wbr>_RiskCalc<wbr>_FactSheet<wbr>.pdf](https://www.moodys.com/sites/products/ProductAttachments/MA_RiskCalc_FactSheet.pdf)
34. Experian, "Experian launches Cashflow Attributes for commercial lenders," September 29, 2026. [www<wbr>.experianplc<wbr>.com<wbr>/newsroom<wbr>/press<wbr>-releases<wbr>/2026<wbr>/experian<wbr>-launches<wbr>-cashflow<wbr>-attributes<wbr>-for<wbr>-commercial<wbr>-lenders](https://www.experianplc.com/newsroom/press-releases/2026/experian-launches-cashflow-attributes-for-commercial-lenders)
35. Plaid, "Plaid LendScore," October 15, 2025. [plaid<wbr>.com<wbr>/blog<wbr>/plaid<wbr>-lendscore<wbr>-credit<wbr>-risk<wbr>-scoring<wbr>/](https://plaid.com/blog/plaid-lendscore-credit-risk-scoring/)
36. Ocrolus, "Introducing Encore," October 28, 2025. [www<wbr>.ocrolus<wbr>.com<wbr>/blog<wbr>/introducing<wbr>-encore<wbr>-trusted<wbr>-instant<wbr>-cash<wbr>-flow<wbr>-data<wbr>-for<wbr>-smb<wbr>-funding<wbr>/](https://www.ocrolus.com/blog/introducing-encore-trusted-instant-cash-flow-data-for-smb-funding/)
37. American Banker, "Square updates AI to expand and speed up merchant lending," March 27, 2026. [www<wbr>.americanbanker<wbr>.com<wbr>/payments<wbr>/news<wbr>/square<wbr>-updates<wbr>-ai<wbr>-to<wbr>-expand<wbr>-and<wbr>-speed<wbr>-up<wbr>-merchant<wbr>-lending](https://www.americanbanker.com/payments/news/square-updates-ai-to-expand-and-speed-up-merchant-lending)
38. Block, Inc., Q2 2026 shareholder letter. [s29<wbr>.q4cdn<wbr>.com<wbr>/628966176<wbr>/files<wbr>/doc<wbr>_financials<wbr>/2026<wbr>/q2<wbr>/Q2<wbr>-2026<wbr>-Shareholder<wbr>-Letter<wbr>.pdf](https://s29.q4cdn.com/628966176/files/doc_financials/2026/q2/Q2-2026-Shareholder-Letter.pdf)
39. Banking Dive (press release), "Unitus Community Credit Union accelerates community impact through JUDI.AI," February 19, 2026. [www<wbr>.bankingdive<wbr>.com<wbr>/press<wbr>-release<wbr>/20260219<wbr>-unitus<wbr>-community<wbr>-credit<wbr>-union<wbr>-accelerates<wbr>-community<wbr>-impact<wbr>-through<wbr>-judiai<wbr>-1<wbr>/](https://www.bankingdive.com/press-release/20260219-unitus-community-credit-union-accelerates-community-impact-through-judiai-1/)
40. FinRegLab and NYU Stern, "Sharpening the Focus," fact sheet, June 3, 2025. [finreglab<wbr>.org<wbr>/wp<wbr>-content<wbr>/uploads<wbr>/2025<wbr>/06<wbr>/FinRegLab<wbr>_2025<wbr>-06<wbr>-03<wbr>_Fact<wbr>-Sheet<wbr>_Sharpening<wbr>-the<wbr>-Focus<wbr>-1<wbr>.pdf](https://finreglab.org/wp-content/uploads/2025/06/FinRegLab_2025-06-03_Fact-Sheet_Sharpening-the-Focus-1.pdf)
41. T. Hair, S. Howell, M. Johnson and W. Matsumoto, NBER Working Paper 33367, January 2025, revised September 2025. [www<wbr>.nber<wbr>.org<wbr>/system<wbr>/files<wbr>/working<wbr>_papers<wbr>/w33367<wbr>/revisions<wbr>/w33367<wbr>.rev1<wbr>.pdf](https://www.nber.org/system/files/working_papers/w33367/revisions/w33367.rev1.pdf)
42. S. Howell, T. Kuchler, D. Snitkof, J. Stroebel and J. Wong, "Lender Automation and Racial Disparities in Credit Access," Journal of Finance 79(2), 2024 (NBER w29364). [nber<wbr>.org<wbr>/papers<wbr>/w29364](https://nber.org/papers/w29364)
43. G. Cornelli, J. Frost, L. Gambacorta and J. Jagtiani, Federal Reserve Bank of Philadelphia Working Paper 22-14, 2022. [fedinprint<wbr>.org<wbr>/item<wbr>/fedpwp<wbr>/94103<wbr>/original](https://fedinprint.org/item/fedpwp/94103/original)
44. Federal Reserve Banks, Small Business Credit Survey, 2025 Report on Employer Firms. [www<wbr>.fedsmallbusiness<wbr>.org<wbr>/survey<wbr>/2025<wbr>-report<wbr>-on<wbr>-employer<wbr>-firms](https://www.fedsmallbusiness.org/survey/2025-report-on-employer-firms)
45. Federal Reserve Banks, Small Business Credit Survey, 2026 Report on Employer Firms, March 3, 2026. [www<wbr>.fedsmallbusiness<wbr>.org<wbr>/2026<wbr>-report<wbr>-on<wbr>-employer<wbr>-firms](https://www.fedsmallbusiness.org/2026-report-on-employer-firms)
46. Consumer Financial Protection Bureau, withdrawn guidance (Circulars 2022-03 and 2023-03 withdrawn May 12, 2025). [www<wbr>.consumerfinance<wbr>.gov<wbr>/compliance<wbr>/guidance<wbr>/withdrawn<wbr>-guidance<wbr>/](https://www.consumerfinance.gov/compliance/guidance/withdrawn-guidance/)
47. Consumer Financial Protection Bureau, "Small Business Lending Under the Equal Credit Opportunity Act (Regulation B)," 91 FR 23530, May 1, 2026. [www<wbr>.federalregister<wbr>.gov<wbr>/documents<wbr>/2026<wbr>/05<wbr>/01<wbr>/2026<wbr>-08494<wbr>/small<wbr>-business<wbr>-lending<wbr>-under<wbr>-the<wbr>-equal<wbr>-credit<wbr>-opportunity<wbr>-act<wbr>-regulation<wbr>-b](https://www.federalregister.gov/documents/2026/05/01/2026-08494/small-business-lending-under-the-equal-credit-opportunity-act-regulation-b)
48. Board of Governors of the Federal Reserve System, SR 26-2, "Revised Guidance on Model Risk Management," April 17, 2026. [www<wbr>.federalreserve<wbr>.gov<wbr>/supervisionreg<wbr>/srletters<wbr>/sr2602<wbr>.htm](https://www.federalreserve.gov/supervisionreg/srletters/sr2602.htm)
49. Office of the Comptroller of the Currency, Bulletin 2026-13, April 17, 2026. [www<wbr>.occ<wbr>.gov<wbr>/news<wbr>-issuances<wbr>/bulletins<wbr>/2026<wbr>/bulletin<wbr>-2026<wbr>-13<wbr>.html](https://www.occ.gov/news-issuances/bulletins/2026/bulletin-2026-13.html)
50. Consumer Financial Protection Bureau, "Personal Financial Data Rights Reconsideration." [www<wbr>.consumerfinance<wbr>.gov<wbr>/rules<wbr>-policy<wbr>/rules<wbr>-under<wbr>-development<wbr>/personal<wbr>-financial<wbr>-data<wbr>-rights<wbr>-reconsideration<wbr>/](https://www.consumerfinance.gov/rules-policy/rules-under-development/personal-financial-data-rights-reconsideration/)
51. Cozen O'Connor, "Section 1033 compliance date: open banking rule enjoined and under reconsideration," April 9, 2026. [www<wbr>.cozen<wbr>.com<wbr>/news<wbr>-resources<wbr>/publications<wbr>/2026<wbr>/section<wbr>-1033<wbr>-compliance<wbr>-date<wbr>-open<wbr>-banking<wbr>-rule<wbr>-enjoined<wbr>-and<wbr>-under<wbr>-reconsideration](https://www.cozen.com/news-resources/publications/2026/section-1033-compliance-date-open-banking-rule-enjoined-and-under-reconsideration)
52. The Paypers, "Prism Data raises USD 20 mln Series A for cash flow underwriting," October 2026. [thepaypers<wbr>.com<wbr>/payments<wbr>/news<wbr>/prism<wbr>-data<wbr>-raises<wbr>-usd<wbr>-20m<wbr>-series<wbr>-a<wbr>-for<wbr>-cash<wbr>-flow<wbr>-underwriting](https://thepaypers.com/payments/news/prism-data-raises-usd-20m-series-a-for-cash-flow-underwriting)
53. FICO, "FICO partners with Plaid to launch next-generation cash-flow UltraFICO," November 20, 2025. [investors<wbr>.fico<wbr>.com<wbr>/news<wbr>-releases<wbr>/news<wbr>-release<wbr>-details<wbr>/fico<wbr>-partners<wbr>-plaid<wbr>-launch<wbr>-next<wbr>-generation<wbr>-cash<wbr>-flow<wbr>-ultraficor<wbr>/](https://investors.fico.com/news-releases/news-release-details/fico-partners-plaid-launch-next-generation-cash-flow-ultraficor/)
