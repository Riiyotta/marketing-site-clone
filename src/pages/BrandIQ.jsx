import SplitHero from '../components/blocks/SplitHero'
import HeroVertical from '../components/blocks/HeroVertical'
import SimpleLayout from '../components/blocks/SimpleLayout'
import HorizontalVis from '../components/blocks/HorizontalVis'
import Closing from '../components/Closing'

/* ---------------------------------------------------------------------------
   /brand-iq — live page height 6764px (footer 1175 of that).

   Live block order and measured heights (.scrape/plat-brand-iq.json,
   .scrape/txt-brand-iq.json, .scrape/bg-brand-iq.json):
      940  split_hero_wrap      flame-400 + Grid BG, two clipped 350x720 panels
      279  simple_layout_wrap   surface-2 band, centred 54px statement
      638  simple_layout_wrap   surface-2 band, 3 flame-300 cards
      420  simple_layout_wrap   white, centred 80px statement
      766  horizontal_vis_wrap  Brand Voice   — copy left, visual right
      766  horizontal_vis_wrap  Visual Guidelines
      766  horizontal_vis_wrap  Style Guide
      112  simple_layout_wrap   (bare spacer)
      900  closing_photo_wrap   the photo CTA (shared `Closing`)

   NOTE on the three horizontal_vis visuals: live renders each as a 648x654
   Rive canvas (`.g_visual_wrap`), not an <img>, so there is no CDN asset to
   fetch. Per the third-party-embed policy these are the nearest still — the
   live canvas frames cropped straight out of .scrape/plat-brand-iq.png at the
   measured 648x654 box.

   NOTE on the three horizontal_vis headings: live has NO h2 in these rows.
   The 54px Feature text is a <p> under a mono eyebrow (`titleAsPara`), which
   is why the harness reports no heading for them.
--------------------------------------------------------------------------- */

/* `.simple_layout_wrap` 3-up — measured 443px tracks on flame-300, 32px pad,
   heading FIRST at the card top and a 354x190 illustration below the copy. */
const CARDS = [
  { title: 'Control all outputs, across all formats',
    body: 'Configure and optimize multimodal brand settings so every output adheres to your guidelines, even across mediums, brands, and regions.',
    img: { src: '/assets/brand-iq-1.png', w: 354, h: 190,
           alt: 'Illustration of multiple content formats governed by one set of brand settings' } },
  { title: 'Delight in an experience built for marketers',
    body: 'Easily set up and fine-tune your brand voice, tone, style, and visual guidelines with elegant and intuitive tools designed to fit the way marketers work.',
    img: { src: '/assets/brand-iq-2.png', w: 354, h: 190,
           alt: 'Illustration of tone and style controls being adjusted on a canvas' } },
  { title: 'Launch beautiful campaigns, faster',
    body: 'Jasper flags brand violations and suggests on-brand replacements, significantly reducing time spent on brand compliance reviews, getting approved assets to market faster.',
    img: { src: '/assets/brand-iq-3.png', w: 354, h: 190,
           alt: 'Illustration of a brand book with compliance toggles beside it' } },
]

export default function BrandIQ() {
  return (
    <>
      <SplitHero
        bg="bg-flame-400"
        gridBg="/assets/grid-bg.avif"
        eyebrow="Brand IQ"
        title="AI, but make it on-brand"
        body="Easily engage with and fine-tune brand settings like voice, tone, style, and visual guidelines, so that every output looks and sounds like you."
        ctas={[
          { label: 'Start Free Trial', variant: 'btn-secondary' },
          { label: 'Get A Demo', variant: 'btn-primary' },
        ]}
        left={{ src: '/assets/brand-iq-left.png', w: 350, h: 720,
                alt: 'Brand Guidelines window showing approved and flagged illustrations' }}
        right={{ src: '/assets/brand-iq-right.avif', w: 350, h: 720,
                 alt: 'Brand Voice editor showing a saved voice description and excerpts' }}
        height={940}
      />

      <HeroVertical
        bg="bg-surface-2"
        title="The first and only AI product that gives marketers complete brand control"
        titleSize="54"
        titleWidth={690}
        spaceTop={112}
        spaceBottom={0}
      />

      <SimpleLayout
        items={CARDS}
        cols={3}
        order="copy-first"
        tint="bg-flame-300"
        mediaH={190}
        cardH={574}
        bg="bg-surface-2"
        spaceTop={32}
        spaceBottom={32}
      />

      <HeroVertical
        title="Think like a marketer, act like a brand guardian"
        titleSize="display"
        titleWidth={1022}
        spaceTop={112}
        spaceBottom={148}
      />

      <HorizontalVis
        eyebrow="Brand Voice"
        titleAsPara
        titleSize="54"
        title="Capture the heart of how your brand sounds across every channel. Jasper adapts tone and messaging so you can stay consistent at scale."
        copyWidth={648}
        ctas={[{ label: 'Explore Brand Voice', variant: 'btn-secondary', href: '/brand-voice' }]}
        img={{ src: '/assets/brand-iq-vis-voice.jpg', w: 648, h: 654,
               alt: 'Brand voice tuner moving a phrase between playful and serious' }}
        spaceTop={0}
        spaceBottom={112}
      />

      <HorizontalVis
        eyebrow="Visual Guidelines"
        eyebrowTag="h3"
        titleAsPara
        titleSize="54"
        title="​​Build visual cohesion across channels. Jasper respects your color palettes, image styles, and layout rules—automatically."
        copyWidth={648}
        ctas={[{ label: 'Explore Visual Guidelines', variant: 'btn-secondary', href: '/visual-guidelines' }]}
        img={{ src: '/assets/brand-iq-vis-visual.jpg', w: 648, h: 654,
               alt: 'Product photograph being checked against the brand colour palette' }}
        spaceTop={0}
        spaceBottom={112}
      />

      <HorizontalVis
        eyebrow="Style Guide"
        eyebrowTag="h3"
        titleAsPara
        titleSize="54"
        title="Uplevel and expedite content creation by automating grammar and style guidelines, allowing you to focus on substance instead."
        copyWidth={648}
        ctas={[{ label: 'Explore Style Guide', variant: 'btn-secondary', href: '/style-guide' }]}
        img={{ src: '/assets/brand-iq-vis-style.jpg', w: 648, h: 654,
               alt: 'Apply Style Guide control rewriting a headline in place' }}
        spaceTop={0}
        spaceBottom={112}
      />

      {/* live emits a bare 112px `.simple_layout_wrap` between the last
          horizontal_vis row and the closing photo CTA */}
      <div aria-hidden="true" className="h-[112px] bg-surface" />

      <Closing />
    </>
  )
}
