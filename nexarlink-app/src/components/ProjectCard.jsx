import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiFirebase, SiReact, SiNodedotjs, SiArduino, SiProcessingfoundation } from 'react-icons/si';

// Map of technology names to their icons
const technologyIcons = {
  SiFirebase: <SiFirebase />,
  SiReact: <SiReact />,
  SiNodedotjs: <SiNodedotjs />,
  SiArduino: <SiArduino />,
  SiProcessingfoundation: <SiProcessingfoundation />,
};

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden bg-white dark:bg-zinc-800 rounded-xl shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
      
      {/* 🖼️ Image/Preview */}
      <div className="relative h-48">
        <img 
          className="w-full h-full object-cover" 
          src={project.imageUrl || 'placeholder-image.jpg'} 
          alt={`Screenshot of ${project.title}`} 
        />
      </div>

      <div className="p-6">
        
        {/* 🏷️ Title */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h2>
        
        {/* 📝 Brief Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 h-12 overflow-hidden">{project.tagline}</p>
        
        {/* 🔨 Key Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs font-semibold text-teal-700 dark:text-teal-300 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center gap-1"
            >
              {technologyIcons[tech] || tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-4">
          
          {/* 🔗 CTA Link (View Details) */}
          <Link 
            to={project.detailsPath} 
            className="flex items-center text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-500 transition duration-150"
          >
            View Details
            <FaExternalLinkAlt className="ml-2 text-sm" />
          </Link>
          
          {/* Icons/Badges for External Links */}
          <div className="flex space-x-3">
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub Repository"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition"
              >
                <FaGithub size={20} />
              </a>
            )}
            {project.liveLink && (
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;