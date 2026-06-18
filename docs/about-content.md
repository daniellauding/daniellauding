# About Page Content

Source: `src/constant.js` → `about[0]`. This is a human-readable transcription of all content on the `/about` page, intended as the source of truth for migrating About into a CMS (Payload). Structural/DSL details (columns, gaps, classNames, grid positions) are intentionally flattened out — only the real words, media references, links and meaningful flags are kept.

---

## Header / Intro Fields

- **Name:** Daniel Lauding
- **Email:** daniel@lauding.se
- **Logo:** `/images/logo.svg`
- **Logo (video):** `/images/logoH.mov`
- **Hero image:** `/images/me.jpg`
- **Description (meta/lead):**
  > As a hands-on Lead Product Designer, I've turned ideas into successful ventures at Asteria for SMEs. Making music more accessible on Spotify and set up design systems for Länsförsäkringar, simplifying music release for artists across platforms.

---

## Content Sections

The page renders `content[]` as a vertical sequence of sections. Each section below is transcribed in order. Anchor-nav sections (those shown in the in-page navigation) are flagged.

### 1. Intro (`section: intro`)

- Anchor nav: no (anchor name: "Intro")
- Layout: full-screen hero

**Text:**
> Daniel Lauding dances through design and globe-trots with a creative beat, spinning prototypes and visions into digital realities wherever his laptop lands.

**Buttons:**
- "Read my story" — secondary, scrolls to `#experience`
- "Contact me" — primary, opens `contactModal`
- "Open for Work" — primary, opens `newProjectModal`

**Image (plektrum / guitar-pick gallery variant):**
- `/images/about/nomading-spain.jpg`
- `/images/about/nomading-spain2.jpg`
- `/images/about/young.jpg`
- `/images/about/workshoppin.jpg`
- `/images/about/cuba.jpg`
- `/images/about/cuba2.jpg`

---

### 2. Experience (`section: experience`)

- Anchor nav: yes (anchor name: "Experience")

**Image:** `/images/me.jpg` (rounded)

**Title:** Crafting Innovative Solutions

**Text:**
> Bringing over 12 years of experience in the tech industry, Daniel shapes user experiences and drives business growth with a focus on data and design thinking. With a background as a front end developer, his passion lies in crafting seamless and visually captivating products.

> He excels in building prototypes, refining user experiences, and developing comprehensive design systems across various industries including finance, fashion, and music.

---

### 3. Current (`section: current`)

- Anchor nav: yes (anchor name: "Current")

**Images:**
- `/images/about/me_asteria_swedbank.jpg` (rounded)
- `/images/about/me-asteria.png` (rounded)

**Text:**
> In his ongoing role at Asteria, where Daniel has been a pivotal co-founder and lead product designer for over 6 years, his collaborative ethos shines brightly.

> He's been instrumental in evolving initial concepts into crucial tools for SMEs. With his team, he's successfully tackled intricate design challenges, contributing to Asteria's growth.

> This includes playing a key role in securing funding rounds and forging new partnerships, marking significant achievements in the fintech and banking sectors across Scandinavia.

---

### 4. Asteria Teasers (`section: teasers-asteria`)

A row of three project teaser cards.

**Teaser 1**
- Title: Lead Product Designer & Co-Founder
- Subtitle: Smart Cash Flow – Asteria
- Date: 2017 – Present
- Description: Integrating cash flow management into everyday banking activities for small businesses
- Image: `/images/case/asteria/smartcashflow/screens/02.png` (alt: "Dashboard view - Main interface")
- Tags: UX, UI, Development
- Button: "View Project" → `/asteria/smart-cash-flow` (internal)

**Teaser 2**
- Title: Lead Product Designer
- Subtitle: Företagskollen – Swedbank
- Date: 2017 – Present
- Description: Integrating cash flow management into everyday banking activities for small businesses
- Image: `/images/case/asteria/foretagskollen/screens/01.png` (alt: "Dashboard view - Main interface")
- Tags: UX, UI, Development
- Button: "View Project" → `/asteria/foretagskollen` (internal)

**Teaser 3**
- Title: Lead Product Designer
- Subtitle: Fakturaportalen – PayEx
- Date: 2017 – Present
- Description: Integrating cash flow management into everyday banking activities for small businesses
- Image: `/images/case/asteria/payex/screens/01.png` (alt: "Dashboard view - Main interface")
- Tags: UX, UI, Development
- Button: "View Project" → `/asteria/invoice-portal-payex` (internal)

---

### 5. Past (`section: past`)

- Anchor nav: yes (anchor name: "Past")

**Text (Spotify / Record Union):**
> Driven by a passion for music, Daniel crafted a low-data solution for Spotify in Brazil, aiding the platform's expansion in emerging markets. The team conducted rapid testing with users in Brazilian favelas to refine designs and prototypes.

> Additionally, his work with Record Union streamlined the process of releasing music across multiple platforms.

