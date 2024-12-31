import { TechStack, Language, Skill, Region } from '../types/onboarding';

export const techStacks: TechStack[] = [
  { id: 'react', name: 'React', icon: '⚛️', category: 'frontend' },
  { id: 'node', name: 'Node.js', icon: '🟢', category: 'backend' },
  { id: 'python', name: 'Python', icon: '🐍', category: 'backend' },
  { id: 'flutter', name: 'Flutter', icon: '📱', category: 'mobile' },
  { id: 'tensorflow', name: 'TensorFlow', icon: '🧠', category: 'ai' },
  { id: 'solidity', name: 'Solidity', icon: '⛓️', category: 'blockchain' },
];

export const languages: Language[] = [
  { id: 'en', name: 'English', code: 'EN' },
  { id: 'es', name: 'Spanish', code: 'ES' },
  { id: 'fr', name: 'French', code: 'FR' },
  { id: 'de', name: 'German', code: 'DE' },
];

export const skills: Skill[] = [
  { id: 'react', name: 'React', category: 'technical', level: 'intermediate' },
  { id: 'node', name: 'Node.js', category: 'technical', level: 'beginner' },
  { id: 'agile', name: 'Agile', category: 'tools', level: 'intermediate' },
  { id: 'communication', name: 'Communication', category: 'soft', level: 'advanced' },
];

export const regions: Region[] = [
  { id: 'na', name: 'North America', timezone: 'UTC-5 to UTC-8' },
  { id: 'eu', name: 'Europe', timezone: 'UTC+0 to UTC+2' },
  { id: 'asia', name: 'Asia', timezone: 'UTC+5 to UTC+9' },
  { id: 'aus', name: 'Australia', timezone: 'UTC+8 to UTC+11' },
];