import React from 'react'
import IconLink from '@layout/IconLink'
import { Github, MaxWindow, Figma } from '@svgs'
import useTheme from '@hooks/useTheme'

interface ProjectLinksProps {
  repository?: string
  site?: string
  index: number
  figma?: string
  target?: string
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({
  repository,
  site,
  index,
  figma,
}) => {
  const {
    colors: { projectIconColor, primary },
    media: { minMd },
  } = useTheme()

  return (
    <div className="link-container">
      {repository ? (
        <IconLink
          href={repository}
          aria-labelledby={`project-github-label-${index}`}
          target="_blank"
        >
          <Github
            width="30"
            height="30"
            className="project-git"
            fill={projectIconColor}
            aria-hidden
          />
          <span id={`project-github-label-${index}`} hidden>
            Github
          </span>
        </IconLink>
      ) : null}
      {site ? (
        <IconLink
          href={site}
          aria-labelledby={`live-label-${index}`}
          target="_blank"
        >
          <MaxWindow
            width="30"
            height="30"
            className="project-window"
            stroke={projectIconColor}
            aria-hidden
          />
          <span id={`live-label-${index}`} hidden>
            Live Version
          </span>
        </IconLink>
      ) : null}
      {figma ? (
        <IconLink
          href={figma}
          aria-labelledby={`figma-label-${index}`}
          target="_blank"
        >
          <Figma
            width="30"
            height="30"
            className="project-figma"
            fill={projectIconColor}
            aria-hidden
          />
          <span id={`figma-label-${index}`} hidden>
            Figma Link
          </span>
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
            :global(a:hover .project-window, a:active .project-window, a:focus
              #project-window) {
            stroke: ${primary};
          }
          div
            :global(a:hover .project-git, a:active .project-git, a:focus
              #project-git) {
            fill: ${primary};
          }
          div
            :global(a:hover .project-figma, a:active .project-figma, a:focus
              #project-figma) {
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
