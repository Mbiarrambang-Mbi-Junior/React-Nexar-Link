import React, { useEffect, useState } from 'react';
import { BsDownload } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaRegCopy } from 'react-icons/fa';
import projectsData from '../utils/projects.json';

function ProjectDisplay({ isDarkMode }) {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [codeContent, setCodeContent] = useState('');
  const [copyStatus, setCopyStatus] = useState('Copy');

  useEffect(() => {
    const selectedProject = projectsData.find(p => p.id === parseInt(id));
    setProject(selectedProject);

    if (selectedProject && selectedProject.code) {
      fetch(selectedProject.code)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then(text => setCodeContent(text))
        .catch(error => {
          console.error('Failed to fetch code:', error);
          setCodeContent('Error: Could not fetch code from GitHub.');
        });
    }
  }, [id]);

  if (!project) {
    return <div>Project not found!</div>;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(codeContent)
      .then(() => {
        setCopyStatus('Copied!');
        setTimeout(() => setCopyStatus('Copy'), 2000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        setCopyStatus('Failed to copy');
        setTimeout(() => setCopyStatus('Copy'), 2000);
      });
  };

  return (
    <div className={`flex flex-col justify-center items-center pt-30 pb-[100px] gap-10 ${isDarkMode ? 'bg-white' : 'bg-[#191854]'}`}>
      <div className="project-tittle text-3xl font-bold">
        {project.title}
      </div>
      <div className="project-video max-w-2xl w-full">
        <video
          src={project.video}
          controls
          className='h-[500px] w-full rounded-lg shadow-md'
          width="100%"
          height="auto"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Updated Steps Section */}
      <div className="project-steps max-w-2xl w-full p-6 bg-gray-100 rounded-lg shadow-md dark:bg-zinc-800">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project Steps</h2>
        <ol className="list-decimal list-inside space-y-2">
          {project.steps.map((step, index) => (
            <li key={index} className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="project-schematic max-w-2xl w-full">
        <img src={project.schematic} alt={project.title} className="w-full h-auto rounded-lg shadow-md" />
      </div>
      
      <div className="project-code relative w-full max-w-2xl">
        <button 
          onClick={handleCopy} 
          className="absolute top-4 right-4 z-10 p-2 rounded bg-gray-800 text-white text-xs font-bold flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity"
        >
          <FaRegCopy /> {copyStatus}
        </button>
        <div className="arduino-code">
          <SyntaxHighlighter language="arduino" style={dracula}>
            {codeContent}
          </SyntaxHighlighter>
        </div>
      </div>

      <a href={project.code} download={`${project.title}.ino`} className='flex gap-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        <BsDownload /> Download Code
      </a>
    </div>
  );
}

export default ProjectDisplay;