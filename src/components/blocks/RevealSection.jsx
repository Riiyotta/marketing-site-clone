import { useReveal } from '../../hooks/useReveal'

/* ---------------------------------------------------------------------------
   A `<section>` that owns its own reveal observer.

   Page-local one-off bands used to sit inside a single wrapping
   `<div ref={useReveal()}>` per page. That works visually, but it collapses
   the whole page into ONE child of `.page_wrap`, and both the comparison
   harness and the live capture walk `.page_wrap`'s children to build the
   section tree — so every band on the page reported as a single 12000px
   section and every heading as "missing from clone".

   Wrapping each band in this component instead keeps the section list flat and
   comparable, and each band observes only its own `.reveal` descendants.

   Props: `as` (default 'section'), plus any element props (className, style,
   id, …), which pass straight through.
--------------------------------------------------------------------------- */

export default function RevealSection({ as: Tag = 'section', children, ...rest }) {
  const ref = useReveal({ threshold: 0 })
  return <Tag ref={ref} {...rest}>{children}</Tag>
}
