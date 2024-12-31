import React from 'react';
import { skills } from '../../../data/onboardingOptions';
import SelectionCard from '../SelectionCard';

interface SkillsStepProps {
  selected: string[];
  onSelect: (id: string) => void;
}

const SkillsStep: React.FC<SkillsStepProps> = ({ selected, onSelect }) => {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="space-y-6">
      {Object.entries(groupedSkills).map(([category, skills]) => (
        <div key={category}>
          <h3 className="text-lg font-semibold mb-3 capitalize">{category}</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <SelectionCard
                key={skill.id}
                title={skill.name}
                subtitle={`${skill.level} level`}
                selected={selected.includes(skill.id)}
                onClick={() => onSelect(skill.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsStep;