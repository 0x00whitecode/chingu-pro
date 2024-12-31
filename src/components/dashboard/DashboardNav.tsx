import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, Calendar, FolderKanban, GraduationCap,
  BookOpen, Lightbulb, Video, Users, Box
} from 'lucide-react';

const navItems = [
  { icon: <Home size={20} />, label: 'Home', path: '/dashboard' },
  { icon: <Calendar size={20} />, label: 'My Planning', path: '/dashboard/planning' },
  { icon: <FolderKanban size={20} />, label: 'Projects', path: '/dashboard/projects' },
  { icon: <GraduationCap size={20} />, label: 'Evaluation Quizzes', path: '/dashboard/quizzes' },
  { icon: <BookOpen size={20} />, label: 'Curriculums', path: '/dashboard/curriculums' },
  { icon: <Lightbulb size={20} />, label: 'Concepts', path: '/dashboard/concepts' },
  { icon: <Users size={20} />, label: 'Conference Rooms', path: '/dashboard/conference' },
  { icon: <Box size={20} />, label: 'Sandboxes', path: '/dashboard/sandboxes' },
  { icon: <Video size={20} />, label: 'Video on Demand', path: '/dashboard/videos' }
];

const DashboardNav = () => {
  return (
    <nav className="bg-[#161616] w-64 h-screen fixed left-0 top-16">
      <div className="p-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center space-x-3 px-4 py-3 rounded-none border-l-4
              transition-all duration-200 ease-in-out
              ${isActive 
                ? 'border-[#059669] bg-[#262626] text-white' 
                : 'border-transparent text-gray-400 hover:bg-[#262626] hover:text-white'
              }
            `}
          >
            {item.icon}
            <span className="font-medium text-sm">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default DashboardNav;