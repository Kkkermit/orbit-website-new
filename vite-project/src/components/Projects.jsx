import React from 'react';
import '../App.css';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1: Portfolio Website',
      description: 'This is the portfolio website you are currently viewing. It was built using React, JSX, and CSS.',
      image: 'project1.png', // Path to project image
      link: 'https://github.com/yourusername/project1', // Link to the project on GitHub or a live demo
    }
    // Add more project entries as needed
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
