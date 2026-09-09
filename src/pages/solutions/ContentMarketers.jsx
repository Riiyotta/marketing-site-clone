import RoleTemplate from '../../components/templates/RoleTemplate'
import { ROLE_PAGES } from '../../data/solutionsPages'

/* /solutions/by-role/content-marketers — one of the six routes driven by the shared
   Solutions > By Role template. All content lives in solutionsPages.js,
   captured verbatim from live. */
export default function ContentMarketers() {
  return <RoleTemplate page={ROLE_PAGES['content-marketers']} />
}
