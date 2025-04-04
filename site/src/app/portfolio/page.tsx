import React from 'react';
import { getAllProjects, ProjectData } from '@/lib/portfolio'; // Import helper and type
import ProjectCard from '@/components/ProjectCard'; // Import the card component

export default function PortfolioPage() {
  const allProjects: ProjectData[] = getAllProjects(); // Fetch all projects

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 border-b pb-4 dark:border-gray-700">Portfolio</h1>
      {allProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Responsive grid */}
          {allProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              date={project.date}
              summary={project.summary}
              imageUrl={project.imageUrl}
              imageAlt={project.imageAlt}
              tags={project.tags}
              slug={project.slug}
            />
          ))}
        </div>
      ) : (
        <p>No portfolio projects found.</p>
      )}
    </div>
  );
}