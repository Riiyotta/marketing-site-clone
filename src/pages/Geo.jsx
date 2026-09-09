import StickyScroll from '../components/blocks/StickyScroll'
import Accordion from '../components/blocks/Accordion'
import { useReveal } from '../hooks/useReveal'
import { ArrowRight } from '../components/Icons'

/* ---------------------------------------------------------------------------
   /geo — "Get cited by AI. Win the new front door of search."

   Block order and heights MEASURED on live jasper.ai/geo at 1440px
   (.scrape/plat-geo.json), page total 12858px:

     924  aeo_hero_wrap        h1 80px Feature, a mono "GEO & AI Optimization"
                               eyebrow, a long intro, two buttons, and a
                               product-demo iframe on the right; below it a
                               logo marquee ("The best marketing teams rely on
                               Jasper") of 12 156x64 customer marks
     516  aeo_divider_wrap     a stairstep pixel wedge iframe (x3 on the page)
    1100  aeo_stats_wrap       "Zero-click search is here. It's already eating
                               your SEO." in WHITE on the dark flame-800
                               (#410d07) band, over three stat columns
     516  aeo_divider_wrap
    4918  geo_product_wrap     "Most tools stop at monitoring…" (80px) then the
                               MONITOR / DECIDE / ACT / MEASURE loop — four
                               54px sections each with a body, four bullet
                               outcomes and a product-demo iframe
     516  aeo_divider_wrap
    2193  sticky_scroll_wrap   "Specialized agents for every job in AI Search"
                               pinned left, FOURTEEN bordered agent cards right
     128  border-marquee       a 1440x128 pixel border strip
     960  aeo_integrations_wrap "Works with the stack you already have" — a
                               flame-200 cell grid of ten pixel-art logos
     112  g_section_space
     476  accordion_1          five GEO FAQs
     112  g_section_space
     854  aeo_closing_wrap     "Be found, cited and trusted with Jasper" in
                               white on flame-800, over a canvas-embed iframe

   IFRAME POLICY: every product panel here is a *.jasperpreview.app embed. The
   surrounding panel geometry (which is real layout) is reproduced; the embed
   itself is replaced by the nearest still or a flat panel. The three 516px
   stairstep dividers ARE real layout — they are the two wedge SVGs the live
   page serves (Dumb-Fix.svg / Dumb-Fix-Beige.svg) — so they are drawn.

   This page's GEO copy overlaps the `.geo_platform` panel on /platform; that
   section keeps its own measured treatment there and is not re-used here,
   because /geo's hero is a different block (aeo_hero_wrap).
--------------------------------------------------------------------------- */

const LOGOS = [
  'jasp-HH', 'jasp-sanoflif', 'jasp-kelly', 'jasp-iheartmedia', 'jasp-hitachi',
  'jasp-Bona', 'jasp-AAA', 'jasp-prudential', 'jasp-harpercollins',
  'jasp-morningstar', 'jasp-cushman',
]

const STATS = [
  { n: '94', suffix: '%', label: 'of B2B buyers use generative AI in their purchasing process',
    source: 'Source: Forrester' },
  { n: '50', suffix: '%', label: 'decline in organic traffic since Q1 2025',
    source: 'Source: Forrester' },
  { n: '60', suffix: '%', label: 'of AI answers cite the wrong source or misrepresent brand info',
    source: 'Source: Columbia University' },
]

