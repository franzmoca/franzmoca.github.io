import React from 'react';

interface TagProps {
  tag: string;
  // Optional: href?: string; // Could add later for linking to tag pages
}

const Tag: React.FC<TagProps> = ({ tag }) => {
  // Basic styling, can be customized further or accept color props
  const tagStyle = "text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-indigo-600 bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-300 last:mr-0 mr-1 mb-1";

  // If href was provided, wrap in a Link, otherwise just a span
  // if (href) {
  //   return (
  //     <Link href={href} className={tagStyle}>
  //       {tag}
  //     </Link>
  //   );
  // }

  return (
    <span className={tagStyle}>
      {tag}
    </span>
  );
};

export default Tag;