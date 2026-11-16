## Executive summary

On October 22, 2026, TD Bank U.S., the American arm of Toronto-Dominion Bank, launched TD Credit Assist, a multi-agent AI system that drafts commercial credit memos for its credit staff [1]. It is one of the clearest public examples so far of a large North American bank putting generative AI into the core of commercial credit work, rather than into a chatbot or a general productivity tool. This paper sets out what TD has said about Credit Assist, places it in TD's wider AI programme and in the market for AI "copilots" for credit analysts, and looks at the governance banks put around these tools. It separates what TD says about itself from what anyone else has confirmed.

Key findings:

- **Credit Assist is real and narrowly described.** TD says it turns a commercial deal file of 20 to 30 documents into a cited first draft of six credit memo sections, built in parallel by specialised agents under an orchestration layer. It is for more than 300 credit professionals who write more than 10,000 memos a year, and TD says it cuts first-draft time from up to three working days to under 30 minutes [1][2][3].
- **The quality evidence is a pre-launch test, not a production record.** TD tested the tool on 220 curated deals with input from more than 70 domain experts, and says 95% of evaluated outputs passed subject-matter expert review [1]. TD has not published the pass criteria, what counted as an "output", how the deals were chosen, or any accuracy figure from live use.
- **Humans keep the decision, by TD's own account.** TD states that required controls and professional reviews remain and that credit professionals stay responsible for lending recommendations and final decisions [1]. The tool drafts; it does not rate risk or approve loans, as far as any public source says.
- **Every performance figure comes from TD.** All press coverage found for this paper repeats the TD release [2][3]. No analyst, regulator or academic has published a check of Credit Assist. The same is true of TD's earlier mortgage agent, which TD says cut pre-adjudication from an average of 15 hours to under three minutes [4][5].
- **TD fits a wider pattern, and is ahead of most US peers in what it discloses.** DBS (August 2026) and vendor tools from Moody's, S&P Global and nCino offer similar memo-drafting agents [21][22][25][29]. Among the largest US banks, this research found no comparable public launch aimed at commercial credit analysts. Surveys show memo drafting is one of the most-piloted generative AI uses in credit, but production use was rare as of late 2024 [34].
- **The rules have a gap exactly where these tools sit.** The April 2026 US model risk guidance (SR 26-2) puts generative and agentic AI outside its scope [38][39]. Canada's OSFI Guideline E-23, which takes effect in May 2027, does cover AI models, including third-party ones, and OSFI's July 2026 bulletin asks for human accountability on high-impact decisions [43][45]. TD, a Canadian bank with a large US subsidiary under an OCC consent order, sits under both regimes [19][20].
- **For credit teams, the design choices matter more than the model.** TD's public description highlights the controls most worth copying: section-level drafting, citations back to source documents, expert-built test sets, and explicit human ownership of the decision. The unanswered questions are the ones a credit officer would ask first: how often the draft is wrong, how long review now takes, and whether analysts still learn the credit by writing it.

## Background

### Naming: "credit assist program"

The topic brief for this paper referred to TD Bank's "credit assist program". The public name is **TD Credit Assist** (the release also calls it simply "Credit Assist"), announced by TD Bank U.S. at the 2026 Evident AI Symposium in New York [1][3]. No separate "program" with that name was found; this paper treats the brief as referring to that launch. It also covers TD's earlier credit-related AI work, because TD presents Credit Assist as part of one programme.

### What a commercial credit memo is

In commercial lending the credit memo (also called a credit approval memo or credit write-up) is the document a credit officer or committee reads before approving, renewing or modifying a loan. It typically summarises the borrower and its management, the request and structure, historical and projected financial performance, repayment capacity and debt service coverage, collateral, guarantor support, industry and market context, risk rating, policy exceptions and a recommendation. Writing it means reading and reconciling many documents: financial statements, tax returns, appraisals, operating agreements, prior memos and covenant compliance certificates. That reading is where much of an analyst's time goes, and it is the part generative AI is aimed at.

The memo also does more than inform a decision. It is the bank's record of why it lent. Examiners read memos, loan reviewers test them, and in a downturn the memo is what shows whether a loss came from bad luck or bad underwriting. A tool that writes the first draft therefore touches the bank's core risk record, not only its productivity.

### TD in brief

Toronto-Dominion Bank describes itself as the sixth-largest bank in North America by assets, with about C$2.1 trillion of assets and 28.1 million clients as of January 31, 2026 [4]. TD Bank U.S. is its American banking arm. It serves more than 10 million clients from about 1,050 locations across the Northeast, Mid-Atlantic, the Carolinas and Florida, and offers retail, small business, commercial, wealth and auto finance services [1].

Two facts about TD shape how it builds and governs AI. First, it owns an in-house AI lab. TD acquired Layer 6, a Toronto machine-learning company, in 2018 [9][10]. Layer 6 built TD's first agentic AI model and the underlying capabilities for Credit Assist [1][4]. TD's 2025 annual report says more than 2,500 AI and data scientists, engineers and specialists are building new applications [11]. Most banks that want a credit copilot will buy one; TD built its own.

Second, TD Bank U.S. is operating under heavy regulatory constraint. On October 10, 2024, TD Bank, N.A. pleaded guilty to Bank Secrecy Act and money-laundering conspiracy charges. The Justice Department announced penalties of about US$1.9 billion and an independent compliance monitor [18]. The OCC issued a cease-and-desist order with a US$450 million civil money penalty and capped the combined assets of TD's two US national banks at their September 30, 2024 level [19]. TD said the cap was about US$434 billion and that its US bank would need stricter approval for new products, services, markets and stores [20]. None of this relates to credit underwriting. But it means any new system at TD Bank U.S. is launched inside a remediation programme with an outside monitor and an unusually close supervisor.

## What TD has said about Credit Assist

### The announcement

TD Bank U.S. released "TD Launches Credit Assist, Turning Days of Commercial Credit Work into Minutes" on Business Wire from Mount Laurel, New Jersey, on October 22, 2026 [1]. The release was timed to the Evident AI Symposium, after TD rose three places to tenth in the 2026 Evident AI Index of 50 large banks [1][16]. Trade coverage the same day and the next day (ROI-NJ, Financial Regulation News, stock-news sites) restated the release without new reporting [2][3].

### What it does

According to TD [1]:

- A single commercial credit review can involve 20 to 30 deal documents spanning more than 50 document types.
- Credit Assist uses an orchestration layer to coordinate specialised AI agents. The agents process, extract, analyse and organise information, and build several memo sections with a cited narrative in parallel.
- Each section goes through its own cycle of analysis, review and refinement.
- The output is a structured, cited first draft of six key credit memo sections, which credit professionals can question, verify and refine instead of starting from a blank page.

TD has not said which six sections the tool drafts, which language models it uses, whether those models are TD's own or a provider's, or where the system runs. It also has not said whether Credit Assist covers every commercial segment or only some loan sizes or industries. The release's figures (more than 300 credit professionals, more than 10,000 memos a year) suggest broad use across TD Bank U.S. commercial credit, but TD has not stated a rollout schedule or the share of memos now drafted with the tool.

![Process diagram of Credit Assist from deal file to cited draft to human review](research/td-credit-assist-ai-copilots/fig1-workflow.svg)

