import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { ArrowRight } from '../components/Icons'
import { Eyebrow, CtaRow } from '../components/blocks/primitives'
import LogoBlade from '../components/blocks/LogoBlade'
import PageCta from '../components/PageCta'

/**
 * /customer-success — rebuilt against the live page (7686px at 1440).
 *
 * Section order and heights from .scrape/plat-customer-success.json and
 * .scrape/full-customer-success.json:
 *
 *   customer_success_hero    813   80px h1 on a full-bleed flame-400 ground,
 *                                  scattered with 51px customer portraits on
 *                                  concentric white orbit rings
 *   marquee_wrap             360   "World-class marketing teams trust Jasper"
 *                                  over a 12-mark 160x66 logo row
 *   section-new             1895   "In the ever-changing world of AI, we've got
 *                                  your back": a 54px heading beside a two-
 *                                  column mosaic of four surface-2 feature
 *                                  cards, each an h3 38px + a 24px body, two of
 *                                  them carrying a 619x427 photograph
 *   g_section_space          112
 *   section-new              450   the AFRY pull-quote: a 38px h2 with its
 *                                  middle clause in a faded ink, a 104px
 *                                  portrait, name/role, and the AFRY mark
 *   g_section_space          112
 *   section-new             1028   "Tools & trainings to jumpstart your team's
 *                                  AI journey": an 80px display heading over a
 *                                  three-row selector rail beside a 1032x732
 *                                  training screenshot
 *   (bare div)               817   "More Jasper enterprise features": a 54px
 *                                  heading over three 443px cards with 443x249
 *                                  art and coral arrow links
 *   cta_main_wrap            925   the shared closing CTA, headline
 *                                  "Get started with Jasper today"
 *
 * The hero's orbit rings are decorative SVG circles; the portraits sit on them
 * at their measured angles. Each portrait is absolutely placed on a wrapper —
 * never on a `.reveal` element, whose fill:forwards animation would override
 * the placement transform.
 */

/* .marquee_wrap — the 12 customer marks, in live source order. */
const LOGOS = [
  { src: '/assets/Ulta.png', alt: 'Ulta Beauty' },
  { src: '/assets/jasp-cushman.webp', alt: 'Cushman & Wakefield' },
  { src: '/assets/jasp-morningstar.webp', alt: 'Morningstar' },
  { src: '/assets/jasp-harpercollins.webp', alt: 'HarperCollins' },
  { src: '/assets/jasp-prudential.webp', alt: 'Prudential' },
  { src: '/assets/jasp-AAA.webp', alt: 'AAA' },
  { src: '/assets/jasp-Bona.webp', alt: 'Bona' },
  { src: '/assets/jasp-hitachi.webp', alt: 'Hitachi' },
  { src: '/assets/jasp-iheartmedia.webp', alt: 'iHeartMedia' },
  { src: '/assets/jasp-kelly.webp', alt: 'Kelly' },
  { src: '/assets/jasp-sanoflif.webp', alt: 'Sanofi' },
  { src: '/assets/jasp-HH.webp', alt: 'Hilton Head' },
].map((l) => ({ ...l, w: 160, h: 66 }))

/* The hero's scattered portraits, positioned as percentages of the 1440x813
   hero box. `x`/`y` are the measured left/top from .scrape/full-customer-success
   .json converted to percentages — several sit at a NEGATIVE y (the rings run
   under the nav) and are clipped by the section, which is what live does. */
