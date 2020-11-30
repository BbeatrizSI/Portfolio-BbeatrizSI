import React from 'react';
import Project from './Project';
import '../stylesheets/layout/Projects.scss';


const Projects = ({data}) => {
    return (
        <section className="projects">
          <div className="transparent_div" id="projects"></div>
          <h2 className="projects_title">Algo de lo que he estado haciendo...</h2>
          <div className="projects_container">
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
            <div className="blank_space"></div>
          </div>
          <div className="github_description">
          <p>Para ver más, te invito a pasarte por mi perfil de GitHub:</p> <a className="github_icon-link"href="https://github.com/BbeatrizSI" target="_blank" rel="noopener noreferrer" title="Enlace al perfil de GitHub"><i class="fab fa-github github_icon"></i></a>
          </div>
        </section>
    );
};

export default Projects;