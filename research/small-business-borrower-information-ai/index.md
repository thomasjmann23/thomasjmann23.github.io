## Executive summary

Small-business owners have long had a hard time finding out what a loan will cost before they apply. Federal Reserve research shows that cost information is often hidden in fine print, written in terms such as factor rates that are hard to compare, or released only after the owner has handed over contact details [2][3]. Generative AI changes the first step of that search. An owner can now ask a chatbot what a "normal" rate is, whether they are likely to qualify for an SBA loan, or how a merchant cash advance compares with a line of credit, and get a fluent answer in seconds. This paper looks at what these tools actually let borrowers learn about loan options, pricing and eligibility, who controls the answers, and the fair-lending and consumer-protection questions this raises. It separates what companies say about their own tools from what independent sources show.

Key findings:

- **The information gap is real and documented.** In the Fed's 2025 Small Business Credit Survey, 60% of employer firms that borrowed from online lenders said the cost was higher than they expected, against 37% at small banks and 32% at large banks. Only 35% of approved online-lender applicants were satisfied, against 64% to 76% at banks and credit unions [1]. Online lenders' share of applicants has risen from 17% in 2020 to 29% [1].
- **Owners are already asking AI, but the best usage figure comes from a lender's marketing survey.** The Fed survey found 46% of employer firms use AI, mostly for writing and marketing; it did not ask about finance [1]. The only source on AI use for finding financing is a 2026 survey of 409 owners by Clarify Capital, a business lender and broker: it reports that 86% used AI in their search and that 50% said an AI tool gave them wrong financing information [23]. These figures are self-reported by a party with a commercial interest and are not independently confirmed.
- **The most concrete borrower-facing product is a lender explaining its own loans.** In July 2026 Intuit made QuickBooks Capital loan data queryable from ChatGPT and Claude, so an owner can ask what similar businesses borrow and whether an APR is normal [26]. The benchmark is drawn from QuickBooks' own lending to "the top 10%" of businesses like the user's, so it is a lender describing its own book, not a market-wide comparison [26].
- **General chatbots answer loan questions with no lending-specific rule behind them.** Independent studies show they are often wrong on finance quizzes (68% average accuracy across ten models [22]) and give different advice when only the user's race or gender changes [20][21]. A separate study found GPT-4 Turbo, acting as an underwriter, approved Black applicants less often and quoted them higher rates; adding a one-line "use no bias" instruction closed the approval gap but only cut the rate gap by about 60% [18].
- **Fair-lending law reaches lenders' own chatbots more clearly than anyone else's.** Regulation B's discouragement rule now covers only oral or written statements, including visual images, that a creditor knows or should know would make a reasonable person expect worse treatment on a prohibited basis [10][11]. A lender's chatbot output is a written statement. A general-purpose chatbot that is not a creditor sits outside ECOA's direct reach.
- **Outside visibility into outcomes is shrinking.** The CFPB removed the disparate-impact "effects test" from Regulation B from July 21, 2026 [10][11], and its revised Section 1071 rule drops pricing and denial reasons from the small-business data that lenders will start collecting in 2028 [13]. Nobody outside a lender will be able to see whether borrowers guided by AI pay more.
- **Disclosure law is a state patchwork that mostly ignores AI.** California requires an APR whenever a provider quotes a price on offers of $500,000 or less [8]; Texas, Louisiana and Georgia require total-cost disclosures without an APR [6][7][9]. None of the laws reviewed here addresses what a third-party AI tool tells a borrower before any offer exists.

## Background

### What borrowers need to know, and when

A small-business owner shopping for credit needs answers to three questions in order: what kinds of financing exist for a business like theirs, whether they are likely to qualify, and what each option will cost in a form they can compare. In consumer lending, the Truth in Lending Act answers the third question with a standard APR. Business credit has no federal equivalent. As a 2025 Mayer Brown review put it, there has been no significant movement towards uniform federal disclosure rules for commercial financing [6].

The Federal Reserve has studied what this means in practice. Its 2019 report *Uncertain Terms*, by Barbara Lipman and Ann Marie Wiersch, reviewed the websites of online small-business lenders [2]. It found wide variation in how much cost information lenders showed up front. Term-loan lenders tended to show an annual rate, while others described costs in terms prospective borrowers may not know. Where ranges or averages appeared, they were mostly in footnotes, fine print or FAQs. Several sites asked owners for personal and business information before showing any terms, and their privacy policies allowed that information to be shared with third parties, which can lead to unwanted sales calls [2][3]. Earlier Fed focus groups had found owners struggled with product descriptions that were not standardised [3]. A trade-press account of the report notes that speed and the chance of being funded, not cost, drove owners' choice of online lender [4].

### The 2025 picture

The Fed's latest Small Business Credit Survey, published in March 2026 from 6,525 employer-firm responses collected in September to November 2025, shows that the problem has not gone away [1]:

- 38% of employer firms applied for a loan, line of credit or merchant cash advance in the prior year; 8% applied for a cash advance [1].
- 42% of applicants got all the financing they sought, 36% got some and 22% got none. Among those not fully approved, 46% cited lender requirements being too strict [1].
- 7% of firms that did not apply said they were discouraged, meaning they expected to be turned down [1].
- Online lenders' share of applicants has risen for five straight years, from 17% in 2020 to 29% in 2025. Online applicants chose lenders for speed and the chance of being funded; bank applicants cited existing relationships [1].
- At online lenders, 60% of borrowers said the cost was higher than they expected and only 35% of approved applicants were satisfied. High interest rates and unfavourable repayment terms were the most common complaints there [1].

![Bar charts of satisfaction by lender type and the share of borrowers whose cost was higher than expected, 2025 Fed Small Business Credit Survey](research/small-business-borrower-information-ai/fig1-sbcs.svg)

*Figure 1. Satisfaction and cost surprise by lender type. Source: Federal Reserve Banks, 2026 Report on Employer Firms (2025 Small Business Credit Survey) [1]. The survey is a weighted convenience sample, so differences are indicative rather than precise.*

