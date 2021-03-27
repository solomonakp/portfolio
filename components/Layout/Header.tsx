import React, { useEffect, useRef } from 'react';
import useTheme from '../useTheme';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/index';
import Hamburger from './Hamburger';
import { ModeButton } from './ModeButton';
import Navigation from './Navigation';

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

  const { isOpen } = useSelector((state: RootState) => state.ui);

  const {
    media: { minLg, maxMd },
    colors: { navColor, light },
  } = useTheme();
  return (
    <header ref={header}>
      <div className='container-fluid'>
        <nav className='d-flex align-items-center'>
          <a href='' id='nav-logo' className='mr-auto'>
            {logo}
          </a>
          <Hamburger isOpen={isOpen} />
          <div
            className='d-none d-lg-flex justify-content-center align-items-center '
            id='navigation'
          >
            <Navigation />
            {theme ? <ModeButton isOpen={isOpen} /> : null}
          </div>
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
          overflow: hidden;
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
        }
        #navigation {
          @media (${maxMd}) {
            width: 100%;
            height: 100%;
            position: fixed;
            left: 0;
            right: 0;
            top: 63.988px;
            bottom: 0;
          }
        }
      `}</style>
    </header>
  );
};
