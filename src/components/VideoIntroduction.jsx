import React from 'react';
import { FaLightbulb, FaRocket } from 'react-icons/fa';

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4 mb-8">
    <div className="bg-primary/10 p-3 rounded-full">
      <Icon className="text-primary text-2xl" />
    </div>
    <div>
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const VideoIntroduction = () => {
  const features = [
    {
      icon: FaLightbulb,
      title: "Explore ideas together",
      description: "Engage audience segments and finally create actionable insights. Amplify vertical integration."
    },
    {
      icon: FaRocket,
      title: "Bring those ideas to life",
      description: "Engage audience segments and finally create actionable insights. Amplify vertical integration."
    }
  ];

  return (
    <section className="bg-[#1e3a8a] py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Video Introductions
              </h2>
              <p className="text-gray-300">
                Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>

          {/* Right Video Section */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
            <button 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors"
              aria-label="Play video"
            >
              <svg 
                className="w-8 h-8 text-white ml-1" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntroduction;