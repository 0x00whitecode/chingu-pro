import React from 'react';
import { NavLink } from 'react-router-dom';
import { Users, FolderKanban, Video, UserPlus } from 'lucide-react';

const navItems = [
  { icon: <Users size={20} />, label: 'Users', path: '/admin/users' },
  { icon: <FolderKanban size={20} />, label: 'Projects', path: '/admin/projects' },
  { icon: <Video size={20} />, label: 'Videos', path: '/admin/videos' },
  { icon: <UserPlus size={20} />, label: 'Teams', path: '/admin/teams' },
];

const AdminNav = () => {
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