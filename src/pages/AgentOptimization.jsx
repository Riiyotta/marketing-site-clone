import AgentDetail from '../components/blocks/AgentDetail'

/* ---------------------------------------------------------------------------
   /agents/optimization — live page height 6689px (footer 1175 of that).

   Live block order (.scrape/plat-agents-optimization.json, section heights):
      315  apps_page_animation_wrap    blue grid plate
       80  g_section_space
       25  btn_link_wrap               "← Agents Library"
     3831  sticky_scroll_content_wrap  article + sticky agent card / TOC
      565  accordion_1                 "Common questions…"
      112  g_section_space
      482  hero_vertical_wrap          flame closing band

   Every string below is verbatim from the live capture.
--------------------------------------------------------------------------- */

const TOC = [
  { label: 'What is the Optimization Agent?', href: '#overview' },
  { label: 'Key benefits of the Optimization Agent', href: '#benefits' },
  { label: 'Use cases for the Optimization Agent', href: '#use-cases' },
  { label: 'Common questions about the Optimization Agent', href: '#faqs' },
]

/* The collapsed `<details>` transcript. Live ships the full enablement-video
   transcript inside it; these are its paragraphs in order. */
const TRANSCRIPT = [
  "Meredith: Hey y'all, My name is Meredith and I'm an enablement specialist here at Jasper.",
  "Meredith: Today we're introducing our updated MCP or Model Context Provider Optimization Agent.",
  "Meredith: This powerful tool transforms hours of manual research, clustering, rewriting and brief creation into minutes, boosting your team's efficiency beyond saving time.",
  'Meredith: The MCP Optimization Agent offers reliability and flexibility, understanding prompts to deliver high quality content.',
  'Meredith: Backed by thorough research, this results in more traffic driving content, enhanced visibility in AI generated answers and the ability to outpace competitors.',
  "Meredith: It's an efficiency tool and a strategic growth driver for your content.",
  'Meredith: Think of it as your personal AI powered SEO strategist.',
  "Meredith: It's designed to take your high level ideas and prompts and turn them into complete, polished SEO ready assets.",
  'Meredith: Now some of you might be familiar with our previous optimization agent.',
  "Meredith: While it was a great first iteration, it used a system of sub agents that sometimes resulted in generic outputs that didn't quite hit the mark.",
  'Meredith: The new MCP Optimization Agent is a huge leap forward.',
  "Meredith: It's built on a more advanced tool based architecture.",
  'Meredith: This means it intelligently understands your request, finds the exact right tools for the job, and uses them to build the perfect deliverable for you.',
  'Meredith: This new approach makes the agent faster and more reliable by delivering precise, high quality results every time and smarter and more flexible as it can handle everything from broad research topics to very specific instructions.',
  "Meredith: Now the first thing you're going to want to do is connect your Semrush account.",
  'Meredith: This is essential as the agent uses live Semrush data for its analysis and recommendations.',
  "Meredith: But don't worry, any Semrush plan will work.",
  'Meredith: You have two easy options here to connect your Semrush account to Jasper.',
  'Meredith: You can either sign into SEMrush using your username and password via OAuth, or you can use an API key.',
  'Meredith: This is a great cost effective option that unlocks access for your entire workspace.',
  "Meredith: The first thing you're going to want to do is open up a project.",
  "Meredith: From here you're going to want to open up Chat using the Chat button at the bottom of the screen.",
  'Meredith: From here go ahead and click Agents at the bottom of the chat and select Optimization Agent.',
  "Meredith: Now let's walk through a few powerful examples of what you can do.",
  'Meredith: Imagine you want to optimize an existing blog post.',
  'Meredith: Instead of spending hours manually pulling data.',
  'Meredith: Just give the agent the URL and a prompt such as Analyze this URL and give me a full SEO report and recommendations and paste in your URL.',
  'Meredith: Go ahead and send that off and Just like that, Jasper is going to analyze your content and provide a keyword metrics report along with actionable recommendations.',
  'Meredith: These will show up in your canvas on the right hand side.',
  "Meredith: The agent isn't just for analysis, it's a creation powerhouse.",
  "Meredith: So let's say you need to create a brief for a new article.",
  'Meredith: You could do the same flow, but use a prompt such as create a detailed SEO brief for a new blog post about marketing strategy.',
  'Meredith: Or maybe you want to do a content refresh.',
  'Meredith: You can ask the agent to find every page on your domain related to a specific topic.',
  'Meredith: So for example, you could use a prompt such as Find all pages on and then insert the URL related to employee benefits and provide optimization recommendations.',
  'Meredith: And just like that, you have your insights here in the canvas.',
  'Meredith: As you can see, the new MCP Optimization Agent is so much more than just a feature update.',
  "Meredith: It's a fundamental improvement to your entire content workflow.",
  'Meredith: So to sum it up, the MCP Optimization Agent affords you massive time savings, strategic insights, and better outcomes.',
  "Meredith: Whether you're analyzing existing content, creating new briefs, or exploring broad topics, the MCP Optimization Agent is your partner in creating content that performs.",
]

