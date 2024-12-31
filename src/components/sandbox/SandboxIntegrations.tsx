import React from 'react';
import { Github, Code, Terminal } from 'lucide-react';

const IntegrationButton: React.FC<{
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}> = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center space-x-3 px-4 py-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-[#059669] transition-all"
  >
    <span className="text-[#161616]">{icon}</span>
    <span className="font-medium text-[#161616]">{label}</span>
  </button>
);

const SandboxIntegrations: React.FC = () => {
  const handleGithubConnect = () => {
    // TODO: Implement GitHub integration
    console.log('Connecting to GitHub...');
  };

  const handleVSCodeOpen = () => {
    // TODO: Implement VS Code integration
    console.log('Opening in VS Code...');
  };

  const handleTerminalOpen = () => {
    // TODO: Implement terminal integration
    console.log('Opening terminal...');
  };

  return (
    <div className="bg-[#f4f4f4] p-6 rounded-lg border border-gray-200">
      <h2 className="text-lg font-semibold mb-4 text-[#161616]">Development Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <IntegrationButton
          icon={<Github size={20} />}
          label="Connect to GitHub"
          onClick={handleGithubConnect}
        />
        <IntegrationButton
          icon={<Code size={20} />}
          label="Open in VS Code"
          onClick={handleVSCodeOpen}
        />
        <IntegrationButton
          icon={<Terminal size={20} />}
          label="Open Terminal"
          onClick={handleTerminalOpen}
        />
      </div>
    </div>
  );
};

export default SandboxIntegrations;