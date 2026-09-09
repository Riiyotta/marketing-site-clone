import IlloHero from '../../components/blocks/IlloHero'
import AgentLibrary from '../../components/blocks/AgentLibrary'
import SeoSection from '../../components/blocks/SeoSection'
import PageCta from '../../components/PageCta'
import { AGENT_CARDS } from '../../data/agentLibrary'

/* ---------------------------------------------------------------------------
   /solutions/seo-aeo-geo — a ONE-OFF. It belongs to neither Solutions
   template: it opens on an `illo_hero` no other route uses, then runs the
   /agents library block, then three `horizontal_content_wrap` + `seo_image_wrap`
   pairs, and closes on the shared cta_main_wrap.

   MEASURED section stack at 1440px (.scrape/plat-solutions-seo-aeo-geo.json,
   live page total 6943px):
      80px  g_section_space
     834px  illo_hero                 "Jasper helps you optimize for SEO, AEO & more"
    2231px  (agent library)           "AI Agents built for SEO & AEO", 14 cards
     538px  horizontal_content_wrap   SEO
     750px  seo_image_wrap            SEO figure
     561px  horizontal_content_wrap   GEO
     750px  seo_image_wrap            GEO figure
     517px  horizontal_content_wrap   AEO
     750px  seo_image_wrap            AEO figure
     112px  g_section_space
     925px  cta_main_wrap

   The three content bands and their figures are rendered as one SeoSection
   each, because live pairs them 1:1 and the figure is the band's own artwork.

   The 14 agent cards live's library shows are a SUBSET of the 122-card set
   already captured in data/agentLibrary.js for /agents, so they are selected
   from it by title rather than duplicated here — the copy is identical.
--------------------------------------------------------------------------- */

/* The 14 cards live renders in this library, in live's order. */
const SEO_AGENT_TITLES = [
  'Competitor Audit', 'Competitive Response', 'Competitor Positioning',
  'AI Readiness Comparison', 'Gap Finder', 'Entity Mapper', 'AI Readiness Score',
  'Fact Density Audit', 'Schema Markup', 'Comparison Brief', 'Query Planner',
  'Citable Claims', 'FAQ Generator', 'Pillar Article',
]

const SEO_CARDS = SEO_AGENT_TITLES
  .map((t) => AGENT_CARDS.find((c) => c.title === t))
  .filter(Boolean)

/* The three optimisation bands, captured verbatim from live
   (.scrape/seotext.json, .scrape/seox.json). Chip tints are the measured
   per-section grounds. */
