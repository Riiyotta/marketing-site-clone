import HorizontalVis from '../components/blocks/HorizontalVis'
import PeopleRail from '../components/blocks/PeopleRail'
import PhotoMarquee from '../components/blocks/PhotoMarquee'
import { Eyebrow, ArrowLink } from '../components/blocks/primitives'
import { useReveal } from '../hooks/useReveal'

/**
 * /careers — "Grow your career while shaping the future of marketing".
 *
 * Measured live at 1440px (.scrape/plat-careers.json + .scrape/plat-careers.png):
 *   g_section_space              80
 *   horizontal_breakout_wrap   1000  yellow-200 copy on the left, two vertical
 *                                    portrait columns bleeding off the right
 *   slider_main_wrap            892  "Rewrite the rules of marketing" quotes
 *   horizontal_vis_wrap         815  "Jasper's remote-first commitment" on a
 *                                    flame-300 ground, the regions art right
 *   careers-photo-marquee-…     704  two rows of 500x320 photos, opposed drift
 *   horizontal_vis_wrap         595  "Help transform the impossible…"
 *   layout_cards_wrap           864  "The perks of joining Jasper" — a 3-col
 *                                    grid where the header occupies cell 1 and
 *                                    five flame-tinted cards fill the rest
 *   slider_main_wrap            900  leadership rail on surface-2
 *   derisk_wrap                 512  "Come build your future with us" on the
 *                                    blue-200 graph-paper ground
 *
 * The page does NOT close with PageCta or Closing — the derisk band is the
 * last section before the footer, which matches /company's shape.
 *
 * NOTE on the perks grid: live alternates two flame steps across the five
 * cards (flame-300 / flame-400) rather than tinting them all the same, so the
 * tint is carried per card.
 */

/* horizontal_breakout_wrap — two vertical portrait columns. Each column has
   its own flat ground behind the circular cutouts, sampled off live: the left
   column blue-600 with blue-500 discs, the right flame-600 with flame-500. */
const HERO_COL_A = [
  { src: '/assets/Careers-Hero---1.avif' },
  { src: '/assets/Careers-Hero---2.avif' },
  { src: '/assets/Careers-Hero---3.avif' },
]
const HERO_COL_B = [
  { src: '/assets/Careers-Hero---4.avif' },
  { src: '/assets/Careers-Hero---5.avif' },
  { src: '/assets/Careers-Hero---6.avif' },
]

/* slider_main_wrap — the four employee quotes, full text pulled from the live
   richtext (the coarse capture truncated them at 120 chars). */
const QUOTES = [
  { quote: 'At Jasper, working in an AI-first engineering environment has transformed how we approach product development by leveraging LLMs and tools for rapid prototyping and iteration. This iterative mindset ensures our engineering team consistently delivers value in a fast-paced market.',
    name: 'Guhan V', role: 'Director of Engineer, Platform',
    img: '/assets/Guhan.png',
    alt: 'Smiling man with dark hair and beard wearing a black t-shirt in front of a brick wall.' },
  { quote: '"Being at the forefront of AI is inspiring. Each day brings new chances to learn and grow as we tackle uncharted challenges. Our success hinges on collaboration and support. It’s amazing to see the team come together, innovate, and create solutions that shape the future."',
    name: 'Jessica K', role: 'Senior Product Marketing Manager',
    img: '/assets/Jessica_headshots-finals-17-20-1-.jpeg',
    alt: 'Smiling woman wearing a pink sweater sitting with her hands clasped.' },
  { quote: '"At VMware, Jasper inspired our Marketing AI Council and global AI adoption. Early on, I felt their team had my back, and now, being part of Jasper, I see firsthand their unmatched AI expertise and passion. This new era of marketing is exciting, and partnering with clients on their AI journeys is a rewarding experience."',
    name: 'Jessica H', role: 'Director, AI Transformation Office',
    img: '/assets/Jessica-20Hreha-1.jpeg',
    alt: 'Smiling woman with straight brown hair in a black top.' },
  { quote: '"I built my marketing career in lifecycle, email, product marketing, and automation. Joining Jasper allowed me to explore how AI transforms marketing and become an early adopter. Since then, I’ve grown significantly, using AI to accelerate work and achieve scale that once seemed out of reach."',
    name: 'Chris K', role: 'Lifecycle Marketing Manager',
    img: '/assets/ckaundart_headshot.jpeg',
    alt: 'Smiling man with beard wearing a blue plaid shirt outdoors.' },
]

