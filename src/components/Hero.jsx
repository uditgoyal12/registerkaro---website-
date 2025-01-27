
const companyLogos = [
  { name: "Coinbase", src: "/oracle.png" },
  { name: "Spotify", src: "/mor.png" },
  { name: "Slack", src: "/mor.png" },
  { name: "Dropbox", src: "/samsung.png" },
  { name: "Webflow", src: "/monde.png" },
  { name: "Zoom", src: "/seg.png" }
];

const Hero = () => {
  return (
    <div id="home" className="pt-16 bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400">★</span>
              <span className="text-gray-600">Google Rating ⭐⭐⭐⭐⭐</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your trusted partner
              <br />
              <span className="text-primary">for compliance business needs</span>
            </h1>
            
            <p className="text-gray-600 mb-8">
              An online business compliance platform that helps entrepreneurs and other individuals with various registrations, tax filings, and other legal matters.
            </p>

            <div className="flex flex-wrap gap-8 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-secondary">4.5+</span>
                <span className="text-sm text-gray-600">Customer Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-secondary">20,000+</span>
                <span className="text-sm text-gray-600">Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-secondary">99.8%</span>
                <span className="text-sm text-gray-600">Financial Stability</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-secondary/90 transition-colors">
                Talk An Expert
              </button>
              <button className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
                <span className="text-primary">●</span> See how it works
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/hero.png"
              alt="Business Compliance"
              className="w-full h-auto"
            />
            <div className="absolute top-0 right-0 flex flex-col gap-4">
              {['Annual Compliance', 'Payroll Services', 'Company Formation'].map((service) => (
                <div
                  key={service}
                  className="bg-white px-4 py-2 rounded-lg shadow-md text-sm"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-gray-900 mb-8">
            Trusted By Over 100+ Startups and freelance business
          </h2>
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
        </div>
      </div>
    </div>
  );
};

export default Hero;