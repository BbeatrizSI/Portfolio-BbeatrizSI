import React from 'react';
import './Project.scss';

const Project = ({
  id,
  img,
  title,
  description,
  githubLink,
  webLink,
  skills,
}) => {
  return (
    <div className='project' data-id={id}>
      <div className='project_img-container'>
        <img src={img} className='project_img' alt={title}></img>
      </div>
      <div className='project_info'>
        <h2 className='project_title'>{title}</h2>
        <p className='project_description'>{description}</p>
        <div className='project_icons'>
          <a href={githubLink} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-code'></i>
          </a>
          <a href={webLink} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-desktop'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
