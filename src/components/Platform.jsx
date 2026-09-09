import { useReveal } from '../hooks/useReveal'
import { ArrowRight } from './Icons'

const CARDS = [
  {
    title: 'Agents',
    body: 'Purpose-built AI agents that execute real marketing work.',
    tint: 'bg-green-300', hoverTint: 'hover:bg-green-500', grid: 'rgba(32,122,0,.30)', spark: '#207a00',
    img: '/assets/Home-Agents-Plain.avif',
  },
  {
    title: 'Content Pipelines',
    body: 'Structured, end-to-end workflows that turn plans into live marketing.',
    tint: 'bg-flame-300', hoverTint: 'hover:bg-flame-400', grid: 'rgba(250,64,40,.28)', spark: '#fa4028',
    img: '/assets/Home-CS-Plain.avif',
  },
  {
    title: 'Jasper IQ',
    body: 'Drive quality & authenticity with a rich brand knowledge hub.',
    tint: 'bg-blue-300', hoverTint: 'hover:bg-blue-400', grid: 'rgba(0,67,211,.26)', spark: '#0043d3',
    img: '/assets/Home-BV-Plain.avif',
  },
]

export default function Platform() {
  const ref = useReveal()

  return (
    <section ref={ref} className="bg-surface pb-section-main">
      <div className="u-container text-center">
        <p className="reveal eyebrow inline-block bg-flame-300 px-2 py-1 text-text-small">
          The Jasper Platform
        </p>

        <h2 className="reveal mt-6 mx-auto max-w-[22ch] font-serif text-ink tracking-tightest
                       text-[clamp(2rem,4.4vw,3.375rem)] leading-1.05"
            style={{ '--reveal-delay': '80ms' }}>
          The execution platform for intelligent marketing
        </h2>

        <p className="reveal mt-6 mx-auto max-w-[68ch] text-text-main text-ink/90 text-pretty"
           style={{ '--reveal-delay': '140ms' }}>
          Jasper is the agent workspace built for modern marketing teams. With 100+ specialized
          AI agents and connected content pipelines—structured, end-to-end workflows that turn
          plans into live marketing—Jasper transforms strategy into execution, reducing
          operational complexity, strengthening brand control, and driving measurable growth
          across every channel and market.
        </p>

        <div className="reveal mt-8" style={{ '--reveal-delay': '200ms' }}>
          <a href="#" className="btn btn-tertiary">Explore The Platform</a>
        </div>
      </div>

      <div className="u-container mt-14 md:mt-20">
        {/* measured: 12-col, 16px gutter, each card spans 4 (442.67px) */}
        <div className="grid gap-gutter md:grid-cols-12">
          {CARDS.map((card, i) => (
            <article
              key={card.title}
              className={`reveal group ${card.tint} ${card.hoverTint} md:col-span-4 flex flex-col
                          overflow-hidden rounded-DEFAULT transition-colors duration-500 ease-jasper`}
              style={{ '--reveal-delay': `${i * 110}ms` }}
            >
              <h3 className="font-serif text-ink tracking-tighter px-6 pt-6 pb-5
                             text-[clamp(1.6rem,2.6vw,2.375rem)] leading-1">
                {card.title}
              </h3>

              {/* The original animates each of these with a Rive embed; the
                  motion is reproduced with CSS (see index.css). */}
              <div className="relative mx-0 aspect-[4/3] overflow-hidden">
                <div className="card-visual-grid absolute inset-0 bg-grid"
                     style={{ '--grid-color': card.grid, '--grid-size': '22px' }} />
                <img
                  src={card.img}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="card-visual absolute inset-0 h-full w-full object-contain p-6"
                />
                {/* drifting accent marks, staggered */}
                <span className="card-spark absolute left-[12%] top-[18%] h-2 w-2 rounded-full"
                      style={{ background: card.spark }} />
                <span className="card-spark absolute right-[16%] top-[30%] h-1.5 w-1.5 rounded-full"
                      style={{ background: card.spark }} />
                <span className="card-spark absolute left-[26%] bottom-[16%] h-1.5 w-1.5 rounded-full"
                      style={{ background: card.spark }} />
              </div>

              <div className="flex items-end justify-between gap-4 px-6 py-6 mt-auto">
                <p className="text-text-main text-ink max-w-[28ch]">{card.body}</p>
                <span className="shrink-0 text-ink transition-transform duration-300 ease-jasper group-hover:translate-x-1">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
