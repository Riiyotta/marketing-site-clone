import { useReveal } from '../../hooks/useReveal'
import { ArrowLink } from './primitives'

/* ---------------------------------------------------------------------------
   `.api_cards_section` — "Jasper API endpoints", the 8-card catalogue shared
   VERBATIM by /image/api and /image/pipelines.

   MEASURED on both pages at 1440px (section 1440 x 1672): a pale flame-200
   ground ruled with a 1px flame grid lattice; a 38px Feature heading in a
   full-bleed strip at the top, then eight cards in a 3-up grid. Each card is a
   white panel with a 1px flame rule, opening on a square-ish product still,
   then a 28px Feature h2, a 16/22.4 body, and a mono "API documentation ->"
   link. The reported section background is the ink token, but the visible
   ground is the pale flame tint the grid is drawn on.

   The card list is identical on both pages, so it lives here rather than being
   duplicated in each page file.

   PROPS
     title  node    the heading (both pages use "Jasper API endpoints")
     items  [{title, body, img:{src,alt}}]  defaults to the measured eight
--------------------------------------------------------------------------- */

/* Each card opens on a product still. Live lazy-loads these from a Webflow
   collection, so they never resolve in a headless tree-walk (the capture
   reports 0 images for the whole section). They are therefore lifted from the
   live full-page screenshot .scrape/plat-image-api.png at their measured
   443x249 card box — real captured pixels, not invented artwork. Omitting them
   was what left both /image/* pages ~2000px short of the live height. */
export const ENDPOINTS = [
  { title: 'Remove background', body: 'Pixel-perfect cutouts in under a second.',
    img: { src: '/assets/endpoint-remove-background.png',
           alt: 'Portrait of a person in sunglasses with the background cut out to a transparency checkerboard.' } },
  { title: 'Clean up', body: 'Remove objects, dust, or glare at scale from pack shots to high-end campaigns.',
    img: { src: '/assets/endpoint-clean-up.png',
           alt: 'Pink leather bag on a desk with a highlighter and pen being cleaned out of the shot.' } },
  { title: 'Upscale', body: 'Increase resolution up to 4× while preserving detail.',
    img: { src: '/assets/endpoint-upscale.png',
           alt: 'Snow-capped mountain peak against a deep blue sky, shown at increased resolution.' } },
  { title: 'Packshot compositing', body: 'Standardize product image with your branded background, shadow and reflection, at scale.',
    img: { src: '/assets/endpoint-packshot.png',
           alt: 'Black and wood lounge chair composited into a styled interior packshot.' } },
  { title: 'Uncrop', body: 'Intelligently expand borders for new formats without distortion.',
    img: { src: '/assets/endpoint-uncrop.png',
           alt: 'Floral photograph with selection handles, being expanded beyond its original border.' } },
  { title: 'Replace background', body: 'Place products into brand-approved environments programmatically.',
    img: { src: '/assets/endpoint-replace-background.png',
           alt: 'Wine bottle on a neutral ground with a "A cozy marble kitchen" background prompt.' } },
  { title: 'Remove text', body: 'Strip embedded text while preserving underlying art for localization or compliance.',
    img: { src: '/assets/endpoint-remove-text.png',
           alt: 'Magenta billboard with its embedded headline text being stripped away.' } },
  { title: 'Generate alt text', body: 'Automated descriptive metadata for accessibility and SEO at scale.',
    img: { src: '/assets/endpoint-generate-alt-text.png',
           alt: 'Grey three-seat sofa with an automatically generated alt-text label beneath it.' } },
]

/* The flame lattice the /image/* pages rule every band with. Live ships it as
   a stack of absolutely-positioned 1px divs; one repeating gradient pair gives
   the same result without ~40 DOM nodes. */
export const FlameGrid = ({ className = '' }) => (
  <div aria-hidden="true"
       className={`pointer-events-none absolute inset-0 ${className}`}
       style={{
         backgroundImage:
           'repeating-linear-gradient(to right, rgba(250,64,40,.28) 0 1px, transparent 1px 113.33px),' +
           'repeating-linear-gradient(to bottom, rgba(250,64,40,.28) 0 1px, transparent 1px 113.33px)',
       }} />
)

export default function ApiEndpointCards({ title = 'Jasper API endpoints', items = ENDPOINTS }) {
  const ref = useReveal()

  return (
    <section ref={ref} className="clip-bleed relative bg-flame-200">
      <FlameGrid />

      <div className="relative border-y border-flame-500/40 bg-flame-300 py-6">
        <div className="u-container">
          <h2 className="reveal font-serif text-ink tracking-tightest leading-1
                         text-[clamp(1.875rem,2.64vw,2.375rem)]">
            {title}
          </h2>
        </div>
      </div>

      <div className="u-container relative py-12">
        <div className="grid gap-gutter sm:grid-cols-2 lg:grid-cols-3">
          {items.map((e, i) => (
            <article key={e.title}
                     className="reveal flex flex-col border border-flame-500/40 bg-surface"
                     style={{ '--reveal-delay': `${(i % 3) * 80}ms` }}>
              {e.img && (
                <img src={e.img.src} alt={e.img.alt || ''} loading="lazy"
                     className="w-full object-cover" style={{ aspectRatio: '443/249' }} />
              )}
              <div className="flex flex-1 flex-col p-4 pb-6">
                <h3 className="font-serif text-ink tracking-tightest leading-[1.1]
                               text-[clamp(1.5rem,1.95vw,1.75rem)]">
                  {e.title}
                </h3>
                <p className="mt-2 text-text-small text-ink text-pretty">{e.body}</p>
                <ArrowLink label="API documentation" className="mt-auto pt-6 self-start text-[14px]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