const LOOP = [
  { step: 'MONITOR',
    title: 'See exactly where your brand wins, loses, and disappears in AI answers',
    body: "Use Jasper’s AI monitoring to track brand presence, citation rate, and sentiment across every major AI platform. See where you're winning, where competitors are gaining, and what's driving every change, in real time. Jasper distinguishes meaningful shifts from noise, so teams operate on signal, not alerts",
    points: [
      'Establish a quantified, defensible AI visibility metric the CMO can take to the executive team.',
      'Surface competitive displacement at the citation level, months before it touches pipeline.',
      'Detect brand misrepresentation early, before mischaracterization compounds into the AI consensus.',
      'Operate with engine-level visibility. Strength in one model rarely means strength across the stack.',
    ],
    link: 'Want to see how AI views you? Run your free GEO Diagnostic' },
  { step: 'DECIDE',
    title: 'Translate signal into confident, governed action',
    body: 'Jasper synthesizes visibility data, competitive context, brand authority, and prior performance into a prioritized recommendation set. Teams operating from a single backlog leadership can review, not a debate about which alert to chase.',
    points: [
      'Align cross-functional teams on a single prioritized backlog, ranked by projected impact on visibility.',
      'Replace pattern-matching from charts with explainable score movement and recommended response.',
      'Ground every recommendation in your brand voice, audience definitions, and governance rules.',
      'Operate at the topic-cluster level, the layer AI engines actually evaluate authority on.',
    ] },
  { step: 'ACT',
    title: 'Execute brand-governed content at the cadence AI search demands',
    body: 'Jasper Agents are governed by Decision Intelligence. Drafts inherit your brand voice, audience, and competitive context by default, then flow into your existing review process for human approval. What ships is on-brand and citation-ready, not generic AI material that needs a full rewrite.',
    points: [
      'Reduce average review cycles from 3-6 down to 1. Drafts arrive on-brand, not requiring rework.',
      'Cover the full AEO/GEO operating loop in one platform, not four.',
      'Enforce brand governance at the system level. Agents inherit your voice, audience, governance, and approved messaging by default, not by editorial save.',
      'Route drafts straight into your martech stack so the review process you already have keeps working.',
    ] },
  { step: 'MEASURE',
    title: 'One platform to close the loop and get your brand found',
    body: 'Every monitoring cycle reports which actions moved which scores, where authority compounded, and where new gaps emerged. Jasper uses the result to refine the next recommendation set, turning episodic optimization into a durable, learning system.',
    points: [
      'Tie every score movement to a specific action. Defensible attribution, not directional storytelling.',
      'Catch new gaps the same cycle they appear, before competitors capitalize on the window.',
      'Hand leadership one trend line and one narrative. Board-ready without a quarterly scramble.',
    ] },
]

const AGENTS = [
  { title: 'Competitor Audit', body: 'Audit a competitor’s AI search footprint to surface their narrative, citation strengths and AI positioning risks' },
  { title: 'Competitive Response', body: 'Turn a competitor’s advantage into your narrative — structured, AEO-optimized content that owns the same topic on your terms.' },
  { title: 'Competitor Positioning', body: 'Analyze how AI answer engines would likely describe and position a competitor based on their public content and entity signals.' },
  { title: 'AI Readiness Comparison', body: 'Score and compare your content’s AEO/GEO readiness after optimization — with a detailed breakdown of what changed and why it matters for AI citation.', icon: '/assets/arrows-up.svg' },
  { title: 'Gap Finder', body: 'Identifies high-impact AEO/GEO content gaps by uncovering competitor-answered questions your brand is missing and prioritizing them for AI-driven search visibility.' },
  { title: 'Entity Mapper', body: 'Audits a page for missing, relevant entities and automatically matches each suggestion to the best available link target from your site.' },
  { title: 'AI Readiness Score', body: 'Analyzes your content to determine how well it performs in AI-driven search and answer engines. Scores key factors like direct answer clarity, structure, and citation potential, then surfaces the highest-impact improvements to increase discoverability and attribution.', icon: '/assets/check.svg' },
  { title: 'Fact Density Audit', body: 'Uncover high-impact opportunities to add statistics and expert quotes that boost your content’s authority and AI search visibility' },
  { title: 'Schema Markup', body: 'Generate production-ready JSON-LD schema markup for any page of content, ready to be cited by AI answer engines.' },
  { title: 'Comparison Brief', body: 'Generate a brand-favorable, AEO/GEO-optimized competitor comparison brief structured for both human readers and AI answer engines.', icon: '/assets/arrows-up.svg' },
  { title: 'Query Planner', body: 'Generate and prioritize the AI search queries your brand should be targeting — ranked by opportunity, competitive difficulty, and citation potential.' },
  { title: 'Citable Claims', body: 'Generate a set of crisp, standalone, AI-ready brand claims and factual assertions engineered to be cited by answer engines.' },
  { title: 'FAQ Generator', body: 'Generates AI-optimized, answer-first FAQ content from real query data, structured for schema markup and designed to maximize citation in AI search engines.' },
  { title: 'Pillar Article', body: 'Write long-form content that provides value, drives traffic, and enhances SEO/AEO/GEO' },
].map((a) => ({ ...a, icon: a.icon || '/assets/chart-breakout-square.svg', link: 'Learn more' }))

