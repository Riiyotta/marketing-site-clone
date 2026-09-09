import HeroVertical from '../components/blocks/HeroVertical'
import SimpleLayout from '../components/blocks/SimpleLayout'
import ValueProps from '../components/blocks/ValueProps'
import Accordion from '../components/blocks/Accordion'
import PageCta from '../components/PageCta'
import { useReveal } from '../hooks/useReveal'
import { ArrowRight } from '../components/Icons'

/* ---------------------------------------------------------------------------
   /grid — "Scale content operations with speed, precision, and control"

   Block order, absolute tops and heights MEASURED on live jasper.ai/grid at
   1440px (deep tree-walk, .scrape/deep-grid.json), page total 9886px:

     top     0   607  hero_vertical_wrap  the page h1 at 80px Feature, a mono
                      "Jasper Grid" eyebrow and a "Learn More" arrow link
     top   607  1081  grids_hero_ui       a 1358x517 Grid.svg wireframe over a
                      Vidzflow product film (third-party -> still only)
     top   607  8800  grids_lines x12     twelve absolutely-positioned vertical
                      rules spanning the whole page body; the four widest are
                      hidden below landscape. Reproduced as one lattice layer.
     top  1656   867  grids_section       "Built for AI-first marketing teams"
                      (54px) with a four-tab rail (Campaigns / Personalization
                      / SEO-AEO-GEO / Product Descriptions), a 726x546 tab
                      screenshot and two 326x318 lifestyle stills
     top  2491   725  grids_section       "Scale your content— and your
                      outcomes" (54px) over four 24px cards with 254x129 art
     top  3216   274  simple_layout_wrap  "Learn how to use Jasper Grid" +
                      "Get Certified" over Red-Grid.svg
     top  3490  1125  simple_layout_wrap  a bare Wistia video poster panel
     top  4615  1487  value_props_wrap    "What makes Jasper Grid different?"
                      (80px) over four 28px cards + a 941x1039 photo
     top  6070  1659  grids_section       "Solutions for scaled content
                      production" (54px), four use-case rows, 622x371 each
     top  7729   642  accordion_1         "Questions about Jasper Grid", 7 rows
     top  8371   112  g_section_space
     top  8483   925  cta_main_wrap       the shared CTA, but with THIS page's
                      wording: "Start creating with Grid today" / "Learn More"
--------------------------------------------------------------------------- */

const TABS = [
  { label: 'Campaigns', img: '/assets/Grid-Tab---Campaigns.avif',
    cursor: '/assets/Grid-Cursor---Performance.avif' },
  { label: 'Personalization', img: '/assets/Grid-Tabs---Personalization.avif',
    cursor: '/assets/Grid-Cursor---Lifecycle.avif' },
  { label: 'SEO/AEO/GE0', img: '/assets/Grid-Tabs---SEO-AEO-GEO.avif',
    cursor: '/assets/Grid-Cursor---SEO.avif' },
  { label: 'Product Descriptions', img: '/assets/Grid-Tabs---Product-Descriptions.avif',
    cursor: '/assets/Grid-Cursor---Product.avif' },
]

const OUTCOMES = [
  { title: 'Scaled content orchestration', img: '/assets/Grid-Illo-1.avif',
    body: 'Grid’s workflow automation enables large-scale production from structured inputs like briefs, keywords, & campaign goals.' },
  { title: 'Embedded brand governance', img: '/assets/Grid-Illo-2.avif',
    body: 'Jasper IQ applies your voice, audiences, and knowledge across every asset, ensuring consistent, on-brand content from the outset.' },
  { title: 'Purpose-built for marketing workflows', img: '/assets/Grid-Illo-3.avif',
    body: 'From campaign launches and localization to personalization and SEO, Grid is designed for marketing use cases – not generic automation.' },
  { title: 'No-code configuration', img: '/assets/Grid-Illo-4.avif',
    body: 'An intuitive spreadsheet-like interface allows marketers to build and manage workflows independently – no developers or custom APIs required.' },
]

const DIFFERENT = [
  { title: 'Operationalize scale without compromise', tint: 'bg-flame-300',
    body: 'Whether producing 1,000 product descriptions or 50,000 personalized campaign emails, Jasper Grid ensures each output adheres to brand and audience requirements.' },
  { title: 'An orchestration layer for enterprise content operations', tint: 'bg-green-300',
    body: 'Jasper Grid is a centralized system for orchestrating structured, repeatable, brand-safe content workflows across teams and regions.' },
  { title: 'Future-proof your marketing workflows', tint: 'bg-blue-300',
    body: 'Jasper Grid integrates seamlessly with Jasper’s broader platform, preparing your organization for dynamic agent execution, cross-surface integration, and long-term content systematization.' },
  { title: 'Designed for marketers, no code needed', tint: 'bg-violet-400',
    body: 'Unlike generic workflow platforms, Jasper Grid is purpose-built for marketers. Its intuitive, spreadsheet-like interface makes it easy to configure sophisticated content workflows – without developers, APIs, or technical setup.' },
]