const ORBIT = [
  { src: '/assets/CS-Person-8-min.webp', x: 61.9, y: -31.4 },
  { src: '/assets/CS-Person-11-min.webp', x: 15.8, y: -46.4 },
  { src: '/assets/CS-Person-12-min.webp', x: 84.9, y: -34.7 },
  { src: '/assets/CS-Person-13-min.webp', x: 8.5, y: -28.7 },
  { src: '/assets/CS-Person-15-min.webp', x: 90.6, y: -5.4 },
  { src: '/assets/CS-Person-1-min.webp', x: 5.4, y: -18.2 },
  { src: '/assets/CS-Person-9-min.webp', x: 94.2, y: -8.2 },
  { src: '/assets/CS-Person-3-min.webp', x: 2.2, y: 13.3 },
  { src: '/assets/CS-Person-16-min.webp', x: 96.5, y: 5.9 },
  { src: '/assets/CS-Person-Real-4.png', x: 9.5, y: 39.0 },
  { src: '/assets/CS-Person-14-min.webp', x: 88.1, y: 25.6 },
  { src: '/assets/CS-Person-Real-1.png', x: 3.1, y: 24.6 },
  { src: '/assets/CS-Person-13-min.webp', x: 92.9, y: 35.9 },
  { src: '/assets/CS-Person-5-min.webp', x: 13.7, y: 41.0 },
  { src: '/assets/CS-Person-Real-3.png', x: 79.9, y: 38.9 },
  { src: '/assets/CS-Person-14-min.webp', x: 19.1, y: 54.5 },
  { src: '/assets/CS-Person-4-min.webp', x: 74.6, y: 65.5 },
  { src: '/assets/CS-Person-12-min.webp', x: 24.9, y: 57.8 },
  { src: '/assets/CS-Person-3-min.webp', x: 70.1, y: 79.3 },
  { src: '/assets/CS-Person-Real-2.png', x: 30.6, y: 90.7 },
  { src: '/assets/CS-Person-2-min.webp', x: 65.9, y: 92.7 },
  { src: '/assets/CS-Person-Real-5.png', x: 37.3, y: 99.1 },
  { src: '/assets/CS-Person-6-min.webp', x: 58.9, y: 109.9 },
  { src: '/assets/CS-Person-5-min.webp', x: 44.4, y: 103.7 },
  { src: '/assets/CS-Person-15-min.webp', x: 52.1, y: 117.7 },
  { src: '/assets/CS-Person-7-min.webp', x: 46.8, y: 137.9 },
  { src: '/assets/CS-Person-10-min.webp', x: 55.2, y: 137.6 },
  { src: '/assets/CS-Person-17-min.webp', x: 34.5, y: -12.0 },
]

/* section-new #5 — the success-team mosaic.
   MEASURED live (.scrape/deep9.mjs): it is a TWO-TRACK layout, not a 2x2 grid.
   The right track is one 712px photo column running the block's full height
   (`CS ROI Back` 712x1068 with `CS ROI Top` layered over it); the left track
   stacks the two surface-2 face cards and, between them, the second 712px
   photo (`CS Scale Back` 712x818 + `CS Scale Top`).

   The `CS Support Team 1/2/3` and `CS Success Team 1/2/3` files are each a
   619x427 transparent plate holding ONE named portrait at its own position in
   the cluster; live stacks all three of a set on top of each other to build
   the group. Drawing only plate 1 (as an earlier pass did) shows a single
   stray face where live shows three. */
const FACE_CARDS = [
  {
    title: 'Dedicated support',
    body: 'Get priority support with any issues or questions your team may have.',
    faces: [
      '/assets/CS-Support-Team-1.webp',
      '/assets/CS-Support-Team-2.webp',
      '/assets/CS-Support-Team-3.webp',
    ],
  },
  {
    title: 'Customer success',
    body: 'Meet with your success manager, who is dedicated to educating & empowering you & your team.',
    faces: [
      '/assets/CS-Success-Team-1.png',
      '/assets/CS-Success-Team-2.png',
      '/assets/CS-Success-Team-3.png',
    ],
  },
]

/* The two photo cards, each a base photograph with a layered foreground. */
const PHOTO_CARDS = [
  {
    title: 'Guided usage for faster ROI',
    body: 'Partner with a team of AI experts to improve your usage, learn how to maximize your outputs, & more.',
    back: '/assets/CS-ROI-Back-min.webp',
    top: '/assets/CS-ROI-Top.png',
  },
  {
    title: 'Custom training & enablement',
    body: "Partner with our enablement team to learn how to seamlessly integrate generative AI into your team's process – for whatever your use case may be.",
    back: '/assets/CS-Scale-Back-min.png',
    top: '/assets/CS-Scale-Top-min.png',
  },
]

