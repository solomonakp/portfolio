import React from 'react';
import Link from 'next/link';
import useTheme from '../useTheme';
import { ModeButton } from './ModeButton';
import { useDispatch } from 'react-redux';
import { toggleOpen } from '../../redux/reducers/Ui/uiActions';
import { animationCallback } from '../hooks/useNavAnimation';
interface NavigationProps {
  open: boolean;
  theme: boolean;
  animation?: (cb: animationCallback) => void;
}
export type navRefs =
  | [SVGCircleElement, HTMLUListElement, HTMLButtonElement, HTMLDivElement]
  | [];

interface Route {
  text: string;
  route: string;
}

const routes: Route[] = [
  { text: 'About Me', route: '#about-section' },
  { text: 'Skills', route: '#skill-section' },
  { text: 'Projects', route: '#project-section' },
  { text: 'Blog', route: 'blog' },
];

const Navigation = React.forwardRef<any, NavigationProps>(
  ({ theme, open, animation }, ref) => {
    const dispatch = useDispatch();

    const handleScroll = (e) => {
      e.preventDefault();

      const media = window.matchMedia('(max-width: 991.98px)');

      const scrollTo = () => {
        const href = e.target.getAttribute('href');
        console.log();
        const offsetTop = document.querySelector(href).offsetTop;
        scroll({
          top: offsetTop,
          behavior: 'smooth',
        });
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
      media: { maxMd },
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
        <svg>
          <defs>
            <clipPath id='clipPath'>
              {/* <circle className='circle' cx='100%' cy='0' r='0' ref={ref} /> */}
              <path
                d='M43,-58C49.3,-54.7,43.4,-33.4,39.3,-19.1C35.3,-4.7,33.2,2.7,30.9,10.2C28.6,17.7,26.2,25.2,21.1,38.4C15.9,51.6,7.9,70.4,0.3,70C-7.3,69.6,-14.7,49.9,-28.6,39.6C-42.6,29.3,-63.3,28.3,-70.7,19.6C-78,11,-72.1,-5.2,-62,-15.1C-51.8,-25,-37.5,-28.5,-26.5,-30.2C-15.5,-32,-7.7,-32,5.3,-39.4C18.4,-46.7,36.8,-61.3,43,-58Z'
                ref={ref}
                className='circle'
              />
            </clipPath>
          </defs>
        </svg>

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
              transform: translateY(0%) !important;
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
