# Content Migration Plan: `old/` to `site/`

**Goal:** Migrate blog posts and portfolio items from the `old/` directory (Jekyll format) to the `site/` directory (Next.js/MDX format), transforming them with updated frontmatter and image paths.

**Based on Discussion:**
*   Images will be moved to `site/public/images/` (with `blog` and `portfolio` subfolders).
*   Image paths in content will be updated to absolute paths (e.g., `/images/portfolio/image.png`).
*   The `summary` field for blog posts will be auto-generated from the first paragraph.
*   The `summary` field for portfolio posts will use the existing `overview.summary` field from the old frontmatter.
*   Skills from the old portfolio frontmatter will be consolidated into the `tags` field in the new format.
*   The focus is on format conversion and path updates, not significant content rewriting at this stage.

---

## Migration Steps

1.  **Preparation:**
    *   Create target image directories if they don't exist:
        *   `site/public/images/blog/`
        *   `site/public/images/portfolio/`
    *   Identify all blog posts (`.md` files) in `old/_posts/blog/`.
    *   Identify all portfolio items (`.md` files) in `old/_posts/portfolio/`.

2.  **Image Migration:**
    *   Copy all files from `old/img/portfolio/` to `site/public/images/portfolio/`.
    *   Identify any images referenced in blog posts (scan content if necessary) and copy them to `site/public/images/blog/`.

3.  **Content Migration (Iterative Process):**

    *   **For each Blog Post (`old/_posts/blog/YYYY-MM-DD-slug.md`):**
        *   **Extract Data:** `title`, `date` (from filename), `tags`, `slug` (from filename).
        *   **Process Content:** Read Markdown, auto-generate `summary` (first paragraph), update image paths to absolute `/images/blog/...`.
        *   **Create New File:** `site/content/blog/{slug}.mdx` with new frontmatter (`title`, `date`, `tags`, `summary`) and updated content.

    *   **For each Portfolio Item (`old/_posts/portfolio/YYYY-MM-DD-slug.md`):**
        *   **Extract Data:** `title`, `date` (from filename), `client` (`overview.client`), `application` (`overview.applications`), `summary` (`overview.summary`), `imageUrl` (`/images/portfolio/{img}`), `imageAlt` (`alt`), `tags` (combine `skills.*`), `slug` (from filename).
        *   **Process Content:** Read Markdown, update image/link paths to absolute `/images/portfolio/...`.
        *   **Create New File:** `site/content/portfolio/{slug}.mdx` with new frontmatter (`title`, `date`, `client`, `application`, `summary`, `imageUrl`, `imageAlt`, `tags`) and updated content.

4.  **Verification:**
    *   Manually review sample migrated `.mdx` files in `site/content/`.
    *   Run `npm run dev` (in `site/`) and check rendered blog/portfolio pages and images.

5.  **Memory Bank Update:**
    *   Update `memory-bank/progress.md`: Add/update tasks for migration steps.
    *   Update `memory-bank/activeContext.md`: Reflect current focus (verification/next steps).

---

## Migration Flow Diagram

```mermaid
graph TD
    A[Start: Old Content in `old/`] --> B{Identify Content Types};
    B --> C[Blog Posts (`old/_posts/blog/*.md`)];
    B --> D[Portfolio Items (`old/_posts/portfolio/*.md`)];
    B --> E[Images (`old/img/`)];

    C --> F[Extract Blog Metadata (Title, Tags, Date, Slug)];
    F --> G[Read Blog Content];
    G --> H[Auto-generate Summary (1st Para)];
    H --> I[Update Blog Image Paths (-> /images/blog/...)];
    I --> J[Create New Blog MDX (`site/content/blog/slug.mdx`)];

    D --> K[Extract Portfolio Metadata (Title, Date, Slug, Client, App, Overview Summary, Img, Alt, Skills)];
    K --> L[Consolidate Skills into Tags List];
    L --> M[Construct Image URL (/images/portfolio/...) & Alt];
    M --> N[Read Portfolio Content];
    N --> O[Update Portfolio Image/Link Paths (-> /images/portfolio/...)];
    O --> P[Create New Portfolio MDX (`site/content/portfolio/slug.mdx`)];

    E --> Q[Copy Portfolio Images (`old/img/portfolio/*`) to `site/public/images/portfolio/`];
    E --> R[Copy Blog Images (Identify & Copy) to `site/public/images/blog/`];

    J --> S{Verify Migrated Content (Manual Check & `npm run dev`)};
    P --> S;
    Q --> S;
    R --> S;
    S --> T[Update Memory Bank (`progress.md`, `activeContext.md`)];
    T --> U[End: Content Migrated to `site/`];