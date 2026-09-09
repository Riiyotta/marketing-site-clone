import PlatformHero from '../components/PlatformHero'
import Marquee from '../components/Marquee'
import PageCta from '../components/PageCta'
import PlatformModels from '../components/PlatformModels'
import PlatformPipelines from '../components/PlatformPipelines'
import PlatformCanvas from '../components/PlatformCanvas'
import PlatformIQ from '../components/PlatformIQ'
import PlatformStudio from '../components/PlatformStudio'
import PlatformStories from '../components/PlatformStories'
import { useReveal } from '../hooks/useReveal'
import { ArrowRight } from '../components/Icons'

/* Block order measured on live /platform (.page_wrap children):
     hero -> marquee -> .models_wrap -> .geo_platform -> pipelines
     -> .canvas_wrap -> Jasper IQ cards -> Jasper Studio cards
     -> marketing-agents cards -> .slider_main_wrap -> closing CTA. */

/* Live /platform lists exactly three agents in .layout_cards_wrap (h=1011).
   Measured per card: 443 x 534, padding 32px, 40px gap, a flat tint with no
   border and no radius, then a 379x259 product screenshot below the copy. */
const AGENTS = [
  { title: 'Optimization Agent', tint: 'bg-blue-300',
    body: 'Optimizes headlines, meta descriptions, and internal linking strategies autonomously by tapping into platforms like SEMrush.',
    img: '/assets/agent-optimization.webp',
    alt: "User interface panel titled 'Let me get the Optimization Agent started!' with expandable options for Company Research, Keyword Research, and SEO Analysis." },
  { title: 'Personalization Agent', tint: 'bg-flame-300',
    body: 'Turn your customer data into action, creating personalized content at scale across email, ads, and more \u2013 for improved connection and conversion.',
    img: '/assets/agent-personalization.webp',
    alt: "Interface screen showing a personalization agent starting with steps: fetching customer data from CRM platform, parsing segment 'Gen Z', and checking engagement, geos, and last touch points." },
  { title: 'Research Agent', tint: 'bg-green-300',
    body: 'Turns deep research into on-brand briefs, summaries, and campaign ideas\u2014instantly.',
    img: '/assets/agent-research.webp',
    alt: 'Interface screen showing a research agent identifying primary competitors, aggregating public and third-party data, and extracting key product features.' },
]

export default function Platform() {
  const ref = useReveal()

  return (
    <>
      <PlatformHero />

      {/* live `.marquee_wrap` on /platform is 392px: 112px spacers, not the
          homepage's smaller step */}
      <Marquee space="py-[112px]" />

      <PlatformModels />

      {/* GEO — `.geo_platform`, measured 1300px on live at 1440:
            112px g_section_space
            768px .geo_product_container — a 1376px white panel, 1px dark-150
                  border, holding a 1246px inner row: 787px copy column on the
                  left, 459px animation column on the right
            112px g_section_space
          Live's right column is a third-party product-demo iframe
          (content-optimize-deploy.jasperpreview.app), replaced here with the GEO
          agent still per the iframe policy. The panel height is real layout, not
          padding invented to close the gap. */}
      <section ref={ref} className="bg-surface py-[112px]">
        <div className="u-container border border-dark-150 bg-surface">
          <div className="mx-auto grid h-full max-w-[1246px] items-center gap-10
                          px-8 py-16 lg:min-h-[768px] lg:grid-cols-[787px_minmax(0,1fr)]
                          lg:gap-gutter lg:px-[65px] lg:py-0">
            <div>
              <p className="reveal eyebrow text-text-main text-ink">GEO &amp; AI Discovery</p>
              <h2 className="reveal mt-6 max-w-[20ch] font-serif text-ink tracking-tightest
                             text-[clamp(2.5rem,5.55vw,5rem)] leading-1"
                  style={{ '--reveal-delay': '80ms' }}>
                Get cited by AI. Win the new front door of search.
              </h2>
              <p className="reveal mt-6 max-w-[50ch] text-text-large text-ink text-pretty"
                 style={{ '--reveal-delay': '140ms' }}>
                Jasper is the only enterprise platform that connects AI search visibility
                intelligence to governed execution. Marketing teams use Jasper to measure how
                their brand performs across every major AI answer engine, prioritize the actions
                that matter, and ship brand-governed content at scale, all in one place.
              </p>
              <a href="#" className="reveal link-arrow mt-6 text-text-main"
                 style={{ '--reveal-delay': '200ms' }}>
                Explore GEO
                <ArrowRight />
              </a>
            </div>
            <div className="reveal" style={{ '--reveal-delay': '160ms' }}>
              <img src="/assets/GEO-AGENT-HOME.avif" alt="" aria-hidden="true" loading="lazy"
                   className="h-auto w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      <PlatformPipelines />

      <PlatformCanvas />

      <PlatformIQ />

      <PlatformStudio />

      {/* Marketing Agents — live `.layout_cards_wrap` h=1011: eyebrow, an
          h1-scale 54/56.7 ls -1.62px h2 in a 30ch measure, a 60ch intro, the
          "Explore our Agents" link, then exactly three 443x534 tinted cards
          (32px padding, 40px gap, no border, no radius) each closing on a
          379x259 product screenshot above an 18px flame "Explore" link.
          The 112px g_section_space sits ABOVE only — the trailing spacer
          measures 0, so a symmetric py- would run the band 112px long. */}
      <section className="bg-surface pt-section-main">
        <div className="u-container flex flex-col gap-12">
          <div>
            <p className="reveal eyebrow text-text-main text-ink">Marketing Agents</p>
            <h2 className="reveal mt-6 max-w-[30ch] font-serif text-ink tracking-tightest
                           text-[clamp(2rem,3.75vw,3.375rem)] leading-1.05"
                style={{ '--reveal-delay': '80ms' }}>
              Purpose-built agents for every stage of execution
            </h2>
            <p className="reveal mt-3 max-w-[60ch] text-text-main text-ink text-pretty"
               style={{ '--reveal-delay': '140ms' }}>
              Jasper Agents are specialized AI workers designed to execute specific steps of the
              content pipeline. Rather than standalone bots, agents operate in context—powered by
              Jasper IQ and coordinated through pipelines.
            </p>
            <a href="#" className="reveal link-arrow mt-6 text-text-main"
               style={{ '--reveal-delay': '200ms' }}>
              Explore our Agents
              <ArrowRight />
            </a>
          </div>

          <div className="grid gap-gutter md:grid-cols-3">
            {AGENTS.map((a, i) => (
              <article key={a.title}
                       className={`reveal ${a.tint} flex flex-col gap-10 p-8`}
                       style={{ '--reveal-delay': `${i * 100}ms` }}>
                <div>
                  <h3 className="max-w-[20ch] font-serif text-ink tracking-tighter leading-1.1
                                 text-[clamp(1.5rem,2.4vw,1.75rem)]">{a.title}</h3>
                  <p className="mt-3 max-w-[50ch] text-text-main text-ink text-pretty">{a.body}</p>
                </div>
                <img src={a.img} alt={a.alt} loading="lazy"
                     className="mt-auto aspect-[379/259] w-full object-contain" />
                <a href="#" className="link-arrow text-text-large">
                  Explore<ArrowRight />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PlatformStories />

      <PageCta />
    </>
  )
}
