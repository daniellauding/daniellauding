# About-page migration — runbook

Adds the one missing piece of content to the CMS: the **About page** as a new Payload
`about` global. **Purely additive** — it creates new tables only and cannot overwrite
`projects` or `personal-info`. Nothing here has been applied to production yet; it needs
your explicit go because it touches the live Neon DB and the deployed server.

## Why only the About page?

`scripts/migrate-dry-run.mjs` (run it: `node scripts/migrate-dry-run.mjs`) checked the live
API. Result: **every old case study already exists in Neon with content** (2–9 blocks each),
so the heavy case migration is unnecessary. The only genuinely missing content is the About
page; the rest is optional external grid stubs.

## What's in this folder

| File | Purpose |
|---|---|
| `About.global.ts` | The new Payload global definition (header + section blocks + timeline + skills). |
| `RUNBOOK.md` | This file. |
| Source content | `../docs/about-content.md` (the real words to enter). |

## Apply steps (in order — `push:false` means SQL before code)

1. **Add the global** — copy `About.global.ts` → `nextjs-portfolio/src/globals/About.ts` and
   register it: in `payload.config.ts`, `globals: [PersonalInfo, SiteSettings, About]`.

2. **Create the migration SQL (do NOT hand-write it).** Point a local Payload at Neon and let
   Payload generate the exact schema (matching its column naming), then apply it:
   ```bash
   cd nextjs-portfolio
   DATABASE_URI="<neon-url>" npx payload migrate:create about_global
   DATABASE_URI="<neon-url>" npx payload migrate          # applies the additive CREATE TABLEs
   ```
   This creates `about`, `about_blocks_*`, `about_timeline`, `about_skills` tables. It does
   **not** alter existing tables. (Per `Obsidian/01-Projects/daniellauding/deployment.md`,
   never deploy field-referencing code before the tables exist, or the endpoint 500s.)

3. **Upload About media to Cloudinary first.** `hero` (me.jpg), `logo` (logo.svg),
   `logoMov` (logoH.mov), and the Intro/Nomading gallery images are local `/images/...` paths.
   Upload them to the live `media` collection (admin or API) and note the IDs before seeding.

4. **Deploy** the server (per deployment.md): `lsof -ti:3003 | xargs kill -9; rm -rf .next;
   npx next build --no-lint; npx next start --port 3003 &`.

5. **Seed the About global** from `docs/about-content.md`:
   - In the admin (`/admin/globals/about`) by hand, or
   - Via the REST API (`POST`/`PATCH /api/globals/about`, authenticated). Drop the 5
     Lorem-ipsum "TODO" timeline rows; keep the 3 real ones. Timeline can also be copied
     from the existing `experience` collection.

## Rollback

Each step is reversible: remove the global from config + `DROP TABLE about*` (additive tables
only). No existing data is touched.

## Optional follow-ups (separate, lower priority)

- **External stubs** (Furuboda, Record Union, Burt, Pod1, Futurniture, Hyper Island, Drumedar,
  Loopia) — create-only `projects` docs for grid completeness; mint slugs for the 5 that lack
  one. They have no case content.
- **Do NOT touch** the 5 conflict-flagged cases (foretagskollen, invoice-portal-payex, mrusta,
  abro, addictive-keys) — they already have content in Neon.
