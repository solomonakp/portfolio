import React from 'react'
import { Linkedin, Github, Twitter, Telephone } from '@svgs'
import useTheme from '@hooks/useTheme'
import IconLink from '@layout/IconLink'
import { LayoutProps } from '@layout/Layout'

type FooterIconsProps = LayoutProps

const FooterIcons: React.FC<FooterIconsProps> = ({ isMain }) => {
  const {
    colors: { iconColor, hover },
    effects: { fillTrans },
  } = useTheme()
  return (
    <div
      className=" justify-content-center align-items-center"
      id="footer-icons"
    >
      <IconLink
        href={'https://github.com/solomonakp'}
        aria-labelledby="footer-github-label"
        target="_blank"
      >
        <Github
          width={24}
          height={24}
          fill={iconColor}
          id="github"
          aria-hidden
        />
        <span id="footer-github-label" hidden>
          Github
        </span>
      </IconLink>
      <IconLink
        href={'https://www.linkedin.com/in/chokor-solomon-110177131/'}
        aria-labelledby="footer-linkedin-label"
        target="_blank"
      >
        <Linkedin
          width={24}
          height={24}
          fill={iconColor}
          id="linkedin"
          aria-hidden
        />
        <span id="footer-linkedin-label" hidden>
          Linkedin
        </span>
      </IconLink>
      <IconLink
        href={'https://twitter.com/dev_chuck'}
        aria-labelledby="footer-twitter-label"
        target="_blank"
      >
        <Twitter
          width={24}
          height={24}
          fill={iconColor}
          id="twitter"
          aria-hidden
        />
        <span id="footer-twitter-label" hidden>
          Twitter
        </span>
      </IconLink>
      <IconLink
        href={'tel:+2347036583505'}
        aria-labelledby="footer-telephone-label"
      >
        <Telephone
          width={24}
          height={24}
          fill={iconColor}
          id="telephone"
          aria-hidden
        />
        <span id="footer-telephone-label" hidden>
          Telephone
        </span>
      </IconLink>

      <style jsx>{`
        #footer-icons {
          display: flex;
          @media (min-width: 1049.98px) {
            display: ${isMain ? 'none !important' : 'flex'};
          }
        }
        #footer-icons :global(a) {
          margin-right: 1.5rem;
          &:last-of-type {
            margin-right: 0;
          }
        }

        :global(#footer-icons a:hover svg, #footer-icons
            a:active
            svg, #footer-icons a:focus svg) {
          fill: ${hover};
          transition: ${fillTrans};
        }
        #footer-icons :global(#github, #linkedin, #twitter, #telephone) {
          transition: ${fillTrans};
        }
      `}</style>
    </div>
  )
}

export default FooterIcons