/* careers-photo-marquee-wrapper — twelve 500x320 photos, split across two
   rows that drift in opposite directions. */
const MARQUEE_ROW_A = [
  { src: '/assets/universal_upscale_0_de96b175-dd06-49eb-bc34-76c56db3bec3_0.avif', alt: "Jasper's Women in Tech employee resource group" },
  { src: '/assets/DSC_9060-min.avif', alt: "Jasper employees in the opening seminar at the annual offsite" },
  { src: '/assets/Screenshot-2024-12-18-at-3.52.44-PM-min.avif', alt: 'Jasper employees at a team offsite at an amusement park' },
  { src: '/assets/McLendon-Photography-D2-0317-min.avif', alt: 'Jasper employee in deep thought at the annual offsite' },
  { src: '/assets/Screenshot-2024-12-18-at-3.55.13-PM-min.avif', alt: 'Jasper employee leading a seminar at the annual Hackathon' },
  { src: '/assets/DSC_9217-min.avif', alt: "Chief Product Officer, Bryan Tsao at Jasper's annual offsite" },
]
const MARQUEE_ROW_B = [
  { src: '/assets/DSC_8885-min.avif', alt: 'Jasper employees leading the welcome ceremony at the annual offsite' },
  { src: '/assets/IMG_2471.avif', alt: 'Jasper employees in the wild' },
  { src: '/assets/screenshot_2024-12-18_at_3.26.47___pm_720.avif', alt: 'Jasper employees at Elevate 2024' },
  { src: '/assets/Screenshot-2024-12-18-at-3.52.06-PM-min.avif', alt: 'Jasper employees at the annual Sales Kick-off' },
  { src: '/assets/IMG_2445-3--min.avif', alt: 'Jasper employees at a team outing in Los Angeles' },
  { src: '/assets/D1_DSC_8400.avif', alt: 'Melody Meckfessel (Chief Technology Officer) with the team' },
]

/* layout_cards_wrap — the five perks. */
const PERKS = [
  { title: 'FlexWellness', tint: 'bg-flame-300',
    body: "Everyone's wellness journey is unique, and there's no one-size-fits-all solution. Our annual FlexWellness wallet lets you decide what is best for your health.",
    icon: '/assets/Careers---Flexwellness.avif',
    alt: 'Heart icon with a heartbeat line on a coral background.' },
  { title: 'FlexExperience', tint: 'bg-flame-400',
    body: 'We offer flexible PTO and FlexExperience funds to help you step away, recharge and make the most of your time away from work.',
    icon: '/assets/Careers---FlexExperience.avif',
    alt: 'Simple line drawing of a beach scene with a sun, a palm tree and waves.' },
  { title: '401(k) program', tint: 'bg-flame-300',
    body: 'With tax advantages and a 2% employer match, our 401(k) program is a smart way to grow your retirement savings and prepare for your future.',
    icon: '/assets/Careers---401k.avif',
    alt: 'Illustration of two stacks of coins with dollar signs.' },
  { title: 'Family planning', tint: 'bg-flame-400',
    body: 'From leave concierge, 16 weeks fully paid leave, and return-to-work benefits, we support families through the transition to parenthood. We also have an unlimited insurance rider for those with a diagnosis of infertility.',
    icon: '/assets/Careers---FamilyPlanning.avif',
    alt: 'Icon of three stylized figures representing a family.' },
  { title: 'Continuous growth', tint: 'bg-flame-300',
    body: 'We provide a generous learning stipend for individuals to craft their own development journey. You can use this benefit to enroll in a course, attend an industry conference, or earn a certification to advance your skills.',
    icon: '/assets/Careers---Growth.avif',
    alt: 'Outline of a human head with a plant featuring three leaves growing from it.' },
]

/* slider_main_wrap — the leadership rail. Same four people as /company, but
   this page frames them on surface-2 with the yellow chip pairing. */
