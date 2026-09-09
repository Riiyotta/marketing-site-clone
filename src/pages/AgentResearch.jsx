import AgentDetail from '../components/blocks/AgentDetail'

/* ---------------------------------------------------------------------------
   /agents/research — live page height 6016px (footer 1175 of that).

   Same `apps_page_wrap` template as /agents/optimization and
   /agents/translation, so this file is content only. Live sections
   (.scrape/plat-agents-research.json):
      315 animation plate / 80 space / 25 breadcrumb
     3216 sticky_scroll_content_wrap
      542 accordion_1
      112 g_section_space
      446 hero_vertical_wrap  (this page's closing band carries NO body line)
--------------------------------------------------------------------------- */

const TOC = [
  { label: 'What is the Research Agent?', href: '#overview' },
  { label: 'Key benefits of the Research Agent', href: '#benefits' },
  { label: 'Use cases for the Research Agent', href: '#use-cases' },
  { label: 'Common questions about the Research Agent', href: '#faqs' },
]

const TRANSCRIPT = [
  "Meredith: Hey y'all, my name is Meredith and I'm an enablement specialist here at Jasper.",
  "Meredith: Today I'm going to walk through the Research Agent.",
  'Meredith: This powerful agent turns hours in manual searching, source vetting, clustering and brief creation into minutes so that your team can move faster with more confidence beyond speed.',
  'Meredith: The Research Agent improves reliability and consistency by tracking every insight back to credible sources and structuring findings into actual outputs.',
  'Meredith: The result is stronger content and strategies, fewer blind spots and a clear edge over competitors.',
  "Meredith: It's both an efficiency booster and a strategic clarity engine for your research workflows.",
  'Meredith: Think of it as your AI powered research partner.',
  'Meredith: You provide a topic question or prompt and it identifies credible sources, sifts through relevant information and presents clear sighted insights for immediate use.',
  'Meredith: If you have tried basic AI for research before, you may have seen generic summaries or missing citations.',
  'Meredith: The Research Agent is a major leap forward.',
  'Meredith: It uses a tool based architecture to interpret your intent, select the right discovery and analysis steps, and produce purpose built deliverables such as briefs, comparisons, outlines and more.',
  "Meredith: Let's get into it. To access the agent, you'll need to open up chat.",
  'Meredith: You can do this by clicking the Chat button at the toolbar at the bottom of your project.',
  'Meredith: From here, click the Agents button at the bottom of the chat and select Research Agent to ensure the best research outcome.',
  'Meredith: Specify your prompt with a clear objective and define the scope by listing things such as topics, competitors and time frames.',
  'Meredith: And choose your desired format of the output such as a brief, comparison, outline, FAQ or talk.',
  "Meredith: Now let's walk through an example.",
  "Meredith: Let's say you wanted to create a trend brief with sources.",
  'Meredith: You could use a prompt such as: Summarize the latest trends in B2B AI adoption over the past 12 months.',
  'Meredith: Include drivers, barriers, notable stats, and expert commentary with citations, and then go ahead and send that off to Jasper.',
  'Meredith: Remember, this process might take slightly longer than a typical chat prompt as Jasper is retrieving precise and relevant information for your specific request.',
  'Meredith: And there you have it.',
  'Meredith: The agent found credible reports and articles, then condensed them into clear scannable brief, ideal for executive summaries or content planning, and even included citations and sources.',
  'Meredith: Upload them.',
  'Meredith: You can move this over to your Canvas by clicking this Canvas button at the bottom.',
  "Meredith: As you can see, the Research Agent isn't just a feature, it's an upgrade to your entire research workflow.",
  'Meredith: In summary, the Research Agent offers massive time savings, strategic insights and better outcomes.',
  "Meredith: Whether you're analyzing a market, preparing a brief, or creating authoritative content, the Research Agent is here to help make your life easier.",
]

const BODY = [
  { h2: 'What is the Research Agent?', id: 'overview' },
  { p: 'The Research Agent conducts multi-step research workflows within Jasper. It organizes information according to your specific instructions, adapts its approach based on your clarifying inputs, and presents findings in an accessible format aligned with your Jasper IQ.' },
  { h3: 'How the Research Agent works', size: 38 },
  { p: 'The Research Agent transforms your research question into a fully cited, comprehensive report in 2-10 minutes, maintaining alignment with your Jasper Knowledge Base for accuracy and relevance.' },
]

