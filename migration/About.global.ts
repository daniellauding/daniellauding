/**
 * Payload global for the /about page — the ONE piece of old-portfolio content
 * that has no equivalent in Neon yet (confirmed by scripts/migrate-dry-run.mjs).
 *
 * READY-TO-APPLY ARTIFACT. Copy to: nextjs-portfolio/src/globals/About.ts and register
 * it in payload.config.ts (globals: [PersonalInfo, SiteSettings, About]). Then create the
 * migration (push:false — see migration/RUNBOOK.md) and seed. Purely additive: it cannot
 * overwrite `projects` or `personal-info`.
 *
 * Identity/socials already live in `personal-info` — this global owns only the page
 * sections + timeline + skills (see docs/about-content.md for the source content).
 */
import type { GlobalConfig } from 'payload'

// Shared button sub-field, reused by section blocks.
const buttons = {
  name: 'buttons',
  type: 'array' as const,
  fields: [
    { name: 'text', type: 'text' as const, required: true },
    { name: 'variant', type: 'select' as const, defaultValue: 'primary', options: ['primary', 'secondary', 'link'] },
    { name: 'type', type: 'select' as const, defaultValue: 'internal', options: ['internal', 'external', 'modal', 'scroll'] },
    { name: 'href', type: 'text' as const },
  ],
}

export const About: GlobalConfig = {
  slug: 'about',
  access: { read: () => true },
  admin: { group: 'Content' },
  fields: [
    // ── Header / identity (mirrors about[0] header; personal-info also has these) ──
    { name: 'name', type: 'text', defaultValue: 'Daniel Lauding' },
    { name: 'email', type: 'email' },
    { name: 'description', type: 'textarea', label: 'Lead / meta description' },
    { name: 'logo', type: 'upload', relationTo: 'media' },
    { name: 'logoMov', type: 'upload', relationTo: 'media', label: 'Animated logo (video)' },
    { name: 'hero', type: 'upload', relationTo: 'media', label: 'Hero portrait' },

    // ── Page sections (ordered blocks) ──
    {
      name: 'content',
      type: 'blocks',
      labels: { singular: 'Section', plural: 'Sections' },
      blocks: [
        {
          slug: 'textSection',
          fields: [
            { name: 'anchorName', type: 'text' },
            { name: 'title', type: 'text' },
            { name: 'text', type: 'textarea' },
            buttons,
          ],
        },
        {
          slug: 'textWithImage',
          fields: [
            { name: 'anchorName', type: 'text' },
            { name: 'title', type: 'text' },
            { name: 'text', type: 'textarea' },
            { name: 'images', type: 'array', fields: [{ name: 'image', type: 'upload', relationTo: 'media' }] },
            { name: 'imagePosition', type: 'select', defaultValue: 'left', options: ['left', 'right'] },
            buttons,
          ],
        },
        {
          slug: 'gallery',
          fields: [
            { name: 'variant', type: 'select', defaultValue: 'grid', options: ['grid', 'plektrum'] },
            { name: 'images', type: 'array', fields: [{ name: 'image', type: 'upload', relationTo: 'media' }] },
          ],
        },
        {
          slug: 'teaserGroup',
          fields: [
            { name: 'anchorName', type: 'text' },
            {
              name: 'teasers',
              type: 'array',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'subtitle', type: 'text' },
                { name: 'date', type: 'text' },
                { name: 'description', type: 'textarea' },
                { name: 'image', type: 'upload', relationTo: 'media' },
                { name: 'tags', type: 'array', fields: [{ name: 'tag', type: 'text' }] },
                buttons,
              ],
            },
          ],
        },
        {
          slug: 'philosophy',
          fields: [
            { name: 'anchorName', type: 'text' },
            {
              name: 'cards',
              type: 'array',
              fields: [
                { name: 'iconName', type: 'text' },
                { name: 'title', type: 'text' },
                { name: 'text', type: 'textarea' },
              ],
            },
          ],
        },
        {
          slug: 'cta',
          fields: [
            { name: 'anchorName', type: 'text' },
            { name: 'title', type: 'text' },
            { name: 'text', type: 'textarea' },
            buttons,
          ],
        },
      ],
    },

    // ── Career timeline (also derivable from the `experience` collection) ──
    {
      name: 'timeline',
      type: 'array',
      fields: [
        { name: 'date', type: 'text' },
        { name: 'title', type: 'text' },
        { name: 'text', type: 'textarea' },
      ],
    },

    // ── Skills with 1–5 ranks ──
    {
      name: 'skills',
      type: 'array',
      fields: [
        { name: 'category', type: 'select', options: ['design', 'development', 'software'] },
        { name: 'name', type: 'text' },
        { name: 'rank', type: 'number', min: 1, max: 5 },
      ],
    },
  ],
}

export default About
