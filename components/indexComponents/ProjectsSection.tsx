import React from 'react';
import Heading from './Heading';
import ProjectsContainer from './ProjectsContainer';

interface Props {}

const ProjectsSection = (props: Props) => {
  return (
    <section id='project-section' className='section-space'>
      <div className='container'>
        <Heading className='section-heading-space'>Projects</Heading>
        <ProjectsContainer />
      </div>
    </section>
  );
};

export default ProjectsSection;
