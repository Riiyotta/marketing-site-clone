import { useRef, useState, useEffect, useCallback } from 'react'

/**
 * "From system to impact" — `.slider_main_wrap`.
 *
 * Measured at 1440px on live /platform (section height 808, ground #fff):
 *   112px g_section_space above.
 *   header: eyebrow chip "Customer Stories" on green-400 (mono 16/16, 2px
 *   pad); h2 Feature 54/56.7 ls -1.62px max 20ch, 16px below the chip;
 *   a 411px 16/22.4 paragraph (max 40ch) mb 24px; then a bottom row with the
 *   filled ink 48px "Explore Customer Stories" button on the left and two
 *   24px prev/next arrows (24px gap) pinned right.
 *   .slider_main_list — 16px gutter, cards 368x344 (u-card-has-max), the
 *   rail 16px (u-mt-3) below the header row. 14 case-study cards.
 *   Each card: a 274px green-300 body with 24px padding holding a 32px logo
 *   row (logo left, mono "Read Story" arrow link right), an 8px-margin
 *   ink/20 rule (12px margins), then a 16/22.4 ink/60 summary; below it a
 *   70px stats strip
 *   on green-500 with a green-600 number cell (Feature 38/38 ls -0.76px)
 *   and a 14/16.8 detail in a 16px-padded cell.
 */
/* Card summaries and stat details are the live CMS copy, verbatim. */
const CARDS = [
  { name: 'BMC Software', logo: '/assets/cs-bmc.png', num: '2',
    det: 'Restructured content for a two-audience world — readable by people and crawlable by AI models',
    body: "With Jasper as the platform where its tone, voice, audiences, and knowledge live in one place, BMC's marketing team is rebuilding content for a world where buyers start their research inside AI — keeping it on-brand, differentiated, and model-agnostic at scale." },
  { name: 'EmeraldX', logo: '/assets/cs-emeraldx.png', num: '=',
    det: 'Established brand- and style-guide governance through Audiences and Brand Voice',
    body: 'With Jasper, EmeraldX codifies its most experienced marketers\u2019 judgment into agents, then uses those agents to govern its brand voice across a portfolio of trade shows and media brands to stay visible in AI search.' },
  { name: 'Bonterra', logo: '/assets/cs-bonterra.png', num: '83%', det: 'time savings',
    body: 'With Jasper, Bonterra\u2019s customer marketing team automated high-volume review responses, standardized its brand voice, and reclaimed hours of time every week—freeing the team to focus on the high-touch advocacy work that actually moves the needle.' },
  { name: 'iHeartMedia', logo: '/assets/cs-iheart.svg', num: '1 day',
    det: 'vs. weeks for development of a multi-platform campaign',
    body: 'As the exclusive launch partner for Cardiac Cowboys, Jasper and iHeartMedia delivered the first AI-powered campaign under iHeart\u2019s \u201CGuaranteed Human\u201D promise. Using Jasper\u2019s platform, they scaled assets across broadcast, podcast, social, and live events—driving the year\u2019s most successful binge-drop podcast launch.' },
  { name: 'Trusted Media Brands', logo: '/assets/cs-tmb.png', num: '37.5%',
    det: 'increase in RFP responses YoY',
    body: 'With Jasper, the TMB marketing team aimed to sustain scale while partnering closely with the sales organization to deepen connections with both audiences and advertisers, and to lay the foundation for its future state.' },
  { name: 'Old Dominion Freight Line', logo: '/assets/cs-olddominion.png', num: '↑',
    det: 'increase in high-quality content creation',
    body: 'How one of the largest LTL carriers in the US scaled content creation, boosted SEO performance, and built customer trust with Jasper.' },
  { name: 'Webster First Federal Credit Union', logo: '/assets/cs-websterfirst.svg', num: '9x',
    det: 'growth in organic traffic',
    body: 'Discover how Webster First Federal Credit Union used Jasper to power 9x traffic growth and build a high-impact content marketing engine.' },
  { name: 'Savista', logo: '/assets/cs-savista.png', num: '3', det: 'weeks to launch new campaigns',
    body: 'See how Savista used Jasper to scale content creation, amplify executive voice, and build a high-performing content engine that positions them as an industry thought leader.' },
  { name: 'WalkMe', logo: '/assets/cs-walkme.svg', num: '3,000+',
    det: 'hours saved in content creation time',
    body: 'WalkMe faced the desire to scale content creation and maintain brand consistency. Jasper empowered WalkMe to enhance their content creation process and spark ideation.' },
  { name: 'VertoDigital', logo: '/assets/cs-vertodigital.png', num: '50%',
    det: 'faster time-to-market',
    body: 'VertoDigital successfully overcame AI adoption hurdles, using Jasper to accelerate client growth and improve their content marketing strategy.' },
  { name: 'Mongoose Media', logo: '/assets/cs-mongoose.png', num: '166%',
    det: 'increase in organic traffic',
    body: 'Over six months, Mongoose Media, an Orlando-based digital marketing agency, wrote 40+ blog posts for a client\u2019s site, something that CEO Lauren Petrullo says wouldn\u2019t have been possible without Jasper.' },
  { name: 'MERGE', logo: '/assets/cs-merge.jpeg', num: '50%',
    det: 'more time reinvested in research & ideation',
    body: 'MERGE proved AI frees time for strategic thinking, working smarter and faster to drive better client results.' },
  { name: 'Cushman & Wakefield', logo: '/assets/cs-cushman.png', num: '10,000+',
    det: 'hours saved annually',
    body: 'Cushman & Wakefield saves thousands of content hours a year, letting the team focus on strategy and results.' },
  { name: 'Akbank', logo: '/assets/cs-akbank.svg', num: '40%',
    det: 'reduction of time spent creating content',
    body: 'Akbank used generative AI to transform its marketing strategy, holding consistency, engagement, and efficiency.' },
]

