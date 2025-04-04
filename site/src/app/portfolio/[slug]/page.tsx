import { notFound } from 'next/navigation';
import { getAllProjects, getProjectBySlug } from '@/lib/portfolio';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { format } from 'date-fns';
import TagList from '@/components/TagList';
import Image from 'next/image'; // Import next/image

// Generate static paths for all projects at build time
export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Optional: Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: project.data.title,
    description: project.data.summary,
  };
}

export default async function PortfolioProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound(); // Trigger 404 page if project doesn't exist
  }

  const { data, content } = project;
  const formattedDate = format(new Date(data.date), 'MMMM yyyy');

  return (
    <article>
      {/* Project Header */}
      <header className="mb-8 border-b pb-6 dark:border-gray-700">
        <h1 className="text-4xl font-bold mb-3">{data.title}</h1>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          <time dateTime={data.date}>{formattedDate}</time>
          {data.client && <span> | Client: {data.client}</span>}
          {data.application && <span> | Application: {data.application}</span>}
        </div>
        {data.tags && data.tags.length > 0 && <TagList tags={data.tags} />}
      </header>

      {/* Optional Project Image */}
      {data.imageUrl && (
        <div className="mb-8 relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
           <Image
            src={data.imageUrl}
            alt={data.imageAlt || data.title} // Use title as fallback alt text
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}

      {/* Project Content */}
      <div className="prose dark:prose-invert max-w-none">
        {/* Render the MDX content using MDXRemote */}
        <MDXRemote source={content} />
      </div>

    </article>
  );
}