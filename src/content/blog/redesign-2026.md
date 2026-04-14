---
title: "Redesigning my website using agents"
date: 2026-04-14
description: "I had wanted to redesign this site for years, but only recent agent workflows finally made the tedious parts easy enough for me to finish it."
tags: ["meta", "astro", "claude", "codex", "web"]
---

I had wanted to redesign this website for a long time, mostly because the old one had become a graveyard of postponed intentions. It was a Jekyll site I had not meaningfully touched since 2021: Bootstrap 3, jQuery 1.11, a Freelancer theme fork, and a `.ml` domain that somehow still works.

The annoying part is that I had already tried to redo it twice and gave up both times. I also wanted to add more content and start blogging more consistently, but I never found the time or motivation to push through all the boring parts: migration, cleanup, rewriting old content, rebuilding the structure, fixing styles, and getting everything deployed again.

What finally changed is that agent-based workflows got good enough that the tedious part stopped being the blocker. With harnesses and models like Opus 4.6 and GPT-5.4, it became realistic to offload the repetitive implementation work and keep my attention on the parts I actually cared about.

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

## Second pass with Codex

That second pass happened almost immediately. I used Codex to do the part I had deferred: sharpen the homepage positioning, bring back my portrait, add project screenshots from the old site, turn the project cards into actual case-study pages, fix a few metadata issues, and rewrite a lot of the weaker copy.

The most useful change was editorial, not technical. Several older projects were still described like generic portfolio placeholders. After the second pass they read more like what they actually were: thesis projects, research prototypes, paid work, or hackathon experiments, each with the right level of specificity and the right links.

## The result

The site now feels like something I'll actually maintain. Writing a new blog post is creating a `.md` file in `src/content/blog/` and moving on. The old "Recent Interests" section (R3 Corda, Kubernetes, Algorand — from 2021) is gone. The projects are now proper case studies instead of modal popups or one-line placeholders, which makes the site much closer to an actual portfolio than a cleaned-up archive.

More importantly, the tools changed my motivation. I had wanted a site where I could publish more often, but I kept postponing the work because every update felt heavier than it should have. Now that the setup is simpler and the tedious parts are easier to delegate, I am much more likely to actually use it.
