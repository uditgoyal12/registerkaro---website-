import React from 'react';
import { FaBuilding, FaChartLine, FaUserTie, FaBoxes, FaMoneyBillWave, FaBook } from 'react-icons/fa';
import ServiceCard from './ServiceCard';

const servicesData = [
  {
    icon: <FaBuilding />,
    title: "Company Formation",
    description: "Build web-based solutions that enhance customer experience."
  },
  {
    icon: <FaChartLine />,
    title: "Company Secretarial Services",
    description: "Make data-driven decisions and utilize technology to reach business goals."
  },
  {
    icon: <FaUserTie />,
    title: "Virtual Office Address",
    description: "Foster customer relationships by effectively serving your market."
  },
  {
    icon: <FaBoxes />,
    title: "Annual Compliance Services",
    description: "Turn your ideas into modern products with our design experts."
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Payroll Services",
    description: "Expand your business across the globe with minimal effort."
  },
  {
    icon: <FaBook />,
    title: "Bookkeeping Services",
    description: "Steering user behaviours with creative design, data insights & technology."
  }
];

const Services = () => {
  return (
    <section id='our-services' className="py-16 px-4 bg-gray-50">
      <div  className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2">WELCOME TO REGISTERKARO.IN</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore Our Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
            See All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;