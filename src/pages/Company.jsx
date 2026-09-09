import SectionSpace from '../components/SectionSpace'
import { useReveal } from '../hooks/useReveal'

/**
 * /company — rebuilt against the live page (.scrape/struct-company.json and
 * .scrape/deep-company.json, cross-checked against the rendered HTML).
 *
 * Measured section order and heights at 1440:
 *   company_hero_wrap                 498   ribbon headline over a square grid
 *   simple_layout_wrap              1,480   "Our Vision" manifesto, 80px lead
 *   derisk_wrap u-column-full         524   54px pull-quote on the blue grid
 *   (stats group)                     448   "Our Impact" + three dark-100 tiles
 *   simple_layout_wrap                844   leadership rail on flame-400
 *   simple_layout_wrap                112   g_section_space spacer
 *   header_1_wrap u-alignment-center 1,000  Careers header, image + 60% scrim
 *
 * The page does NOT close with the homepage <Closing/> block; the careers
 * header is the last section before the footer.
 */

/* .company_hero_headline_wrap ribbons — colours and transforms are inline on
   the live g_ribbon_wrap elements. */
/* Live computed values (.scrape/lead.mjs): the three lines are NOT one size —
   80px / 54px / 80px — and only the middle one is set in the sans face. Colours
   are green-800 on green-500, blue-400 on blue-600, pink-500 on flame-600. */
const RIBBONS = [
  { text: 'Elevate All Marketing', bg: 'bg-green-500', fg: 'text-green-800',
    font: 'font-serif', size: 'text-[clamp(2.25rem,5.6vw,5rem)]',
    rotate: 'rotate(-2deg) translateX(.5rem)' },
  { text: 'And All Marketers', bg: 'bg-blue-600', fg: 'text-blue-400',
    font: 'font-sans', size: 'text-[clamp(1.5rem,3.8vw,3.375rem)]',
    rotate: 'rotate(3deg) translateX(.75rem)', mb: '-.5rem' },
  { text: 'With The Power of AI', bg: 'bg-flame-600', fg: 'text-pink-500',
    font: 'font-serif', size: 'text-[clamp(2.25rem,5.6vw,5rem)]',
    rotate: 'none' },
]

/* .company_manifesto_text — full copy from the live richtext. */
const MANIFESTO = [
  'We’re giving marketers the power to turn vision into reality with newfound ease. The days of slow, cumbersome processes are fading, as we clear the path for creativity to thrive and innovation to accelerate.',
  'Jasper is your catalyst, allowing you to move faster, think smarter, and amplify your impact—all while staying true to the voice and values that make your brand unique. With streamlined workflows and fewer barriers, you’re free to focus on what matters most: crafting stories that resonate, building connections that last, and driving real, lasting results.',
  'But Jasper is more than just a tool; it’s a community. A space where marketers and creators gather to inspire one another, solve problems together, and push the boundaries of what’s possible. We’re not here to replace your creativity, but to unlock it—empowering teams to think boldly, act decisively, and grow into their full potential. With Jasper, you’re not just keeping up with the pace of change—you’re leading it.',
]

/* Three wrapper_small_wrap tiles on --swatch--dark-100. */
const STATS = [
  ['900+', 'Enterprise customers'],
  ['20%', 'of the Fortune 500 served'],
  ['125k+', 'global customers'],
]

/* .slider_main_item — the embedded <style> tints every 4th card:
   4n+1 yellow-700/500, 4n+2 flame-600/500, 4n+3 blue-500/400, 4n green-600/500.
   `main` paints the name chip, `inner` the role band. */
const LEADERSHIP = [
  { name: 'Timothy Young', role: 'Chief Executive Officer',
    img: '/assets/team-timothy-young.png',
    alt: 'Man with red hair, beard, and tortoiseshell glasses wearing a black sweatshirt against gray background.',
    main: 'bg-yellow-700', inner: 'bg-yellow-500' },
  { name: 'Tom Newton', role: 'Chief Marketing Officer, Jasper',
    img: '/assets/team-tom-newton.jpg',
    alt: 'Man with short brown hair, beard, and round glasses in a light shirt against a gray background.',
    main: 'bg-flame-500', inner: 'bg-flame-400' },
  { name: 'Christian Freitas', role: 'SVP of Revenue',
    img: '/assets/team-christian-freitas.png',
    alt: 'Smiling bald man with light skin wearing a light gray polo shirt against a gray background.',
    main: 'bg-blue-500', inner: 'bg-blue-400' },
  { name: 'Carlos Diaz', role: 'VP, People and Talent',
    img: '/assets/team-carlos-diaz.png',
    alt: 'Smiling man with short dark hair and beard wearing a green collared shirt over a white t-shirt.',
    main: 'bg-green-600', inner: 'bg-green-500' },
]