const USE_CASES = [
  { eyebrow: '1:1 Personalization at Scale',
    lede: 'Deliver account- and segment-specific content—automatically',
    body: 'From first draft to final in record time. Jasper reduces friction across the entire workflow, enabling faster creation, quicker reviews, and more campaigns out the door.',
    outcome: 'Higher engagement and conversion rates, without manual customization or top-tier-only targeting.',
    img: '/assets/Grid-Uses---Personalization.avif',
    cursor: '/assets/Grid-Cursor---Lifecycle.avif' },
  { eyebrow: 'Product Descriptions & Images',
    lede: 'Generate, enrich, and update thousands of product pages—instantly',
    body: 'Jasper Grid and Jasper Image* power high-scale eCommerce operations—automatically generating product copy, enriching metadata, and creating brand-aligned visuals that update as inventory, pricing, or positioning changes.',
    outcome: 'Faster time-to-site, improved product discoverability, and consistent, high-quality customer experiences across every SKU and channel',
    note: '*coming soon',
    img: '/assets/Grid-Uses---Product-Descriptions.avif',
    cursor: '/assets/Grid-Cursor---Product.avif' },
  { eyebrow: 'Global Campaign Creation',
    lede: 'Orchestrate multi-market, multi-channel campaigns from a single source of truth',
    body: 'Jasper Grid enables marketing teams to generate localized, channel-specific assets across markets in minutes—not weeks—while enforcing global brand standards.',
    outcome: 'Faster go-to-market with regional relevance and enterprise-grade brand control',
    img: '/assets/Grid-Uses---Campaigns.avif',
    cursor: '/assets/Grid-Cursor---Performance.avif' },
  { eyebrow: 'SEO, AEO, & GEO',
    lede: 'Adapt to how AI is reshaping search and discovery',
    body: 'Grid automates the identification and re-optimization of underperforming SEO pages—aligning your content with high-impact keywords, search intent, and AI-driven surfaces.',
    outcome: 'Improved organic performance with less manual effort, and evergreen content that stays relevant.',
    img: '/assets/Grid-Uses---GEO.avif',
    cursor: '/assets/Grid-Cursor---SEO.avif' },
]

const FAQ = [
  { q: 'What is Jasper Grid?',
    a: 'Jasper Grid is a no-code content system that enables enterprise marketing teams to generate high-quality, brand-aligned content at scale through repeatable, structured workflows.' },
  { q: 'Who is Grid built for?',
    a: 'Grid is built for enterprise marketing teams—including operations leaders, content managers, campaign teams, and lifecycle marketers—who need to scale content output while maintaining brand standards and governance.' },
  { q: 'Can Grid support localization and personalization?',
    a: 'Yes. Grid enables marketers to produce localized, channel-specific, and personalized content variations at scale while ensuring brand alignment and compliance.' },
  { q: 'How does Grid ensure content is brand-compliant?',
    a: 'Grid applies brand voice, tone, and persona targeting through Jasper IQ, embedded directly into every workflow. Teams define brand guidelines once and apply them across all assets automatically, minimizing the need for manual review and reducing the risk of off-brand content.' },
  { q: 'Do I need technical resources to use Grid?',
    a: "No. Grid is a true no-code platform. It's designed for marketing teams to independently build, manage, and scale sophisticated content workflows using a simple, spreadsheet-like interface—no developers or engineering support required." },
  { q: 'Can Grid integrate with our existing CMS, email, or localization tools?',
    a: 'Yes. Grid is designed to fit into your existing marketing tech stack. Content can be exported or pushed into downstream systems through direct integrations or API endpoints, enabling end-to-end content operations without workflow disruption.' },
  { q: 'Is Grid secure and compliant for enterprise use?',
    a: 'Yes. Grid is built with enterprise-grade security in mind. Features include SSO, role-based permissions, audit logs, data privacy protections, and compliance readiness for IT, legal, and governance teams.' },
]

/* `.grids_lines` — twelve absolutely-positioned vertical rules that run the
   whole page body on live. Reproduced as one repeating-gradient layer on the
   1360px well rather than twelve DOM nodes, pinned behind the content. */
