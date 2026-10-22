# CLAUDE.md: portfolio-site

Bilingual (EN default, DE under `/de/`) personal site for Azeem Ur Rehman. Astro 7, static output, GitHub Pages. Full plan: `BUILD_PLAN.md` (local only, gitignored).

**Positioning:** a very short, minimal market-facing page for a systems-to-product engineer (HMI and UX, agentic systems, middleware, embedded systems). **Pages: Home, How I work, About, Contact** (plus Impressum and Privacy). Capabilities are stated, never proven: no figures, case studies, test counts, repo lists or library lists; GitHub, LinkedIn and email are icon links. No public CV page: "Request my CV" opens a prefilled email. Palette: forest and emerald greens (`src/styles/tokens.css`). Page transitions use Astro's `ClientRouter`, so client scripts must run on `astro:page-load`. Copy lives in `src/lib/copy.ts`; icons in `src/components/Icon.astro`.

## Commands (Node 22.22+; `nvm use` reads `.nvmrc`)
- `npm run dev` · `npx astro check` · `npm run build` · `npm run preview`

## Rules
- **Employer stays anonymous** ("a lab-automation company") everywhere on the site until Azeem has written permission. Case studies show patterns and outcomes, never architecture detail, vendors, devices or customers. `scripts/blocklist.local.txt` (gitignored) lists terms the check must find nowhere.
- **Availability is soft:** "open to conversations" only. No rates, capacity, start dates, or the words freelance/contractor. (Work-permit and contract questions are Azeem's to settle first.)
- **About page (Azeem asked for it):** a skills pane (technologies grouped by level), languages and place, background and focus areas are allowed. No numbers, no employer-linked device, protocol or vendor names, no role history or dates. Story: years only, degrees may be named, past employers and the current one stay generic ("a space agency", "an analytics firm", "a lab-automation company"); the CV request is the closing step.
- **Azeem's explicit overrides (home page only):** the first-person hero text is allowed (repo cards were tried and removed). Still banned: numbers/metrics, device, protocol or vendor names, proof lines, any employer detail.
- Voice: warm, conversational, first person, short. Keep it minimal; do not add sections, numbers or tech lists back without Azeem asking.
- Photo on the About page only. Recommendations are linked to LinkedIn, never copied.
- Facts only from the approved career-context files. If a fact is missing, ask. Never write facts from memory.
- Never publish phone, postal address (except the approved Impressum), salary, private repo names or anything marked private/application-only.
- No trackers, CDNs, third-party fonts, embeds or cookie banners. Fonts are self-hosted.
- Style: no em dashes; none of "passionate", "excited", "leverage"; outcome first; only verified numbers.
- German text is drafted here and reviewed by Azeem; keep `<!-- DE: needs review -->` at the top of each German content file until signed off.
- Internal links go through `getRelativeLocaleUrl` (base path `/portfolio-site` until the custom domain exists).
- Work phase by phase; show rendered pages at each checkpoint; small commits; update `CHANGELOG.md`.
- Commit author: Azeem Ur Rehman <72868356+rehmanazeem@users.noreply.github.com>. No co-author lines.
