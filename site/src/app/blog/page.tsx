import React from 'react';
import { getAllPosts } from '@/lib/posts'; // Import helper
import PostCard from '@/components/PostCard'; // Import the card component
import Link from 'next/link'; // Import Link for tag links

export default function BlogPage() {
  const { posts, tags } = getAllPosts(); // Fetch posts and unique tags

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog</h1>

      {/* Display Tags */}
      {tags.length > 0 && (
        <div className="mb-8 p-4 border rounded-lg dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-3">Filter by Tag:</h2>
          <div className="flex flex-wrap gap-2">
             {/* Link tags to their respective filter pages (to be created) */}
            {tags.map(tag => (
               <Link
                 key={tag}
                 href={`/blog/tags/${encodeURIComponent(tag)}`}
                 className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded text-indigo-600 bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-300 hover:bg-indigo-300 dark:hover:bg-indigo-800 transition-colors duration-200"
               >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Display Posts */}
      <div className="border-t pt-8 dark:border-gray-700">
        {posts.length > 0 ? (
          <div className="grid gap-8">
            {posts.map((post) => ( // Use 'posts' array
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
          <p>No blog posts found.</p>
        )}
      </div>
    </div> // Closing div for the main container
  );
}