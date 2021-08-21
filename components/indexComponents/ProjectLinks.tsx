import React from 'react'
import IconLink from '@layout/IconLink'
import { Github, MaxWindow } from '@svgs'
import useTheme from '@hooks/useTheme'

interface ProjectLinksProps {
  repository: string
  site: string
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ repository, site }) => {
  const {
    colors: { projectIconColor, primary },
    media: { minMd },
  } = useTheme()
  return (
    <div className="link-container">
      {repository ? (
        <IconLink href={repository}>
          <Github
            width="24"
            height="24"
            id="project-git"
            fill={projectIconColor}
          />
        </IconLink>
      ) : null}
      {site ? (
        <IconLink href={site}>
          <MaxWindow
            width="24"
            height="24"
            id="project-window"
            stroke={projectIconColor}
          />
        </IconLink>
      ) : null}
      <style jsx>
        {`
          .link-container {
            text-align: left;
            @media (${minMd}) {
              position: absolute;
              bottom: 0.5rem;
              right: 0;
            }
          }
          div
            :global(a:hover #project-window, a:active #project-window, a:focus
              #project-window) {
            stroke: ${primary};
          }
          div
            :global(a:hover #project-git, a:active #project-git, a:focus
              #project-git) {
            fill: ${primary};
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