const BANDS = [
  {
    eyebrow: 'SEO (Search Engine Optimization)',
    eyebrowChip: 'bg-blue-300', checkChip: 'bg-blue-300',
    title: 'Improve SEO performance with marketing agents',
    lede: 'Organic visibility starts with strong fundamentals. Jasper Agents help your team build content pipelines for better rankings, authority, and visibility across all search surfaces.',
    items: [
      { title: 'Automate SEO analysis',
        body: 'With Jasper’s Optimization Agent, connected directly to your SEMrush data — no manual exports or audits.' },
      { title: 'Scale content with Jasper Grid',
        body: 'Generate or refresh pages in bulk, keeping every one optimized and on-brand.' },
      { title: 'Accelerate strategy and briefs',
        body: 'Jasper turns keyword and competitor research into actionable plans your team can execute instantly.' },
      { title: 'Enforce quality at every step',
        body: 'Score each asset against Jasper’s SEO best practices for structure, clarity, and performance.' },
    ],
    figure: {
      src: '/assets/Optimization-SEO.avif',
      alt: 'Jasper Canvas running an SEO optimization workflow across several blog drafts',
      caption: 'Using Jasper Canvas and agents to create SEO-optimized content',
      defTitle: 'What is Search Engine Optimization?',
      defBody: 'The practice of improving a website’s visibility in search results by optimizing content, structure, and technical elements to increase organic traffic and relevance for target keywords.',
      defStrong: 'improving a website’s visibility in search results',
    },
  },
  {
    eyebrow: 'GEO (Generative Engine Optimization)',
    eyebrowChip: 'bg-flame-400', checkChip: 'bg-flame-300',
    title: 'Get seen and cited by generative AI as a source of truth',
    lede: 'Generative Engine Optimization (GEO) is new, but visibility is vital. From schema to scoring, Jasper agents form sustainable, scalable content pipelines that help you own the generative and grounded AI results.',
    link: { label: 'Learn more about Jasper’s GEO and AI Monitoring capabilities', href: '/geo' },
    items: [
      { title: 'Align to conversational intent',
        body: 'Jasper’s Optimization Agent tunes your content to how people — and large language models — actually ask questions.' },
      { title: 'Structure for AI readability',
        body: 'The Optimization Agent improves your content with FAQs, citations, and detailed schema to make it easier for AI systems to understand.' },
      { title: 'Scale systematically with Jasper Grid',
        body: 'Turn thousands of queries, briefs, or product rows into complete, organized assets that humans and AI alike can easily interpret.' },
      { title: 'Maximize inclusion',
        body: 'Score each asset against Jasper’s GEO best practices to increase your chances of being cited in LLM outputs.' },
    ],
    figure: {
      src: '/assets/Optimization-GEO.avif',
      alt: 'Jasper Chat generating FAQ schema for a product page',
      caption: 'Using Jasper Chat to generate FAQ schema based on product & use case',
      defTitle: 'What is Generative Engine Optimization?',
      defBody: 'The strategy of crafting content and metadata so generative AI systems (like ChatGPT) can accurately retrieve, summarize, and cite your brand—emphasizing clear entities, source credibility, structured data, and unambiguous explanations.',
      defStrong: 'generative AI systems (like ChatGPT) can accurately retrieve, summarize, and cite your brand',
    },
  },
  {
    eyebrow: 'AEO (Answer Engine Optimization)',
    eyebrowChip: 'bg-green-400', checkChip: 'bg-green-300',
    title: 'Get featured in organic and AI search',
    lede: 'Being #1 isn’t enough anymore – you need to be featured. Jasper helps you create the voice, content, code, and structure that get you cited in everything from the Answer Box to AI Overviews.',
    items: [
      { title: 'Measure what matters',
        body: 'Track your presence and attribution in AI Overviews alongside traditional search metrics.' },
      { title: 'Build credibility',
        body: 'From E-E-A-T to brand voice, Jasper helps you consistently demonstrate the value of your content.' },
      { title: 'Craft the perfect answer',
        body: 'Use Jasper agents to write the kinds of short, clear answers that get featured.' },
      { title: 'Score every chunk of content',
        body: 'Score every chunk of content against Jasper’s AEO benchmarks.' },
    ],
    figure: {
      src: '/assets/Optimization-AEO.avif',
      alt: 'Jasper Grid generating answer-engine-optimized content across many rows',
      caption: 'Generating answer engine optimized content using Jasper Grid',
      defTitle: 'What is Answer Engine Optimization?',
      defBody: 'The process of structuring content to directly and clearly answer user questions so it’s eligible for featured snippets, voice results, and AI-driven answer boxes across search and assistant platforms.',
      defStrong: 'structuring content to directly and clearly answer user questions',
    },
  },
]

export default function SeoAeoGeo() {
  return (
    <>
      <div aria-hidden="true" className="h-[80px]" />

      <IlloHero
        eyebrow="SEO, AEO & GEO"
        title="Jasper helps you optimize for SEO, AEO & more"
        body="Search is evolving fast, from Google to AI Overviews to generative engines. Jasper helps your brand stay visible and consistent across them all."
        ctas={[{ label: 'Get a Demo', variant: 'btn-solid-light' }]}
        illo={{ src: '/assets/SEO-Hero-NEw-min-p-1600.avif' }}
      />

      <AgentLibrary
        eyebrow="SEO/AEO Agent Library"
        title="AI Agents built for SEO & AEO"
        body="Jasper offers a growing number of specialized marketing agents, each designed to execute a specific job within the SEO/AEO content pipeline."
        workflows={['Outrank', 'Optimize', 'Originate']}
        promo={{
          title: 'Create custom Agents with Jasper Studio',
          body: 'Design and deploy context-rich AI Agents and workflows that transform your marketing processes.',
          link: 'Learn More', href: '/studio',
        }}
        cards={SEO_CARDS}
        pageSize={14}
        capBottom="/assets/Agents-Bottom-p-1600.avif"
      />

      {BANDS.map((b) => <SeoSection key={b.eyebrow} {...b} />)}

      <div aria-hidden="true" className="h-[112px]" />

      <PageCta
        headline="Start creating with Jasper today"
        ctas={[{ label: 'Get A Demo', variant: 'btn-primary' }]}
      />
    </>
  )
}
