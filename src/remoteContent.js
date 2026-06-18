/**
 * Remote content sourced from the live Payload CMS (https://new.daniellauding.se/api),
 * fetched at build time by scripts/fetch-payload-content.mjs into data/payload-content.json.
 *
 * This replaces the hand-maintained `constant.js` for the data that maps cleanly:
 * personal info, work-list metadata, clients, experience, education, skills.
 *
 * Deep case-study content (Payload `contentBlocks`) is a different model from the old
 * `section → groups → items` DSL and is kept raw on each work item for a future renderer.
 */
import data from "./data/payload-content.json";

export const personal = data.personal;
export const clients = data.clients;
export const experience = data.experience;
export const education = data.education;
export const skills = data.skills;

/** Work items (case-card metadata + raw contentBlocks). */
export const work = data.work;

/** `about`-shaped convenience object, mirroring the old constant.js `about` keys we can fill. */
export const about = {
  name: personal.name,
  email: personal.email,
  hero: personal.title,
  description: personal.bio,
  roles: personal.roles,
  tools: personal.tools,
  status: personal.status,
  location: personal.location,
  social: personal.socialLinks,
  // Career timeline derived from the Payload `experience` collection.
  timeline: experience.map((e) => ({
    id: e.id,
    date: e.period,
    title: `${e.title}${e.company ? ` · ${e.company}` : ""}`,
    text: e.description,
  })),
};

/** Source URL the content was fetched from (for debugging / display). */
export const source = data.fetchedFrom;

const remoteContent = { personal, about, work, clients, experience, education, skills, source };
export default remoteContent;
