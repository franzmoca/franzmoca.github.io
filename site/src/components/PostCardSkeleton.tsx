import React from 'react';

const PostCardSkeleton: React.FC = () => {
  return (
    <div className="block mb-8 p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow bg-white dark:bg-gray-800 animate-pulse">
      <div className="mb-4">
        {/* Title Placeholder */}
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
        {/* Date Placeholder */}
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
      </div>
      {/* Summary Placeholder */}
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-4 w-5/6"></div>
      {/* Tags Placeholder */}
      <div className="flex flex-wrap gap-2">
        <div className="h-5 w-16 bg-indigo-200 dark:bg-indigo-900 rounded"></div>
        <div className="h-5 w-20 bg-indigo-200 dark:bg-indigo-900 rounded"></div>
      </div>
    </div>
  );
};

export default PostCardSkeleton;