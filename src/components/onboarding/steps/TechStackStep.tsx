import React from 'react';
import { techStacks } from '../../../data/onboardingOptions';
import SelectionCard from '../SelectionCard';

interface TechStackStepProps {
  selected: string[];
  onSelect: (id: string) => void;
}

const TechStackStep: React.FC<TechStackStepProps> = ({ selected, onSelect }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {techStacks.map((tech) => (
          <SelectionCard
            key={tech.id}
            title={tech.name}
            icon={tech.icon}
            selected={selected.includes(tech.id)}
            onClick={() => onSelect(tech.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStackStep;