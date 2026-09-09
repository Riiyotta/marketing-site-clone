import IndustryHero from '../blocks/IndustryHero'
import LogoBlade from '../blocks/LogoBlade'
import ChecklistVis from '../blocks/ChecklistVis'
import StoryPanel from '../blocks/StoryPanel'
import LayoutCards from '../blocks/LayoutCards'
import Accordion from '../blocks/Accordion'
import ClosingPhoto from '../blocks/ClosingPhoto'

/* ---------------------------------------------------------------------------
   The Solutions > By Industry page template.

   All six industry routes are ONE Webflow template fed by CMS content — the
   section list, order and per-section geometry are identical, and only the
   strings and images differ. Verified by diffing the six captures in
   .scrape/plat-solutions-by-industry-*.json:

     80px    g_section_space
     ~1000px page_main       IndustryHero (blue-600) + LogoBlade (blue-300)
     ~900px  horizontal_vis  ChecklistVis, feature 1
     ~900px  horizontal_vis  ChecklistVis, feature 2
     ~900px  horizontal_vis  ChecklistVis, feature 3
     ~740px  w-dyn-list      StoryPanel        <- OPTIONAL, see below
     1031px  layout_cards    "How Jasper Powers <Industry> Marketing"
     ~690px  accordion       "Questions about Jasper for <Industry>"
     900px   closing_photo   ClosingPhoto

   The one real structural difference: /professional-services and
   /retail-and-consumer-goods ship EIGHT sections, not nine — they carry no
   customer-story panel at all. The template therefore renders StoryPanel only
   when `story` is present rather than faking a quote for those two pages.

   The three feature rows cycle a fixed eyebrow-chip palette
   (green-400, blue-300, green-400) which is the same on every industry page,
   so it lives here rather than being repeated in every page's data.

   PROPS — one `page` object from src/data/solutionsPages.js:
     hero      {eyebrow, title, body, ctas, photo}
     blade     {title, logos}
     features  [{eyebrow, title, lede, items, bg, art}]   always 3
     story     {tint, logo, link, stats, quote, name, role, portrait} | undefined
     cards     {eyebrow, title, body, cards}
     faq       {title, items}
     closing   {title, body, ctas, photo}
--------------------------------------------------------------------------- */

/* The per-row eyebrow chip tints, measured identical across all six pages. */
const ROW_CHIPS = ['bg-green-400', 'bg-blue-300', 'bg-green-400']

export default function IndustryTemplate({ page }) {
  const { hero, blade, features = [], story, cards, faq, closing } = page

  return (
    <>
      <div aria-hidden="true" className="h-[80px]" />

      <IndustryHero {...hero} />
      {blade && <LogoBlade {...blade} />}

      {features.map((f, i) => (
        <ChecklistVis key={f.title} {...f} eyebrowChip={ROW_CHIPS[i % ROW_CHIPS.length]} />
      ))}

      {story && <StoryPanel {...story} />}

      {cards && (
        <LayoutCards
          eyebrow={cards.eyebrow}
          eyebrowChip="bg-flame-300"
          title={cards.title}
          body={cards.body}
          cards={cards.cards}
          spaceTop={112}
          spaceBottom={112}
        />
      )}

      {faq && (
        <Accordion chip="FAQs" title={faq.title} items={faq.items} openFirst
                   tint="bg-flame-300" size="lg" />
      )}

      {closing && <ClosingPhoto {...closing} />}
    </>
  )
}
