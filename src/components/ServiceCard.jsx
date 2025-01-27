import React from 'react';

const ServiceCard = ({ icon: Icon, title, description, learnMoreText = "Learn more" }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="text-primary mb-4 text-5xl">
        {Icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center mb-4">{description}</p>
      <button className="text-primary hover:text-primary/80 font-semibold flex items-center gap-1">
        {learnMoreText}
        <span>→</span>
      </button>
    </div>
  );
};

export default ServiceCard;