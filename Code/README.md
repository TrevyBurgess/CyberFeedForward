# CyberFeedForward

Multi-page responsive marketing/blog site built with **Next.js 16** (App Router,
Cache Components), **TypeScript**, and **Tailwind CSS 4**. Tested with
**Playwright**, deployed on **Vercel**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command              | Description                                  |
| -------------------- | -------------------------------------------- |
| `npm run dev`        | Start the dev server                         |
| `npm run build`      | Production build                             |
| `npm run start`      | Serve the production build                   |
| `npm run lint`       | ESLint                                       |
| `npm run test`       | Playwright e2e tests (auto-starts dev server)|
| `npm run test:install` | Install the Chromium test browser          |
| `npm run test:report`  | Open the last Playwright HTML report       |

## Project structure

```
src/
  app/            # Routes: /, /about, /services, /blog, /blog/[slug], /contact
  components/     # Header (responsive nav), footer, contact form, etc.
  lib/
    site.ts       # Site config: name, nav, URL, contact email
    cms/          # Content layer — see below
content/posts/    # Markdown posts (frontmatter: title, date, excerpt, tags)
tests/            # Playwright e2e specs
```

## Content layer (headless CMS)

Pages never touch storage directly — they go through the `CmsClient`
interface in `src/lib/cms/`:

- **Now**: `LocalCmsClient` reads Markdown files from `content/posts/`.
- **Later**: implement `CmsClient` against Sanity, Contentful, Strapi, etc.
  and swap the client in `src/lib/cms/index.ts`. No page changes needed.

Posts need `title`, `date` (ISO), and `excerpt` frontmatter; `tags` and
`draft: true` are optional.

## Testing

```bash
npm run test:install   # one-time: download Chromium
npm test               # run all specs on desktop + mobile viewports
```

Tests cover page loads/navigation, the mobile menu, blog rendering, the 404
page, and the contact form.

## Deployment (Vercel)

The repo includes `vercel.json`. To deploy:

1. Push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new)
   (select this directory as the project root), or run `npx vercel` here.
2. Set `NEXT_PUBLIC_SITE_URL` to your production domain (see `.env.example`).

`sitemap.xml` and `robots.txt` are generated from `src/app/sitemap.ts` and
`src/app/robots.ts`.
