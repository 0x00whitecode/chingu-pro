export interface Team {
  id: string;
  name: string;
  description: string;
  maxMembers: number;
  currentMembers: number;
  techStack: string[];
  projectType: string;
}

export interface TeamMember {
  id: string;
  userId: string;
  teamId: string;
  role: 'leader' | 'member';
  joinedAt: string;
}