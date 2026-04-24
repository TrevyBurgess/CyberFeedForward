# CyberFeedForward
Web site for CyberFeedForward

- Create the scaffolding for a multi-page responsive web site. Use Next.js + TypeScript + Tailwind CSS + a headless CMS if needed + Playwright for testing + Vercel for deployment. Name the app CyberFeedForward

## Local development

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## E2E tests (Playwright)

```bash
npm run test:e2e
```

## Content (headless CMS optional)

Content is loaded through a small adapter in `src/lib/content`.

- Default provider: `CMS_PROVIDER=local`
- Local content lives in `src/content/posts.ts`

To swap to a headless CMS later, add a new provider that implements the `ContentClient` interface.

## Deploy (Vercel)

This repo is ready to deploy on Vercel.

- Import the GitHub repo in Vercel
- Framework preset: Next.js
- Environment variables:
  - `CMS_PROVIDER` (optional, defaults to `local`)
