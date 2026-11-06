---
title: "Signal Over Noise: Measuring Threat Intel Quality"
date: "2026-10-05"
excerpt: "Most threat feeds produce volume, not value. Four metrics to tell the difference."
tags: ["threat-intel", "metrics"]
---

Feed vendors compete on indicator counts. Your SOC competes on analyst hours.
Those incentives don't align.

## Metrics that matter

- **Actioned rate** — what fraction of indicators led to a detection, block,
  or investigation? Below ~5%, the feed is noise.
- **Lead time** — did the intel arrive before or after public sources?
- **Overlap** — how much of the feed duplicates what you already get free?
- **Context depth** — does each indicator tell you *why* it matters to *you*?

## The feed-forward test

Before paying for a feed, ask: "What will this let us do that we can't do
now?" If the answer is "have more indicators," keep looking.
