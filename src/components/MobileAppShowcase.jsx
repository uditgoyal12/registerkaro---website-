// import React from 'react';
import React, { useState } from 'react';

const stats = [
  { number: "1M+", label: "CUSTOMERS" },
  { number: "12+", label: "YEARS OF EXCELLENCE" },
  { number: "41+", label: "R&D ENGINEERS" },
  { number: "78+", label: "COUNTRIES" },
  { number: "3287+", label: "PARTNERS" },
  { number: "41+", label: "AWARDS RECEIVED" }
];

const StatCard = ({ number, label }) => (
  <div className="text-center p-4">
    <h3 className="text-4xl font-bold text-blue-900 mb-2">{number}</h3>
    <p className="text-sm text-gray-600 font-medium tracking-wider">{label}</p>
  </div>
);
const features = [
  "Instant results",
  "User-friendly interface",
  "Personalized customization"
];

const companyLogos = [
  { name: "Coinbase", src: "/coinbase.png" },
  { name: "Spotify", src: "/spotify.png" },
  { name: "Slack", src: "/slak.png" },
  { name: "Dropbox", src: "/dropbox.png" },
  { name: "Webflow", src: "/webflow.png" },
  { name: "Zoom", src: "//zoom.png" }
];

const MobileAppShowcase = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
  };
  return (
    <section className="relative">
      {/* App Download Section */}
      <div className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-4xl font-bold mb-6">
              Manage Your Services by your Mobile Phone
            </h2>
            <p className="text-blue-100 mb-8 max-w-lg">
              Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress.
            </p>
            
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
              {/* App Store Button */}
              <a href="#" className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>

              {/* Google Play Button */}
              <a href="#" className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Content - Phone Mockups */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full max-w-md mx-auto">
              <img 
                src="/mobile.png" 
                alt="iPhone Mockup" 
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-medium mb-2 block">WHY REGISTER KARO</span>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Some Numbers are important
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-medium mb-4 inline-block">1% OF THE INDUSTRY</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Welcome to your new digital reality. Now.
          </h1>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Logos */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {companyLogos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={`${logo.name} logo`}
                className="h-8 w-auto  transition-all duration-200"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default MobileAppShowcase;