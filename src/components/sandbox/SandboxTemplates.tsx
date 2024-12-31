import React from 'react';
import { Box } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const SandboxTemplates: React.FC = () => {
  const templates: Template[] = [
    {
      id: '1',
      name: 'React + TypeScript',
      description: 'Modern web development with React 18',
      icon: '⚛️'
    },
    {
      id: '2',
      name: 'Node.js API',
      description: 'RESTful API development with Express',
      icon: '🟢'
    },
    {
      id: '3',
      name: 'Python ML',
      description: 'Machine learning environment with Python',
      icon: '🐍'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Start from Template</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {templates.map(template => (
          <button
            key={template.id}
            className="text-left p-4 rounded-lg border border-gray-200 hover:border-[#059669] hover:bg-gray-50 transition-all"
          >
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-2xl">{template.icon}</span>
              <span className="font-medium">{template.name}</span>
            </div>
            <p className="text-sm text-gray-600">{template.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SandboxTemplates;