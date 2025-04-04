import React from 'react';
import Tag from './Tag'; // Import the Tag component

interface TagListProps {
  tags: string[];
}

const TagList: React.FC<TagListProps> = ({ tags }) => {
  if (!tags || tags.length === 0) {
    return null; // Don't render anything if there are no tags
  }

  return (
    <div className="flex flex-wrap gap-1"> {/* Use gap for spacing */}
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} />
        /* If tags become links later, pass href here: <Tag key={tag} tag={tag} href={`/tags/${tag}`} /> */
      ))}
    </div>
  );
};

export default TagList;