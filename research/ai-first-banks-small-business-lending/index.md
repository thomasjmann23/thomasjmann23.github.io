## Executive summary

"AI-first bank" is a phrase banks now use about themselves. In small-business lending it has a narrower and more testable meaning: has the bank put AI into the path a loan takes from application to funding, and has anything measurably changed? This paper looks at what US banks have publicly launched in that path through mid-November 2026, starting with the two named in the brief, Live Oak Bank and Huntington, and the vendor they share, Casca. It then covers the other banks with documented launches, the regulatory frame those launches sit in, and what credit teams should take from the evidence so far.

Key findings:

- **The Huntington and Casca link is real, but thin in public.** Huntington National Bank invested in Casca's $29 million Series A in August 2025 and was named as a customer preparing to roll out its software [2][3]. Casca later described Huntington as a client [6][8]. Huntington itself has not discussed Casca in any press release or earnings call found for this paper, and no deployment date, scope or result has been published.
- **Live Oak is the most documented case, and it is still a pilot.** Live Oak is Casca's design partner and an investor through Live Oak Ventures [1]. It has used Casca in a pilot on Live Oak Express, its small-dollar SBA 7(a) program, with some loans closed by July 2026 and a full Express rollout targeted for year-end 2026 [10][11][13]. No completed rollout had been announced by the date of this paper.
- **No bank has published a measured result from AI in small-business underwriting.** Live Oak's reported numbers are targets (closing in about two weeks instead of more than 100 days; at least $750 million a year of Express loans) and program volumes [11][14]. Its CFO said in July 2026 that the bank's efficiency gains so far owe nothing to AI [11]. Every outcome number in this paper about AI tools comes from a bank or vendor and has not been independently checked.
- **AI is going into the paperwork, not the credit decision.** Across Casca, Lama AI and nCino deployments, the publicly described functions are borrower intake, guided SBA forms, document collection and verification, financial spreading, compliance preparation and internal search [5][6][24][26]. Live Oak says a human underwriter still makes the credit decision [14]. Grasshopper Bank's use of AI decisioning for instant SBA loan offers through Lendio is the closest public example of automated credit decisioning [27].
- **Huntington's customer-facing AI is a separate product.** The 1866 Studio, launched in October 2026 with Google Cloud, is an agent-based toolkit for small-business owners. Its lending features help owners prepare for a loan and find funding; they do not underwrite [19][20].
- **The buyers are SBA specialists and community banks, not the largest banks.** Documented launches are at Live Oak, Huntington, Celtic Bank, Colony Bank, ConnectOne and Grasshopper, plus banks named by Lama AI [6][24][25][26][27]. The largest US banks describe AI at the enterprise level and have not published a small-business underwriting launch [28][45].
- **Policy is pulling in two directions.** SBA's removal of the FICO SBSS score for 7(a) Small Loans in March 2026 and the documentation burden of its revised rules increase the value of automation [40][41][24]. Federal fair-lending and model-risk rules have loosened in 2025 and 2026, and the new interagency model risk guidance expressly leaves generative and agentic AI out of scope [33][37][38]. That leaves banks to govern the LLM parts of these tools with general risk management and vendor oversight, while the duty to give specific reasons for a denial remains.

## Background

### Why small-business lending is the test case

A small-business loan of $150,000 earns a bank about the same fee and spread per dollar as a much larger loan, but takes a similar amount of work to originate. For SBA loans the work is heavier: eligibility checks, SBA forms, credit-elsewhere justification, cash-flow analysis and closing documents. American Banker reported in August 2025 that Live Oak, now the largest SBA 7(a) lender by dollars, had previously turned away loan requests under $350,000 because underwriting them took too long [3]. That is the economic problem AI vendors pitch against. If intake, document handling and spreading become cheap, smaller loans become worth making.

Demand is visible in survey data. The Federal Reserve's 2026 Small Business Credit Survey found that the share of employer-firm applicants who applied to online lenders rose from 17% in 2020 to 29% in 2025. Small banks still had the highest full-approval rate at 57%, and online-lender borrowers were far more likely to report higher-than-expected costs (60%, against 37% at small banks and 32% at large banks) [32]. Speed is pulling borrowers toward fintechs; price and approval rates still favour banks. A bank that can match fintech speed on small loans would have both.

### What "AI-first" means in this paper

The phrase has no fixed definition. Live Oak's president has said the bank intends to become an "AI-native bank" [10]. Huntington describes its 1866 Studio as an agentic operating system for small businesses [22]. Neither statement says how loans are made. This paper therefore uses a narrower test: a bank counts as having launched AI in small-business lending only where a public source says AI is used in a named step of the loan process, at a named bank, with a date. Statements about firm-wide AI programmes, employee assistants or productivity are reported as context, not as lending launches.

### SBA lending in 2025 and 2026

Two SBA changes matter for automation. First, SOP 50 10 8 took effect on June 1, 2025, and SOP 50 10 8.1 took effect for loans numbered on or after October 1, 2026 [42]. Colony Bank described the revised rules as 416 pages and expected them to add about five days to each loan [24]. Second, the SBA stopped returning the FICO SBSS score for 7(a) Small Loans from March 1, 2026. Lenders may instead use their own scoring model if their primary federal regulator permits it and it does not rely only on consumer scores, and they must document debt service coverage of at least 1.10x, review two months of operating-account statements and justify why credit is not available elsewhere [40][41]. More documentation per loan, and no default automated credit screen, both raise the value of tools that read documents and assemble files.

## Live Oak Bank

### Who Live Oak is

Live Oak Bank, of Wilmington, North Carolina, is a branchless bank that lends nationally to small businesses through industry verticals. It has a history of building lending technology and then spinning it out or seeding it. It built the loan software that became nCino in 2011, and Live Oak Ventures funded the Finxact cloud core, which Live Oak began adopting in 2020 and used to book its Paycheck Protection Program loans [16]. Its FY2025 annual report describes "100% cloud-based operations" [9].

On October 19, 2026, Live Oak said SBA rankings placed it first among 7(a) lenders by dollar amount for the SBA's fiscal 2026, with 2,411 loans approved and more than $2.58 billion [15]. That ranking comes from the bank's own release citing SBA data; this paper did not check it against SBA's lender report.

### What Live Oak has launched

**Casca.** On August 19, 2025, Live Oak said Live Oak Ventures had taken part in a financing of Cascading AI, Inc., which trades as Casca, and that the bank was a design partner using Casca to automate the Live Oak Express loan process, with plans to extend it across the franchise [1]. American Banker confirmed the same day that Live Oak and Huntington both joined Casca's $29 million round and were preparing to deploy its software [3].

