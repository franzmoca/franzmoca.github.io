# Skeleton Loading State Implementation Plan

**Goal:** Implement skeleton loading placeholders for the "Recent Blog Posts" and "Featured Projects" sections on the homepage (`site/src/app/page.tsx`) that display while data is being fetched.

**Approach:** Leverage Next.js Server Components for data fetching and React Suspense to handle the loading state display. *(Note: See clarification below regarding static export limitations)*.

**Detailed Plan:**

1.  **Define Skeleton Components:**
    *   Create `site/src/components/PostCardSkeleton.tsx`:
        *   Mimic `PostCard` structure using `div`s styled with Tailwind CSS.
        *   Include placeholders for: Title, Date, Summary, Tags.
        *   Use `bg-gray-300 dark:bg-gray-700 animate-pulse`.
        *   Wrap in `PostCard`'s container styling.
    *   Create `site/src/components/ProjectCardSkeleton.tsx`:
        *   Mimic `ProjectCard` structure.
        *   Include placeholders for: Image (h-48 rectangle), Title, Date, Summary, Tags.
        *   Use `bg-gray-300 dark:bg-gray-700 animate-pulse`.
        *   Wrap in `ProjectCard`'s container styling.

2.  **Modify Homepage (`site/src/app/page.tsx`):**
    *   **Data Fetching:**
        *   Convert `Home` function to `async`.
        *   Fetch latest 2 posts using `lib/posts.ts`.
        *   Fetch latest 3 projects using `lib/portfolio.ts`.
    *   **Implement Suspense:**
        *   Import `Suspense`, skeletons, and actual components.
        *   **Recent Blog Posts Section:**
            *   Create async component `RecentPostsList` (fetches posts, renders `PostCard`s).
            *   Wrap `<RecentPostsList />` in `<Suspense fallback={<> <PostCardSkeleton /> <PostCardSkeleton /> </>}>`.
        *   **Featured Projects Section:**
            *   Create async component `FeaturedProjectsGrid` (fetches projects, renders `ProjectCard`s).
            *   Wrap `<FeaturedProjectsGrid />` in `<Suspense fallback={<> <ProjectCardSkeleton /> <ProjectCardSkeleton /> <ProjectCardSkeleton /> </>}>`.
    *   **Remove Static Placeholders:** Delete existing placeholder `div`s.

3.  **Refine Data Fetching Logic (if needed):**
    *   Ensure `lib/posts.ts` and `lib/portfolio.ts` can fetch the latest N items.

**Visual Representation (Mermaid):**

```mermaid
graph TD
    A[Homepage Request] --> B{page.tsx (Server Component)};
    B --> C1 & C2;

    subgraph "Recent Posts Section"
        C1 --> D1{Suspense};
        D1 -- Fallback --> E1[Render 2x PostCardSkeleton];
        D1 -- Default --> F1{Render <RecentPostsList />};
        F1 -- Fetches Data (Latest 2) --> G1[lib/posts.ts];
        G1 -- Returns Posts --> F1;
        F1 -- Renders --> H1[Render 2x PostCard];
    end

    subgraph "Featured Projects Section"
        C2 --> D2{Suspense};
        D2 -- Fallback --> E2[Render 3x ProjectCardSkeleton];
        D2 -- Default --> F2{Render <FeaturedProjectsGrid />};
        F2 -- Fetches Data (Latest 3) --> G2[lib/portfolio.ts];
        G2 -- Returns Projects --> F2;
        F2 -- Renders --> H2[Render 3x ProjectCard];
    end

    E1 & H1 --> I[Display Posts Section];
    E2 & H2 --> J[Display Projects Section];
```

**Clarification on Static Export:**

The plan above uses Server Components. With `next export`, data fetching occurs at build time. The final static HTML includes the fetched data, meaning the user browsing the site **will not see the skeleton loading state**. To show a visible loading state to the end-user on a static site, the data fetching must happen client-side (using Client Components with `useEffect`/`useState`).

**Decisions:**

*   Featured Projects: Fetch latest 3.
*   Skeleton Animation: `animate-pulse` is sufficient.
*   Placeholder Count: 2 posts, 3 projects.