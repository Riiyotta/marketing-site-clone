import ApiEndpointCards, { FlameGrid } from '../components/blocks/ApiEndpointCards'
import WindowCta from '../components/blocks/WindowCta'
import { useReveal } from '../hooks/useReveal'
import { ArrowRight } from '../components/Icons'

/* ---------------------------------------------------------------------------
   /image/pipelines — "Pixel-perfect product imagery built for scale"

   The h1 is EMPTY in the shallow capture because live tags the page heading as
   an <h2> inside `.scale_hero_wrap`; the real heading, read from the JSON and
   confirmed against .scrape/plat-image-pipelines.png, is
   "Pixel-perfect product imagery built for scale" at 59.8px Feature.
   It is rendered as the page <h1> here so the document has one.

   Block order and heights MEASURED on live at 1440px, page total 6482px:

     811  scale_hero_wrap      the heading in a BLUE-400 block snapped to the
                               page's blue grid lattice, an intro block beside
                               it, a "Get A Demo" button, then a faux app
                               window (Top Left / Top Right chrome) holding the
                               Ingest / Process / Scale triptych, 333x176 each,
                               with FLAME-600 30.3px ABC ROM step headings
     265  cannes_container_wrap "Image quality is the product experience" (54px)
                               centred on a full-bleed blue-400 band
     283  cannes_horizontal_wrap is-3-column — Inconsistent Quality / Rising
                               Costs / Slow Production, three blue-300 cards
     214  cannes_container_wrap "Built for every visual workflow" (54px)
    1073  image_pipe_section   four workflow rows, 2-up, each a mono eyebrow
                               chip, a 38px Feature heading, a body, a chip
                               flow and an outcome line
    1672  api_cards_section    the shared 8-endpoint catalogue
     350  window_wrap          navy closing band + "Get A Demo"

   Unlike /image/api the lattice here is BLUE, so `FlameGrid` is tinted via the
   shared component's className rather than forked.
--------------------------------------------------------------------------- */

const STEPS = [
  { title: 'Ingest', img: '/assets/SHIP-FASTER---INGEST.avif',
    alt: 'Placeholder for the ingest step UI, showing source assets being uploaded.',
    body: 'Upload raw product photography or connect directly to your DAM or PIM. Jasper ingests your source assets automatically.' },
  { title: 'Process', img: '/assets/BRAND-CONSISTENCY---PROCESS.avif',
    alt: 'Placeholder for the process step UI, showing brand rules applied to an image.',
    body: 'Proprietary models apply your brand rules with pixel-perfect precision: adjusting lighting, shadows, backgrounds, and framing without altering the product.' },
  { title: 'Scale', img: '/assets/BRAND-CONSISTENCY---PROCESS-1.avif',
    alt: 'Placeholder for the scale step UI, showing generated variants.',
    body: 'Generate unlimited variations for channels, markets, and audiences in minutes not months. From your first asset to your millionth.' },
]

const PROBLEMS = [
  { title: 'Inconsistent Quality',
    body: "Inconsistent quality erodes brand trust across teams and agencies. Every handoff introduces drift, and manual QA can't keep pace with volume." },
  { title: 'Rising Costs',
    body: 'Costs climb with every new variant. As channels, formats, and product lines expand, production effort scales right along with them.' },
  { title: 'Slow Production',
    body: 'Production slows growth — new SKUs take months of coordination. Creative teams become the bottleneck, not the accelerator.' },
]

const WORKFLOWS = [
  { eyebrow: 'PRODUCT PHOTOGRAPHY AUTOMATION',
    title: 'eCommerce-ready assets from raw photos, automatically',
    body: 'Transform raw product photos into standardized assets with consistent shadows, cropping, and retouching — at scale, without manual production work.',
    chips: ['Relight', 'Uncrop', 'Cleanup', 'High-volume output'],
    outcome: 'Up to 50% lower production costs with dramatically improved consistency.' },
  { eyebrow: 'SCALABLE BRAND GOVERNANCE',
    title: 'Automated brand uniformity across the digital shelf',
    body: 'Replace agency coordination and manual QA with automated background enforcement across markets and channels. Instant, scalable brand governance.',
    chips: ['Brand assets', 'Jasper IQ', 'Ad variants'],
    outcome: 'Instant, scalable brand uniformity across the entire digital shelf.' },
  { eyebrow: 'MULTICHANNEL CONTENT CREATION',
    title: 'Optimized variants for every channel from a single source',
    body: 'Generate image variants for marketplaces, paid media, social, email, and web — all from one file. Auto-generate SEO metadata, product copy, and ad creative in the same pipeline.',
    chips: ['SEO/AEO metadata', 'Jasper IQ', 'Image touch ups', 'Ad variant'],
    outcome: 'Reduce total content production time by up to 75%.' },
  { eyebrow: 'PERSONALIZATION AT SCALE',
    title: '1:1 visual personalization without multiplying production',
    body: 'Create audience, market, and channel-specific image variants automatically. Localize backgrounds, formats, and visual context by region, season, or segment.',
    chips: ['Replace bg image', 'Resize image', 'Jasper IQ'],
    outcome: 'True 1:1 personalization at scale — without the cost or complexity of manual production.' },
]

/* The blue lattice this page rules every band with — the same geometry as the
   /image/api flame lattice, retinted to the blue the capture shows. */
const BlueGrid = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0"
       style={{
         backgroundImage:
           'repeating-linear-gradient(to right, rgba(0,17,167,.24) 0 1px, transparent 1px 113.33px),' +
           'repeating-linear-gradient(to bottom, rgba(0,17,167,.24) 0 1px, transparent 1px 113.33px)',
       }} />
)

