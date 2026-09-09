import { useEffect, useState } from 'react'
import { useReveal } from '../hooks/useReveal'

/**
 * `.hero_platform_wrap` — the /platform hero. Unlike the other interior pages
 * (which share `hero_main_wrap` via PageHero) this one has its own block.
 *
 * Measured at 1440px on live /platform (section height 737):
 *   `.g_background` — full-bleed flame-300 (#ffe8e2) carrying a 1970x1028
 *   plus-mark SVG lattice in white at 0.75 opacity, `preserveAspectRatio:
 *   slice`. The lattice is a 20.12px pitch of small white plus marks; it is
 *   reproduced here as a repeating CSS gradient pair rather than a 400KB
 *   inline SVG, since the two render identically at this scale.
 *   `.hero_platform_contain_new` — 1360px u-container, centred, with a 180px
 *   g_section_space above and below `.hero_platform_new` (1016 x 377).
 *   Inside: eyebrow (mono 16/16) mb 24px; the headline; then the button group
 *   (48px tall, 16px 20px padding — outline ink, then filled flame-600).
 *
 * Headline: live renders the sentence twice. A `.u-hidden-headline` holds the
 * full h1 for assistive tech and search; a visible `aria-hidden`
 * `.jasper-headline` (Feature 80/80, ls -2.4px) shows three lines where the
 * middle line cycles one word through a solid highlight chip. The chip's
 * ground/text pair changes with the word — measured live: "agents" on
 * green-600 in green-700, "knowledge" on blue-600 in blue-300. The cycle is
 * driven by GSAP on the original; here it is a plain interval, which reads the
 * same at rest and keeps the same DOM shape.
 */
const CYCLE = [
  { word: 'agents',    chip: 'bg-green-600 text-green-700' },
  { word: 'rules',     chip: 'bg-flame-600 text-flame-300' },
  { word: 'knowledge', chip: 'bg-blue-600 text-blue-300' },
  { word: 'workflows', chip: 'bg-violet-600 text-violet-400' },
]

const TITLE =
  'Jasper connects your marketing team, brand, content, workflows, agents, ' +
  'knowledge, context, and rules – all in one, intelligent workspace.'

export default function PlatformHero() {
  const ref = useReveal({ threshold: 0.05 })
  const [i, setI] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setI(n => (n + 1) % CYCLE.length), 2600)
    return () => clearInterval(t)
  }, [])

  const active = CYCLE[i]

  return (
    <section ref={ref} className="clip-bleed relative bg-flame-300">
      {/* .g_background lattice — white plus marks at 0.75 opacity */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-plus opacity-75"
           style={{ '--plus-color': '#ffffff', '--plus-size': '20.12px' }} />

      <div className="u-container relative flex flex-col items-center
                      py-[clamp(4rem,12.5vw,11.25rem)]">
        <p className="reveal eyebrow text-text-main text-ink">The Jasper Platform</p>

        {/* .u-hidden-headline — the full sentence, for AT and the crawler */}
        <h1 className="sr-only">{TITLE}</h1>

        <div aria-hidden="true"
             className="reveal mt-6 max-w-[1016px] text-center font-serif text-ink
                        tracking-tightest text-[clamp(2.25rem,5.55vw,5rem)] leading-1"
             style={{ '--reveal-delay': '80ms' }}>
          <span className="block">Jasper connects your</span>
          <span className="flex flex-wrap items-center justify-center gap-x-[0.22em]">
            <span>marketing</span>
            <span className={`${active.chip} px-[0.06em] transition-colors duration-500 ease-jasper`}>
              {active.word}
            </span>
          </span>
          <span className="block">in one, intelligent workspace.</span>
        </div>

        <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-3"
             style={{ '--reveal-delay': '200ms' }}>
          <a href="#" className="btn btn-secondary">Start Free Trial</a>
          <a href="#" className="btn btn-primary">Get A Demo</a>
        </div>
      </div>
    </section>
  )
}