const LEADERSHIP = [
  { name: 'Timothy Young', role: 'Chief Executive Officer', img: '/assets/Timothy-Young.png',
    alt: 'Man with red hair, beard, and tortoiseshell glasses wearing a black sweatshirt.' },
  { name: 'Tom Newton', role: 'Chief Marketing Officer, Jasper', img: '/assets/TomHeadshot-45.jpg',
    alt: 'Man with short brown hair, beard, and round glasses in a light shirt.' },
  { name: 'Christian Freitas', role: 'SVP of Revenue', img: '/assets/Christian-Freitas.png',
    alt: 'Smiling bald man with light skin wearing a light gray polo shirt.' },
  { name: 'Carlos Diaz', role: 'VP, People and Talent', img: '/assets/Carlos-Diaz.png',
    alt: 'Smiling man with short dark hair and beard wearing a green collared shirt.' },
]

export default function Careers() {
  const heroRef = useReveal({ threshold: 0 })
  const perksRef = useReveal({ threshold: 0 })
  const endRef = useReveal({ threshold: 0 })

  return (
    <>
      <div aria-hidden="true" className="h-[80px] bg-surface" />

      {/* horizontal_breakout_wrap — 1000px: yellow-200 copy | portrait columns */}
      <section ref={heroRef} className="clip-bleed relative bg-yellow-200"
               style={{ minHeight: 1000 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,690px)]">
          <div className="flex flex-col justify-center px-6 py-[80px]
                          lg:pl-[max(40px,calc((100vw-1360px)/2))] lg:pr-10">
            <div className="max-w-[520px]">
              <Eyebrow className="reveal mb-6 inline-block bg-yellow-600 px-2 py-[2px]">
                Careers
              </Eyebrow>

              <h1 className="reveal font-serif text-ink tracking-tightest
                             text-[clamp(2.5rem,5.55vw,5rem)] leading-1"
                  style={{ '--reveal-delay': '80ms' }}>
                Grow your career while shaping the future of marketing
              </h1>

              <p className="reveal mt-6 max-w-[380px] text-text-main text-ink text-pretty"
                 style={{ '--reveal-delay': '140ms' }}>
                Unlock new skills, drive innovation, and carve a career path that is
                uniquely yours.
              </p>

              <a href="#" className="reveal btn btn-primary mt-8 self-start"
                 style={{ '--reveal-delay': '200ms' }}>
                Explore Open Roles
              </a>
            </div>
          </div>

          {/* the two drifting portrait columns, clipped by the section */}
          <PhotoMarquee
            variant="columns" height={1000} duration="34s" tileW={356} tileH={356}
            columns={[
              { tint: 'bg-blue-600', dir: 'up', items: HERO_COL_A },
              { tint: 'bg-flame-600', dir: 'down', items: HERO_COL_B },
            ]}
          />
        </div>
      </section>

      {/* slider_main_wrap — 892px employee quotes */}
      <PeopleRail
        variant="quotes"
        eyebrow="Why Jasper?"
        title={<>Rewrite the rules<br />of marketing</>}
        titleSize="display"
        body="We are working together to transform the future of marketing. Join a community where every member has the opportunity for immediate impact. Our Jasper team is always experimenting with new ways of getting work done. Hear more from them directly:"
        items={QUOTES}
        spaceTop={112} spaceBottom={112}
      />

      {/* horizontal_vis_wrap — 815px remote-first band on flame-300 */}
      <HorizontalVis
        title="Jasper’s remote-first commitment" titleSize="display"
        body="Jasper’s remote-first culture allows our team to work where they want to live, not the other way around. With team members across the United States, France and Australia, flexibility isn't just a tagline -- it's the critical ingredient to getting work done."
        img={{ src: '/assets/Careers-Regions.avif', w: 660, h: 591,
               alt: 'Colorful blocks with country names USA, Australia and France set at angles.' }}
        bg="bg-flame-300" spaceTop={112} spaceBottom={80}
      >
        <div className="mt-10">
          <h3 className="reveal font-serif text-ink tracking-tightest
                         text-[clamp(1.5rem,1.95vw,1.75rem)] leading-[1.1]"
              style={{ '--reveal-delay': '160ms' }}>
            #togethertime
          </h3>
          <p className="reveal mt-3 max-w-[46ch] text-text-main text-ink text-pretty"
             style={{ '--reveal-delay': '190ms' }}>
            Though we work remotely, we gather our global team with intention. Throughout the
            year, we come together (in real life) to celebrate wins, align on strategy, and
            build genuine connections.
          </p>
        </div>
      </HorizontalVis>

      {/* careers-photo-marquee-wrapper — 704px, two opposed rows */}
      <PhotoMarquee rows={[MARQUEE_ROW_A, MARQUEE_ROW_B]} duration="70s" />

      {/* horizontal_vis_wrap — 595px AI-first culture */}
      <HorizontalVis
        eyebrow="Jasper's AI-first culture"
        title="Help transform the impossible into the imaginable" titleSize="54"
        body="At Jasper, you’ll be part of an AI-first culture where experimentation drives innovation. We embrace AI to solve problems and shape the future. Here, you’ll work with cutting-edge tools to redefine what’s possible."
        img={{ src: '/assets/Hackathon.jpg', w: 660, h: 371,
               alt: 'Large group of people seated in a hall listening to four speakers on stage.' }}
        spaceTop={112} spaceBottom={112}
      />

      {/* layout_cards_wrap — 864px perks grid, header in cell 1 */}
      <section ref={perksRef} className="clip-bleed bg-surface pb-[112px]">
        <div className="u-container grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-center p-2">
            <h2 className="reveal max-w-[12ch] font-serif text-ink tracking-tightest
                           text-[clamp(2.125rem,3.75vw,3.375rem)] leading-[1.05]">
              The perks of joining Jasper
            </h2>
            <p className="reveal mt-4 max-w-[36ch] text-text-small text-ink text-pretty"
               style={{ '--reveal-delay': '100ms' }}>
              You understand best how you work. We aim for our programs to adapt to your
              lifestyle, not the reverse. Our perks and benefits are crafted to directly
              support what matters most to you.
            </p>
          </div>

          {PERKS.map((p, i) => (
            <article key={p.title} className={`reveal flex flex-col ${p.tint} p-6`}
                     style={{ '--reveal-delay': `${(i % 3) * 80}ms` }}>
              <img src={p.icon} alt={p.alt} width={80} height={80} loading="lazy"
                   className="h-20 w-20 object-contain" />
              <h3 className="mt-5 font-serif text-ink tracking-tighter
                             text-[clamp(1.5rem,1.95vw,1.75rem)] leading-[1.1]">
                {p.title}
              </h3>
              <p className="mt-3 text-text-small text-ink text-pretty">{p.body}</p>
              {/* live closes every perk card with a coral mono "Learn More" */}
              <ArrowLink label="Learn More" className="mt-auto pt-6 self-start" />
            </article>
          ))}
        </div>
      </section>

      {/* slider_main_wrap — 900px leadership rail on surface-2 */}
      <PeopleRail
        variant="people"
        eyebrow="Our Leadership Team"
        title="Leading the way to marketing excellence"
        body="Our leadership team has decades of experience scaling innovative companies. These seasoned leaders bring diverse expertise in building category-defining products and high-performing global teams."
        items={LEADERSHIP}
        bg="bg-surface-2" spaceTop={80} spaceBottom={80}
      />

      {/* derisk_wrap — 512px closing band on the blue-200 graph-paper ground */}
      <section ref={endRef} className="relative clip-bleed bg-blue-200 py-[120px]">
        <div aria-hidden="true" className="absolute inset-0 bg-grid"
             style={{ '--grid-color': 'rgba(255,255,255,.7)', '--grid-size': '40px' }} />
        <div className="relative z-10 u-container flex flex-col items-center text-center">
          <h2 className="reveal max-w-[13ch] font-serif text-ink tracking-tightest
                         text-[clamp(2.5rem,5.55vw,5rem)] leading-1">
            Come build your future with us
          </h2>
          <a href="#" className="reveal btn btn-primary mt-8" style={{ '--reveal-delay': '120ms' }}>
            Explore Open Roles
          </a>
        </div>
      </section>
    </>
  )
}
