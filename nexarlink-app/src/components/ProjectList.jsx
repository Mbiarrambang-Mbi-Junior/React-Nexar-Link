// Example usage in Project.jsx
import React from 'react';
import { SiFirebase, SiReact, SiNodedotjs, SiArduino, SiProcessingfoundation } from 'react-icons/si';
import ProjectCard from './ProjectCard';
import projectsData from '../utils/projects.json'

function ProjectList({ isDarkMode }) {
  // You can now use the isDarkMode prop here
  return (
    <section id="projects" className={`py-20 ${isDarkMode ? 'bg-white-50' : 'bg-[#191854]'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-white">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectList;