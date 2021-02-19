import React from 'react';
import Link from 'next/link';
import useTheme from '../useTheme';
interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = (props) => {
  const {
    media: { maxMd },
    colors: { secondary },
    size: { paragraph, mobileMenu },
  } = useTheme();
  return (
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
      <style jsx>
        {`
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
              padding: 1.5rem 0;
              font-size: ${mobileMenu};
            }
          }
          a:not(#nav-logo) {
            color: ${secondary};
            font-size: ${paragraph};
          }
        `}
      </style>
    </ul>
  );
};

export default Navigation;
