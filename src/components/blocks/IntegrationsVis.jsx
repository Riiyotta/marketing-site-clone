import { useReveal } from '../../hooks/useReveal'
import { CtaRow } from './primitives'

/* ---------------------------------------------------------------------------
   `.horizontal_vis_wrap` — the "Integrations for <Role>" band, fourth section
   on all six Solutions > By Role pages. Structurally it is HorizontalVis
   (copy left, art right) but the art is a THREE-PIECE collage rather than one
   illustration, so it gets its own block instead of a collage prop on the
   shared one.

   MEASURED at 1440px on live /solutions/by-role/brand-marketers
   (.scrape/stripes.mjs; the section is 750px on the white surface, and every
   offset below is RELATIVE to the section box):

     112px       g_section_space
     copy        `.horizontal_vis_content` 660px at  40, 287
       h2      Feature 38/38 ink, ~2 lines
       body    ABC ROM 16/22.4 ink
       button  a 48px outline "Explore Integrations"
     photo       `.g_visual_img` 660x526 at 740, 112  — work-image.jpg
     contour     `.horizontal_vis_contour` 347x327 at 641,  59 — the pixelated
                 green blob lapping the photo's TOP-LEFT corner, about a third
                 of it hanging off to the left and above.
     stripes     `.horizontal_vis_lines` 512x190 at 1075, 482 — the piece that
                 needs care. The ASSET is a PORTRAIT 176x638 strip of three
                 VERTICAL bars. Live sizes its 512x190 BOX and rotates it; the
                 computed matrix is
                   matrix(-0.104528, -0.994522, 0.994522, -0.104528, …)
                 whose angle is 186deg. But that matrix is applied to a box
                 whose content is already laid on the long axis, so the bars
                 land NEARLY HORIZONTAL — three wide flat coral sweeps across
                 the photo's bottom-right corner, running off the right edge.
                 Reproducing it here means rotating the 176x638 asset by
                 186 - 90 = 96deg inside a 160x560 box anchored over the
                 photo's bottom-right corner (left 52%, top 42% of the photo
                 box), which lands the bars at live's shallow angle and lets
                 them run off the right edge.
                 Two earlier revisions of this file got this wrong: dropping
                 the asset in untransformed painted three upright coral
                 columns down the middle of the photograph, and rotating the
                 already-stretched 512x190 box left them as a small steep
                 cluster instead of wide flat sweeps.

   Per the house rule, that rotation goes on a WRAPPER — never as an inline
   transform on a `.reveal` element, where the reveal animation's
   `fill: forwards` silently overrides it.

   Only the headline and body change per role; the art is identical on all six.
   The two decorations are ornament and are dropped below lg.

   PROPS
     title  string   the 38px Feature h2 ("Integrations for Brand Marketers")
     body   string   the lede
     ctas   [{label, variant, href}]
--------------------------------------------------------------------------- */

export default function IntegrationsVis({ title, body, ctas = [] }) {
  const ref = useReveal({ threshold: 0 })

  return (
    <section ref={ref} className="relative clip-bleed bg-surface lg:min-h-[750px]">
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

              {/* contour: live 347x327 at x=-99, y=-53 relative to the photo */}
              <img src="/assets/contour-green.png" alt="" aria-hidden="true"
                   width={347} height={327} loading="lazy"
                   className="pointer-events-none absolute z-20 hidden w-[53%] lg:block"
                   style={{ left: '-15%', top: '-10%' }} />

              {/* stripes: the rotation lives on this WRAPPER, never on the
                  `.reveal` element — the reveal animation's fill:forwards
                  would silently override an inline transform there. The asset
                  is drawn at its own 176x638 portrait size and turned 96deg,
                  which lays the three bars out nearly flat and lets them run
                  past the photo's right edge exactly as live does. */}
              <div className="pointer-events-none absolute z-20 hidden lg:block"
                   style={{ left: '52%', top: '42%', width: 160, height: 560,
                            transform: 'rotate(96deg)', transformOrigin: 'center' }}
                   aria-hidden="true">
                <img src="/assets/stripes-pattern-orange.svg" alt=""
                     width={176} height={638}
                     className="h-full w-full object-fill" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="h-[112px]" />
    </section>
  )
}
