import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { ArrowRight } from './Icons'

const ITEMS = [
  {
    title: 'Get cited by AI, the new front door of search',
    isNew: true,
    body: 'From first draft to final in record time. Jasper reduces friction across the entire workflow, enabling faster creation, quicker reviews, and more campaigns out the door.',
    cta: 'Explore GEO & AI Optimization',
    img: '/assets/GEO-AGENT-HOME.avif',
  },
  {
    title: 'Scale campaigns and performance',
    body: 'Launch more campaigns across more channels without adding headcount. Agents handle the repeatable work so your team can focus on strategy.',
    cta: 'Explore Campaign Scaling',
    img: '/assets/Home-CS-Plain.avif',
  },
  {
    title: 'Keep your brand voice consistent, everywhere',
    body: 'Jasper IQ encodes your brand knowledge, voice, and guidelines so every output sounds like you—across every market and channel.',
    cta: 'Explore Brand Voice',
    img: '/assets/Home-BV-Plain.avif',
  },
  {
    title: 'Empower every marketer with automation',
    body: 'Purpose-built agents put advanced automation in the hands of every marketer, no technical expertise required.',
    cta: 'Explore Agents',
    img: '/assets/Home-Agents-Plain.avif',
  },
  {
    title: 'Built for scale, backed by experts',
    body: 'Enterprise-grade infrastructure and a dedicated team of AI strategists to help you deploy with confidence.',
    cta: 'Explore Enterprise',
    img: '/assets/Grid-Illo.avif',
  },
]

export default function Tabs() {
  const ref = useReveal()
  const [active, setActive] = useState(0)

  // NB: no overflow-hidden on the <section> below — any non-visible overflow on
  // an ancestor disables position:sticky on the visual panel.
  return (
    <section ref={ref} className="bg-surface py-[180px]">
      <div className="u-container">
        {/* measured: tabs_layout = 2 x 640px with an 80px gap */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-tabs lg:items-stretch">

          {/* Left — heading + accordion */}
          <div>
            <h2 className="reveal font-serif text-ink tracking-tightest max-w-[24ch]
                           text-[clamp(2rem,4.4vw,3.375rem)] leading-1.05">
              Why modern marketing teams choose Jasper
            </h2>
            <p className="reveal mt-5 max-w-[46ch] text-text-main text-ink/90 text-pretty"
               style={{ '--reveal-delay': '80ms' }}>
              Give your team the tools to move faster, stay on brand, and scale content across
              every channel and market.
            </p>

            <div className="reveal mt-10 lg:mt-16" style={{ '--reveal-delay': '140ms' }}>
              {ITEMS.map((item, i) => {
                const open = active === i
                return (
                  <div
                    key={item.title}
                    className={`relative border-t border-ink/15 last:border-b transition-colors duration-500 ${
                      open ? 'bg-flame-200' : ''
                    }`}
                  >
                    {/* active left rule */}
                    <span
                      className={`absolute left-0 top-0 w-[3px] bg-flame-600 transition-all duration-500 ease-jasper ${
                        open ? 'h-full opacity-100' : 'h-0 opacity-0'
                      }`}
                    />
                    <button
                      onClick={() => setActive(i)}
                      aria-expanded={open}
                      className="w-full text-left flex items-start gap-2 px-4 py-5"
                    >
                      <h3 className="font-serif text-ink tracking-tighter leading-1.1
                                     text-[clamp(1.25rem,1.9vw,1.5rem)]">
                        {item.title}
                        {item.isNew && (
                          <sup className="ml-1.5 font-sans text-[10px] tracking-none text-yellow-800 align-super">
                            NEW
                          </sup>
                        )}
                      </h3>
                    </button>

                    <div
                      className="grid transition-[grid-template-rows] duration-500 ease-jasper"
                      style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 pb-6">
                          <p className="max-w-[48ch] text-text-main text-ink/90 text-pretty">
                            {item.body}
                          </p>
                          <a href="#" className="link-arrow mt-5 text-text-main">
                            {item.cta}
                            <ArrowRight />
                          </a>
                          {/* mobile inline visual */}
                          <div className="lg:hidden mt-6 bg-grid rounded-DEFAULT overflow-hidden"
                               style={{ '--grid-color': 'rgba(250,64,40,.18)', '--grid-size': '38px' }}>
                            <img src={item.img} alt="" aria-hidden="true" loading="lazy"
                                 className="w-full h-auto object-contain" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right — sticky visual panel on a coral grid */}
          <div className="reveal hidden lg:block relative bg-grid rounded-DEFAULT h-full min-h-[34rem]"
               style={{ '--grid-color': 'rgba(250,64,40,.18)', '--grid-size': '56px',
                        '--reveal-delay': '160ms' }}>
            {/* pins at 128px — the offset measured on the live site */}
            <div className="sticky p-6" style={{ top: 128 }}>
              <div className="relative w-full aspect-[4/3]">
                {ITEMS.map((item, i) => (
                  <img
                    key={item.title}
                    src={item.img}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-contain transition-all duration-700 ease-jasper ${
                      active === i
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-3 pointer-events-none'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
