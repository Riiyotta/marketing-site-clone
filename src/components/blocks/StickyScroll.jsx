import { useReveal } from '../../hooks/useReveal'
import { Eyebrow } from './primitives'
import { ArrowRight } from '../Icons'

/**
 * `sticky_scroll_wrap` — a two-column band whose LEFT column is a heading that
 * sticks while the RIGHT column scrolls a stacked list of features past it.
 *
 * MEASURED on live /api (section 1440 x 1637): the left column holds a mono
 * eyebrow ("API Overview") and a 54px Feature h2 in a ~18ch measure, pinned
 * at the top of the band. The right column is a 700px track of rows, each
 * an h3 Feature 38px, a 16/22.4 body, and an optional mono flame link with a
 * coral rule under it. Row rhythm ~64px.
 *
 * MEASURED on live /studio (811px) the same block carries a body + a filled
 * "Get A Demo" button under the sticky heading, so `body`/`cta` are props.
 *
 * MEASURED on live /geo (2193px) it switches to a CARD grid on the right —
 * 14 bordered white cards, 2-up, each with a 16px glyph, a 24px Feature h3,
 * a body and a "Learn more" link — so `variant="cards"` selects that mode.
 *
 * MEASURED on live /trust (sticky_scroll_wrap 5011px) it becomes a single
 * column of TALL TINTED PANELS — `variant="panels"`. Card box sampled off
 * .scrape/plat-trust.png: x 740-1400 (660 wide) on blue-300 (#ceebff), the
 * first panel's top edge at y=653 (112px under the hero) and panel heights
 * 928 / 906 / 884 / 949 / 800 separated by an 80px white gutter. Inside each
 * panel: a 660x660 illustration flush to the top edge, then a Feature 38/38
 * h2/h3, an 18/21.6 body and a coral mono arrow link, all inset 10px from the
 * card edge with ~24px of foot padding. The left column's 54px heading sticks
 * only while the first panels pass; the track is short enough that it releases
 * before the block ends, which is what the live screenshot shows.
 *
 * Props
 *   eyebrow  string
 *   title    node
 *   titleSize tailwind class (default 54px)
 *   body     string
 *   cta      {label, variant}
 *   items    [{title, body, link, icon}]
 *   variant  'rows' | 'cards'   (default 'rows')
 *   tint     section background class
 */
export default function StickyScroll({
  eyebrow, title, titleSize = 'text-[clamp(2rem,3.75vw,3.375rem)]',
  body, cta, items = [], variant = 'rows', tint = 'bg-surface',
}) {
  const ref = useReveal()

  return (
    <section ref={ref} className={`${tint} py-[80px] md:py-section-main`}>
      <div className={`u-container grid gap-12 lg:gap-gutter ${
        /* live /trust pins its panel track at the measured 660px (x 740-1400)
           and lets the sticky heading take the rest; the row/card variants use
           a 420px heading rail instead. */
        variant === 'panels'
          ? 'lg:grid-cols-[minmax(0,1fr)_minmax(0,660px)]'
          : 'lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)]'
      }`}>
        <div className="lg:sticky lg:top-[120px] lg:self-start">
          {eyebrow && <Eyebrow className="reveal">{eyebrow}</Eyebrow>}
          <h2 className={`reveal mt-4 max-w-[18ch] font-serif text-ink tracking-tightest
                          leading-1.05 ${titleSize}`}
              style={{ '--reveal-delay': '80ms' }}>
            {title}
          </h2>
          {body && (
            <p className="reveal mt-6 max-w-[46ch] text-text-main text-ink text-pretty"
               style={{ '--reveal-delay': '140ms' }}>{body}</p>
          )}
          {cta && (
            <div className="reveal mt-8" style={{ '--reveal-delay': '200ms' }}>
              <a href="#" className={`btn ${cta.variant || 'btn-primary'}`}>{cta.label}</a>
            </div>
          )}
        </div>

        {variant === 'panels' ? (
          <div className="flex flex-col gap-[80px]">
            {items.map((it, i) => (
              <article key={it.title}
                       className={`reveal flex flex-col ${it.tint || 'bg-blue-300'}`}
                       style={{ '--reveal-delay': `${(i % 3) * 80}ms` }}>
                {it.img && (
                  <img src={it.img.src} alt={it.img.alt || ''}
                       width={it.img.w} height={it.img.h} loading="lazy"
                       className="w-full object-contain" />
                )}
                <div className="flex flex-col px-[10px] pb-6">
                  <h3 className="max-w-[22ch] font-serif text-ink tracking-tightest leading-1
                                 text-[clamp(1.5rem,2.64vw,2.375rem)]">
                    {it.title}
                  </h3>
                  <p className="mt-3 text-[18px] leading-[21.6px] text-ink text-pretty">
                    {it.body}
                  </p>
                  {it.link && (
                    <a href={it.href || '#'}
                       className="link-arrow mt-8 self-start font-mono text-[18px] leading-[25.2px]">
                      {it.link}<ArrowRight />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : variant === 'cards' ? (
          <div className="grid gap-gutter sm:grid-cols-2">
            {items.map((it, i) => (
              <article key={it.title}
                       className="reveal flex flex-col gap-3 border border-dark-150 bg-surface p-6"
                       style={{ '--reveal-delay': `${(i % 4) * 70}ms` }}>
                {it.icon && (
                  <img src={it.icon} alt="" aria-hidden="true"
                       className="h-4 w-4 shrink-0 object-contain" />
                )}
                <h3 className="font-serif text-ink tracking-tighter leading-1.1 text-h4">
                  {it.title}
                </h3>
                <p className="text-text-small text-ink text-pretty">{it.body}</p>
                <a href="#" className="link-arrow mt-auto pt-4 text-text-small">
                  {it.link || 'Learn more'}<ArrowRight />
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-12 lg:max-w-[700px]">
            {items.map((it, i) => (
              <div key={it.title} className="reveal"
                   style={{ '--reveal-delay': `${(i % 3) * 80}ms` }}>
                <h3 className="max-w-[22ch] font-serif text-ink tracking-tightest leading-1.05
                               text-[clamp(1.5rem,2.65vw,2.375rem)]">
                  {it.title}
                </h3>
                <p className="mt-4 max-w-[56ch] text-text-main text-ink text-pretty">{it.body}</p>
                {it.link && (
                  <a href="#" className="link-arrow mt-4 font-mono text-text-small">
                    {it.link}<ArrowRight />
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
