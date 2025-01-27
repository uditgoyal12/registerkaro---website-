import React from 'react';

const About = () => {
  return (
    <section id='about-us' className="py-16 px-4 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div  className="absolute right-0 top-0 w-64 h-64 opacity-10">
        <div className="w-full h-full bg-primary/20 rounded-bl-full"></div>
      </div>
      <div className="absolute right-0 bottom-0">
        <div className="w-32 h-32 bg-orange-100/50 rounded-tl-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-primary font-semibold">WELCOME TO REGISTERKARO.IN</p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              About <span className="text-primary">Register Karo</span>
            </h2>
            
            <div className="space-y-4 text-gray-600">
              <p>
                We have been using Intelegencia as our DevOps vendor for our field service 
                applications over the last couple of years and I'm extremely pleased with 
                their performance, ability to execute, and willingness to adapt in our ever changing 
                environment. Perry is an outstanding leader who is fanatical about 
                customer satisfaction. He has built a solid team which has consistently delivered 
                on projects thereby exceeding everyone's expectations.
              </p>
              
              <p>
                I would strongly recommend their services to any organization that is looking for 
                solid, reliable, and predictable outcomes.
              </p>
            </div>
            
            <button className="bg-[#1e3a8a] text-white px-6 py-3 rounded-lg font-semibold 
              hover:bg-[#1e3a8a]/90 transition-colors inline-flex items-center gap-2">
              Learn More
              <span>→</span>
            </button>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/about.png" 
                alt="Register Karo Team"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Orange Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-tl-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;