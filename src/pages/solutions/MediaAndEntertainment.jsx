import IndustryTemplate from '../../components/templates/IndustryTemplate'
import { INDUSTRY_PAGES } from '../../data/solutionsPages'

/* /solutions/by-industry/media-and-entertainment — one of the six routes driven by the shared
   Solutions > By Industry template. All content lives in solutionsPages.js,
   captured verbatim from live. */
export default function MediaAndEntertainment() {
  return <IndustryTemplate page={INDUSTRY_PAGES['media-and-entertainment']} />
}
