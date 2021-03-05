import React from 'react';
import ProjectCard from './ProjectCard';
import projects from './ProjectsObject';

interface Props {}

const ProjectsContainer = (props: Props) => {
  return (
    <div className='row'>
      {projects.map((props, index) => {
        return (
          <div
            className='col-12 col-md-6 col-xl-4 d-flex justify-content-center justify-content-xl-start  '
            key={index}
          >
            <ProjectCard {...props} />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsContainer;
