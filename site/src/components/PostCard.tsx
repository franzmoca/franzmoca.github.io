import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns'; // Using date-fns for date formatting

interface PostCardProps {
  title: string;
  date: string; // Expecting "YYYY-MM-DD" string
  summary: string;
  tags: string[];
  slug: string; // For linking to the post page
}

const PostCard: React.FC<PostCardProps> = ({ title, date, summary, tags, slug }) => {
  // Format the date string
  const formattedDate = format(new Date(date), 'MMMM d, yyyy');

  return (
    <Link href={`/blog/${slug}`} className="block mb-8 p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-md transition-shadow duration-200 ease-in-out bg-white dark:bg-gray-800">
      <article>
        <header className="mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>
          <time dateTime={date} className="text-sm text-gray-500 dark:text-gray-400">
            {formattedDate}
          </time>
        </header>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{summary}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-indigo-600 bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-300 last:mr-0 mr-1">
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
};

export default PostCard;