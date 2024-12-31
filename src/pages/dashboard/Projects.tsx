import React from 'react';
import ProjectCard from '../../components/dashboard/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Building a modern e-commerce platform with React and Node.js",
      teamSize: 4,
      dueDate: "Mar 30",
      progress: 75,
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "AI Chat Application",
      description: "Developing a real-time chat application with AI integration",
      teamSize: 3,
      dueDate: "Apr 15",
      progress: 30,
      tech: ["Python", "React", "TensorFlow"]
    }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;