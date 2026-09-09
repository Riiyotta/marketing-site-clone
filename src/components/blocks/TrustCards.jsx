import { useReveal } from '../../hooks/useReveal'
import { Eyebrow, ArrowLink } from './primitives'
import { ArrowRight } from '../Icons'

/* ---------------------------------------------------------------------------
   `.layout_cards_wrap` in its CENTRED 4-up form — the "Foster AI Trust. Scale
   AI Adoption." band that closes live /security (section 1440 x 835).

   MEASURED at 1440px off .scrape/plat-security.png:
     ground   white
     header   centred: a mono eyebrow ("Trust"), a 54px Feature h2 on two
              lines, an 18/21.6 body in a ~46ch measure, then a coral mono
              "Explore Trust →" link 24px under it
     cards    four 328px tracks on a 16px gutter inside the 1360 container,
              each 158px tall on its own flat tint. Inside a card:
                a 24px Feature title in the tint's OWN dark step —
                measured rgb(111,106,0) olive-700 on yellow-500,
                rgb(32,122,0) green-700 on green-400,
                rgb(0,6,61) ink on blue-300,
                rgb(65,13,7) flame-800 on flame-300 —
                a 1px rule under it, a 14px body, and a bare coral arrow
                glyph pinned to the card's bottom-right corner.

   The per-card heading colour is the whole point of the block: rendering all
   four in ink loses the tint pairing that live uses, so `fg` is required on
   every card and is a Tailwind token, never a hex.

   PROPS
     eyebrow, title, body, link   the centred header
     cards  [{ title, body, tint, fg }]
     bg, spaceTop, spaceBottom
--------------------------------------------------------------------------- */

export default function TrustCards({
  eyebrow, title, body, link, cards = [],
  bg = 'bg-surface', spaceTop = 112, spaceBottom = 112,
}) {
  const ref = useReveal({ threshold: 0 })

  return (
    <section ref={ref} className={`clip-bleed ${bg}`}>
      <div aria-hidden="true" style={{ height: spaceTop }} />

      <div className="u-container flex flex-col items-center text-center">
        {eyebrow && <Eyebrow className="reveal">{eyebrow}</Eyebrow>}

        {title && (
          <h2 className="reveal mt-6 max-w-[16ch] font-serif text-ink tracking-tightest
                         text-[clamp(2.125rem,3.75vw,3.375rem)] leading-[1.05]"
              style={{ '--reveal-delay': '80ms' }}>
            {title}
          </h2>
        )}

        {body && (
          <p className="reveal mt-5 max-w-[46ch] text-text-main text-ink text-pretty"
             style={{ '--reveal-delay': '140ms' }}>
            {body}
          </p>
        )}

        {link && <ArrowLink {...link} className="reveal mt-6" style={{ '--reveal-delay': '190ms' }} />}
      </div>

      <div className="u-container mt-10 grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <article key={c.title}
                   className={`reveal flex min-h-[158px] flex-col ${c.tint} p-4`}
                   style={{ '--reveal-delay': `${i * 80}ms` }}>
            <h3 className={`font-serif tracking-tighter leading-1.1 text-h4 ${c.fg}`}>
              {c.title}
            </h3>
            <hr className="mt-3 border-0 border-t border-ink/20" />
            <p className="mt-3 text-text-small text-ink text-pretty">{c.body}</p>
            <span className="mt-auto self-end pt-4 text-ink" aria-hidden="true">
              <ArrowRight />
            </span>
          </article>
        ))}
      </div>

      <div aria-hidden="true" style={{ height: spaceBottom }} />
    </section>
  )
}
