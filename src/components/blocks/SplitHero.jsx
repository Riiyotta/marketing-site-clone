import { useReveal } from '../../hooks/useReveal'
import { Eyebrow, CtaRow } from './primitives'

/* ---------------------------------------------------------------------------
   `.split_hero_wrap` — the centred hero flanked by two clipped product panels.

   MEASURED on live /brand-iq at 1440px (section h=940):
     ground   flame-400 (rgb 255,179,163) full-bleed, PLUS a 1440x940
              "Grid BG" avif laid over it edge to edge
     panels   two 350x720 windows at y=180, one at the page's LEFT edge (x=0)
              and one at x=1090. Both source assets are FULL-WIDTH app
              screenshots (1600x1102 / 1600x1047), so the 350x720 portrait
              window is an `object-fit: cover` crop, not a squash:
                left  panel  object-position 100% 0  (its right-hand
                             "Brand Guidelines" rail is what shows)
                right panel  object-position 0 0     (its left-hand
                             "Brand Voice / Edit your voice" pane shows)
              Verified pixel-for-pixel against the live capture. Stretching
              the 1600px source into the 350px box instead renders the whole
              app squashed, which is what an earlier draft did.
     copy     centred in the 1440px band, above the panels:
       eyebrow mono 16/16 ink                  y=366
       h1      Feature 80/80 ink, 660px measure, 2 lines   y=404
       body    ABC ROM 18/21.6 ink, 462px measure          y=588
       CTAs    outline "Start Free Trial" + filled "Get a Demo"  y=670

   PROPS
     eyebrow, title, body, ctas
     gridBg  {src}                 the full-bleed texture over the ground
     left / right  {src, w, h, alt, position}  the two flanking panels;
                   `position` is the object-position for their cover crop
                   (defaults: left '100% 0', right '0 0')
     bg      tailwind class for the ground
     height  px  the measured section height
--------------------------------------------------------------------------- */

export default function SplitHero({
  eyebrow, title, body, ctas = [], gridBg, left, right,
  bg = 'bg-flame-400', height = 940,
}) {
  const ref = useReveal({ threshold: 0 })

  return (
    <section ref={ref} className={`relative clip-bleed ${bg}`}>
      {gridBg && (
        <img src={gridBg} alt="" aria-hidden="true"
             className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
      )}

      {/* the flanking panels — absolutely placed at their measured offsets so
          the section clips them exactly as live does. Hidden below lg, where
          the live layout drops them entirely. */}
      {left && (
        <img src={left.src} alt={left.alt || ''} aria-hidden={!left.alt}
             className="pointer-events-none absolute left-0 hidden max-w-none object-cover lg:block"
             style={{ width: left.w, height: left.h, top: 180,
                      objectPosition: left.position || '100% 0' }} />
      )}
      {right && (
        <img src={right.src} alt={right.alt || ''} aria-hidden={!right.alt}
             className="pointer-events-none absolute hidden max-w-none object-cover lg:block"
             style={{ width: right.w, height: right.h, top: 180, left: 1090,
                      objectPosition: right.position || '0 0' }} />
      )}

      <div className="relative flex flex-col items-center justify-center px-6 text-center"
           style={{ minHeight: height }}>
        {eyebrow && <Eyebrow className="reveal">{eyebrow}</Eyebrow>}

        {title && (
          <h1 className="reveal mt-[26px] max-w-[660px] font-serif text-ink tracking-tightest
                         text-[clamp(2.5rem,5.55vw,5rem)] leading-1"
              style={{ '--reveal-delay': '80ms' }}>
            {title}
          </h1>
        )}

        {body && (
          <p className="reveal mt-6 max-w-[462px] text-[18px] leading-[21.6px] text-ink text-pretty"
             style={{ '--reveal-delay': '140ms' }}>
            {body}
          </p>
        )}

        {ctas.length > 0 && (
          <CtaRow ctas={ctas} className="reveal mt-8 justify-center"
                  style={{ '--reveal-delay': '200ms' }} />
        )}
      </div>
    </section>
  )
}
