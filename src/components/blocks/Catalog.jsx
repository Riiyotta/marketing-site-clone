import { useReveal } from '../../hooks/useReveal'
import { Eyebrow, ArrowLink } from './primitives'

/* ---------------------------------------------------------------------------
   `.catalog_wrap` — left-aligned copy header over a full-width product shot.
   3x on /marketing-iq; the same shape recurs on other Platform routes.

   MEASURED on live /marketing-iq at 1440px (sections h=1414 / 1527 / 1475):
     180px g_section_space (the eyebrow lands at +182)
     .u-container 1360px, copy block anchored left at x=40:
       eyebrow  mono 16/16 ink                     (+182)
       h2       Feature 38/38 ink, measure 485px   (+228, 2-3 lines)
       body     ABC ROM 16/22.4 ink, measure 514px (+328 / +366)
       link     optional coral mono 18/25.2        (+491 on section 2)
     then an 88px gap from the body to the screenshot (70px when a link
     follows the body), and the screenshot itself: 1360px wide, height 868-941,
     flush to the container, sitting on a coral surround that is part of the
     PNG itself. The section's own ground is white — the coral field visible in
     the live screenshot is baked into the asset, so no tint layer is emitted.
     Section 1 ends flush with the image; sections 2 and 3 carry a 61-74px tail.

   PROPS
     eyebrow, title, body, link
     img   {src, alt, w, h}   the 1360px-wide product shot
     bg, spaceTop, spaceBottom
--------------------------------------------------------------------------- */

export default function Catalog({
  eyebrow, title, body, link, img,
  bg = 'bg-surface', spaceTop = 182, spaceBottom = 0,
}) {
  const ref = useReveal({ threshold: 0 })

  return (
    <section ref={ref} className={`relative clip-bleed ${bg}`}>
      <div aria-hidden="true" style={{ height: spaceTop }} />

      <div className="u-container">
        {/* Inter sets ~9% wider than ABC ROM, so live's 514px body measure
            takes one extra line here. The measure is widened rather than the
            font size shrunk (house rule), which restores live's line count. */}
        <div className="flex max-w-[560px] flex-col">
          {eyebrow && <Eyebrow className="reveal mb-[30px]">{eyebrow}</Eyebrow>}
          {title && (
            <h2 className="reveal max-w-[485px] font-serif text-ink tracking-tightest
                           text-[clamp(1.875rem,2.64vw,2.375rem)] leading-1"
                style={{ '--reveal-delay': '80ms' }}>
              {title}
            </h2>
          )}
          {body && (
            <p className="reveal mt-6 text-text-main text-ink text-pretty"
               style={{ '--reveal-delay': '140ms' }}>
              {body}
            </p>
          )}
          {link && <ArrowLink {...link} className="reveal mt-6 self-start"
                              style={{ '--reveal-delay': '190ms' }} />}
        </div>

        {img && (
          <img src={img.src} alt={img.alt || ''} width={img.w} height={img.h}
               loading="lazy"
               className="reveal h-auto w-full object-contain"
               style={{ '--reveal-delay': '120ms', marginTop: link ? 70 : 88 }} />
        )}
      </div>

      <div aria-hidden="true" style={{ height: spaceBottom }} />
    </section>
  )
}
