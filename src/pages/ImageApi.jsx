import ApiEndpointCards, { FlameGrid } from '../components/blocks/ApiEndpointCards'
import WindowCta from '../components/blocks/WindowCta'
import { useReveal } from '../hooks/useReveal'
import { ArrowRight } from '../components/Icons'

/* ---------------------------------------------------------------------------
   /image/api — "Launch AI image experiences in weeks, not quarters"

   Block order and heights MEASURED on live jasper.ai/image/api at 1440px
   (.scrape/plat-image-api.json), page total 6985px:

     721  api_hero_wrap        the h1 at 61.3px Feature INSIDE a flame-300
                               block that snaps to the page's flame grid
                               lattice; a body block, two buttons, and a
                               checkerboard cut-out still + a dark cURL panel
                               on the right
     556  api-stats_wrap       a FULL-BLEED flame-600 band holding four white
                               stat tiles (500k / 8 / 5s / SOC2)
     198  wrapper_frame_wrap   "Your platform with Jasper APIs" strip
     719  image_slider_wrap    four 56px Feature value statements over the
                               718x719 slider stills on the Images Slider BG
     271  cannes_container_wrap "Built for your platform" + intro
     624  cannes_horizontal_wrap is-3-column — Authenticate / Request / Return,
                               each a tinted card (green / yellow / blue)
                               listing mono chips joined by 16px arrows
    1672  api_cards_section    the shared 8-endpoint catalogue
     350  window_wrap          navy closing band, "Get started with Jasper APIs
                               today" + "Get API Access"

   The whole page is ruled with a flame grid lattice; it is drawn once per band
   as `FlameGrid` rather than as the ~40 absolutely-positioned divs live ships.
--------------------------------------------------------------------------- */

const STATS = [
  { n: '500k', label: 'daily processed images via Jasper APIs' },
  { n: '8', label: 'proprietary image models, all composable to your platform needs' },
  { n: '5s', label: 'latency designed for real-time in-product experiences' },
  { n: 'SOC2', label: 'enterprise-grade security with data protected in transit and at rest' },
]

const VALUES = [
  { title: 'Ship AI features ahead of competitors',
    img: '/assets/API-1.avif',
    alt: 'Red illustration depicting a UI generating an image from a prompt.',
    body: 'Launch in weeks, not quarters. Jasper gives you production-grade image capabilities without hiring rare ML talent or pulling engineers off your core roadmap.' },
  { title: 'Keep users in your product',
    img: '/assets/API-2.avif',
    alt: 'Editing tool interface with options to clean up and upscale an image.',
    body: 'Embed image editing natively so users never need Photoshop or Canva mid workflow. Your product stays front and center with no visible Jasper branding.' },
  { title: 'Quality your users can trust',
    img: '/assets/API-3.avif',
    alt: 'Red illustration depicting updating image variants in a grid.',
    body: 'Task specific models deliver predictable outputs: no distortions, no color drift, no random surprises. From cleanup to decompose, what users request is what they get.' },
  { title: 'Composable from day one',
    img: '/assets/API-4.avif',
    alt: 'Screenshot of a curl command for the Jasper AI uncrop endpoint.',
    body: 'Start with one endpoint like background removal, then add cleanup, upscaling, decompose, uncrop, and more without rebuilding your integration.' },
]

const FLOW = [
  { title: 'Authenticate', tint: 'bg-green-300',
    body: 'Connect securely with enterprise-grade controls designed for production workloads and protected customer data.',
    chips: ['API key/auth token', 'secure request', 'authorized endpoint'],
    note: 'SOC 2 enterprise-grade security posture for sensitive image workflows' },
  { title: 'Request', tint: 'bg-yellow-500',
    body: 'Call task-specific, composable endpoints for background removal, cleanup, upscaling, decompose, uncrop, and more with clear docs and predictable behavior.',
    chips: ['input image', 'remove-bg', 'cleanup', 'decompose', 'upscale'],
    note: 'Start with one endpoint and expand capabilities without adding a second vendor or rebuilding your architecture.' },
  { title: 'Return', tint: 'bg-blue-300',
    body: 'Receive optimized, pixel-perfect assets with low latency, ready for real-time UX and high-throughput production workflows, including decompose outputs that turn flat images into editable layers.',
    chips: ['processed image', 'quality checks', 'live in your UX'],
    note: '500K+ images/day proven in production with a leading design platform' },
]

/* `.api_flow_chip` — a mono label joined to the next by a 16px arrow glyph. */
const ChipRow = ({ chips }) => (
  <div className="flex flex-wrap items-center gap-2">
    {chips.map((c, i) => (
      <span key={c} className="flex items-center gap-2">
        <span className="border border-ink/20 bg-surface px-2 py-1 font-mono text-text-tiny text-ink">
          {c}
        </span>
        {i < chips.length - 1 && <ArrowRight className="h-3 w-3 shrink-0 text-ink" />}
      </span>
    ))}
  </div>
)