*Figure 1. Credit Assist as described by TD: a deal file goes to an orchestration layer that coordinates specialised agents, which build six cited memo sections in parallel for a credit professional to review [1]. The agent labels summarise the release's description; TD has not published an architecture. Diagram by the author.*

### Who built it

The release credits TD's Analytics, Intelligence & AI team with leading development and delivery, working with commercial credit professionals and with experts in technology, risk, architecture, governance and controls. Layer 6 built the underlying AI capabilities [1]. Two executives are quoted: Jill Gateman, Head of Commercial Banking at TD Bank U.S., and Ted Paris, Head of Analytics, Intelligence & AI at TD Bank U.S. A third, Sumee Seetharaman of Layer 6, speaks to building AI alongside the people who do the work [1]. Paris described the bank's view of AI as "human-led and AI-enhanced" [1].

### What TD says it achieved

TD makes three kinds of claim:

1. **Speed.** First-draft preparation falls from up to three working days to under 30 minutes [1].
2. **Quality in testing.** Testing covered 220 curated deals with input from more than 70 domain experts; credit professionals checked outputs against TD's standards during each iteration; 95% of evaluated outputs across the segments tested passed subject-matter expert review [1].
3. **Reuse.** The agents, orchestration and governance practices are meant to be reused for other business needs across the client lifecycle [1].

### How to read those numbers

The speed claim compares the maximum old time ("up to three working days") with a new ceiling ("less than 30 minutes"). It does not give an average before or after, and it measures only the first draft. The time a credit professional then spends checking citations, fixing errors and adding judgment is not reported. In a drafting tool, that review time is the number that decides whether the bank saves anything. If reviewing a cited AI draft takes most of a day, the saving is real but much smaller than "days to minutes".

The 95% figure is more useful than most vendor claims because it comes with a sample size and a description of the reviewers. Its limits are still material:

- The deals were curated, so they may be cleaner or more typical than live flow.
- "Outputs" is not defined. If an output is a section, the denominator is up to six times the deal count; if it is a full memo, a 5% failure rate means about one memo in twenty needed significant rework.
- The pass standard is not published. Passing an expert review could mean "usable as a draft" or "correct in every figure"; these are very different bars.
- The test was run by the team that built the tool, with experts who helped shape it. That is how products should be built, but it is not independent validation.

For scale: if both "more than" figures are taken at face value, TD's credit staff each write on the order of 30 or more memos a year, and a 5% failure rate applied to 10,000 memos would mean several hundred drafts a year needing substantial correction. That is an illustration, not a TD figure, and it assumes the test pass rate carries into production, which TD has not said.

### Human oversight, in TD's words

The release is explicit on accountability. TD says it keeps people accountable for decisions, that required controls and professional reviews remain in place, and that credit professionals remain responsible for lending recommendations and final decisions [1]. This matches TD's description of its mortgage agent, where a TD feature article says all AI solutions at TD are built under its Trustworthy AI approach with "a human-in-the-loop" [5].

TD's stance tracks what customers say they want. Its own February 2026 survey of 2,504 US adults found 78% used AI-enabled tools but only 18% would trust AI to make financial recommendations on its own [17].

What TD does not say is how it prevents those controls from becoming a formality. There is no public description of whether reviewers must open every citation, whether edits are logged, whether any sections are barred from AI drafting (for example the risk rating or the recommendation), or how the bank watches for analysts approving drafts too quickly.

## Credit Assist inside TD's AI programme

### The mortgage agent that came first

Credit Assist is TD's second publicised agentic system in credit, and it follows the same design as the first. On May 21, 2026, TD Bank Group announced its "first agentic AI model", built by Layer 6 with TD's technology, data, real estate secured lending and risk teams [4]. For mortgage and home equity line applications, the agents classify client documents, extract information, calculate income, validate figures against selected policy requirements, run consent checks and search for discrepancies, then produce an application summary memo for underwriters [4][5]. TD said early results showed the work falling from an average of 15 hours to an average of under three minutes, with more accurate results and lower unit cost [4]. American Banker reported that the agent had been deployed in January 2026 [6]. TD's chief executive repeated the 15-hour figure on the bank's second-quarter call [13].

The pattern is the same in both cases: agents read the file and write a memo; a human underwriter decides. The mortgage claim is weaker than the Credit Assist claim in one respect, as it gives no test sample or pass rate, and stronger in another, as it reports an average rather than a maximum.

### The rest of the programme

TD describes a broad AI programme with several components, all reported by TD or by press interviews with TD staff:

- **TD AI Prism**, a predictive foundation model announced in July 2025 to anticipate customer needs, which TD says is 20% to 30% better at identifying needs than models it replaced in testing [7][9].
- **Seven generative AI assistants** for colleagues in contact centres, branches, wealth, insurance and securities, including the TD Wealth Virtual Assistant launched in October 2025 [9][10]. TD said a knowledge tool was in more than 1,000 Canadian branches by early 2026 [15].
- **Broad employee tools.** On the second-quarter 2026 call TD said more than 40,000 employees used Copilot tools and more than 7,000 engineers used AI in development [13]. On the third-quarter call it said more than 20,000 client-facing colleagues were supported by generative AI knowledge tools, and that it was scaling AI "in our credit journeys" and had automated about a third of TD Auto Finance funding processes [14].

### What TD says AI is worth

TD has given investors dollar figures. In December 2025 it reported 75 AI use cases in fiscal 2025 delivering C$170 million of value and set a fiscal 2026 target of C$200 million [12]. On August 27, 2026, it reported C$195 million delivered in the first nine months of fiscal 2026 and said it had essentially reached the full-year target [14]. In its May 2026 release TD described a goal of C$1 billion in annual value from AI in the coming years [4]; press reports describe that goal as roughly half revenue uplift and half cost savings [13][14].

Accounts of the original Investor Day targets differ. The Logic reported in October 2026 that Investor Day set smaller initial AI figures that were later raised [55], while other outlets described a C$1 billion goal from the start. This paper relies on TD's own later wording and does not settle the Investor Day figure.

![Bar chart of TD AI value delivered against targets](research/td-credit-assist-ai-copilots/fig2-value.svg)

*Figure 2. TD's reported AI value against its targets, in Canadian dollars: C$170 million in fiscal 2025 [12], a C$200 million fiscal 2026 target [12], C$195 million in the first nine months of fiscal 2026 [14], and a goal of about C$1 billion a year [4]. All are management figures; TD has not published how "value" is measured. Chart by the author.*

These are management-defined numbers. TD has not published how it measures "value", how much comes from credit work, or what Credit Assist is expected to contribute. Fourth-quarter fiscal 2026 results were not yet out at the date of this paper.

![Timeline of TD AI milestones and related regulation, 2018 to 2027](research/td-credit-assist-ai-copilots/fig3-timeline.svg)

*Figure 3. TD AI milestones and the rules around them [1][4][6][7][9][12][14][16][19][38][43][45]. Timeline by the author.*

## The wider trend: AI copilots for credit analysts

### What the market offers

Credit memo drafting has become a standard target for generative AI because the inputs are documents and the output is structured prose. Public examples fall into three groups.

**Banks that built or deployed their own.** DBS announced on August 19, 2026 that it had scaled agentic AI for corporate bankers after a 150-person pilot, reaching about 1,500 staff globally. Its agents handle more than 70 tasks and produce a review-ready first draft of the credit memo for large and mid-size corporate clients. DBS said memos and related work take up to 40% of relationship managers' time and that it aims to cut that by at least 30%; relationship managers and credit risk managers refine the draft and own the final memo [21]. BBVA has described a custom GPT for credit risk analysts that extracts data from annual reports and compares companies with peers, in an OpenAI customer story that gives no credit-specific results [32].

