---
title: "Redesigning my website using agents"
date: 2026-04-14
description: "I had wanted to redesign this site for years, but recent agent tools finally made the boring parts easy enough for me to finish it."
tags: ["meta", "astro", "claude", "codex", "web"]
---

I had wanted to redesign this website for a long time. The old one had basically become a pile of postponed intentions. It was a Jekyll site I had not meaningfully touched since 2021: Bootstrap 3, jQuery 1.11, a Freelancer theme fork, and a `.ml` domain that somehow still works.

The annoying part is that I had already tried to redo it twice and gave up both times. I also wanted to add more content and start blogging more consistently, but I never found the time or motivation to push through all the boring parts: migration, cleanup, rewriting old content, rebuilding the structure, fixing styles, and getting everything deployed again.

What finally changed is that agent tools got good enough that the boring part stopped being the blocker. With setups built around models like Opus 4.6 and GPT-5.4, it became realistic to offload the repetitive implementation work and keep my attention on the parts I actually cared about.

So I finally rebuilt it. The stack is [Astro 6.1](https://astro.build/) with Tailwind CSS v4, deployed to GitHub Pages via Actions. Clean content collections for projects and blog posts, an RSS feed, and no more jQuery.

## Using Claude to build it

The main thing I did differently this time was using [Claude Code](https://claude.ai/code), Anthropic's CLI tool, for most of the implementation. I started in plan mode: described what I wanted, answered a few questions about CSS preferences and design direction, and got back a detailed spec before a single file was touched.

The actual build — scaffolding Astro, migrating 13 project posts and 2 old blog posts, creating the layout components, and configuring the GitHub Actions deploy pipeline — took a single session. Claude handled the Astro 6 content layer API quirks (`src/content.config.ts`, `id` instead of `slug`, the new `render()` import) without me having to look anything up.

What worked well:
- The planning phase caught ambiguities early (how to handle the old portfolio projects, color scheme, contact form vs. no form)
- Component-by-component generation kept things reviewable
- It caught its own mistakes, like a wrong content config path and a `slug` to `id` migration issue, and fixed them without prompting

What still needed human judgment:
- The actual content. Claude could reformat the old Jekyll frontmatter, but the project descriptions and about page text needed rewriting with current context
- Design taste. The generated dark theme is clean but conservative, and I will probably keep tuning colors and spacing over time

## Second pass with Codex

That second pass happened almost immediately. I used Codex to do the part I had deferred: sharpen the homepage positioning, bring back my portrait, add project screenshots from the old site, turn the project cards into actual case-study pages, fix a few metadata issues, and rewrite a lot of the weaker copy.

The most useful change was editorial, not technical. Several older projects were still described like generic portfolio placeholders. After the second pass they read more like what they actually were: thesis projects, research prototypes, paid work, or hackathon experiments, each with the right level of specificity and the right links.

## The result

The site now feels like something I will actually maintain. Writing a new blog post is creating a `.md` file in `src/content/blog/` and moving on. The old "Recent Interests" section (R3 Corda, Kubernetes, Algorand, from 2021) is gone. The projects are now proper case studies instead of modal popups or one-line placeholders, which makes the site much closer to an actual portfolio than a cleaned-up archive.

More importantly, the tools changed my motivation. I had wanted a site where I could publish more often, but I kept postponing the work because every update felt heavier than it should have. The new setup is simpler, and delegating repetitive tasks makes it easier to focus on writing and reviewing the final result.

I also plan to write about another recent experiment: using local models for coding and day-to-day work. I am particularly interested in how privacy, latency, and capability affect their usefulness for real tasks.