const BENEFITS = {
  title: 'Key benefits of the Research Agent',
  items: [
    { title: 'Eliminate hours of manual research',
      body: 'The Agent completes comprehensive market intelligence workflows in minutes, freeing your team to focus on strategy, creative development, and execution rather than data gathering.' },
    { title: 'Ensure accuracy with full citations',
      body: 'Every insight includes clickable source links, enabling immediate verification and deeper investigation while building trust in your findings across stakeholders.' },
    { title: 'Maintain brand alignment across research outputs',
      body: 'Reports integrate with your Jasper Knowledge Base, ensuring consistency in terminology, positioning, and strategic focus when research informs downstream content.' },
    { title: 'Control research scope and sources',
      body: 'Specify which domains to include or exclude, answer clarifying questions to narrow focus, and guide the Agent toward the most relevant data for your specific objectives.' },
    { title: 'Enable seamless team collaboration',
      body: 'Share research findings instantly, add reports to your Knowledge Base for universal access, or export in preferred formats for presentations and strategic planning.' },
    { title: 'Adapt research approach in real time',
      body: 'The Agent asks clarifying questions and adjusts its methodology based on your responses, ensuring the final report addresses your precise needs rather than delivering generic results.' },
  ],
}

const USE_CASES = {
  title: 'Use cases for the Research Agent',
  items: [
    { title: 'Competitive positioning analysis for SaaS launches',
      body: 'A B2B SaaS company uses the Research Agent to analyze competitor offerings, pricing models, and customer feedback before a new project management feature launch.' },
    { title: 'Market entry research for e-commerce expansion',
      body: 'An e-commerce brand deploys the Research Agent to analyze regional consumer preferences, regulatory requirements, and competitive landscapes across European target countries.' },
    { title: 'Healthcare technology comparison for marketing campaigns',
      body: 'A healthcare technology company uses the Research Agent to compare features, security standards, and patient outcomes across competing telehealth platforms.' },
    { title: 'Quarterly trend analysis for B2B content strategy',
      body: 'A B2B marketing agency uses the Research Agent to identify emerging trends and inform editorial calendars and campaign themes across client industries.' },
    { title: 'Audience insight gathering for campaign planning',
      body: 'A digital marketing team uses the Research Agent to analyze pain points, decision-making factors, and information sources for first-time homebuyer campaigns.' },
    { title: 'Regulatory landscape assessment for financial services marketing',
      body: 'A financial services firm uses the Research Agent to analyze regulatory requirements, disclosure standards, and compliance best practices across jurisdictions.' },
  ],
}

const FAQ = {
  title: 'Common questions about the Research Agent',
  items: [
    { q: 'How long does the Research Agent take to complete a report?',
      a: 'The Agent typically completes comprehensive research in 2–10 minutes, depending on query complexity and the number of sources analyzed. More focused queries generally process faster.' },
    { q: 'Can I control which sources the Research Agent uses?',
      a: 'Yes. During setup, you can specify domains to include or exclude. This ensures the Agent focuses on sources that meet your credibility standards and research objectives.' },
    { q: 'How do I use Research Agent reports with other Jasper tools?',
      a: 'Add reports to your Knowledge Base for team-wide access, export as PDFs, or share your Canvas with collaborators for real-time editing.' },
    { q: 'Does the Research Agent access internal company data?',
      a: 'No. The Research Agent analyzes publicly available sources only. Add proprietary information to your Jasper Knowledge Base to reference it in other Agents.' },
    { q: 'How does the Research Agent maintain accuracy?',
      a: 'Every report includes full citations with clickable source links, enabling immediate verification of claims and building stakeholder confidence.' },
    { q: "What happens if the research results don't meet my needs?",
      a: 'Refine your inputs and run the Agent again. More detailed prompts, source specifications, and clarifying questions typically yield more precise results.' },
  ],
}

export default function AgentResearch() {
  return (
    <AgentDetail
      title="Accelerate Market Intelligence with the Research Agent"
      intro="The Research Agent transforms complex, multi-step research into comprehensive, cited reports in minutes. Built by Jasper to integrate with your Brand Voice, Style Guide, Audiences, Visual Guidelines, and Knowledge Base, this Agent plans, researches, analyzes, and adapts across multiple sources while you focus on strategy."
      card={{
        name: 'Research',
        icon: '/assets/file-search.svg',
        still: { src: '/assets/Research.png', w: 395, h: 460,
                 alt: 'Research Agent panel listing credible sources and a cited findings report inside Jasper.' },
        includedIn: 'Business Only',
        usedFor: ['Blog & Long-form', 'Creating Content', 'Strategy & Planning',
                  'Product Marketers', 'PR & Communications', 'PR',
                  'Planning Content', 'Content Marketers'],
      }}
      toc={TOC}
      transcript={TRANSCRIPT}
      body={BODY}
      benefits={BENEFITS}
      useCases={USE_CASES}
      faq={FAQ}
      closing={{
        title: 'Drive strategic decisions with market intelligence that takes minutes, not days',
        cta: 'Get A Demo Of This Agent',
      }}
    />
  )
}