The gap between expected and actual cost is the clearest measure of an information problem: borrowers signed up, then found they had misjudged the price. That is the problem AI tools now claim to address.

### How much AI small businesses already use

Three sources describe small businesses' AI use. They do not agree closely, because they ask different questions of different samples.

- The Fed survey found 46% of employer firms use AI, with about half of users still experimenting. The leading uses were writing and marketing (83% of users), personal productivity (61%) and planning and analysis (51%). Accuracy was the most-cited challenge, at 46% of users [1]. The survey did not ask about using AI to find or manage financing.
- A qualitative San Francisco Fed brief on the previous year's survey found nearly 40% of respondents using or planning to use AI, and lists accuracy concerns among the reasons owners opt out [25].
- The U.S. Chamber of Commerce's 2026 technology survey of 3,732 small businesses, fielded in July and August 2026, reports that 66% use some form of AI and 41% use a generative chatbot [24].

None of these is a measure of how many owners use AI to research credit. The only figure on that question comes from Clarify Capital, a business lender and broker, whose 2026 survey of 409 owners who had sought financing in the previous 12 to 18 months reports that 86% used AI somewhere in their search, 42% started with an AI tool, and ChatGPT (52%) and Google Gemini (33%) were the most used [23]. The same survey reports that half of AI users said a tool had given them incorrect financing information and that 28% took financing from a lender the AI recommended [23]. The sample is small, self-selected and run by a firm that sells loans on the same page, so these numbers show direction rather than scale.

## How AI changes what borrowers can learn

AI tools reach borrowers through five broad channels. They differ in who writes the answer, whether real pricing is shown, and which rules apply. Figure 2 summarises them.

![Matrix of five information channels for small-business loan shoppers, who controls each answer, whether pricing is shown, and which rule reaches it](research/small-business-borrower-information-ai/fig2-channels.svg)

*Figure 2. Information channels and the rules that reach them. Author's synthesis from the sources cited in this section [10][11][23][26][28][30][32].*

### 1. General chatbots and AI search

An owner who types "what rate should I expect on an SBA 7(a) loan?" into a general chatbot gets an answer assembled from whatever the model learned in training or retrieves from the web. Nothing about the answer is specific to the owner's file, and no creditor stands behind it.

The independent evidence on these answers is limited but consistent:

- **Accuracy is middling.** Hean, Saha and Saha tested ten models on 554 multiple-choice financial literacy questions. Average accuracy was 68%, ranging from 53% (Llama 3 8B) to 80% (Claude 3.5 Sonnet). On credit-card questions some models scored as low as 40% [22]. These are quiz questions, not personalised loan advice, so real-world accuracy on a borrower's specific situation is unknown.
- **Answers vary by who is asking.** Researchers at the University of Georgia and the University of Rome Tor Vergata gave seven free chatbots the same household finance scenarios, changing only race and gender. Recommended emergency savings ranged from $19,500 to $37,500 across platforms, and several chatbots gave different advice to women and to African American households than to white men [20][21]. The study did not cover credit, but it shows that demographic cues in a prompt can change financial guidance.
- **Owners report errors.** The Clarify Capital survey's finding that half of AI users received wrong financing information is the only figure on lending specifically, and it is self-reported [23].

Advertising adds a second question. OpenAI's ad policy for ChatGPT, updated on November 20, 2026, lists financial services as a restricted category. Approved US advertisers may run ads for personal loans, mortgages, credit cards and several other consumer products, but business or commercial lending is not on the list. Ads are excluded from conversations showing serious financial hardship, and lead-generation advertisers must disclose when they only refer users to others [32]. The policy governs ads next to answers; it does not say anything about how the model answers a lending question.

### 2. Marketplaces and brokers

Loan marketplaces were the main way owners compared options before chatbots, and they are adding AI. Their business model matters: they are generally paid by lenders, and the Fed's 2019 review found that collecting owner information before showing terms was common in this part of the market [2].

Recent announcements show where the AI sits:

- **Lendio and Grasshopper Bank.** A release carried by Finextra says Lendio's marketplace takes applications directly from owners and uses AI-powered financial spreading and debt-service-coverage calculations so that qualified applicants get instant, personalised SBA offers from Grasshopper [29]. No volumes or approval rates are given.
- **Lendio and BOND.AI.** In February 2026 Lendio partnered with BOND.AI, whose software scans a bank's transaction data for signs that a business customer needs capital so the bank can push an offer through Lendio [28]. Here the AI works for the bank, deciding which borrowers see an offer; the borrower does not query it.
- **Nav.** In January 2024 Nav launched "next best option," which uses application and lender decision data to explain why a business was declined and suggest products that may fit better [27]. Nav describes the service as model-based recommendations; it is not a chatbot, and its figures (over $110 million facilitated in 2023) are its own [27].

These tools can tell a borrower more, faster, about which products they might qualify for. They also choose which lenders the borrower sees, on terms the borrower usually cannot inspect.

### 3. Accounting-platform AI

Accounting software holds the data a lender wants: revenue, cash flow, invoices. Intuit's July 28, 2026 announcement is the clearest example of that data being turned into borrower-facing answers [26]. The QuickBooks connector for Claude and plugin for ChatGPT now include "peer loan benchmarking": an owner can ask what similar businesses borrow, at what rates, whether an APR is normal, and when their next payment is due. Intuit says this is the first time QuickBooks Capital data can be queried through an outside AI platform. Personalised offers and creditworthiness insight are listed as coming next. QuickBooks Capital's term loans and lines are issued by WebBank [26].

This is a real gain in information: a pricing benchmark drawn from actual loans is more useful than a chatbot's guess. Two limits apply. First, the benchmark comes from QuickBooks Capital's own lending, so it shows what one lender charges, not what the market charges. Second, Intuit describes the comparison group as the top 10% of QuickBooks businesses like the user's [26]. Intuit does not explain how that group is chosen. If it is the top tenth by financial strength, a typical owner would see better terms than they are likely to get. Intuit has not published any accuracy testing of the feature.

