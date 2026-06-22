#!/usr/bin/env node
/**
 * Seed the Payload `about` global in Neon with content sourced from existing CMS data
 * (personal_info, experience) + a curated skills list. Idempotent: clears the about
 * global's rows first, then re-inserts. Leaves the `content` blocks empty (sections can
 * be added in the admin or a later pass).
 *
 * IMPORTANT: uses the Neon DIRECT endpoint (not the -pooler one) to avoid leaking
 * session settings across pooled connections. Plain parameterized INSERTs only.
 *
 *   node migration/seed-about.mjs
 */
import { createRequire } from 'node:module'
const require = createRequire('/Users/daniellauding/Work/internal/nextjs-portfolio/')
const { Client } = require('pg')

const DIRECT =
  process.env.NEON_DIRECT ||
  'postgresql://neondb_owner:npg_PGmd8o1kOHtL@ep-old-bread-aglglzib.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require'

function lexicalToText(node) {
  if (!node || typeof node !== 'object') return typeof node === 'string' ? node : ''
  if (typeof node.text === 'string') return node.text
  const children = node.children || node.root?.children || []
  return children.map(lexicalToText).join(node.type === 'paragraph' ? '\n\n' : '')
}

// Curated skills with category (enum: design|development|software) + rank 1-5.
const SKILLS = [
  ['design', 'Product Design', 5],
  ['design', 'UX/UI Design', 5],
  ['design', 'Design Systems', 5],
  ['design', 'Figma', 5],
  ['development', 'React', 4],
  ['development', 'TypeScript', 4],
  ['development', 'Next.js', 4],
  ['development', 'React Native', 3],
  ['software', 'Cursor', 5],
  ['software', 'AI Prototyping', 4],
]

async function main() {
  const c = new Client({ connectionString: DIRECT })
  await c.connect()
  try {
    // Source content from existing CMS data
    const pi = (await c.query('select name, email, bio from personal_info limit 1')).rows[0] || {}
    const description = lexicalToText(pi.bio).slice(0, 1200)
    const exp = (await c.query('select company, title, period from experience order by id')).rows

    await c.query('BEGIN')
    // Clean slate for the about global
    await c.query('DELETE FROM about_timeline')
    await c.query('DELETE FROM about_skills')
    await c.query('DELETE FROM about')

    // The single global row (id = 1)
    await c.query(
      `INSERT INTO about (id, name, email, description, created_at, updated_at)
       VALUES (1, $1, $2, $3, now(), now())`,
      [pi.name || 'Daniel Lauding', pi.email || 'daniel@lauding.se', description]
    )

    // Timeline from the experience collection
    let order = 1
    for (const e of exp) {
      await c.query(
        `INSERT INTO about_timeline (_order, _parent_id, id, date, title, text)
         VALUES ($1, 1, gen_random_uuid()::text, $2, $3, $4)`,
        [order++, e.period || '', `${e.title}${e.company ? ` · ${e.company}` : ''}`, '']
      )
    }

    // Curated skills
    order = 1
    for (const [category, name, rank] of SKILLS) {
      await c.query(
        `INSERT INTO about_skills (_order, _parent_id, id, category, name, rank)
         VALUES ($1, 1, gen_random_uuid()::text, $2, $3, $4)`,
        [order++, category, name, rank]
      )
    }

    await c.query('COMMIT')

    // Verify
    const about = (await c.query('select name, email, length(description) dlen from about')).rows[0]
    const tl = (await c.query('select count(*)::int n from about_timeline')).rows[0].n
    const sk = (await c.query('select count(*)::int n from about_skills')).rows[0].n
    console.log('Seeded about global:')
    console.log('  name:', about.name, '| email:', about.email, '| description chars:', about.dlen)
    console.log('  timeline rows:', tl, '| skills rows:', sk)
    console.log('  content blocks: 0 (add sections in admin or a later pass)')
  } catch (err) {
    await c.query('ROLLBACK').catch(() => {})
    throw err
  } finally {
    await c.end()
  }
}

main().catch((e) => {
  console.error('Seed failed:', e.message)
  process.exit(1)
})
