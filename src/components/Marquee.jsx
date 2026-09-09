import { useReveal } from '../hooks/useReveal'
import { useScrollProgress } from '../hooks/useScrollProgress'

/* Live order, read off `.marquee_cms_list`: Ulta leads the track.
   Measured per `.marquee_cms_item`: a 160 x 80 box with a 100px right margin
   (a 260px pitch), holding a 160 x 66 image at object-fit:cover, full opacity
   and no filter. The track scales down proportionally below `sm`. */
const LOGOS = [
  { src: '/assets/jasp-ulta.png',          alt: 'Ulta Beauty' },
  { src: '/assets/jasp-cushman.webp',      alt: 'Cushman & Wakefield' },
  { src: '/assets/jasp-morningstar.webp',  alt: 'Morningstar' },
  { src: '/assets/jasp-harpercollins.webp',alt: 'HarperCollins' },
  { src: '/assets/jasp-prudential.webp',   alt: 'Prudential' },
  { src: '/assets/jasp-AAA.webp',          alt: 'AAA' },
  { src: '/assets/jasp-Bona.webp',         alt: 'Bona' },
  { src: '/assets/jasp-hitachi.webp',      alt: 'Hitachi' },
  { src: '/assets/jasp-iheartmedia.webp',  alt: 'iHeartMedia' },
  { src: '/assets/jasp-kelly.webp',        alt: 'Kelly' },
  { src: '/assets/jasp-sanoflif.webp',     alt: 'Sanofi' },
  { src: '/assets/jasp-HH.webp',           alt: 'HH' },
]

/**
 * The logo band is shared, but its section spacers are not. Measured live:
 *   homepage   296px = 80  + 136 + 80
 *   /platform  392px = 112 + 168 + 112
 * so `space` carries the per-page g_section_space rather than one shared step.
 */
export default function Marquee({ space = 'py-[80px]' }) {
  const ref = useReveal()
  // The original scrubs the logo track with scroll on top of its idle drift.
  const [trackRef, progress] = useScrollProgress()

  return (
    <section ref={ref} className={`clip-bleed bg-surface ${space}`}>
      <div className="u-container">
        {/* live `.marquee_headline` — Feature 24/26.4 with letter-spacing
            NORMAL (not the tightest override), 32px above the logo rail */}
        <h2 className="reveal text-center font-serif text-[1.5rem] leading-1.1 tracking-none text-ink">
          World-class marketing teams trust Jasper
        </h2>
      </div>

      <div ref={trackRef} className="reveal marquee-track clip-bleed relative mt-8"
           style={{ '--reveal-delay': '100ms' }}>
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-surface to-transparent" />

        <div
          className="flex w-max animate-marquee"
          style={{
            '--marquee-duration': '46s',
            // scrub: adds ~180px of scroll-driven travel across the section
            translate: `${-progress * 180}px 0`,
          }}
        >
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center shrink-0" aria-hidden={dup === 1}>
              {LOGOS.map((logo) => (
                <div key={logo.alt}
                     className="flex h-[80px] w-[110px] shrink-0 items-center justify-center
                                mr-[60px] sm:w-[160px] sm:mr-[100px]">
                  <img
                    src={logo.src}
                    alt={dup === 0 ? logo.alt : ''}
                    loading="lazy"
                    className="h-[46px] w-[110px] object-cover sm:h-[66px] sm:w-[160px]"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
