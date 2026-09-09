import { useReveal } from '../../hooks/useReveal'
import { Eyebrow, CtaRow } from './primitives'

/* ---------------------------------------------------------------------------
   `.grid_hero_wrap` — a full-bleed coloured band with the copy in the 1360px
   well on the left and one photo anchored to the RIGHT edge, bleeding past
   1440. Used by live /marketing-iq, /knowledge-base and /product-iq.

   MEASURED at 1440px:
     /marketing-iq   h=615  ground yellow-400, photo 941x615 at x=499, ink copy
     /knowledge-base h=593  ground blue-600 (rgb 0,67,211), photo 941x593 at
                            x=499, copy in WHITE — the only variant that
                            inverts, so `tone` selects the text colour
     /product-iq     h=593  ground flame-200, photo at x=499

   Each photo carries a dithered/pixelated left edge baked into the asset, so
   no gradient mask is layered on top.

   Copy block inside the well at x=40, vertically centred:
     eyebrow  mono 16/16 (on a tinted chip where the page uses one)
     h1       Feature 80/80, 672px measure, 2 lines
     body     ABC ROM 16/22.4, 462px measure
     CTAs     an outline + a filled button, 16px apart

   PROPS
     eyebrow, eyebrowChip (tailwind bg for the chip), title, body, ctas
     photo  {src, alt}
     bg     tailwind class for the ground
     tone   'ink' | 'white'   copy colour (default 'ink')
     height px                measured band height (default 615)
--------------------------------------------------------------------------- */

export default function GridHero({
  eyebrow, eyebrowChip, title, body, ctas = [], photo,
  bg = 'bg-yellow-400', tone = 'ink', height = 615,
}) {
  const ref = useReveal({ threshold: 0 })
  const text = tone === 'white' ? 'text-white' : 'text-ink'

  return (
    <section ref={ref} className={`relative clip-bleed ${bg}`}>
      {/* the photo band — right-anchored, full section height */}
      {photo && (
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block"
             style={{ width: 941 }} aria-hidden="true">
          <img src={photo.src} alt="" className="h-full w-full object-cover" />
        </div>
      )}

      <div className="relative u-container flex flex-col justify-center py-[112px]"
           style={{ minHeight: height }}>
        <div className="flex max-w-[672px] flex-col">
          {eyebrow && (
            <Eyebrow className={`reveal ${eyebrowChip ? `inline-block ${eyebrowChip} px-1` : ''} ${text}`}>
              {eyebrow}
            </Eyebrow>
          )}

          {title && (
            <h1 className={`reveal mt-[26px] font-serif tracking-tightest ${text}
                            text-[clamp(2.5rem,5.55vw,5rem)] leading-1`}
                style={{ '--reveal-delay': '80ms' }}>
              {title}
            </h1>
          )}

          {body && (
            <p className={`reveal mt-6 max-w-[462px] text-text-main ${text} text-pretty`}
               style={{ '--reveal-delay': '140ms' }}>
              {body}
            </p>
          )}

          {ctas.length > 0 && (
            <CtaRow className="reveal mt-8" style={{ '--reveal-delay': '200ms' }} ctas={ctas} />
          )}
        </div>
      </div>

      {/* below lg the photo stacks under the copy rather than bleeding */}
      {photo && (
        <img src={photo.src} alt={photo.alt || ''}
             className="block h-[280px] w-full object-cover lg:hidden" />
      )}
    </section>
  )
}
