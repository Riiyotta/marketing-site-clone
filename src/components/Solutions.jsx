import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useScrollProgress } from '../hooks/useScrollProgress'
import { ArrowRight } from './Icons'

const PERSONAS = [
  { key: 'Performance Marketers', tint: 'bg-green-600',
    headline: 'Scale personalization without slowing revenue',
    person: '/assets/performance-person.webp', field: 'bg-green-600',
    grid: 'rgba(32,122,0,.55)' },
  { key: 'PR & Comms Marketer', tint: 'bg-blue-400',
    headline: 'Move at the speed of the news cycle',
    person: '/assets/digital-person.webp', field: 'bg-blue-400',
    grid: 'rgba(0,67,211,.45)' },
  { key: 'Product Marketers', tint: 'bg-yellow-600',
    headline: 'Launch in more markets, in less time',
    person: '/assets/product-person.webp', field: 'bg-yellow-600',
    grid: 'rgba(166,159,0,.5)' },
  { key: 'Brand Marketers', tint: 'bg-pink-600',
    headline: 'Keep every asset unmistakably on brand',
    person: '/assets/brand-person.webp', field: 'bg-pink-600',
    grid: 'rgba(90,0,60,.35)' },
  { key: 'Content Marketers', tint: 'bg-flame-500',
    headline: 'Go from brief to published, faster',
    person: '/assets/content-person.webp', field: 'bg-flame-500',
    grid: 'rgba(128,26,16,.4)' },
  { key: 'Field Marketers', tint: 'bg-violet-600',
    headline: 'Localize campaigns for every region',
    person: '/assets/field-marketer.webp', field: 'bg-violet-600',
    grid: 'rgba(27,14,60,.4)' },
]

/* Floating persona pills that ring the collage.

   MEASURED from the live site's `.solutions_visuals_cursor` elements (is-1 … is-6)
   inside `.solutions_visuals_wrap` (901 x 473 at 1440px). Each live cursor node
   contains exactly ONE <img> — the *-cursor.webp file is the complete pill
   (avatar + label + arrow already baked into the artwork). There is no separate
   avatar image or text node on the original.

   left/top are % of the wrap; w is the rendered width as % of the wrap width.
   `from` is the px offset each pill flies in from — the original scrubs these
   toward 0 with ScrollTrigger while holding the resting scale below. */
const PILLS = [
  // is-1 Product      live: 235x64 @ (-180.3, 0.0)     scale 1.0
  { label: 'Product Marketer',    img: '/assets/product-cursor.webp',     left: -20.01, top:   0.00, w: 26.08, rest: 1,   from: [-160, -70] },
  // is-2 Content      live: 176x48 @ ( -86.2, 418.6)   scale 0.8
  { label: 'Content Marketer',    img: '/assets/content-cursor.webp',     left:  -9.57, top:  88.50, w: 19.53, rest: 0.8, from: [-180,  60] },
  // is-3 Brand        live: 170x48 @ ( 890.8, -17.6)   scale 0.8
  { label: 'Brand Marketer',      img: '/assets/brand-cursor.webp',       left:  98.87, top:  -3.72, w: 18.87, rest: 0.8, from: [ 170, -80] },
  // is-4 PR & Comms   live: 214x48 @ ( 787.2, 404.5)   scale 0.8
  { label: 'PR & Comms Marketer', img: '/assets/pr-coms-cursor.webp',     left:  87.37, top:  85.52, w: 23.75, rest: 0.8, from: [ 185,  70] },
  // is-5 Performance  live: 265x60 @ ( 495.7, 483.5)   scale 1.0
  { label: 'Performance Marketer',img: '/assets/performance-cursor.webp', left:  55.02, top: 102.22, w: 29.41, rest: 1,   from: [ 130, 120] },
  // is-6 Field        live: 176x48 @ ( 112.1, 513.3)   scale 0.8
  { label: 'Field Marketer',      img: '/assets/field-cursor.webp',       left:  12.44, top: 108.52, w: 19.53, rest: 0.8, from: [-120, 110] },
]

