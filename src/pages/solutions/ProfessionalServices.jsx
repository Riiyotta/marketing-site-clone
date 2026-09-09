import IndustryTemplate from '../../components/templates/IndustryTemplate'
import { INDUSTRY_PAGES } from '../../data/solutionsPages'

/* /solutions/by-industry/professional-services — one of the six routes driven by the shared
   Solutions > By Industry template. All content lives in solutionsPages.js,
   captured verbatim from live. */
export default function ProfessionalServices() {
  return <IndustryTemplate page={INDUSTRY_PAGES['professional-services']} />
}
