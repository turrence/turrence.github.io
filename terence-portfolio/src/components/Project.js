// src/components/Project.js
import React from 'react';

function Project({ title, description, image, technologies, projectLink, repoLink, date }) {
  return (
    <div className="project">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt={title} />
      <p>Technologies: {technologies.join(', ')}</p>
      <a href={projectLink}>View Project</a>
      <a href={repoLink}>GitHub Repository</a>
      <p>Date Completed: {date}</p>
    </div>
  );
}

export default Project;