/* section-new #10 — the "Custom Services" selector rail. */
const SERVICES = [
  {
    title: 'Guided training',
    body: 'Get training for any AI use case or Jasper feature (i.e. using our API, setting up spaces, using templates, etc.)',
  },
  {
    title: 'Custom solutions',
    body: 'Partner with our team to create bespoke AI solutions for any business problem or use case',
  },
  {
    title: 'AI transformation strategy',
    body: 'Engage with an experienced AI transformation strategist to develop a tailored plan for integrating AI into your marketing team’s operations',
  },
]

/* The closing "More Jasper enterprise features" cards. */
const ENTERPRISE = [
  {
    title: 'Responsible AI for Enterprise',
    body: 'All the features you need to take a secure, controlled and impactful approach to AI.',
    cta: 'Explore Enterprise',
    img: '/assets/Ethics-Hero-p-1600.png',
  },
  {
    title: 'Security & Privacy',
    body: 'Experience unparalleled safety and security with our cutting-edge AI solutions designed with your data & privacy in mind.',
    cta: 'Explore Security',
    img: '/assets/Enterprise-Security-1.svg',
  },
  {
    title: 'AI Governance',
    body: 'Better security & greater control with bespoke AI roles & permissions for every type of team member.',
    cta: 'Explore Governance',
    img: '/assets/Enterprise-Governance.svg',
  },
]

/** One surface-2 card: heading, 24px body, and the 619x427 face-cluster art. */
function FaceCard({ title, body, faces }) {
  return (
    <article className="flex flex-col bg-surface-2 p-6">
      <h3 className="font-serif text-ink tracking-tightest leading-1
                     text-[clamp(1.75rem,2.64vw,2.375rem)]">
        {title}
      </h3>
      <p className="mt-3 max-w-[46ch] font-sans text-h4 leading-[1.2] text-ink/70 text-pretty">
        {body}
      </p>
      {/* the three transparent 619x427 plates stacked into one cluster */}
      <div className="relative mt-6 aspect-[619/427] w-full">
        {faces.map((f) => (
          <img key={f} src={f} alt="" aria-hidden="true" loading="lazy"
               width={619} height={427}
               className="absolute inset-0 h-full w-full object-contain" />
        ))}
      </div>
    </article>
  )
}

/** One photo card: the copy on a surface-2 plate over a layered photograph. */
function PhotoCard({ title, body, back, top }) {
  return (
    <article className="flex flex-col">
      <div className="bg-surface-2 p-6">
        <h3 className="font-serif text-ink tracking-tightest leading-1
                       text-[clamp(1.75rem,2.64vw,2.375rem)]">
          {title}
        </h3>
        <p className="mt-3 max-w-[46ch] font-sans text-h4 leading-[1.2] text-ink/70 text-pretty">
          {body}
        </p>
      </div>

      {/* `top` is a transparent foreground plate that lines up over `back`;
          both are drawn at the same box so they register. */}
      <div className="relative">
        <img src={back} alt="" aria-hidden="true" loading="lazy"
             className="w-full object-cover" />
        <img src={top} alt="" aria-hidden="true" loading="lazy"
             className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
      </div>
    </article>
  )
}

