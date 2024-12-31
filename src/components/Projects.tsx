import React from 'react';
import { Coffee, Globe, Calendar } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      icon: <Coffee />,
      title: 'Toucan Coffee',
      description: 'An e-commerce subscription site for a coffee shop.',
      tier: 'Tier 1 (beginner)',
      tech: 'HTML, CSS, Flexbox',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: <Globe />,
      title: 'Odessey',
      description: 'Explore exciting travel destinations based on your interests.',
      tier: 'Tier 2 (intermediate)',
      tech: 'Frontend Framework & API usage (optional)',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: <Calendar />,
      title: 'Scheduling Assistant Mgr.',
      description: 'A tool to create, distribute & maintain work schedules.',
      tier: 'Tier 3 (advanced)',
      tech: 'Backend API, Database (optional)',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=400&q=80'
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#059669]">
          Turn Knowledge into Experience
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Real projects in Real teams
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;