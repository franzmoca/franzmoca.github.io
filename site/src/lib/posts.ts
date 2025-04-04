import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the structure of the post data we expect
export interface PostData {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  // Add other frontmatter fields if needed
}

// Define the return type for getAllPosts
export interface AllPostsResult {
  posts: PostData[];
  tags: string[];
}

const postsDirectory = path.join(process.cwd(), 'content/blog'); // Path to the blog content directory

export function getAllPosts(): AllPostsResult {
  const uniqueTags = new Set<string>(); // Set to store unique tags

  // Get file names under /content/blog
  let filenames: string[] = [];
  try {
    filenames = fs.readdirSync(postsDirectory);
  } catch (error) {
    console.error("Error reading posts directory:", postsDirectory, error);
    // Return valid empty structure on error
    return { posts: [], tags: [] };
  }

  const allPostsData = filenames
    .filter(filename => filename.endsWith('.mdx')) // Ensure we only process .mdx files
    .map((fileName): PostData | null => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the slug
        // Basic validation to ensure required fields exist
        if (matterResult.data.title && matterResult.data.date && matterResult.data.summary) {
          // Define postData correctly first
          const postData: PostData = {
            slug,
            title: matterResult.data.title,
            date: matterResult.data.date,
            tags: matterResult.data.tags || [],
            summary: matterResult.data.summary,
            ...(matterResult.data as Omit<PostData, 'slug' | 'title' | 'date' | 'tags' | 'summary'>),
          };

          // Add tags to the set *after* defining postData
          if (postData.tags && Array.isArray(postData.tags)) {
            postData.tags.forEach((tag: string) => { // Add type hint and trim
                if(tag) uniqueTags.add(tag.trim());
            });
          }

          // Return the processed postData
          return postData;
        } else {
          console.warn(`Skipping ${fileName}: missing required frontmatter (title, date, summary).`);
          return null;
        }
      } catch (error) {
        console.error(`Error reading or parsing file ${fileName}:`, error);
        return null; // Skip file if error occurs
      }
    })
    .filter((post): post is PostData => post !== null); // Filter out any null results

  // Sort posts by date (newest first)
  const sortedPosts = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  // Convert Set to sorted array
  const sortedUniqueTags = Array.from(uniqueTags).sort();

  // Return the combined result object
  return { posts: sortedPosts, tags: sortedUniqueTags };
}

// Optional: Function to get a single post by slug (will be needed for individual post pages)
export function getPostBySlug(slug: string): { data: PostData, content: string } | null {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        if (matterResult.data.title && matterResult.data.date && matterResult.data.summary) {
            const data: PostData = {
                slug,
                title: matterResult.data.title,
                date: matterResult.data.date,
                tags: matterResult.data.tags || [],
                summary: matterResult.data.summary,
                ...(matterResult.data as Omit<PostData, 'slug' | 'title' | 'date' | 'tags' | 'summary'>),
            };
            return { data, content: matterResult.content };
        } else {
            console.warn(`Post ${slug}.mdx missing required frontmatter.`);
            return null;
        }
    } catch (error) {
        console.error(`Error reading or parsing post ${slug}.mdx:`, error);
        return null;
    }
}