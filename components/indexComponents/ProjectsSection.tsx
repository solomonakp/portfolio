import React from 'react';
import ProjectsContainer from './ProjectsContainer';

interface Props {}

const ProjectsSection = (props: Props) => {
  return (
    <section id='project-section' className='section-space'>
      <div className='container'>
        <h2 className='section-heading-space'>Projects</h2>
        <ProjectsContainer />
      </div>
    </section>
  );
};

export default ProjectsSection;
