import { useReveal } from '../hooks/useReveal'
import { ArrowRight } from './Icons'

/**
 * Customer stories mosaic.
 *
 * Measured from the live `.stories_main_grid`: a 4 x 328px grid with a 16px
 * gutter over 3 rows, mixing `span 2` testimonial cards (672px, #f9f9f9) with
 * single-column stat cards (328px, pastel tints). Card order and the
 * large/small rhythm follow the original row for row.
 *
 * Hover was verified against the live site with a full descendant diff:
 * these cards have NO hover state, so none is added here.
 */
const CARDS = [
  // row 1 — small, small, large
  { kind: 'stat', tint: 'bg-green-300', logo: '/assets/Stories-Logo-Cushman.svg',
    eyebrow: 'Case Studies - Cushman & Wakefield',
    stat: '10,000+ hours saved annually' },
  { kind: 'stat', tint: 'bg-blue-300',
    stat: 'Compliant, high-quality, and localized marketing content at scale' },
  { kind: 'quote', tint: 'bg-dark-50', person: '/assets/Peter-So.avif',
    name: 'Peter So', role: 'VP of Digital Innovation',
    logo: '/assets/Stories-Logo-ServiceTitan.svg',
    quote: 'Jasper lets our team move from concept to campaign in a fraction of the time it used to take.' },

  // row 2 — large, small, small
  { kind: 'quote', tint: 'bg-dark-50', person: '/assets/elaina-shekhter-EPAM.avif',
    name: 'Elaina Shekhter', role: 'Chief Marketing & Strategy Officer',
    logo: '/assets/Stories-Logo-EPAM.svg',
    quote: 'We can localize a global campaign across markets without expanding the content team.' },
  { kind: 'stat', tint: 'bg-pink-400', logo: '/assets/Stories-Logo-Opella.svg',
    stat: '60% of SEO now automated with Jasper' },
  { kind: 'stat', tint: 'bg-yellow-500', logo: '/assets/Stories-Logo-Adidas.svg',
    eyebrow: 'Adidas uses AI',
    stat: '7,500 product descriptions produced' },

  // row 3 — small, small, large
  { kind: 'stat', tint: 'bg-blue-300', logo: '/assets/Stories-Logo-PGIM.svg',
    stat: '3x content production' },
  { kind: 'stat', tint: 'bg-green-300', logo: '/assets/Stories-Logo-Anthropologie.svg',
    eyebrow: 'Time-to-market',
    stat: 'Faster end-to-end campaigns' },
  { kind: 'quote', tint: 'bg-dark-50', person: '/assets/Bryan-Olshock.avif',
    name: 'Bryan Olshock', role: 'Chief Marketing Officer',
    logo: '/assets/Stories-Logo-Avery-Dennison.svg',
    quote: 'Jasper gives every marketer on the team the leverage that used to require an agency.' },
]

export default function Stories() {
  const ref = useReveal()

  return (
    <section ref={ref} className="bg-surface py-[80px]">
      <div className="u-container">
        <p className="reveal eyebrow text-text-small text-ink/70">Customer Stories</p>

        <div className="reveal mt-5 flex flex-wrap items-end justify-between gap-6"
             style={{ '--reveal-delay': '80ms' }}>
          <h2 className="font-serif text-ink tracking-tightest max-w-[16ch]
                         text-[clamp(2.25rem,5.6vw,5rem)] leading-1">
            Proven strategies, real results
          </h2>
          <a href="#" className="btn btn-secondary shrink-0">Explore Customer Stories</a>
        </div>

        {/* measured: 4 x 328px, 16px gutter */}
        <div className="mt-12 md:mt-16 grid gap-gutter sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c, i) => (
            <article
              key={i}
              className={`reveal ${c.tint} rounded-DEFAULT p-6 flex flex-col
                          ${c.kind === 'quote' ? 'sm:col-span-2' : ''}`}
              style={{ '--reveal-delay': `${(i % 3) * 90}ms` }}
            >
              {c.kind === 'quote' ? (
                <div className="flex h-full gap-5">
                  <img src={c.person} alt="" aria-hidden="true" loading="lazy"
                       className="h-20 w-20 shrink-0 rounded-full object-cover" />
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="font-sans text-text-main text-ink leading-1.2">{c.name}</p>
                      <p className="mt-0.5 text-text-small text-ink/65">{c.role}</p>
                      <p className="mt-4 font-serif text-ink tracking-tighter leading-1.2
                                    text-[clamp(1.05rem,1.5vw,1.25rem)]">
                        “{c.quote}”
                      </p>
                    </div>
                    <div className="mt-5 flex items-end justify-between gap-4">
                      {c.logo
                        ? <img src={c.logo} alt="" aria-hidden="true" loading="lazy"
                               className="h-12 w-auto max-w-[8rem] object-contain object-left" />
                        : <span />}
                      <ArrowRight className="w-5 h-5 text-ink shrink-0" />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {c.logo && (
                    <img src={c.logo} alt="" aria-hidden="true" loading="lazy"
                         className="h-12 w-auto max-w-[9rem] object-contain object-left" />
                  )}
                  {c.eyebrow && (
                    <p className="mt-4 text-text-small text-ink/65">{c.eyebrow}</p>
                  )}
                  <p className="mt-4 font-serif text-ink tracking-tighter leading-1.1
                                text-[clamp(1.35rem,2.1vw,1.75rem)]">
                    {c.stat}
                  </p>
                  <div className="mt-auto pt-8 flex justify-end">
                    <ArrowRight className="w-5 h-5 text-ink" />
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