export default function CustomerSuccess() {
  const heroRef = useReveal({ threshold: 0 })
  const teamRef = useReveal({ threshold: 0 })
  const quoteRef = useReveal({ threshold: 0 })
  const svcRef = useReveal({ threshold: 0 })
  const entRef = useReveal({ threshold: 0 })
  const [service, setService] = useState(0)

  return (
    <>
      {/* 1 — customer_success_hero, h=813 */}
      <section ref={heroRef} className="relative clip-bleed bg-flame-400">
        {/* concentric orbit rings + the scattered portraits, all decorative */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <svg viewBox="0 0 1440 813" preserveAspectRatio="xMidYMid slice"
               className="h-full w-full">
            {[210, 300, 390, 480].map((r) => (
              <ellipse key={r} cx="720" cy="406" rx={r * 1.55} ry={r}
                       fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1" />
            ))}
          </svg>

          {ORBIT.map((p, i) => (
            <span key={`${p.src}-${i}`}
                  className="absolute hidden h-[51px] w-[51px] md:block"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}>
              <img src={p.src} alt="" loading="lazy"
                   className="h-full w-full rounded-full object-cover" />
            </span>
          ))}
        </div>

        <div aria-hidden="true" className="h-[112px]" />

        <div className="relative z-10 u-container flex flex-col items-center text-center">
          <Eyebrow className="reveal mb-[38px] bg-surface px-1">Customer Success</Eyebrow>

          <h1 className="reveal max-w-[16ch] font-serif text-ink tracking-tightest leading-1
                         text-[clamp(2.5rem,5.55vw,5rem)]"
              style={{ '--reveal-delay': '60ms' }}>
            Fast-track your AI ROI with Jasper&apos;s success resources
          </h1>

          <p className="reveal mt-6 max-w-[52ch] text-[18px] leading-[21.6px] text-ink text-pretty"
             style={{ '--reveal-delay': '120ms' }}>
            This is a new era for marketing. With Jasper, you get access to a dedicated
            team of AI experts who have your back.
          </p>

          <CtaRow className="reveal mt-10 justify-center"
                  style={{ '--reveal-delay': '180ms' }}
                  ctas={[
                    { label: 'Start Free Trial', variant: 'btn-secondary' },
                    { label: 'Get A Demo', variant: 'btn-primary' },
                  ]} />
        </div>

        <div aria-hidden="true" className="h-[112px]" />
      </section>

      {/* 2 — marquee_wrap, h=360. LogoBlade's ground is blue-300 by the
          Solutions measurement; live paints this one white, so the section is
          wrapped rather than the block forked. */}
      <div className="[&>section]:bg-surface">
        <LogoBlade title="World-class marketing teams trust Jasper" logos={LOGOS} />
      </div>

      {/* 3 — section-new, h=1895 — the success-team mosaic */}
      <section ref={teamRef} className="clip-bleed bg-surface pb-[112px]">
        <div className="u-container">
          <div className="max-w-[643px]">
            <Eyebrow className="reveal">Success Teams</Eyebrow>
            <h2 className="reveal mt-4 font-serif text-ink tracking-tightest leading-[1.05]
                           text-[clamp(2.125rem,3.75vw,3.375rem)]"
                style={{ '--reveal-delay': '60ms' }}>
              In the ever-changing world of AI, we’ve got your back
            </h2>
          </div>

          {/* live runs this as two independent tracks — the left one stacks
              a face card, a photo card and a face card; the right one carries
              the tall ROI photo column beside them. Two columns of stacked
              cards reproduce it without a masonry dependency. */}
          <div className="reveal mt-14 grid items-start gap-gutter md:grid-cols-2"
               style={{ '--reveal-delay': '120ms' }}>
            <div className="flex flex-col gap-gutter">
              <FaceCard {...FACE_CARDS[0]} />
              <PhotoCard {...PHOTO_CARDS[1]} />
            </div>

            <div className="flex flex-col gap-gutter">
              <PhotoCard {...PHOTO_CARDS[0]} />
              <FaceCard {...FACE_CARDS[1]} />
            </div>
          </div>
        </div>
      </section>

      {/* 4 — section-new, h=450 — the AFRY pull-quote */}
      <section ref={quoteRef} className="clip-bleed bg-surface pb-[112px]">
        <div className="u-container">
          <div className="reveal bg-surface-2 p-10 md:p-14">
            <blockquote className="max-w-[1198px] font-serif text-ink tracking-tightest
                                   leading-[1.05] text-[clamp(1.5rem,2.64vw,2.375rem)]">
              &quot;I don&apos;t know another company who is supporting the industry like
              Jasper.{' '}
              {/* live fades this middle clause to a lighter ink */}
              <span className="text-ink/45">
                We would have never seen the ROI or gotten to the point we have without
                our CSM.
              </span>{' '}
              People deal with people, and you all are the real deal – it has made a
              massive difference for us.&quot;
            </blockquote>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img src="/assets/1516540885757.webp" alt="" aria-hidden="true"
                     width={104} height={104} loading="lazy"
                     className="h-[104px] w-[104px] rounded-full object-cover" />
                <div>
                  <p className="font-sans text-h4 leading-1.2 text-ink">James Townsend</p>
                  <p className="mt-1 font-sans text-text-small text-ink/70">
                    Digital Marketing Manager, AFRY
                  </p>
                </div>
              </div>

              <img src="/assets/Afry-Logo.svg" alt="AFRY" loading="lazy"
                   width={176} height={38} className="h-[38px] w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* 5 — section-new, h=1028 — Custom Services selector + training shot */}
      <section ref={svcRef} className="clip-bleed bg-surface pb-[112px]">
        <div className="u-container">
          <Eyebrow className="reveal">Custom Services</Eyebrow>
          <h2 className="reveal mt-4 max-w-[24ch] font-serif text-ink tracking-tightest leading-1
                         text-[clamp(2.5rem,5.55vw,5rem)]"
              style={{ '--reveal-delay': '60ms' }}>
            Tools &amp; trainings to jumpstart your team&apos;s AI journey
          </h2>

          <div className="reveal mt-14 grid gap-gutter lg:grid-cols-[minmax(0,202px)_minmax(0,1fr)]"
               style={{ '--reveal-delay': '120ms' }}>
            <div className="flex flex-col gap-4">
              {SERVICES.map((s, i) => (
                <button key={s.title} type="button"
                        onClick={() => setService(i)}
                        aria-pressed={service === i}
                        className={`p-4 text-left transition-colors duration-300 ease-jasper
                                    ${service === i ? 'bg-flame-300' : 'bg-surface-2'}`}>
                  <h3 className="font-serif text-h4 leading-1.1 tracking-tighter text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-text-small text-ink/70 text-pretty">{s.body}</p>
                </button>
              ))}
            </div>

            <img src="/assets/Guided-Training-New.webp" alt="" aria-hidden="true"
                 width={1032} height={732} loading="lazy"
                 className="aspect-[1032/732] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* 6 — the "More Jasper enterprise features" card row, h=817 */}
      <section ref={entRef} className="clip-bleed bg-surface pb-[112px]">
        <div className="u-container">
          <h2 className="reveal text-center font-serif text-ink tracking-tightest leading-[1.05]
                         text-[clamp(2.125rem,3.75vw,3.375rem)]">
            More Jasper enterprise features
          </h2>

          <div className="reveal mt-12 grid gap-gutter md:grid-cols-3"
               style={{ '--reveal-delay': '80ms' }}>
            {ENTERPRISE.map((c) => (
              <article key={c.title} className="flex flex-col bg-surface-2">
                <img src={c.img} alt="" aria-hidden="true" loading="lazy"
                     width={443} height={249}
                     className="aspect-[443/249] w-full object-cover" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-ink tracking-tighter leading-[1.1]
                                 text-[clamp(1.5rem,1.95vw,1.75rem)]">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-text-small text-ink text-pretty">{c.body}</p>
                  <a href="#"
                     className="link-arrow mt-auto self-start pt-8 font-mono
                                text-text-small text-flame-600">
                    {c.cta}<ArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — cta_main_wrap, h=925 */}
      <PageCta headline="Get started with Jasper today" />
    </>
  )
}