export default function ImageApi() {
  const ref = useReveal()

  return (
    <>
      {/* 721px — the flame-ruled hero */}
      <section ref={ref} className="clip-bleed relative bg-surface py-[64px] md:py-[80px]">
        <FlameGrid />
        <div className="u-container relative grid items-center gap-10 lg:grid-cols-2 lg:gap-10">
          <div>
            <h1 className="reveal inline-block bg-flame-300 px-6 py-6 font-serif text-ink
                           tracking-tightest leading-1 text-[clamp(2.25rem,4.26vw,3.83rem)]">
              Launch AI image experiences in weeks, not quarters
            </h1>
            <p className="reveal mt-6 max-w-[52ch] bg-flame-300 p-6 text-text-main text-ink text-pretty"
               style={{ '--reveal-delay': '80ms' }}>
              Your product, your UX, our APIs. Deliver background removal, cleanup, upscaling, and
              decompose with pixel-perfect quality, unmatched latency, and no ML infrastructure to
              build.
            </p>
            <div className="reveal mt-8 flex flex-wrap items-center gap-3"
                 style={{ '--reveal-delay': '160ms' }}>
              <a href="#" className="btn btn-secondary">View Docs</a>
              <a href="#" className="btn btn-primary">Get API Access</a>
            </div>
          </div>
          {/* the hero art is TWO layers on live — a cut-out cyclist photo on a
              transparency checkerboard and a dark cURL request panel below it,
              both snapped to the flame grid. They are lazy-loaded from a
              Webflow collection and never resolve in a headless tree-walk, so
              the pair is lifted from a live element screenshot. An earlier
              draft used API-4.avif here, which is a different (much smaller)
              slider still and read as a stray thumbnail. */}
          <div className="reveal lg:-mr-[calc((100vw-min(100vw,85rem))/2)]"
               style={{ '--reveal-delay': '140ms' }}>
            <img src="/assets/image-api-hero.png"
                 alt="A cut-out cyclist photograph on a transparency checkerboard beside a cURL request to the Jasper uncrop endpoint."
                 loading="lazy" className="w-full object-contain" />
          </div>
        </div>
      </section>

      {/* 556px — full-bleed flame-600 stat band */}
      <section className="clip-bleed relative bg-flame-600 py-[64px] md:py-[80px]">
        <div className="u-container">
          <h2 className="reveal max-w-[24ch] font-serif text-white tracking-tightest leading-[1.05]
                         text-[clamp(2.125rem,3.75vw,3.375rem)]">
            Jasper API powers our clients platforms
          </h2>
          <div className="mt-10 grid gap-gutter sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={s.n}
                   className="reveal flex flex-col items-center gap-4 bg-surface p-8 text-center"
                   style={{ '--reveal-delay': `${i * 80}ms` }}>
                <span className="font-serif text-ink tracking-tightest leading-1
                                 text-[clamp(2.5rem,3.75vw,3.375rem)]">{s.n}</span>
                <span className="text-text-small text-ink text-pretty">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 198px */}
      <section className="clip-bleed relative bg-surface py-[48px]">
        <FlameGrid />
        <div className="u-container relative">
          <h2 className="reveal font-serif text-ink tracking-tightest leading-1
                         text-[clamp(1.875rem,2.64vw,2.375rem)]">
            Your platform with Jasper APIs
          </h2>
        </div>
      </section>

      {/* 719px — the four value statements over the slider stills */}
      <section className="clip-bleed relative bg-surface">
        <img src="/assets/Images-Slider-BG.avif" alt="" aria-hidden="true" loading="lazy"
             className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
        <div className="u-container relative py-[64px] md:py-[80px]">
          <div className="grid gap-gutter sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <article key={v.title} className="reveal"
                       style={{ '--reveal-delay': `${(i % 4) * 80}ms` }}>
                <img src={v.img} alt={v.alt} loading="lazy"
                     className="w-full object-cover" style={{ aspectRatio: '1/1' }} />
                <h3 className="mt-5 max-w-[18ch] font-serif text-ink tracking-tightest leading-[1.05]
                               text-[clamp(1.5rem,2.64vw,2.375rem)]">
                  {v.title}
                </h3>
                <p className="mt-3 text-text-small text-ink text-pretty">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 271px */}
      <section className="clip-bleed relative bg-surface py-[56px]">
        <FlameGrid />
        <div className="u-container relative flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="reveal max-w-[16ch] font-serif text-ink tracking-tightest leading-1
                         text-[clamp(1.875rem,2.64vw,2.375rem)]">
            Built for your platform
          </h2>
          <p className="reveal max-w-[52ch] text-text-main text-ink text-pretty"
             style={{ '--reveal-delay': '80ms' }}>
            The same endpoints cover catalog consistency, ad creative ops, partner platforms, and
            retail media, at any scale.
          </p>
        </div>
      </section>

      {/* 624px — Authenticate / Request / Return */}
      <section className="clip-bleed relative bg-surface pb-[80px]">
        <FlameGrid />
        <div className="u-container relative grid gap-gutter lg:grid-cols-3">
          {FLOW.map((f, i) => (
            <article key={f.title} className={`reveal flex flex-col gap-4 ${f.tint} p-6`}
                     style={{ '--reveal-delay': `${i * 90}ms` }}>
              <h3 className="font-serif text-ink tracking-tightest leading-[1.1]
                             text-[clamp(1.5rem,1.95vw,1.75rem)]">
                {f.title}
              </h3>
              <p className="text-text-small text-ink text-pretty">{f.body}</p>
              <ChipRow chips={f.chips} />
              <p className="mt-auto pt-2 text-text-small text-ink text-pretty">{f.note}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 1672px — shared with /image/pipelines */}
      <ApiEndpointCards />

      {/* 350px */}
      <WindowCta title="Get started with Jasper APIs today"
                 cta={{ label: 'Get API Access', variant: 'btn-primary' }} />
    </>
  )
}
