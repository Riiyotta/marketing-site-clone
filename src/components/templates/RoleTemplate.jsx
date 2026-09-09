import RoleHero from '../blocks/RoleHero'
import UseCaseCards from '../blocks/UseCaseCards'
import AgentSlider from '../blocks/AgentSlider'
import IntegrationsVis from '../blocks/IntegrationsVis'
import PageCta from '../PageCta'

/* ---------------------------------------------------------------------------
   The Solutions > By Role page template.

   All six role routes are ONE Webflow template. Verified by diffing the six
   captures in .scrape/plat-solutions-by-role-*.json — same five sections, same
   order, same heights (live page totals 4567-4623px, a 56px spread that is
   entirely headline wrap):

     750px   hero_main_wrap     RoleHero — h1 "Solutions for <Role>"
     ~650px  layout_cards_wrap  UseCaseCards — "The only generative AI
                                purpose-built for <role>"
     ~690px  slider_main_wrap   AgentSlider — IDENTICAL on all six, so it takes
                                no props at all
     750px   horizontal_vis     IntegrationsVis — "Integrations for <Role>"
     925px   cta_main_wrap      the shared PageCta

   Only three of the five sections carry per-page content; the slider and the
   closing CTA are byte-identical across all six pages.

   PROPS — one `page` object from src/data/solutionsPages.js:
     hero          {eyebrow, title, body, ctas, headshotLeft, headshotRight,
                    cardLeft, cardRight}
     useCases      {eyebrow, title, cards}
     integrations  {title, body, ctas}
--------------------------------------------------------------------------- */

export default function RoleTemplate({ page }) {
  const { hero, useCases, integrations } = page

  return (
    <>
      <RoleHero {...hero} />
      {useCases && <UseCaseCards {...useCases} />}
      <AgentSlider />
      {integrations && <IntegrationsVis {...integrations} />}
      <PageCta
        headline="Start creating with Jasper today"
        ctas={[
          { label: 'Start Free Trial', variant: 'btn-secondary' },
          { label: 'Get A Demo', variant: 'btn-primary' },
        ]}
      />
    </>
  )
}
