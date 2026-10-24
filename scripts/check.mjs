// Post-build quality gate: node scripts/check.mjs  (run after `npm run build`)
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';

const BASE = '/portfolio-site'; // keep in sync with astro.config.mjs; set to '' with a custom domain
const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
const TEXT = new Set(['.astro', '.ts', '.md', '.css', '.mjs', '.json', '.txt', '.html', '.svg']);
const textFiles = (dir) => walk(dir).filter((f) => TEXT.has(extname(f)));
const problems = [];
const warnings = [];

// 1. No em dashes anywhere in the source.
for (const f of textFiles('src')) {
  if (readFileSync(f, 'utf8').includes('—')) problems.push(`em dash in ${f}`);
}

// 2. Style rules for site copy (banned words, "certified").
const banned = /\b(passionate|excited|thrilled|delighted|leverage[sd]?|synergy|resonate[sd]?|delve|navigate[sd]?|first-hand|certified|leidenschaftlich|begeistert|synergie|zertifiziert)\b/i;
for (const f of [...textFiles('src/pages'), ...textFiles('src/components'), 'src/lib/copy.ts', 'src/i18n/ui.ts']) {
  const hit = readFileSync(f, 'utf8').match(banned);
  if (hit) problems.push(`banned word "${hit[0]}" in ${f}`);
}

// 2b. Availability stays soft ("open to conversations"): no contractor/rate/freelance wording in site copy.
const availability = /\b(freelanc\w*|contractor|day rate|hourly rate|hire me|available from|freiberuf\w*|stundensatz|tagessatz|auftragnehmer)\b/i;
for (const f of [...textFiles('src/pages'), ...textFiles('src/components'), 'src/lib/copy.ts', 'src/i18n/ui.ts']) {
  const hit = readFileSync(f, 'utf8').match(availability);
  if (hit) problems.push(`availability wording "${hit[0]}" in ${f}`);
}

// 3. Nothing private in the built site (generic patterns only; never list real values here).
const privatePatterns = [
  [/\+49|\(\+49\)/, 'phone prefix'],
  [/\b01[5-7]\d{7,9}\b/, 'mobile number'],
  [/\[(APPLICATION|PRIVATE)\]/, 'privacy tag'],
  [/\b(salary|gehalt|blue card|notice period|kündigungsfrist)\b/i, 'private logistics'],
];
const html = walk('dist').filter((f) => extname(f) === '.html');
for (const f of html) {
  const text = readFileSync(f, 'utf8');
  for (const [re, label] of privatePatterns) if (re.test(text)) problems.push(`${label} found in ${f}`);
}

// 4. Internal links resolve to built files.
const known = new Set(html.map((f) => '/' + f.slice('dist/'.length).replace(/index\.html$/, '')));
for (const f of html) {
  for (const m of readFileSync(f, 'utf8').matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    let target = m[1];
    if (BASE && target.startsWith(BASE)) target = target.slice(BASE.length) || '/';
    else if (BASE) continue; // not a site-internal path
    if (!target.endsWith('/') && extname(target)) {
      if (!existsSync(join('dist', target))) problems.push(`missing asset ${target} (from ${f})`);
    } else if (!known.has(target.endsWith('/') ? target : target + '/')) {
      problems.push(`broken link ${target} (from ${f})`);
    }
  }
}

// 4b. hreflang alternates must point at pages that exist (EN/DE twins).
const SITE = 'https://rehmanazeem.github.io'; // keep in sync with astro.config.mjs
for (const f of html) {
  for (const m of readFileSync(f, 'utf8').matchAll(/<link rel="alternate" hreflang="[^"]+" href="([^"]+)"/g)) {
    let t = m[1].replace(SITE, '');
    if (BASE && t.startsWith(BASE)) t = t.slice(BASE.length) || '/';
    if (!known.has(t)) problems.push(`hreflang target ${m[1]} does not exist (from ${f})`);
  }
}

// 4c. Local-only blocklist (names that must never appear). The file is gitignored on purpose:
// writing the names into this public repo would defeat the point.
const blockFile = 'scripts/blocklist.local.txt';
if (existsSync(blockFile)) {
  const terms = readFileSync(blockFile, 'utf8').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));
  const scan = [...textFiles('src'), ...html, 'CHANGELOG.md', 'README.md', 'CLAUDE.md'].filter((f) => existsSync(f)); // the notes files are local-only
  for (const f of scan) {
    const text = readFileSync(f, 'utf8').toLowerCase();
    for (const term of terms) if (text.includes(term.toLowerCase())) problems.push(`blocked term "${term}" found in ${f}`);
  }
} else {
  warnings.push('scripts/blocklist.local.txt not found: the employer-name check was skipped.');
}

// 5. The legal notice must carry a real address before launch.
if (/noch nicht eingetragen/.test(readFileSync('dist/impressum/index.html', 'utf8'))) {
  const msg = 'Impressum has no postal address yet (src/lib/legal.ts). Add one before publishing.';
  // Warn locally; fail in CI (GitHub Actions sets CI=true) or when ENFORCE_IMPRESSUM=1, so it cannot go live without one.
  if (process.env.CI || process.env.ENFORCE_IMPRESSUM === '1') problems.push(msg);
  else warnings.push(msg);
}

warnings.forEach((w) => console.warn(`WARNING: ${w}`));
if (problems.length) {
  console.error(problems.map((p) => `FAIL: ${p}`).join('\n'));
  process.exit(1);
}
console.log(`check ok: ${html.length} pages`);
