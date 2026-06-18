# Migration Proposal — Old CRA Portfolio → Live Payload CMS (Neon)

**Goal:** Move local static content from `src/constant.js` (the OLD CRA site) INTO the live Payload CMS (Neon Postgres, API at `https://new.daniellauding.se/api`) so the old site — and later the Next.js site — can read it remotely, **without destroying or overwriting any existing CMS data**.

**Source of truth files referenced:**
- `/Users/daniellauding/Work/internal/old-portfolio/daniellauding/src/constant.js` (`work` array starts line 839, `about[0]` is the about page)
- `/Users/daniellauding/Work/internal/old-portfolio/daniellauding/docs/about-content.md` (human-readable dump of `/about`)
- `/Users/daniellauding/Documents/Obsidian/01-Projects/daniellauding/deployment.md` (the `push:false` / manual `ALTER TABLE` constraint)

---

## 1. Data-source map

Where each OLD route gets its content **today**. Only the home hero (name/email/bio/timeline) is partially Live; everything else is fully Static.

| Old route | Renders | Source today | Notes |
|---|---|---|---|
| `/` (home) | hero name, email, bio/lead, timeline | **Partially Live** (Neon `personal-info` global covers name/email/bio/socials) | Timeline + skills still in `constant.js`; the live `personal-info` does NOT model the section composition. |
| `/about` | full about page (9 sections, timeline, skills) | **Static** (`constant.js` → `about[0]`) | No `about` global/`pages` collection exists in Neon (`aboutStructureExists:false`; `/api/globals/about`, `/api/about`, `/api/pages` all 404). |
| `/work` | client list / index grid | **Static** (`constant.js` → `work[]`, 16 items) | Live `projects` collection (27 docs) is the remote equivalent but is not yet wired to the old site. |
| `/<client>` (e.g. `/asteria`) | client landing + case list | **Static** (`constant.js`) | Maps to a Neon `projects` doc (see §2). |
| `/<client>/<case>` (e.g. `/asteria/smart-cash-flow`) | case detail w/ content blocks | **Static** (`constant.js`, the section/groups/items DSL) | This is the heavy part — the DSL must be mapped to Payload `contentBlocks` (see §4e). |

---

## 2. Existence comparison — `work` items vs live Neon `projects`

Matched by normalized slug/name. Neon has **27 project docs = 24 real + 3 Qasa (1 original + 2 copies)**. The `constant.js` `work` array has **16 client items**.

