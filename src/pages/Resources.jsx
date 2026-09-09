import Carousel from '../components/Carousel'
import { useReveal } from '../hooks/useReveal'
import { ArrowRight } from '../components/Icons'
import { HERO_CARDS, EBOOKS, WEBINARS, CASE_STUDIES } from '../data/resources'

/**
 * /resources — rebuilt against the live page (5952px at 1440).
 *
 * Section order and heights from .scrape/struct-resources.json:
 *   hero_vertical_wrap   1006   80px h1 + three featured cards on Grid BG (flame ground)
 *   slider_main_wrap      704   Ebooks & Reports rail
 *   slider_main_wrap      996   Webinars & Events rail (speaker pairs + View All)
 *   slider_main_wrap      841   Customer Stories rail (38px stat bar)
 *   horizontal_vis_wrap   694   54px newsletter band + The Loop art
 *   hero_vertical_wrap    456   80px blog CTA on Red Grid
 *
 * The live rails run on Swiper; `Carousel` reproduces them with scroll-snap so
 * no dependency is added. Card width is the measured 368px.
 *
 * Live has NO closing `cta_main_wrap` on this page — the footer follows the
 * blog band directly — so `PageCta` is deliberately not rendered here.
 */

/**
 * Rail section heading: two serif lines on rotated highlight blocks — the first
 * line on the pale tint, the second on the solid, as measured on the live page.
 */
function RailHeading({ lines, label, tintClass, tintText, solidClass, solidText }) {
  return (
    <>
      {/* Live keeps these as SIBLINGS: the h2 holds only the descriptive label
          (that is the whole of its textContent), and the ribbon is decorative
          markup next to it. Nesting the label inside the ribbon h2 would merge
          both strings into one accessible name. */}
      <h2 className="sr-only">{label}</h2>
      <div aria-hidden="true"
           className="flex flex-col items-start font-serif tracking-tightest leading-1
                      text-[clamp(2rem,4.4vw,3.375rem)]">
        <span className={`inline-block -rotate-1 px-3 py-1 ${tintClass} ${tintText}`}>
          {lines[0]}
        </span>
        <span className={`-mt-1 ml-6 inline-block rotate-1 px-3 py-1 ${solidClass} ${solidText}`}>
          {lines[1]}
        </span>
      </div>
    </>
  )
}

/** Shared 368px rail card shell. */
function RailCard({ children, className = '' }) {
  return (
    <article className={`flex w-[368px] flex-none snap-start flex-col overflow-hidden
                         rounded-DEFAULT ${className}`}>
      {children}
    </article>
  )
}

/** Mono "Read Story ->" / "Watch the Replay ->" link used on the rail cards. */
function RailLink({ children, className = '' }) {
  return (
    <a href="#" className={`link-arrow font-mono text-text-small ${className}`}>
      {children}<ArrowRight />
    </a>
  )
}

/**
 * Speaker headshot with the brand badge that overlaps its lower-right corner.
 * Live renders a 160px portrait and a 40px badge, and the badge belongs to the
 * SPEAKER, not the card: outside guests carry their company mark while Jasper
 * staff carry the Jasper square, so two speakers on one card can differ.
 * Falls back to a token-coloured initial so a missing portrait never renders
 * as a broken image.
 */
function Speaker({ name, role, img, badge }) {
  return (
    <li className="flex min-w-0 flex-1 flex-col items-center text-center">
      <span className="relative">
        {img ? (
          <img src={img} alt={name} loading="lazy"
               className="h-[104px] w-[104px] rounded-full bg-surface-2 object-cover" />
        ) : (
          <span aria-hidden="true"
                className="grid h-[104px] w-[104px] place-items-center rounded-full
                           bg-flame-400 font-serif text-h3 text-ink">
            {name.charAt(0)}
          </span>
        )}
        {badge && (
          <img src={badge} alt="" aria-hidden="true" loading="lazy"
               className="absolute bottom-0 right-0 h-7 w-7 rounded-full
                          border-2 border-flame-200 bg-surface object-cover" />
        )}
      </span>
      <h2 className="mt-3 font-sans text-h5 leading-1.2 tracking-tight text-ink">{name}</h2>
      {role && (
        <span className="mt-1 font-mono text-text-tiny text-ink/70 text-pretty">{role}</span>
      )}
    </li>
  )
}

