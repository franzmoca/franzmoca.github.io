import React from 'react';
import Link from 'next/link'; // Import Link

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://github.com/franzmoca', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/francesco-moca-69001a121/', label: 'LinkedIn' },
  ];

  return (
    // Consistent background and text colors for light/dark modes
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-gray-800 dark:bg-gray-950 text-white shadow-md">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center" aria-label="Main Navigation">
          <Link href="/" className="text-xl font-bold hover:text-gray-300 transition-colors">
            Francesco Moca
          </Link>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
           {/* Mobile Menu Button Placeholder */}
           <div className="md:hidden">
             {/* TODO: Implement mobile menu button and drawer/dropdown */}
             <button className="text-white focus:outline-none">
               <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
             </button>
           </div>
        </nav>
      </header>

      {/* Main content area - Added more padding */}
      <main className="flex-grow container mx-auto px-6 py-10 md:px-8 md:py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-400 p-6 text-center mt-auto">
        <div className="mb-4 flex justify-center space-x-6"> {/* Centered social links */}
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mx-3 hover:text-white"
              aria-label={link.label} // Added for accessibility
            >
              {/* Basic text links for now, could add icons later */}
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} Francesco Moca. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;