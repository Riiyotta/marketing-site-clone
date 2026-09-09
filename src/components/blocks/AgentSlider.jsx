import Carousel from '../Carousel'
import { useReveal } from '../../hooks/useReveal'
import { Eyebrow, ArrowLink } from './primitives'

/* ---------------------------------------------------------------------------
   `.slider_main_wrap` — "Agents for every marketer, across every function".
   The third section on all six Solutions > By Role pages, and IDENTICAL on
   every one of them: same heading, same lede, same 12 cards, same order. It
   is the only section of the role template that carries no per-page content,
   so its copy lives in the block rather than in solutionsPages.js.

   MEASURED at 1440px on live /solutions/by-role/brand-marketers
   (.scrape/slider.json, .scrape/slider2.json — section 660-710px tall,
   transparent ground i.e. the page's white surface):

     header, in the 1360px well, split across two columns:
       LEFT   eyebrow mono 16/16 ink on a yellow-500 chip ("Marketing Agents
              Library"), then h3 Feature 54/56.7 ink over two lines
       RIGHT  ABC ROM 16/22.4 lede, then a 48px ink-filled "Explore Agents"
              button; the prev/next arrow pair sits flush right of it
     rail     334 x 221 cards on a 16px gutter — 4 visible, the rest scrolled.
              Card skin measured: ground rgb(249,249,249) = dark-50 with a 1px
              rgb(242,242,243) = surface-2 border, 24px pad.
                icon    a 16px glyph in a 32px blue-300 tile, top-LEFT
                badge   "Popular" — mono 14px ink on blue-300, top-RIGHT.
                        Live's DOM carries Business/New/Popular on every card
                        but paints only one; the painted pixels in
                        .scrape/plat-solutions-by-role-brand-marketers.png are
                        "Popular" throughout, which is what renders here.
                title   Feature 24/26.4 ink
                desc    ABC ROM 12/16.8 in dark-800 (rgb 81,80,82)
                link    "Learn More →" in green-800 (rgb 16,58,0) at the foot

   The `.reveal` class is on the RAIL CONTAINER, never on the cards — a card
   scrolled out of the horizontal viewport never intersects and would stay
   permanently invisible.

   PROPS  none — the section is byte-identical across all six role pages.
--------------------------------------------------------------------------- */

/* Captured verbatim from the live slider (.scrape/slider2.json). */
const CARDS = [
  { title: 'Blog Post', icon: '/assets/pen-tool.svg',
    desc: 'Write long-form content that provides value, drives traffic, and enhances SEO' },
  { title: 'Social Media Campaign', icon: '/assets/message-heart.svg',
    desc: 'Amplify your brand and engage followers with a cohesive social media campaign' },
  { title: 'Landing Page', icon: '/assets/globe-03.svg',
    desc: 'Transform site traffic into valuable leads through engaging landing pages' },
  { title: 'LinkedIn Post', icon: '/assets/briefcase-01.svg',
    desc: 'Enhance professional engagement on LinkedIn by sharing insights, news and more' },
  { title: 'Multi-channel Campaign', icon: '/assets/layout-grid-02.svg',
    desc: 'Reach and resonate with audiences through an integrated marketing approach' },
  { title: 'Ad Campaign', icon: '/assets/announcement-01.svg',
    desc: 'Target audiences on Meta, Google and more with cohesive digital ads' },
  { title: 'Content Calendar', icon: '/assets/calendar-date.svg',
    desc: 'Plan topics, publishing dates, and channels efficiently with a content calendar' },
  { title: 'Social Media Ad', icon: '/assets/thumbs-up.svg',
    desc: 'Boost engagement and conversions with impactful Facebook and Instagram ad copy' },
  { title: 'Video Ad', icon: '/assets/tv-02.svg',
    desc: 'Craft narratives for promotional videos to captivate audiences and drive conversions' },
  { title: 'User Guide/Manual', icon: '/assets/book-open.svg',
    desc: 'Develop comprehensive guides to help customers fully utilize and enjoy your product' },
  { title: 'Print Ad', icon: '/assets/printer.svg',
    desc: 'Capture attention with ads tailored for newspapers and other print media' },
  { title: 'LinkedIn Ad', icon: '/assets/briefcase-01.svg',
    desc: 'Target professionals at every funnel stage with LinkedIn Sponsored Content' },
]

export default function AgentSlider() {
  const ref = useReveal({ threshold: 0 })

  return (
    <section ref={ref} className="relative clip-bleed bg-surface">
      <div aria-hidden="true" className="h-[80px]" />

      <div className="u-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="max-w-[672px]">
            <Eyebrow className="reveal inline-block bg-yellow-500 px-[6px] py-[2px] leading-none">
              Marketing Agents Library
            </Eyebrow>
            <h3 className="reveal mt-5 font-serif text-ink tracking-tightest leading-[1.05]
                           text-[clamp(2.125rem,3.75vw,3.375rem)]"
                style={{ '--reveal-delay': '80ms' }}>
              Agents for every marketer, across every function
            </h3>
          </div>

          <div className="flex max-w-[420px] flex-col items-start">
            <p className="reveal text-text-main text-ink text-pretty"
               style={{ '--reveal-delay': '140ms' }}>
              Explore how marketing leaders and their teams use Jasper Agents to
              generate incredible value.
            </p>
            <a href="/agents" className="reveal btn btn-tertiary mt-6"
               style={{ '--reveal-delay': '200ms' }}>
              Explore Agents
            </a>
          </div>
        </div>

        {/* the rail carries the reveal — cards scrolled off-screen never
            intersect and would otherwise stay at opacity 0 forever. */}
        <div className="reveal mt-10" style={{ '--reveal-delay': '240ms' }}>
          <Carousel label="Marketing Agents Library">
            {CARDS.map((c) => (
              <article key={c.title}
                       className="flex w-[334px] shrink-0 flex-col border border-surface-2
                                  bg-dark-50 p-6 [scroll-snap-align:start] lg:min-h-[221px]">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-8 w-8 place-items-center bg-blue-300">
                    <img src={c.icon} alt="" width={16} height={16} className="h-4 w-4" />
                  </span>
                  <span className="eyebrow bg-blue-300 px-2 py-[2px] text-text-small leading-none text-ink">
                    Popular
                  </span>
                </div>

                <h4 className="mt-5 font-serif text-h4 text-ink tracking-tighter leading-[1.1]">
                  {c.title}
                </h4>
                <p className="mt-2 text-text-tiny leading-[1.4] text-dark-800 text-pretty">
                  {c.desc}
                </p>

                <ArrowLink label="Learn More" href="/agents"
                           className="mt-auto pt-6 self-start !text-[16px] !leading-[22px] !text-green-800" />
              </article>
            ))}
          </Carousel>
        </div>
      </div>

      <div aria-hidden="true" className="h-[80px]" />
    </section>
  )
}
