import { useReveal } from '../hooks/useReveal'

/**
 * Closing CTA.
 *
 * Measured from the live `.closing_photo_wrap`:
 *   section   1440 x 900, background WHITE (not navy)
 *   layout    12-col breakout grid, 16px gutter
 *   content   `.closing_photo_content` 672px wide at x=40, left-aligned
 *   headline  Feature 80px / lh 80px / weight 450, colour #00063D, 160px tall
 *   body      ABC ROM 16px / lh 22.4px, #00063D, measure ~308px
 *   CTA       single coral "Get A Demo", 220 x 87
 *   photo     `.closing_photo_image` 941 x 900 at x=499, object-fit: cover
 *   overlay   `closing_photo_overlay` 527 x 590 at x=329 (dithered edge card)
 *   circles   `closing_photo_circles` 850px tall on the left
 *
 * An earlier revision rendered this as a full-bleed navy photo band with
 * centred white text — none of which matches the original.
 */
/* Prop-driven so the Platform sub-pages that close with `.closing_photo_wrap`
   (live /jasper-iq, /brand-iq) can reuse it with their own copy. Defaults are
   the homepage's measured strings, so existing callers are unchanged. */
export default function Closing({
  title = 'Put AI agents to work, on your terms',
  body = 'Explore how Jasper agents help teams turn strategy into execution across every channel, market, and audience.',
  cta = 'Get A Demo',
  photo = '/assets/Closing_photo_1.avif',
  /* live's /jasper-iq closing headline is a <p>, not a heading — the block has
     no <h*> at all there. Opt in per caller so the homepage keeps its <h2>. */
  titleTag: TTag = 'h2',
}) {
  const ref = useReveal()

  return (
    <section ref={ref} className="relative bg-surface overflow-hidden" style={{ height: 900 }}>
      <div className="relative h-full u-container">
        <div className="grid h-full grid-cols-1 lg:grid-cols-12 gap-gutter">

          {/* Left — copy (6 of 12 ≈ 672px).
              Live `.g_content` is a 480px block, align-self:center inside the
              900px column, giving: headline y=0 h=160, body y=184 (24px gap)
              w=308, button group y=281 (40px gap) h=87 — so the CTA lands at
              y=282 absolute (pixel-verified), while the dark-green circle band
              only begins at y=516 — a 148px clear gap. The block is TOP-anchored
              in the 900px section, not vertically centred; centring it is what
              pushed the CTA down into the circles. */}
          <div className="relative z-20 lg:col-span-6 flex flex-col justify-center lg:justify-start items-start">
            <TTag className="reveal font-serif text-ink tracking-tightest w-full max-w-[760px]
                           text-[clamp(2.25rem,5.6vw,5rem)] leading-1">
              {title}
            </TTag>

            {/* live body: 16px/22.4px, measure 308px, 24px below the headline */}
            <p className="reveal mt-6 text-text-main text-ink text-pretty lg:max-w-[308px]"
               style={{ '--reveal-delay': '100ms' }}>
              {body}
            </p>

            {/* live gap between body and button group: 40px */}
            <div className="reveal mt-8 lg:mt-10" style={{ '--reveal-delay': '180ms' }}>
              <a href="#" className="btn btn-primary" style={{ padding: '2rem 2.5rem', minWidth: 220, minHeight: 87 }}>
                {cta}
              </a>
            </div>
          </div>

          {/* Right — photo with the dithered overlay card */}
          <div className="hidden lg:block lg:col-span-6" />
        </div>

        {/* Dark-green circle motif.

            MEASURED on the live `.closing_photo_wrap` (1440 x 900):
              wrapper `.closing_photo_circles-wrap` = 483 x 900 at x=0
              img 1412 x 900, left:-929.5px right:0  (anchored to wrapper's
              RIGHT edge) with object-fit:contain / object-position:100% 50%
            Painted result — the dark-green ink lands in a band at
              x 0..566, y 516..770
            while the CTA occupies y 281..368. The two never collide because
            the circles sit ~148px BELOW the button, not because of any
            horizontal clipping. Anchoring the wrapper to the section's BOTTOM
            reproduces that separation at every width. */}
        <div className="pointer-events-none absolute left-0 bottom-0 z-0 hidden lg:block overflow-hidden"
             style={{ width: 483, height: 384 }} aria-hidden="true">
          <img
            src="/assets/closing_circles.svg"
            alt=""
            className="absolute bottom-0 max-w-none"
            style={{ width: 1412, height: 900, right: 0,
                     objectFit: 'contain', objectPosition: '100% 50%' }}
          />
        </div>
      </div>

      {/* photo bleeds to the right edge — 941px wide starting at x=499 */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block"
           style={{ width: 941 }} aria-hidden="true">
        <img
          src={photo}
          alt=""
          className="h-full w-full object-cover"
        />
        {/* dithered/pixelated edge card overlapping the photo's left side */}
        <img
          src="/assets/closing_photo_overlay.avif"
          alt=""
          className="absolute top-0 max-w-none"
          style={{ width: 527, height: 590, left: -170, objectFit: 'contain' }}
        />
      </div>

      {/* mobile: photo below the copy */}
      <div className="lg:hidden absolute inset-x-0 bottom-0 h-[46%]" aria-hidden="true">
        <img src={photo} alt=""
             className="h-full w-full object-cover" />
      </div>
    </section>
  )
}