**Text (Länsförsäkringar):**
> Led the design of a cross-platform, user-friendly design system for Länsförsäkringar, modernizing their digital presence while maintaining their unique local identity. The system, still in active use today, transformed the user experience across their website, mobile app, and other platforms.

> This work contributed to Länsförsäkringar winning Best App and Web awards, ensuring design consistency, improving accessibility, and empowering multiple teams to successfully launch the updated visual identity. The project had a lasting impact across all digital touchpoints.

**Teaser — Spotify**
- Title: Product Design Consultant
- Subtitle: Spotify
- Date: 2017
- Description: Working closely with the squad and product owners to optimize product value for existing markets with growth potential. Mission for emergin markets focus on latin america.
- Image: `/images/about/spotify.png`
- Button: "View Project" → `/spotify` (internal)

**Teaser — Länsförsäkringar**
- Title: Art Director Consultant
- Subtitle: Länsförsäkringar
- Date: 2017
- Description: Working closely with the squad and product owners to optimize product value for existing markets with growth potential. Mission for emergin markets focus on latin america.
- Image: `/images/about/lf.jpg`
- Button: "View Project" → `/spotify` (internal) *(note: link points to /spotify in source)*

---

### 6. Design Philosophy (`section: design-philosophy`)

Three icon + title + text cards. (Anchor nav defined but commented out.)

**Card 1 — icon: `jobs-done`**
- Title: Hands-On Approach
- Text:
  > Daniel enjoys prototyping and easily moves between design and coding. He's detail-oriented, making sure his work is both organized and effective, using React and other front-end tools to get the job done.

**Card 2 — icon: `design-leadership`**
- Title: Design Leadership
- Text:
  > Daniel combines big-picture thinking with systematic detail, guiding designs to match project goals for total coherence and relevance.

**Card 3 — icon: `purposeful-innovation`**
- Title: Purposeful Innovation
- Text:
  > With a focus on meaningful outcomes, Daniel employs a data-driven approach to design, prioritizing user experience and business objectives to deliver measurable improvements.

---

### 7. Nomading (`section: nomading`)

(Anchor nav defined but commented out.)

**Images:**
- `/images/about/nomadcruise.jpg` (rounded)
- `/images/about/wifitribe.jpg` (rounded)

**Title:** Deeply involved in the digital nomad scene

**Text:**
> Daniel's journey into merging work with global exploration began at 22, with the first flight to a London project exhibition for Hyper Island. Vibrant roles within New York's fashion industry and Amsterdam's fintech sector followed.

> With experiences from over 49 countries, he is deeply involved in the digital nomad scene, participating in communities like WiFi Tribe and Nomad Cruise.

> Remote work harnesses his design and development skills while drawing inspiration from diverse cultures.

**Button:**
- "Trips" — link, external → https://nomadlist.com/@daniellauding

---

### 8. Available / Let's Collaborate (`section: available`)

- Anchor nav: yes (anchor name: "Let's Collaborate")

**Title:** Ready to Bring Ambitious Concepts to Life

**Text:**
> Ready to lead or dive into the details, Daniel brings a perfect blend of creativity and technical expertise to every project. If you're looking for a creative mind with a tech edge to bring your ambitious concepts to life, let's embark on this journey together.

**Buttons:**
- "Contact me" — primary, opens `contactModal`
- "Give me an offer" — primary, opens `newProjectModal`

---

### 9. Experiences (`section: experiences`)

(Heading-only section that introduces the timeline below. Anchor nav defined but commented out.)

**Title:** Experiences

---

## Timeline

The `timeline[]` entries (career/life timeline). Several are clearly placeholders / TODO notes carried over from development and should likely be cleaned during migration.

| Date | Title | Text |
|------|-------|------|
| 9 December 1986 | Im born | Born in Västerås, Sweden |
| 13 February 2023 | Im sitting in India learning how to make a timeline | Goal with this timeline is to be able to quickly see my career throughtout my professional career. Be able to click to view a project that is in this portfolio. |
| 14 February 2023 | TODO | ADD EXPERIENCES FROM LINKEDIN + PERSONAL GOALS + ACTIVE STATE + KLICK TO GO TO A CASE |
| 14 February 2023 | TODO | *(Lorem ipsum placeholder text)* |
| 14 February 2023 | TODO | *(Lorem ipsum placeholder text)* |
| 14 February 2023 | TODO | *(Lorem ipsum placeholder text)* |
| 14 February 2023 | TODO | *(Lorem ipsum placeholder text)* |
| 14 February 2023 | TODO | *(Lorem ipsum placeholder text)* |

> Note: Entries 3–7 share identical Lorem ipsum placeholder copy ("Nunc dignissim vel neque a sodales...") and a "TODO" title. Real content is only entries 0–2.

---

## Skills

Grouped into design / development / software, each with a rank (1–5).

**Design**
- User Experience — 5
- Figma — 5

**Development**
- HTML & CSS — 5
- React JS — 3
- Javascript — 2

**Software**
- Figma — 5
