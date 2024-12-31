import React from 'react';
import { Code, Users, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Code className="w-12 h-12" />,
    title: "1. Apply and Get Matched",
    description: "Fill out our application form and get matched with developers of similar skill levels and goals."
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "2. Join Your Team",
    description: "Meet your team members and start planning your project together using agile methodologies."
  },
  {
    icon: <Rocket className="w-12 h-12" />,
    title: "3. Build & Launch",
    description: "Collaborate with your team to build and launch a real project over 6 weeks."
  }
];

const HowItWorksPage = () => {
  return (
    <div className="pt-24 bg-[#D1FAE5]">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#059669] mb-12">
          How Chingu Pro Works
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step) => (
            <div key={step.title} className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-[#059669] mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-[#059669]">
            The Chingu Pro Experience
          </h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              At Chingu Pro, we believe in learning by doing. Our 6-week program puts you in a real-world development environment where you'll:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Work in an Agile team environment</li>
              <li>Use industry-standard tools and workflows</li>
              <li>Build production-ready applications</li>
              <li>Develop crucial soft skills</li>
              <li>Get support from experienced mentors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;