import SideBlockStack from '../components/blocks/SideBlockStack'
import Faq from '../components/Faq'
import Closing from '../components/Closing'
import { useReveal } from '../hooks/useReveal'
import { Eyebrow, CtaRow } from '../components/blocks/primitives'

/* ---------------------------------------------------------------------------
   /jasper-iq — live page height 8809px (footer 1175 of that).

   Live block order and measured heights (.scrape/deep-jasper-iq.json,
   .scrape/txt-jasper-iq.json, .scrape/row-jasper-iq.json,
   .scrape/bg-jasper-iq.json):
     1309  hero_main_wrap       flame-200 ground for its top 640px, centred
                                copy, then a 6-piece floater collage
     4665  simple_layout_wrap   112px spacer, then:
                                  1424px text_grid_wrap (two mesh rows)
                                  3129px side_block stack (4 x 782)
      648  accordion_1          the FAQ, reusing the shared `Faq`
      112  g_section_space
      900  closing_photo_wrap   the photo CTA (shared `Closing`)
--------------------------------------------------------------------------- */

/* `.hero_main_wrap` collage. MEASURED absolute positions inside the 1440px
   band (page y minus 0 — the section starts at the page top):
     rive_background.avif        720x535 @ 360,659   the navy/coral plate
     avatar-headshots.png        389x477 @ 504,720   the portrait
     Knowledge Base.svg          288x193 @ 216,659
     Product IQ.avif             288x230 @ 144,928
     brand_iq-floater.png        288x190 @ 806,632
     marketing_iq_floater.avif   288x215 @ 936,929
   The z-order is source order: plate, portrait, then the four labelled cards.
   The flame-200 `.jasper_iq_bg_wrap` covers only the TOP 640px of the section,
   so the collage crosses from the tint onto white — reproduced with an
   absolutely positioned 640px band rather than a section background. */
const FLOATERS = [
  { src: '/assets/rive-background.avif', w: 720, h: 535, x: 360, y: 659, alt: '' },
  { src: '/assets/avatar-headshots.png', w: 389, h: 477, x: 504, y: 720,
    alt: 'Portrait of a marketer at the centre of the Jasper IQ collage' },
  { src: '/assets/knowledge-base.svg', w: 288, h: 193, x: 216, y: 659,
    alt: 'Add to Knowledge Base panel offering text, file, and URL sources' },
  { src: '/assets/product-iq.avif', w: 288, h: 230, x: 144, y: 928,
    alt: 'Product IQ card listing sizes and colours for a product' },
  { src: '/assets/brand-iq-floater.png', w: 288, h: 190, x: 806, y: 632,
    alt: 'Brand IQ card flagging an image that does not meet guidelines' },
  { src: '/assets/marketing-iq-floater.avif', w: 288, h: 215, x: 936, y: 929,
    alt: 'Marketing IQ card optimising newsletter content for open rates' },
]

