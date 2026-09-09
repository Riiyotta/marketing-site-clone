import { useReveal } from '../hooks/useReveal'
import HeroScenes from './HeroScenes'
import { ArrowRight } from './Icons'

export default function Hero() {
  const ref = useReveal({ threshold: 0.05 })

  return (
    <section ref={ref} className="relative bg-surface-2 overflow-hidden">
      <div className="u-container relative z-10 pt-16 md:pt-20 pb-0 text-center">

        {/* Announcement pill */}
        <div className="reveal flex justify-center">
          <a
            href="#"
            className="group inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-surface border border-ink/10 px-2 py-2 rounded-DEFAULT"
          >
            <span className="bg-green-400 text-ink px-2 py-1 text-text-small font-mono tracking-tight">
              WEBINAR:
            </span>
            <span className="text-text-small md:text-text-main px-1">
              <strong className="font-medium">
                Jasper + BCG on Why Marketers Need Agents to Win AI Search.
              </strong>{' '}
              Join Us
            </span>
            <ArrowRight className="w-4 h-4 mr-2 text-green-700 transition-transform duration-300 ease-jasper group-hover:translate-x-1" />
          </a>
        </div>

        {/* Headline — per-line rise, mirroring the site's SplitText entrance */}
        <h1
          className="reveal mt-10 md:mt-14 font-serif text-ink mx-auto max-w-[15ch]
                     text-[clamp(2.75rem,7.2vw,5rem)] leading-[1] tracking-tightest"
        >
          Put AI agents to work for marketing
        </h1>

        <p className="reveal mt-6 md:mt-8 mx-auto max-w-[46ch] text-text-large text-ink/90 text-pretty"
           style={{ '--reveal-delay': '120ms' }}>
          Orchestrate intelligent agents to run end-to-end marketing workflows—delivering
          speed, control, and measurable impact.
        </p>

        <div className="reveal mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-3"
             style={{ '--reveal-delay': '200ms' }}>
          <a href="#" className="btn btn-secondary">Start Free Trial</a>
          <a href="#" className="btn btn-primary">Get A Demo</a>
        </div>
      </div>

      {/* Collage — pink grid field with cut-out portrait and stat callouts */}
      <div className="reveal relative mt-10 md:mt-12" style={{ '--reveal-delay': '260ms' }}>
        <HeroScenes />
      </div>
    </section>
  )
}