const GridLines = () => (
  <div aria-hidden="true"
       className="pointer-events-none absolute inset-0 mx-auto hidden max-w-container lg:block"
       style={{
         backgroundImage:
           'repeating-linear-gradient(to right, rgba(0,6,61,.07) 0 1px, transparent 1px 113.33px)',
       }} />
)

export default function Grid() {
  const ref = useReveal()

  return (
    <>
      {/* 607px */}
      <HeroVertical
        eyebrow="Jasper Grid"
        title="Scale content operations with speed, precision, and control"
        titleTag="h1"
        titleSize="display"
        titleWidth={1035}
        body="Systematic high-quality content and brand-safe execution — all in an easy-to-use, collaborative spreadsheet. No code required."
        link={{ label: 'Learn More' }}
        bg="bg-flame-300"
        spaceTop={112}
        spaceBottom={40}
      />

      {/* 1081px — grids_hero_ui. TWO layers on live: an outlined "Grid"
          word-mark (Grid.svg, 1358x517) as the ground, and a Vidzflow product
          film of the spreadsheet UI playing over it. Per the iframe policy the
          film is not embedded; its opening frame — captured from the live page
          with the consent banner dismissed — stands in for it. Drawing only
          Grid.svg (as an earlier draft did) left the hero as a bare outline
          word with no product in it at all. */}
      <section className="clip-bleed relative bg-flame-300 pb-[80px]">
        <img src="/assets/Grid.svg" alt="" aria-hidden="true" loading="lazy"
             className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto w-full
                        max-w-[1358px] object-contain" />
        <div className="u-container relative">
          <img src="/assets/grid-hero-ui.png"
               alt="Jasper Grid spreadsheet interface: a Personalization table of contacts with a Prompt column being configured."
               loading="lazy"
               className="reveal mx-auto w-full border border-dark-200 bg-surface object-contain" />
        </div>
      </section>

      {/* 867px — the four-tab rail. The rail scrolls horizontally at small
          widths, so `.reveal` sits on the RAIL, never on the tabs: an
          off-viewport item never intersects and would stay invisible. */}
      <section ref={ref} className="clip-bleed relative bg-surface py-[80px] md:py-section-main">
        <GridLines />
        <div className="u-container relative">
          <p className="reveal eyebrow text-ink">Jasper Grid Overview</p>
          <h2 className="reveal mt-4 max-w-[18ch] font-serif text-ink tracking-tightest
                         leading-[1.05] text-[clamp(2.125rem,3.75vw,3.375rem)]"
              style={{ '--reveal-delay': '80ms' }}>
            Built for AI-first marketing teams
          </h2>

          <div className="reveal no-scrollbar mt-8 flex gap-3 overflow-x-auto"
               style={{ '--reveal-delay': '140ms' }}>
            {TABS.map((t, i) => (
              <span key={t.label}
                    className={`whitespace-nowrap border px-4 py-2 font-mono text-text-small
                                ${i === 0 ? 'border-ink bg-ink text-white'
                                          : 'border-dark-200 bg-surface text-ink'}`}>
                {t.label}
              </span>
            ))}
          </div>

          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[326px_minmax(0,1fr)_326px] lg:gap-gutter">
            <img src="/assets/Grid-Lifestyle-A.avif" alt="" aria-hidden="true" loading="lazy"
                 className="reveal hidden w-full object-cover lg:block"
                 style={{ aspectRatio: '326/318' }} />
            <div className="reveal relative" style={{ '--reveal-delay': '100ms' }}>
              <img src="/assets/Grids-Lined-Background.avif" alt="" aria-hidden="true" loading="lazy"
                   className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
              <img src={TABS[0].img}
                   alt="Jasper Grid Campaigns tab, showing generated campaign rows."
                   loading="lazy"
                   className="relative w-full object-contain" style={{ aspectRatio: '726/546' }} />
              <img src={TABS[0].cursor} alt="" aria-hidden="true" loading="lazy"
                   className="pointer-events-none absolute bottom-6 right-4 hidden h-[56px] w-[178px]
                              max-w-none lg:block" />
            </div>
            <img src="/assets/Grid-Lifestyle-B.avif" alt="" aria-hidden="true" loading="lazy"
                 className="reveal hidden w-full object-cover lg:block"
                 style={{ '--reveal-delay': '160ms', aspectRatio: '326/318' }} />
          </div>
        </div>
      </section>

      {/* 725px — four outcome cards */}
      <section className="clip-bleed relative bg-surface pb-[80px] md:pb-section-main">
        <GridLines />
        <div className="u-container relative">
          <p className="reveal eyebrow text-ink">Jasper Grid Overview</p>
          <h2 className="reveal mt-4 max-w-[16ch] font-serif text-ink tracking-tightest
                         leading-[1.05] text-[clamp(2.125rem,3.75vw,3.375rem)]"
              style={{ '--reveal-delay': '80ms' }}>
            Scale your content— and your outcomes
          </h2>
          <div className="mt-10 grid gap-x-gutter gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {OUTCOMES.map((o, i) => (
              <article key={o.title} className="reveal"
                       style={{ '--reveal-delay': `${(i % 4) * 80}ms` }}>
                <img src={o.img} alt="" aria-hidden="true" loading="lazy"
                     className="w-full object-contain" style={{ aspectRatio: '254/129' }} />
                <h3 className="mt-4 font-serif text-ink tracking-tighter leading-[1.1]
                               text-[clamp(1.25rem,1.7vw,1.5rem)]">
                  {o.title}
                </h3>
                <p className="mt-2 text-text-small text-ink text-pretty">{o.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 274px */}
      <SimpleLayout
        variant="promo"
        title="Learn how to use Jasper Grid"
        titleSize="54"
        cta={{ label: 'Get Certified', variant: 'btn-secondary' }}
        bgImage="/assets/red-grid.svg"
        tint="bg-flame-200"
        center
        bleed
        spaceTop={0}
        spaceBottom={0}
      />

      {/* 1125px — a bare Wistia poster panel; still only per the iframe policy */}
      <section className="clip-bleed relative">
        <img src="/assets/Grid-Video-BG.png" alt="" aria-hidden="true" loading="lazy"
             className="w-full object-cover" style={{ aspectRatio: '1440/1125' }} />
      </section>

      {/* 1487px */}
      <ValueProps
        eyebrow="Jasper Grid Overview"
        title="What makes Jasper Grid different?"
        items={DIFFERENT}
        cardTitleSize="text-[clamp(1.375rem,1.95vw,1.75rem)]"
        photo={{ src: '/assets/Riso-1.png',
                 alt: 'Three colleagues having a discussion around a laptop in a bright office.' }}
      />

      {/* 1659px — four use-case rows */}
      <section className="clip-bleed relative bg-surface pb-[80px] md:pb-section-main">
        <GridLines />
        <div className="u-container relative">
          <p className="reveal eyebrow text-ink">Jasper Grid Use Cases</p>
          <h2 className="reveal mt-4 max-w-[18ch] font-serif text-ink tracking-tightest
                         leading-[1.05] text-[clamp(2.125rem,3.75vw,3.375rem)]"
              style={{ '--reveal-delay': '80ms' }}>
            Solutions for scaled content production
          </h2>

          <div className="mt-12 flex flex-col gap-16">
            {USE_CASES.map((u, i) => (
              <article key={u.eyebrow}
                       className={`reveal grid items-center gap-8 lg:grid-cols-2 lg:gap-gutter
                                   ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}
                       style={{ '--reveal-delay': '60ms' }}>
                <div>
                  <p className="eyebrow text-flame-600">{u.eyebrow}</p>
                  <h3 className="mt-3 max-w-[26ch] font-sans text-h5 text-ink">{u.lede}</h3>
                  <p className="mt-4 max-w-[54ch] text-text-main text-ink text-pretty">{u.body}</p>
                  <p className="mt-6 eyebrow text-ink">Outcome</p>
                  <p className="mt-2 flex max-w-[54ch] items-start gap-2 text-text-small text-ink text-pretty">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-flame-600" />
                    <span>{u.outcome}</span>
                  </p>
                  {u.note && <p className="mt-3 text-text-tiny text-dark-700">{u.note}</p>}
                </div>
                <div className="relative">
                  <img src={u.img} alt="" aria-hidden="true" loading="lazy"
                       className="w-full object-contain" style={{ aspectRatio: '622/371' }} />
                  <img src={u.cursor} alt="" aria-hidden="true" loading="lazy"
                       className="pointer-events-none absolute -bottom-4 right-6 hidden h-[56px]
                                  max-w-none lg:block" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 642px */}
      <Accordion title="Questions about Jasper Grid" items={FAQ} />
      <div aria-hidden="true" className="h-[112px]" />

      {/* 925px — this page's own CTA wording, measured on live */}
      <PageCta headline="Start creating with Grid today"
               docName="Jasper Grid Closing CTA"
               ctas={[{ label: 'Learn More', variant: 'btn-primary' }]} />
    </>
  )
}