/* .generated_squares_wrap — a JS-filled grid of 45 x 29 dark-100 tiles on the
   hero, and 27 x 20 blue tiles on the derisk band. Rendered here as a repeating
   gradient so the pattern costs no DOM and reflows with the viewport.

   Live fills each cell SOLID with a 1px gutter between tiles: sampling
   .scrape/cap-company-live.png across the hero returns mostly #f2f2f3 rather
   than mostly white, so this is a tiled field, not a thin-line rule grid.
   Two hard-stop gradients paint the 1px gutter over a solid `tile` ground —
   the gutter colour is the surface the grid sits on. */
function SquareGrid({ cell, tile, gutter = '#ffffff', className = '' }) {
  const [w, h] = cell
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundColor: tile,
        backgroundImage:
          `linear-gradient(to right, ${gutter} 1px, transparent 1px 100%),` +
          `linear-gradient(to bottom, ${gutter} 1px, transparent 1px 100%)`,
        backgroundSize: `${w}px ${h}px`,
      }}
    />
  )
}

export default function Company() {
  const heroRef = useReveal({ threshold: 0.05 })
  const visionRef = useReveal()
  const quoteRef = useReveal()
  const statsRef = useReveal()
  const teamRef = useReveal()
  const careersRef = useReveal()

  return (
    <>
      {/* Hero — 498px: 140px space, 246px content well, 112px space */}
      <section ref={heroRef} className="company-hero relative overflow-hidden bg-surface">
        <SquareGrid cell={[45, 29]} tile="#f2f2f3" />

        <div className="relative z-10 u-container pt-[140px] pb-section-main text-center">
          <p className="reveal text-text-large text-ink/65">Our Mission</p>

          <h1 className="sr-only">
            Our mission: Elevate all marketing and all marketers with the power of AI
          </h1>
          <div aria-hidden="true" className="mt-4 flex flex-col items-center">
            {RIBBONS.map((r, i) => (
              <span
                key={r.text}
                aria-hidden="true"
                className="reveal inline-block"
                style={{ marginBottom: r.mb, '--reveal-delay': `${80 + i * 90}ms` }}
              >
                <span
                  className={`inline-block ${r.bg} ${r.fg} ${r.font} ${r.size}
                              tracking-tightest px-3 py-1 leading-1`}
                  style={{ transform: r.rotate }}
                >
                  {r.text}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision manifesto — 1480px, 1131px well with an indented column */}
      <section ref={visionRef} className="relative bg-surface">
        <div aria-hidden="true" className="h-px w-full bg-dark-50" />
        <div className="u-container">
          <SectionSpace />
          <div className="mx-auto w-full max-w-[1131px]">
            <div className="mx-auto w-full max-w-[901px]">
              <p className="reveal eyebrow mx-auto block w-fit bg-flame-200 px-2 py-1 text-text-main">
                Our Vision
              </p>

              <h2 className="reveal mt-6 font-serif text-ink tracking-tightest text-center
                             text-[clamp(2.25rem,6.4vw,5rem)] leading-1"
                  style={{ '--reveal-delay': '80ms' }}>
                At Jasper, we’re closing the gap between &quot;idea&quot; and &quot;impact&quot;
              </h2>

              <div className="mt-s8 space-y-s6">
                {/* Live marks each manifesto block as an h3, not a p. */}
                {MANIFESTO.map((p, i) => (
                  <h3 key={i}
                      className="reveal font-serif font-book text-ink tracking-tighter text-pretty
                                 text-[clamp(1.375rem,2.8vw,2.375rem)] leading-1.1"
                      style={{ '--reveal-delay': `${140 + i * 80}ms` }}>
                    {p}
                  </h3>
                ))}
              </div>
            </div>
          </div>
          <SectionSpace />
        </div>
      </section>

      {/* Pull-quote — 524px, .derisk_grid of blue tiles, 140px vertical padding */}
      <section ref={quoteRef} className="relative overflow-hidden bg-blue-200">
        <SquareGrid cell={[27, 20]} tile="#81cbff" gutter="#e4f4ff" className="opacity-60" />
        <div className="relative z-10 u-container py-[140px] text-center">
          <h2 className="reveal mx-auto max-w-[18ch] font-serif text-ink tracking-tightest
                         text-[clamp(1.875rem,4.4vw,3.375rem)] leading-1.05">
            Together, we’re transforming the future of marketing, one idea, one story,
            one brand at a time.
          </h2>
        </div>
      </section>

      {/* Our Impact — 448px: 272px header block then a 160px row of tiles */}
      <section ref={statsRef} className="bg-surface">
        <div className="u-container">
          <SectionSpace />
          <div className="text-center">
            <p className="reveal eyebrow mx-auto block w-fit bg-flame-200 px-2 py-1 text-text-main">
              Our Impact
            </p>
            {/* Live renders this line as a p; the h3s are the stat numbers. */}
            <p className="reveal mt-5 mx-auto max-w-[20ch] font-serif text-ink tracking-tightest
                          text-[clamp(1.875rem,4.4vw,3.375rem)] leading-1.05"
               style={{ '--reveal-delay': '80ms' }}>
              Jasper by the numbers
            </p>
          </div>
          <div aria-hidden="true" className="h-section-xxs" />

          <div className="grid gap-gutter sm:grid-cols-3 lg:grid-cols-12">
            {STATS.map(([n, label], i) => (
              <div key={n}
                   className="reveal bg-dark-100 flex flex-col items-center justify-center
                              px-s5 py-s7 text-center lg:col-span-4 min-h-[160px]"
                   style={{ '--reveal-delay': `${i * 110}ms` }}>
                <h3 className="font-serif font-book text-ink tracking-tightest leading-1.05
                               text-[clamp(1.875rem,4.4vw,3.375rem)]">
                  {n}
                </h3>
                <p className="mt-2 max-w-[50ch] text-text-large text-ink/65">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive leadership — 844px flame-400 frame with a headshot rail */}
      <section id="team" ref={teamRef} className="bg-surface">
        <div className="u-container">
          <div className="relative overflow-hidden bg-flame-400 py-section-small">
            <div className="u-container">
              <p className="reveal eyebrow block w-fit bg-flame-200 px-2 py-1 text-text-main">
                Our Executive Leadership Team
              </p>
              <h2 className="reveal mt-4 max-w-[20ch] font-serif text-ink tracking-tightest
                             text-[clamp(1.875rem,4.4vw,3.375rem)] leading-1.05"
                  style={{ '--reveal-delay': '80ms' }}>
                Leading the way to marketing excellence
              </h2>
            </div>

            <div className="reveal mt-s7 overflow-x-auto">
              <ul className="u-container flex list-none gap-gutter">
                {LEADERSHIP.map((m) => (
                  <li key={m.name}
                      className="w-[72vw] shrink-0 sm:w-[46%] lg:w-[calc((100%-3*16px)/4)]">
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-dark-200">
                      <img src={m.img} alt={m.alt} loading="lazy"
                           className="absolute inset-0 h-full w-full object-cover" />
                    </div>
                    {/* Live measures the name chip at 38px/-0.38px, not 24px. */}
                    <p className={`${m.main} inline-block px-2 py-1 font-serif text-ink
                                   tracking-tight leading-1
                                   text-[clamp(1.5rem,2.6vw,2.375rem)]`}>
                      {m.name}
                    </p>
                    <p className={`${m.inner} eyebrow block px-2 py-1 text-text-small text-ink`}>
                      {m.role}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* measured g_section_space between the team frame and the careers header */}
      <SectionSpace />

      {/* Careers — 1000px header_1_wrap: full-bleed photo, 60% scrim, light copy */}
      <section ref={careersRef} className="relative overflow-hidden bg-ink-950"
               style={{ minHeight: 1000 }}>
        <img src="/assets/company-careers.avif" alt="" aria-hidden="true"
             className="absolute inset-0 h-full w-full object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 u-container flex flex-col items-center justify-center
                        text-center py-section-main"
             style={{ minHeight: 1000 }}>
          <p className="reveal eyebrow block w-fit bg-flame-200 px-2 py-1 text-text-main text-ink">
            Careers
          </p>

          <h2 className="reveal mt-6 mx-auto max-w-[20ch] font-serif text-white tracking-tightest
                         text-[clamp(2.25rem,6.4vw,5rem)] leading-1"
              style={{ '--reveal-delay': '80ms' }}>
            Join the fastest growing AI platform for Marketing
          </h2>

          <div className="reveal mt-8" style={{ '--reveal-delay': '160ms' }}>
            <a href="/careers"
               className="btn border-white bg-transparent text-white
                          hover:bg-white hover:text-ink"
               style={{ fontSize: 18, fontWeight: 500 }}>
              Explore Careers
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
