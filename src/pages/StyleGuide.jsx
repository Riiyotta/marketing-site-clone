import HorizontalVis from '../components/blocks/HorizontalVis'
import HeroVertical from '../components/blocks/HeroVertical'
import LayoutCards from '../components/blocks/LayoutCards'
import PageCta from '../components/PageCta'

/* ---------------------------------------------------------------------------
   /style-guide — live page height 6488px (footer 1175 of that).

   Live block order and measured heights (.scrape/plat-style-guide.json,
   .scrape/txt-style-guide.json, .scrape/bg-style-guide.json):
     746  horizontal_vis_wrap  hero, flame-400 ground, art right
     440  hero_vertical_wrap   centred 80px statement, white
     739  horizontal_vis_wrap  art LEFT  / copy right
     739  horizontal_vis_wrap  copy LEFT / art right
     760  horizontal_vis_wrap  art LEFT  / copy right
     963  layout_cards_wrap    split header + 3 tinted cards
     925  cta_main_wrap        (PageCta)

   Every string below is verbatim from the capture.
--------------------------------------------------------------------------- */

/* `.layout_cards_wrap` card grounds, measured: pink-300 solid, then green-300
   and violet-400 each at 40% alpha (Webflow paints the -200 swatch over
   white). Tailwind's /40 modifier reproduces the alpha exactly. */
const CARDS = [
  { title: 'Agents', tint: 'bg-pink-300',
    body: 'Jasper Agents understand your marketing needs, adapt to your working model, and execute fast.',
    link: { label: 'Explore Agents', href: '/agents' },
    img: { src: '/assets/agents.png', w: 443, h: 249, alt: '' } },
  { title: 'Canvas', tint: 'bg-green-300/40',
    body: 'The modern, digital workspace where marketers can plan, create, and collaborate – intuitively and at scale.',
    link: { label: 'Explore Canvas', href: '/canvas' },
    img: { src: '/assets/canvas.png', w: 443, h: 249, alt: '' } },
  { title: 'Audiences', tint: 'bg-violet-400/40',
    body: 'Tailor every message to the right audience—without losing your voice.',
    link: { label: 'Explore Audiences', href: '/marketing-iq' },
    img: { src: '/assets/audiences.png', w: 443, h: 249, alt: '' } },
]

export default function StyleGuide() {
  return (
    <>
      {/* hero — flame-400 full-bleed, h1 Feature 54/56.7 at a 660px measure */}
      <HorizontalVis
        bg="bg-flame-400"
        eyebrow="Style Guide"
        eyebrowChip="bg-flame-300"
        title="Focus on your content, not the rules of punctuation"
        titleTag="h1"
        titleSize="54"
        body="Jasper’s Style Guide enables teams to uplevel and expedite content creation by automating guidelines and letting them focus on substance instead of style."
        ctas={[
          { label: 'Start A Free Trial', variant: 'btn-secondary' },
          { label: 'Get a Demo', variant: 'btn-primary' },
        ]}
        img={{ src: '/assets/style-guide-hero.svg', w: 660, h: 494,
               alt: 'Style Guide Rules panel listing automated punctuation and grammar settings' }}
        spaceTop={140}
        spaceBottom={112}
      />

      {/* centred statement, white ground — h2 Feature 80/80, 1022px measure */}
      <HeroVertical
        eyebrow="Style Guide Overview"
        title="Creating differentiated content doesn’t start with oxford commas"
        titleSize="display"
        titleWidth={1022}
        spaceTop={82}
        spaceBottom={64}
      />

      {/* three feature rows, white ground, art alternating left/right.
          Live heads are h2 Feature 38/38 with a 514px body measure; the art
          runs 660x659..680 so it is TALLER than the copy column. */}
      <HorizontalVis
        flip
        title="On-brand across all of your brands"
        body="Manage multiple brand style guidelines and easily apply them to different projects in Jasper to keep all content consistent, even at high volume."
        img={{ src: '/assets/brand-iq.png', w: 660, h: 659,
               alt: 'Brand style guide card with a fingerprint mark and toggled rule rows' }}
        spaceTop={40}
        spaceBottom={40}
      />

      <HorizontalVis
        title="Catch style guide violations before they happen"
        body="Jasper catches, and prompts corrections for, any deviations from your style guide, even at scale. Avoid copy review cycle purgatory with new or remixed projects."
        img={{ src: '/assets/apply-style-guide.png', w: 660, h: 659,
               alt: 'Apply Style Guide panel highlighting a flagged phrase and its suggested fix' }}
        spaceTop={40}
        spaceBottom={40}
      />

      <HorizontalVis
        flip
        title="Save compliance review cycles"
        body="Streamline the approval process and reduce the risk of compliance violations by incorporating your industry's copy regulations."
        img={{ src: '/assets/check-style-guide.png', w: 660, h: 680,
               alt: 'Check Style Guide panel running an automated compliance pass over a draft' }}
        spaceTop={40}
        spaceBottom={40}
      />

      <LayoutCards
        eyebrow="Jasper Features"
        title="Go from idea to impact—faster"
        body="Jasper gives you the tools to build, scale, and optimize campaigns in one place."
        ctas={[{ label: 'Explore The Platform', variant: 'btn-secondary' }]}
        cards={CARDS}
        spaceTop={112}
        spaceBottom={112}
      />

      <PageCta />
    </>
  )
}
