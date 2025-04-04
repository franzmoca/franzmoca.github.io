# Decision Log

This file records architectural and implementation decisions using a list format.
2025-04-04 03:12:54 - Log of updates made.

*

## Decision

* [2025-04-04 03:12:54] Initialize and use Memory Bank for project tracking.

## Rationale

* Maintain project context, track decisions, and manage progress effectively throughout the redesign process.

## Implementation Details

* Created core Memory Bank files: `productContext.md`, `activeContext.md`, `progress.md`, `decisionLog.md`, `systemPatterns.md`.


## Decision

* [2025-04-04 03:22:49] Use Next.js (with static export) as the framework for the website redesign.
* [2025-04-04 03:22:49] Implement blog post tagging/categorization.

## Rationale

* Next.js provides a modern React-based development experience, excellent performance (static export), and allows for future expansion to dynamic features/server-side rendering if hosting changes (e.g., Vercel).
* Blog tagging improves content organization and user navigation.

## Implementation Details

* Initialize a new Next.js project.
* Structure the project using Next.js conventions (pages router or app router - TBD).
* Plan for content storage (e.g., Markdown/MDX) that supports metadata for tags.
* Configure static export (`next export`) for GitHub Pages compatibility.

---


## Decision

* [2025-04-04 03:32:02] Switch MDX processing library from Contentlayer to `next-mdx-remote`.

## Rationale

* Contentlayer (v0.3.4) is incompatible with the project's Next.js version (v15.2.4).
* `next-mdx-remote` is actively maintained by Vercel and compatible with Next.js 15.

## Implementation Details

* Install `next-mdx-remote`.
* Configure MDX processing using `next-mdx-remote` utilities.

---

---