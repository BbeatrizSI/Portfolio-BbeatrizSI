import React from 'react';
import Project from './Project';
import '../stylesheets/layout/Projects.scss';


const Projects = ({data}) => {
    return (
        <section className="projects" id="projects">
            <h2 className="projects_title">Algo de lo que he estado haciendo</h2>
            {data.map(
          ({ title, description, githubLink, webLink, img, skills }) => (
            <Project
              title={title}
              description={description}
              githubLink={githubLink}
              webLink={webLink}
              img={img}
              skills={skills}
            />
          )
        )}
        </section>
    );
};

export default Projects;