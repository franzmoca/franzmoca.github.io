import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image from next/image
import { format } from 'date-fns';

interface ProjectCardProps {
  title: string;
  date: string; // Expecting "YYYY-MM-DD" string
  summary: string;
  imageUrl: string; // Path relative to /public
  imageAlt: string;
  tags: string[];
  slug: string; // For linking to the project page
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, date, summary, imageUrl, imageAlt, tags, slug }) => {
  const formattedDate = format(new Date(date), 'MMMM yyyy'); // Format date (e.g., April 2025)

  return (
    <Link href={`/portfolio/${slug}`} className="block overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-200 ease-in-out bg-white dark:bg-gray-800">
      <article>
        {/* Use next/image for optimized images */}
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={imageAlt}
            layout="fill" // Fill the container
            objectFit="cover" // Cover the area, cropping if necessary
            className="transition-transform duration-300 ease-in-out group-hover:scale-105" // Example hover effect
          />
        </div>
        <div className="p-6">
          <header className="mb-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{title}</h2>
            <time dateTime={date} className="text-xs text-gray-500 dark:text-gray-400">
              {formattedDate}
            </time>
          </header>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{summary}</p>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-purple-600 bg-purple-200 dark:bg-purple-900 dark:text-purple-300 last:mr-0 mr-1">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;