The status has moved slowly and in public:

- The FY2025 shareholder letter, filed in early 2026, said Live Oak was co-developing an AI-native loan origination system for Live Oak Express [9].
- On the first-quarter 2026 call (April 23, 2026), President BJ Losch said the bank was in pilot with the platform [10].
- On the second-quarter call (July 23, 2026), Losch said the pilot had already closed some loans and that he expected a full rollout across Live Oak Express by the end of the year, followed by other small-business lines [11].
- A third-party review of the third-quarter results (released October 21, 2026) describes the Express rollout as still scheduled for completion by year-end [13]. The earnings release itself gives no Express volume or rollout update [12].

**Employee AI.** Separately from lending, Live Oak has given AI tools to all staff. The FY2025 letter counted 43 employee-built agents [9]; by April 2026 the bank cited more than 300 [10]; by July it cited more than 640 agents and skills across platforms, and about 150 heavy users of Claude Enterprise, roughly 15% of staff [11]. The counts are self-reported and the unit changes between dates, so they show breadth of adoption, not output.

### What it does

Live Oak has not published a process description of how it uses Casca. Casca's own materials describe the product as a guided online application that turns SBA Forms 1919, 413 and 159 into step-by-step flows, an AI assistant that answers applicants, automated financial spreading, and connections to credit bureaus, document verification and core systems [6][5]. Losch told the Tearsheet podcast in August 2026 that the goal is to cut SBA approval-to-close from over 100 days toward two weeks, while the credit decision stays with a human underwriter [14]. American Banker reported in April 2026 that Live Oak's underwriting took about two weeks once documents were in, and that the target after automation was seven to ten days from application to funding [7].

### Reported results

Live Oak Express volumes are the closest public measure. American Banker reported $56 million of small-dollar SBA originations in the first quarter of 2026, up from $38 million in the fourth quarter of 2025 [7]. Live Oak reported a record $82 million in the second quarter, up 63% from a year earlier, with secondary-market premiums of about 109 to 111 [11]. Management expects about $300 million of Express production in 2026 and at least $750 million a year within a couple of years, and expects Casca to add a step change in 2027 [11]. The third-quarter release does not give an Express figure [12][13].

