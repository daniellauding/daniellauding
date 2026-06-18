#!/usr/bin/env node
/**
 * Fetch content from the live Payload CMS and write it to src/data/payload-content.json.
 *
 * Runs server-side (Node), so it is NOT subject to browser CORS — works today against
 * the public API at https://new.daniellauding.se/api. Re-run to refresh content.
 *
 *   node scripts/fetch-payload-content.mjs
 *   PAYLOAD_URL=http://localhost:3003 node scripts/fetch-payload-content.mjs
 */
import { writeFile, mkdir } from "node:fs/promises"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const BASE = (process.env.PAYLOAD_URL || "https://new.daniellauding.se").replace(/\/$/, "")
const API = `${BASE}/api`
const OUT = resolve(dirname(fileURLToPath(import.meta.url)), "../src/data/payload-content.json")

/** Flatten a Lexical rich-text value into plain text. */
function lexicalToText(node) {
  if (!node || typeof node !== "object") return ""
  if (typeof node.text === "string") return node.text
  const children = node.children || node.root?.children || []
  return children.map(lexicalToText).join(node.type === "paragraph" ? "\n" : "")
}

async function getJSON(path) {
  const res = await fetch(`${API}/${path}`)
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for /${path}`)
  return res.json()
}

async function getAll(collection, { depth = 1 } = {}) {
  const out = []
  let page = 1
  // Payload paginates; loop until we've collected everything.
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const j = await getJSON(`${collection}?limit=100&page=${page}&depth=${depth}`)
    out.push(...(j.docs || []))
    if (!j.hasNextPage) break
    page += 1
  }
  return out
}

function tagList(tags) {
  return (tags || []).map((t) => (typeof t === "string" ? t : t.tag)).filter(Boolean)
}

async function main() {
  console.log(`Fetching Payload content from ${API} …`)

  const [personal, projects, clients, experience, education, skills] = await Promise.all([
    getJSON("globals/personal-info?depth=1"),
    getAll("projects", { depth: 2 }),
    getAll("clients", { depth: 1 }),
    getAll("experience", { depth: 0 }),
    getAll("education", { depth: 0 }),
    getAll("skills", { depth: 0 }),
  ])

  // Drop obvious duplicate "… - Copy" / "… - Copy2" projects, keep canonical slugs.
  const realProjects = projects.filter(
    (p) => !/ - Copy\d*$/i.test(p.slug || "") && !/ - Copy\d*$/i.test(p.name || "")
  )

  const data = {
    fetchedFrom: API,
    // Stamp added by the caller (CRA build) — kept null here to stay deterministic.
    personal: {
      name: personal.name,
      firstName: personal.firstName,
      lastName: personal.lastName,
      title: personal.title,
      subtitle: personal.subtitle,
      status: personal.status,
      studio: personal.studio,
      location: personal.location,
      email: personal.email,
      phone: personal.phone,
      website: personal.website,
      bio: personal.bio,
      avatar: personal.avatar?.url || null,
      tools: (personal.tools || []).map((t) => t.tool || t).filter(Boolean),
      roles: (personal.roles || []).map((r) => r.role || r).filter(Boolean),
      socialLinks: personal.socialLinks || {},
    },
    // Work list (case-card metadata). Deep case content (contentBlocks) kept raw for later.
    work: realProjects.map((p) => ({
      id: p.id,
      client: p.name,
      slug: p.slug,
      role: p.type,
      date: p.date,
      location: p.location,
      url: p.url,
      featured: !!p.featured,
      color: p.color,
      description: p.description,
      tags: tagList(p.tags),
      image: p.image?.url || p.imageUrl || null,
      contentBlocks: p.contentBlocks || [],
    })),
    clients: clients.map((c) => ({
      id: c.id,
      name: c.name,
      url: c.url,
      logo: c.logo?.url || null,
      order: c.order ?? null,
    })),
    experience: experience.map((e) => ({
      id: e.id,
      title: e.title,
      company: e.company,
      companyUrl: e.companyUrl,
      period: e.period,
      description: lexicalToText(e.description),
    })),
    education: education.map((e) => ({
      id: e.id,
      degree: e.degree,
      school: e.school,
      year: e.year,
    })),
    skills: skills.map((s) => ({ id: s.id, name: s.name, category: s.category })),
  }

  await mkdir(dirname(OUT), { recursive: true })
  await writeFile(OUT, JSON.stringify(data, null, 2))
  console.log(
    `Wrote ${OUT}\n  personal: ${data.personal.name}\n  work: ${data.work.length} (of ${projects.length} incl. copies)\n  clients: ${data.clients.length}  experience: ${data.experience.length}  education: ${data.education.length}  skills: ${data.skills.length}`
  )
}

main().catch((err) => {
  console.error("Failed to fetch Payload content:", err.message)
  process.exit(1)
})
