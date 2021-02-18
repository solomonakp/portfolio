import React from 'react';
import Link from 'next/link';
interface HeaderProps {
  logo?: React.ReactElement;
  theme?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ logo, theme }) => {
  return (
    <header>
      <nav>
        <a href='' id='nav-logo'>
          {logo}
        </a>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link href='/'>
              <a className='nav-link'>Home</a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/'>
              <a className='nav-link'>About Me</a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/'>
              <a className='nav-link'>Skills</a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/'>
              <a className='nav-link'>Blog</a>
            </Link>
          </li>
          {theme ? (
            <li className='nav-item'>
              <button id='nav-btn'></button>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
};
