import React from 'react';
import { Team } from '../../../types/team';
import SelectionCard from '../SelectionCard';

interface TeamSelectionStepProps {
  selected: string[];
  onSelect: (id: string) => void;
  teams: Team[];
}

const TeamSelectionStep: React.FC<TeamSelectionStepProps> = ({ 
  selected, 
  onSelect,
  teams 
}) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4">
        {teams.map((team) => (
          <SelectionCard
            key={team.id}
            title={team.name}
            subtitle={`${team.currentMembers}/${team.maxMembers} members • ${team.techStack.join(', ')}`}
            description={team.description}
            selected={selected.includes(team.id)}
            onClick={() => onSelect(team.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSelectionStep;