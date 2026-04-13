---
title: "Redesigning my website with Claude"
date: 2026-04-14
description: "After five years without touching it, I rebuilt this site from scratch using Astro 6 — with Claude doing most of the heavy lifting."
tags: ["meta", "astro", "claude", "web"]
---

My previous website was a Jekyll site I hadn't meaningfully touched since 2021. Bootstrap 3, jQuery 1.11, a Freelancer theme fork, and a `.ml` domain that somehow still works. It did the job, but every time I thought about adding a blog post I had to fight through five years of accumulated dust first.

So I finally rebuilt it. The stack is [Astro 6.1](https://astro.build/) with Tailwind CSS v4, deployed to GitHub Pages via Actions. Clean content collections for projects and blog posts, an RSS feed, and no more jQuery.

## Using Claude to build it

The interesting part of this rebuild was that I used [Claude Code](https://claude.ai/code) — Anthropic's CLI tool — to do most of the implementation. I started in plan mode: described what I wanted, answered a few questions about CSS preferences and design direction, and got back a detailed spec before a single file was touched.

The actual build — scaffolding Astro, migrating 13 project posts and 2 old blog posts, creating all the layout components, configuring the GitHub Actions deploy pipeline — took a single session. Claude handled the Astro 6 content layer API quirks (the `src/content.config.ts` move, `id` instead of `slug`, the new `render()` import) without me having to look anything up.

What worked well:
- The planning phase caught ambiguities early (how to handle the old portfolio projects, color scheme, contact form vs. no form)
- Component-by-component generation kept things reviewable
- It caught its own mistakes — a wrong content config path, a `slug` → `id` migration issue — and fixed them without prompting

What still needed human judgment:
- The actual content. Claude could reformat the old Jekyll frontmatter, but the project descriptions and about page text needed rewriting with current context
- Design taste. The generated dark theme is clean but deliberately conservative — I'll tune colors and spacing over time

## The result

The site now feels like something I'll actually maintain. Writing a new blog post is creating a `.md` file in `src/content/blog/` — nothing else. The old "Recent Interests" section (R3 Corda, Kubernetes, Algorand — from 2021) is gone. The 13 projects are still there but as compact cards rather than modal popups.

The tools made the migration fast enough that I had no excuse not to do it.
