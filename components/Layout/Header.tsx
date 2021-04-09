import React, { useEffect, useRef, useState } from 'react';
import useTheme from '../useTheme';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/index';
import Hamburger from './Hamburger';
import Navigation, { navRefs } from './Navigation';
import useNavAnimation from '../hooks/useNavAnimation';
import Link from 'next/link';
import useDocumentScrollThrottled from '../hooks/useDocumentScrollThrottled';

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

  const [hideHeader, setHideHeader] = useState(false);
  const [ShowShadow, setShowShadow] = useState(false);

  const MINIMUM_SCROLL = 74;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = ShowShadow ? 'shadow' : '';
  const hiddenStyle = hideHeader ? 'hidden' : '';

  console.log(shadowStyle, hiddenStyle);

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
          <Link href='/' scroll={true}>
            <a id='nav-logo' className='mr-auto'>
              {logo}
            </a>
          </Link>

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
          transition: all ease-in-out 300ms;
          background-color: ${light};
          box-shadow: ${ShowShadow
            ? '0 2px 10px 0px rgba(0, 0, 0, 0.2)'
            : 'initial'};
          transform: ${hideHeader
            ? 'translate3d(0,-74px,0)'
            : 'translate3d(0,0px,0)'};

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