const INTEGRATIONS = [
  { name: 'Asana', cat: 'CONTENT & CMS', img: '/assets/Pixel_Asana.svg' },
  { name: 'Google Drive', cat: 'KNOWLEDGE & DATA', img: '/assets/Pixel_Drive.svg' },
  { name: 'SEMrush', cat: 'ANALYTICS & VISIBILITY', img: '/assets/Pixel_SEMrush.svg' },
  { name: 'ChatGPT', cat: 'AI SURFACES', img: '/assets/Pixel_ChatGPT.svg' },
  { name: 'Monday.com', cat: 'CONTENT & CMS', img: '/assets/Pixel_Monday.svg' },
  { name: 'Sharepoint', cat: 'KNOWLEDGE & DATA', img: '/assets/Pixel_Sharepoint.svg' },
  { name: 'Claude', cat: 'AI SURFACES', img: '/assets/Pixel_Claude.svg' },
  { name: 'Notion', cat: 'KNOWLEDGE & DATA', img: '/assets/Pixel_Notion.svg' },
  { name: 'Gemini', cat: 'AI SURFACES', img: '/assets/Pixel_Gemini.svg' },
  { name: 'Copilot', cat: 'AI SURFACES', img: '/assets/Pixel_Copilot.svg' },
]

const FAQ = [
  { q: 'Do I need to switch CMS or rip out my current SEO tools?',
    a: 'No. Jasper sits above your existing stack. Keep your CMS (i.e. WordPress, Webflow, Contentful, custom). Keep Semrush or Ahrefs. We integrate with the tools you have and handle the AEO/GEO layer none of those tools were built for.' },
  { q: "How is Jasper's GEO Agent & Hub different from CMS-native AEO features?",
    a: 'CMS-native AEO optimizes the page you publish. Jasper operates the whole AEO/GEO motion, monitoring AI platforms, prioritizing the work, governing the output, and measuring the impact. Different scope, different problem.' },
  { q: 'How do we get started without a big lift on our team?',
    a: 'Jasper does the lifting. You provide your brand context, Jasper loads it in and comes back with a customized demo against your real data. No content created, no implementation lift on your side.' },
  { q: 'How does this work with our brand standards and review process?',
    a: 'Brand context lives in Jasper IQ: your voice, positioning, governance rules, knowledge, audience and more. Every agent output runs through it by default. Most customers move from three to six review cycles down to one.' },
  { q: 'What about pricing and packaging?',
    a: 'Pricing depends on scope and scale. The fastest way to get a tailored answer is to book a demo. Jasper will come back with a recommendation based on your team and topics.' },
]

/* `.aeo_divider_wrap` — the stairstep wedge between the dark bands. Live loads
   it as an iframe, but the shape it renders is exactly the wedge SVG the page
   also serves, so the SVG is drawn directly at the measured 516px. */
