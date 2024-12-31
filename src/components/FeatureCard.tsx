import React, { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  image: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  image
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <div className="text-[#059669] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};