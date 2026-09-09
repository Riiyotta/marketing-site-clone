import GridHero from '../components/blocks/GridHero'
import HorizontalContent from '../components/blocks/HorizontalContent'
import ProductSlot from '../components/blocks/ProductSlot'
import Accordion from '../components/blocks/Accordion'
import RevealSection from '../components/blocks/RevealSection'
import Closing from '../components/Closing'

/* ---------------------------------------------------------------------------
   /product-iq — live page height 11052px (footer 1175 of that).

   The stub table recorded the h1 as "%" because the only real <h1> tags on the
   page are the three "%" glyphs beside the stat numbers. The DISPLAY heading
   is "Product catalog, meet agents", which live tags as a <p> at Feature 80/80
   inside `grid_hero_wrap` — every display line on this route is a <p>.

   Live block order and measured heights (.scrape/plat-product-iq.json):
       80  g_section_space
      593  grid_hero_wrap            flame-200 ground, 600x524 product still
      913  section_product-stats     pink-800 slab + the 3-tile stat staircase
      741  layout_cards_wrap         "How It Works" — four 328x256 stage cards
      352  section_product-grid      pink-300 band, quote left + 4 metric cards
      494  horizontal_content_wrap   "Grounded"
     1165  g_slot
      472  horizontal_content_wrap   "Governed"
     1165  g_slot
      517  horizontal_content_wrap   "Scaled"
     1165  g_slot
      619  layout_cards_wrap         "Use Cases" — three highlighted cards
      700  accordion_1               FAQ
      900  closing_photo_wrap
--------------------------------------------------------------------------- */

/* `.aeo_stats_card` — three 405x250 pink-800 cards inside 405x416 wrappers,
   each offset progressively DOWN so the row reads as a descending staircase
   (measured tops: 0 / 83 / 166 within the 416px wrapper). Numerals are 104px
   Feature white; the "%" beside each is a real 28px <h1> on live. */
const STATS = [
  { n: '68', body: 'of buyers are more skeptical of vendor content when they know AI created it' },
  { n: '61', body: 'say the possibility of AI involvement makes them question its accuracy' },
  { n: '56', body: 'worry AI-generated vendor content favors persuasion over accuracy' },
]

/* `.trust_card_wrap` — four 328x256 tiles; tints and heading colours read off
   the live computed styles, the same palette the Content Pipeline stages use.
   Live tags "01. Define" as an <h3> and the other three as <p>. */
const STAGES = [
  ['01. Define', 'bg-yellow-500', 'text-olive-700', true,
   "Capture your products in a fully customizable schema, or let Jasper's agents import your catalog for you."],
  ['02. Apply', 'bg-blue-300', 'text-ink', false,
   'Every agent and workflow applies your product truth, so content is accurate and on-claim from the first draft.'],
  ['03. Govern', 'bg-green-400', 'text-green-700', false,
   'Consistency and compliance hold across every page, channel, and region as volume grows.'],
  ['04. Update', 'bg-violet-400', 'text-violet-800', false,
   'Changes cascade across your content creation workflows, keeping truth current everywhere your team uses AI.'],
]

/* `.product-grid_card` — four 290px metric tiles beside the case-study quote. */
const METRICS = [
  ['50%', 'lower cost per asset'],
  ['5x', 'more asset output'],
  ['10x', 'faster production'],
  ['30%', 'more SKUs produced per writer'],
]

