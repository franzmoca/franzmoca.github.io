import React from 'react';

export default function ContactPage() {
  const email = "me@francescomoca.ml"; // From old config

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 border-b pb-4 dark:border-gray-700">Contact Me</h1>

      <section className="prose dark:prose-invert max-w-none">
        <p>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          Feel free to reach out!
        </p>
        <p>
          The best way to get in touch is by sending an email to: <a href={`mailto:${email}`} className="text-indigo-500 hover:text-indigo-400">{email}</a>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
          (Note: A contact form will be added here later.)
        </p>
      </section>
    </div>
  );
}