### 4. Lenders' own assistants

Banks have used chatbots for years. The CFPB's 2023 review found that all ten of the largest US commercial banks used them, that about 37% of the US population interacted with a bank chatbot in 2022, and that Bank of America's Erica had passed one billion interactions [17]. The CFPB warned that inaccurate answers, failure to recognise when a customer invokes legal rights, and privacy lapses could breach federal consumer financial law, and that institutions stay liable for what their chatbots say [17]. That review covered consumers; small-business assistants have since appeared. Outside the US, Starling Bank in the UK launched a free agentic assistant for all business customers in August 2026 that executes banking commands and flags invoice fraud; its announcement mentions no lending advice [37].

This research found no public launch by a US bank of a generative AI assistant that tells small-business prospects about loan eligibility or pricing. The pattern so far is AI behind the lender (spreading, offer targeting, document handling) rather than AI talking to the borrower about credit. That is consistent with the legal exposure discussed below.

### 5. Public tools

The SBA's Lender Match asks an owner to describe their needs in about five minutes and returns, two business days later, a list of participating lenders that have expressed interest; more than 800 lenders take part [30]. It is explicitly not an application and does not quote prices, and the SBA's page describes no AI in the matching [30]. On November 5, 2026 the SBA launched iCAP, a new origination platform that replaces E-Tran with real-time validation and embedded fraud and eligibility screening [31]. iCAP is a lender-side system; it does not give borrowers information directly. The SBA has not announced any borrower-facing AI tool.

### Comparison

| Channel | Example | What a borrower can learn | Pricing shown | Who answers | Independent evidence |
|---|---|---|---|---|---|
| General chatbot / AI search | ChatGPT, Gemini, Claude | Product types, general eligibility, rough rate ranges | Only what the model knows or retrieves | Model provider | Quiz accuracy ~68% [22]; advice varies by race and gender [20] |
| Marketplace with AI | Lendio (with Grasshopper) | Which lenders may offer; instant SBA offers for qualified applicants | After application data is collected | Marketplace and lenders | None found [29] |
| Bank-side targeting | BOND.AI with Lendio | Nothing directly; the bank decides who sees an offer | In the offer | Bank | None found [28] |
| Decline explanation | Nav "next best option" | Why declined; alternative products | Not stated | Nav | None; figures self-reported [27] |
| Accounting-platform AI | QuickBooks Capital in ChatGPT and Claude | What peers borrow and pay; whether an APR is normal | Benchmarks from its own loans | Platform that is also the lender | None; launched July 2026 [26] |
| Public matching | SBA Lender Match | Which lenders are interested | No | SBA, then lenders | Program description only [30] |

## Fair-lending questions

### Who is a creditor?

The Equal Credit Opportunity Act and Regulation B apply to business credit as well as consumer credit, with separate notice rules for business applicants, and their duties fall on creditors [15]. The three channels that involve a lender (its own assistant, a platform that lends, a marketplace acting for lenders) therefore sit inside Regulation B in some way. A general chatbot run by an AI company that neither lends nor refers is not obviously a creditor at all. The same answer about SBA eligibility could be regulated or unregulated depending on who runs the tool.

### Discouragement after the 2026 rule

Regulation B has long barred creditors from discouraging applicants or prospective applicants on a prohibited basis. That rule is the one most directly engaged by a chatbot that tells someone, before they apply, whether they are likely to qualify. The CFPB's final rule, published April 22, 2026 and effective July 21, 2026, narrowed it [10][11][12]:

- Discouragement now covers only oral or written statements, defined to include spoken or written words and visual images such as symbols, photos or video [10].
- General business conduct such as branch locations, advertising footprint and community events is excluded [10].
- A statement is discouraging only if the creditor knows or should know it would lead a reasonable person to believe they would be denied or get worse terms because of a prohibited basis. This replaces a test that looked at whether the statement would discourage [10][11].
- The commentary adds that Regulation B's protections generally apply to people who have requested or received credit [10].

For AI, the narrowing cuts both ways. Text a lender's chatbot generates is plainly a written statement, so a lender cannot argue that chatbot output is mere conduct. But the new knowledge standard asks what the creditor knew or should have known. A lender that tests its assistant for answers that vary by protected characteristics will find it easier to show it did not know of a problem than one that never tested; equally, once testing reveals a pattern, the lender knows. The UGA and Lehigh studies show such patterns are plausible [18][20]. Whether a creditor "should know" what its model says in conversations it never reviewed is a question no regulator or court has yet answered.

### Disparate impact is out of Regulation B

The same rule removed the "effects test" from Regulation B. The CFPB's position is that ECOA does not reach facially neutral practices unless a neutral factor is used as a proxy with intent to advantage or disadvantage a protected group [10][11]. Disparate treatment, including intentional proxy use, still applies, and law firms advise lenders to keep their fair-lending monitoring and model governance in place [11].

For borrower-facing AI, the practical effect is that an assistant which, without anyone intending it, steers some groups towards costlier products is less likely to draw federal ECOA enforcement than before. It is not clear that the change binds courts, other federal agencies or state regulators, and this research did not confirm whether the rule has been challenged since it took effect.

### Adverse action and explanations

Regulation B requires creditors to tell business applicants what action they took. For businesses with gross revenues of $1 million or less, the creditor must give the reasons or tell the applicant how to request them; larger businesses can ask for reasons in writing [15]. Reasons must be specific. The CFPB's 2022 and 2023 circulars on applying that duty to complex models were withdrawn in May 2025 [16], but the underlying regulation is unchanged.

An AI tool that tells a prospect "you probably won't qualify" before any application is not an adverse action under this rule, because no application has been made. That is the gap: the most influential answer in the borrower's journey, the one that decides whether they apply at all, carries no duty to explain. Nav's decline-explanation product sits after an actual decision [27]; pre-application chatbots do not.

