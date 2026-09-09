import GridHero from '../components/blocks/GridHero'
import HorizontalContent from '../components/blocks/HorizontalContent'
import ProductSlot from '../components/blocks/ProductSlot'
import IQHub from '../components/blocks/IQHub'
import Closing from '../components/Closing'

/* ---------------------------------------------------------------------------
   /knowledge-base — live page height 8690px (footer 1175 of that).

   Live block order and measured heights (.scrape/plat-knowledge-base.json):
       80  g_section_space
      593  grid_hero_wrap            blue-600 ground, WHITE copy, 941x593 photo
      561  horizontal_content_wrap   "Accurate, Contextual Execution"
     1053  g_slot                    1564x1083 plate + 1230x811 shot
      482  horizontal_content_wrap   "Scalable Governance"
     1053  g_slot
      505  horizontal_content_wrap   "Enterprise Control & Compliance"
     1053  g_slot
     1235  hero_main_wrap            the Jasper IQ hub collage
      900  closing_photo_wrap        (shared Closing)

   The three eyebrow chips are tinted per row on live: flame-300, blue-300 and
   green-400 top to bottom.
--------------------------------------------------------------------------- */

const ROWS = [
  {
    eyebrow: 'Accurate, Contextual Execution',
    tint: 'bg-flame-300',
    title: 'Ensure every output starts with the right knowledge, automatically',
    body: 'When agents operate without structured context, quality becomes unpredictable. Jasper Knowledge Base builds accuracy into execution from the first draft—so teams move faster without sacrificing trust.',
    items: [
      { title: 'Ground every asset in approved positioning and product truth',
        body: 'Agents reference synced knowledge in real time, reducing hallucinations and outdated claims.' },
      { title: 'Improve quality from the first output',
        body: 'Start within the right boundaries—minimizing rework, revisions, and manual corrections.' },
      { title: 'Enable transparent sourcing and citations',
        body: 'Turn thousands of queries, briefs, or product rows into complete, organized assets that humans and AI alike can easily interpret.' },
    ],
    slot: {
      bg: { src: '/assets/1-BG.avif', w: 1564, h: 1083 },
      shot: { src: '/assets/1-FG.avif', w: 1230, h: 811,
              alt: 'A Blog Post brief in Jasper with Brand Voice, Audience and Style Guide selectors and an "Attach Knowledge" menu open.' },
      caption: "Give Jasper's Agents context to inform generations",
    },
  },
  {
    eyebrow: 'Scalable Governance',
    tint: 'bg-blue-300',
    title: 'Centralize control without slowing teams down',
    body: 'As agent usage grows across regions, brands, and business units, governance becomes exponentially more complex. Knowledge Base ensures consistency scales with execution.',
    items: [
      { title: 'Sync knowledge directly from Google Drive and SharePoint',
        body: 'With Jasper’s Optimization Agent, connected directly to your SEMrush data — no manual exports or audits.' },
      { title: 'Support structured and unstructured content',
        body: 'Operationalize everything from product docs to brand videos and image libraries.' },
      { title: 'Admin-owned governance with team-level flexibility',
        body: 'Central teams define guardrails, while individuals can contribute knowledge within controlled boundaries.' },
    ],
    slot: {
      bg: { src: '/assets/2-BG.png', w: 1564, h: 1083 },
      shot: { src: '/assets/2-FG.avif', w: 1230, h: 811,
              alt: 'The Jasper Knowledge Base library listing synced documents from Google Drive and SharePoint.' },
    },
  },
  {
    eyebrow: 'Enterprise Control & Compliance',
    tint: 'bg-green-400',
    title: 'Operate confidently in regulated environments',
    body: 'High-quality agent execution depends on access to the right context. Jasper Knowledge Base embeds that context directly into execution—so every agent operates with the intelligence it needs from the start.',
    items: [
      { title: 'Provide complete, approved context at runtime',
        body: 'Agents dynamically reference current product information, messaging, and brand standards while generating outputs.' },
      { title: 'Reduce quality drift across teams and regions',
        body: 'When every agent draws from the same governed knowledge foundation, consistency scales naturally.' },
      { title: 'Move faster without sacrificing standards',
        body: 'With trusted context embedded by default, teams spend less time correcting outputs and more time driving impact.' },
    ],
    slot: {
      bg: { src: '/assets/3-BG.png', w: 1564, h: 1083 },
      shot: { src: '/assets/3-FG.avif', w: 1230, h: 811,
              alt: 'Jasper permission settings governing which teams can add to and read from the Knowledge Base.' },
    },
  },
]

export default function KnowledgeBase() {
  return (
    <>
      {/* live opens with an 80px g_section_space above the hero band */}
      <div aria-hidden="true" className="h-[80px] bg-surface" />

      <GridHero
        bg="bg-blue-600"
        tone="white"
        height={593}
        eyebrow="Marketing IQ"
        eyebrowChip="bg-white/20"
        title="Knowledge that powers every agent"
        body="Jasper Knowledge Base syncs your approved messaging, product information, and documentation in real time—so every agent executes with accurate, governed context from the start."
        ctas={[
          { label: 'Start Free Trial', variant: 'btn-inverse' },
          { label: 'Get a Demo', variant: 'btn-primary' },
        ]}
        photo={{ src: '/assets/KB-Hero.avif',
                 alt: 'Two colleagues at a table, one showing a phone screen while the other holds a pencil over documents and coloured pencils.' }}
      />

      {ROWS.map((r, i) => (
        <div key={r.eyebrow}>
          <HorizontalContent
            eyebrow={r.eyebrow} tint={r.tint} title={r.title} body={r.body} items={r.items}
            spaceTop={i === 0 ? 112 : 80} spaceBottom={0}
          />
          <ProductSlot {...r.slot} />
        </div>
      ))}

      <IQHub />

      <Closing photo="/assets/Closing_photo_1.avif" />
    </>
  )
}
