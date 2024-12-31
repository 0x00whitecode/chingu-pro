import React from 'react';
import { Calendar, Users, GitBranch } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  teamSize: number;
  dueDate: string;
  progress: number;
  tech: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  teamSize,
  dueDate,
  progress,
  tech
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="px-3 py-1 bg-[#D1FAE5] text-[#059669] rounded-full text-sm">
          {progress}% Complete
        </span>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center space-x-1">
          <Users size={16} className="text-gray-400" />
          <span className="text-sm text-gray-600">{teamSize} members</span>
        </div>
        <div className="flex items-center space-x-1">
          <Calendar size={16} className="text-gray-400" />
          <span className="text-sm text-gray-600">Due {dueDate}</span>
        </div>
        <div className="flex items-center space-x-1">
          <GitBranch size={16} className="text-gray-400" />
          <span className="text-sm text-gray-600">{tech.join(', ')}</span>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-[#059669] h-2 rounded-full" 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProjectCard;