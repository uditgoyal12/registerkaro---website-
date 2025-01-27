import { useState } from 'react';

export default function Footer() {
  const [year] = useState(new Date().getFullYear());

  const footerLinks = {
    'START A BUSINESS': [
      'Features',
      'Solutions',
      'Integrations',
      'Enterprise',
      'Solutions'
    ],
    'GOVERNMENT REGISTRATION': [
      'Partners',
      'Community',
      'Developers',
      'App',
      'Blog'
    ],
    'COMPLIANCE & TAX': [
      'Channels',
      'Scale',
      'Watch the Demo',
      'Our Competition'
    ],
    'BIS & CDSCO': [
      'About Us',
      'News',
      'Leadership',
      'Media Kit'
    ]
  };

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Google', href: '#', icon: 'google' },
    { name: 'Apple', href: '#', icon: 'apple' },
    { name: 'Instagram', href: '#', icon: 'instagram' }
  ];

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="mb-12">
          <p className="text-gray-300 max-w-2xl">
            Design outstanding interfaces with advanced Figma features in a matter of minutes.
          </p>
          <div className="flex gap-6 mt-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-300 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <span className="sr-only">{social.name}</span>
                <i className={`fab fa-${social.icon} text-2xl`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-secondary font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="relative">
          <div className="absolute right-0 bottom-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-secondary p-3 rounded-full hover:bg-opacity-90 transition-all"
              aria-label="Scroll to top"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
          <div className="pt-8 border-t border-gray-700">
            <p className="text-center text-gray-400">
              © {year} Registerkaro. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}