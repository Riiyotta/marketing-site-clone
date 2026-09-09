import { useReveal } from '../../hooks/useReveal'
import { Eyebrow } from './primitives'

/* ---------------------------------------------------------------------------
   `.slider_main_wrap` — a split header over a horizontally-scrolling rail.
   Used TWICE on live /careers, in two shapes.

   MEASURED at 1440px off .scrape/plat-careers.png:

   variant="quotes" (section 892px, "Rewrite the rules of marketing"):
     header row inside the 1360 container — an 80px Feature h3 on two lines to
     the left of a 16/22.4 body and a pair of grey prev/next arrow glyphs. Then
     a rail of 582px surface-2 cards, 16px apart and 264px tall: a 28px Feature
     pull-quote in the card's left two-thirds beside a 137px square portrait,
     with the speaker's name (38px Feature) and role (grey 14px) under it.

   variant="people" (section 900px, "Leading the way to marketing excellence"):
     the same split header at 54px on a surface-2 ground, then four 328 x 461
     portraits on a 16px gutter. Each portrait carries a name chip and a role
     band overlapping its foot — measured yellow-700 name on yellow-500 role,
     the same pairing across all four cards here (unlike /company, which cycles
     four different tints).

   `.reveal` sits on the RAIL CONTAINER, never on the cards: the rail scrolls
   horizontally, and a card parked off-viewport never intersects, so a per-card
   reveal would leave it permanently invisible.

   PROPS
     eyebrow, title, body       the split header
     titleSize  'display'|'54'
     items      quotes: [{quote, name, role, img}]
                people: [{name, role, img, alt}]
     variant    'quotes'|'people'
     bg         section ground
     railBg     ground behind the whole block (people uses surface-2)
--------------------------------------------------------------------------- */

const TITLE_SIZE = {
  display: 'text-[clamp(2.5rem,5.55vw,5rem)] leading-1',
  54: 'text-[clamp(2.125rem,3.75vw,3.375rem)] leading-[1.05]',
}

/* The rail's prev/next glyphs. Live renders them as plain grey arrows with no
   pill — decorative, since the rail is a native overflow scroller. */
const Arrow = ({ flip = false }) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"
       className={`h-6 w-6 text-dark-500 ${flip ? 'rotate-180' : ''}`}>
    <path d="M4 12h16m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

export default function PeopleRail({
  eyebrow, title, body, titleSize = '54', items = [], variant = 'people',
  bg = 'bg-surface', spaceTop = 112, spaceBottom = 112,
}) {
  const ref = useReveal({ threshold: 0 })

  return (
    <section ref={ref} className={`clip-bleed ${bg}`}>
      <div aria-hidden="true" style={{ height: spaceTop }} />

      <div className="u-container flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <div className="max-w-[672px]">
          {eyebrow && <Eyebrow className="reveal mb-4">{eyebrow}</Eyebrow>}
          {title && (
            <h2 className={`reveal font-serif text-ink tracking-tightest
                            ${TITLE_SIZE[titleSize] || TITLE_SIZE[54]}`}
                style={{ '--reveal-delay': '80ms' }}>
              {title}
            </h2>
          )}
        </div>

        <div className="flex max-w-[520px] flex-col">
          {body && (
            <p className="reveal text-text-main text-ink text-pretty"
               style={{ '--reveal-delay': '140ms' }}>
              {body}
            </p>
          )}
          <div className="reveal mt-6 flex items-center gap-4" style={{ '--reveal-delay': '190ms' }}>
            <Arrow flip /><Arrow />
          </div>
        </div>
      </div>

      {/* the rail — `.reveal` on the CONTAINER, not the cards */}
      <div className="reveal mt-12 overflow-x-auto no-scrollbar"
           style={{ '--reveal-delay': '200ms' }}>
        <ul className="u-container flex list-none gap-gutter">
          {items.map((it) => (
            <li key={it.name}
                className={variant === 'quotes'
                  ? 'w-[86vw] shrink-0 bg-surface-2 p-8 sm:w-[582px]'
                  : 'w-[70vw] shrink-0 sm:w-[46%] lg:w-[calc((100%-3*16px)/4)]'}>
              {variant === 'quotes' ? (
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <p className="flex-1 font-serif text-ink tracking-tighter
                                text-[clamp(1.25rem,1.95vw,1.75rem)] leading-[1.15]">
                    {it.quote}
                  </p>
                  <div className="w-[137px] shrink-0">
                    <img src={it.img} alt={it.alt || ''} width={137} height={137} loading="lazy"
                         className="h-[137px] w-[137px] object-cover" />
                    <p className="mt-3 font-serif text-ink tracking-tightest
                                  text-[clamp(1.5rem,2.64vw,2.375rem)] leading-1">
                      {it.name}
                    </p>
                    <p className="mt-1 text-text-small text-ink/60">{it.role}</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="relative aspect-[328/461] w-full overflow-hidden bg-dark-200">
                    <img src={it.img} alt={it.alt || ''} loading="lazy"
                         className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                  <p className="-mt-8 relative inline-block bg-yellow-700 px-2 py-1 font-serif
                                text-ink tracking-tight leading-1
                                text-[clamp(1.25rem,2.6vw,2.375rem)]">
                    {it.name}
                  </p>
                  <p className="eyebrow block bg-yellow-500 px-2 py-1 text-text-small text-ink">
                    {it.role}
                  </p>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div aria-hidden="true" style={{ height: spaceBottom }} />
    </section>
  )
}
