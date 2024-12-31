import React, { ReactNode } from 'react';

interface ProjectCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  tier: string;
  tech: string;
  image: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  icon,
  title,
  description,
  tier,
  tech,
  image
}) => {
  return (
    <div className="bg-[#D1FAE5] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <div className="text-[#059669] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-y-2">
        <div className="text-sm font-medium text-[#059669]">{tier}</div>
        <div className="text-sm text-gray-500">{tech}</div>
      </div>
    </div>
  );
};