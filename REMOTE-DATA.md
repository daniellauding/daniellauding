# Remote content from Payload CMS

This branch (`feat/remote-payload-data`) sources content from the **live Payload CMS**
instead of the hand-maintained `src/constant.js`.

## How it works

```
Payload CMS (Neon Postgres + Cloudinary)
  └─ public REST API: https://new.daniellauding.se/api
       └─ scripts/fetch-payload-content.mjs   (Node, build-time — no browser CORS)
            └─ src/data/payload-content.json   (generated, committed)
                 └─ src/remoteContent.js        (import { about, work, clients, … })
```

- The fetch runs **server-side at build time**, so it is not blocked by browser CORS.
- No secrets in the frontend — it only reads the public API URL. Cloudinary / Neon /
  Payload secret stay on the CMS server.
- `npm run build` auto-refreshes via the `prebuild` hook. Refresh manually with
  `npm run fetch:content`. Point at a different server with `PAYLOAD_URL=…`.

## What maps cleanly (done)

`personal-info`, `experience`, `education`, `skills`, `clients`, and the **work list**
(client/role/date/url/tags/featured per project). 25 projects, 29 clients, 7 experience,
75 skills — verified live.

## What does NOT map yet

Deep **case-study content**. Payload stores it as `contentBlocks` (18 block types), which
is a different model from the old `section → groups → items` DSL the CRA case components
render. Each work item keeps its raw `contentBlocks` in the JSON, but rendering them in the
old components needs a block renderer (the Next.js portfolio already has one). Until then,
case bodies fall back to `constant.js`.

## Remaining to go fully live (runtime instead of build-time)

To fetch in the browser at runtime, the Payload server must send
`Access-Control-Allow-Origin` for this site's origin — add the origin to `cors` in
`payload.config.ts` and redeploy. Today the API returns allow-headers/allow-methods but not
allow-origin, so build-time fetch is used.

## Known data note

The CMS has duplicate `… - Copy` / `… - Copy2` projects; the fetch script filters them out.
Some project `name`s include a descriptive suffix (e.g. "Qasa - Rental Matching Platform").
