import { ArrowRight } from '../components/Icons'
import SimpleLayout from '../components/blocks/SimpleLayout'
import RevealSection from '../components/blocks/RevealSection'
import Closing from '../components/Closing'

/* ---------------------------------------------------------------------------
   /content-pipelines — live page height 7483px (footer 1175 of that).

   The stub table recorded an empty h1 because live has NO <h1> on this route:
   the display line "Automate marketing content at scale with Jasper AI Agents"
   is tagged <h2> inside `illo_hero`. It is promoted to <h1> here so the page
   has exactly one document heading (the QA sweep checks for that).

   Live block order and measured heights (.scrape/plat-content-pipelines.json):
       80  g_section_space
      925  illo_hero            flame-600 duotone photo band, WHITE copy
     1378  g_section_wrap       "From manual production…" editorial collage
     1038  pipe_approach        the three-column pipeline diagram
     1988  pipe_customers       logo wall + statement panels, Grid promo,
                                "Meet the marketers" split
      900  closing_photo_wrap

   MEASURED illo_hero: a full-bleed flame-600 ground carrying a duotone
   photograph ("CP Hero placeholder"), a mono eyebrow on a white chip, an
   80/80 Feature display line in WHITE in a ~672px measure, a 16/22.4 body and
   two 48px buttons — the outline one painted white-on-coral, so it uses the
   `btn-inverse` variant rather than the ink-bordered default.

   MEASURED pipe_approach: three tracks inside the 1360px well —
     LEFT   "CONTEXT LAYER" chip, a 38px Feature h3, a 14px body, a five-band
            colour rule, then four mono chip links (Brand IQ / Audience IQ /
            Marketing IQ / Knowledge Base)
     MIDDLE a dashed-outline column: "Content Pipeline" h3, a 14px body, then
            four stacked 38px Feature words each on its own saturated
            highlight box with a small glyph tile — Studio (flame-400),
            Agents (yellow-600), Grid (green-500), Canvas (blue-400)
     RIGHT  "RESULTS" chip, a 38px Feature h3, a 14px body, then a vertically
            SCROLLING marquee of seven 18px mono outcome rows, each led by a
            diamond glyph. The list is duplicated in the live DOM, which is
            why the capture reports each label twice.

   MEASURED pipe_customers: a 5 x 7 grid of 156x64 customer logos, with two
   flame-400 statement panels laid over rows 2-3 and 5-6 of the middle three
   columns.
--------------------------------------------------------------------------- */

/* `pipe_approach` middle column. Tints read off the live highlight boxes. */
const PIPELINE_TOOLS = [
  { label: 'Studio', tint: 'bg-flame-400', chip: 'bg-flame-600', link: 'Explore Studio',
    body: 'Where teams design custom workflows, templates, and automations that match their marketing processes.' },
  { label: 'Agents', tint: 'bg-yellow-600', chip: 'bg-yellow-700', link: 'Explore Agents',
    body: 'AI teammates trained on your brand who execute repeatable tasks like writing briefs, optimizing SEO, or localizing assets.' },
  { label: 'Grid', tint: 'bg-green-500', chip: 'bg-green-600', link: 'Explore Grid',
    body: 'An AI-enabled spreadsheet that brings structure and scalability to multi-asset campaigns — perfect for high-volume content operations.' },
  { label: 'Canvas', tint: 'bg-blue-400', chip: 'bg-blue-500', link: 'Explore Canvas',
    body: 'The creative workspace where ideas turn into content, enhanced by context and connected to your broader pipeline.' },
]

const IQ_LINKS = ['Brand IQ', 'Audience IQ', 'Marketing IQ', 'Knowledge Base']

const OUTCOMES = ['Campaigns', 'Personalization', 'SEO / AEO / GEO', 'Product Descriptions',
                  'Localization', 'Rebrands', 'Blog Posts']

/* `.pipe_customers` — the live 5 x 7 wall, read left-to-right, top-to-bottom.
   Blank cells are where the two flame statement panels sit. */
