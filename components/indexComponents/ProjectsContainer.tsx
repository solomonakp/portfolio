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
            className='col-12 col-sm-6 col-md-4 d-flex justify-content-center justify-content-md-start  '
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
