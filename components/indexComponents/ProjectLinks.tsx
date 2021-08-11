import React from 'react'
import IconLink from '../layout/IconLink'
import { Github, MaxWindow } from '../Svgs'
import useTheme from '../useTheme'

interface ProjectLinksProps {
  repository: string
  site: string
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ repository, site }) => {
  const {
    colors: { iconColor, hover },
  } = useTheme()
  return (
    <div className="link-container">
      {repository ? (
        <IconLink href={repository}>
          <Github width="24" height="24" id="project-git" fill={iconColor} />
        </IconLink>
      ) : null}
      {site ? (
        <IconLink href={site}>
          <MaxWindow
            width="24"
            height="24"
            id="project-window"
            stroke={iconColor}
          />
        </IconLink>
      ) : null}
      <style jsx>
        {`
          div
            :global(a:hover #project-window, a:active #project-window, a:focus
              #project-window) {
            stroke: ${hover};
          }
          div
            :global(a:hover #project-git, a:active #project-git, a:focus
              #project-git) {
            fill: ${hover};
          }
          div :global(a:not(:last-of-type)) {
            margin-right: 1rem;
          }
        `}
      </style>
    </div>
  )
}

export default ProjectLinks