const BODY = [
  { h2: 'What is the Optimization Agent?', id: 'overview' },
  { p: 'The Optimization Agent automates the technical and strategic work required for search and answer engine visibility. It integrates seamlessly with your Jasper IQ elements, ensuring every optimization aligns with your established brand standards and audience expectations.' },
  { h3: 'How the Optimization Agent works', size: 38 },
  { p: "The Agent analyzes your content and objectives, then executes comprehensive optimization tasks automatically within Jasper's interface. Every action is delivered directly to your Canvas, enabling immediate review and implementation without switching platforms." },
  { h3: 'Semrush Integration', size: 28 },
  { p: 'A Semrush account is optional for using the Optimization Agent. You can choose the setup that best fits your needs:' },
  { ul: [
    'Default Mode (No Semrush Account): The agent utilizes large language models (LLMs) and live web-derived signals to provide directional research and recommendations.',
    'Connected Mode (Semrush Account Linked): Connecting a Semrush account powers the agent with deeper, data-driven SEO insights.',
  ] },
]

const BENEFITS = {
  title: 'Key benefits of the Optimization Agent',
  items: [
    { title: 'Consolidates optimization workflows',
      body: 'The Agent eliminates platform fragmentation by centralizing keyword research, content analysis, competitive benchmarking, and visibility tracking in one interface. Teams save hours previously spent toggling between tools while maintaining complete oversight of optimization strategies.' },
    { title: 'Delivers actionable, data-driven insights',
      body: "Every recommendation is grounded in live web signals, large language model analysis, and—when connected—Semrush data. The Agent evaluates content against Google's official Search Quality Rater Guidelines, providing weighted scores across nine distinct categories with transparent evidence extraction and YMYL detection." },
    { title: 'Maintains brand consistency across optimizations',
      body: 'All improvements align with your Jasper IQ assets, ensuring optimized content reflects your Brand Voice, follows your Style Guide, and resonates with your defined Audiences. The Agent references your Jasper Knowledge Base and Visual Guidelines, preserving brand integrity while enhancing performance.' },
    { title: 'Accelerates content refinement cycles',
      body: 'The Agent processes optimization tasks in minutes, not hours. Upload existing content, specify your goals, and receive comprehensive keyword lists, competitive comparisons, and visibility scores ready for immediate implementation—streamlining production timelines across campaigns.' },
    { title: 'Adapts to evolving search algorithms',
      body: "The Agent's AI visibility scoring system updates continuously to reflect changes in search engine priorities and answer engine behaviors. This ensures your content remains optimized against current ranking factors without requiring manual monitoring or recalibration." },
    { title: 'Scales optimization across content libraries',
      body: 'Teams can save optimized assets directly to your Jasper Knowledge Base for reuse, enabling efficient knowledge sharing and collaborative refinement.' },
  ],
}

