import React from 'react';
import { Linkedin, Github, Twitter, Telephone } from '../Svgs';

import IconLink from './IconLink';
import useTheme from '../useTheme';
import FloatingList from './FloatingList';
import FloatingContainer from './FloatingContainer';

interface FloatingProps {}

export const FloatingContact: React.FC<FloatingProps> = ({}) => {
  const {
    colors: { iconColor },
  } = useTheme();

  return (
    <FloatingContainer bottom='0' left='30px' id='left'>
      <FloatingList id='floating-icons'>
        <li>
          <IconLink href={'https://github.com/solomonakp'}>
            <Github width={20} height={20} fill={iconColor} id='fixed-github' />
          </IconLink>
        </li>
        <li>
          <IconLink
            href={'https://www.linkedin.com/in/chokor-solomon-110177131/'}
          >
            <Linkedin
              width={20}
              height={20}
              fill={iconColor}
              id='fixed-linkedin'
            />
          </IconLink>
        </li>
        <li>
          <IconLink href={'https://twitter.com/dev_chuck'}>
            <Twitter
              width={20}
              height={20}
              fill={iconColor}
              id='fixed-twitter'
            />
          </IconLink>
        </li>
        <li>
          <IconLink href={'tel:+2347036583505'}>
            <Telephone
              width={20}
              height={20}
              fill={iconColor}
              id='fixed-telephone'
            />
          </IconLink>
        </li>
      </FloatingList>
    </FloatingContainer>
  );
};
