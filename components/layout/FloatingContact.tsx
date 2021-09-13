import React from 'react'
import { Linkedin, Github, Twitter, Telephone } from '@svgs'

import IconLink from '@layout/IconLink'
import useTheme from '@hooks/useTheme'
import FloatingList from '@layout/FloatingList'
import FloatingContainer from '@layout/FloatingContainer'

export const FloatingContact: React.FC = ({}) => {
  const {
    colors: { iconColor },
  } = useTheme()

  return (
    <FloatingContainer bottom="0" right="30px" id="left">
      <FloatingList id="floating-icons">
        <li>
          <IconLink href={'https://github.com/solomonakp'}>
            <Github width={20} height={20} fill={iconColor} id="fixed-github" />
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
              id="fixed-linkedin"
            />
          </IconLink>
        </li>
        <li>
          <IconLink href={'https://twitter.com/dev_chuck'}>
            <Twitter
              width={20}
              height={20}
              fill={iconColor}
              id="fixed-twitter"
            />
          </IconLink>
        </li>
        <li>
          <IconLink href={'tel:+2347036583505'}>
            <Telephone
              width={20}
              height={20}
              fill={iconColor}
              id="fixed-telephone"
            />
          </IconLink>
        </li>
      </FloatingList>
    </FloatingContainer>
  )
}