### Steering and conflicts of interest

Three of the five channels are run by parties paid when a borrower takes a particular product: marketplaces paid by lenders, accounting platforms that lend, and lenders' own assistants. That is not new; brokers and lead generators have always had this conflict. What is new is the format. A ranked list of offers invites comparison. A conversational answer that recommends one option reads as advice. The Clarify survey's claim that 28% of AI users took financing from a lender the AI recommended [23], if it holds up, would mean the recommendation itself is the product.

The FTC has used its general power against unfair and deceptive practices on small-business financing. In *FTC v. RCG Advances*, filed in 2020, it alleged that a merchant cash advance provider misrepresented terms, took unauthorised withdrawals and threatened owners; the case produced industry bans, more than $2.7 million returned to businesses and a $20.3 million judgment against one individual in February 2024 [33][34]. Nothing in that case involved AI, but it shows that deception about small-business financing terms is actionable regardless of the channel.

### What the evidence on model bias does and does not show

The strongest evidence that language models can carry bias into credit outcomes is an audit study by Bowen, Price, Stein and Yang [18][19]. They took 1,000 real 2022 mortgage applications, created 6,000 variants changing only race and credit score, and asked several models to approve or deny and to set a rate. With GPT-4 Turbo, Black applicants were 8.5 percentage points less likely to be approved and were quoted rates about 35 basis points higher than otherwise identical white applicants. Put another way, a Black applicant needed a credit score about 120 points higher to get the same approval rate [18]. Adding "use no bias" to the prompt eliminated the approval gap on average and cut the rate gap to about 14 basis points [18].

![Bar charts of approval and interest rate gaps for Black versus white applicants in simulated GPT-4 Turbo underwriting, at baseline and with a debiasing prompt](research/small-business-borrower-information-ai/fig4-bias.svg)

*Figure 3. Racial gaps in simulated LLM underwriting. Source: Bowen, Price, Stein and Yang, working paper, July 2024 version [18]; Lehigh University summary [19]. Mortgage files, not small-business loans.*

Three cautions apply. The study is about mortgages, not business loans. It tests models acting as underwriters, not answering a borrower's question. And it used 2024 model versions that have since been replaced. What it does show is that a model asked to reason about creditworthiness can pick up race from the file and act on it, and that a cheap fix helps but does not fully work. Combined with the UGA finding that chatbot advice shifts with race and gender cues [20], it is enough to make bias testing of any borrower-facing assistant a basic control rather than a nice-to-have.

The evidence also points the other way. Howell and co-authors found that in the Paycheck Protection Program, lenders that automated their processes showed smaller racial disparities in lending to Black-owned businesses than lenders that relied more on manual review [35]. Automation that removes human discretion can widen access. Neither study measures AI that talks to small-business borrowers.

## Disclosure law: a patchwork built for offers, not conversations

States have filled part of the federal gap with commercial financing disclosure laws. Venable counted ten states with some disclosure requirement as of March 2026: California, Connecticut, Florida, Georgia, Kansas, Missouri, New York, Texas, Utah and Virginia [5]. Manatt separately reports a Louisiana law effective August 1, 2025, which Venable's list does not include [7]. The laws differ on the point that matters most for comparison: whether an APR is required.

| State | Law | Effective | Scope reported | APR required? |
|---|---|---|---|---|
| California | Commercial financing law, amended by SB 362 | SB 362 from January 1, 2026 | Offers of $500,000 or less; banks exempt | Yes. APR must accompany any stated charge, pricing metric or amount once an offer is made; misleading "rate" or "interest" labels barred [8] |
| Texas | HB 700 | Disclosures from September 1, 2025; registration by December 31, 2026 | Sales-based financing under $1 million; banks and affiliates exempt | No. Total cost and finance charge [6][5] |
| Louisiana | Revenue-based financing disclosure law | August 1, 2025 | Revenue-based financing | No. Total dollar cost [7] |
| Georgia | Commercial financing disclosure law | January 2024 | $500,000 or less; small-volume providers exempt | No [9] |
| Connecticut | Sales-based financing law | Expected July 1, 2024 (pending when reported) | $250,000 or less | No [9] |

These laws are triggered by a specific offer. They govern what a provider must tell a recipient once terms exist. They say nothing about what an AI tool, the provider's or anyone else's, tells an owner before an offer is made, which is exactly where chatbots now sit. California's SB 362 is the closest fit: if a provider's assistant states a charge or pricing metric after an offer has been extended, the APR must come with it, and calling a factor rate or a non-annual charge "interest" is barred where it could mislead [8]. That gives California borrowers some protection against an assistant that quotes a factor rate as if it were an interest rate. Elsewhere, an assistant could describe a cash advance's cost in whatever terms it chose.

![Timeline of commercial financing disclosure laws, fair-lending rules, research and borrower-facing AI tools from 2018 to 2028](research/small-business-borrower-information-ai/fig3-timeline.svg)

*Figure 4. Rules, research and tools, 2018 to 2028. Sources: [2][5][6][8][9][10][13][17][18][20][26][27][28][31].*

## Data: we will not be able to measure the outcome

The obvious way to test whether AI helps or hurts small-business borrowers would be to compare the price and approval outcomes of different groups over time. The data that would allow that is being cut back.

The CFPB's revised Section 1071 rule, published May 1, 2026, raises the coverage threshold from 100 to 1,000 small-business loans a year, lowers the small-business definition from $5 million to $1 million in revenue, excludes merchant cash advances, and removes pricing, denial reasons, application method and application recipient from the data lenders must collect [13][14]. Collection starts January 1, 2028, and how the data will be published is left to a later rulemaking [13].

Two of the removed fields bear directly on this paper. Without pricing, nobody outside a lender can see whether borrowers who reached a lender through an AI tool paid more. Without application method, nobody can separate applications that came through a chatbot, a marketplace or a branch. Merchant cash advances, the product where the Fed found the most cost confusion and where several state laws focus, are excluded entirely [1][13].

