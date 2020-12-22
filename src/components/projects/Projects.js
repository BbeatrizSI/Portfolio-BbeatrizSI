import React from 'react';
import Project from './Project';
import './Projects.scss';
import { useTranslation } from 'react-i18next';

const Projects = ({ data }) => {
  const [t] = useTranslation('global');

  return (
    <section className='projects'>
      <div className='transparent_div' id='projects'></div>
      <h2 className='projects_title'>{t('projects.title')}</h2>
      <div className='projects_container'>
        {data.map(
          ({ id, title, description, githubLink, webLink, img, skills }) => (
            <Project
              key={id}
              title={title}
              description={description}
              githubLink={githubLink}
              webLink={webLink}
              img={img}
              skills={skills}
            />
          )
        )}
        <div className='blank_space'></div>
      </div>
      <div className='github_description'>
        <p>{t('projects.github')}</p>
        <a
          className='github_icon-link'
          href='https://github.com/BbeatrizSI'
          target='_blank'
          rel='noopener noreferrer'
          title='Enlace al perfil de GitHub'
        >
          <i className='fab fa-github github_icon'></i>
        </a>
      </div>
    </section>
  );
};

export default Projects;