**Vendor platforms.** Moody's launched its Research Assistant in December 2023, reporting that pilot users saved up to 27% of overall time [23]. A Moody's executive later told VentureBeat that its agentic system cut memo preparation from 40 hours or more to about two minutes, without a stated method [24]. In April 2026 Moody's made credit agents for memos, peer comparisons and scorecards available inside Anthropic's Claude [25]. Its case study of Taiwan's Taishin International Bank reports savings of up to 50% in some steps of credit analysis [26]. S&P Global launched an agentic Credit Memo Builder in June 2026, drawing on its ratings and data with inline citations, described as analyst-in-the-loop, without named customers or metrics [22]. nCino made its Banking Advisor generally available in June 2024, with First Horizon as a design partner, and added role-based "Digital Partners" agents in November 2025, starting with an analyst agent for underwriters [27][29]. Great Southern Bank told American Banker in December 2024 that about 150 commercial lending users used Banking Advisor to query its credit policy and draft memo narratives [28]. nCino later cited an unnamed bank's 60% to 70% faster relationship reviews [30]. Abrigo launched an agentic platform in July 2026 with community bank customers and an estimate of more than 40% less manual work [31].

**Large US banks.** This research found no public launch by JPMorgan Chase, Bank of America, Wells Fargo or Citi of a generative AI tool aimed specifically at commercial credit analysts or memo drafting. All four describe large enterprise AI programmes, and some may run such tools without announcing them. Absence of a press release is not absence of use. But among the largest North American banks, TD is the first found to name such a tool and publish test figures for it.

### Comparison

| Deployment | Built or bought | Scope | Status (public) | Headline claim | Evidence type |
|---|---|---|---|---|---|
| TD Credit Assist [1] | Built (Layer 6 and TD analytics team) | Six commercial memo sections, cited | Launched Oct 2026; 300+ credit staff | First draft from up to 3 working days to <30 min; 95% passed SME review on 220 curated deals | Bank, pre-launch test |
| TD mortgage agent [4][6] | Built (Layer 6) | Mortgage and HELOC pre-adjudication memo | Deployed Jan 2026 | Average 15 h to <3 min | Bank, "early results" |
| DBS [21] | Built | 70+ tasks; corporate credit memo draft | ~1,500 staff after 150-person pilot | At least 30% less memo time | Bank, target |
| Taishin, Moody's [26] | Bought | Corporate credit analysis and memo | In production | Up to 50% in some steps | Vendor case study |
| Great Southern, nCino [28] | Bought | Policy Q&A, memo narratives | ~150 users, Dec 2024 | "Many hours" saved | Bank, via press |
| S&P Credit Memo Builder [22] | Vendor product | Agentic memo with citations | Launched Jun 2026 | None stated | Vendor |
| BBVA [32] | Configured (ChatGPT Enterprise) | Credit analyst data extraction and peer comparison | In use | None for credit | Vendor case study |

![Matrix of what each public credit copilot claim discloses](research/td-credit-assist-ai-copilots/fig4-evidence.svg)

*Figure 4. What seven public claims about AI credit memo tools disclose: a baseline, a measurement method, a sample, whether the figure comes from production use, and whether anyone independent checked it [1][4][6][21][24][26][28][30]. Ratings are the author's reading of the cited sources. Matrix by the author.*

### What independent evidence says

There is no independent, published measurement of a generative AI credit memo tool in a bank. The closest evidence comes from surveys and from studies of adjacent work.

- **Adoption surveys.** McKinsey's 2024 survey of 24 institutions found 20% had implemented at least one generative AI use case in credit risk, and most of the rest expected to within a year [33]. Its 2025 follow-up, covering 44 institutions surveyed in the second half of 2024, found no bank had fully deployed generative AI to synthesise information for credit decisions, with 27% piloting it. Credit memo drafting was among the most-piloted uses, more than two in five firms had slowed work after disappointing results, and 41% cited model validation as a constraint [34]. The Bank of England and FCA's 2024 survey found 75% of UK firms using AI, with foundation models in 17% of use cases and only 2% of use cases fully autonomous [54].
- **Productivity studies.** In a study of 5,179 customer support agents, access to a generative AI assistant raised productivity by 14% on average and by 34% for novices [36]. In a field experiment with 758 BCG consultants, AI raised speed and quality on tasks inside the model's capability, but consultants using AI were 19 percentage points less likely to reach a correct answer on a task outside it [35]. That second result is the risk credit teams should care about: a fluent draft is most dangerous when the problem is one the model handles badly and the reviewer trusts it.
- **Credit-specific research.** A 2025 study of 2,460 Chinese small-business loans found that text refined by ChatGPT improved one measure of default prediction compared with loan officers' own notes, but not another [56]. A randomised trial of an AI assistant for about 200 commercial loan officers was registered in 2025 and had not reported results [37].

The evidence supports a cautious reading: AI drafting probably saves real time, with gains largest for less experienced staff; errors are hard to see in fluent text; and nobody has yet shown what happens to credit quality.

## Governance: what banks put around credit copilots

### What TD says it does

TD's public governance description is more detailed for the bank as a whole than for Credit Assist specifically. In interviews and releases TD describes:

- A **Trustworthy AI** framework that assesses models together on fairness, explainability, privacy and accountability, with a Trustworthy AI team that sets guardrails, trains developers and checks models before release [8][4].
- **Independent internal model validators** who review models before release, and **ongoing monitoring** after deployment [8][9].
- **Model reviews, process approvals and third-party risk assessments** for every AI solution, with controls including privacy-enhancing technology, fairness constraints and anomaly detection [9].
- For agentic systems, a **human in the loop**, agents limited to defined tasks, and a start in lower-risk back-office work [8][5].
- **Training**: TD says 475 executives attended a two-day Columbia Business School programme in 2025 and more than 500 colleagues attended Vector Institute sessions [8].

For Credit Assist itself, the release adds that governance and controls experts were part of the build and that "governance practices" are among the reusable components [1]. It does not say whether Credit Assist was treated as a model and validated as one, which is the central governance question for any LLM credit tool.

### United States

**Model risk.** On April 17, 2026, the Federal Reserve, OCC and FDIC replaced SR 11-7 with revised, principles-based model risk guidance (SR 26-2, OCC Bulletin 2026-13). The guidance says it is most relevant to banks with more than $30 billion of assets, narrows the definition of a model to complex quantitative methods, and states that generative and agentic AI models are not within its scope [38][39]. The agencies said they would issue a request for information on AI, including generative and agentic AI [39]; this research found no sign it had been issued by mid-November 2026. Fed Vice Chair for Supervision Michelle Bowman said in April 2026 that other governance practices should support adoption of generative and agentic AI, and that supervisors would weigh materiality and effects on customers, with credit decisions as an example [40].

So for a bank of TD's size, a traditional probability-of-default model sits squarely under SR 26-2, while an LLM system that drafts the memo for the same loan has no dedicated federal guidance. Banks fill the gap with general safety-and-soundness expectations, operational risk, and third-party risk management where a vendor model is involved. Reuters reported in June 2026 that OCC and Fed examiners were asking banks about AI governance, vendors and subcontractors, and whether AI systems could be shut down [41]. The third-party guidance is itself being revised: an interagency proposal issued September 11, 2026 would replace the 2023 guidance with a principles-based approach and does not address AI specifically [42].