const ROWS = [
  {
    eyebrow: 'Grounded', tint: 'bg-flame-300',
    title: 'Content you can trust',
    body: 'Outputs are generated from your defined product facts, not inference. No hallucinated specs, no wrong pricing, no off-claim language. Content is publish-ready without re-checking every detail.',
    items: [
      { title: 'Accuracy by default',
        body: 'Specs, pricing, and claims come from structured product attributes, not guesses.' },
      { title: 'On-brand and on-claim',
        body: 'Approved taglines, value props, and disclaimers are applied automatically from the first draft.' },
      { title: 'Richer generations',
        body: 'Product images are extracted at creation and passed as context, so content reflects the full product.' },
    ],
    slot: { bg: { src: '/assets/product.avif', w: 1564, h: 987 }, height: 1165 },
  },
  {
    eyebrow: 'Governed', tint: 'bg-blue-300',
    title: 'Control that holds at scale',
    body: 'The same product is described the same way across every page, campaign, channel, and region, with claims and disclaimers enforced automatically. Brand and legal integrity hold as volume grows.',
    items: [
      { title: 'One consistent story', body: 'No drift between teams, prompts, or markets.' },
      { title: 'Compliance built in',
        body: 'Regulatory disclaimers and approved language travel with the product, not caught in downstream review.' },
      { title: 'Change once, change everywhere',
        body: 'Cascading updates keep claims current across the whole catalog.' },
    ],
    slot: { bg: { src: '/assets/product-2.avif', w: 1564, h: 1005 }, height: 1165 },
  },
  {
    eyebrow: 'Scaled', tint: 'bg-green-400',
    title: 'Write once, use everywhere',
    body: 'Your catalog becomes reusable intelligence, so you capture revenue across thousands of products and every content type without multiplying effort.',
    items: [
      { title: 'Get to value fast',
        body: 'Agentic setup and bulk creation stand up entire catalogs from your existing sources.' },
      { title: 'Context everywhere you work',
        body: 'Product context flows across Chat, Project Settings, Task Agents, and Grid.' },
      { title: 'Beyond Jasper',
        body: 'That governed product truth travels into the outside AI tools your team already uses, connected through the Jasper MCP Server.' },
    ],
    slot: { bg: { src: '/assets/product-3.avif', w: 1564, h: 1019 }, height: 1165 },
  },
]

/* The three "Use Cases" cards. Each heading is painted as an inline highlight
   box in a saturated tint over a pale card ground — measured pairs:
     green-300 card / green-700 box     blue-300 card / blue-700 box
     flame-400 card / flame-500 box */
const USE_CASES = [
  { title: 'Large product catalogs', card: 'bg-green-300', box: 'bg-green-700 text-green-300',
    body: 'Keep thousands of SKUs accurate and on-brand across every channel and region, without scaling the team.' },
  { title: 'Regulated product categories', card: 'bg-blue-300', box: 'bg-blue-700 text-blue-300',
    body: 'Keep required disclaimers and approved claims correct on every generation, so compliance holds and review stops being the bottleneck.' },
  { title: 'Ecommerce and product marketing', card: 'bg-flame-400', box: 'bg-flame-500 text-flame-200',
    body: 'Turn product data into content that is accurate, differentiated, and built to sell, everywhere buyers research, including AI search.' },
]

const FAQ = [
  { q: 'How is Product IQ different from a PIM?',
    a: 'A PIM stores product data. Product IQ turns that product truth into governed context your AI agents apply automatically at generation time, so content comes out accurate and on-brand without manual re-briefing.' },
  { q: 'Where does my product data come from?',
    a: 'Agentic setup can search your Knowledge base and the web to draft a schema and import products, or you can define products directly.' },
  { q: 'How does Product IQ keep claims compliant?',
    a: 'Approved claims and required disclaimers are stored with each product and applied automatically. Update once and the change cascades everywhere.' },
  { q: 'Where can I use product context?',
    a: 'Across Chat, Project Settings, Task Agents, and Grid, and in the outside AI tools your team uses through the Jasper MCP Server.' },
  { q: 'Do I need the rest of Jasper IQ to use Product IQ?',
    a: 'Product IQ works alongside the rest of Jasper IQ. The more of your context you govern (Brand Voice, Style Guide, Audiences, Knowledge Base), the stronger every generation gets.' },
]

