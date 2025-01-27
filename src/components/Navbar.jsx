import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#home" },
  {
    name: "Our Services",
    href: "#our-services",
    sublinks: [
      { name: "Link 1", href: "#our-services" },
      { name: "Link2", href: "#our-services" },
      { name: "Link3", href: "#our-services" },
    ],
  },
  { name: "Blog", href: "#blog" },
  { name: "Contact Us", href: "#contact-us" },
  { name: "About Us", href: "#about-us" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      {/* Top bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <span>www.Registerkaro.in</span>
          <div className="hidden md:flex items-center space-x-4">
            <span>+918126543300</span>
            <div className="flex items-center space-x-2">
              <a href="#" className="hover:text-primary">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a href="#" className="hover:text-primary">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-1">
          <div className="relative flex items-center justify-center">
            {/* Link wrapping the logo */}
            <a href="#home">
              {/* GIF */}
              <img
                src="/anima.gif"
                alt="Animated Logo"
                className="absolute h-16 w-[20rem]"
              />

              {/* Static Logo */}
              <img
                src="/logo.png"
                alt="RegisterKaro"
                className="relative h-16 w-[20rem]"
              />
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.sublinks ? (
                  <div>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center text-gray-700 hover:text-primary font-medium"
                    >
                      {item.name}
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </button>
                    {servicesOpen && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                        >
                          {item.sublinks.map((sublink) => (
                            <a
                              key={sublink.name}
                              href={sublink.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                              role="menuitem"
                            >
                              {sublink.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-primary font-medium"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <a
              href="#talk-expert"
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
            >
              Talk An Expert
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.sublinks ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary rounded-md"
                      >
                        {item.name}
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                      </button>
                      {servicesOpen && (
                        <div className="pl-4">
                          {item.sublinks.map((sublink) => (
                            <a
                              key={sublink.name}
                              href={sublink.href}
                              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary rounded-md"
                            >
                              {sublink.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary rounded-md"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="px-3 py-2">
                <a
                  href="#talk-expert"
                  className="w-full bg-primary text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors block text-center"
                >
                  Talk An Expert
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
