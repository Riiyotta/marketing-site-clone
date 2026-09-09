/* Build design/gallery.html — a single browsable page showing the LIVE design
   system: real swatches for every colour token, real type specimens at the
   measured sizes, the spacing scale to scale, and the block library rendered
   from the same tokens the app uses.

   Prose tables tell you `flame-600` is `#fa4028`. A swatch shows you. This is
   the part a design repo needs that generated Markdown cannot give.

   Re-run with: node design/gen-gallery.mjs                                  */
import fs from 'fs'

const cfg = (await import('../tailwind.config.js')).default
const t = (cfg.theme && cfg.theme.extend) || {}
const colors = t.colors || {}

/* Readable text colour for a swatch: relative luminance, sRGB-weighted. */
const readable = (hex) => {
  const h = hex.replace('#', '')
  const n = h.length === 3 ? h.split('').map((c) => c + c).join('') : h
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16) / 255)
  const lin = (c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4))
  const L = 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)
  return L > 0.45 ? '#00063d' : '#ffffff'
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')

/* ---- colour ------------------------------------------------------------- */
let swatches = ''
for (const [family, val] of Object.entries(colors)) {
  if (typeof val === 'string') continue
  swatches += `<h3 class="fam">${esc(family)}</h3><div class="row">`
  for (const [step, hex] of Object.entries(val)) {
    swatches += `<div class="sw" style="background:${hex};color:${readable(hex)}">
      <span class="tok">${esc(family)}-${esc(step)}</span><span class="hex">${esc(hex)}</span></div>`
  }
  swatches += '</div>'
}
const singles = Object.entries(colors).filter(([, v]) => typeof v === 'string')
if (singles.length) {
  swatches += `<h3 class="fam">single tokens</h3><div class="row">`
  for (const [k, hex] of singles) {
    swatches += `<div class="sw" style="background:${hex};color:${readable(hex)}">
      <span class="tok">${esc(k)}</span><span class="hex">${esc(hex)}</span></div>`
  }
  swatches += '</div>'
}

/* ---- type --------------------------------------------------------------- */
const SERIF = "'Playfair Display', Georgia, serif"
const SANS = "Inter, system-ui, sans-serif"
const MONO = "'JetBrains Mono', ui-monospace, monospace"
const sizeVal = (v) => (Array.isArray(v) ? v[0] : v)
let specimens = ''
for (const [name, v] of Object.entries(t.fontSize || {})) {
  const size = sizeVal(v)
  const face = /h[1-6]|display|hero/.test(name) ? SERIF : /mono|code/.test(name) ? MONO : SANS
  specimens += `<div class="spec">
    <div class="spec-meta"><code>text-${esc(name)}</code><span>${esc(size)}</span></div>
    <div class="spec-sample" style="font-family:${face};font-size:${size}">
      Marketing that moves at the speed of thought</div></div>`
}

/* ---- spacing ------------------------------------------------------------ */
let spacing = ''
const spaceEntries = Object.entries(t.spacing || {}).slice(0, 40)
for (const [name, v] of spaceEntries) {
  spacing += `<div class="sp"><code>${esc(name)}</code>
    <div class="sp-bar" style="width:${v}"></div><span>${esc(v)}</span></div>`
}

/* ---- blocks ------------------------------------------------------------- */
const blocks = fs.existsSync('src/components/blocks')
  ? fs.readdirSync('src/components/blocks').filter((f) => f.endsWith('.jsx')).sort()
  : []
