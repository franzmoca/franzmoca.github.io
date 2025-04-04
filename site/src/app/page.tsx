import React from 'react';
import Link from 'next/link'; // Import Link for buttons/links

export default function Home() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placeholder: Add logic later to fetch and display actual recent posts */}
          <div className="p-4 border rounded dark:border-gray-700">Post Card Placeholder 1</div>
          <div className="p-4 border rounded dark:border-gray-700">Post Card Placeholder 2</div>
        </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder: Add logic later to fetch and display actual featured projects */}
          <div className="p-4 border rounded dark:border-gray-700">Project Card Placeholder 1</div>
          <div className="p-4 border rounded dark:border-gray-700">Project Card Placeholder 2</div>
          <div className="p-4 border rounded dark:border-gray-700">Project Card Placeholder 3</div>
        </div>
        <div className="text-center mt-6">
          <Link href="/portfolio" className="text-indigo-500 hover:text-indigo-400 font-semibold">
            View Full Portfolio &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
