---
title: "Secure by Design Is Cheaper Than Secure by Patch"
date: "2026-10-20"
excerpt: "Retrofitting security costs 10–30x more than building it in. Here's where teams get the highest leverage."
tags: ["architecture", "engineering"]
---

The economics of security are lopsided. A design flaw caught in review costs
an hour of discussion. The same flaw caught in production costs an incident.

## Highest-leverage decisions

Three early choices dominate your long-term security posture:

1. **Identity boundaries** — who can assume what role, and how those grants
   are issued and revoked.
2. **Data flows** — where sensitive data moves, rests, and gets logged.
3. **Dependency policy** — what third-party code you're willing to trust, and
   how you verify it.

## A practical starting point

Run a two-hour threat model on your most critical service. You'll find the
scary stuff is rarely the exotic stuff — it's the service account with
`*:*` permissions and the admin endpoint reachable from the internet.
