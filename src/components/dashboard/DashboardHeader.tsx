import React from 'react';
import { Bell, Settings, LogOut } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <header className="bg-[#161616] border-b border-[#393939] fixed w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="https://www.chingu.io/logo-with-text-192.png" 
              alt="Chingu Pro Logo" 
              className="h-8"
            />
            <span className="text-xl font-bold text-white">Pro Dashboard</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-white hover:bg-[#262626] rounded transition-colors">
              <Bell size={20} />
            </button>
            <button className="p-2 text-gray-400 hover:text-white hover:bg-[#262626] rounded transition-colors">
              <Settings size={20} />
            </button>
            <button className="p-2 text-red-400 hover:text-red-300 hover:bg-[#262626] rounded transition-colors">
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;