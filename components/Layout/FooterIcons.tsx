import React from 'react';
import { Linkedin, Github, Twitter, Telephone } from '../Svgs';
import useTheme from '../useTheme';
import IconLink from './IconLink';

interface Props {}

const FooterIcons = (props: Props) => {
  const {
    colors: { iconColor, primary, hover },
    effects: { fillTrans },
    media: { minLg },
  } = useTheme();
  return (
    <div className='footer-icons'>
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
        .footer-icons {
          display: flex;
          justify-content: center;
          align-items: center;
          @media (${minLg}) {
            display: none;
          }
        }
        .footer-icons :global(a) {
          margin-right: 1.5rem;
          &:last-of-type {
            margin-right: 0;
          }
        }
        .footer-icons :global(a:hover svg) {
          fill: ${hover};
          transition: ${fillTrans};
        }
        .footer-icons :global(#github, #linkedin, #twitter, #telephone) {
          transition: ${fillTrans};
        }
      `}</style>
    </div>
  );
};

export default FooterIcons;