export default function Solutions() {
  const ref = useReveal()
  const [collageRef, progress] = useScrollProgress()
  const [active, setActive] = useState(0)
  // cubic ease-out so pills settle instead of arriving linearly
  const settle = 1 - Math.pow(1 - progress, 3)
  const current = PERSONAS[active]

  return (
    <section ref={ref} className="bg-surface pb-section-main overflow-hidden">
      <div className="u-container text-center">
        <h2 className="reveal eyebrow text-text-main text-ink/70">Solutions for every marketer</h2>

        <h3 className="reveal mt-6 mx-auto max-w-[20ch] font-serif text-ink tracking-tightest
                       text-[clamp(2.25rem,5.6vw,5rem)] leading-1"
            style={{ '--reveal-delay': '80ms' }}>
          Marketing runs on content. Jasper automates how it’s made.
        </h3>

        <p className="reveal mt-6 mx-auto max-w-[56ch] text-text-main text-ink/90 text-pretty"
           style={{ '--reveal-delay': '140ms' }}>
          From SEO to personalization, localization to campaign creation, Jasper provides the
          building blocks for every marketer to create, automate, and scale with confidence.
        </p>

        {/* Persona tab rail */}
        <div className="reveal mt-10 flex justify-center" style={{ '--reveal-delay': '200ms' }}>
          <div className="no-scrollbar flex gap-2 overflow-x-auto max-w-full px-1 pb-1">
            {PERSONAS.map((p, i) => (
              <button
                key={p.key}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`shrink-0 px-3 py-2 text-text-small md:text-text-main rounded-DEFAULT
                            transition-colors duration-300 ease-jasper ${
                  active === i ? `${p.tint} text-ink` : 'bg-surface-2 text-ink hover:bg-dark-200'
                }`}
              >
                {p.key}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Collage */}
      <div className="reveal u-container mt-12 md:mt-16" style={{ '--reveal-delay': '260ms' }}>
        <div ref={collageRef} className="relative mx-auto max-w-[62rem]" style={{ minHeight: 'clamp(24rem,42vw,34rem)' }}>

          {/* headline card */}
          <div className={`relative z-10 mx-auto max-w-[34rem] ${current.field} transition-colors duration-700 ease-jasper px-6 py-6 text-center`}>
            <p className="font-sans text-ink text-[clamp(1.05rem,1.7vw,1.25rem)] leading-1.2 max-w-[26ch] mx-auto">
              {current.headline}
            </p>
            <a href="#" className="link-arrow mt-4 font-mono text-text-small text-ink">
              Solutions for {current.key}
              <ArrowRight />
            </a>
          </div>

          {/* stepped colour field + portrait */}
          <div className="relative -mt-2 h-[clamp(16rem,28vw,22rem)]">
            <div className={`absolute inset-x-[12%] bottom-0 h-[86%] ${current.field}
                             transition-colors duration-700 ease-jasper bg-grid`}
                 style={{ '--grid-color': current.grid, '--grid-size': '34px' }} />
            <div className={`absolute left-[6%] bottom-0 w-[16%] h-[62%] ${current.field}
                             transition-colors duration-700 ease-jasper`} />
            <div className={`absolute right-[6%] bottom-0 w-[18%] h-[70%] ${current.field}
                             transition-colors duration-700 ease-jasper`} />

            {PERSONAS.map((p, i) => (
              <img
                key={p.key}
                src={p.person}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain
                            transition-all duration-700 ease-jasper ${
                  active === i ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              />
            ))}
          </div>

          {/* floating persona pills — ONE <img> each, matching the live
              `.solutions_visuals_cursor` nodes (the webp is the whole pill) */}
          {PILLS.map((pill) => (
            <img
              key={pill.label}
              src={pill.img}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute hidden md:block h-auto max-w-none z-20 pointer-events-none"
              style={{
                left: `${pill.left}%`,
                top: `${pill.top}%`,
                width: `${pill.w}%`,
                translate: `${pill.from[0] * (1 - settle)}px ${pill.from[1] * (1 - settle)}px`,
                scale: pill.rest * (0.8 + 0.2 * settle),
                opacity: Math.min(1, settle * 1.6),
                willChange: 'translate, scale',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