function IQHero() {
  const ref = useReveal({ threshold: 0 })
  return (
    <section ref={ref} className="relative clip-bleed bg-surface" style={{ minHeight: 1309 }}>
      {/* `.jasper_iq_bg_wrap` — flame-200 covering only the top 640px */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 bg-flame-200" style={{ height: 640 }} />

      <div aria-hidden="true" className="h-[140px]" />

      <div className="relative u-container flex flex-col items-center text-center">
        <Eyebrow chip="bg-flame-400" className="reveal">Jasper IQ</Eyebrow>

        <h1 className="reveal mt-[26px] max-w-[1022px] font-serif text-ink tracking-tightest
                       text-[clamp(2.5rem,5.55vw,5rem)] leading-1"
            style={{ '--reveal-delay': '80ms' }}>
          Jasper IQ is the AI context layer for marketing content
        </h1>

        {/* live inlines four route links inside the paragraph */}
        <p className="reveal mt-6 max-w-[672px] text-text-main text-ink text-pretty"
           style={{ '--reveal-delay': '140ms' }}>
          Jasper IQ is Jasper&rsquo;s proprietary AI context layer for marketing. It applies four
          components throughout your content pipeline:{' '}
          <a href="/marketing-iq" className="underline">Marketing IQ</a> for marketing best
          practices, <a href="/brand-iq" className="underline">Brand IQ</a> for brand voice and
          style, <a href="#" className="underline">Product IQ</a> for accurate product context,
          and a <a href="/knowledge-base" className="underline">Knowledge Base</a> for grounding
          company content.
        </p>

        <CtaRow
          className="reveal mt-8 justify-center"
          style={{ '--reveal-delay': '200ms' }}
          ctas={[
            { label: 'Start Free Trial', variant: 'btn-secondary' },
            { label: 'Get A Demo', variant: 'btn-primary' },
          ]}
        />
      </div>

      {/* The collage. Live's pieces sit at fixed page-absolute offsets (the
          whole thing is one Rive stage), so the wrapper is pinned to the
          section at the measured y=537 rather than flowed after the copy —
          flowing it put the collage 122px high, because our substitute type
          sets the copy block shorter than live's.
          `bottom-0` + the measured 772px stage height reproduces live's
          537..1309 band exactly, and the section's own min-height holds it.
          Stacked into a simple responsive row below xl, where the measured
          offsets stop making sense. */}
      <div className="pointer-events-none absolute inset-x-0 mx-auto hidden xl:block"
           style={{ width: 1440, height: 772, top: 537 }} aria-hidden="false">

        {/* the pale graph field the collage sits on. MEASURED off the live
            capture: a flame-300 (rgb 255,232,226) block 1356 x 633 at x=42,
            y=563, ruled with white lines on a 28.5px pitch. Live draws it
            inside its Rive canvas; reproduced with the existing `.bg-grid`
            geometry on the token tint so no artwork is invented. */}
        <div aria-hidden="true"
             className="absolute bg-flame-300"
             style={{
               left: 42, top: 563 - 537, width: 1356, height: 633,
               backgroundImage:
                 'linear-gradient(to right, #fff 1px, transparent 1px),' +
                 'linear-gradient(to bottom, #fff 1px, transparent 1px)',
               backgroundSize: '28.5px 28.5px',
             }} />

        {FLOATERS.map((f) => (
          <img key={f.src} src={f.src} alt={f.alt} width={f.w} height={f.h} loading="lazy"
               className="absolute max-w-none"
               style={{ width: f.w, height: f.h, left: f.x, top: f.y - 537 }} />
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-6 px-6 pb-16 xl:hidden">
        {FLOATERS.slice(2).map((f) => (
          <img key={f.src} src={f.src} alt={f.alt} width={f.w} height={f.h} loading="lazy"
               className="h-auto w-[min(288px,45vw)] object-contain" />
        ))}
      </div>
    </section>
  )
}

/* `.text_grid_wrap` — two 1360x664 mesh rows. MEASURED at 1440px:
     row 1  copy col 787px at x=40 (54px Feature, 5 lines); the mesh sits to
            its right, bounding box x 958..1438, y 1422..2084 -> 480 x 662.
     row 2  mirrored — the mesh runs x 0..482 (it BLEEDS off the left page
            edge, it is not inset to the container), copy col 787px at x=613.
   The phrase "Jasper IQ" inside row 1 is a `.text-span-orange` span: white
   glyphs on flame-500 (rgb 250,117,96), sampled off the live pixels.

   The mesh itself, sampled off .scrape/plat-jasper-iq.png:
     fill    rgb(206,235,255) = blue-300   (row 1)
             rgb(230,255,217) = green-300  (row 2)
     cells   18px squares on a 19.6px pitch, i.e. a ~1.6px WHITE gutter
     shape   a ragged pixel silhouette with a handful of cells knocked back
             out to white inside the field
   Live serves this as an inline SVG lattice. Reproduced here as a CSS cell
   grid on the matching token tint plus a stepped clip-path for the ragged
   edge, so no artwork is invented and both colours stay tokenised. An earlier
   draft used blue-400 at 443x420, which read as one saturated solid block. */

const MESH_PITCH = 19.6
const MESH_W = 480
const MESH_H = 662

/* the handful of cells live knocks back out to white, as [col,row] on the
   19.6px lattice — read off the live capture. */
const MESH_HOLES = [[1, 12], [8, 3], [23, 2], [24, 12], [13, 19], [23, 19],
                    [6, 26], [6, 27], [7, 28], [19, 32]]

function MeshBlock({ tint, bleedLeft = false }) {
  return (
    <div aria-hidden="true"
         className={`relative ${tint} ${bleedLeft ? '' : 'ml-auto'}`}
         style={{
           width: MESH_W, height: MESH_H, maxWidth: '100%',
           // 18px cells on a 19.6px pitch -> a 1.6px white gutter between them
           backgroundImage:
             'linear-gradient(to right, #fff 1.6px, transparent 1.6px),' +
             'linear-gradient(to bottom, #fff 1.6px, transparent 1.6px)',
           backgroundSize: `${MESH_PITCH}px ${MESH_PITCH}px`,
           // the ragged pixel silhouette, stepped on the same lattice
           clipPath:
             'polygon(20% 0, 100% 0, 100% 92%, 76% 92%, 76% 100%, 55% 100%,' +
             '55% 95%, 26% 95%, 26% 91%, 12% 91%, 12% 22%, 16% 22%, 16% 13%,' +
             '20% 13%)',
         }}>
      {MESH_HOLES.map(([c, r]) => (
        <span key={`${c}-${r}`}
              className="absolute bg-surface"
              style={{ left: c * MESH_PITCH, top: r * MESH_PITCH, width: 18, height: 18 }} />
      ))}
    </div>
  )
}

function TextGrid() {
  const ref = useReveal({ threshold: 0 })
  return (
    <section ref={ref} className="bg-surface clip-bleed">
      {/* row 1 — copy left inside the container, mesh right */}
      <div className="u-container">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[787px_1fr]"
             style={{ minHeight: 664 }}>
          <p className="reveal font-serif text-ink tracking-tightest
                        text-[clamp(2.125rem,3.75vw,3.375rem)] leading-[1.05]">
            Any AI can generate content. But only Jasper can create truly impactful marketing
            content. That&rsquo;s because of{' '}
            <span className="bg-flame-500 text-white box-decoration-clone">Jasper IQ</span>, our
            proprietary AI context layer.
          </p>
          <div className="reveal" style={{ '--reveal-delay': '120ms' }}>
            <MeshBlock tint="bg-blue-300" />
          </div>
        </div>
      </div>

      {/* row 2 — the mesh bleeds off the LEFT page edge (live x starts at 0),
          so this row is laid out against the viewport, not the container. */}
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[482px_787px] lg:gap-[131px]"
           style={{ minHeight: 664 }}>
        <div className="reveal order-2 lg:order-1" style={{ '--reveal-delay': '120ms' }}>
          <MeshBlock tint="bg-green-300" bleedLeft />
        </div>
        <p className="reveal order-1 px-6 font-serif text-ink tracking-tightest
                      text-[clamp(2.125rem,3.75vw,3.375rem)] leading-[1.05] lg:order-2 lg:px-0">
          Jasper IQ combines deep marketing knowledge with your brand and company knowledge to
          apply rich, relevant context to every output. Launch faster, scale smarter, and deliver
          real results&mdash;without sacrificing authenticity.
        </p>
      </div>
    </section>
  )
}

/* The four `.side_block` rows, verbatim from the capture. Each art state is
   the measured background plate + the 421x421 graphic that sits on it. */
const SIDE_ITEMS = [
  { eyebrow: 'Marketing IQ',
    title: 'Marketing IQ is AI fine-tuned for marketing success',
    body: 'Built on top of Jasper’s LLM-optimized foundation, our Marketing IQ layer is fine-tuned to proven best practices across channels and formats. Together, they ensure every output is automatically optimized to meet the highest standard.',
    link: { label: 'Explore Marketing IQ', href: '/marketing-iq' },
    art: { bg: '/assets/ai-bg-item.png', graphic: '/assets/marketing-image.png',
           alt: 'Marketing IQ context graphic' } },
  { eyebrow: 'Brand IQ',
    title: 'Brand IQ is your brand guardian inside Jasper',
    body: 'From voice and tone to visuals and style, Jasper makes it easy to configure everything that defines your brand—and automatically applies those guardrails across every piece of content, even at scale. Stay consistent, cohesive, and uniquely you, no matter who’s creating.',
    link: { label: 'Explore Brand IQ', href: '/brand-iq' },
    art: { bg: '/assets/bg-orange.png', graphic: '/assets/jasper-iq-audiences.avif',
           alt: 'Brand IQ audiences graphic' } },
  { eyebrow: 'Product IQ',
    titleTag: 'p',
    title: 'Product IQ is your source of truth for every product',
    body: 'Define each product once, its specs, claims, pricing, and disclaimers, and Jasper applies it automatically to every output. So AI gets your products right, everywhere buyers look.',
    link: { label: 'Explore Product IQ', href: '#' },
    art: { bg: '/assets/bg.avif', graphic: '/assets/product-graphic.avif',
           alt: 'Product IQ product-record graphic' } },
  { eyebrow: 'Knowledge Base',
    title: 'Knowledge Base is your company’s data at your fingertips',
    body: 'Ground every output in your company’s own knowledge, using your text, video, data, audio, and image assets. Easily upload or adapt multimodal content, so it’s ready to work across any format you need.',
    link: { label: 'Explore Knowledge Base', href: '/knowledge-base' },
    art: { bg: '/assets/company-dna-bg-img.png', graphic: '/assets/jasper-iq.-knowledge-base.avif',
           alt: 'Knowledge Base sources graphic' } },
]

/* `.accordion_1` — the live answer to Q1 carries an intro paragraph, a lead-in
   line and a 3-item ordered list, so it is passed as a node rather than a
   string. Every string is verbatim from the capture. */
const FAQS = [
  { q: 'How is Jasper IQ different from a custom GPT?',
    a: (
      <>
        <p>
          Jasper IQ is a persistent context layer that stores your brand voice, visual identity,
          audience personas, and approved source material, then applies that context automatically
          across every agent, workflow, and team member in Jasper. A custom GPT is a single
          standalone assistant you configure with instructions and a few files.
        </p>
        <p className="mt-4">The difference matters in three ways:</p>
        <ol className="mt-4 list-decimal space-y-3 pl-6">
          <li>
            <strong className="font-medium">Consistency:</strong> Every output draws from the same
            brand and knowledge foundation, so a new teammate produces on-brand work on day one.
          </li>
          <li>
            <strong className="font-medium">Freshness:</strong> Knowledge Base connectors pull from
            sanctioned sources like SharePoint and Salesforce, so your context stays current instead
            of going stale after upload.
          </li>
          <li>
            <strong className="font-medium">Governance:</strong> Jasper checks work against your
            brand rules and flags off-brand language. A custom GPT helps one person with one task,
            but Jasper IQ gives your whole marketing team a shared source of truth.
          </li>
        </ol>
      </>
    ) },
  { q: 'What file types does the Knowledge Base support?',
    a: (
      <p>
        The Jasper <a href="/knowledge-base" className="underline">Knowledge Base</a> is multimodal
        and supports text, documents, images, audio, video, and URLs. You can also connect live
        sources like SharePoint and Google Drive so your knowledge updates automatically instead of
        living in static files.
      </p>
    ) },
  { q: 'Does Brand IQ work across languages?',
    a: (
      <p>
        Yes. Jasper creates and translates content in 25+ languages, and your{' '}
        <a href="/brand-voice" className="underline">Brand Voice</a> shapes tone, style, and
        register in each one, so translated content sounds like your brand instead of a generic
        machine translation.
      </p>
    ) },
  { q: 'How does Jasper IQ use my data?',
    a: 'Jasper does not use your data to train AI models, and no one outside your workspace can access it. The brand, audience, and knowledge context you add powers only your own content inside your workspace. Your data is encrypted in transit and at rest, and Jasper maintains enterprise security standards across the platform.' },
]

export default function JasperIQ() {
  return (
    <>
      <IQHero />

      {/* `.simple_layout_wrap` — 112px spacer, mesh rows, then the pinned stack */}
      <div aria-hidden="true" className="h-[112px] bg-surface" />
      <TextGrid />

      <section className="relative bg-surface clip-bleed">
        <div className="u-container">
          <SideBlockStack items={SIDE_ITEMS} rowH={782} />
        </div>
      </section>

      <Faq items={FAQS}
           heading="Frequently asked questions about Jasper IQ"
           headingTag="h3"
           questionTag="h3"
           spaceBottom={false} />

      <div aria-hidden="true" className="h-[112px] bg-surface" />

      <Closing
        title="Bring intelligence into every corner of your marketing"
        body="Jasper IQ gives your team the context, consistency, and clarity to create exceptional content at scale. Everything you need to move fast, stay aligned, and build a brand that stands out."
        cta="Get A Demo"
        photo="/assets/demo-cta-img.jpg"
        titleTag="p"
      />
    </>
  )
}