const Divider = ({ flip = false, src = '/assets/Dumb-Fix.svg' }) => (
  <div aria-hidden="true" className="clip-bleed relative h-[240px] md:h-[320px] lg:h-[516px]">
    <img src={src} alt="" className={`h-full w-full object-cover ${flip ? 'rotate-180' : ''}`} />
  </div>
)

export default function Geo() {
  const ref = useReveal()

  return (
    <>
      {/* 924px — aeo_hero_wrap. Live's right column is a
          content-optimize-deploy.jasperpreview.app product demo; per the
          iframe policy the panel geometry is kept and the embed is not. */}
      <section ref={ref} className="clip-bleed relative bg-surface pt-[64px] md:pt-[88px]">
        <div className="u-container grid items-center gap-10 lg:grid-cols-[minmax(0,600px)_minmax(0,1fr)] lg:gap-10">
          <div>
            <p className="reveal eyebrow text-ink">GEO &amp; AI Optimization</p>
            <h1 className="reveal mt-5 max-w-[16ch] font-serif text-ink tracking-tightest leading-1
                           text-[clamp(2.5rem,5.55vw,5rem)]"
                style={{ '--reveal-delay': '80ms' }}>
              Get cited by AI. Win the new front door of search.
            </h1>
            <p className="reveal mt-6 max-w-[52ch] text-text-small text-ink text-pretty"
               style={{ '--reveal-delay': '140ms' }}>
              Jasper is the only enterprise platform that connects AI search visibility intelligence
              to governed execution. Marketing teams use Jasper to measure how their brand performs
              across every major AI answer engine, prioritize the actions that matter, and ship
              brand-governed content at scale, all in one place.
            </p>
            <div className="reveal mt-8 flex flex-wrap items-center gap-3"
                 style={{ '--reveal-delay': '200ms' }}>
              <a href="#" className="btn btn-secondary">Run free diagnostic</a>
              <a href="#" className="btn btn-primary">Get a Demo</a>
            </div>
          </div>

          {/* the demo panel — a flat GEO dashboard still in place of the embed */}
          <div className="reveal" style={{ '--reveal-delay': '160ms' }}>
            <img src="/assets/GEO-AGENT-HOME.avif"
                 alt="Jasper GEO dashboard showing content to optimize, priorities and a citation rate score."
                 loading="lazy" className="w-full object-contain" />
          </div>
        </div>

        {/* customer logo rail. `.reveal` is on the RAIL, never on the marks —
            an off-viewport item in a horizontal scroller never intersects. */}
        <div className="u-container mt-12 pb-[48px] text-center">
          <p className="reveal eyebrow text-ink">The best marketing teams rely on Jasper</p>
          <div className="reveal no-scrollbar mt-6 flex items-center justify-start gap-8
                          overflow-x-auto lg:justify-center"
               style={{ '--reveal-delay': '80ms' }}>
            {LOGOS.map((l) => (
              <img key={l} src={`/assets/${l}.webp`} alt="" aria-hidden="true" loading="lazy"
                   className="h-[64px] w-[156px] shrink-0 object-contain" />
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* 1100px — the dark flame-800 stat band */}
      <section className="clip-bleed relative bg-flame-800 py-[72px] md:py-[104px]">
        <div className="u-container">
          <p className="reveal eyebrow text-white/70">Why now?</p>
          <h2 className="reveal mt-5 max-w-[20ch] font-serif text-white tracking-tightest leading-1
                         text-[clamp(2.25rem,5.55vw,5rem)]"
              style={{ '--reveal-delay': '80ms' }}>
            Zero-click search is here. It's already eating your SEO.
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-gutter">
            {STATS.map((s, i) => (
              <div key={s.label} className="reveal border-t border-white/25 pt-6"
                   style={{ '--reveal-delay': `${i * 90}ms` }}>
                <p className="font-serif text-white tracking-tightest leading-1
                              text-[clamp(3rem,5.55vw,5rem)]">
                  {s.n}<span className="font-sans text-h3">{s.suffix}</span>
                </p>
                <p className="mt-4 max-w-[34ch] text-text-main text-white text-pretty">{s.label}</p>
                <p className="mt-3 text-text-tiny text-white/60">{s.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider flip />

      {/* 4918px — the MONITOR / DECIDE / ACT / MEASURE loop */}
      <section className="clip-bleed relative bg-surface py-[80px] md:py-section-main">
        <div className="u-container">
          <p className="reveal eyebrow inline-block bg-flame-600 px-1 text-white">WHY JASPER?</p>
          <h2 className="reveal mt-5 max-w-[22ch] font-serif text-ink tracking-tightest leading-1
                         text-[clamp(2.25rem,5.55vw,5rem)]"
              style={{ '--reveal-delay': '80ms' }}>
            Most tools stop at monitoring. Jasper generates content AI engines actually cite.
          </h2>
          <p className="reveal mt-6 max-w-[54ch] text-text-small text-ink text-pretty"
             style={{ '--reveal-delay': '140ms' }}>
            Jasper is the only system that connects visibility intelligence to governed execution.
            Decision Intelligence (IQ) links what's happening in AI search to what your team should
            do next, then ships the work in one platform. It's the difference between "you showed
            up" and "you showed up the way buyers and AI engines actually trust.".
          </p>
        </div>

        <div className="u-container mt-16 flex flex-col gap-20">
          {LOOP.map((l, i) => (
            <article key={l.step} className="reveal grid gap-8 lg:grid-cols-2 lg:gap-10"
                     style={{ '--reveal-delay': '60ms' }}>
              <div>
                <p className="eyebrow text-flame-600">{l.step}</p>
                <h3 className="mt-4 max-w-[20ch] font-serif text-ink tracking-tightest leading-[1.05]
                               text-[clamp(2.125rem,3.75vw,3.375rem)]">
                  {l.title}
                </h3>
                <p className="mt-5 max-w-[56ch] text-text-small text-ink text-pretty">{l.body}</p>
                <ul className="mt-6 flex max-w-[56ch] flex-col gap-3">
                  {l.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-text-small text-ink text-pretty">
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-flame-600" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                {l.link && (
                  <a href="#" className="link-arrow mt-6 text-text-small">
                    {l.link}<ArrowRight />
                  </a>
                )}
              </div>

              {/* the product panel. Live embeds a jasperpreview.app view here;
                  the panel geometry is real layout and is reproduced, the
                  embed is not, so no empty height is invented to match the
                  scroll-pinned live total. */}
              <div className="min-h-[280px] border border-dark-150 bg-surface-2 p-6 lg:min-h-[420px]">
                <div className="flex items-center gap-2 border-b border-dark-200 pb-3">
                  <span className="h-2 w-2 rounded-full bg-flame-600" aria-hidden="true" />
                  <span className="font-mono text-text-tiny text-dark-700">{l.step.toLowerCase()}</span>
                </div>
                <img src="/assets/GEO-AGENT-HOME.avif" alt="" aria-hidden="true" loading="lazy"
                     className="mt-4 w-full object-contain" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <Divider src="/assets/Dumb-Fix-Beige.svg" />

      {/* 2193px — fourteen agent cards */}
      <StickyScroll
        eyebrow="BUILT INTO EVERY WORKFLOW"
        title="Specialized agents for every job in AI Search"
        titleSize="text-[clamp(2.25rem,5.55vw,5rem)]"
        body="Jasper ships with purpose-built agents for each step of the AI Search Visibility workflow. Each one is grounded in your brand voice, governed by IQ, and runs at scale across the Jasper Grid."
        items={AGENTS}
        variant="cards"
        tint="bg-flame-200"
      />

      {/* 128px — border-marquee */}
      <div aria-hidden="true" className="clip-bleed relative h-[64px] md:h-[128px]">
        <img src="/assets/Border-Line-Placeholder.avif" alt=""
             className="h-full w-full object-cover" />
      </div>

      {/* 960px — the pixel-logo integration grid */}
      <section className="clip-bleed relative bg-flame-200">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col justify-center bg-flame-600 p-8">
            <p className="reveal eyebrow inline-block self-start bg-surface px-1 text-ink">
              INTEGRATIONS
            </p>
            <h2 className="reveal mt-5 max-w-[12ch] font-serif text-white tracking-tightest leading-1
                           text-[clamp(2rem,3.75vw,3.375rem)]"
                style={{ '--reveal-delay': '80ms' }}>
              Works with the stack you already have
            </h2>
          </div>

          {INTEGRATIONS.slice(0, 5).map((it, i) => (
            <div key={it.name}
                 className="reveal relative border-l border-flame-500/40 bg-flame-300 p-6"
                 style={{ '--reveal-delay': `${i * 70}ms` }}>
              <p className="eyebrow inline-block bg-surface px-1 text-flame-600">{it.cat}</p>
              <p className="mt-3 font-serif text-flame-600 tracking-tightest leading-1
                            text-[clamp(1.5rem,2.64vw,2.375rem)]">{it.name}</p>
              <img src={it.img} alt="" aria-hidden="true" loading="lazy"
                   className="mt-4 h-auto w-full max-w-[180px] object-contain" />
            </div>
          ))}

          <div className="flex flex-col justify-center gap-6 bg-flame-600 p-8">
            <p className="reveal text-text-small text-white text-pretty">
              Jasper plugs into your existing marketing stack — no rip-and-replace. Whether your
              team lives in Asana, Monday.com, Webflow, Contentful, or a homegrown platform, Jasper
              sits above the CMS and below your strategy, governing the AEO/GEO motion across all
              of it.
            </p>
            <a href="#" className="reveal btn bg-surface text-flame-600 self-start border-surface"
               style={{ '--reveal-delay': '80ms' }}>
              Explore Integrations
            </a>
          </div>

          {INTEGRATIONS.slice(5).map((it, i) => (
            <div key={it.name}
                 className="reveal relative border-l border-flame-500/40 bg-flame-300 p-6"
                 style={{ '--reveal-delay': `${i * 70}ms` }}>
              <p className="eyebrow inline-block bg-surface px-1 text-flame-600">{it.cat}</p>
              <p className="mt-3 font-serif text-flame-600 tracking-tightest leading-1
                            text-[clamp(1.5rem,2.64vw,2.375rem)]">{it.name}</p>
              <img src={it.img} alt="" aria-hidden="true" loading="lazy"
                   className="mt-4 h-auto w-full max-w-[180px] object-contain" />
            </div>
          ))}
        </div>
      </section>

      <div aria-hidden="true" className="h-[112px]" />
      <Accordion title="Frequently asked questions about Jasper's GEO capabilities" items={FAQ} />
      <div aria-hidden="true" className="h-[112px]" />

      {/* 854px — aeo_closing_wrap. The live canvas embed is not reproduced;
          the flame-800 band and its copy are. */}
      <section className="clip-bleed relative bg-flame-800 py-[96px] md:py-[140px]">
        <div className="u-container text-center">
          <h2 className="reveal mx-auto max-w-[16ch] font-serif text-white tracking-tightest
                         leading-1 text-[clamp(2.25rem,5.55vw,5rem)]">
            Be found, cited and trusted with Jasper
          </h2>
          <p className="reveal mx-auto mt-8 max-w-[60ch] text-text-main text-white text-pretty"
             style={{ '--reveal-delay': '100ms' }}>
            Book a demo and we'll walk through your scores, your top opportunities, and what it
            looks like to ship the first set of fixes inside Jasper.
          </p>
          <div className="reveal mt-10" style={{ '--reveal-delay': '180ms' }}>
            <a href="#" className="btn btn-primary">Get a Demo</a>
          </div>
        </div>
      </section>
    </>
  )
}
