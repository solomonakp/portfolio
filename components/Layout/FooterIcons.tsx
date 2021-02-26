import React from 'react';
import { Linkedin, Github, Twitter, Telephone } from '../Svgs';
import useTheme from '../useTheme';
import IconLink from './IconLink';

interface Props {}

const FooterIcons = (props: Props) => {
  const {
    colors: { iconColor, hover },
    effects: { fillTrans },
  } = useTheme();
  return (
    <div className=' justify-content-center align-items-center'>
      <IconLink href={'https://github.com/solomonakp'}>
        <Github width={24} height={24} fill={iconColor} id='github' />
      </IconLink>
      <IconLink href={'https://www.linkedin.com/in/chokor-solomon-110177131/'}>
        <Linkedin width={24} height={24} fill={iconColor} id='linkedin' />
      </IconLink>
      <IconLink href={'https://twitter.com/dev_chuck'}>
        <Twitter width={24} height={24} fill={iconColor} id='twitter' />
      </IconLink>
      <IconLink href={'tel:+2347036583505'}>
        <Telephone width={24} height={24} fill={iconColor} id='telephone' />
      </IconLink>

      <style jsx>{`
        div {
          display: flex;
          @media (min-width: 1049.98px) {
            display: none !important;
          }
        }
        div :global(a) {
          margin-right: 1.5rem;
          &:last-of-type {
            margin-right: 0;
          }
        }
        div :global(a:hover svg, a:active svg, a:focus svg) {
          fill: ${hover};
          transition: ${fillTrans};
        }
        div :global(#github, #linkedin, #twitter, #telephone) {
          transition: ${fillTrans};
        }
      `}</style>
    </div>
  );
};

export default FooterIcons;
