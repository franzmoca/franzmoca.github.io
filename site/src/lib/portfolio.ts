import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the structure of the project data we expect
export interface ProjectData {
  slug: string;
  title: string;
  date: string;
  client: string;
  application: string;
  summary: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  // Add other frontmatter fields if needed
}

const projectsDirectory = path.join(process.cwd(), 'content/portfolio'); // Path to the portfolio content directory

export function getAllProjects(): ProjectData[] {
  // Get file names under /content/portfolio
  let filenames: string[] = [];
  try {
    filenames = fs.readdirSync(projectsDirectory);
  } catch (error) {
    console.error("Error reading projects directory:", projectsDirectory, error);
    return []; // Return empty array if directory doesn't exist or error occurs
  }

  const allProjectsData = filenames
    .filter(filename => filename.endsWith('.mdx')) // Ensure we only process .mdx files
    .map((fileName): ProjectData | null => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, '');

      // Read markdown file as string
      const fullPath = path.join(projectsDirectory, fileName);
      try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the project metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the slug
        // Basic validation for required fields
        if (matterResult.data.title && matterResult.data.date && matterResult.data.summary && matterResult.data.imageUrl && matterResult.data.imageAlt) {
          return {
            slug,
            title: matterResult.data.title,
            date: matterResult.data.date,
            client: matterResult.data.client || 'N/A',
            application: matterResult.data.application || 'N/A',
            summary: matterResult.data.summary,
            imageUrl: matterResult.data.imageUrl,
            imageAlt: matterResult.data.imageAlt,
            tags: matterResult.data.tags || [], // Default to empty array
            ...(matterResult.data as Omit<ProjectData, 'slug' | 'title' | 'date' | 'client' | 'application' | 'summary' | 'imageUrl' | 'imageAlt' | 'tags'>),
          };
        } else {
          console.warn(`Skipping ${fileName}: missing required frontmatter (title, date, summary, imageUrl, imageAlt).`);
          return null;
        }
      } catch (error) {
        console.error(`Error reading or parsing file ${fileName}:`, error);
        return null; // Skip file if error occurs
      }
    })
    .filter((project): project is ProjectData => project !== null); // Filter out null results

  // Sort projects by date (newest first)
  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Optional: Function to get a single project by slug
export function getProjectBySlug(slug: string): { data: ProjectData, content: string } | null {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        if (matterResult.data.title && matterResult.data.date && matterResult.data.summary && matterResult.data.imageUrl && matterResult.data.imageAlt) {
             const data: ProjectData = {
                slug,
                title: matterResult.data.title,
                date: matterResult.data.date,
                client: matterResult.data.client || 'N/A',
                application: matterResult.data.application || 'N/A',
                summary: matterResult.data.summary,
                imageUrl: matterResult.data.imageUrl,
                imageAlt: matterResult.data.imageAlt,
                tags: matterResult.data.tags || [],
                ...(matterResult.data as Omit<ProjectData, 'slug' | 'title' | 'date' | 'client' | 'application' | 'summary' | 'imageUrl' | 'imageAlt' | 'tags'>),
            };
            return { data, content: matterResult.content };
        } else {
             console.warn(`Project ${slug}.mdx missing required frontmatter.`);
            return null;
        }
    } catch (error) {
        console.error(`Error reading or parsing project ${slug}.mdx:`, error);
        return null;
    }
}