import IndustryTemplate from '../../components/templates/IndustryTemplate'
import { INDUSTRY_PAGES } from '../../data/solutionsPages'

/* /solutions/by-industry/tech — one of the six routes driven by the shared
   Solutions > By Industry template. All content lives in solutionsPages.js,
   captured verbatim from live. */
export default function Tech() {
  return <IndustryTemplate page={INDUSTRY_PAGES['tech']} />
}
