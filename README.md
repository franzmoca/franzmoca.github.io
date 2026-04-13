# francescomoca.ml

Personal website and blog. Built with [Astro 6](https://astro.build/) and [Tailwind CSS v4](https://tailwindcss.com/), deployed to GitHub Pages.

## Stack

- **Framework**: Astro 6.1 (static output)
- **CSS**: Tailwind CSS v4
- **Content**: Astro Content Collections (Markdown / MDX)
- **Deployment**: GitHub Actions → GitHub Pages
- **PDF generation**: Puppeteer (for the CV)

## Local development

```bash
npm install
npm run dev        # start dev server at localhost:4321
npm run build      # build to dist/
npm run preview    # preview the built site
```

## Writing a blog post

Create a new `.md` or `.mdx` file in `src/content/blog/`:

```
src/content/blog/my-post.md
```

Required frontmatter:

```yaml
---
title: "Post title"
date: 2026-04-14
description: "One-sentence description shown in listings and meta tags."
tags: ["tag1", "tag2"]
---

Post content here...
```

Set `draft: true` to write without publishing. The post will appear at `/blog/my-post/`.

## Adding a project

Create a `.md` file in `src/content/projects/`:

```yaml
---
title: "Project name"
date: 2026-01-01
description: "One-liner for the project card."
tags: ["TypeScript", "React"]
featured: true          # show on home page
links:
  - label: "GitHub"
    url: "https://github.com/..."
---

Project description...
```

## Updating the CV

Edit `src/pages/cv.astro`, then regenerate the PDF:

```bash
npm run cv
```

This builds the site, serves it locally, and uses Puppeteer to capture `francescomoca.ml/cv` as an A4 PDF at `public/documents/cv.pdf`. Commit both the `.astro` file and the updated PDF.

## Deployment

Pushes to `master` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the site and deploys to GitHub Pages. The custom domain `francescomoca.ml` is configured via `public/CNAME`.

To switch from the legacy Jekyll build to the new Actions-based deployment, go to **Settings → Pages → Source** and select **GitHub Actions**.
