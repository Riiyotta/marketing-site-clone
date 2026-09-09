import Catalog from '../components/blocks/Catalog'
import PageCta from '../components/PageCta'
import { useReveal } from '../hooks/useReveal'
import { Eyebrow, CtaRow } from '../components/blocks/primitives'

/* ---------------------------------------------------------------------------
   /marketing-iq — live page height 7211px (footer 1175 of that).

   Live block order and measured heights (.scrape/plat-marketing-iq.json,
   .scrape/txt-marketing-iq.json, .scrape/bg-marketing-iq.json):
       80  g_section_space
      615  grid_hero_wrap   yellow-400 ground, copy left, a 941x615 photo
                            bleeding off the RIGHT edge from x=499
     1414  catalog_wrap     "Built on what the best marketers know"
     1527  catalog_wrap     "A translation layer…"  (+ a coral Explore link)
     1475  catalog_wrap     "Tailor every message…"
      925  cta_main_wrap    (PageCta)
--------------------------------------------------------------------------- */

/* `.grid_hero_wrap` — page-local, since only this route in the IQ family uses
   it. MEASURED at 1440px (section y=80..695, h=615):
     ground   yellow-400 (rgb 255,253,217) full-bleed
     photo    941 x 615 anchored to the RIGHT edge at x=499.
              Live composites TWO layers here: the 1600x1250 source photo
              cropped and scaled into the band, plus a yellow-400 pixel-mosaic
              mask stepped over its left edge so the photo dissolves into the
              hero ground. The mosaic is drawn by live's own markup, not
              carried in the CDN asset, and reproducing it from the raw source
              rendered the whole 3-person photo un-cropped with no dissolve.
              So the band is taken as the flattened 941x615 region straight off
              the live capture — the same "nearest still" rule the third-party
              embeds use.
     copy     inside the 1360px well at x=40, vertically centred:
       eyebrow mono 16/16 ink        y=194 (114 into the band)
       h1      Feature 80/80 ink, 672px measure, 2 lines
       body    ABC ROM 16/22.4 ink, 462px measure
       CTAs    outline "Start Free Trial" + filled "Get a Demo"
   The photo carries a dithered/pixelated left edge in the asset itself, so no
   gradient mask is added on top of it. */
function GridHero() {
  const ref = useReveal({ threshold: 0 })
  return (
    <section ref={ref} className="relative clip-bleed bg-yellow-400">
      {/* the photo band — right-anchored, full section height */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block"
           style={{ width: 941 }} aria-hidden="true">
        <img src="/assets/marketing-iq-hero-band.jpg" alt=""
             className="h-full w-full object-cover" />
      </div>

      <div className="relative u-container flex min-h-[615px] flex-col justify-center py-[112px]">
        <div className="flex max-w-[672px] flex-col">
          <Eyebrow className="reveal">Marketing IQ</Eyebrow>

          <h1 className="reveal mt-[26px] font-serif text-ink tracking-tightest
                         text-[clamp(2.5rem,5.55vw,5rem)] leading-1"
              style={{ '--reveal-delay': '80ms' }}>
            Marketing Intelligence, built-in
          </h1>

          <p className="reveal mt-6 max-w-[462px] text-text-main text-ink text-pretty"
             style={{ '--reveal-delay': '140ms' }}>
            Power your content with AI that knows what converts. Marketing IQ is the
            intelligent AI layer designed for marketers, trained on marketing, and
            configurable to work like your smartest teammate.
          </p>

          <CtaRow
            className="reveal mt-8"
            style={{ '--reveal-delay': '200ms' }}
            ctas={[
              { label: 'Start Free Trial', variant: 'btn-secondary' },
              { label: 'Get a Demo', variant: 'btn-primary' },
            ]}
          />
        </div>
      </div>

      {/* below lg the photo stacks under the copy rather than bleeding */}
      {/* below lg the raw photo stacks under the copy — no mosaic edge needed
          there, because the band no longer meets the copy column. */}
      <img src="/assets/marketing-iq-heroriso-flipped.avif" alt=""
           aria-hidden="true"
           className="block h-[280px] w-full object-cover lg:hidden" />
    </section>
  )
}

export default function MarketingIQ() {
  return (
    <>
      {/* live opens with an 80px g_section_space above the hero band */}
      <div aria-hidden="true" className="h-[80px] bg-surface" />

      <GridHero />

      <Catalog
        eyebrow="Marketing Best Practices"
        title="Built on what the best marketers know"
        body="Jasper is fine-tuned with proven marketing best practices, so whether you're writing a blog post, subject line, or full campaign, every output is optimized for quality, accuracy, and performance from the start."
        img={{ src: '/assets/best-practises.png', w: 1360, h: 941,
               alt: 'Jasper app library browsing marketing-function templates such as Product Description and Landing Page' }}
        spaceTop={182}
        spaceBottom={0}
      />

      <Catalog
        eyebrow="Multimodal Knowledge"
        title="A translation layer that helps LLMs speak the language of your business"
        body="Jasper extracts insights from your content and knowledge sources—across text, data, video, audio, and images—and translates them into precise AI inputs, optimizing outputs across any format. It’s how Jasper helps general-purpose LLMs speak the language of your brand and your business."
        link={{ label: 'Explore Knowledge Base', href: '/knowledge-base' }}
        img={{ src: '/assets/multimodal-knowldge.avif', w: 1360, h: 880,
               alt: 'Knowledge Base view showing documents, video, and image sources feeding Jasper' }}
        spaceTop={182}
        spaceBottom={61}
      />

      <Catalog
        eyebrow="Audiences"
        title="Tailor every message to the right audience—without losing your voice"
        body="From niche communities to global markets, different audiences require different approaches. With Audiences in Jasper, you can build context for each group that Jasper references to transform outputs—so your content feels personal, relevant, and still unmistakably you."
        img={{ src: '/assets/audience.avif', w: 1360, h: 868,
               alt: 'Audiences panel describing a saved audience profile and its context' }}
        spaceTop={182}
        spaceBottom={74}
      />

      <PageCta />
    </>
  )
}
