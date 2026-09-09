import IndustryTemplate from '../../components/templates/IndustryTemplate'
import { INDUSTRY_PAGES } from '../../data/solutionsPages'

/* /solutions/by-industry/retail-and-consumer-goods — one of the six routes driven by the shared
   Solutions > By Industry template. All content lives in solutionsPages.js,
   captured verbatim from live. */
export default function RetailAndConsumerGoods() {
  return <IndustryTemplate page={INDUSTRY_PAGES['retail-and-consumer-goods']} />
}