## Implications for lenders and credit teams

The following points are the author's analysis, drawn from the evidence above. They are general, not legal advice.

1. **Treat a borrower-facing assistant as a source of written statements.** Under the 2026 Regulation B text, what a lender's chatbot says about eligibility or pricing is a statement by the creditor [10]. Review it the way marketing copy and scripts are reviewed, and keep logs of what it said.
2. **Test for demographic variation before launch and on a schedule.** Run paired prompts that differ only in names, locations or other cues that correlate with protected characteristics, as the UGA and Lehigh researchers did [18][20]. Once testing reveals a pattern, the lender knows about it, which matters under the new knowledge standard [10].
3. **Answer pricing questions in APR as well as the product's native metric.** California already requires it once an offer exists [8]; doing it everywhere makes products comparable and removes the main source of the cost surprise the Fed measured [1].
4. **Do not let an assistant pre-decline.** A chatbot that tells a prospect they will not qualify can end the application before Regulation B's adverse action duties begin [15]. Route eligibility questions to an application or a human, or state clearly that the answer is not a decision.
5. **Disclose the commercial relationship.** If an assistant recommends a product the operator earns from, say so in the answer. OpenAI's ad policy already requires lead-generation advertisers to disclose referral-only status [32]; the same standard is reasonable for any conversational recommendation.
6. **Keep the controls that SR 26-2 no longer requires.** The 2026 interagency model risk guidance places generative AI outside its scope [36]. That removes a supervisory expectation, not the risk. Third-party risk management, fair-lending monitoring and accuracy testing still apply to an assistant built on a vendor's model.
7. **Collect the data the 1071 rule will not.** Lenders that want to know whether AI-sourced applicants fare differently should record the channel and the price themselves, because the public dataset will not [13].

For credit analysts in particular, AI-informed borrowers will increasingly arrive with expectations set by a chatbot. An owner who has been told an APR is "normal" by a peer benchmark [26], or that they qualify for SBA by a general model, may have a different view of the deal than the file supports. Credit teams should expect to explain more, not less.

## Open questions and limitations

- **Usage data is thin.** The only figure on how many owners use AI to find financing comes from a lender-run survey of 409 people [23]. The Fed's survey asks about AI use but not about finance [1]. A neutral measure of how often owners consult AI before borrowing, and what they ask, does not exist in public.
- **No independent test of borrower-facing lending answers.** The accuracy and bias studies cited here cover finance quizzes, household advice and simulated mortgage underwriting [18][20][22]. This research found no independent study of what chatbots tell small-business owners about loan eligibility or pricing.
- **Self-reported product claims.** Intuit's, Lendio's, Grasshopper's and Nav's descriptions of their tools are their own [26][27][28][29]. None has published accuracy, conversion or outcome data for borrower-facing AI. Intuit's "top 10%" peer group is not defined [26].
- **Rule status after effective dates.** The Regulation B and Section 1071 summaries rely on law-firm analyses published in April and May 2026 [10][11][13]. This research did not confirm whether either rule has been stayed or changed by litigation since then.
- **State law detail.** The state table is built from law-firm summaries [5][6][7][8][9]. Details for New York, Utah, Virginia, Florida, Kansas and Missouri were not available in the sources reviewed, and the Connecticut entry comes from a 2023 article written before enactment was confirmed [9]. Venable's list of ten states and Manatt's report of a Louisiana law do not match [5][7].
- **Fed survey precision.** The Small Business Credit Survey is a convenience sample weighted to the population; its confidence intervals are not sampling margins of error [1]. Some per-lender figures in the report could not be read reliably and are not used here.
- **Fed 2019 method.** The full *Uncertain Terms* report was not available to this research; its findings are taken from the Fed's and Cleveland Fed's summaries [2][3], and the decision-driver finding from a trade-press account [4].
- **Bank assistants.** This research found no US bank publicly offering a generative assistant that discusses small-business loan eligibility with prospects. One may exist without a public announcement.

## Sources

