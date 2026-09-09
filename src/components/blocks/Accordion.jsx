import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'

/**
 * `accordion_1 u-container u-grid-autofill` — the interior-page FAQ.
 *
 * MEASURED on live /api at 1440: the block is the 1360px container itself
 * (not a full-bleed section), 394px / 473px for the two stacked instances,
 * split into a ~250px label column and a ~1000px list. The label column
 * carries an optional rotated "FAQs" chip over a 38px Feature h3. Each row
 * is a flame-300 panel with an ABC ROM 16px question, 20px 16px padding, a
 * 1px white separator, and a small square +/- toggle on the right.
 * The FIRST row of the first block is open on load.
 *
 * The rotated chip sits on its own wrapper div, never on a `.reveal` element.
 *
 * Props
 *   chip     string   the rotated label chip (optional)
 *   title    node     the 38px heading in the left column
 *   items    [{q, a}] a may be a string or a node
 *   openFirst boolean (default false)
 *   tint     row background class (default bg-flame-300)
 *   size     'sm' | 'lg'   question type scale. 'sm' (default) is the
 *            /api form measured above: ABC ROM 16px, 20px/16px padding.
 *            'lg' is the Solutions > By Industry form measured on live
 *            /solutions/by-industry/tech: the question is Feature 28/30.8
 *            in a 56px-tall row on 24px/20px padding, and each row carries a
 *            1px flame-600 rule instead of the white hairline gap — which is
 *            what makes that block 676px against the small form's 471px.
 *            (Live's DOM ships BOTH a 16px and a 28px copy of every question;
 *            the 28px one is the one that paints.)
 */
export default function Accordion({ chip, title, items = [], openFirst = false,
                                    tint = 'bg-flame-300', size = 'sm' }) {
  const ref = useReveal()
  const [open, setOpen] = useState(openFirst ? 0 : -1)

  return (
    <div ref={ref} className="u-container grid gap-8 py-[40px] lg:grid-cols-[minmax(0,250px)_minmax(0,1fr)] lg:gap-gutter">
      <div>
        {chip && (
          <div className="mb-4 inline-block" style={{ transform: 'rotate(-6deg)' }}>
            <span className="reveal inline-block bg-flame-600 px-3 py-1 font-serif text-h3 text-white">
              {chip}
            </span>
          </div>
        )}
        <h3 className="reveal max-w-[18ch] font-serif text-ink tracking-tightest leading-1.05
                       text-[clamp(1.5rem,2.65vw,2.375rem)]"
            style={{ '--reveal-delay': '60ms' }}>
          {title}
        </h3>
      </div>

      <div className="reveal flex flex-col gap-[1px]" style={{ '--reveal-delay': '120ms' }}>
        {items.map((it, i) => (
          <div key={it.q}
               className={`${tint} ${size === 'lg' ? 'border border-flame-600' : ''}`}>
            <button type="button"
                    onClick={() => setOpen(open === i ? -1 : i)}
                    aria-expanded={open === i}
                    className={`flex w-full items-center justify-between gap-6 text-left
                                ${size === 'lg' ? 'px-5 py-6' : 'px-5 py-4'}`}>
              <span className={size === 'lg'
                ? 'font-serif text-ink tracking-tightest leading-[1.1] text-[clamp(1.25rem,1.95vw,1.75rem)]'
                : 'font-sans text-text-main text-ink'}>{it.q}</span>
              <span aria-hidden="true"
                    className="grid h-5 w-5 shrink-0 place-items-center border border-ink text-ink">
                <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                  <path d="M2 6h8" stroke="currentColor" strokeWidth="1.5" />
                  {open !== i && <path d="M6 2v8" stroke="currentColor" strokeWidth="1.5" />}
                </svg>
              </span>
            </button>
            {open === i && (
              <div className={`px-5 text-ink text-pretty
                               ${size === 'lg' ? 'pb-6 text-text-main' : 'pb-5 text-text-small'}`}>
                {it.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
