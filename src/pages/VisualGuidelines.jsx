import HorizontalVis from '../components/blocks/HorizontalVis'
import HeroVertical from '../components/blocks/HeroVertical'
import SimpleLayout from '../components/blocks/SimpleLayout'
import PageCta from '../components/PageCta'

/* ---------------------------------------------------------------------------
   /visual-guidelines — live page height 6158px (footer 1175 of that).

   Live block order and measured heights (.scrape/plat-visual-guidelines.json,
   .scrape/txt-visual-guidelines.json, .scrape/bg-visual-guidelines.json):
      825  horizontal_vis_wrap  hero, flame-300 ground, art right
      304  hero_vertical_wrap   centred 54px statement, white
      737  simple_layout_wrap   two 660x440 tiles on surface-2
     1276  hero_vertical_wrap   flame-300 ground, centred 80px header + body,
                                then a 1360x769 flame-400 slab holding the
                                1280x689 dashboard shot inset 40px
      206  hero_vertical_wrap   compact 54px header + one outline button
      712  simple_layout_wrap   two 660x371 tiles with coral "Explore" links
      925  cta_main_wrap        (PageCta)
--------------------------------------------------------------------------- */

const GRID_1 = [
  { title: 'Scale visual brand compliance',
    body: 'Ensure all images are consistently on-brand, even across brands and at scale. Jasper ingests your brand book, flags violations, and recommends modifications.',
    img: { src: '/assets/visual-guidelines.svg', w: 660, h: 440,
           alt: 'Visual guideline check flagging an off-brand image and proposing a compliant replacement' } },
  { title: 'Launch campaigns faster',
    body: 'Eliminate design bottlenecks and accelerate time to market by ensuring that content is high-quality and on-brand.',
    img: { src: '/assets/launch-campaigns-faster.svg', w: 660, h: 440,
           alt: 'Campaign assets moving through an automated brand review' } },
]

const GRID_2 = [
  { title: 'Brand Voice',
    body: 'Configure Jasper so that each output adheres to your brand’s unique voice, tone, and style.',
    link: { label: 'Explore Brand Voice', href: '/brand-voice' },
    img: { src: '/assets/brand-voice-dash-2.png', w: 660, h: 371,
           alt: 'Brand Voice preview comparing copy with and without the brand voice applied' } },
  { title: 'Style Guide',
    body: 'Set rules and formatting for your organization’s term usage, grammar and punctuation.',
    link: { label: 'Explore Style Guide', href: '/style-guide' },
    img: { src: '/assets/style-guide.svg', w: 660, h: 371,
           alt: 'Style guide rules panel with grammar and punctuation toggles' } },
]

/* The no-code section's media slab. MEASURED: a 1360x769 flame-400 ground at
   x=40 carrying the 1280x689 product still inset 40px on every side. Live
   layers two decorative SVGs (bg_flame_circles / bg_sticky_lines) at the same
   1360x769 box behind it; the circles read as the flame ground plus the
   half-circles that peek out on the left edge, reproduced with the asset. */
const NoCodeMedia = (
  <div className="relative bg-flame-400 p-10">
    <img src="/assets/bg-flame-circles.svg" alt="" aria-hidden="true"
         className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
    <img src="/assets/visual-guideline-dash.png" width={1280} height={689} loading="lazy"
         alt="Visual Guidelines workspace with an Add a Visual Guideline dialog open"
         className="relative h-auto w-full object-contain" />
  </div>
)

export default function VisualGuidelines() {
  return (
    <>
      <HorizontalVis
        bg="bg-flame-300"
        eyebrow="Visual Guidelines"
        title="Visual branding, automated"
        titleTag="h1"
        titleSize="display"
        body="Spend less time on brand compliance and more time on brand strategy."
        ctas={[
          { label: 'Start Free Trial', variant: 'btn-secondary' },
          { label: 'Get a Demo', variant: 'btn-primary' },
        ]}
        img={{ src: '/assets/visual-guidelines-hero.png', w: 660, h: 645,
               alt: 'Brand guideline cards showing approved and rejected campaign images' }}
        spaceTop={140}
        spaceBottom={40}
      />

      <HeroVertical
        eyebrow="Overview"
        title="The only AI platform that can catch brand image violations and proactively recommend ways to fix them."
        titleSize="54"
        titleWidth={1035}
        spaceTop={82}
        spaceBottom={0}
      />

      <SimpleLayout items={GRID_1} cols={2} mediaH={440} spaceTop={40} spaceBottom={112} />

      <HeroVertical
        bg="bg-flame-300"
        title="Empower creative teams with no code tools"
        titleSize="display"
        titleWidth={1022}
        body="Easily set up new visual guidelines in Jasper with an intuitive interface built for creatives, not for IT."
        media={NoCodeMedia}
        spaceTop={112}
        spaceBottom={112}
      />

      <HeroVertical
        title="Explore more Brand IQ features"
        titleSize="54"
        titleWidth={690}
        ctas={[{ label: 'View All', variant: 'btn-secondary', href: '/brand-iq' }]}
        spaceTop={80}
        spaceBottom={0}
      />

      <SimpleLayout items={GRID_2} cols={2} mediaH={371} spaceTop={40} spaceBottom={112} />

      <PageCta />
    </>
  )
}