const ChipRow = ({ chips }) => (
  <div className="flex flex-wrap items-center gap-2">
    {chips.map((c, i) => (
      <span key={c} className="flex items-center gap-2">
        <span className="bg-blue-300 px-2 py-1 font-mono text-text-tiny text-ink">{c}</span>
        {i < chips.length - 1 && <ArrowRight className="h-3 w-3 shrink-0 text-ink" />}
      </span>
    ))}
  </div>
)

export default function ImagePipelines() {
  const ref = useReveal()

  return (
    <>
      {/* 811px */}
      <section ref={ref} className="clip-bleed relative bg-surface pt-[64px] md:pt-[80px]">
        <BlueGrid />
        <div className="u-container relative">
          <div className="grid items-start gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <h1 className="reveal bg-blue-400 px-6 py-6 font-serif text-ink tracking-tightest
                           leading-1 text-[clamp(2.25rem,4.16vw,3.74rem)]">
              Pixel-perfect product imagery built for scale
            </h1>
            <p className="reveal bg-blue-400 px-6 py-6 text-text-main text-ink text-pretty"
               style={{ '--reveal-delay': '80ms' }}>
              Create high-quality, on-brand product images at enterprise scale. Turn manual
              production bottlenecks into automated asset factories. Generate pixel-perfect product
              imagery at 10× the speed and up to 50% lower cost.
            </p>
          </div>
          <div className="reveal mt-6 flex lg:justify-end" style={{ '--reveal-delay': '140ms' }}>
            <a href="#" className="btn btn-primary">Get A Demo</a>
          </div>

          {/* the faux app window holding the Ingest / Process / Scale triptych */}
          <div className="reveal mt-10 border border-dark-150 bg-surface"
               style={{ '--reveal-delay': '180ms' }}>
            <div className="flex items-center justify-between gap-4 border-b border-dark-150 px-3 py-2">
              <img src="/assets/Top-Left.avif" alt="" aria-hidden="true" loading="lazy"
                   className="h-[36px] w-auto max-w-none object-contain" />
              <img src="/assets/Top-Right.avif" alt="" aria-hidden="true" loading="lazy"
                   className="h-[30px] w-auto max-w-none object-contain" />
            </div>
            <div className="grid gap-10 bg-dark-100 p-8 md:grid-cols-3">
              {STEPS.map((s) => (
                <div key={s.title}>
                  <img src={s.img} alt={s.alt} loading="lazy"
                       className="w-full object-contain" style={{ aspectRatio: '333/176' }} />
                  <h2 className="mt-4 font-sans text-[clamp(1.5rem,2.1vw,1.9rem)] leading-[1.1]
                                 text-flame-600">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-text-small text-ink text-pretty">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 265px — full-bleed blue-400 statement */}
      <section className="clip-bleed relative bg-blue-400 py-[56px]">
        <div className="u-container text-center">
          <h2 className="reveal mx-auto max-w-[24ch] font-serif text-ink tracking-tightest
                         leading-[1.05] text-[clamp(2.125rem,3.75vw,3.375rem)]">
            Image quality is the product experience
          </h2>
          <p className="reveal mx-auto mt-4 max-w-[64ch] text-text-main text-ink text-pretty"
             style={{ '--reveal-delay': '80ms' }}>
            Every color, texture, and shadow influences trust, conversion, and revenue. But as
            catalogs expand and channels multiply, traditional production breaks down.
          </p>
        </div>
      </section>

      {/* 283px */}
      <section className="clip-bleed relative bg-surface py-[40px]">
        <BlueGrid />
        <div className="u-container relative grid gap-gutter lg:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <article key={p.title} className="reveal bg-blue-300 p-6"
                     style={{ '--reveal-delay': `${i * 90}ms` }}>
              <h3 className="font-serif text-ink tracking-tightest leading-[1.1]
                             text-[clamp(1.5rem,1.95vw,1.75rem)]">
                {p.title}
              </h3>
              <p className="mt-3 text-text-small text-ink text-pretty">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 214px */}
      <section className="clip-bleed relative bg-surface py-[48px]">
        <BlueGrid />
        <div className="u-container relative text-center">
          <h2 className="reveal mx-auto max-w-[22ch] font-serif text-ink tracking-tightest
                         leading-[1.05] text-[clamp(2.125rem,3.75vw,3.375rem)]">
            Built for every visual workflow
          </h2>
        </div>
      </section>

      {/* 1073px — four workflow rows, 2-up */}
      <section className="clip-bleed relative bg-surface pb-[80px]">
        <BlueGrid />
        <div className="u-container relative grid gap-x-gutter gap-y-12 lg:grid-cols-2">
          {WORKFLOWS.map((w, i) => (
            <article key={w.eyebrow} className="reveal"
                     style={{ '--reveal-delay': `${(i % 2) * 90}ms` }}>
              <span className="eyebrow inline-block bg-blue-400 px-1 text-ink">{w.eyebrow}</span>
              <h3 className="mt-4 max-w-[24ch] font-serif text-ink tracking-tightest leading-1
                             text-[clamp(1.875rem,2.64vw,2.375rem)]">
                {w.title}
              </h3>
              <p className="mt-4 max-w-[56ch] text-text-main text-ink text-pretty">{w.body}</p>
              <div className="mt-5"><ChipRow chips={w.chips} /></div>
              <p className="mt-4 text-text-small text-ink text-pretty">{w.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 1672px — shared with /image/api */}
      <ApiEndpointCards />

      {/* 350px */}
      <WindowCta title="Get started with Jasper Image Pipelines today"
                 cta={{ label: 'Get A Demo', variant: 'btn-primary' }} />
    </>
  )
}
