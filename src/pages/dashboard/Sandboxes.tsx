import React from 'react';
import { Plus } from 'lucide-react';
import SandboxList from '../../components/sandbox/SandboxList';
import SandboxIntegrations from '../../components/sandbox/SandboxIntegrations';
import SandboxTemplates from '../../components/sandbox/SandboxTemplates';

const Sandboxes = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#161616]">Sandboxes</h1>
          <p className="text-gray-600 mt-1">Create and manage your development environments</p>
        </div>
        <button className="flex items-center space-x-2 bg-[#059669] text-white px-4 py-2 rounded-lg hover:bg-[#047857] transition-colors">
          <Plus size={20} />
          <span>New Sandbox</span>
        </button>
      </div>
      
      <SandboxIntegrations />
      <SandboxTemplates />
      <SandboxList />
    </div>
  );
};

export default Sandboxes;