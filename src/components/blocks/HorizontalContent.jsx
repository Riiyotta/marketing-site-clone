import { useReveal } from '../../hooks/useReveal'

/* ---------------------------------------------------------------------------
   `.horizontal_content_wrap` — a copy column beside a CHECKLIST column.

   Distinct from `horizontal_vis_wrap` (which pairs copy with an illustration):
   the right track here is a list of check-marked points, not artwork. Used
   3x on live /knowledge-base and 3x on live /product-iq.

   MEASURED at 1440px (.scrape/plat-knowledge-base.json, section heights
   561 / 482 / 505; plat-product-iq.json 494 / 472 / 517):
     .u-container 1360px split into a 672px copy column at x=40 and a ~592px
     list column starting at x=768.
       LEFT   eyebrow  mono 16/16 on a tinted chip, the tint varying per row
                       (flame-300 / blue-300 / green-400 read off live)
              h2       Feature 54/56.7 ink, ~24ch measure
              body     ABC ROM 16/22.4 ink, 620px measure, sitting BELOW the
                       list's first items (the two columns are top-aligned and
                       the copy column is shorter)
       RIGHT  each item is a 16px square check glyph in the row's accent tint
              at x=768, an ABC ROM 20px title (NOT serif) and a 16/22.4 body,
              on an ~85px stride.

   PROPS
     eyebrow   string
     tint      tailwind bg for the eyebrow chip and the check glyphs
     title     string
     body      string
     items     [{title, body}]
     bg, spaceTop, spaceBottom
--------------------------------------------------------------------------- */

export default function HorizontalContent({
  eyebrow, tint = 'bg-flame-300', title, body, items = [],
  bg = 'bg-surface', spaceTop = 112, spaceBottom = 0,
}) {
  const ref = useReveal({ threshold: 0 })

  return (
    <section ref={ref} className={`relative clip-bleed ${bg}`}>
      <div aria-hidden="true" style={{ height: spaceTop }} />

      <div className="u-container grid gap-10 lg:grid-cols-[672px_minmax(0,1fr)] lg:gap-gutter">
        <div className="max-w-[672px]">
          {eyebrow && (
            <p className={`reveal eyebrow inline-block ${tint} px-1 text-ink`}>{eyebrow}</p>
          )}
          {title && (
            <h2 className="reveal mt-6 max-w-[24ch] font-serif text-ink tracking-tightest leading-[1.05]
                           text-[clamp(2.125rem,3.75vw,3.375rem)]"
                style={{ '--reveal-delay': '80ms' }}>
              {title}
            </h2>
          )}
          {body && (
            <p className="reveal mt-8 text-text-main text-ink text-pretty"
               style={{ '--reveal-delay': '140ms' }}>
              {body}
            </p>
          )}
        </div>

        <ul className="flex flex-col gap-8">
          {items.map((it, i) => (
            <li key={it.title} className="reveal flex gap-4"
                style={{ '--reveal-delay': `${i * 90}ms` }}>
              <span aria-hidden="true"
                    className={`mt-1 grid h-4 w-4 shrink-0 place-items-center ${tint}`}>
                <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-ink" fill="none">
                  <path d="m2.5 6.2 2.2 2.3L9.5 3.6" stroke="currentColor" strokeWidth="1.6"
                        strokeLinecap="square" />
                </svg>
              </span>
              <div>
                {/* measured: ABC ROM 20px, not the serif face */}
                <p className="font-sans text-h5 font-medium text-ink">{it.title}</p>
                <p className="mt-2 max-w-[52ch] text-text-main text-ink text-pretty">{it.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div aria-hidden="true" style={{ height: spaceBottom }} />
    </section>
  )
}