const USE_CASES = {
  title: 'Use cases for the Optimization Agent',
  items: [
    { title: 'E-commerce: seasonal campaign optimization',
      body: 'An online retailer uses the Agent to generate high-impact keywords, analyze competitor positioning, and recommend content adjustments that improve product page rankings.' },
    { title: 'SaaS: competitive positioning analysis',
      body: 'A software company uses the Agent to perform competitive analysis, identify content gaps, and suggest keyword strategies for blog topics, landing page copy, and thought leadership articles.' },
    { title: 'B2B: thought leadership content refinement',
      body: 'A professional services firm uses the Agent to evaluate existing whitepapers and case studies against current search trends and track visibility scores over time.' },
    { title: 'Healthcare: treatment comparison content optimization',
      body: 'A healthcare technology provider uses the Agent to ensure comparison content meets search quality standards and addresses patient-focused queries.' },
    { title: 'Marketing agencies: multi-client optimization management',
      body: 'An agency uses the Agent to streamline optimization workflows, with each client’s Jasper IQ assets ensuring brand-specific recommendations and differentiated positioning strategies.' },
    { title: 'Financial services: product comparison content enhancement',
      body: 'A financial institution uses the Agent to optimize comparison guides for clarity and ensure content addresses common consumer questions.' },
  ],
}

const FAQ = {
  title: 'Common questions about the Optimization Agent',
  items: [
    { q: 'How does the Optimization Agent differ from the Research Agent?',
      a: 'The Research Agent specializes in gathering competitive intelligence and market insights, while the Optimization Agent focuses specifically on enhancing content visibility through SEO, AEO, and GEO strategies. Use the Research Agent to identify opportunities, then apply the Optimization Agent to maximize discoverability.' },
    { q: 'Do I need a Semrush account to use the Optimization Agent?',
      a: 'No, a Semrush account is optional. Without one, the Agent leverages large language models and live web signals for directional research and optimization recommendations. Connecting a Semrush account unlocks deeper, data-driven insights including detailed keyword research and robust competitive analysis.' },
    { q: 'How does the Agent maintain brand consistency during optimization?',
      a: 'The Agent automatically references your Jasper IQ assets—Brand Voice, Style Guide, Audiences, Visual Guidelines, and your Jasper Knowledge Base—throughout the optimization process, ensuring optimized content maintains the tone, style, and messaging that defines your brand identity.' },
    { q: 'What does the AI visibility score measure, and how should I interpret it?',
      a: "The AI visibility score evaluates your content against Google's Search Quality Rater Guidelines using a transparent three-step process: extracting evidence (including YMYL detection), evaluating against QRG rules, and producing weighted scores across nine distinct categories. Higher scores indicate content more likely to rank prominently in search and answer engines." },
    { q: 'Can I save and reuse optimized content across projects?',
      a: 'Yes. All optimized content and recommendations appear in your Jasper Canvas, where you can review, edit, and save assets directly to your Jasper Knowledge Base. Teams can build libraries of optimized templates, keyword lists, and competitive insights that accelerate future campaigns.' },
    { q: 'Will the Optimization Agent replace my existing SEO tools?',
      a: "The Agent consolidates multiple optimization functionalities within Jasper's workspace. Many teams find this integration sufficient, eliminating the complexity of managing separate tools. Advanced users may choose to use the Agent alongside specialized platforms, but most workflows benefit from the Agent's comprehensive, unified approach." },
  ],
}

export default function AgentOptimization() {
  return (
    <AgentDetail
      title="Maximize Content Performance with the Optimization Agent"
      intro="In today's competitive digital landscape, visibility determines success. The Optimization Agent eliminates the complexity of managing SEO, AEO, and GEO strategies across disconnected platforms. Built by Jasper, this Agent consolidates keyword research, competitive analysis, and content optimization into one intelligent workflow—aligned with your Jasper IQ assets including Brand Voice, Style Guide, Audiences, Visual Guidelines, and your Jasper Knowledge Base."
      card={{
        name: 'Optimization',
        icon: '/assets/chart-breakout-square.svg',
        still: { src: '/assets/Optimization.png', w: 395, h: 251,
                 alt: 'SEO tool interface showing keyword volume and difficulty tables beside an Optimization Agent chat panel.' },
        includedIn: 'Business Only',
        usedFor: ['Content Marketers', 'Awareness', 'Blog & Long-form',
                  'Creating Content', 'Transforming Content', 'Website'],
      }}
      toc={TOC}
      transcript={TRANSCRIPT}
      body={BODY}
      benefits={BENEFITS}
      useCases={USE_CASES}
      faq={FAQ}
      closing={{
        title: 'Scale visibility and drive measurable growth with the Optimization Agent',
        body: 'Your complete solution for search, answer, and generative engine optimization within Jasper.',
        cta: 'Get A Demo Of This Agent',
      }}
    />
  )
}
