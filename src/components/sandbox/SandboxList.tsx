import React from 'react';
import { Folder, Clock, GitBranch } from 'lucide-react';

interface Sandbox {
  id: string;
  name: string;
  template: string;
  lastModified: string;
  branch: string;
}

const SandboxList: React.FC = () => {
  const sandboxes: Sandbox[] = [
    {
      id: '1',
      name: 'React Component Library',
      template: 'React + TypeScript',
      lastModified: '2 hours ago',
      branch: 'main'
    },
    {
      id: '2',
      name: 'API Integration Tests',
      template: 'Node.js',
      lastModified: '1 day ago',
      branch: 'development'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Recent Sandboxes</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {sandboxes.map(sandbox => (
          <div key={sandbox.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Folder className="text-[#059669]" size={20} />
                <div>
                  <h3 className="font-medium">{sandbox.name}</h3>
                  <p className="text-sm text-gray-500">{sandbox.template}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Clock size={16} />
                  <span>{sandbox.lastModified}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <GitBranch size={16} />
                  <span>{sandbox.branch}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SandboxList;