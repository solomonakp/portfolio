import React, { useEffect, useRef } from 'react';
import useTheme from '../useTheme';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/index';
import Hamburger from './Hamburger';
import Navigation, { navRefs } from './Navigation';
import useNavAnimation from '../hooks/useNavAnimation';

interface HeaderProps {
  logo?: React.ReactElement;
  theme?: boolean;
}

let prevPos;
if (process.browser) {
  prevPos = window.pageYOffset;
}

export const Header: React.FC<HeaderProps> = ({ logo, theme }) => {
  const header = useRef<HTMLElement>(null!);
  const navElements = useRef<navRefs>([]!);

  const navAnimation = useNavAnimation(navElements.current);

  useEffect(() => {
    // scroll event
    window.addEventListener('scroll', animate);
    return () => {
      window.removeEventListener('scroll', animate);
    };
  }, []);

  const animate = () => {
    const navBar = header.current;
    let currentPos = window.pageYOffset;
    if (prevPos > currentPos) {
      // animation
      navBar.style.transform = 'translate3d(0,0px,0)';

      if (prevPos > 100) {
        // box-shadow
        navBar.style.boxShadow = '0 2px 10px 0px rgba(0, 0, 0, 0.2)';
      } else {
        // box-shadow
        navBar.style.boxShadow = 'initial';
      }
    } else {
      // animation
      navBar.style.transform = 'translate3d(0,-74px,0)';
    }
    prevPos = currentPos;
  };

  const setNavRefs = (el: never) => {
    if (el && !navElements.current.includes(el)) {
      navElements.current.push(el);
    }
  };

  const { isOpen } = useSelector((state: RootState) => state.ui);

  const {
    media: { minLg },
    colors: { navColor, light },
  } = useTheme();
  return (
    <header ref={header}>
      <div className='container-fluid'>
        <nav className='d-flex align-items-center'>
          <a href='' id='nav-logo' className='mr-auto'>
            {logo}
          </a>
          <Hamburger isOpen={isOpen} animation={navAnimation} />
          <Navigation
            theme={theme}
            open={isOpen}
            ref={setNavRefs}
            animation={navAnimation}
          />
        </nav>
      </div>
      <style jsx>{`
        header {
          padding: 1rem 0;
          margin-bottom: auto;
          position: fixed;
          right: 0;
          left: 0;
          z-index: 10;
          height: 74px;
          background-color: ${light};
          transition: all ease-in-out 300ms;
          @media screen and (-webkit-min-device-pixel-ratio: 0) {
            background: ${navColor};
            backdrop-filter: blur(5px);
          }

          @-moz-document url-prefix() {
            & {
              background-color: ${light};
            }
          }
        }
        .container-fluid {
          @media (${minLg}) {
            padding: 0 2.5rem;
          }
        }

        #nav-logo {
          margin-right: auto;
          z-index: 11;
        }
      `}</style>
    </header>
  );
};
