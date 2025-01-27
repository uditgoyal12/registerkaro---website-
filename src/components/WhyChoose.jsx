import React from 'react';
import { FaShieldAlt, FaCheckCircle, FaSmile, FaUserTie } from 'react-icons/fa';

const FeatureCard = ({ icon: Icon, title, description, bgColor }) => (
  <div className={`p-8 rounded-xl ${bgColor} transition-all duration-300 hover:shadow-lg relative overflow-hidden`}>
    {/* Background Pattern */}
    <div className="absolute right-0 bottom-0">
      <div className="w-24 h-24 bg-white/30 rounded-tl-full"></div>
    </div>
    
    <div className="flex flex-col items-center text-center relative z-10">
      <div className="w-16 h-16 flex items-center justify-center mb-4">
        <Icon className="text-4xl" style={{ 
          color: title.includes('Safe') ? '#ff6b35' : 
                title.includes('Fee') ? '#4CAF50' :
                title.includes('Satisfaction') ? '#2196F3' :
                '#E91E63' 
        }} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const WhyChoose = () => {
  const features = [
    {
      icon: FaShieldAlt,
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      bgColor: "bg-red-50/80"
    },
    {
      icon: FaCheckCircle,
      title: "No Hidden Fee",
      description: "Everything is put before you with no hidden charges or conditions",
      bgColor: "bg-green-50/80"
    },
    {
      icon: FaSmile,
      title: "Guaranteed Satisfaction",
      description: "We ensure that you stay 100% satisfied with our offered services",
      bgColor: "bg-blue-50/80"
    },
    {
      icon: FaUserTie,
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals",
      bgColor: "bg-pink-50/80"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute left-0 top-0">
        <div className="w-64 h-64 bg-orange-100/50 rounded-br-full"></div>
      </div>
      <div className="absolute right-0 bottom-0">
        <div className="w-96 h-96 bg-orange-50/30 rounded-tl-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-3 tracking-wide">WHY REGISTERKARO.IN</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why Choose Register Karo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            It is with consistent services and results that build trust with the people and that in
            turn help us to serve the business better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              bgColor={feature.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;