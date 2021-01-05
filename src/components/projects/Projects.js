import React from 'react';
import Project from './Project';
import { useTranslation } from 'react-i18next';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Projects.scss';

const Projects = ({ dataEs, dataEn }) => {
  const [t, i18n] = useTranslation('global');

  let data = dataEs;

  i18n.language === 'en' ? (data = dataEn) : (data = dataEs);

  const getConfigurableProps = () => ({
    showArrows: true,
    showStatus: false,
    showIndicators: true,
    infiniteLoop: true,
    showThumbs: true,
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: true,
    emulateTouch: true,
    thumbWidth: 100,
    selectedItem: 0,
    interval: 7000,
    transitionTime: 150,
    swipeScrollTolerance: 5,
  });

  return (
    <section className='projects'>
      <div className='transparent_div' id='projects'></div>
      <h2 className='projects_title'>{t('projects.title')}</h2>
      <Carousel className='projects_container' {...getConfigurableProps()}>
        {data.map(
          ({ id, title, description, githubLink, webLink, img, skills }) => (
            <Project
              key={'slide' + id}
              title={title}
              description={description}
              githubLink={githubLink}
              webLink={webLink}
              img={img}
              skills={skills}
            />
          )
        )}
      </Carousel>
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
