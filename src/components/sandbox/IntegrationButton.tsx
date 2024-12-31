import React from 'react';
import { Github, Code, Terminal } from 'lucide-react';

interface IntegrationButtonProps {
  type: 'github' | 'vscode' | 'terminal';
  onClick: () => void;
}

const IntegrationButton: React.FC<IntegrationButtonProps> = ({ type, onClick }) => {
  const getIcon = () => {
    switch (type) {
      case 'github':
        return <Github size={20} />;
      case 'vscode':
        return <Code size={20} />;
      case 'terminal':
        return <Terminal size={20} />;
    }
  };

  const getLabel = () => {
    switch (type) {
      case 'github':
        return 'Connect to GitHub';
      case 'vscode':
        return 'Open in VS Code';
      case 'terminal':
        return 'Open Terminal';
    }
  };

  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50"
    >
      {getIcon()}
      <span>{getLabel()}</span>
    </button>
  );
};

export default IntegrationButton;