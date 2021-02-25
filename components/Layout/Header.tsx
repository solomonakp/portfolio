import React from 'react';
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

export const Header: React.FC<HeaderProps> = ({ logo, theme }) => {
  const open = useSelector((state: RootState) => state.ui.isOpen);

  const {
    media: { minLg, maxMd },
  } = useTheme();
  return (
    <header>
      <div className='container-fluid'>
        <nav className='d-flex align-items-center'>
          <a href='' id='nav-logo' className='mr-auto'>
            {logo}
          </a>
          <Hamburger isOpen={open} />
          <div
            className='d-none d-lg-flex justify-content-center align-items-center '
            id='navigation'
          >
            <Navigation />
            {theme ? <ModeButton isOpen={open} /> : null}
          </div>
        </nav>
      </div>
      <style jsx>{`
        header {
          padding-top: 1.5rem;
          margin-bottom: auto;
          position: fixed;
          right: 0;
          left: 0;
          z-index: 10;
        }
        .container-fluid {
          @media (${minLg}) {
            padding: 0 3.75rem;
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
