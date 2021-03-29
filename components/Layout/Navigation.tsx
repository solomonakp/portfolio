import React from 'react';
import Link from 'next/link';
import useTheme from '../useTheme';
import { ModeButton } from './ModeButton';
interface NavigationProps {
  open: boolean;
  theme: boolean;
}
export type navRefs = [SVGCircleElement, HTMLDivElement] | [];

const Navigation = React.forwardRef<any, NavigationProps>(
  ({ theme, open }, ref) => {
    const {
      media: { maxMd },
      colors: { secondary },
      size: { paragraph, mobileMenu },
      effects: { colorTrans },
    } = useTheme();

    return (
      <div
        className='d-flex justify-content-center align-items-center '
        id='navigation'
        ref={ref}
      >
        <svg>
          <defs>
            <clipPath id='clipPath'>
              <circle className='circle' cx='100%' cy='0' r='0' ref={ref} />
            </clipPath>
          </defs>
        </svg>

        <ul className='d-lg-flex align-items-center'>
          <li>
            <Link href='/'>
              <a>About Me</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Skills</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Projects</a>
            </Link>
          </li>
          <li id='last'>
            <Link href='/'>
              <a>Blog</a>
            </Link>
          </li>
        </ul>

        {theme ? <ModeButton isOpen={open} /> : null}

        <style jsx>
          {`
            #navigation {
              @media (${maxMd}) {
                width: 100%;
                height: 100vh;
                position: fixed;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                background: orange;
                z-index: 10;
                clip-path: url(#clipPath);
                transform: translateY(-110%);
              }
            }
            svg {
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              top: 0;
              z-index: -14;
              width: 100%;
              circle {
                transform: scale3d(1, 1, 0);
                transform-origin: 50% 50%;
              }
            }

            ul {
              list-style-type: none;
              margin: 0;
              padding: 0;
              @media (${maxMd}) {
                position: relative;
              }
            }
            li {
              margin-right: 4rem;
              @media (${maxMd}) {
                margin-right: 0;
              }
            }
            a:not(#nav-logo) {
              transition: ${colorTrans};
              color: ${secondary};
              font-size: ${paragraph};
              @media (${maxMd}) {
                font-size: ${mobileMenu};
                margin: 0 0 2rem 0;
              }
            }
          `}
        </style>
      </div>
    );
  }
);

export default Navigation;