const LOGOS = [
  ['Kelly', 'Wayfair', 'Sanofi', 'Prudential', 'Morning_Star'],
  ['IHeartMedia', null, null, null, 'Loreal'],
  ['Noom', null, null, null, 'Mars'],
  ['Supercell', 'Kelly', 'Bona', 'Cognizant', 'HH'],
  ['AAA', null, null, null, 'Alliant_group'],
  ['Hitachi', null, null, null, 'PGIM-Logo'],
  ['Harper_Collins', 'Cushman___Wakefield', 'Anthropologie', 'Boeing', 'Cox_Automotive'],
]

const logoSrc = (n) => (n === 'PGIM-Logo' ? '/assets/PGIM-Logo.avif' : `/assets/${n}_logo.webp`)

export default function ContentPipelines() {

  return (
    <>
      <div aria-hidden="true" className="h-[80px] bg-surface" />

      {/* ================= illo_hero — 1440 x 925 ========================== */}
      <RevealSection className="clip-bleed relative bg-flame-600" style={{ minHeight: 925 }}>
        <img src="/assets/CP-Hero-placeholder.avif" alt="" aria-hidden="true"
             className="pointer-events-none absolute inset-0 h-full w-full object-cover" />

        <div className="u-container relative flex flex-col justify-start pt-[120px]"
             style={{ minHeight: 925 }}>
          <div className="max-w-[672px]">
            <p className="reveal eyebrow inline-block bg-surface px-1 text-ink">Content Pipelines</p>
            <h1 className="reveal mt-6 font-serif text-white tracking-tightest leading-1
                           text-[clamp(2.5rem,5.55vw,5rem)]"
                style={{ '--reveal-delay': '80ms' }}>
              Automate marketing content at scale with Jasper AI Agents
            </h1>
            <p className="reveal mt-6 max-w-[46ch] text-text-main text-white text-pretty"
               style={{ '--reveal-delay': '140ms' }}>
              Jasper’s Agentic AI helps teams connect data, creativity, and distribution in one
              intelligent system that automates the entire content lifecycle from idea to
              publication.
            </p>
            <div className="reveal mt-8 flex flex-wrap items-center gap-4"
                 style={{ '--reveal-delay': '200ms' }}>
              <a href="#" className="btn btn-inverse">Start Free Trial</a>
              <a href="#" className="btn btn-tertiary">Get a Demo</a>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ========= g_section_wrap — the editorial collage, h=1378 ========== */}
      <RevealSection className="clip-bleed relative bg-flame-200 py-section-main">
        <div className="u-container">
          <h2 className="reveal max-w-[16ch] font-serif text-ink tracking-tightest leading-1
                         text-[clamp(2.5rem,5.55vw,5rem)]">
            From manual production to intelligent{' '}
            {/* live paints the last word as a flame highlight box */}
            <span className="bg-flame-500 text-flame-200 box-decoration-clone">automation</span>
          </h2>

          <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-gutter">
            {/* the running editorial prose */}
            <div className="reveal max-w-[420px]" style={{ '--reveal-delay': '80ms' }}>
              <p className="text-text-main text-ink text-pretty">
                <span className="font-serif text-h3 italic text-flame-600">For</span>{' '}
                decades, marketing teams have used automation to send emails, schedule posts, and
                track performance — but the content itself still relied on manual work.
              </p>
              <p className="mt-6 text-text-main text-ink">
                That’s <em className="italic underline">changing</em>.
              </p>
              <p className="mt-6 text-text-main text-ink text-pretty">
                <span className="bg-flame-500 px-1 font-medium text-flame-200">
                  AI Content Automation
                </span>{' '}
                is the next evolution of marketing technology. It goes beyond task automation to
                intelligently generate, adapt, and manage content across every channel, audience,
                &amp; language.
              </p>
            </div>

            {/* the numbered photo collage */}
            <div className="reveal grid grid-cols-2 gap-4 lg:grid-cols-3"
                 style={{ '--reveal-delay': '140ms' }}>
              <img src="/assets/Grid-Lifestyle-A.avif"
                   alt="Hands around a table strewn with notebooks, a laptop and drinks."
                   loading="lazy" className="col-span-2 h-auto w-full object-cover lg:col-span-1" />
              <img src="/assets/Pipe-Cursors.avif" alt="" aria-hidden="true" loading="lazy"
                   className="h-auto w-full object-contain" />
              <img src="/assets/Grid-Lifestyle-B.avif"
                   alt="Two colleagues looking at a screen together at a shared desk."
                   loading="lazy" className="h-auto w-full object-cover" />
            </div>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-gutter">
            <img src="/assets/Studio.avif"
                 alt="A Jasper Studio app preview building an awareness campaign, with brand identity and audience-segment fields."
                 loading="lazy"
                 className="reveal h-auto w-full border border-flame-400 object-contain" />

            <div className="reveal flex flex-col justify-center" style={{ '--reveal-delay': '120ms' }}>
              <p className="max-w-[36ch] font-sans text-h4 text-ink text-pretty">
                Instead of starting from scratch each time, teams can now connect their data, brand
                voice, and campaign logic into a self-running system that produces consistent,
                on-brand content —{' '}
                <span className="text-flame-600">automatically</span>
              </p>
              <p className="mt-8 max-w-[36ch] font-sans text-h4 text-ink text-pretty">
                This shift isn’t about replacing creativity. It’s about removing the repetitive
                steps that slow marketing teams down, so they can focus on{' '}
                <em className="italic underline">strategy</em>,{' '}
                <em className="italic underline">storytelling</em>, &amp;{' '}
                <em className="italic underline">growth</em>.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ========= pipe_approach — the three-column diagram, h=1038 ======== */}
      <RevealSection className="clip-bleed relative bg-surface py-section-main">
        <div className="u-container flex flex-col items-center text-center">
          <h2 className="reveal max-w-[14ch] font-serif text-ink tracking-tightest leading-1
                         text-[clamp(2.5rem,5.55vw,5rem)]">
            Jasper&apos;s unique{' '}
            <span className="bg-flame-500 text-flame-200 box-decoration-clone">approach</span>
          </h2>
          <p className="reveal mt-8 max-w-[62ch] text-text-main text-ink text-pretty"
             style={{ '--reveal-delay': '100ms' }}>
            Jasper’s Content Pipelines bring AI Content Automation to life. They connect your
            marketing strategy, creative process, and distribution channels into a single,
            intelligent flow — transforming how content moves through your organization.
          </p>
          <p className="reveal mt-6 font-medium text-text-main text-ink"
             style={{ '--reveal-delay': '150ms' }}>
            Each pipeline is powered by Jasper’s ecosystem of AI capabilities:
          </p>
        </div>

        <div className="u-container mt-16 grid gap-10 lg:grid-cols-3 lg:gap-gutter">
          {/* LEFT — context layer */}
          <div className="reveal">
            <p className="eyebrow inline-block bg-flame-300 px-1 text-flame-600">CONTEXT LAYER</p>
            <h3 className="mt-4 font-serif text-ink tracking-tightest leading-1
                           text-[clamp(1.875rem,2.64vw,2.375rem)]">Jasper IQ</h3>
            <p className="mt-4 text-text-small text-ink text-pretty">
              IQ blends deep marketing expertise with your unique voice, audience insights, and
              product knowledge—applying rich context to ensure every output is high-quality,
              relevant, and on-brand.
            </p>
            {/* the five-band colour rule under the copy */}
            <div aria-hidden="true" className="mt-8 flex h-4 w-full">
              {['bg-yellow-600', 'bg-green-600', 'bg-blue-600', 'bg-violet-600', 'bg-flame-600']
                .map((c) => <span key={c} className={`${c} flex-1`} />)}
            </div>
            <ul className="mt-6 flex flex-col items-start gap-2">
              {IQ_LINKS.map((l) => (
                <li key={l}>
                  <a href="#" className="inline-flex items-center gap-1 bg-blue-300 px-1
                                         font-mono text-text-main text-ink">
                    {l}<ArrowRight className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* MIDDLE — the pipeline column, dashed outline on live */}
          <div className="reveal border border-dashed border-ink/40 p-6"
               style={{ '--reveal-delay': '90ms' }}>
            <h3 className="font-serif text-ink tracking-tightest leading-1
                           text-[clamp(1.875rem,2.64vw,2.375rem)]">Content Pipeline</h3>
            <p className="mt-4 text-text-small text-ink text-pretty">
              A Pipeline connects Jasper IQ to dynamic AI tools to turn strategy into execution—scaling
              creative output without losing control or quality.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {PIPELINE_TOOLS.map((t) => (
                <li key={t.label} className="flex items-start gap-2">
                  <span aria-hidden="true" className={`mt-2 grid h-5 w-5 shrink-0 place-items-center ${t.chip}`}>
                    <svg viewBox="0 0 12 12" className="h-3 w-3 text-white" fill="none">
                      <rect x="2" y="2" width="8" height="8" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </span>
                  <span className={`${t.tint} px-1 font-serif text-ink tracking-tightest leading-1
                                    text-[clamp(1.875rem,2.64vw,2.375rem)]`}>
                    {t.label}
                  </span>
                </li>
              ))}
            </ul>

            {/* the per-tool descriptions live behind the words as tooltips on
                live; rendered inline here so the copy is actually readable */}
            <dl className="mt-8 flex flex-col gap-4">
              {PIPELINE_TOOLS.map((t) => (
                <div key={t.label}>
                  <dt className="font-sans text-text-main font-medium text-ink">{t.label}</dt>
                  <dd className="mt-1 text-text-small text-ink text-pretty">{t.body}</dd>
                  <a href="#" className="link-arrow mt-2 text-text-small">
                    {t.link}<ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              ))}
            </dl>
          </div>

          {/* RIGHT — results */}
          <div className="reveal" style={{ '--reveal-delay': '160ms' }}>
            <p className="eyebrow inline-block bg-flame-300 px-1 text-flame-600">RESULTS</p>
            <h3 className="mt-4 font-serif text-ink tracking-tightest leading-1
                           text-[clamp(1.875rem,2.64vw,2.375rem)]">Scaled content</h3>
            <p className="mt-4 text-text-small text-ink text-pretty">
              Create more—and better—content in less time, with less chaos and zero tradeoffs.
            </p>

            {/* the vertical outcome marquee. `.reveal` stays on THIS container,
                never on the moving rows — an off-viewport row would never
                intersect and would stay permanently invisible. */}
            <div className="mt-8 h-[340px] overflow-hidden border-t border-dark-200">
              <ul className="flex flex-col">
                {[...OUTCOMES, ...OUTCOMES].map((o, i) => (
                  <li key={`${o}-${i}`}
                      className="flex items-center gap-3 border-b border-dark-200 py-2">
                    <span aria-hidden="true"
                          className="block h-3 w-3 shrink-0 rotate-45 border border-blue-600" />
                    <span className="font-mono text-[18px] leading-[21.6px] text-ink">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ========= pipe_customers — logo wall + statement panels =========== */}
      <RevealSection className="clip-bleed relative bg-surface pb-section-main">
        <div className="u-container relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {LOGOS.flat().map((n, i) => (
              <div key={i}
                   className="flex h-[89px] items-center justify-center border-b border-r border-dark-150">
                {n && (
                  <img src={logoSrc(n)} alt={n.replace(/_/g, ' ')} loading="lazy"
                       className="h-8 w-auto max-w-[156px] object-contain" />
                )}
              </div>
            ))}
          </div>

          {/* the two flame statement panels laid over the wall's middle three
              columns — absolute on lg, stacked below it on smaller screens */}
          <div className="mt-8 flex flex-col gap-6 lg:pointer-events-none lg:absolute lg:inset-0 lg:mt-0
                          lg:grid lg:grid-cols-5 lg:grid-rows-7 lg:gap-0">
            <div className="reveal flex items-center justify-center bg-flame-400 p-6 text-center
                            lg:col-span-3 lg:col-start-2 lg:row-span-2 lg:row-start-2">
              <p className="max-w-[28ch] font-serif text-ink tracking-tightest leading-[1.1]
                            text-[clamp(1.375rem,1.95vw,1.75rem)]">
                Together, these components create a living system that scales creative output
                without losing control or quality.
              </p>
            </div>
            <div className="reveal flex items-center justify-center bg-flame-500 p-6 text-center
                            lg:col-span-3 lg:col-start-2 lg:row-span-2 lg:row-start-5"
                 style={{ '--reveal-delay': '100ms' }}>
              <p className="max-w-[28ch] font-serif text-ink tracking-tightest leading-[1.1]
                            text-[clamp(1.375rem,1.95vw,1.75rem)]">
                It’s how{' '}
                <span className="bg-flame-600 px-1 text-flame-200">leading brands</span>{' '}
                are producing more — and better — content, in less time, with less chaos.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ========= "Learn how to use Jasper Grid" promo panel ============== */}
      <SimpleLayout
        variant="promo"
        bleed
        center
        tint="bg-flame-200"
        bgImage="/assets/Pipe-Grids-Lined-BG.avif"
        title="Learn how to use Jasper Grid"
        titleSize="54"
        cta={{ label: 'Get Certified', variant: 'btn-primary' }}
        spaceTop={0}
        spaceBottom={0}
        minHeight={360}
      />

      {/* ========= "Meet the marketers" split ============================== */}
      <RevealSection className="clip-bleed relative bg-surface py-section-main">
        <div className="u-container grid items-center gap-12 lg:grid-cols-2 lg:gap-gutter">
          <div className="reveal relative min-h-[320px] lg:min-h-[520px]">
            <img src="/assets/blue-triangle.png" alt="" aria-hidden="true" loading="lazy"
                 className="absolute -left-20 -top-6 hidden max-w-none lg:block"
                 style={{ width: 403, height: 458 }} />
            <img src="/assets/dots-wrap-1.png" alt="" aria-hidden="true" loading="lazy"
                 className="absolute bottom-[-70px] left-[220px] hidden max-w-none lg:block"
                 style={{ width: 405, height: 406 }} />
            <img src="/assets/demo_cta_img.jpg"
                 alt="Three colleagues talking over a laptop in a plant-filled office."
                 loading="lazy"
                 className="relative mx-auto h-auto w-full max-w-[622px] object-cover" />
          </div>

          <div>
            <p className="reveal eyebrow text-flame-600">Content Engineers</p>
            <h2 className="reveal mt-6 max-w-[16ch] font-serif text-ink tracking-tightest leading-[1.05]
                           text-[clamp(2.125rem,3.75vw,3.375rem)]"
                style={{ '--reveal-delay': '80ms' }}>
              Meet the marketers building the future of content
            </h2>
            <p className="reveal mt-8 font-medium text-text-main text-ink"
               style={{ '--reveal-delay': '120ms' }}>
              Every transformation starts with people.
            </p>
            <p className="reveal mt-6 max-w-[52ch] text-text-main text-ink text-pretty"
               style={{ '--reveal-delay': '150ms' }}>
              The rise of AI Content Automation has given birth to a new kind of marketer:{' '}
              <span className="font-medium text-flame-600">the Content Engineer</span> — professionals
              who combine creative intuition with systems thinking. They design smarter workflows,
              connect tools, train AI agents, and bring the brand’s strategy to life through
              automation.
            </p>
            <p className="reveal mt-6 max-w-[52ch] text-text-main text-ink text-pretty"
               style={{ '--reveal-delay': '180ms' }}>
              They’re not just content creators — they’re the architects of{' '}
              <em className="italic">scalable, intelligent marketing systems</em>. Jasper’s growing
              Content Engineer community shares best practices, workflows, and innovations to help
              each other stay ahead of the curve. Together, they’re building the future of
              marketing — one pipeline at a time.
            </p>

            <a href="#" className="reveal mt-8 block border border-flame-400 bg-flame-200 p-5"
               style={{ '--reveal-delay': '210ms' }}>
              <span className="eyebrow block text-flame-600">Related reading:</span>
              <span className="mt-2 block font-serif text-ink tracking-tightest leading-[1.1]
                               text-[clamp(1.5rem,1.95vw,1.75rem)]">
                What is a content engineer?
              </span>
            </a>
          </div>
        </div>
      </RevealSection>

      <Closing title="Ready to build your first Content Pipeline?"
               body="See how Jasper helps marketing teams automate creation, personalization, and delivery — all while keeping your brand voice intact."
               cta="Get A Demo"
               photo="/assets/Pipe-Closing-CTA.avif" />
    </>
  )
}
