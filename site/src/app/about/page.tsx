import React from 'react';
import Link from 'next/link'; // For potential resume link

export default function AboutPage() {
  // Placeholder data based on old config - replace with actual content later
  const aboutContent = {
    introLeft: "I am particularly interested in the development of decentralized solutions using peer to peer and blockchain technologies.",
    introRight: "Also interested in machine learning and software development. I have experience developing crossplatform mobile apps and smart contracts as a freelancer.",
    interests: {
      now: ["R3 Corda", "Kubernetes", "Blockchain Bridges"],
      soon: ["VueJS 3", "Avalanche", "Algorand"],
      later: ["Algorand", "Kotlin", "Svelte"]
    },
    resumeLink: "/resume/cv_en.pdf" // Assuming resume stays in public/resume
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 border-b pb-4 dark:border-gray-700">About Me</h1>

      <section className="mb-12 prose dark:prose-invert max-w-none">
        {/* Introduction */}
        <p>{aboutContent.introLeft}</p>
        <p>{aboutContent.introRight}</p>
      </section>

      {/* Interests Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Recent Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-3">Now</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              {aboutContent.interests.now.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">Soon</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              {aboutContent.interests.soon.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">Later (?)</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              {aboutContent.interests.later.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Resume Download Button */}
      {aboutContent.resumeLink && (
        <section className="text-center">
           <Link href={aboutContent.resumeLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded transition duration-300">
              Download My Resume
          </Link>
        </section>
      )}
    </div>
  );
}