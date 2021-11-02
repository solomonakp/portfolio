import React from 'react'
import useTheme from '@hooks/useTheme'
import FooterIcons from '@layout/FooterIcons'
import { LayoutProps } from '@layout/Layout'

type FooterProps = LayoutProps

const Footer: React.FC<FooterProps> = (props) => {
  const {
    size: { sectionHeading, textHeading },
    colors: { dark, primary },
    radius: { button },
  } = useTheme()

  return (
    <footer>
      <div className="container">
        <h3>looking to build a team?</h3>
        <h4>
          Send a message and{' '}
          <a href="mailto:solomonakp@gmail.com">let’s talk</a>
        </h4>
        <FooterIcons {...props} />
      </div>
      <style jsx>{`
        footer {
          text-align: center;
          padding-bottom: 3.625rem;
          margin-top: auto;
        }
        h3,
        h4 {
          color: ${dark};
        }
        h3 {
          margin-bottom: 1rem;
          font-size: ${sectionHeading};
        }
        h4 {
          margin-bottom: 2rem;
          font-size: ${textHeading};
        }
        a {
          position: relative;
          cursor: pointer;

          &:hover {
            &::before {
              transform: perspective(700px) scale3d(1, 1, 1);
            }
          }

          &::before {
            content: '';
            display: block;
            position: absolute;
            bottom: -4px;
            height: 3px;
            left: 0;
            right: 0;
            transform: perspective(500px) scale3d(0, 1, 1);
            transition: transform 200ms linear;
            border-radius: ${button};
            background-color: ${primary};
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