| # | constant.js client / slug | Neon match (slug → name) | Match type | Verdict / note |
|---|---|---|---|---|
| 0 | Qasa / `qasa` | `qasa-rental-platform` → "Qasa - Rental Matching Platform" | **fuzzy** | **EXISTS.** Skip/merge. External stub in old site (no cases). Ignore the 2 copies `qasa-rental-platform - Copy` / `- Copy2` (`isCopy:true`) — do NOT touch or duplicate. |
| 1 | Asteria / `asteria` | `asteria-fintech` → "Asteria - Smart Cash Flow" | **fuzzy** | **EXISTS** as project. Client has 3 cases → see case rows below. |
| 2 | Furuboda / `furuboda` | — | **MISSING** | External stub (Music Production, `isExternal:true`). Create only if you want it in the grid; no case content. |
| 3 | Spotify / `spotify` | `spotify-data-saver` → "Spotify - Data Saver Feature" | **fuzzy** | **EXISTS.** Skip/merge. 1 case (`growth-enable-more-free-users-emerging-markets`). |
| 4 | Record Union / `record-union` | — | **MISSING** | External stub, no cases. Create stub if desired. |
| 5 | Länsförsäkringar / `lansforsakringar` | `lansforsakringar-digital-design` → "Länsförsäkringar - Digital Design System" | **fuzzy** | **EXISTS.** 1 active case `lansforsakringar` (2 earlier cases are commented out in source — skip). |
| 6 | KLM Royal Dutch Airlines / `klm` | `klm-airlines` → "KLM Royal Dutch Airlines" | **fuzzy** | **EXISTS.** 1 case `klm-royal-dutch-airlines`. Note duplicate KLM under Instinctly (see #8). |
| 7 | Instinctly / `instinctly` | — | **MISSING** as a project | The Instinctly client itself has no Neon doc, but several of its 7 cases map to standalone Neon projects (see case rows). Decide: model Instinctly as an umbrella client, or fold its cases into existing project docs. |
| 8 | Backbase / `backbase` | `backbase-banking` → "Backbase – Digital Banking Platform" | **fuzzy** | **EXISTS.** 1 case `backbase`. |
| 9 | Steem / `steem` | `steem-navii` → "Steem – Web2Print Platform" | **fuzzy** | **EXISTS.** 1 case `navii-web2print`. |
| 10 | Burt / `burt` | — | **MISSING** | External stub, no cases. |
| 11 | Pod1 / **MISSING slug** | — | **MISSING** | External stub, **no slug in source** (id 11). Needs a slug minted before any insert. |
| 12 | Futurniture / **MISSING slug** | — | **MISSING** | External stub, no slug (id 12). |
| 13 | Hyper Island / **MISSING slug** | — | **MISSING** | External stub, no slug (id 13). |
| 14 | Drumedar / **MISSING slug** | — | **MISSING** | External stub, no slug (id 14). |
| 15 | Loopia / **MISSING slug** | — | **MISSING** | External stub, no slug (id 15). |

### Instinctly cases → Neon projects (sub-mapping)

| Instinctly case | Neon match | Type | Note |
|---|---|---|---|
| `mrusta` | `mrusta-dubai` → "mrUsta – Service Marketplace" | fuzzy | EXISTS |
| `abro` | `abro-bryggeri` → "Åbro Bryggeri – Website Redesign" | fuzzy | EXISTS |
| `addictive-keys-xln-audio` | `addictive-keys-xln` → "Addictive Keys – XLN Audio" | fuzzy | EXISTS |
| `klm` (id 0, legacy title/lead shape) | `klm-airlines` | fuzzy | DUPLICATE of client KLM; legacy `description` content shape (blockKinds `['title','lead']`). Don't create a second doc. |
| `klm-royal-dutch-airlines` (id 6) | `klm-airlines` | fuzzy | DUPLICATE — identical to top-level KLM client case. Skip. |
| `actic` | — | MISSING | No `content` array (empty blockKinds). Stub only. |
| `resrobot` | — | MISSING | No `content` array (empty blockKinds). Stub only. |

### Asteria cases → Neon projects

| Asteria case | Neon match | Type | Note |
|---|---|---|---|
| `smart-cash-flow` | `asteria-fintech` | fuzzy | EXISTS (project doc is the Asteria smart-cash-flow). Only case using `list` kind. |
| `foretagskollen` | `foretagskollen-swedbank` → "Företagskollen – Swedbank" | fuzzy | EXISTS as its own project doc. |
| `invoice-portal-payex` | `invoice-portal-payex` → "Invoice Portal – PayEx" | **exact (slug)** | EXISTS. Only exact-slug match in the catalog. |

### Summary of §2

- **Already in Neon (skip or merge): 11** distinct old subjects — Qasa, Asteria/smart-cash-flow, Spotify, Länsförsäkringar, KLM, Backbase, Steem/navii, and the Instinctly cases mrusta / abro / addictive-keys, plus the two extra Asteria cases foretagskollen + invoice-portal-payex which exist as their own project docs.
- **MISSING in Neon (need creating if wanted): up to 11** — external stubs Furuboda, Record Union, Burt, Pod1, Futurniture, Hyper Island, Drumedar, Loopia; the Instinctly umbrella client; and content-less stubs actic, resrobot. Most are external "no case" stubs — creating them is optional (grid completeness only).
- **Only 1 exact-slug match** (`invoice-portal-payex`); all other matches are fuzzy (renamed slugs), so the upsert key must be a **normalized name/slug alias map**, not a raw slug equality (see §4a).
- **Do NOT touch** the 2 Qasa copies (`isCopy:true`).

---

## 3. About page — schema extension needed

Today there is **no Payload entity that models the About page** (confirmed `aboutStructureExists:false`; `/api/globals/about`, `/api/about`, `/api/pages` → 404). The only structured "about" data live is the **`personal-info` global**, a flat bio store that already covers **name / firstName / lastName / title / subtitle / status / studio / location / email / phone / website / bio (richText) / avatar / tools[] / roles[] / experience / keyContributions[] / socialLinks**.

So `personal-info` already covers the About **header identity + socials** — do not re-create those. What is missing is the **composable section/blocks body**, the **timeline**, and the **skills** ranks from `about[0]` (see `docs/about-content.md`: 9 active sections — Intro hero, Experience, Current, Asteria teasers, Past, Design Philosophy, Nomading, Let's Collaborate CTA, Experiences heading; plus an 8-row timeline and grouped skills).

**Recommendation: add a new `about` Payload global with a `content` blocks field** (single instance, since there is exactly one `/about` page = `about[0]`).

Two viable approaches:

- **(A) Reuse the projects block system (preferred).** Extract the shared `contentBlocks` blocks[] definition out of `Projects.ts` into a reusable module, and attach it to the new `about` global. This immediately gives About the 18 existing block types (`textSection`, `imageCarousel`, `singleImage`, `quote`, `callout`, `stats`, `textWithImage`, `bentoGrid`, …) and — crucially — the **Next.js site already has a renderer for these blocks**, so no new renderer is needed. Map the about sections onto existing blocks: Intro hero → `textSection` + an image gallery (`imageCarousel`/`imageGrid` with a plektrum style flag); Experience/Current/Nomading → `textWithImage`; Asteria/Past teasers → `bentoGrid` or `gridLayout` cards; Design Philosophy → `gridLayout` (icon+title+text cells); Let's Collaborate → `callout`; Experiences heading → `textSection`.
- **(B) Bespoke about blocks.** Add purpose-built blocks (`introBlock`, `textImageBlock`, `teaserGroupBlock`, `philosophyBlock`, `ctaBlock`, `headingBlock`, `videoBlock`) per the `proposedAboutFields` in the catalog. Higher fidelity to the old DSL but requires NEW renderer code on both sites. Use only if (A) loses too much fidelity.

**Proposed `about` global fields** (from `proposedAboutFields`): `name` (text), `email` (email), `logo` (upload), `logoMov` (upload), `hero` (upload), `description` (textarea/lead), `content` (blocks — approach A or B), `timeline` (array: date/title/text), `skills` (array: category select design/development/software + name + rank 1–5). **Drop the 5 Lorem-ipsum "TODO" placeholder timeline rows (entries 3–7)** on migration — keep only the 3 real rows.

> Verdict: **Add an `about` global reusing the projects `contentBlocks` system.** `personal-info` stays the source for identity/socials; the new global owns sections + timeline + skills.

---

## 4. Non-destructive migration plan

### (a) Read-before-write / upsert-by-slug — never overwrite

- Build a **slug alias map** from §2 (e.g. `asteria → asteria-fintech`, `spotify → spotify-data-saver`, `klm → klm-airlines`, `lansforsakringar → lansforsakringar-digital-design`, …) because almost all matches are fuzzy renames, not slug-equal.
- For every old item: `GET /api/projects?where[slug][equals]=<neon-slug>` (or by name). **If it exists → SKIP by default** (or MERGE only explicitly whitelisted empty fields). **If it does not exist → CREATE.**
- **Never** issue blind `PATCH`/`PUT` that replaces a whole doc. Any merge must be field-additive and target only fields that are currently empty in Neon (read the live doc first, diff, write only the gaps).
- Explicitly exclude the `isCopy:true` Qasa docs from all reads/writes.

### (b) Dry-run that reports create-vs-skip per item

- First pass writes **nothing**. It iterates all 16 work items (+ Asteria/Instinctly sub-cases + the About global) and prints a table: `item → resolved neon slug → EXISTS(skip) | EXISTS(merge candidate fields: …) | MISSING(create)`.
- Output should match §2 exactly: ~11 EXISTS/skip, ~11 MISSING/create, 0 destructive. Require a human OK before the write pass. Gate the write pass behind an explicit `--apply` flag.

### (c) `push:false` → manual SQL `ALTER` for new About fields (RISK)

Per `deployment.md`: **Payload runs with `push:false`, so new code fields do NOT auto-create DB columns.** A new field present in code but missing in Neon causes a **SQL query crash → 500 → fallback to empty JSON**.

- **Risk:** adding the `about` global (and any new `about_*` / `about_blocks_*` tables/columns, plus `timeline`/`skills` array tables) without first running the matching `ALTER TABLE` / `CREATE TABLE` against Neon will 500 the about endpoint and can destabilize the running server (`feature/payload-cms-content` is live after rebuild).
- **Mitigation:** generate the schema additions, hand-write the `CREATE TABLE`/`ALTER TABLE` SQL for every new `about*` table/column, run it against Neon **before** deploying the code that references the fields. Order: SQL first, code/deploy second. This is **purely additive** (new tables/columns) so it does not touch existing `projects`/`personal-info` data — but it must be applied or the About route breaks.
- If reusing the projects block system for About (approach A), the new global still needs its **own** `about_blocks_*` tables — Payload does not share block tables across entities — so the `push:false` ALTER work applies regardless.

### (d) Media — local `/images/...` must go to Cloudinary first

- All old content references local paths (e.g. hero `/images/me.jpg`, logo `/images/logo.svg`, logoMov `/images/logoH.mov`, Intro plektrum gallery `/images/about/nomading-spain.jpg`, …, plus every case image/imageLoop).
- Neon `upload` fields (`media` collection) expect hosted assets. **Each referenced image/video must be uploaded to Cloudinary (the live media store) first**, then the migration references the returned media ID/URL — not the local path.
- Build a **path → Cloudinary URL map** as a pre-step; fail loudly on any unmapped path so no block ships with a dead local `/images/...` reference. `imageLoop` (variant `loop`) and the `plektrum` gallery are still just media arrays — only the layout flag differs.

### (e) DSL → Payload blocks mapping (the heavy part)

- Old case content is the **section / `groups.items[]` DSL**: each section carries top-level `text`, `image` (plain `src`, or `variant:'plektrum'`, or `variant:'loop'` = imageLoop), and `groups.items[]` leaves of kind `text` and `list`. Across all **active** work cases the only kinds are: **text, image, imageLoop, list** (`list` appears ONLY in Asteria `smart-cash-flow` → `the-outcome`).
- Map: `text → textSection`; `image (src) → singleImage`; `image variant:'loop' (imageLoop) → imageCarousel/slideshow`; `list → textSection` (rich list) or a `stats`/`callout` if semantically a list of points; `groups.items[]` → block ordering inside the section.
- **Legacy shapes to special-case:** Instinctly `klm` (id 0) uses `title`+`lead`+`variant:'description'` (blockKinds `['title','lead']`) — map to a `textSection` (heading + lead), not the standard image DSL. Instinctly `actic`/`resrobot` have **no `content`** (empty blockKinds) → create stub doc only, no blocks.
- **Leverage what exists:** the **Next.js site already has a block renderer** for the 18 Payload block types — target those types so no renderer work is needed there. The `plektrum`/`teaser`/`icon`/`buttons`/`video` kinds appear ONLY in `about[0]` and commented-out LF cases, NOT in any active work case — so the work-case mapping is small (4 kinds); the About mapping is where the richer kinds live (handled in §3).

---

## 5. Order of work (smallest safe first)

1. **About global (read-only-impact on existing data).** Add the `about` Payload global reusing the projects `contentBlocks`. (i) Write + run the additive `CREATE TABLE/ALTER` SQL against Neon (per §4c) **before** deploying code. (ii) Pre-upload About media to Cloudinary (§4d). (iii) Seed the single about doc from `about[0]` / `docs/about-content.md`, dropping the 5 Lorem TODO timeline rows. This is purely additive — it cannot overwrite `projects` or `personal-info`.
2. **Missing projects (create-only).** Create the MISSING stubs you actually want in the grid (external: Furuboda, Record Union, Burt, Pod1, Futurniture, Hyper Island, Drumedar, Loopia — **mint slugs for Pod1/Futurniture/Hyper Island/Drumedar/Loopia first**; optionally the Instinctly umbrella client; optionally content-less actic/resrobot). All via CREATE-if-not-exists; the dry-run (§4b) confirms each is genuinely absent.
3. **Case content blocks (merge into existing docs — highest overwrite risk).** Populate the DSL→blocks content (§4e) into the EXISTING project docs (asteria-fintech, spotify-data-saver, klm-airlines, lansforsakringar-digital-design, backbase-banking, steem-navii, mrusta-dubai, abro-bryggeri, addictive-keys-xln, foretagskollen-swedbank, invoice-portal-payex). **This is the step that can overwrite live Neon content.**

### Overwrite-risk flags & how to avoid

- **Step 3 is the danger zone.** Those project docs already exist and may already have `contentBlocks`. **Before writing**, GET each live doc and inspect `contentBlocks`: if non-empty, do NOT overwrite — either append, or skip and report a conflict for manual review. Only write blocks into docs whose `contentBlocks` is currently empty.
- **Fuzzy slugs:** because matches are fuzzy (only `invoice-portal-payex` is exact), a wrong alias could write to the wrong doc. Validate the alias map by name AND slug, and have the dry-run print the resolved target doc name for human confirmation before `--apply`.
- **Qasa copies:** hard-exclude `qasa-rental-platform - Copy` / `- Copy2` from every operation.
- **`push:false`:** never deploy field-referencing code before the matching Neon SQL is applied, or the endpoint 500s. SQL first, deploy second, seed third.
- **personal-info:** do not write About identity/socials back into it — it already holds them; the new `about` global owns only sections/timeline/skills.
