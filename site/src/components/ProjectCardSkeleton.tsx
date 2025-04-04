import React from 'react';

const ProjectCardSkeleton: React.FC = () => {
  return (
    <div className="block overflow-hidden rounded-lg shadow bg-white dark:bg-gray-800 animate-pulse">
      {/* Image Placeholder */}
      <div className="relative h-48 w-full bg-gray-300 dark:bg-gray-700"></div>
      <div className="p-6">
        <div className="mb-3">
          {/* Title Placeholder */}
          <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
          {/* Date Placeholder */}
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
        </div>
        {/* Summary Placeholder */}
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded mb-2 w-full"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded mb-4 w-5/6"></div>
        {/* Tags Placeholder */}
        <div className="flex flex-wrap gap-2">
          <div className="h-5 w-16 bg-purple-200 dark:bg-purple-900 rounded"></div>
          <div className="h-5 w-20 bg-purple-200 dark:bg-purple-900 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;