export default function Resources() {
  const heroRef = useReveal({ threshold: 0.05 })
  const ebookRef = useReveal()
  const webinarRef = useReveal()
  const storyRef = useReveal()
  const newsRef = useReveal()
  const blogRef = useReveal()

  return (
    <>
      {/* 1 — hero_vertical_wrap, h=1006 */}
      <section ref={heroRef} className="relative overflow-hidden bg-flame-600 text-surface">
        <img src="/assets/res-grid-bg.avif" alt="" aria-hidden="true"
             className="pointer-events-none absolute inset-0 h-full w-full object-cover
                        opacity-25 mix-blend-overlay" />

        <div className="relative z-10 u-container pt-section-page-top pb-section-main text-center">
          <h1 className="reveal mx-auto max-w-[16ch] font-serif tracking-tightest
                         text-[clamp(2.5rem,6.4vw,5rem)] leading-1">
            AI marketing resources
          </h1>
          <p className="reveal mx-auto mt-6 max-w-[58ch] text-text-large text-surface/90 text-pretty"
             style={{ '--reveal-delay': '80ms' }}>
            Find tips, advice, and practical use cases to advance your AI marketing strategy.
          </p>

          {/* Live overlaps these three; a plain grid keeps them readable here. */}
          <div className="mt-14 grid gap-gutter text-left md:grid-cols-2 lg:grid-cols-12">
            {HERO_CARDS.map((c, i) => (
              <article key={c.title}
                       className="reveal flex flex-col overflow-hidden rounded-DEFAULT
                                  bg-surface text-ink lg:col-span-4"
                       style={{ '--reveal-delay': `${140 + i * 90}ms` }}>
                <div className="aspect-[16/10] overflow-hidden bg-surface-2">
                  <img src={c.img} alt="" aria-hidden="true" loading="lazy"
                       className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-serif text-h3 leading-1.1 tracking-tighter text-ink">
                    {c.title}
                  </h2>
                  <p className="mt-4 text-text-small text-ink/85 text-pretty">{c.body}</p>
                  <RailLink className="mt-auto self-start pt-6">{c.cta}</RailLink>
                </div>
              </article>
            ))}
          </div>

          {/* Live renders this as an anchor, not static text. */}
          <a href="#ebooks"
             className="reveal mt-14 inline-block font-mono text-text-small text-surface/80
                        transition-colors duration-300 ease-jasper hover:text-surface"
             style={{ '--reveal-delay': '440ms' }}>
            Scroll for all resources ↓
          </a>
        </div>
      </section>

      {/* 2 — slider_main_wrap, h=704 — Ebooks & Reports */}
      <section id="ebooks" ref={ebookRef} className="overflow-hidden bg-surface pt-section-main">
        <div className="u-container">
          <div className="reveal">
            <RailHeading lines={['Ebooks &', 'Reports']} label="Uplevel your AI with Jasper Ebooks & Reports"
                         tintClass="bg-blue-300" tintText="text-blue-700"
                         solidClass="bg-blue-700" solidText="text-blue-300" />
          </div>

          <div className="reveal mt-12" style={{ '--reveal-delay': '80ms' }}>
            <Carousel label="Jasper ebooks and reports">
              {EBOOKS.map((c) => (
                <RailCard key={c.title + c.cta} className="h-[416px] bg-blue-200">
                  <div className="aspect-[16/10] shrink-0 overflow-hidden bg-blue-300">
                    <img src={c.img} alt="" aria-hidden="true" loading="lazy"
                         className="h-full w-full object-cover" />
                  </div>
                  {/* Live: 16px padding, 16px body, no clamp — a long body simply
                      overflows the fixed 416px card and is clipped. */}
                  <div className="flex min-h-0 flex-1 flex-col p-4">
                    <h3 className="font-serif text-h4 leading-1.1 tracking-tighter text-blue-700">
                      {c.title}
                    </h3>
                    <p className="mt-3 min-h-0 flex-1 overflow-hidden text-text-main
                                  text-blue-700 text-pretty">
                      {c.body}
                    </p>
                    <RailLink className="mt-2 shrink-0 self-start text-blue-700">{c.cta}</RailLink>
                  </div>
                </RailCard>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* 3 — slider_main_wrap, h=996 — Webinars & Events */}
      <section ref={webinarRef} className="overflow-hidden bg-surface pb-section-main">
        <div className="u-container">
          <div className="reveal">
            <RailHeading lines={['Webinars', '& Events']} label="Learn AI with Jasper Webinars & Events"
                         tintClass="bg-flame-300" tintText="text-flame-600"
                         solidClass="bg-flame-600" solidText="text-flame-300" />
          </div>

          <div className="reveal mt-12" style={{ '--reveal-delay': '80ms' }}>
            <Carousel label="Jasper webinars and events">
              {WEBINARS.map((c) => (
                <RailCard key={c.title + c.date} className="h-[611px] bg-flame-200">
                  <div className="flex min-h-0 flex-1 flex-col p-4">
                    <p className="font-mono text-text-tiny text-ink/70">{c.time} {c.tz}</p>
                    <h3 className="mt-4 font-serif text-h4 leading-1.1 tracking-tighter text-ink">
                      {c.title}
                    </h3>
                    <p className="mt-3 min-h-0 flex-1 overflow-hidden text-text-main
                                  text-ink text-pretty">
                      {c.body}
                    </p>
                    <RailLink className="mt-2 shrink-0 self-start text-flame-600">
                      {c.cta}
                    </RailLink>
                  </div>

                  <div className="shrink-0 border-t border-ink/10 p-4">
                    <p className="font-mono text-text-tiny text-ink/70">Hosted by</p>
                    <ul className="mt-3 flex items-start gap-3">
                      {c.speakers.map((s) => (
                        <Speaker key={s.name + s.role} {...s} />
                      ))}
                    </ul>
                  </div>
                </RailCard>
              ))}
            </Carousel>
          </div>

          <div className="reveal mt-10 flex justify-center" style={{ '--reveal-delay': '160ms' }}>
            <a href="#" className="btn btn-secondary">View All Webinars</a>
          </div>
        </div>
      </section>

      {/* 4 — slider_main_wrap, h=841 — Customer Stories */}
      <section ref={storyRef} className="overflow-hidden bg-surface pb-section-main">
        <div className="u-container">
          <div className="reveal">
            <RailHeading lines={['Customer', 'Stories']} label="Jasper Customer Stories"
                         tintClass="bg-green-500" tintText="text-green-700"
                         solidClass="bg-green-700" solidText="text-green-600" />
          </div>

          <div className="reveal mt-12" style={{ '--reveal-delay': '80ms' }}>
            <Carousel label="Jasper customer stories">
              {CASE_STUDIES.map((c) => (
                <RailCard key={c.company} className="bg-green-300">
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="sr-only">{c.company}</h3>
                      <img src={c.img} alt={c.company} loading="lazy"
                           className="h-8 w-auto max-w-[9rem] object-contain object-left" />
                      <RailLink className="shrink-0 text-green-700">Read Story</RailLink>
                    </div>
                    <p className="mt-5 border-t border-green-700/20 pt-5
                                  text-text-main text-green-700 text-pretty">
                      {c.body}
                    </p>
                  </div>

                  {/* Stat bar: live paints the number on its own green-600 tile and
                      sets the caption on a green-500 strip beside it — not one flat
                      band. The number is 38px/ink and must never wrap ("1 day"). */}
                  <div className="mt-auto flex items-stretch bg-green-500">
                    <h2 className="flex shrink-0 items-center whitespace-nowrap bg-green-600
                                   px-4 py-4 font-serif tracking-tightest leading-1 text-ink
                                   text-[clamp(1.75rem,3vw,2.375rem)]">
                      {c.stat}
                    </h2>
                    <p className="flex items-center px-4 py-4 text-text-tiny text-ink text-pretty">
                      {c.caption}
                    </p>
                  </div>
                </RailCard>
              ))}
            </Carousel>
          </div>

          <div className="reveal mt-10 flex justify-center" style={{ '--reveal-delay': '160ms' }}>
            <a href="#" className="btn btn-secondary">View All Customer Stories</a>
          </div>
        </div>
      </section>

      {/* 5 — horizontal_vis_wrap, h=694 — newsletter band */}
      <section ref={newsRef} className="relative overflow-hidden bg-surface">
        <img src="/assets/res-paper-1.svg" alt="" aria-hidden="true"
             className="pointer-events-none absolute -left-24 top-0 hidden w-[26rem] lg:block" />
        <img src="/assets/res-paper-2.svg" alt="" aria-hidden="true"
             className="pointer-events-none absolute -right-16 bottom-0 hidden w-[18rem] lg:block" />

        <div className="relative z-10 u-container py-section-main">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-gutter">
            <div className="lg:col-span-6">
              <h2 className="reveal font-serif text-ink tracking-tightest leading-1.05
                             text-[clamp(1.9rem,4.2vw,3.375rem)]">
                Stay ahead with exclusive AI tips. Subscribe to Jasper's newsletter:
              </h2>

              <form className="reveal mt-10 flex flex-wrap items-end gap-4"
                    style={{ '--reveal-delay': '120ms' }}
                    onSubmit={(e) => e.preventDefault()}>
                <div className="min-w-0 flex-1">
                  <label htmlFor="nl-email" className="sr-only">Enter your business email</label>
                  <input id="nl-email" name="email" type="email" required autoComplete="email"
                         placeholder="Enter your business email*"
                         className="w-full border-0 border-b border-ink/40 bg-transparent pb-2
                                    text-text-main text-ink placeholder:text-ink/55
                                    focus:border-ink focus:outline-none" />
                </div>
                <button type="submit" className="btn btn-secondary shrink-0">Subscribe</button>
              </form>
            </div>

            <div className="reveal lg:col-span-6" style={{ '--reveal-delay': '180ms' }}>
              <img src="/assets/res-the-loop.png" alt="" aria-hidden="true" loading="lazy"
                   className="w-full rounded-DEFAULT object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 6 — hero_vertical_wrap, h=456 — blog CTA */}
      <section ref={blogRef} className="relative overflow-hidden bg-flame-300">
        <img src="/assets/res-red-grid.svg" alt="" aria-hidden="true"
             className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40" />

        <div className="relative z-10 u-container py-section-main text-center">
          <h2 className="reveal mx-auto max-w-[18ch] font-serif text-ink tracking-tightest
                         text-[clamp(2.25rem,5.6vw,5rem)] leading-1">
            Hungry for more? Dive into the Jasper Blog
          </h2>
          <div className="reveal mt-8" style={{ '--reveal-delay': '120ms' }}>
            <a href="#" className="btn btn-primary">Explore The Jasper Blog</a>
          </div>
        </div>
      </section>
    </>
  )
}