1. Federal Reserve Banks, "2026 Report on Employer Firms: Findings from the 2025 Small Business Credit Survey," March 3, 2026. [www<wbr>.fedsmallbusiness<wbr>.org<wbr>/<wbr>-<wbr>/media<wbr>/project<wbr>/clevelandfedtenant<wbr>/fsbsite<wbr>/reports<wbr>/2026<wbr>/2026<wbr>-report<wbr>-on<wbr>-employer<wbr>-firms<wbr>/2026<wbr>-report<wbr>-on<wbr>-employer<wbr>-firms<wbr>.pdf](https://www.fedsmallbusiness.org/-/media/project/clevelandfedtenant/fsbsite/reports/2026/2026-report-on-employer-firms/2026-report-on-employer-firms.pdf)
2. Barbara J. Lipman and Ann Marie Wiersch, "Uncertain Terms: What Small Business Borrowers Find When Browsing Online Lender Websites," Federal Reserve Board and Federal Reserve Bank of Cleveland, December 19, 2019. [www<wbr>.clevelandfed<wbr>.org<wbr>/publications<wbr>/cd<wbr>-reports<wbr>/2019<wbr>/sr<wbr>-20191219<wbr>-uncertain<wbr>-terms](https://www.clevelandfed.org/publications/cd-reports/2019/sr-20191219-uncertain-terms)
3. Board of Governors of the Federal Reserve System, press release on "Uncertain Terms," December 19, 2019. [www<wbr>.federalreserve<wbr>.gov<wbr>/newsevents<wbr>/pressreleases<wbr>/other20191219b<wbr>.htm](https://www.federalreserve.gov/newsevents/pressreleases/other20191219b.htm)
4. deBanked, "Online Small Business Borrowing Decisions Not Driven By Costs or Disclosures, Fed Study Finds," December 23, 2019. [debanked<wbr>.com<wbr>/2019<wbr>/12<wbr>/online<wbr>-small<wbr>-business<wbr>-borrowing<wbr>-decisions<wbr>-not<wbr>-driven<wbr>-by<wbr>-costs<wbr>-or<wbr>-disclosures<wbr>-fed<wbr>-study<wbr>-finds](https://debanked.com/2019/12/online-small-business-borrowing-decisions-not-driven-by-costs-or-disclosures-fed-study-finds)
5. Michael M. Aphibal and Andrew E. Bigart, Venable LLP, "State Commercial Financing Disclosure Laws: Recent Developments and Compliance Considerations," March 2, 2026. [www<wbr>.venable<wbr>.com<wbr>/insights<wbr>/publications<wbr>/2026<wbr>/03<wbr>/state<wbr>-commercial<wbr>-financing<wbr>-disclosure<wbr>-laws](https://www.venable.com/insights/publications/2026/03/state-commercial-financing-disclosure-laws)
6. Daniel B. Pearson and Eric T. Mitzenmacher, Mayer Brown, "Texas Commercial Financing Disclosure and Registration Law Threatens Sales-Based Financing Industry," June 30, 2025. [www<wbr>.mayerbrown<wbr>.com<wbr>/en<wbr>/insights<wbr>/publications<wbr>/2025<wbr>/06<wbr>/texas<wbr>-commercial<wbr>-financing<wbr>-disclosure<wbr>-and<wbr>-registration<wbr>-law<wbr>-threatens<wbr>-sales<wbr>-based<wbr>-financing<wbr>-industry](https://www.mayerbrown.com/en/insights/publications/2025/06/texas-commercial-financing-disclosure-and-registration-law-threatens-sales-based-financing-industry)
7. Manatt, Phelps & Phillips, "Texas and Louisiana Pass Revenue-Based Financing Disclosure Laws," July 1, 2025. [www<wbr>.manatt<wbr>.com<wbr>/insights<wbr>/newsletters<wbr>/client<wbr>-alert<wbr>/texas<wbr>-and<wbr>-louisiana<wbr>-pass<wbr>-revenue<wbr>-based<wbr>-financing<wbr>-disclosure<wbr>-laws](https://www.manatt.com/insights/newsletters/client-alert/texas-and-louisiana-pass-revenue-based-financing-disclosure-laws)
8. Buchalter, "Starting January 1, 2026, for Commercial Financing Offers of $500,000 or Less, New California Senate Bill 362 Places Limitations on the Use of 'Rate' and 'Interest'," December 29, 2025. [www<wbr>.buchalter<wbr>.com<wbr>/insights<wbr>/starting<wbr>-january<wbr>-1<wbr>-2026<wbr>-for<wbr>-commercial<wbr>-financing<wbr>-offers<wbr>-of<wbr>-500000<wbr>-or<wbr>-less<wbr>-new<wbr>-california<wbr>-senate<wbr>-bill<wbr>-362<wbr>-places<wbr>-limitations<wbr>-on<wbr>-the<wbr>-use<wbr>-of<wbr>-rate<wbr>-and<wbr>-interest<wbr>-by<wbr>/](https://www.buchalter.com/insights/starting-january-1-2026-for-commercial-financing-offers-of-500000-or-less-new-california-senate-bill-362-places-limitations-on-the-use-of-rate-and-interest-by/)
9. DLA Piper, "More states set to require commercial financing disclosures," June 21, 2023. [www<wbr>.dlapiper<wbr>.com<wbr>/en<wbr>/insights<wbr>/publications<wbr>/2023<wbr>/06<wbr>/more<wbr>-states<wbr>-set<wbr>-to<wbr>-require<wbr>-commercial<wbr>-financing<wbr>-disclosures](https://www.dlapiper.com/en/insights/publications/2023/06/more-states-set-to-require-commercial-financing-disclosures)
10. Greenberg Traurig, "CFPB Final Rule Revises ECOA Framework, Narrows Disparate Impact and Discouragement Standards," May 19, 2026. [www<wbr>.gtlaw<wbr>.com<wbr>/en<wbr>/insights<wbr>/2026<wbr>/5<wbr>/cfpb<wbr>-final<wbr>-rule<wbr>-revises<wbr>-ecoa<wbr>-framework<wbr>-narrows<wbr>-disparate<wbr>-impact<wbr>-and<wbr>-discouragement<wbr>-standards](https://www.gtlaw.com/en/insights/2026/5/cfpb-final-rule-revises-ecoa-framework-narrows-disparate-impact-and-discouragement-standards)
11. Husch Blackwell, "CFPB Finalizes Major Regulation B Overhaul: Disparate Impact Out, Discouragement Narrowed, and SPCPs Restricted," April 24, 2026. [www<wbr>.huschblackwell<wbr>.com<wbr>/newsandinsights<wbr>/cfpb<wbr>-finalizes<wbr>-major<wbr>-regulation<wbr>-b<wbr>-overhaul<wbr>-disparate<wbr>-impact<wbr>-out<wbr>-discouragement<wbr>-narrowed<wbr>-and<wbr>-spcps<wbr>-restricted](https://www.huschblackwell.com/newsandinsights/cfpb-finalizes-major-regulation-b-overhaul-disparate-impact-out-discouragement-narrowed-and-spcps-restricted)
12. Consumer Financial Protection Bureau, final rule amending Regulation B (disparate impact, discouragement, special purpose credit programs), Federal Register document 2026-07804, April 22, 2026. [www<wbr>.govinfo<wbr>.gov<wbr>/content<wbr>/pkg<wbr>/FR<wbr>-2026<wbr>-04<wbr>-22<wbr>/pdf<wbr>/2026<wbr>-07804<wbr>.pdf](https://www.govinfo.gov/content/pkg/FR-2026-04-22/pdf/2026-07804.pdf)
13. Husch Blackwell, "CFPB Finalizes Revised Section 1071 Rule: A Narrower Framework With a 2028 Compliance Date," May 1, 2026. [www<wbr>.huschblackwell<wbr>.com<wbr>/newsandinsights<wbr>/cfpb<wbr>-finalizes<wbr>-revised<wbr>-section<wbr>-1071<wbr>-rule<wbr>-a<wbr>-narrower<wbr>-framework<wbr>-with<wbr>-a<wbr>-2028<wbr>-compliance<wbr>-date](https://www.huschblackwell.com/newsandinsights/cfpb-finalizes-revised-section-1071-rule-a-narrower-framework-with-a-2028-compliance-date)
14. Consumer Financial Protection Bureau, Small Business Lending Rule (Section 1071). [www<wbr>.consumerfinance<wbr>.gov<wbr>/1071<wbr>-rule<wbr>/](https://www.consumerfinance.gov/1071-rule/)
15. Consumer Financial Protection Bureau, Regulation B, 12 CFR 1002.9 (Notifications) and Official Interpretations. [www<wbr>.consumerfinance<wbr>.gov<wbr>/rules<wbr>-policy<wbr>/regulations<wbr>/1002<wbr>/9](https://www.consumerfinance.gov/rules-policy/regulations/1002/9)
16. Morgan Lewis, "CFPB Guidance Tracker: Rescinded and Remaining." [www<wbr>.morganlewis<wbr>.com<wbr>/de<wbr>/topics<wbr>/cfpb<wbr>-guidance<wbr>-tracker<wbr>-rescinded<wbr>-and<wbr>-remaining](https://www.morganlewis.com/de/topics/cfpb-guidance-tracker-rescinded-and-remaining)
17. Consumer Financial Protection Bureau, "Chatbots in consumer finance," issue spotlight, June 2023. [files<wbr>.consumerfinance<wbr>.gov<wbr>/f<wbr>/documents<wbr>/cfpb<wbr>_chatbot<wbr>-issue<wbr>-spotlight<wbr>_2023<wbr>-06<wbr>.pdf](https://files.consumerfinance.gov/f/documents/cfpb_chatbot-issue-spotlight_2023-06.pdf)
18. Donald E. Bowen III, S. McKay Price, Luke C.D. Stein and Ke Yang, "Measuring and Mitigating Racial Bias in Large Language Model Mortgage Underwriting," working paper, version of July 24, 2024. [acfr<wbr>.aut<wbr>.ac<wbr>.nz<wbr>/<wbr>_<wbr>_data<wbr>/assets<wbr>/pdf<wbr>_file<wbr>/0004<wbr>/924826<wbr>/bowen<wbr>-price<wbr>-stein<wbr>-yang<wbr>-biasllmmortgage<wbr>.pdf](https://acfr.aut.ac.nz/__data/assets/pdf_file/0004/924826/bowen-price-stein-yang-biasllmmortgage.pdf)
19. Lehigh University News, "AI exhibits racial bias in mortgage underwriting decisions," August 20, 2024. [news<wbr>.lehigh<wbr>.edu<wbr>/ai<wbr>-exhibits<wbr>-racial<wbr>-bias<wbr>-in<wbr>-mortgage<wbr>-underwriting<wbr>-decisions](https://news.lehigh.edu/ai-exhibits-racial-bias-in-mortgage-underwriting-decisions)
20. UGA Today, "Should a chatbot manage your bank account? Probably not," July 8, 2026 (on Chatterjee, Cude and Nicolini, Journal of Financial Planning, June 2026). [news<wbr>.uga<wbr>.edu<wbr>/should<wbr>-a<wbr>-chatbot<wbr>-manage<wbr>-your<wbr>-bank<wbr>-account<wbr>/](https://news.uga.edu/should-a-chatbot-manage-your-bank-account/)
21. Quartz, "AI chatbots give inconsistent and biased financial advice, study finds," July 7, 2026. [qz<wbr>.com<wbr>/ai<wbr>-financial<wbr>-advice<wbr>-inconsistent<wbr>-bias<wbr>-study<wbr>-070726](https://qz.com/ai-financial-advice-inconsistent-bias-study-070726)
22. Oudom Hean, Utsha Saha and Binita Saha, "Can AI Help with Your Personal Finances?," Applied Economics, 2025 (arXiv 2412.19784v4). [arxiv<wbr>.org<wbr>/html<wbr>/2412<wbr>.19784v4](https://arxiv.org/html/2412.19784v4)
23. Clarify Capital, "86% of Small Business Owners Are Using AI to Find Financing in 2026 [Survey]," 2026. [clarifycapital<wbr>.com<wbr>/ai<wbr>-lending<wbr>-journey<wbr>-report](https://clarifycapital.com/ai-lending-journey-report)
24. U.S. Chamber of Commerce Technology Engagement Center and Teneo, "Empowering Small Business: The Impact of Technology on U.S. Small Business," 2026. [www<wbr>.uschamber<wbr>.com<wbr>/assets<wbr>/documents<wbr>/Empowering<wbr>-Small<wbr>-Business<wbr>-The<wbr>-Impact<wbr>-of<wbr>-Technology<wbr>-on<wbr>-U<wbr>.S<wbr>.<wbr>-Small<wbr>-Business<wbr>-Small<wbr>-Business<wbr>-Report<wbr>-2026<wbr>.pdf](https://www.uschamber.com/assets/documents/Empowering-Small-Business-The-Impact-of-Technology-on-U.S.-Small-Business-Small-Business-Report-2026.pdf)
25. Federal Reserve Bank of San Francisco, "AI Adoption Among Small Businesses: Qualitative Insights from the Small Business Credit Survey," Community Development Research Brief 2026-01, July 15, 2026. [www<wbr>.frbsf<wbr>.org<wbr>/research<wbr>-and<wbr>-insights<wbr>/publications<wbr>/community<wbr>-development<wbr>-research<wbr>-briefs<wbr>/2026<wbr>/07<wbr>/ai<wbr>-adoption<wbr>-in<wbr>-small<wbr>-businesses<wbr>-2024<wbr>-sbcs<wbr>/](https://www.frbsf.org/research-and-insights/publications/community-development-research-briefs/2026/07/ai-adoption-in-small-businesses-2024-sbcs/)
26. Intuit, "QuickBooks Expands Connector in Claude and Plugin in ChatGPT with New Sales Invoicing, Payroll, and Lending Features," July 28, 2026. [www<wbr>.intuit<wbr>.com<wbr>/blog<wbr>/news<wbr>-social<wbr>/quickbooks<wbr>-expands<wbr>-into<wbr>-claude<wbr>-and<wbr>-chatgpt<wbr>-with<wbr>-new<wbr>-sales<wbr>-invoicing<wbr>-payroll<wbr>-and<wbr>-lending<wbr>-features<wbr>/](https://www.intuit.com/blog/news-social/quickbooks-expands-into-claude-and-chatgpt-with-new-sales-invoicing-payroll-and-lending-features/)
27. Nav, "Nav introduces 'next best option' to help SMBs that are declined for funding," January 17, 2024. [www<wbr>.nav<wbr>.com<wbr>/newsroom<wbr>/nav<wbr>-introduces<wbr>-next<wbr>-best<wbr>-option<wbr>-to<wbr>-help<wbr>-smbs<wbr>-that<wbr>-are<wbr>-declined<wbr>-for<wbr>-funding](https://www.nav.com/newsroom/nav-introduces-next-best-option-to-help-smbs-that-are-declined-for-funding)
28. Lendio, "Lendio and BOND.AI Partner to Help Banks Retain and Grow Small Business Lending Through Data-Driven Intelligence," February 11, 2026. [www<wbr>.lendio<wbr>.com<wbr>/newsroom<wbr>/press<wbr>-releases<wbr>/lendio<wbr>-and<wbr>-bond<wbr>-ai<wbr>-partner<wbr>-to<wbr>-help<wbr>-banks<wbr>-retain<wbr>-and<wbr>-grow<wbr>-small<wbr>-business<wbr>-lending<wbr>-through<wbr>-data<wbr>-driven<wbr>-intelligence](https://www.lendio.com/newsroom/press-releases/lendio-and-bond-ai-partner-to-help-banks-retain-and-grow-small-business-lending-through-data-driven-intelligence)
29. Finextra (contributed press release), "Grasshopper Bank taps Lendio for AI-driven SBA lending," undated (describes an April 2025 launch). [www<wbr>.finextra<wbr>.com<wbr>/pressarticle<wbr>/106373<wbr>/grasshopper<wbr>-bank<wbr>-taps<wbr>-lendio<wbr>-for<wbr>-ai<wbr>-driven<wbr>-sba<wbr>-lending](https://www.finextra.com/pressarticle/106373/grasshopper-bank-taps-lendio-for-ai-driven-sba-lending)
30. U.S. Small Business Administration, "Lender Match." [www<wbr>.sba<wbr>.gov<wbr>/loans<wbr>/lender<wbr>-match<wbr>/](https://www.sba.gov/loans/lender-match/)
31. U.S. Small Business Administration, News Release 26-114, "SBA Launches iCAP to Modernize 7(a) Loan Origination," November 5, 2026. [www<wbr>.sba<wbr>.gov<wbr>/sba<wbr>-newsroom<wbr>/2026<wbr>/11<wbr>/05<wbr>/sba<wbr>-launches<wbr>-icap<wbr>-modernize<wbr>-7a<wbr>-loan<wbr>-origination<wbr>-streamline<wbr>-workflows<wbr>-accelerate<wbr>-small<wbr>-business<wbr>/](https://www.sba.gov/sba-newsroom/2026/11/05/sba-launches-icap-modernize-7a-loan-origination-streamline-workflows-accelerate-small-business/)
32. OpenAI, "Ad policies," updated November 20, 2026. [openai<wbr>.com<wbr>/policies<wbr>/ad<wbr>-policies<wbr>/](https://openai.com/policies/ad-policies/)
33. Federal Trade Commission, "New York-Based Finance Companies Deceived Small Businesses," press release, June 10, 2020. [www<wbr>.ftc<wbr>.gov<wbr>/news<wbr>-events<wbr>/press<wbr>-releases<wbr>/2020<wbr>/06<wbr>/new<wbr>-york<wbr>-based<wbr>-finance<wbr>-companies<wbr>-deceived<wbr>-small<wbr>-businesses](https://www.ftc.gov/news-events/press-releases/2020/06/new-york-based-finance-companies-deceived-small-businesses)
34. Federal Trade Commission, case page, "RCG Advances, LLC" (FTC Matter 192-3252). [search<wbr>.ftc<wbr>.gov<wbr>/legal<wbr>-library<wbr>/browse<wbr>/cases<wbr>-proceedings<wbr>/192<wbr>-3252<wbr>-rcg<wbr>-advances<wbr>-llc](https://search.ftc.gov/legal-library/browse/cases-proceedings/192-3252-rcg-advances-llc)
35. Sabrina T. Howell, Theresa Kuchler, David Snitkof, Johannes Stroebel and Jun Wong, "Lender Automation and Racial Disparities in Credit Access," Journal of Finance 79(2), 2024; NBER Working Paper 29364. [www<wbr>.nber<wbr>.org<wbr>/papers<wbr>/w29364](https://www.nber.org/papers/w29364)
36. Board of Governors of the Federal Reserve System, SR 26-2, "Revised Guidance on Model Risk Management," April 17, 2026. [www<wbr>.federalreserve<wbr>.gov<wbr>/supervisionreg<wbr>/srletters<wbr>/SR2602<wbr>.htm](https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm)
37. Starling Bank, "Starling launches agentic AI assistant for business," August 24, 2026. [www<wbr>.starlingbank<wbr>.com<wbr>/news<wbr>/starling<wbr>-launches<wbr>-agentic<wbr>-ai<wbr>-assistant<wbr>-for<wbr>-business<wbr>/](https://www.starlingbank.com/news/starling-launches-agentic-ai-assistant-for-business/)
