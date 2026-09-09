import { useReveal } from '../../hooks/useReveal'

/* ---------------------------------------------------------------------------
   `.marquee_wrap` — the customer-logo blade that sits directly under the hero
   on every Solutions > By Industry page.

   MEASURED at 1440px on live /solutions/by-industry/tech (.scrape/solx3.json):
     section     1440 x 296, ground blue-300 (rgb 206,235,255) full-bleed
     80px        g_section_space
     headline    h2, ABC ROM 24px ink, 1360px well at x=40, 24px tall
     56px        gap
     logo row    six 193x80 marks laid on the 1360px well, first at x=40 and
                 the last ending at 1400 — an even 233px pitch, i.e. a
                 6-column grid with a 40px gutter. Pages with fewer logos
                 (healthcare ships 2, retail 3, professional-services 4) keep
                 the same mark box and START of the row, running SHORT on the
                 right rather than spreading edge-to-edge — so the row is a
                 left-aligned flex on the measured 40px gap, NOT
                 justify-between (which flung healthcare's two marks to
                 opposite ends of the well).
     80px        g_section_space

   The live blade is a Webflow CMS marquee but does not actually scroll at
   1440 — all marks fit — so this renders as a static row and wraps below lg.

   PROPS
     title  string              the 24px ABC ROM headline
     logos  [{src, alt, w, h}]  the customer marks at their measured box
--------------------------------------------------------------------------- */

export default function LogoBlade({ title, logos = [] }) {
  const ref = useReveal({ threshold: 0 })

  return (
    <section ref={ref} className="relative clip-bleed bg-blue-300">
      <div aria-hidden="true" className="h-[80px]" />

      <div className="u-container">
        {title && (
          <h2 className="reveal font-sans text-h4 leading-1 text-ink">{title}</h2>
        )}

        <div className="reveal mt-[56px] flex flex-wrap items-center gap-x-10 gap-y-8"
             style={{ '--reveal-delay': '80ms' }}>
          {logos.map((l) => (
            <img key={l.src} src={l.src} alt={l.alt || ''} width={l.w} height={l.h}
                 loading="lazy"
                 className="h-auto w-auto max-w-full object-contain"
                 style={{ maxHeight: l.h }} />
          ))}
        </div>
      </div>

      <div aria-hidden="true" className="h-[80px]" />
    </section>
  )
}
