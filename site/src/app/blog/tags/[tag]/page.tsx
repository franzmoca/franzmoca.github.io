import React from 'react';
import { getAllPosts, PostData } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Link from 'next/link';

// Generate static paths for all unique tags at build time
export async function generateStaticParams() {
  const { tags } = getAllPosts(); // Get unique tags
  return tags.map((tag) => ({
    tag: encodeURIComponent(tag), // URL-encode the tag for the path
  }));
}

// Optional: Generate metadata for the page
export async function generateMetadata({ params }: { params: { tag: string } }) {
  const tag = decodeURIComponent(params.tag); // Decode the tag from the URL
  return {
    title: `Posts tagged with "${tag}"`,
    description: `Blog posts related to ${tag}`,
  };
}


export default function TagPage({ params }: { params: { tag: string } }) {
  const currentTag = decodeURIComponent(params.tag); // Decode the tag from the URL
  const { posts } = getAllPosts(); // Get all posts

  // Filter posts to include only those with the current tag
  const filteredPosts = posts.filter(post =>
    post.tags?.map(t => t.toLowerCase()).includes(currentTag.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Posts tagged with: <span className="text-indigo-500">{currentTag}</span>
      </h1>
      <div className="mb-8 border-b pb-4 dark:border-gray-700">
         <Link href="/blog" className="text-indigo-500 hover:text-indigo-400">&larr; Back to all posts</Link>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid gap-8">
          {filteredPosts.map((post) => (
            <PostCard
              key={post.slug}
              title={post.title}
              date={post.date}
              summary={post.summary}
              tags={post.tags}
              slug={post.slug}
            />
          ))}
        </div>
      ) : (
        <p>No posts found for this tag.</p>
      )}
    </div>
  );
}