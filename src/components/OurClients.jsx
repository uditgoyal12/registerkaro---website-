import React from 'react';
import { FaFileAlt, FaCreditCard, FaUserTie, FaEnvelope } from 'react-icons/fa';

const ProcessStep = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-3">
    <div className="rounded-full p-3 bg-white/20">
      <Icon className="text-2xl" />
    </div>
    <span className="font-medium">{text}</span>
  </div>
);

const ClientLogo = ({ src, alt }) => (
  <div className="bg-white rounded-full p-4 shadow-md hover:shadow-lg transition-shadow">
    <img src={src} alt={alt} className="w-8 h-8 object-contain" />
  </div>
);

const OurClients = () => {
  const clientLogos = [
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png", alt: "Dropbox" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968534.png", alt: "Atlassian" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968746.png", alt: "Shopify" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968866.png", alt: "Github" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png", alt: "Microsoft" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", alt: "Jira" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png", alt: "Adobe" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968875.png", alt: "Figma" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968428.png", alt: "Sketch" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968853.png", alt: "Gitlab" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png", alt: "Linux" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968517.png", alt: "Asana" },
  ];

  const processSteps = [
    { icon: FaFileAlt, text: "Fill up Application Form" },
    { icon: FaCreditCard, text: "Make Online Payment" },
    { icon: FaUserTie, text: "Executive will Process Application" },
    { icon: FaEnvelope, text: "Get Confirm Mail" },
  ];

  return (
    <section id='contact-us' className="py-16 px-4">
      <div  className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Happy Clients
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          {clientLogos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <ClientLogo src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mb-16">
          <button className="text-primary font-semibold flex items-center gap-2 mx-auto hover:text-primary/80">
            Show more
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* Process Steps */}
        <div className="bg-primary text-white py-8 px-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} icon={step.icon} text={step.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;