import React from 'react';
import { Brain, Code, Blocks } from 'lucide-react';
import { TechBadge } from './TechBadge';

const Hero = () => {
  return (
    <div className="pt-24 pb-16 bg-[#D1FAE5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-[#059669]">
            Collaborate and gain real experience
          </h1>
          <div className="mb-8 relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Team collaboration" 
              className="rounded-xl shadow-lg mb-8"
            />
            <p className="text-xl text-gray-600 mt-6">
              Turn what you've learned in courses, bootcamps, & schools into the experience needed to land a Web Development job as a Developer, UI/UX Designer, Product Owner, or Scrum Master.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <TechBadge icon={<Brain />} text="AI/ML Integration" />
            <TechBadge icon={<Blocks />} text="Web3 Development" />
            <TechBadge icon={<Code />} text="Modern Tech Stack" />
          </div>
          <button className="bg-[#059669] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#047857] transition-colors">
            Apply for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;