import RoleTemplate from '../../components/templates/RoleTemplate'
import { ROLE_PAGES } from '../../data/solutionsPages'

/* /solutions/by-role/product-marketers — one of the six routes driven by the shared
   Solutions > By Role template. All content lives in solutionsPages.js,
   captured verbatim from live. */
export default function ProductMarketers() {
  return <RoleTemplate page={ROLE_PAGES['product-marketers']} />
}
