import React from 'react'
import ProjectCard from '@indexComponents/ProjectCard'
import projects from '@indexComponents/ProjectsObject'

interface Props {}

const ProjectsContainer = (props: Props) => {
  return (
    <div className="projects-container">
      {projects.map((props, index) => {
        return (
          <div className="card-container" key={index}>
            <ProjectCard {...props} />
          </div>
        )
      })}
    </div>
  )
}

export default ProjectsContainer