export default function ProductIQ() {

  return (
    <>
      <div aria-hidden="true" className="h-[80px] bg-surface" />

      <GridHero
        bg="bg-flame-200"
        height={593}
        eyebrow="Product IQ"
        eyebrowChip="bg-flame-300"
        title="Product catalog, meet agents"
        body="Product IQ gives every Jasper agent one governed source of truth for your products. Specs, pricing, claims, and disclaimers are right every time, everywhere your buyers find you."
        ctas={[
          { label: 'Start Free Trial', variant: 'btn-secondary' },
          { label: 'Get a Demo', variant: 'btn-primary' },
        ]}
        photo={{ src: '/assets/product-hero.avif',
                 alt: 'A Jasper product table listing contact-lens SKUs with images, names and categories.' }}
      />

      {/* ===== section_product-stats — pink-800 slab + stat staircase ====== */}
      <RevealSection className="clip-bleed relative bg-surface pt-[80px]">
        <div className="u-container bg-pink-800 px-6 py-10 lg:px-10">
          {/* live tags this display line as a <p>, not a heading */}
          <p className="reveal max-w-[24ch] font-serif text-white tracking-tightest leading-[1.05]
                        text-[clamp(2.125rem,3.75vw,3.375rem)]">
            AI is describing your products.<br />Product IQ makes sure it gets them right.
          </p>
          <p className="reveal mt-8 max-w-[62ch] text-text-main text-white text-pretty"
             style={{ '--reveal-delay': '100ms' }}>
            Generic Al does not know your products, so it invents specs, misses disclaimers, and
            drifts off-message. When buyers encounter inaccurate, ungoverned content, trust
            disappears fast.
          </p>
        </div>

        {/* aeo_stats_rules_wrap — three 405px wrappers, each card stepped down */}
        <div className="u-container mt-[-40px] grid gap-8 lg:mt-0 lg:grid-cols-3 lg:gap-8">
          {STATS.map((s, i) => (
            <div key={s.n} className="lg:h-[416px]">
              <div className="reveal bg-pink-800 p-8 lg:h-[250px]"
                   style={{ '--reveal-delay': `${i * 100}ms`, marginTop: `${i * 83}px` }}>
                {/* live splits this into a 104px numeral and a separate 28px
                    <h1> for the "%" — which is why the capture reported the
                    page's h1 as "%". Kept as a sibling h1, not nested. */}
                <div className="flex items-start">
                  <span className="font-serif text-white tracking-tightest leading-none
                                   text-[clamp(3.5rem,7.2vw,6.5rem)]">{s.n}</span>
                  <h1 className="mt-2 font-serif text-h3 text-white">%</h1>
                </div>
                <p className="mt-4 text-[18px] leading-[21.6px] text-pink-600 text-pretty">{s.body}</p>
                <p className="mt-4 text-text-main text-pink-600">Source: Forrester</p>
              </div>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* ===== layout_cards_wrap — "How It Works", four 328x256 tiles ====== */}
      <RevealSection className="bg-surface pt-section-main">
        <div className="u-container flex flex-col items-center text-center">
          <p className="reveal eyebrow inline-block bg-yellow-600 px-1 text-ink">How It Works</p>
          <p className="reveal mt-6 max-w-[20ch] font-serif text-ink tracking-tightest leading-[1.05]
                        text-[clamp(2.125rem,3.75vw,3.375rem)]"
             style={{ '--reveal-delay': '80ms' }}>
            Define once. Applied everywhere. Automatically.
          </p>
          <p className="reveal mt-6 max-w-[56ch] text-text-main text-ink text-pretty"
             style={{ '--reveal-delay': '140ms' }}>
            Product IQ closes the gap. It gives every agent one governed source of truth for your
            products, applied automatically at generation time.
          </p>
        </div>

        <div className="u-container mt-12 grid gap-gutter sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map(([step, tint, tone, isHeading, body], i) => {
            const Step = isHeading ? 'h3' : 'p'
            return (
              <article key={step} className={`reveal flex min-h-[256px] flex-col ${tint} pt-3`}
                       style={{ '--reveal-delay': `${i * 80}ms` }}>
                <div className="px-3">
                  <Step className={`${tone} font-serif tracking-none leading-[1.1]
                                    text-[clamp(1.25rem,1.67vw,1.5rem)]`}>
                    {step}
                  </Step>
                </div>
                <div className="flex-1 px-3 pb-3 pt-6">
                  <p className="text-text-main text-ink text-pretty">{body}</p>
                </div>
              </article>
            )
          })}
        </div>

        <div aria-hidden="true" style={{ height: 180 }} />
      </RevealSection>

      {/* ===== section_product-grid — pink-300 band, quote + 4 metrics ===== */}
      <RevealSection className="clip-bleed relative bg-pink-300">
        <div className="u-container grid gap-8 py-12 lg:grid-cols-[778px_minmax(0,1fr)] lg:gap-0">
          <div className="max-w-[700px] px-0 lg:px-10">
            <p className="reveal text-h5 text-ink text-pretty">
              A Fortune 500 home goods e-commerce company used Jasper IQ to scale on-brand content
              across its entire product catalog—in days, not months. By turning product
              specifications into governed, reusable product context, Jasper automatically generated
              accurate, on-brand copy for every SKU.
            </p>
            <p className="reveal mt-6 text-h5 text-ink text-pretty" style={{ '--reveal-delay': '100ms' }}>
              The result: 5x more asset output, 50% lower cost per asset, and full catalog coverage.
            </p>
            <a href="#" className="reveal mt-4 inline-block text-text-main text-pink-700 underline"
               style={{ '--reveal-delay': '160ms' }}>
              (Gartner, Emerging Tech: Tech Innovators, 2026)
            </a>
          </div>

          <div className="grid grid-cols-2">
            {METRICS.map((m, i) => (
              <div key={m[0]}
                   className="reveal border-l border-t border-pink-500 p-6 first:border-t-0 [&:nth-child(2)]:border-t-0"
                   style={{ '--reveal-delay': `${i * 70}ms` }}>
                <p className="font-serif text-ink tracking-tightest leading-none
                              text-[clamp(2rem,2.9vw,2.6rem)]">{m[0]}</p>
                <p className="mt-2 text-text-small text-ink">{m[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ===== the three horizontal_content_wrap + g_slot pairs =========== */}
      {ROWS.map((r) => (
        <div key={r.eyebrow}>
          <HorizontalContent
            eyebrow={r.eyebrow} tint={r.tint} title={r.title} body={r.body} items={r.items}
            spaceTop={112} spaceBottom={0}
          />
          <ProductSlot {...r.slot} />
        </div>
      ))}

      {/* ===== layout_cards_wrap — "Use Cases", three highlighted cards ==== */}
      <RevealSection className="bg-surface-2 py-section-main">
        <div className="u-container flex flex-col items-center text-center">
          <p className="reveal eyebrow inline-block bg-yellow-600 px-1 text-ink">Use Cases</p>
          <h2 className="reveal mt-6 max-w-[26ch] font-serif text-ink tracking-tightest leading-[1.05]
                         text-[clamp(1.875rem,2.64vw,2.375rem)]"
              style={{ '--reveal-delay': '80ms' }}>
            Built for catalogs that are big, fast-changing, or highly regulated
          </h2>
        </div>

        <div className="u-container mt-12 grid gap-gutter md:grid-cols-3">
          {USE_CASES.map((u, i) => (
            <article key={u.title} className={`reveal ${u.card} p-3`}
                     style={{ '--reveal-delay': `${i * 90}ms` }}>
              <h3 className="font-serif tracking-tightest leading-[1.1]
                             text-[clamp(1.75rem,2.4vw,2.125rem)]">
                <span className={`${u.box} box-decoration-clone`}>{u.title}</span>
              </h3>
              <p className="mt-4 text-text-small text-ink text-pretty">{u.body}</p>
            </article>
          ))}
        </div>
      </RevealSection>

      <Accordion chip="FAQs" title="Frequently asked questions about Product IQ"
                 items={FAQ} openFirst />

      <Closing title="Be found, cited, and trusted with Jasper"
               body="Book a demo and we'll walk through your scores, your top opportunities, and what it looks like to ship the first set of fixes inside Jasper."
               cta="Get A Demo"
               photo="/assets/footer-img.avif" />
    </>
  )
}
