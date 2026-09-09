import HorizontalVis from '../components/blocks/HorizontalVis'
import HeroVertical from '../components/blocks/HeroVertical'
import SimpleLayout from '../components/blocks/SimpleLayout'
import PageCta from '../components/PageCta'
import { useReveal } from '../hooks/useReveal'
import { Eyebrow } from '../components/blocks/primitives'

/* ---------------------------------------------------------------------------
   /brand-voice — live page height 6267px (footer 1175 of that).

   Live block order and measured heights (.scrape/plat-brand-voice.json,
   .scrape/txt-brand-voice.json, .scrape/bg-brand-voice.json):
      837  horizontal_vis_wrap  hero, flame-400 ground, art right
      304  hero_vertical_wrap   centred 54px statement, white
      737  simple_layout_wrap   two 660px tiles on surface-2
     1040  chrome_hero          blue-300 band, centred header, blue-400 panel
                                holding a 1320x710 dashboard shot
      448  hero_vertical_wrap   centred 80px statement + one outline button
      802  simple_layout_wrap   two tiles with coral "Learn More" links
      925  cta_main_wrap        (PageCta)
--------------------------------------------------------------------------- */

/* `.chrome_hero` — the one block on this page with no shared equivalent, so it
   stays page-local. MEASURED at 1440px (section h=1040, y 1878..2918):
     ground   blue-300 (rgb 206,235,255) full-bleed
     82px     to the mono eyebrow "Edit Brand Voice", centred
     38px     to h2 Feature 54/56.7 ink, centred, 1131px wide
     ~40px    to a 16/22.4 body, centred, 990px wide
     72px     to a 1360x750 blue-400 (rgb 129,203,255) panel at x=40 holding
              the 1320x710 product shot inset 20px on every side.
   The live panel is a Rive/product embed frame; the still is the correct
   substitute per the iframe policy. */
function ChromeHero() {
  const ref = useReveal({ threshold: 0 })
  return (
    <section ref={ref} className="relative clip-bleed bg-blue-300">
      <div aria-hidden="true" className="h-[82px]" />

      <div className="u-container flex flex-col items-center text-center">
        <Eyebrow className="reveal">Edit Brand Voice</Eyebrow>

        <h2 className="reveal mt-[26px] max-w-[1131px] font-serif text-ink tracking-tightest
                       text-[clamp(2.125rem,3.75vw,3.375rem)] leading-[1.05]"
            style={{ '--reveal-delay': '80ms' }}>
          Empower brand teams with intuitive voice tuning
        </h2>

        <p className="reveal mt-6 max-w-[1120px] text-text-main text-ink text-pretty"
           style={{ '--reveal-delay': '140ms' }}>
          Easily engage with and fine-tune brand settings like voice, tone, style, and visual
          guidelines, so that every output looks and sounds like you.
        </p>
      </div>

      {/* the blue-400 frame + the 1320x710 dashboard still */}
      <div className="u-container mt-[50px]">
        <div className="reveal bg-blue-400 p-5" style={{ '--reveal-delay': '180ms' }}>
          <img src="/assets/brand-voice-dash-2.png" width={1320} height={710} loading="lazy"
               alt="Brand Voice Preview window comparing two sample blog posts, one written with the brand voice applied and one without"
               className="h-auto w-full object-contain" />
        </div>
      </div>

      <div aria-hidden="true" className="h-[40px]" />
    </section>
  )
}

/* `.simple_layout_wrap` #1 — two 660x440 SVGs on surface-2 tiles.
   No CTA link on live's first grid; the sr-only "Learn More" spans in the
   capture belong to the tile's own wrapping anchor, which paints nothing. */
const GRID_1 = [
  { title: 'On brand, across all your outputs & channels',
    body: 'Automate brand voice management even as you scale content across brands, audiences, geographies, and languages.',
    img: { src: '/assets/on-brand-across-channels.svg', w: 660, h: 440,
           alt: 'Brand voice settings applied consistently across email, social, and ad formats' } },
  { title: 'Reduce review cycles and get to market faster',
    body: 'Prevent brand voice violations before they happen and get to the final draft faster. Jasper flags instances where the tone is off-brand and provides recommended adjustments.',
    img: { src: '/assets/style-guide.svg', w: 660, h: 440,
           alt: 'Style guide panel flagging an off-brand sentence with a suggested rewrite' } },
]

/* `.simple_layout_wrap` #2 — the "explore more Brand IQ" pair, with the coral
   mono "Learn More" links live actually paints (btn_link_text, flame-600). */
const GRID_2 = [
  { title: 'Visual Guidelines',
    body: 'Automate brand voice management even as you scale content across brands, audiences, geographies, and languages.',
    link: { label: 'Learn More', href: '/visual-guidelines' },
    img: { src: '/assets/toolkit-visual-guidelines.avif', w: 660, h: 440,
           alt: 'Visual Guidelines toolkit card' } },
  { title: 'Style Guide',
    body: 'Prevent brand voice violations before they happen and get to the final draft faster. Jasper flags instances where the tone is off-brand and provides recommended adjustments.',
    link: { label: 'Learn More', href: '/style-guide' },
    img: { src: '/assets/toolkit-style-guide.avif', w: 660, h: 440,
           alt: 'Style Guide toolkit card' } },
]

export default function BrandVoice() {
  return (
    <>
      <HorizontalVis
        bg="bg-flame-400"
        eyebrow="Brand Voice"
        title="AI that sounds like you"
        titleTag="h1"
        titleSize="display"
        body="Unlock the power of AI at scale by ensuring every output reflects your unique brand voice"
        bodyWidth={411}
        ctas={[
          { label: 'Start a Free Trial', variant: 'btn-secondary' },
          { label: 'Get a Demo', variant: 'btn-primary' },
        ]}
        img={{ src: '/assets/brandvoice-hero.svg', w: 660, h: 545,
               alt: 'Brand voice tuning panel with tone sliders and sample copy' }}
        spaceTop={180}
        spaceBottom={112}
      />

      <HeroVertical
        eyebrow="Overview"
        title="Achieve the authenticity required to scale AI across every marketing interaction"
        titleSize="54"
        titleWidth={690}
        spaceTop={82}
        spaceBottom={0}
      />

      <SimpleLayout items={GRID_1} cols={2} mediaH={440} spaceTop={40} spaceBottom={112} />

      <ChromeHero />

      <HeroVertical
        eyebrow="Brand IQ"
        title="The first and only AI product that gives marketers complete brand control"
        titleSize="display"
        titleWidth={1022}
        ctas={[{ label: 'Explore Brand IQ', variant: 'btn-secondary', href: '/brand-iq' }]}
        spaceTop={82}
        spaceBottom={0}
      />

      <SimpleLayout items={GRID_2} cols={2} mediaH={440} spaceTop={40} spaceBottom={112} />

      <PageCta />
    </>
  )
}
