export interface TechStack {
  id: string;
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'mobile' | 'ai' | 'blockchain';
}

export interface Language {
  id: string;
  name: string;
  code: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'technical' | 'soft' | 'tools';
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Region {
  id: string;
  name: string;
  timezone: string;
}

export interface OnboardingData {
  techStacks: string[];
  skills: string[];
  languages: string[];
  region: string;
  availability: string[];
  projectPreference: 'solo' | 'team' | 'both';
}