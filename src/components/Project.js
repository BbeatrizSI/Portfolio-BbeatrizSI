import React from 'react';
import '../stylesheets/layout/Project.scss';




const Project = ({ img, title, description, githubLink, webLink, skills }) => {
  return (
    <article className="project">
      <div className="project_img-Container">
        <img src={img} className="project_img" alt={title}></img>
      </div>
      <div className="project_info">
        <h2 className="project_title">{title}</h2>
        <p className="project_description">{description}</p>
        <div className="project_icons">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={webLink} target="_blank" rel="noopener noreferrer">Web</a>
        </div>
      </div>
    </article>
  );
};


export default Project;