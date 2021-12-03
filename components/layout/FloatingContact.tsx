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
          <IconLink
            href={'https://github.com/solomonakp'}
            aria-labelledby="side-github-label"
            target="_blank"
          >
            <Github
              width={20}
              height={20}
              fill={iconColor}
              id="fixed-github"
              aria-hidden
            />
            <span id="side-github-label" hidden>
              Github
            </span>
          </IconLink>
        </li>
        <li>
          <IconLink
            href={'https://www.linkedin.com/in/chokor-solomon-110177131/'}
            aria-labelledby="side-linkedin-label"
            target="_blank"
          >
            <Linkedin
              width={20}
              height={20}
              fill={iconColor}
              id="fixed-linkedin"
              aria-hidden
            />
            <span id="side-linkedin-label" hidden>
              Linkedin
            </span>
          </IconLink>
        </li>
        <li>
          <IconLink
            href={'https://twitter.com/dev_chuck'}
            aria-labelledby="side-twitter-label"
            target="_blank"
          >
            <Twitter
              width={20}
              height={20}
              fill={iconColor}
              id="fixed-twitter"
              aria-hidden
            />
            <span id="side-twitter-label" hidden>
              Twitter
            </span>
          </IconLink>
        </li>
        <li>
          <IconLink
            href={'tel:+2347036583505'}
            aria-labelledby="side-telephone-label"
          >
            <Telephone
              width={20}
              height={20}
              fill={iconColor}
              id="fixed-telephone"
              aria-hidden
            />
            <span id="side-telephone-label" hidden>
              Telephone
            </span>
          </IconLink>
        </li>
      </FloatingList>
    </FloatingContainer>
  )
}