![Bar chart of Live Oak Express quarterly originations against the bank's stated targets](research/ai-first-banks-small-business-lending/fig1-express.svg)

*Figure 1. Live Oak Express (small-dollar SBA 7(a)) originations by quarter, Q4 2025 to Q2 2026 [7][11], against two stated targets converted to a quarterly pace: about $300 million for 2026 (about $75 million a quarter) and at least $750 million a year (about $188 million a quarter) [11]. Q3 2026 was not disclosed. Chart by the author.*

These volumes cannot be credited to AI. The pilot was small through mid-2026, and the bank had been growing Express before Casca: the FY2025 letter reported that Express production nearly doubled in 2025 [9]. Live Oak's efficiency ratio improved from 58.68% in the third quarter of 2025 to 48.80% a year later [12], but CFO Walt Phifer said on the July call that the gains of the previous year and a half had "nothing to do with AI yet," crediting reorganisation, system consolidation and expense control [11]. Over the same year, annualised net charge-offs rose from 0.61% to 1.00% of loans held for investment, and the third-quarter provision of $54.7 million included $17.0 million tied to a distillery portfolio the bank is exiting [12]. Nothing in the sources links credit losses to AI either way.

![Two line charts of Live Oak's efficiency ratio and net charge-off ratio, Q3 2025 to Q3 2026](research/ai-first-banks-small-business-lending/fig2-liveoak.svg)

*Figure 2. Live Oak efficiency ratio and annualised net charge-offs to average loans held for investment, by quarter [12]. Management attributes the efficiency improvement to non-AI measures [11]. Chart by the author.*

### A note on related parties

Casca's Series A was led by Canapi Ventures. The release quotes Neil Underwood as co-founder and general partner of Canapi [2]; American Banker identifies him as a Live Oak co-founder and board member [3]. Live Oak is therefore a customer, design partner and investor in Casca, and one of its directors is a partner at the lead investor. Nothing in the sources suggests impropriety, and this pattern of seeding and adopting vendors is how Live Oak has worked since nCino. It does mean that Live Oak's statements about Casca are not independent evidence of Casca's performance.

## Huntington and Casca

### What is confirmed

Huntington Bancshares is a large Midwest regional bank and one of the highest-volume SBA 7(a) lenders by number of loans. It was first by loan count for seven consecutive fiscal years through FY2024, when it made 7,577 7(a) loans totalling about $1.53 billion [17]. The Coleman Report's ranking for FY2025 put it second by count, behind Northeast Bank, with a decline of about 10% in loan count [18].

The link to Casca rests on four public items:

1. Casca's Series A release of August 19, 2025 lists Huntington National Bank as an investor and customer and quotes a Huntington regional banking director on the investment [2].
2. American Banker reported the same day that Huntington and Live Oak were preparing to roll out Casca's software [3]. Casca's repost of that article says Huntington planned to adopt it during 2026 for several origination steps, including application support and an always-available borrower chatbot [4].
3. American Banker's April 2026 article on AI in SBA lending, as reposted by Casca, describes Casca as serving the top two SBA 7(a) lenders, Live Oak and Huntington [8].
4. Casca's Celtic Bank release of April 29, 2026 names Huntington as a customer [6].

### What is not public

Huntington's own channels are silent on Casca. The first- and third-quarter 2026 earnings calls discuss an enterprise AI programme and the 1866 Studio but do not mention Casca, SBA underwriting or AI in credit [21][22]. The 1866 Studio launch release does not mention Casca [19]. This paper found no public statement of whether Huntington has gone live, which loan types the software covers, how much Huntington invested, or any result.

Casca's descriptions of Huntington's SBA rank are also out of date. Its April 2026 release still calls Huntington first by loan count [6], while the Coleman Report's FY2025 ranking and American Banker's April 2026 article place it second [18][8]. Readers should take Casca's description of its customers as marketing.

### Huntington's own AI work in small business

Huntington's public AI message is about efficiency and a new customer product. On the first-quarter 2026 call, CFO Zach Wasserman described an enterprise-wide AI programme in five areas, including what he called agentic process transformation, and framed AI as a route to expense efficiency [21]. The transcript source carries conflicting date stamps, so the exact call date is not confirmed.

The customer product is **The 1866 Studio**, launched on October 19, 2026 and built with Google Cloud on Gemini. It is a set of AI agents for small-business owners, available to non-customers in early access. Two of its functions touch lending: a loan readiness agent that identifies financing gaps, explains what lenders look for and recommends steps to improve future eligibility, and a funding support function that helps owners find funding sources [19]. American Banker reported that it launched with eight agents and that Huntington expects more than 60 within a year [20]. Nothing in the launch materials describes underwriting or credit decisions.

The two efforts sit at opposite ends of the loan. The 1866 Studio works before an application, shaping what the borrower brings. Casca, as described by its maker, works from application to underwriting file. Huntington's high-volume small-dollar SBA work, including its Lift Local Business programme (about 1,900 loans and $133 million by October 2024 [23]), is where origination automation would plausibly matter most, but no source makes that connection.

## Other banks with documented launches

### Celtic Bank and Casca

Celtic Bank of Salt Lake City, which American Banker puts at about $4.8 billion of assets, selected Casca for its SBA lending programme on April 29, 2026 [6][7]. The release describes Casca's guided SBA forms, automated spreading and system connections, and claims that origination timelines fall "from months to days" [6]. American Banker framed Celtic as the latest large SBA lender to adopt the platform, with origination times on smaller loans as low as seven days [7]. No Celtic result has been published.

### Colony Bank and Lama AI

American Banker reported on October 16, 2026 that Colony Bank in Georgia uses generative AI software from Lama AI to originate SBA loans, that a typical approval takes about ten days, and that the bank expected the revised SBA rules to add about five days per loan, which the software helped it absorb [24]. Colony planned to move larger loans onto the platform. The article gives no measured time saving. Lama AI's June 2026 Series A announcement named SouthState, Colony, Capital Community Bank, First Bank & Trust, Gate City Bank and Luminate Bank as clients [25]; none of those banks has described its own use publicly in sources found here.

### ConnectOne Bank and nCino

ConnectOne Bank in New Jersey said in July 2026 that it runs nCino's Banking Advisor in production along with two custom agents. One retrieves credit policy and job aids; the other uses document intelligence to update customer relationship records [26]. The bank reported that document search fell from about 20 minutes to as little as 30 seconds, that active users rose 41% in ten weeks, and that the record-update agent cut task time by 60% [26]. These are internal productivity measures for commercial bankers. The release does not describe credit memos or decisions. nCino has separately reported, for unnamed clients, small-business loan decisions 62% faster and 41% fewer abandoned applications [29].

### Grasshopper Bank, Lendio and Enfi

Grasshopper, a digital bank, said in February 2026 that it offers "instant SBA loan offers" through a partnership with Lendio using AI-enabled decisioning, and that it expanded its use of Enfi's AI for credit risk assessment [27]. It reported $94.72 million of SBA production in 2025 from more than 1,000 digital 7(a) applications [27]. This is the only example found where a bank says AI is involved in producing a loan offer, though the release does not say how final approval is made. The same release notes that Enova agreed to acquire Grasshopper [27].

### Large banks

On third-quarter 2026 calls, KeyCorp said it is automating credit and collateral steps in commercial loan origination, PNC described preparing an "agentic workforce," and U.S. Bancorp and Fifth Third discussed AI in general terms [28]. Bank of America's 2026 releases describe generative AI in its employee assistant, not in small-business underwriting [45]. This paper found no 2024 to 2026 primary source announcing an AI small-business lending launch at JPMorgan Chase, Wells Fargo, Citizens or Truist. That is an absence of evidence, not evidence of absence: large banks may use such tools without announcing them.

## Comparison

| Bank | Tool and vendor | Stage of the loan | Status (public) | Reported results | Who reports them |
|---|---|---|---|---|---|
| Live Oak Bank | Casca (design partner, investor) [1] | Intake, forms, documents, spreading; human decides [6][14] | Pilot in Live Oak Express; full Express rollout targeted year-end 2026 [11][13] | None for AI. Targets: about two weeks to close; $750M+ a year in Express [14][11] | Bank |
| Huntington | Casca (investor, customer) [2][3] | Application support, borrower chatbot (planned) [4] | Planned for 2026; go-live not confirmed | None | Vendor and press |
| Huntington | The 1866 Studio, Google Cloud [19] | Pre-application: loan readiness, funding search | Early access since Oct 19, 2026 | 8 agents at launch, 60+ planned [20] | Bank and press |
| Celtic Bank | Casca [6] | SBA intake, forms, spreading, file preparation | Selected Apr 2026 | Origination cut from months to days (claim) [6] | Vendor |
| Colony Bank | Lama AI [24] | SBA origination | Live by Oct 2026 | Typical approval about 10 days; no before-and-after figure [24] | Press, citing bank |
| ConnectOne | nCino Banking Advisor and custom agents [26] | Internal search, relationship records | Live by Jul 2026 | Search 20 min to 30 sec; task time -60% [26] | Bank and vendor |
| Grasshopper | Lendio decisioning, Enfi risk [27] | Offers, credit risk assessment | Live in 2025 | $94.72M SBA production in 2025 [27] | Bank |

![Matrix of which loan stages each bank's AI tool is publicly described as covering](research/ai-first-banks-small-business-lending/fig3-matrix.svg)

*Figure 3. Loan stages each publicly described deployment covers, as stated in the cited sources [4][6][14][19][24][26][27]. A filled mark means a source states the use; a blank means no source states it, not that the bank does not do it. Matrix by the author.*

![Timeline of AI small-business lending announcements, February 2024 to December 2026](research/ai-first-banks-small-business-lending/fig4-timeline.svg)

*Figure 4. Public milestones, 2024 to 2026: Casca pre-seed with Bankwell as first customer [5]; Casca Series A with Live Oak and Huntington [1][2]; SBSS sunset [40]; Live Oak pilot [10]; Celtic selects Casca [6]; Lama AI Series A [25]; ConnectOne on nCino [26]; SOP 50 10 8.1 [42]; Colony on Lama [24]; 1866 Studio [19]; Live Oak's year-end Express target [11]. Timeline by the author.*

## Analysis

### Company claims against independent confirmation

Independent sources confirm that these relationships exist and roughly when they began. American Banker independently reported the Live Oak and Huntington investments and plans [3], Live Oak's pilot [7], Celtic's adoption [7] and Colony's use of Lama [24]. Earnings call transcripts, which are company statements but made under securities-law exposure, confirm Live Oak's pilot status and targets [10][11].

Independent sources do not confirm any outcome. Casca's claims of about three times higher conversion and 90% less manual effort (2024), loans funded up to 30 times faster than industry averages (2025), and origination cut from months to days (2026) are all in its own releases [5][2][6]. nCino's 62% faster decisions come from unnamed clients [29]. ConnectOne's productivity figures are joint bank and vendor statements [26]. None is accompanied by a method, a baseline period or a control group.

### Where the speed would come from

The publicly described tools attack the parts of an SBA loan that are clerical: collecting forms, chasing documents, re-keying financial statements and assembling the file. That fits the structure of the problem. Live Oak's description of about two weeks of underwriting after documents arrive, against more than 100 days approval-to-close [7][14], suggests most of the elapsed time sits outside underwriting itself. If that is right, the gains will come from intake and document handling, which is where the vendors focus.

It also means the honest measure is cycle time from application to funding, split by stage, before and after the tool, on comparable loans. No bank has published that.

### Why the buyers are SBA specialists

Every documented launch is at a bank that either specialises in SBA lending or runs a large small-dollar SBA programme. SBA 7(a) loans are highly standardised: the same forms, the same eligibility rules, a published SOP. Standardisation makes them a good target for automation, and the guaranteed portion can be sold, so volume converts directly to gain-on-sale income, as Live Oak's Express premiums show [11]. The large banks, whose small-business lending is mostly cards and lines decided by scorecards, have less paperwork to automate and are reporting AI at the enterprise level instead [28].

### Evidence from research

There is no independent study of 2025 and 2026 generative AI origination tools at banks. The closest academic evidence is older and about AI and automation broadly. A Census Bureau working paper using 2017 to 2019 data found that the share of banks using AI rose from 14% to 43%, that AI use was not associated with faster small-business loan growth overall, but that it reduced the penalty on lending to distant borrowers by 46% to 64%, with lower charge-offs and spreads on those loans [30]. Work on the Paycheck Protection Program found that Black-owned firms were more likely to get their loans from fintechs, which the authors linked to automated processing, and that small banks which automated lent more to those firms; the small-bank trade group disputed the method [31]. Both suggest automation widens reach more than it raises volume, which is consistent with Live Oak's goal of making loans it previously declined [3].

## Regulation and governance

### Model risk

On April 17, 2026, the OCC, Federal Reserve and FDIC replaced SR 11-7 and OCC Bulletin 2011-12 with revised, principles-based model risk guidance (SR 26-2, OCC Bulletin 2026-13, FDIC FIL-16-2026). The OCC said the guidance is most relevant to banks above $30 billion of assets, that it may apply to smaller banks with significant model risk, and that generative and agentic AI models are not within its scope; a future request for information on AI was promised [33][34]. Fed Vice Chair for Supervision Michelle Bowman said in April 2026 that the revised guidance applies to traditional models and basic AI, that other governance practices should support adoption of generative and agentic AI, and that uses which directly affect customers, such as credit determinations, are a factor in assessing risk [35].

For the tools in this paper, the result is a gap. A scorecard used to approve 7(a) Small Loans after the SBSS sunset sits under SR 26-2. An LLM that reads tax returns, spreads statements or drafts parts of a credit file does not have dedicated federal guidance. Banks govern it under general safety-and-soundness expectations and third-party risk management. The June 2023 interagency third-party guidance is itself being replaced: a proposal issued in September 2026 would make the guidance non-binding and tailored, with comments due November 16, 2026, and contains no AI-specific content [36].

### Fair lending and adverse action

The CFPB withdrew its 2022 and 2023 circulars on adverse-action notices for complex algorithms in May 2025 [37]. The underlying Regulation B duty to give specific principal reasons for adverse action still applies, including to business credit. A CFPB rule effective July 21, 2026 removed the disparate-impact effects test from Regulation B; New York's financial regulator said the same day that such outcomes may still be unlawful under state law [38]. The revised Section 1071 small-business data rule, finalised in May 2026, narrows coverage to lenders with at least 1,000 covered originations and businesses with revenue of $1 million or less, drops denial reasons and pricing from the data, and sets compliance from January 1, 2028 [39]. Once in force, 1071 data will show who applied and who was approved, but not why applicants were declined or what they paid, which limits outside scrutiny of AI-assisted decisions.

### SBA and states

This paper found no SBA notice or SOP provision specifically about AI. The SBA rules that matter are the general ones: lender responsibility for the credit decision, the scoring-model conditions after the SBSS sunset, and rules on lender service providers [40][41][42]. At state level, Colorado replaced its 2024 AI Act with a narrower disclosure-based law effective January 1, 2027 that lists lending as a covered domain, and the FTC has proposed that the law may be pre-empted [44]. Treasury's December 2024 report on AI in financial services recommended reviewing AI uses for fair-lending compliance before deployment and periodically after [43].

## Implications for lenders and credit teams

1. **Ask for stage-level cycle-time data before buying.** Vendor speed claims are not comparable to each other or to a bank's own process. A pilot should measure application-to-funding time by stage, on matched loan types, with the old process as baseline. Live Oak's public targets give a usable yardstick: about two weeks to close, against more than 100 days [14].
2. **Separate document AI from credit AI in governance.** Extraction, spreading and form completion change the inputs an underwriter sees. Errors there are silent and flow into the decision. Treat them with the same controls as a model even though SR 26-2 does not require it: sample-based accuracy checks against source documents, logging of what the tool changed, and a clear owner.
3. **Keep the decision with a named human, and record why.** Every documented deployment except Grasshopper's offer engine keeps the credit decision with an underwriter. That is also the simplest way to keep adverse-action reasons specific and defensible under Regulation B.
4. **Plan the post-SBSS scoring model now.** For 7(a) Small Loans, a bank that wants an automated credit screen needs a model its regulator accepts and that does not rely only on consumer scores [41]. That model falls under the revised model risk guidance, which has lighter process requirements but still expects validation proportionate to risk [33].
5. **Read vendor customer lists critically.** Casca's description of Huntington's SBA rank was out of date in its own 2026 release [6][18]. Customer names in funding announcements may mean investment, pilot or production use. Ask which.
6. **Watch the borrower side.** Huntington's 1866 Studio and similar tools will shape what borrowers know before they apply [19]. Better-prepared applications reduce work for underwriters; they also mean borrowers will compare banks' requirements and speed more easily.
7. **Mind the related-party structure.** Several of the early customers are also investors in the vendors they use [1][2]. A bank evaluating the same tool should not treat those customers' public enthusiasm as independent references.

## Open questions and limitations

- **Has Huntington gone live with Casca?** No public source says so as of November 13, 2026. The scope, timing and results of its deployment are unknown.
- **Did Live Oak complete the Express rollout?** It was targeted for year-end 2026. The full third-quarter call transcript was not available to this research, so a late-October update may have been missed.
- **What does "AI-native" mean in practice?** Neither Live Oak nor Huntington has published a process map, an inventory of AI uses in lending, or how they validate them.
- **Outcome data.** No bank has published before-and-after cycle times, approval rates, cost per loan or loss rates for AI-assisted small-business loans. Every outcome figure here is self-reported.
- **Coverage.** The research did not confirm named-bank deployments for several vendors in this market, including Numerated, Biz2X, Abrigo, Baker Hill, Ocrolus and Moody's. Banks may also be using AI in lending without announcing it, especially large banks.
- **Source access.** Several American Banker articles were only partly accessible; some details come from Casca's reposts of them, which are vendor-hosted. Two transcript pages carried conflicting date stamps, noted where relevant. The text of SR 26-2 was read through the OCC release and secondary summaries rather than the Federal Reserve page.
- **Rank figures.** Live Oak's FY2026 ranking comes from its own release citing SBA data. Huntington's FY2025 rank comes from the Coleman Report's analysis of SBA data. Neither was checked against the SBA's own lender report.
- **Policy is moving.** The third-party risk proposal, the promised federal AI guidance, the Section 1071 litigation and the Colorado pre-emption question were all open at the time of writing.

This paper uses only public information. The author has no affiliation with any company discussed.

## Sources

1. Live Oak Bancshares, "Live Oak Ventures Participates in Financing of Cascading AI, Inc.," August 19, 2025. [investor<wbr>.liveoak<wbr>.bank<wbr>/news<wbr>/news<wbr>-details<wbr>/2025<wbr>/Live<wbr>-Oak<wbr>-Ventures<wbr>-Participates<wbr>-in<wbr>-Financing<wbr>-of<wbr>-Cascading<wbr>-AI<wbr>-Inc<wbr>-<wbr>/default<wbr>.aspx](https://investor.liveoak.bank/news/news-details/2025/Live-Oak-Ventures-Participates-in-Financing-of-Cascading-AI-Inc-/default.aspx)
2. Casca (PR Newswire), "AI-native loan origination platform Casca raises $29 million to replace legacy lending," August 19, 2025. [www<wbr>.prnewswire<wbr>.com<wbr>/news<wbr>-releases<wbr>/ai<wbr>-native<wbr>-loan<wbr>-origination<wbr>-platform<wbr>-casca<wbr>-raises<wbr>-29<wbr>-million<wbr>-to<wbr>-replace<wbr>-legacy<wbr>-lending<wbr>-302533000<wbr>.html](https://www.prnewswire.com/news-releases/ai-native-loan-origination-platform-casca-raises-29-million-to-replace-legacy-lending-302533000.html)
3. Penny Crosman, "Huntington, Live Oak to invest in, deploy gen AI-based lending," American Banker, August 19, 2025. [www<wbr>.americanbanker<wbr>.com<wbr>/news<wbr>/huntington<wbr>-live<wbr>-oak<wbr>-to<wbr>-invest<wbr>-in<wbr>-deploy<wbr>-gen<wbr>-ai<wbr>-based<wbr>-lending](https://www.americanbanker.com/news/huntington-live-oak-to-invest-in-deploy-gen-ai-based-lending)
4. Casca, repost of American Banker, "Huntington, Live Oak to invest in, deploy gen AI-based lending" (vendor-hosted). [www<wbr>.cascading<wbr>.ai<wbr>/news<wbr>/huntington<wbr>-live<wbr>-oak<wbr>-gen<wbr>-ai<wbr>-lending](https://www.cascading.ai/news/huntington-live-oak-gen-ai-lending)
5. Cascading AI (PR Newswire), "Cascading AI secures $3.9 million in pre-seed funding," February 9, 2024. [prnewswire<wbr>.com<wbr>/news<wbr>-releases<wbr>/cascading<wbr>-ai<wbr>-secures<wbr>-3<wbr>-9<wbr>-million<wbr>-in<wbr>-pre<wbr>-seed<wbr>-funding<wbr>-to<wbr>-revolutionize<wbr>-the<wbr>-banking<wbr>-industry<wbr>-with<wbr>-its<wbr>-ai<wbr>-native<wbr>-loan<wbr>-origination<wbr>-system<wbr>-302058481<wbr>.html](https://prnewswire.com/news-releases/cascading-ai-secures-3-9-million-in-pre-seed-funding-to-revolutionize-the-banking-industry-with-its-ai-native-loan-origination-system-302058481.html)
6. Casca (PR Newswire), "Casca selected by Celtic Bank to power its SBA lending program," April 29, 2026. [www<wbr>.prnewswire<wbr>.com<wbr>/news<wbr>-releases<wbr>/casca<wbr>-selected<wbr>-by<wbr>-celtic<wbr>-bank<wbr>-to<wbr>-power<wbr>-its<wbr>-sba<wbr>-lending<wbr>-program<wbr>-302757486<wbr>.html](https://www.prnewswire.com/news-releases/casca-selected-by-celtic-bank-to-power-its-sba-lending-program-302757486.html)
7. John Reosti, "How AI is quickly overhauling one segment of SBA lending," American Banker, April 28, 2026. [www<wbr>.americanbanker<wbr>.com<wbr>/news<wbr>/how<wbr>-ai<wbr>-is<wbr>-quickly<wbr>-overhauling<wbr>-one<wbr>-segment<wbr>-of<wbr>-sba<wbr>-lending](https://www.americanbanker.com/news/how-ai-is-quickly-overhauling-one-segment-of-sba-lending)
8. Casca, repost of American Banker, "How AI is quickly overhauling one segment of SBA lending" (vendor-hosted). [www<wbr>.cascading<wbr>.ai<wbr>/news<wbr>/how<wbr>-ai<wbr>-is<wbr>-quickly<wbr>-overhauling<wbr>-one<wbr>-segment<wbr>-of<wbr>-sba<wbr>-lending](https://www.cascading.ai/news/how-ai-is-quickly-overhauling-one-segment-of-sba-lending)
9. Live Oak Bancshares, 2025 Annual Report to Shareholders and Form 10-K (SEC filing), 2026. [www<wbr>.sec<wbr>.gov<wbr>/Archives<wbr>/edgar<wbr>/data<wbr>/1462120<wbr>/000146212026000032<wbr>/a455224<wbr>_p47794xlobx2025arx<wbr>.pdf](https://www.sec.gov/Archives/edgar/data/1462120/000146212026000032/a455224_p47794xlobx2025arx.pdf)
10. Live Oak Bancshares Q1 2026 earnings call transcript, The Motley Fool, April 23, 2026. [www<wbr>.fool<wbr>.com<wbr>/earnings<wbr>/call<wbr>-transcripts<wbr>/2026<wbr>/04<wbr>/23<wbr>/live<wbr>-oak<wbr>-lob<wbr>-q1<wbr>-2026<wbr>-earnings<wbr>-transcript<wbr>/](https://www.fool.com/earnings/call-transcripts/2026/04/23/live-oak-lob-q1-2026-earnings-transcript/)
11. Live Oak Bancshares Q2 2026 earnings call transcript, Investing.com, July 23, 2026. [www<wbr>.investing<wbr>.com<wbr>/news<wbr>/transcripts<wbr>/earnings<wbr>-call<wbr>-transcript<wbr>-live<wbr>-oak<wbr>-bancshares<wbr>-tops<wbr>-q2<wbr>-2026<wbr>-estimates<wbr>-93CH<wbr>-4809313](https://www.investing.com/news/transcripts/earnings-call-transcript-live-oak-bancshares-tops-q2-2026-estimates-93CH-4809313)
12. Live Oak Bancshares, third quarter 2026 earnings release, Form 8-K Exhibit 99.1, October 21, 2026. [www<wbr>.sec<wbr>.gov<wbr>/Archives<wbr>/edgar<wbr>/data<wbr>/0001462120<wbr>/000146212026000068<wbr>/lob<wbr>-20261021exx991<wbr>.htm](https://www.sec.gov/Archives/edgar/data/0001462120/000146212026000068/lob-20261021exx991.htm)
13. Finsee, "Live Oak Bancshares (LOB) Q3 2026 earnings review" (third-party summary). [finsee<wbr>.ai<wbr>/earnings<wbr>/lob<wbr>/2026<wbr>/q3<wbr>/en<wbr>/](https://finsee.ai/earnings/lob/2026/q3/en/)
14. Tearsheet, "Live Oak Bank's BJ Losch on why AI is an accelerant, not a strategy," August 26, 2026. [tearsheet<wbr>.co<wbr>/podcasts<wbr>/live<wbr>-oak<wbr>-banks<wbr>-bj<wbr>-losch<wbr>-on<wbr>-why<wbr>-ai<wbr>-is<wbr>-an<wbr>-accelerant<wbr>-not<wbr>-a<wbr>-strategy<wbr>/](https://tearsheet.co/podcasts/live-oak-banks-bj-losch-on-why-ai-is-an-accelerant-not-a-strategy/)
15. Live Oak Bank (GlobeNewswire via Finviz), "Live Oak Bank named nation's top SBA 7(a) lender," October 19, 2026. [finviz<wbr>.com<wbr>/news<wbr>/403950<wbr>/live<wbr>-oak<wbr>-bank<wbr>-named<wbr>-nations<wbr>-top<wbr>-sba<wbr>-7a<wbr>-lender](https://finviz.com/news/403950/live-oak-bank-named-nations-top-sba-7a-lender)
16. "Live Oak outpaces larger rivals in moving core system to public cloud," American Banker, September 21, 2020. [www<wbr>.americanbanker<wbr>.com<wbr>/news<wbr>/live<wbr>-oak<wbr>-outpaces<wbr>-larger<wbr>-rivals<wbr>-in<wbr>-moving<wbr>-core<wbr>-system<wbr>-to<wbr>-public<wbr>-cloud](https://www.americanbanker.com/news/live-oak-outpaces-larger-rivals-in-moving-core-system-to-public-cloud)
17. Huntington Bancshares, "Huntington Bank is nation's top SBA 7(a) lender by volume for seventh consecutive year," October 9, 2024. [ir<wbr>.huntington<wbr>.com<wbr>/news<wbr>-presentations<wbr>/press<wbr>-releases<wbr>/detail<wbr>/902<wbr>/huntington<wbr>-bank<wbr>-is<wbr>-nations<wbr>-top<wbr>-sba<wbr>-7a<wbr>-lender<wbr>-by<wbr>-volume<wbr>-for<wbr>-seventh<wbr>-consecutive<wbr>-year](https://ir.huntington.com/news-presentations/press-releases/detail/902/huntington-bank-is-nations-top-sba-7a-lender-by-volume-for-seventh-consecutive-year)
18. Coleman Report, "Top 100 SBA 7(a) lenders by number of loans, FY25," November 18, 2025. [colemanreport<wbr>.com<wbr>/sba<wbr>-hot<wbr>-topic<wbr>-tuesday<wbr>-coleman<wbr>-report<wbr>-top<wbr>-100<wbr>-sba<wbr>-7a<wbr>-lenders<wbr>-by<wbr>-number<wbr>-of<wbr>-loans<wbr>-fy25](https://colemanreport.com/sba-hot-topic-tuesday-coleman-report-top-100-sba-7a-lenders-by-number-of-loans-fy25)
19. Huntington (Business Wire via Yahoo Finance), "Huntington Bank introduces The 1866 Studio," October 19, 2026. [finance<wbr>.yahoo<wbr>.com<wbr>/small<wbr>-business<wbr>/articles<wbr>/huntington<wbr>-bank<wbr>-introduces<wbr>-1866<wbr>-studio<wbr>-122500808<wbr>.html](https://finance.yahoo.com/small-business/articles/huntington-bank-introduces-1866-studio-122500808.html)
20. John Reosti, "Banks moving to provide AI toolkits to small business clients," American Banker, November 3, 2026. [www<wbr>.americanbanker<wbr>.com<wbr>/news<wbr>/banks<wbr>-moving<wbr>-to<wbr>-provide<wbr>-ai<wbr>-toolkits<wbr>-to<wbr>-small<wbr>-business<wbr>-clients](https://www.americanbanker.com/news/banks-moving-to-provide-ai-toolkits-to-small-business-clients)
21. Huntington Bancshares Q1 2026 earnings call transcript, The Motley Fool, published May 4, 2026. [www<wbr>.fool<wbr>.com<wbr>/earnings<wbr>/call<wbr>-transcripts<wbr>/2026<wbr>/05<wbr>/04<wbr>/huntington<wbr>-hban<wbr>-q1<wbr>-2026<wbr>-earnings<wbr>-transcript<wbr>/](https://www.fool.com/earnings/call-transcripts/2026/05/04/huntington-hban-q1-2026-earnings-transcript/)
22. Huntington Bancshares Q3 2026 earnings call transcript, The Motley Fool, October 22, 2026. [www<wbr>.fool<wbr>.com<wbr>/earnings<wbr>/call<wbr>-transcripts<wbr>/2026<wbr>/10<wbr>/22<wbr>/huntington<wbr>-hban<wbr>-q3<wbr>-2026<wbr>-earnings<wbr>-call<wbr>-transcript<wbr>/](https://www.fool.com/earnings/call-transcripts/2026/10/22/huntington-hban-q3-2026-earnings-call-transcript/)
23. "A small-dollar business lending scheme finds a niche at Huntington," American Banker, November 22, 2024. [www<wbr>.americanbanker<wbr>.com<wbr>/news<wbr>/a<wbr>-small<wbr>-dollar<wbr>-business<wbr>-lending<wbr>-scheme<wbr>-finds<wbr>-a<wbr>-niche<wbr>-at<wbr>-huntington](https://www.americanbanker.com/news/a-small-dollar-business-lending-scheme-finds-a-niche-at-huntington)
24. "Colony Bank uses gen AI to shave days off SBA loan approvals," American Banker, October 16, 2026. [www<wbr>.americanbanker<wbr>.com<wbr>/news<wbr>/colony<wbr>-bank<wbr>-uses<wbr>-gen<wbr>-ai<wbr>-to<wbr>-shave<wbr>-days<wbr>-off<wbr>-sba<wbr>-loan<wbr>-approvals](https://www.americanbanker.com/news/colony-bank-uses-gen-ai-to-shave-days-off-sba-loan-approvals)
25. SiliconANGLE, "Lama AI raises $10M to accelerate automated loan originations," June 23, 2026. [siliconangle<wbr>.com<wbr>/2026<wbr>/06<wbr>/23<wbr>/lama<wbr>-ai<wbr>-raises<wbr>-10m<wbr>-accelerate<wbr>-automated<wbr>-loan<wbr>-originations](https://siliconangle.com/2026/06/23/lama-ai-raises-10m-accelerate-automated-loan-originations)
26. ConnectOne Bank and nCino (GlobeNewswire), "ConnectOne Bank is building the future of commercial lending on nCino's Agentic Operating System," July 14, 2026. [www<wbr>.globenewswire<wbr>.com<wbr>/news<wbr>-release<wbr>/2026<wbr>/07<wbr>/14<wbr>/3326739<wbr>/0<wbr>/en<wbr>/ConnectOne<wbr>-Bank<wbr>-is<wbr>-Building<wbr>-the<wbr>-Future<wbr>-of<wbr>-Commercial<wbr>-Lending<wbr>-on<wbr>-nCino<wbr>-s<wbr>-Agentic<wbr>-Operating<wbr>-System<wbr>.html](https://www.globenewswire.com/news-release/2026/07/14/3326739/0/en/ConnectOne-Bank-is-Building-the-Future-of-Commercial-Lending-on-nCino-s-Agentic-Operating-System.html)
27. Grasshopper Bank, 2025 year-end press release, February 26, 2026. [www<wbr>.grasshopper<wbr>.bank<wbr>/press<wbr>-releases<wbr>/grasshopper<wbr>-concludes<wbr>-landmark<wbr>-year<wbr>-with<wbr>-83<wbr>-asset<wbr>-growth<wbr>-ai<wbr>-driven<wbr>-banking<wbr>-innovations<wbr>-and<wbr>-merger<wbr>-announcement<wbr>-by<wbr>-leading<wbr>-digital<wbr>-lender<wbr>/](https://www.grasshopper.bank/press-releases/grasshopper-concludes-landmark-year-with-83-asset-growth-ai-driven-banking-innovations-and-merger-announcement-by-leading-digital-lender/)
28. PYMNTS, "Regional banks put AI into core operations as business lending grows," October 20, 2026. [www<wbr>.pymnts<wbr>.com<wbr>/news<wbr>/banking<wbr>/2026<wbr>/regional<wbr>-banks<wbr>-put<wbr>-ai<wbr>-into<wbr>-core<wbr>-operations<wbr>-as<wbr>-business<wbr>-lending<wbr>-grows<wbr>/](https://www.pymnts.com/news/banking/2026/regional-banks-put-ai-into-core-operations-as-business-lending-grows/)
29. nCino, new AI-powered banking solutions announced at nSight, May 20, 2025. [www<wbr>.ncino<wbr>.com<wbr>/news<wbr>/ncino<wbr>-new<wbr>-ai<wbr>-powered<wbr>-banking<wbr>-solutions<wbr>-nsight](https://www.ncino.com/news/ncino-new-ai-powered-banking-solutions-nsight)
30. Piao, Wang and Weng, US Census Bureau Center for Economic Studies working paper CES-WP-25-07, February 2025. [www2<wbr>.census<wbr>.gov<wbr>/ces<wbr>/wp<wbr>/2025<wbr>/CES<wbr>-WP<wbr>-25<wbr>-07<wbr>.pdf](https://www2.census.gov/ces/wp/2025/CES-WP-25-07.pdf)
31. Banking Dive, report on Howell et al. (NYU) study of automation and PPP lending to Black-owned firms, October 12, 2021. [www<wbr>.bankingdive<wbr>.com<wbr>/news<wbr>/automation<wbr>-helped<wbr>-black<wbr>-borrowers<wbr>-get<wbr>-more<wbr>-out<wbr>-of<wbr>-ppp<wbr>-at<wbr>-fintechs<wbr>-big<wbr>-bank<wbr>/608074<wbr>/](https://www.bankingdive.com/news/automation-helped-black-borrowers-get-more-out-of-ppp-at-fintechs-big-bank/608074/)
32. Federal Reserve Banks, Small Business Credit Survey: 2026 Report on Employer Firms, March 2026. [www<wbr>.fedsmallbusiness<wbr>.org<wbr>/2026<wbr>-report<wbr>-on<wbr>-employer<wbr>-firms](https://www.fedsmallbusiness.org/2026-report-on-employer-firms)
33. Office of the Comptroller of the Currency, News Release 2026-29, revised model risk management guidance, April 17, 2026. [www<wbr>.occ<wbr>.gov<wbr>/news<wbr>-issuances<wbr>/news<wbr>-releases<wbr>/2026<wbr>/nr<wbr>-occ<wbr>-2026<wbr>-29<wbr>.html](https://www.occ.gov/news-issuances/news-releases/2026/nr-occ-2026-29.html)
34. Board of Governors of the Federal Reserve System, SR 26-2, revised guidance on model risk management, April 17, 2026. [www<wbr>.federalreserve<wbr>.gov<wbr>/supervisionreg<wbr>/srletters<wbr>/SR2602<wbr>.htm](https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm)
35. Michelle W. Bowman, "Artificial intelligence in the financial system," speech, April 27, 2026 (posted May 1, 2026). [www<wbr>.federalreserve<wbr>.gov<wbr>/newsevents<wbr>/speech<wbr>/bowman20260501a<wbr>.htm](https://www.federalreserve.gov/newsevents/speech/bowman20260501a.htm)
36. Sullivan & Cromwell, "Federal banking agencies propose significant updates to third-party risk management guidance," September 2026. [www<wbr>.sullcrom<wbr>.com<wbr>/insights<wbr>/memo<wbr>/2026<wbr>/September<wbr>/Federal<wbr>-Banking<wbr>-Agencies<wbr>-Propose<wbr>-Significant<wbr>-Updates<wbr>-Third<wbr>-Party<wbr>-Risk<wbr>-Management<wbr>-Guidance](https://www.sullcrom.com/insights/memo/2026/September/Federal-Banking-Agencies-Propose-Significant-Updates-Third-Party-Risk-Management-Guidance)
37. Consumer Financial Protection Bureau, withdrawn guidance (Circulars 2022-03 and 2023-03 withdrawn May 12, 2025). [www<wbr>.consumerfinance<wbr>.gov<wbr>/compliance<wbr>/guidance<wbr>/withdrawn<wbr>-guidance<wbr>/](https://www.consumerfinance.gov/compliance/guidance/withdrawn-guidance/)
38. Greenberg Traurig, "CFPB final rule revises ECOA framework, narrows disparate impact and discouragement standards," May 2026. [www<wbr>.gtlaw<wbr>.com<wbr>/en<wbr>/insights<wbr>/2026<wbr>/5<wbr>/cfpb<wbr>-final<wbr>-rule<wbr>-revises<wbr>-ecoa<wbr>-framework<wbr>-narrows<wbr>-disparate<wbr>-impact<wbr>-and<wbr>-discouragement<wbr>-standards](https://www.gtlaw.com/en/insights/2026/5/cfpb-final-rule-revises-ecoa-framework-narrows-disparate-impact-and-discouragement-standards)
39. Husch Blackwell, "CFPB finalizes revised Section 1071 rule: a narrower framework with a 2028 compliance date," May 2026. [www<wbr>.huschblackwell<wbr>.com<wbr>/newsandinsights<wbr>/cfpb<wbr>-finalizes<wbr>-revised<wbr>-section<wbr>-1071<wbr>-rule<wbr>-a<wbr>-narrower<wbr>-framework<wbr>-with<wbr>-a<wbr>-2028<wbr>-compliance<wbr>-date](https://www.huschblackwell.com/newsandinsights/cfpb-finalizes-revised-section-1071-rule-a-narrower-framework-with-a-2028-compliance-date)
40. US Small Business Administration, Procedural Notice 5000-876777, sunset of SBSS score, supplemental guidance, February 20, 2026. [www<wbr>.sba<wbr>.gov<wbr>/document<wbr>/procedural<wbr>-notice<wbr>-5000<wbr>-876777<wbr>-sba<wbr>-procedural<wbr>-notice<wbr>-5000<wbr>-876777<wbr>-sunset<wbr>-sbss<wbr>-score<wbr>-supplemental<wbr>-guidance](https://www.sba.gov/document/procedural-notice-5000-876777-sba-procedural-notice-5000-876777-sunset-sbss-score-supplemental-guidance)
41. NAGGL, "SBA notice revising previously issued underwriting requirements for 7(a) Small Loans," 2026. [www<wbr>.naggl<wbr>.org<wbr>/sba<wbr>-notice<wbr>-revising<wbr>-previously<wbr>-issued<wbr>-underwriting<wbr>-requirements<wbr>-for<wbr>-7a<wbr>-small<wbr>-loans<wbr>/](https://www.naggl.org/sba-notice-revising-previously-issued-underwriting-requirements-for-7a-small-loans/)
42. NAGGL, "SOP update: SBA publishes SOP 50 10 8.1 with technical policy updates," September 2026. [www<wbr>.naggl<wbr>.org<wbr>/sop<wbr>-update<wbr>-sba<wbr>-publishes<wbr>-sop<wbr>-50<wbr>-10<wbr>-8<wbr>-1<wbr>-with<wbr>-technical<wbr>-policy<wbr>-updates<wbr>/](https://www.naggl.org/sop-update-sba-publishes-sop-50-10-8-1-with-technical-policy-updates/)
43. US Department of the Treasury, "Artificial Intelligence in Financial Services," December 2024. [home<wbr>.treasury<wbr>.gov<wbr>/system<wbr>/files<wbr>/136<wbr>/Artificial<wbr>-Intelligence<wbr>-in<wbr>-Financial<wbr>-Services<wbr>.pdf](https://home.treasury.gov/system/files/136/Artificial-Intelligence-in-Financial-Services.pdf)
44. Arnold & Porter, "Colorado narrows its AI law, but the FTC says that's not enough," July 2026. [www<wbr>.arnoldporter<wbr>.com<wbr>/en<wbr>/perspectives<wbr>/advisories<wbr>/2026<wbr>/07<wbr>/colorado<wbr>-narrows<wbr>-its<wbr>-ai<wbr>-law<wbr>-but<wbr>-the<wbr>-ftc<wbr>-says<wbr>-thats<wbr>-not<wbr>-enough](https://www.arnoldporter.com/en/perspectives/advisories/2026/07/colorado-narrows-its-ai-law-but-the-ftc-says-thats-not-enough)
45. Bank of America, "Bank of America enhances EricaAssist with generative AI," July 21, 2026. [newsroom<wbr>.bankofamerica<wbr>.com<wbr>/content<wbr>/newsroom<wbr>/press<wbr>-releases<wbr>/2026<wbr>/07<wbr>/bank<wbr>-of<wbr>-america<wbr>-enhances<wbr>-ericaassist<wbr>-with<wbr>-generative<wbr>-ai<wbr>-to<wbr>-help<wbr>-<wbr>.html](https://newsroom.bankofamerica.com/content/newsroom/press-releases/2026/07/bank-of-america-enhances-ericaassist-with-generative-ai-to-help-.html)
