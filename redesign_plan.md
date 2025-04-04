# Website Redesign Plan (Next.js)

**Date:** 2025-04-04

**Project Goal:** Redesign the personal website (blog/portfolio) using Next.js with static export, host on GitHub Pages, incorporate existing content structure (migration later), add blog tagging, and implement a professional dark theme.

---

## Phase 1: Foundation & Setup

1.  **Initialize Next.js Project:** Create a new Next.js project (`npx create-next-app@latest`), using the App Router.
2.  **Configure for GitHub Pages:**
    *   Set up `next.config.js` for static export (`output: 'export'`).
    *   Configure `basePath` and `assetPrefix` if needed for the deployment URL structure.
    *   Add a GitHub Action workflow (`.github/workflows/deploy.yml`) for automated builds and deployment to the `gh-pages` branch.
3.  **Styling Solution:** Integrate Tailwind CSS.
4.  **Basic Layout:** Create a main layout component (`components/Layout.js` or similar).
5.  **Theme Implementation:** Implement a basic dark theme using Tailwind's dark mode variant.

---

## Phase 2: Content Structure & Core Pages

1.  **Content Processing:** Set up a library like `Contentlayer` or `next-mdx-remote` to process Markdown/MDX files.
2.  **Content Structure:** Define frontmatter (metadata) for MDX files:
    *   **Blog:** `title`, `date`, `tags` (array), `summary`.
    *   **Portfolio:** `title`, `date`, `client`, `application`, `languages`, `concepts`, `tools`, `stack`, `summary`, `imageUrl`.
3.  **Page Routes:** Create the basic page files/directories (using App Router conventions):
    *   `app/page.js` (Homepage)
    *   `app/blog/page.js` (Blog listing)
    *   `app/blog/[slug]/page.js` (Individual blog post)
    *   `app/portfolio/page.js` (Portfolio listing)
    *   `app/portfolio/[slug]/page.js` (Individual portfolio project)
    *   `app/about/page.js` (About page)
    *   `app/contact/page.js` (Contact page)
4.  **Placeholder Content:** Create sample MDX files in designated content directories (e.g., `content/blog/`, `content/portfolio/`).

---

## Phase 3: Component Implementation

1.  **Reusable Components:** Develop core UI components (likely in `components/`):
    *   `Header`: Navigation links.
    *   `Footer`: Copyright, social links.
    *   `PostCard`: Display blog post summary/link.
    *   `ProjectCard`: Display portfolio project summary/link.
    *   `Tag`: Display individual tags.
    *   `TagList`: Display a list of tags.
2.  **Core Page Implementation:** Build out the structure of the main pages using the layout and reusable components.

---

## Phase 4: Feature Implementation

1.  **Blog Post Rendering:** Implement the `app/blog/[slug]/page.js` page to fetch and render MDX content.
2.  **Blog Tagging:**
    *   Display tags on individual blog posts.
    *   Implement filtering logic (e.g., `app/blog/tags/[tag]/page.js`).
    *   Generate a list of all unique tags.
3.  **Portfolio Project Rendering:** Implement the `app/portfolio/[slug]/page.js` page to fetch and render MDX content and details.

---

## Phase 5: Refinement & Deployment

1.  **Styling & Responsiveness:** Refine Tailwind CSS styles, ensure responsiveness.
2.  **Contact Form:** Integrate a static form solution (e.g., Formspree).
3.  **SEO:** Leverage Next.js metadata features for basic SEO.
4.  **Testing:** Perform manual testing.
5.  **Deployment:** Trigger the GitHub Action to build and deploy to GitHub Pages.

---

## Visual Plan

```mermaid
graph TD
    A[Phase 1: Foundation & Setup] --> B(Init Next.js, Config Static Export/GH Pages, Add Tailwind, Basic Layout/Theme);
    B --> C[Phase 2: Content Structure & Core Pages];
    C --> D(Setup MDX/Contentlayer, Define Frontmatter, Create Page Routes, Placeholder Content);
    D --> E[Phase 3: Component Implementation];
    E --> F(Develop Header/Footer/Cards/Tags, Implement Core Listing/Static Pages);
    F --> G[Phase 4: Feature Implementation];
    G --> H(Render Blog/Portfolio MDX, Implement Blog Tagging/Filtering);
    H --> I[Phase 5: Refinement & Deployment];
    I --> J(Refine Styles/Responsiveness, Add Contact Form, SEO Basics, Test, Deploy via GH Actions);
    J --> K{Ready for Implementation};