const Arrow = ({ dir }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"
       className={dir === 'prev' ? 'rotate-180' : ''}>
    <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6"
          strokeLinecap="square" />
  </svg>
)

export default function PlatformStories() {
  const rail = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const sync = useCallback(() => {
    const el = rail.current
    if (!el) return
    setAtStart(el.scrollLeft <= 2)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2)
  }, [])

  useEffect(() => { sync() }, [sync])

  /* measured: cards are 368px on a 16px gutter, so one page steps by 384px */
  const step = (dir) => {
    const el = rail.current
    if (!el) return
    el.scrollBy({ left: dir * 384, behavior: 'smooth' })
  }

  return (
    <section className="clip-bleed bg-surface pt-[112px]">
      <div className="u-container flex min-w-0 flex-col gap-gutter">
        <div>
          <p className="reveal eyebrow inline-block bg-green-400 px-[2px] py-[2px] leading-none">
            Customer Stories
          </p>
          <h2 className="reveal mt-4 max-w-[20ch] font-serif text-ink tracking-tightest
                         text-[clamp(2rem,3.75vw,3.375rem)] leading-1.05"
              style={{ '--reveal-delay': '80ms' }}>
            From system to impact
          </h2>
        </div>

        <div>
          <p className="reveal max-w-[40ch] text-text-main text-ink text-pretty"
             style={{ '--reveal-delay': '120ms' }}>
            When agents, pipelines, and governance work together, teams can execute real
            marketing programs at scale.
          </p>
          <div className="reveal mt-6 flex flex-wrap items-end justify-between gap-gutter"
               style={{ '--reveal-delay': '180ms' }}>
            <a href="#" className="btn btn-tertiary">Explore Customer Stories</a>
            <div className="flex items-center gap-6 text-ink">
              <button type="button" aria-label="Previous stories" onClick={() => step(-1)}
                      disabled={atStart}
                      className="transition-opacity duration-300 ease-jasper disabled:opacity-30">
                <Arrow dir="prev" />
              </button>
              <button type="button" aria-label="Next stories" onClick={() => step(1)}
                      disabled={atEnd}
                      className="transition-opacity duration-300 ease-jasper disabled:opacity-30">
                <Arrow dir="next" />
              </button>
            </div>
          </div>
        </div>

        {/* measured: 368px cards on a 16px gutter */}
        <div ref={rail} onScroll={sync}
             className="no-scrollbar mt-4 flex w-full min-w-0 max-w-full snap-x
                        snap-mandatory gap-gutter overflow-x-auto pb-2">
          {CARDS.map((c) => (
            <article key={c.name}
                     className="flex w-[300px] shrink-0 snap-start flex-col sm:w-[368px]">
              {/* .u-hidden-headline — live carries the customer name as a real
                  heading behind the logo lockup, for AT and for search. */}
              <h3 className="sr-only">{c.name}</h3>
              <div className="flex min-h-[274px] flex-1 flex-col bg-green-300 p-6">
                <div className="flex items-center justify-between gap-4">
                  <img src={c.logo} alt={c.name} loading="lazy"
                       className="h-8 max-w-[8rem] object-contain" />
                  <a href="#" className="link-arrow shrink-0 font-mono text-text-main text-ink">
                    Read Story
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M4.96 9.84834L3.968 8.84034L7.184 5.70434H0V4.31234H7.152L3.952 1.17634L4.96 0.152344L9.84 5.01634L4.96 9.84834Z"
                            fill="currentColor" />
                    </svg>
                  </a>
                </div>
                <hr className="my-3 border-0 border-t border-ink/20" />
                <p className="text-text-main text-ink/60 text-pretty">{c.body}</p>
              </div>
              <div className="flex items-stretch bg-green-500">
                <div className="flex min-w-[51px] items-center justify-center bg-green-600 p-4">
                  <h2 className="whitespace-nowrap font-serif text-ink
                                 text-[38px] leading-1 tracking-tightest">
                    {c.num}
                  </h2>
                </div>
                <div className="flex flex-1 items-center px-4 py-3">
                  <p className="text-text-small text-ink text-pretty">{c.det}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
