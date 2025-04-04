import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc'; // Import for RSC
import { format } from 'date-fns';
import TagList from '@/components/TagList'; // Import TagList

// Generate static paths for all posts at build time
export async function generateStaticParams() {
  // Destructure to get the 'posts' array from the result
  const { posts } = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Optional: Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: post.data.title,
    description: post.data.summary,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound(); // Trigger 404 page if post doesn't exist
  }

  const { data, content } = post;
  const formattedDate = format(new Date(data.date), 'MMMM d, yyyy');

  return (
    <article className="prose dark:prose-invert max-w-none"> {/* Apply prose styling */}
      {/* Post Header */}
      <header className="mb-8 border-b pb-4 dark:border-gray-700">
        <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <time dateTime={data.date}>{formattedDate}</time>
          {data.tags && data.tags.length > 0 && <TagList tags={data.tags} />}
        </div>
      </header>

      {/* Post Content */}
      {/* Render the MDX content using MDXRemote */}
      {/* Components can be passed here if needed: components={{ CustomComponent }} */}
      <MDXRemote source={content} />

    </article>
  );
}