import React from 'react'
import Heading from '@indexComponents/Heading'
import ProjectsContainer from '@indexComponents/ProjectsContainer'
import useReveal from '@hooks/useReveal'
interface Props {}

const ProjectsSection = (props: Props) => {
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
          My Latest Works
        </Heading>
        <ProjectsContainer />
      </div>
    </section>
  )
}

export default ProjectsSection
