import React from 'react'
import Heading from '@indexComponents/Heading'
import ProjectsContainer from '@indexComponents/ProjectsContainer'
import useReveal from '@hooks/useReveal'

const ProjectsSection = () => {
  useReveal({
    ref: '#projects-heading',
  })
  useReveal({
    ref: '.card-container',
    options: {
      interval: 100,
    },
  })

  return (
    <section id="project-section" className="section-space">
      <div className="container">
        <Heading className="section-heading-space" id="projects-heading">
          Some of my work
        </Heading>
        <ProjectsContainer />
      </div>
    </section>
  )
}

export default ProjectsSection
