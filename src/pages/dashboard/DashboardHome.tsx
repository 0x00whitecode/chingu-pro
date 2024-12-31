import React from 'react';
import { BarChart, Users, Rocket } from 'lucide-react';
import ProjectCard from '../../components/dashboard/ProjectCard';

const DashboardHome = () => {
  const stats = [
    {
      icon: <BarChart className="text-[#059669]" size={24} />,
      label: "Projects Completed",
      value: "12"
    },
    {
      icon: <Users className="text-[#059669]" size={24} />,
      label: "Team Members",
      value: "24"
    },
    {
      icon: <Rocket className="text-[#059669]" size={24} />,
      label: "Skills Gained",
      value: "8"
    }
  ];

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
      <h1 className="text-2xl font-bold mb-8">Dashboard Overview</h1>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-4">
              {stat.icon}
              <div>
                <p className="text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6">Active Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;