**Fair lending and adverse action.** The Equal Credit Opportunity Act and Regulation B apply to business credit. When a business applicant is denied, the lender must provide, or make available on request, specific principal reasons; the rules for businesses with revenue of $1 million or less differ from those for larger firms [48]. The CFPB withdrew its 2022 and 2023 circulars on adverse action and complex algorithms in May 2025 [57], and a 2026 rule effective July 21, 2026 removed disparate-impact liability from Regulation B without changing the adverse action requirements [49][50]. A memo-drafting tool does not make the decision, but if its summary shapes a decline, the reasons the bank gives must be the bank's actual reasons and must be accurate. A confabulated weakness in a draft that survives review becomes a compliance problem as well as a credit one.

**TD-specific constraint.** TD said in 2024 that its US bank would need stricter approval for new products, services, markets and stores under the OCC order [20]. Credit Assist is an internal tool rather than a customer product, and TD has not said whether it went through that process. The point is not that it should have; it is that TD Bank U.S. launched a high-profile AI credit tool while under a monitor and an asset cap, which suggests the bank and its supervisor were comfortable with the controls around it. That inference is the author's, not a statement by TD or the OCC.

### Canada

TD Bank Group is a federally regulated financial institution supervised by OSFI. OSFI published its final Guideline E-23 on model risk management on September 11, 2025, effective May 1, 2027 [43][44]. Unlike SR 26-2, E-23 defines a model to include AI and machine learning methods and covers models regardless of technology, including third-party models. It expects an enterprise model inventory, a risk rating for each model, governance over the whole lifecycle from design to decommissioning, and alternative controls where a model cannot be fully explained [43][44]. It does not name generative AI, but its definition reaches it.

OSFI went further on generative AI in a July 10, 2026 technology risk bulletin. It asked institutions to ensure human oversight with accountability for material or high-impact decisions, approval checkpoints and limits on agent autonomy, and disclosure of AI use by vendors, and pointed back to E-23 [45]. Earlier, the 2024 OSFI and FCAC risk report found AI use at federally regulated institutions rising from about 30% in 2019 to about 50% in 2023, and noted that explainability is harder for generative AI than for traditional AI [46]. The 2026 FIFAI II report from OSFI, the Global Risk Institute and other agencies set out an "AGILE" framework but is expressly not guidance [47].

How OSFI expectations apply to a tool run by TD's US subsidiary is a matter of TD's enterprise risk framework and has not been described publicly. The practical point for a cross-border bank is that the stricter regime, here E-23 with its AI-inclusive model definition, tends to set the internal standard.

### Elsewhere

The EU AI Act treats AI used to evaluate the creditworthiness of natural persons as high-risk, but not business credit to companies [51]. The 2026 "digital omnibus" amendment pushed the high-risk obligations for Annex III systems to December 2, 2027 [52]. NIST's generative AI profile, though voluntary, gives the clearest list of the risks a credit copilot raises: confabulation (confident but false output), automation bias in the human-AI configuration, data privacy, information security including prompt injection, and dependence on a few upstream models [53].

### A working control set

Pulling the sources together, the controls that appear most often for credit drafting tools are these. They are a synthesis by the author, not a regulatory checklist.

| Risk | Control | Where it appears |
|---|---|---|
| Confabulated figures or facts | Every statement cited to a page; reviewer checks citations; arithmetic tie-outs | TD [1], S&P [22], NIST [53] |
| Rubber-stamp review | Named human owner per memo; edit and override logging; spot audits of approved drafts | TD [1], DBS [21], OSFI bulletin [45] |
| Hidden model change | Inventory entry and risk rating; re-test on a fixed deal set when the model or prompts change | OSFI E-23 [43], TD [8][9] |
| Scope creep into decisions | Explicit list of sections the tool may draft; risk rating and recommendation reserved to humans | TD [1], OSFI bulletin [45] |
| Vendor and concentration risk | Third-party assessment; vendor discloses AI use and subcontractors | TD [9], OSFI [45], interagency proposal [42] |
| Wrong reasons in a decline | Adverse action reasons drawn from the approved memo, not the draft | Regulation B [48] |

## Implications for lenders and credit teams

1. **Measure review time, not draft time.** The draft is fast for everyone. What determines value is how long an analyst takes to get from AI draft to approvable memo, and how that compares with writing it. Track both, by deal type and analyst experience, from the first pilot.
2. **Build the test set before the tool.** TD's 220 curated deals and 70-plus experts are the most transferable part of its approach. A bank buying a vendor tool can do the same at smaller scale: a fixed set of its own past deals, hand-marked for the facts that matter (figures, covenants, guarantor obligations, policy exceptions), scored section by section, and re-run whenever the model or prompts change.
3. **Publish the pass standard internally.** "Passed expert review" should mean something written down: for example, no material numeric error, no unsupported statement, every figure traceable. Without that, a pass rate cannot be compared across versions.
4. **Draft the analysis, not the judgment.** TD and DBS both keep recommendation and decision with people [1][21]. A prudent line is to let the tool draft descriptive sections (borrower, financial summary, collateral, document checks) and require the analyst to write the risk assessment and recommendation, or at least to rewrite it.
5. **Treat it as a model even where the guidance does not require it.** SR 26-2 leaves LLM tools out of scope, but E-23 does not, and examiners are already asking about AI [41][43]. Putting the tool in the model inventory with a risk rating, owner, validation plan and monitoring costs little and answers the examiner's first question.
6. **Watch the training pipeline.** Junior analysts traditionally learn credit by writing memos. If the tool writes the first draft, banks need another way to build that judgment, or in a few years they will have reviewers who have never done the work they are reviewing. The productivity research suggests novices gain most from AI [36]; it does not show they learn as much.
7. **Build or buy is a scale question.** TD could build Credit Assist because it owns a 2,500-person AI and data organisation and an AI lab [11]. Community and regional banks will mostly buy from Moody's, S&P, nCino, Abrigo or newer vendors. The governance work (test sets, pass standards, logging, ownership) is the same either way, and it is the part vendors cannot do for the bank.

## Open questions and limitations

- **No independent check.** Every Credit Assist figure comes from TD's release; the trade coverage adds nothing independent [1][2][3]. The same holds for the mortgage agent [4][6].
- **Undisclosed design.** TD has not named the model or provider, the six sections, the deployment environment, or how citations are generated and verified.
- **Production results.** TD has not published production accuracy, review time, adoption rates, or any effect on approval times or credit quality. The 95% figure is from pre-launch testing on curated deals.
- **Model governance status.** It is not public whether Credit Assist is in TD's model inventory or was validated by its independent model validators, though TD says that is its general practice [8].
- **Value attribution.** TD's AI value figures are management measures without a published method, and accounts of the Investor Day targets differ [12][14][55].
- **Peer coverage.** The absence of public launches at the largest US banks may reflect disclosure choices rather than practice. Vendor case studies cited here are marketing documents.
- **Regulatory timing.** The US AI request for information had not been issued at the time of writing, the third-party guidance is still a proposal, and E-23 takes effect in May 2027. Each could change the picture.
- **Source access.** TD's own newsroom page for the Credit Assist release could not be retrieved automatically; this paper relied on the Business Wire text as republished by Stock Titan, checked against two trade reports [1][2][3].

