# Stashin website

Official marketing and legal site for [Stashin](https://stashin.app), the local-first Android stash (`com.mowaisumer.stashin`).

The design follows **Option A: Warm Editorial Minimal** — cream canvas, espresso ink, terracotta italics, Playfair Display headings, and Nunito UI. The phone preview on the home page filters saved cards when you choose a folder.

## Pages

- `/` — landing page (hero, features, how it works, privacy architecture, Free vs Pro, extension roadmap, FAQ)
- `/privacy/` — Play Data safety and Google `drive.appdata` privacy policy
- `/terms/` — terms of service, including Pro pricing and refunds
- `/download/` — Google Play install path and direct APK notes for v1.0

## Develop

```bash
npm install
npm run dev
```

## Verify

```bash
npm run verify
```

That runs the typecheck, ESLint, unit tests, a static `next build` (`output: 'export'`), and a smoke check of the `out/` HTML.

`npm run build` writes the static site to `out/`.

## Deploy

The site is a fully static export. Point the host at `out/` after `npm run build`.

| Host | Build command | Output |
| --- | --- | --- |
| Vercel | `npm run build` | `out` |
| Cloudflare Pages | `npm run build` | `out` |
| Netlify | `npm run build` | `out` |
| GitHub Pages | `.github/workflows/deploy-pages.yml` on `main` | `out` |

GitHub Pages deploys from `main` (or a manual workflow run). The workflow sets `NEXT_PUBLIC_BASE_PATH` from `actions/configure-pages`, so project-site URLs such as `/stashin-app-website/` prefix assets and routes. `public/.nojekyll` keeps Jekyll from skipping `_next/`. Leave `NEXT_PUBLIC_BASE_PATH` unset for a host at the domain root, including `https://stashin.app`.

Canonical URLs use `https://stashin.app`. Trailing slashes are enabled so `/privacy/` maps cleanly on static hosts.

Google Play links use `https://play.google.com/store/apps/details?id=com.mowaisumer.stashin`. The site does not ship an APK binary. The “Direct APK · v1.0” button opens `/download/#apk`, which tells visitors to confirm package `com.mowaisumer.stashin` and to use Play for the official build.

Support: `support@stashin.app`. Privacy: `privacy@stashin.app`.
