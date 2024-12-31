import React, { ReactNode } from 'react';

interface TechBadgeProps {
  icon: ReactNode;
  text: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-md">
      <span className="text-[#059669]">{icon}</span>
      <span className="text-gray-800">{text}</span>
    </div>
  );
};