## Sources

1. TD Bank U.S., "TD Launches Credit Assist, Turning Days of Commercial Credit Work into Minutes," Business Wire, Mount Laurel, N.J., October 22, 2026. Text read via the Stock Titan republication; TD newsroom copy at stories.td.com. [www<wbr>.stocktitan<wbr>.net<wbr>/news<wbr>/TD<wbr>/td<wbr>-launches<wbr>-credit<wbr>-assist<wbr>-turning<wbr>-days<wbr>-of<wbr>-commercial<wbr>-credit<wbr>-work<wbr>-wft03qs707ms<wbr>.html](https://www.stocktitan.net/news/TD/td-launches-credit-assist-turning-days-of-commercial-credit-work-wft03qs707ms.html) [stories<wbr>.td<wbr>.com<wbr>/us<wbr>/en<wbr>/article<wbr>/td<wbr>-launches<wbr>-credit<wbr>-assist<wbr>-turning<wbr>-days<wbr>-of<wbr>-commercial<wbr>-credit<wbr>-work<wbr>-into<wbr>-minutes](https://stories.td.com/us/en/article/td-launches-credit-assist-turning-days-of-commercial-credit-work-into-minutes)
2. ROI-NJ, "TD Bank debuts Credit Assist, reducing time to perform commercial credit work," October 22, 2026. [www<wbr>.roi<wbr>-nj<wbr>.com<wbr>/2026<wbr>/10<wbr>/22<wbr>/finance<wbr>/td<wbr>-bank<wbr>-debuts<wbr>-credit<wbr>-assist<wbr>-reducing<wbr>-time<wbr>-to<wbr>-perform<wbr>-commercial<wbr>-credit<wbr>-work<wbr>/](https://www.roi-nj.com/2026/10/22/finance/td-bank-debuts-credit-assist-reducing-time-to-perform-commercial-credit-work/)
3. Melina Druga, "TD Bank U.S. launches AI tool," Financial Regulation News, October 23, 2026. [financialregnews<wbr>.com<wbr>/td<wbr>-bank<wbr>-u<wbr>-s<wbr>-launches<wbr>-ai<wbr>-tool<wbr>/](https://financialregnews.com/td-bank-u-s-launches-ai-tool/)
4. TD Bank Group, "TD launches agentic AI to transform real estate secured lending," CNW, Toronto, May 21, 2026. [stories<wbr>.td<wbr>.com<wbr>/ca<wbr>/en<wbr>/news<wbr>/2026<wbr>-05<wbr>-21<wbr>-td<wbr>-launches<wbr>-agentic<wbr>-ai<wbr>-to<wbr>-transform<wbr>-real<wbr>-estate<wbr>-secured<wbr>-lend](https://stories.td.com/ca/en/news/2026-05-21-td-launches-agentic-ai-to-transform-real-estate-secured-lend)
5. TD Stories, "How TD developed its first agentic AI tool," May 21, 2026. [stories<wbr>.td<wbr>.com<wbr>/ca<wbr>/en<wbr>/article<wbr>/agentic<wbr>-ai](https://stories.td.com/ca/en/article/agentic-ai)
6. Penny Crosman, "TD's new AI agent shaves 15 hours off mortgage decisions," American Banker, May 28, 2026. [www<wbr>.americanbanker<wbr>.com<wbr>/news<wbr>/tds<wbr>-new<wbr>-ai<wbr>-agent<wbr>-shaves<wbr>-15<wbr>-hours<wbr>-off<wbr>-mortgage<wbr>-decisions](https://www.americanbanker.com/news/tds-new-ai-agent-shaves-15-hours-off-mortgage-decisions)
7. TD Stories, "3 things to know about TD AI Prism, the breakthrough AI model at TD," July 10, 2025. [stories<wbr>.td<wbr>.com<wbr>/ca<wbr>/en<wbr>/article<wbr>/foundation<wbr>-ai<wbr>-model](https://stories.td.com/ca/en/article/foundation-ai-model)
8. Robert Lewis, "Inside TD's Responsible AI Strategy," Fintech.ca, March 31, 2026. [www<wbr>.fintech<wbr>.ca<wbr>/2026<wbr>/03<wbr>/31<wbr>/inside<wbr>-td<wbr>-responsible<wbr>-ai<wbr>-strategy<wbr>/](https://www.fintech.ca/2026/03/31/inside-td-responsible-ai-strategy/)
9. Robert Lewis, "How TD Is Scaling AI Across Banking," Fintech.ca, February 9, 2026. [www<wbr>.fintech<wbr>.ca<wbr>/2026<wbr>/02<wbr>/09<wbr>/how<wbr>-td<wbr>-is<wbr>-scaling<wbr>-ai<wbr>-across<wbr>-banking<wbr>/](https://www.fintech.ca/2026/02/09/how-td-is-scaling-ai-across-banking/)
10. Knowlton Thomas, TD Wealth Virtual Assistant and Layer 6, Fintech.ca, October 21, 2025. [www<wbr>.fintech<wbr>.ca<wbr>/2025<wbr>/10<wbr>/21<wbr>/td<wbr>-bank<wbr>-army<wbr>-ai<wbr>-assistants<wbr>-empower<wbr>-workforce<wbr>/](https://www.fintech.ca/2025/10/21/td-bank-army-ai-assistants-empower-workforce/)
11. TD Bank Group, 2025 Annual Report, Group President and CEO message. [td<wbr>.com<wbr>/ca<wbr>/en<wbr>/about<wbr>-td<wbr>/for<wbr>-investors<wbr>/investor<wbr>-relations<wbr>/financial<wbr>-information<wbr>/annual<wbr>-report<wbr>-2025<wbr>/group<wbr>-president<wbr>-and<wbr>-ceo<wbr>-message](https://td.com/ca/en/about-td/for-investors/investor-relations/financial-information/annual-report-2025/group-president-and-ceo-message)
12. PYMNTS, "TD Bank Group implemented 75 AI use cases in 2025," December 4, 2025. [www<wbr>.pymnts<wbr>.com<wbr>/artificial<wbr>-intelligence<wbr>-2<wbr>/2025<wbr>/td<wbr>-bank<wbr>-group<wbr>-implemented<wbr>-75<wbr>-ai<wbr>-use<wbr>-cases<wbr>-in<wbr>-2025<wbr>/](https://www.pymnts.com/artificial-intelligence-2/2025/td-bank-group-implemented-75-ai-use-cases-in-2025/)
13. PYMNTS, "TD Bank says AI is cutting mortgage approvals from 15 hours to 3 minutes," May 28, 2026. [www<wbr>.pymnts<wbr>.com<wbr>/earnings<wbr>/2026<wbr>/td<wbr>-bank<wbr>-says<wbr>-ai<wbr>-is<wbr>-cutting<wbr>-mortgage<wbr>-approvals<wbr>-from<wbr>-15<wbr>-hours<wbr>-to<wbr>-3<wbr>-minutes<wbr>/](https://www.pymnts.com/earnings/2026/td-bank-says-ai-is-cutting-mortgage-approvals-from-15-hours-to-3-minutes/)
14. PYMNTS, TD Bank third-quarter fiscal 2026 earnings coverage, August 27, 2026. [www<wbr>.pymnts<wbr>.com<wbr>/earnings<wbr>/2026<wbr>/td<wbr>-bank<wbr>-unlocks<wbr>-141<wbr>-million<wbr>-dollars<wbr>-ai<wbr>-value<wbr>-months<wbr>-ahead<wbr>-schedule<wbr>/](https://www.pymnts.com/earnings/2026/td-bank-unlocks-141-million-dollars-ai-value-months-ahead-schedule/)
15. Banking Dive, TD Bank first-quarter fiscal 2026 call coverage (AI and insurance cost reductions), March 3, 2026. [www<wbr>.bankingdive<wbr>.com<wbr>/news<wbr>/td<wbr>-bank<wbr>-150m<wbr>-insurance<wbr>-cost<wbr>-reductions<wbr>-ai<wbr>-chun<wbr>-salom<wbr>/813637<wbr>/](https://www.bankingdive.com/news/td-bank-150m-insurance-cost-reductions-ai-chun-salom/813637/)
16. Investment Executive, "RBC, TD rank among top 10 banks for AI maturity," October 6, 2026. [www<wbr>.investmentexecutive<wbr>.com<wbr>/industry<wbr>-news<wbr>/rbc<wbr>-td<wbr>-rank<wbr>-among<wbr>-top<wbr>-10<wbr>-banks<wbr>-for<wbr>-ai<wbr>-maturity<wbr>/](https://www.investmentexecutive.com/industry-news/rbc-td-rank-among-top-10-banks-for-ai-maturity/)
17. TD Bank U.S., "Nearly 80% of Americans use AI tools, but most still want humans making financial decisions, TD survey finds," March 31, 2026. [stories<wbr>.td<wbr>.com<wbr>/us<wbr>/en<wbr>/article<wbr>/nearly<wbr>-80<wbr>-of<wbr>-americans<wbr>-use<wbr>-ai<wbr>-tools<wbr>-but<wbr>-most<wbr>-still<wbr>-want<wbr>-humans<wbr>-making<wbr>-financial<wbr>-decisions<wbr>-td<wbr>-survey<wbr>-finds](https://stories.td.com/us/en/article/nearly-80-of-americans-use-ai-tools-but-most-still-want-humans-making-financial-decisions-td-survey-finds)
18. US Department of Justice, "TD Bank pleads guilty to Bank Secrecy Act and money laundering conspiracy violations," October 10, 2024. [www<wbr>.justice<wbr>.gov<wbr>/archives<wbr>/opa<wbr>/pr<wbr>/td<wbr>-bank<wbr>-pleads<wbr>-guilty<wbr>-bank<wbr>-secrecy<wbr>-act<wbr>-and<wbr>-money<wbr>-laundering<wbr>-conspiracy<wbr>-violations<wbr>-18b](https://www.justice.gov/archives/opa/pr/td-bank-pleads-guilty-bank-secrecy-act-and-money-laundering-conspiracy-violations-18b)
19. Office of the Comptroller of the Currency, News Release 2024-116, enforcement action against TD Bank, N.A. and TD Bank USA, N.A., October 10, 2024. [www<wbr>.occ<wbr>.gov<wbr>/news<wbr>-issuances<wbr>/news<wbr>-releases<wbr>/2024<wbr>/nr<wbr>-occ<wbr>-2024<wbr>-116<wbr>.html](https://www.occ.gov/news-issuances/news-releases/2024/nr-occ-2024-116.html)
20. The Toronto-Dominion Bank, Form 6-K exhibit 99.1 on the US AML resolution, October 10, 2024. [www<wbr>.sec<wbr>.gov<wbr>/Archives<wbr>/edgar<wbr>/data<wbr>/947263<wbr>/000119312524236027<wbr>/d829657dex991<wbr>.htm](https://www.sec.gov/Archives/edgar/data/947263/000119312524236027/d829657dex991.htm)
21. DBS, "DBS scales agentic AI to transform way of working for corporate bankers," August 19, 2026. [www<wbr>.dbs<wbr>.com<wbr>/newsroom<wbr>/DBS<wbr>_scales<wbr>_agentic<wbr>_AI<wbr>_to<wbr>_transform<wbr>_way<wbr>_of<wbr>_working<wbr>_for<wbr>_corporate<wbr>_bankers<wbr>_freeing<wbr>_up<wbr>_time<wbr>_for<wbr>_more<wbr>_strategic<wbr>_client<wbr>_engagements](https://www.dbs.com/newsroom/DBS_scales_agentic_AI_to_transform_way_of_working_for_corporate_bankers_freeing_up_time_for_more_strategic_client_engagements)
22. S&P Global, "S&P Global Launches Agentic AI-Powered Credit Memo Builder to Streamline Credit Analysis," June 4, 2026. [press<wbr>.spglobal<wbr>.com<wbr>/2026<wbr>-06<wbr>-04<wbr>-S<wbr>-P<wbr>-Global<wbr>-Launches<wbr>-Agentic<wbr>-AI<wbr>-Powered<wbr>-Credit<wbr>-Memo<wbr>-Builder<wbr>-TM<wbr>-to<wbr>-Streamline<wbr>-Credit<wbr>-Analysis](https://press.spglobal.com/2026-06-04-S-P-Global-Launches-Agentic-AI-Powered-Credit-Memo-Builder-TM-to-Streamline-Credit-Analysis)
23. Moody's, launch of Moody's Research Assistant, Business Wire, December 5, 2023. [www<wbr>.businesswire<wbr>.com<wbr>/news<wbr>/home<wbr>/20231205410924<wbr>/en](https://www.businesswire.com/news/home/20231205410924/en)
24. VentureBeat, "Moody's cut credit memo prep from 40 hours to 2 minutes with modular AI," September 19, 2025. [venturebeat<wbr>.com<wbr>/technology<wbr>/moodys<wbr>-cut<wbr>-credit<wbr>-memo<wbr>-prep<wbr>-from<wbr>-40<wbr>-hours<wbr>-to<wbr>-2<wbr>-minutes<wbr>-with<wbr>-modular<wbr>-ai](https://venturebeat.com/technology/moodys-cut-credit-memo-prep-from-40-hours-to-2-minutes-with-modular-ai)
25. Moody's, "Moody's Brings Credit and Compliance Workflows Directly into Anthropic's Claude," Business Wire, April 9, 2026. [www<wbr>.businesswire<wbr>.com<wbr>/news<wbr>/home<wbr>/20260409047490<wbr>/en<wbr>/Moodys<wbr>-Brings<wbr>-Credit<wbr>-and<wbr>-Compliance<wbr>-Workflows<wbr>-Directly<wbr>-into<wbr>-Anthropics<wbr>-Claude](https://www.businesswire.com/news/home/20260409047490/en/Moodys-Brings-Credit-and-Compliance-Workflows-Directly-into-Anthropics-Claude)
26. Moody's, "Taishin International Bank modernizes credit assessment workflow with Moody's Credit Memo," case study, May 12, 2026. [www<wbr>.moodys<wbr>.com<wbr>/web<wbr>/en<wbr>/us<wbr>/insights<wbr>/lending<wbr>/Taishin<wbr>-International<wbr>-Bank<wbr>-modernizes<wbr>-credit<wbr>-assessment<wbr>-workflow<wbr>-with<wbr>-Moodys<wbr>-Credit<wbr>-Memo<wbr>.html](https://www.moodys.com/web/en/us/insights/lending/Taishin-International-Bank-modernizes-credit-assessment-workflow-with-Moodys-Credit-Memo.html)
27. nCino, "nCino Deploying Banking Advisor, a Generative AI Solution," GlobeNewswire, June 17, 2024. [www<wbr>.globenewswire<wbr>.com<wbr>/news<wbr>-release<wbr>/2024<wbr>/06<wbr>/17<wbr>/2899556<wbr>/0<wbr>/en<wbr>/nCino<wbr>-Deploying<wbr>-Banking<wbr>-Advisor<wbr>-a<wbr>-Generative<wbr>-AI<wbr>-Solution<wbr>-to<wbr>-Drive<wbr>-New<wbr>-Efficiencies<wbr>-in<wbr>-Financial<wbr>-Institutions<wbr>.html](https://www.globenewswire.com/news-release/2024/06/17/2899556/0/en/nCino-Deploying-Banking-Advisor-a-Generative-AI-Solution-to-Drive-New-Efficiencies-in-Financial-Institutions.html)
28. American Banker, "Great Southern loan officers use gen AI to chat with data," December 5, 2024. [www<wbr>.americanbanker<wbr>.com<wbr>/news<wbr>/great<wbr>-southern<wbr>-loan<wbr>-officers<wbr>-use<wbr>-gen<wbr>-ai<wbr>-to<wbr>-chat<wbr>-with<wbr>-data](https://www.americanbanker.com/news/great-southern-loan-officers-use-gen-ai-to-chat-with-data)
29. nCino, "nCino Introduces Digital Partners, Role-Based Agents," November 4, 2025. [ncino<wbr>.com<wbr>/news<wbr>/ncino<wbr>-introduces<wbr>-digital<wbr>-partners<wbr>-role<wbr>-based<wbr>-agents](https://ncino.com/news/ncino-introduces-digital-partners-role-based-agents)
30. The Fintech Times, "nCino AI agent slashes bank credit review times by 70%," April 14, 2026. [thefintechtimes<wbr>.com<wbr>/ncino<wbr>-ai<wbr>-agent<wbr>-slashes<wbr>-bank<wbr>-credit<wbr>-review<wbr>-times<wbr>-by<wbr>-70<wbr>/](https://thefintechtimes.com/ncino-ai-agent-slashes-bank-credit-review-times-by-70/)
31. Amazon (AWS press), "Abrigo launches agentic AI platform," July 8, 2026. [press<wbr>.aboutamazon<wbr>.com<wbr>/aws<wbr>/2026<wbr>/7<wbr>/abrigo<wbr>-launches<wbr>-agentic<wbr>-ai<wbr>-platform](https://press.aboutamazon.com/aws/2026/7/abrigo-launches-agentic-ai-platform)
32. OpenAI, "BBVA" customer story. [openai<wbr>.com<wbr>/index<wbr>/bbva](https://openai.com/index/bbva)
33. McKinsey & Company, "Embracing generative AI in credit risk," July 1, 2024. [www<wbr>.mckinsey<wbr>.com<wbr>/capabilities<wbr>/risk<wbr>-and<wbr>-resilience<wbr>/our<wbr>-insights<wbr>/embracing<wbr>-generative<wbr>-ai<wbr>-in<wbr>-credit<wbr>-risk](https://www.mckinsey.com/capabilities/risk-and-resilience/our-insights/embracing-generative-ai-in-credit-risk)
34. McKinsey & Company, "Banking on gen AI in the credit business: The route to value creation," July 8, 2025. [www<wbr>.mckinsey<wbr>.com<wbr>/capabilities<wbr>/risk<wbr>-and<wbr>-resilience<wbr>/our<wbr>-insights<wbr>/banking<wbr>-on<wbr>-gen<wbr>-ai<wbr>-in<wbr>-the<wbr>-credit<wbr>-business<wbr>-the<wbr>-route<wbr>-to<wbr>-value<wbr>-creation](https://www.mckinsey.com/capabilities/risk-and-resilience/our-insights/banking-on-gen-ai-in-the-credit-business-the-route-to-value-creation)
35. F. Dell'Acqua et al., "Navigating the Jagged Technological Frontier," Harvard Business School Working Paper 24-013, September 2023. [mitsloan<wbr>.mit<wbr>.edu<wbr>/sites<wbr>/default<wbr>/files<wbr>/2023<wbr>-10<wbr>/SSRN<wbr>-id4573321<wbr>.pdf](https://mitsloan.mit.edu/sites/default/files/2023-10/SSRN-id4573321.pdf)
36. E. Brynjolfsson, D. Li and L. Raymond, "Generative AI at Work," NBER Working Paper 31161 (Quarterly Journal of Economics, 2025). [www<wbr>.nber<wbr>.org<wbr>/papers<wbr>/w31161](https://www.nber.org/papers/w31161)
37. AEA RCT Registry, "Humans + AI in Commercial Banking," trial AEARCTR-0016412, registered 2025. [www<wbr>.socialscienceregistry<wbr>.org<wbr>/trials<wbr>/16412](https://www.socialscienceregistry.org/trials/16412)
38. Board of Governors of the Federal Reserve System, SR 26-2, "Revised Guidance on Model Risk Management," April 17, 2026. [www<wbr>.federalreserve<wbr>.gov<wbr>/supervisionreg<wbr>/srletters<wbr>/SR2602<wbr>.pdf](https://www.federalreserve.gov/supervisionreg/srletters/SR2602.pdf)
39. Office of the Comptroller of the Currency, News Release 2026-29, revised model risk management guidance, April 17, 2026. [www<wbr>.occ<wbr>.gov<wbr>/news<wbr>-issuances<wbr>/news<wbr>-releases<wbr>/2026<wbr>/nr<wbr>-occ<wbr>-2026<wbr>-29<wbr>.html](https://www.occ.gov/news-issuances/news-releases/2026/nr-occ-2026-29.html)
40. Michelle W. Bowman, "Artificial Intelligence in the Financial System," speech delivered April 27, 2026, posted May 1, 2026. [www<wbr>.federalreserve<wbr>.gov<wbr>/newsevents<wbr>/speech<wbr>/bowman20260501a<wbr>.htm](https://www.federalreserve.gov/newsevents/speech/bowman20260501a.htm)
41. Reuters, "US bank regulators ramp up scrutiny of AI use at financial companies," June 12, 2026. [www<wbr>.reuters<wbr>.com<wbr>/business<wbr>/finance<wbr>/us<wbr>-bank<wbr>-regulators<wbr>-ramp<wbr>-up<wbr>-scrutiny<wbr>-ai<wbr>-use<wbr>-financial<wbr>-companies<wbr>-2026<wbr>-06<wbr>-12<wbr>/](https://www.reuters.com/business/finance/us-bank-regulators-ramp-up-scrutiny-ai-use-financial-companies-2026-06-12/)
42. Board of Governors of the Federal Reserve System, press release on proposed interagency third-party risk management guidance, September 11, 2026. [www<wbr>.federalreserve<wbr>.gov<wbr>/newsevents<wbr>/pressreleases<wbr>/bcreg20260911a<wbr>.htm](https://www.federalreserve.gov/newsevents/pressreleases/bcreg20260911a.htm)
43. Office of the Superintendent of Financial Institutions, Guideline E-23, "Model Risk Management (2027)," September 11, 2025, effective May 1, 2027. [www<wbr>.osfi<wbr>-bsif<wbr>.gc<wbr>.ca<wbr>/en<wbr>/guidance<wbr>/guidance<wbr>-library<wbr>/guideline<wbr>-e<wbr>-23<wbr>-model<wbr>-risk<wbr>-management<wbr>-2027](https://www.osfi-bsif.gc.ca/en/guidance/guidance-library/guideline-e-23-model-risk-management-2027)
44. OSFI, "Backgrounder: Guideline E-23 Model Risk Management," September 2025. [www<wbr>.osfi<wbr>-bsif<wbr>.gc<wbr>.ca<wbr>/en<wbr>/news<wbr>/backgrounder<wbr>-guideline<wbr>-e<wbr>-23<wbr>-model<wbr>-risk<wbr>-management](https://www.osfi-bsif.gc.ca/en/news/backgrounder-guideline-e-23-model-risk-management)
45. OSFI, Technology Risk Bulletin, "Generative and agentic artificial intelligence: implications for technology, cyber security and operational risk," July 10, 2026. [www<wbr>.osfi<wbr>-bsif<wbr>.gc<wbr>.ca<wbr>/en<wbr>/risks<wbr>/technology<wbr>-cyber<wbr>-risk<wbr>-management<wbr>/technology<wbr>-risk<wbr>-bulletin<wbr>/generative<wbr>-agentic<wbr>-artificial<wbr>-intelligence<wbr>-implications<wbr>-technology<wbr>-cyber<wbr>-security<wbr>-operational](https://www.osfi-bsif.gc.ca/en/risks/technology-cyber-risk-management/technology-risk-bulletin/generative-agentic-artificial-intelligence-implications-technology-cyber-security-operational)
46. OSFI and FCAC, "Risk report: AI uses and risks at federally regulated financial institutions," September 24, 2024. [www<wbr>.osfi<wbr>-bsif<wbr>.gc<wbr>.ca<wbr>/en<wbr>/about<wbr>-osfi<wbr>/reports<wbr>-publications<wbr>/osfi<wbr>-fcac<wbr>-risk<wbr>-report<wbr>-ai<wbr>-uses<wbr>-risks<wbr>-federally<wbr>-regulated<wbr>-financial<wbr>-institutions](https://www.osfi-bsif.gc.ca/en/about-osfi/reports-publications/osfi-fcac-risk-report-ai-uses-risks-federally-regulated-financial-institutions)
47. OSFI, Global Risk Institute et al., "FIFAI II: AI risks and opportunities, adopting an AGILE framework for Canadian financial services," March 2026. [www<wbr>.osfi<wbr>-bsif<wbr>.gc<wbr>.ca<wbr>/en<wbr>/about<wbr>-osfi<wbr>/reports<wbr>-publications<wbr>/fifai<wbr>-ii<wbr>-ai<wbr>-risks<wbr>-opportunities<wbr>-adopting<wbr>-agile<wbr>-framework<wbr>-canadian<wbr>-financial<wbr>-services](https://www.osfi-bsif.gc.ca/en/about-osfi/reports-publications/fifai-ii-ai-risks-opportunities-adopting-agile-framework-canadian-financial-services)
48. 12 CFR 1002.9, Regulation B, notifications (Legal Information Institute). [www<wbr>.law<wbr>.cornell<wbr>.edu<wbr>/cfr<wbr>/text<wbr>/12<wbr>/1002<wbr>.9](https://www.law.cornell.edu/cfr/text/12/1002.9)
49. Consumer Financial Protection Bureau, Equal Credit Opportunity Act (Regulation B) final rule, April 2026, effective July 21, 2026. [www<wbr>.consumerfinance<wbr>.gov<wbr>/rules<wbr>-policy<wbr>/final<wbr>-rules<wbr>/equal<wbr>-credit<wbr>-opportunity<wbr>-act<wbr>-regulation<wbr>-b<wbr>/](https://www.consumerfinance.gov/rules-policy/final-rules/equal-credit-opportunity-act-regulation-b/)
50. Venable LLP, "CFPB makes significant changes to Regulation B," May 2026. [www<wbr>.venable<wbr>.com<wbr>/insights<wbr>/publications<wbr>/2026<wbr>/05<wbr>/cfpb<wbr>-makes<wbr>-significant<wbr>-changes<wbr>-to<wbr>-regulation<wbr>-b](https://www.venable.com/insights/publications/2026/05/cfpb-makes-significant-changes-to-regulation-b)
51. Regulation (EU) 2024/1689 (Artificial Intelligence Act), Annex III, point 5(b). [eur<wbr>-lex<wbr>.europa<wbr>.eu<wbr>/eli<wbr>/reg<wbr>/2024<wbr>/1689<wbr>/oj](https://eur-lex.europa.eu/eli/reg/2024/1689/oj)
52. Regulation (EU) 2026/1744 amending the AI Act (digital omnibus on AI), Official Journal, July 2026. [eur<wbr>-lex<wbr>.europa<wbr>.eu<wbr>/legal<wbr>-content<wbr>/EN<wbr>/TXT<wbr>/PDF<wbr>/<wbr>?uri<wbr>=OJ:L<wbr>_202601744](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=OJ:L_202601744)
53. National Institute of Standards and Technology, NIST AI 600-1, "Generative Artificial Intelligence Profile," July 2024. [nvlpubs<wbr>.nist<wbr>.gov<wbr>/nistpubs<wbr>/ai<wbr>/NIST<wbr>.AI<wbr>.600<wbr>-1<wbr>.pdf](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)
54. Bank of England and FCA, "Artificial intelligence in UK financial services – 2024," November 21, 2024. [www<wbr>.bankofengland<wbr>.co<wbr>.uk<wbr>/report<wbr>/2024<wbr>/artificial<wbr>-intelligence<wbr>-in<wbr>-uk<wbr>-financial<wbr>-services<wbr>-2024](https://www.bankofengland.co.uk/report/2024/artificial-intelligence-in-uk-financial-services-2024)
55. The Logic, coverage of the 2026 Evident AI Index and Canadian bank AI returns, October 6, 2026. [thelogic<wbr>.co<wbr>/news<wbr>/td<wbr>-rbc<wbr>-evident<wbr>-ai<wbr>-returns<wbr>/](https://thelogic.co/news/td-rbc-evident-ai-returns/)
56. Y. Wu et al., LLM-refined loan officer assessments and small-business default prediction, arXiv:2503.18029, 2025. [arxiv<wbr>.org<wbr>/pdf<wbr>/2503<wbr>.18029](https://arxiv.org/pdf/2503.18029)
57. Forvis Mazars, "The Consumer Financial Protection Bureau withdraws 67 interpretive rules, policy statements and advisory opinions," May 2025. [www<wbr>.forvismazars<wbr>.us<wbr>/forsights<wbr>/2025<wbr>/05<wbr>/the<wbr>-consumer<wbr>-financial<wbr>-protection<wbr>-bureau<wbr>-withdraws<wbr>-67<wbr>-interpretive<wbr>-rules<wbr>-policy<wbr>-statements<wbr>-and<wbr>-adv](https://www.forvismazars.us/forsights/2025/05/the-consumer-financial-protection-bureau-withdraws-67-interpretive-rules-policy-statements-and-adv)
