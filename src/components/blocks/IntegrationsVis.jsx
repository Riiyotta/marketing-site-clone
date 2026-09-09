import { useReveal } from '../../hooks/useReveal'
import { CtaRow } from './primitives'

/* ---------------------------------------------------------------------------
   `.horizontal_vis_wrap` — the "Integrations for <Role>" band, fourth section
   on all six Solutions > By Role pages. Structurally it is HorizontalVis
   (copy left, art right) but the art is a THREE-PIECE collage rather than one
   illustration, so it gets its own block instead of a collage prop on the
   shared one.

   MEASURED at 1440px on live /solutions/by-role/brand-marketers
   (section 750px, white ground; the art positions are read off
   .scrape/plat-solutions-by-role-brand-marketers.png at the section's offset):

     copy column, x=40, 660px:
       h2      Feature 38/38 ink, ~2 lines
       body    ABC ROM 16/22.4 ink, 632px measure
       button  a 48px outline "Explore Integrations"
     art column, right:
       photo   660 x 526 (work-image.jpg), the anchor of the collage
       contour 347 x 327 (contour-green.png) — a pixelated green blob lapping
               the photo's TOP-LEFT corner, roughly half off it
       stripes 512 x 190 (stripes-pattern-orange.svg) — three coral bars
               crossing the photo's BOTTOM-RIGHT corner and bleeding past it

   Only the headline and body change per role; the art is identical on all six.
   The decorations are ornament and are dropped below lg.

   PROPS
     title  string   the 38px Feature h2 ("Integrations for Brand Marketers")
     body   string   the lede
     ctas   [{label, variant, href}]
--------------------------------------------------------------------------- */

export default function IntegrationsVis({ title, body, ctas = [] }) {
  const ref = useReveal({ threshold: 0 })

  return (
    <section ref={ref} className="relative clip-bleed bg-surface">
      <div aria-hidden="true" className="h-[112px]" />

      <div className="u-container">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10">
          {/* copy */}
          <div className="flex max-w-[660px] flex-col">
            {title && (
              <h2 className="reveal font-serif text-ink tracking-tightest leading-1
                             text-[clamp(1.875rem,2.64vw,2.375rem)]">
                {title}
              </h2>
            )}
            {body && (
              <p className="reveal mt-6 max-w-[632px] text-text-main text-ink text-pretty"
                 style={{ '--reveal-delay': '100ms' }}>
                {body}
              </p>
            )}
            {ctas.length > 0 && (
              <CtaRow ctas={ctas} className="reveal mt-8" style={{ '--reveal-delay': '160ms' }} />
            )}
          </div>

          {/* the three-piece collage */}
          <div className="reveal relative" style={{ '--reveal-delay': '140ms' }}>
            <div className="relative mx-auto w-full" style={{ maxWidth: 660 }}>
              <img src="/assets/work-image.jpg"
                   alt="Two colleagues reviewing a document together at a desk"
                   width={660} height={526} loading="lazy"
                   className="relative z-10 block h-auto w-full object-cover" />
              <img src="/assets/contour-green.png" alt="" aria-hidden="true"
                   width={347} height={327} loading="lazy"
                   className="pointer-events-none absolute -left-[8%] -top-[14%] z-20 hidden w-[53%] lg:block" />
              <img src="/assets/stripes-pattern-orange.svg" alt="" aria-hidden="true"
                   width={512} height={190} loading="lazy"
                   className="pointer-events-none absolute -bottom-[10%] right-[-14%] z-20 hidden w-[78%] lg:block" />
            </div>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="h-[112px]" />
    </section>
  )
}
