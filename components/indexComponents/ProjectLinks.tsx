import React from 'react';
import IconLink from '../Layout/IconLink';
import { Github, MaxWindow } from '../Svgs';
import useTheme from '../useTheme';

interface ProjectLinksProps {
  repository: string;
  site: string;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ repository, site }) => {
  const {
    colors: { iconColor, hover },
  } = useTheme();
  return (
    <div className='link-container'>
      {repository ? (
        <IconLink href={repository}>
          <Github width='24' height='24' id='project-git' fill={iconColor} />
        </IconLink>
      ) : null}
      {site ? (
        <IconLink href={site}>
          <MaxWindow
            width='24'
            height='24'
            id='project-window'
            stroke={iconColor}
          />
        </IconLink>
      ) : null}
      <style jsx>
        {`
          div :global(a:hover svg, a:active svg, a:focus svg) {
            fill: ${hover};
          }
          div :global(a:not(:last-of-type)) {
            margin-right: 1rem;
          }
        `}
      </style>
    </div>
  );
};

export default ProjectLinks;