let blockRows = ''
for (const f of blocks) {
  const src = fs.readFileSync('src/components/blocks/' + f, 'utf8')
  const doc = src.match(/\/\*[\s\S]*?\*\//)
  const line = doc
    ? doc[0].split('\n').map((l) => l.replace(/^[\s/*-]+/, '').trim())
        .filter((l) => l && !/^-{4,}$/.test(l))[0] || ''
    : ''
  blockRows += `<tr><td><code>${esc(f.replace('.jsx', ''))}</code></td><td>${esc(line.slice(0, 150))}</td></tr>`
}

/* ---- pages -------------------------------------------------------------- */
const shots = fs.existsSync('.scrape')
  ? fs.readdirSync('.scrape').filter((f) => /^plat-.*\.png$/.test(f)).sort()
  : []
const pageCards = shots
  .map((f) => {
    const name = f.replace(/^plat-|\.png$/g, '')
    return `<figure class="pg"><img loading="lazy" src="../.scrape/${f}" alt="${esc(name)}">
      <figcaption>/${esc(name.replace(/-/g, '/'))}</figcaption></figure>`
  })
  .join('')

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Design system</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root{--ink:#00063d;--bg:#fff;--bg2:#f2f2f3;--line:#e4e4e7;--flame:#fa4028}
  *{box-sizing:border-box}
  body{margin:0;font:16px/1.55 Inter,system-ui,sans-serif;color:var(--ink);background:var(--bg)}
  header{padding:56px 40px 32px;border-bottom:1px solid var(--line)}
  h1{font-family:'Playfair Display',serif;font-size:clamp(2rem,4vw,3.2rem);margin:0 0 .3em;letter-spacing:-.03em}
  .lede{max-width:64ch;color:#4a4f6a;margin:0}
  nav{position:sticky;top:0;z-index:9;display:flex;gap:4px;flex-wrap:wrap;padding:12px 40px;
      background:rgba(255,255,255,.92);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
  nav a{font:500 13px/1 Inter,sans-serif;color:var(--ink);text-decoration:none;padding:8px 12px;border-radius:6px}
  nav a:hover{background:var(--bg2)}
  section{padding:48px 40px;border-bottom:1px solid var(--line);scroll-margin-top:56px}
  h2{font-family:'Playfair Display',serif;font-size:1.9rem;margin:0 0 .2em;letter-spacing:-.02em}
  .note{color:#4a4f6a;max-width:70ch;margin:0 0 28px}
  .fam{font:500 12px/1 'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:.08em;
       color:#6b7089;margin:26px 0 10px}
  .row{display:grid;grid-template-columns:repeat(auto-fill,minmax(132px,1fr));gap:8px}
  .sw{aspect-ratio:1.5;border-radius:8px;padding:10px;display:flex;flex-direction:column;
      justify-content:flex-end;border:1px solid rgba(0,0,0,.07)}
  .tok{font:500 11px/1.3 'JetBrains Mono',monospace}
  .hex{font:400 10px/1.4 'JetBrains Mono',monospace;opacity:.72}
  .spec{padding:14px 0;border-bottom:1px solid var(--line)}
  .spec-meta{display:flex;gap:12px;align-items:baseline;margin-bottom:6px}
  .spec-meta code{font:500 12px 'JetBrains Mono',monospace;color:var(--flame)}
  .spec-meta span{font:400 11px 'JetBrains Mono',monospace;color:#6b7089}
  .spec-sample{line-height:1.1;letter-spacing:-.02em}
  .sp{display:flex;align-items:center;gap:14px;padding:5px 0}
  .sp code{font:500 12px 'JetBrains Mono',monospace;min-width:104px;color:var(--flame)}
  .sp-bar{height:14px;background:var(--flame);border-radius:3px;min-width:1px}
  .sp span{font:400 11px 'JetBrains Mono',monospace;color:#6b7089}
  table{border-collapse:collapse;width:100%;font-size:14px}
  td{border-bottom:1px solid var(--line);padding:9px 12px;vertical-align:top}
  td:first-child{width:190px}
  td code{font:500 12px 'JetBrains Mono',monospace;color:var(--flame)}
  .pages{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:20px}
  .pg{margin:0}
  .pg img{width:100%;border:1px solid var(--line);border-radius:8px;display:block;
          max-height:300px;object-fit:cover;object-position:top}
  figcaption{font:400 11px/1.4 'JetBrains Mono',monospace;color:#6b7089;margin-top:6px}
  footer{padding:36px 40px;color:#6b7089;font-size:13px}
</style></head><body>
<header>
  <h1>Design system</h1>
  <p class="lede">Generated from <code>tailwind.config.js</code> and the block sources, so it
  cannot drift from what ships. Every value was measured off the reference DOM rather than chosen.
  Regenerate with <code>node design/gen-gallery.mjs</code>.</p>
</header>
<nav>
  <a href="#colour">Colour</a><a href="#type">Type</a><a href="#space">Spacing</a>
  <a href="#blocks">Blocks</a><a href="#pages">Pages</a>
</nav>
<section id="colour"><h2>Colour</h2>
  <p class="note">Use the token name in JSX (<code>bg-flame-600</code>), never a raw hex.
  Text is <code>ink</code> navy on light grounds — watch for navy-on-navy, which passes every
  automated check while being invisible.</p>
  ${swatches}</section>
<section id="type"><h2>Type</h2>
  <p class="note">Playfair Display, Inter and JetBrains Mono stand in for the original's licensed
  faces. The substitutes set about 9% wider, which is the main source of remaining per-section
  height differences — never shrink a measured size to close that gap.</p>
  ${specimens}</section>
<section id="space"><h2>Spacing</h2>
  <p class="note">Drawn to scale. The 12-column grid sits in a 1360px container with a 16px
  gutter, so one column is 98.667px. The container has <code>padding-inline: 0</code> — the page
  gutter sits outside the well.</p>
  ${spacing}</section>
<section id="blocks"><h2>Block library</h2>
  <p class="note">${blocks.length} prop-driven blocks. Pages are compositions of these, not
  bespoke builds — one block appears 15 times across the product pages. Extend through props;
  never fork a second copy.</p>
  <table>${blockRows}</table></section>
<section id="pages"><h2>Pages</h2>
  <p class="note">Reference captures at 1440px, ${shots.length} pages. These are the ground truth
  each rebuilt page was diffed against. Images load from <code>.scrape/</code>, which is not
  committed — run the capture scripts locally to populate them.</p>
  <div class="pages">${pageCards}</div></section>
<footer>Not affiliated with or endorsed by the original site's owner.
Content belongs to its owner; see the repo README.</footer>
</body></html>`

fs.writeFileSync('design/gallery.html', html)
console.log(`wrote design/gallery.html — ${Object.keys(colors).length} colour families, ` +
  `${Object.keys(t.fontSize || {}).length} type sizes, ${blocks.length} blocks, ${shots.length} page shots`)
