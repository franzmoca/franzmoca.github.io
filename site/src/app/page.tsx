import React, { Suspense } from 'react';
import Link from 'next/link';
import { getAllPosts, PostData } from '@/lib/posts'; // Assuming PostData is exported
import { getAllProjects, ProjectData } from '@/lib/portfolio'; // Assuming ProjectData is exported
import PostCard from '@/components/PostCard';
import ProjectCard from '@/components/ProjectCard';
import PostCardSkeleton from '@/components/PostCardSkeleton';
import ProjectCardSkeleton from '@/components/ProjectCardSkeleton';

// Async component to fetch and render recent posts
async function RecentPostsList() {
  // Fetch only the latest 2 posts
  const recentPosts = getAllPosts().posts.slice(0, 2);

  // Simulate loading delay (remove in production if not needed for testing)
  // await new Promise(resolve => setTimeout(resolve, 1500));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {recentPosts.map((post) => (
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
  );
}

// Async component to fetch and render featured projects
async function FeaturedProjectsGrid() {
  // Fetch only the latest 3 projects
  const featuredProjects = getAllProjects().slice(0, 3);

  // Simulate loading delay (remove in production if not needed for testing)
  // await new Promise(resolve => setTimeout(resolve, 2000));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredProjects.map((project) => (
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
  );
}

// Main Home Page Component (Server Component)
export default async function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-16 mb-12 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Welcome to My Digital Space
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-4">
          I'm Francesco Moca, a Full-Stack Developer with a passion for Blockchain technology and innovative solutions. Explore my work and thoughts.
        </p>
        <div className="space-x-4">
          <Link href="/portfolio" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded transition duration-300">
              View Portfolio
          </Link>
          <Link href="/blog" className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded transition duration-300">
              Read Blog
          </Link>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 border-b pb-3 dark:border-gray-700">
          Recent Blog Posts
        </h2>
        <Suspense fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PostCardSkeleton />
            <PostCardSkeleton />
          </div>
        }>
          <RecentPostsList />
        </Suspense>
        <div className="text-center mt-6">
          <Link href="/blog" className="text-indigo-500 hover:text-indigo-400 font-semibold">
            View All Posts &rarr;
          </Link>
        </div>
      </section>

      {/* Featured Portfolio Projects Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 border-b pb-3 dark:border-gray-700">
          Featured Projects
        </h2>
        <Suspense fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
          </div>
        }>
          <FeaturedProjectsGrid />
        </Suspense>
        <div className="text-center mt-6">
          <Link href="/portfolio" className="text-indigo-500 hover:text-indigo-400 font-semibold">
            View Full Portfolio &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
