import React from 'react';
import Link from 'next/link';
import useTheme from '../useTheme';
import { ModeButton } from './ModeButton';
import { useDispatch } from 'react-redux';
import { toggleOpen } from '../../redux/reducers/Ui/uiActions';
import { animationCallback } from '../hooks/useNavAnimation';
import { gsap } from 'gsap/dist/gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

interface NavigationProps {
  open: boolean;
  theme: boolean;
  animation?: (cb: animationCallback) => void;
}
export type navRefs =
  | [HTMLUListElement, HTMLButtonElement, HTMLDivElement]
  | [];

interface Route {
  text: string;
  route: string;
}

const routes: Route[] = [
  { text: 'About Me', route: '#about-section' },
  { text: 'Skills', route: '#skill-section' },
  { text: 'Projects', route: '#project-section' },
  { text: 'Blog', route: '/blog' },
];

const Navigation = React.forwardRef<any, NavigationProps>(
  ({ theme, open, animation }, ref) => {
    const dispatch = useDispatch();
    gsap.registerPlugin(ScrollToPlugin);

    const handleScroll = (e) => {
      e.preventDefault();

      const media = window.matchMedia('(max-width: 991.98px)');

      const scrollTo = () => {
        const href = e.target.getAttribute('href');

        gsap.to(window, { duration: 0.01, scrollTo: href });
      };
      // check for media query below 991.98px
      if (media.matches) {
        // dispatch toggleOpen
        dispatch(toggleOpen());
        // animate
        animation(scrollTo);
        // scroll to document position
      } else {
        // false
        scrollTo();
      }
    };

    const {
      media: { maxMd, minLg },
      colors: { secondary, navOverlay },
      size: { paragraph, mobileMenu },
      effects: { colorTrans },
    } = useTheme();

    return (
      <div
        className='d-flex justify-content-center align-items-center '
        id='navigation'
        ref={ref}
      >
        <ul className='d-lg-flex align-items-center' ref={ref}>
          {routes.map(({ text, route }, index) => {
            return (
              <li key={index}>
                {text === 'Blog' ? (
                  <Link href={route} scroll={true}>
                    <a>{text}</a>
                  </Link>
                ) : (
                  <a href={route} onClick={handleScroll}>
                    {text}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        {theme ? <ModeButton isOpen={open} ref={ref} /> : null}

        <style jsx>
          {`
            #navigation {
              @media (${minLg}) {
                transform: translateY(0%) !important;
              }
              @media (${maxMd}) {
                width: 100%;
                height: 100vh;
                position: fixed;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                background: ${navOverlay};
                z-index: 10;
                transform: translateX(-100%);
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
              .circle {
                // transform: scale3d(1, 1, 0);
                // transform-origin: 50% 50%;
                transform: translate(100%, -50%);
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
              font-weight: 500;
              @media (${minLg}) {
                opacity: 1 !important;
              }
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
