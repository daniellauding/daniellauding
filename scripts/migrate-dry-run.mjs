#!/usr/bin/env node
/**
 * NON-DESTRUCTIVE dry run for migrating the old constant.js content into the live
 * Payload CMS (Neon). Writes NOTHING — it only reads the public API and reports,
 * per item, whether it already EXISTS (skip), is a MERGE candidate (exists but has
 * no contentBlocks), or is MISSING (would be created).
 *
 *   node scripts/migrate-dry-run.mjs
 *   PAYLOAD_URL=http://localhost:3003 node scripts/migrate-dry-run.mjs
 *
 * Source of the plan: docs/MIGRATION-PROPOSAL.md (§2 existence comparison).
 */
const BASE = (process.env.PAYLOAD_URL || "https://new.daniellauding.se").replace(/\/$/, "")
const API = `${BASE}/api`

// Alias map: old constant.js subject -> resolved live Neon project slug.
// neonSlug:null = no equivalent in Neon (would be CREATE). kind: project | case | stub.
const PLAN = [
  { client: "Qasa", oldSlug: "qasa", neonSlug: "qasa-rental-platform", kind: "project", note: "external stub, no cases" },
  { client: "Asteria", oldSlug: "asteria", neonSlug: "asteria-fintech", kind: "project" },
  { client: "Asteria", oldSlug: "asteria/foretagskollen", neonSlug: "foretagskollen-swedbank", kind: "case" },
  { client: "Asteria", oldSlug: "asteria/invoice-portal-payex", neonSlug: "invoice-portal-payex", kind: "case", note: "only exact-slug match" },
  { client: "Spotify", oldSlug: "spotify", neonSlug: "spotify-data-saver", kind: "project" },
  { client: "Länsförsäkringar", oldSlug: "lansforsakringar", neonSlug: "lansforsakringar-digital-design", kind: "project" },
  { client: "KLM", oldSlug: "klm", neonSlug: "klm-airlines", kind: "project" },
  { client: "Backbase", oldSlug: "backbase", neonSlug: "backbase-banking", kind: "project" },
  { client: "Steem", oldSlug: "steem", neonSlug: "steem-navii", kind: "project" },
  { client: "Instinctly/mrusta", oldSlug: "instinctly/mrusta", neonSlug: "mrusta-dubai", kind: "case" },
  { client: "Instinctly/abro", oldSlug: "instinctly/abro", neonSlug: "abro-bryggeri", kind: "case" },
  { client: "Instinctly/addictive-keys", oldSlug: "instinctly/addictive-keys-xln-audio", neonSlug: "addictive-keys-xln", kind: "case" },
  // Missing in Neon — external stubs / no-content / no slug.
  { client: "Furuboda", oldSlug: "furuboda", neonSlug: null, kind: "stub", note: "external, no cases" },
  { client: "Record Union", oldSlug: "record-union", neonSlug: null, kind: "stub", note: "external" },
  { client: "Burt", oldSlug: "burt", neonSlug: null, kind: "stub", note: "external" },
  { client: "Pod1", oldSlug: null, neonSlug: null, kind: "stub", note: "no slug in source — mint first" },
  { client: "Futurniture", oldSlug: null, neonSlug: null, kind: "stub", note: "no slug in source — mint first" },
  { client: "Hyper Island", oldSlug: null, neonSlug: null, kind: "stub", note: "no slug in source — mint first" },
  { client: "Drumedar", oldSlug: null, neonSlug: null, kind: "stub", note: "no slug in source — mint first" },
  { client: "Loopia", oldSlug: null, neonSlug: null, kind: "stub", note: "no slug in source — mint first" },
  { client: "Instinctly/actic", oldSlug: "instinctly/actic", neonSlug: null, kind: "stub", note: "no content in source" },
  { client: "Instinctly/resrobot", oldSlug: "instinctly/resrobot", neonSlug: null, kind: "stub", note: "no content in source" },
]

async function findProject(slug) {
  const url = `${API}/projects?where[slug][equals]=${encodeURIComponent(slug)}&depth=0&limit=1`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${res.status} for ${slug}`)
  const j = await res.json()
  return j.docs && j.docs[0] ? j.docs[0] : null
}

async function aboutGlobalExists() {
  const res = await fetch(`${API}/globals/about?depth=0`)
  // 404 (or a 200 with no real data) => missing.
  if (res.status === 404) return false
  if (!res.ok) return false
  const j = await res.json().catch(() => null)
  return !!(j && (j.content || j.timeline || j.name))
}

function pad(s, n) {
  s = String(s ?? "")
  return s.length >= n ? s.slice(0, n) : s + " ".repeat(n - s.length)
}

async function main() {
  console.log(`\nDRY RUN — non-destructive. Reading ${API}. Writes nothing.\n`)
  console.log(pad("OLD SUBJECT", 30), pad("→ NEON SLUG", 34), pad("VERDICT", 22), "NOTE")
  console.log("-".repeat(120))

  const counts = { skip: 0, merge: 0, create: 0, conflict: 0, error: 0 }

  for (const item of PLAN) {
    let verdict, note = item.note || ""
    try {
      if (!item.neonSlug) {
        verdict = "MISSING → CREATE"
        counts.create++
      } else {
        const doc = await findProject(item.neonSlug)
        if (!doc) {
          verdict = "MISSING → CREATE"
          counts.create++
        } else {
          const blocks = Array.isArray(doc.contentBlocks) ? doc.contentBlocks.length : 0
          if (item.kind === "case") {
            if (blocks > 0) {
              verdict = `EXISTS (${blocks} blocks) → SKIP`
              note = note ? `${note}; has content, do NOT overwrite` : "has content, do NOT overwrite"
              counts.conflict++
            } else {
              verdict = "EXISTS, empty → MERGE"
              counts.merge++
            }
          } else {
            verdict = `EXISTS (${blocks} blocks) → SKIP`
            counts.skip++
          }
        }
      }
    } catch (e) {
      verdict = "ERROR"
      note = e.message
      counts.error++
    }
    console.log(pad(item.client, 30), pad(item.neonSlug || "—", 34), pad(verdict, 22), note)
  }

  console.log("-".repeat(120))
  const about = await aboutGlobalExists().catch(() => false)
  console.log(pad("About PAGE (global)", 30), pad("globals/about", 34),
    pad(about ? "EXISTS → SKIP" : "MISSING → CREATE", 22),
    about ? "" : "needs new `about` global + additive SQL (push:false)")

  console.log(`\nSummary: ${counts.skip} skip · ${counts.merge} merge-candidate · ${counts.create} create · ${counts.conflict} conflict(has content) · ${counts.error} error`)
  console.log("Destructive writes this run: 0 (dry run). Re-run with a real --apply pass only after review.\n")
}

main().catch((e) => { console.error("Dry run failed:", e.message); process.exit(1) })
