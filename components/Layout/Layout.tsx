import React from 'react';
import useTheme from '../useTheme';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactChild;
}

export const Layout: React.FC = ({ children }: LayoutProps) => {
  const {
    fontFamily: { textFont, headingFont },
  } = useTheme();
  return (
    <div className='layout'>
      <Header theme={true} />
      <style jsx global>
        {`
          @font-face {
            font-family: 'Work Sans';
            font-style: normal;
            font-weight: 400;
            src: local('WorkSans-Regular'),
              url('/fonts/work_sans/WorkSans-Regular.ttf') format('truetype');
          }

          @font-face {
            font-family: 'Work Sans';
            font-style: normal;
            font-weight: 500;
            src: local('WorkSans-Medium'),
              url('/fonts/work_sans/WorkSans-Medium.ttf') format('truetype');
          }

          @font-face {
            font-family: 'Lufga';
            font-style: normal;
            font-weight: 400;
            src: local('Lufga-Regular'),
              url('/fonts/lufga_fonts/Lufga-Regular.otf') format('opentype');
          }

          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            src: local('Lufga-SemiBold'),
              url('/fonts/lufga_fonts/Lufga-SemiBold.otf') format('opentype');
          }

          * {
            box-sizing: border-box;
          }
          html {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            text-size-adjust: 100%;
          }

          html,
          body {
            height: 100%;
            width: 100%;
            font-family: ${textFont};
          }

          body {
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
            font-kerning: normal;
            scroll-behavior: smooth;
            overflow-x: hidden;
          }

          a,
          a:hover,
          a:active,
          a:focus {
            outline: none;
            text-decoration: none;
            display: inline-block;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${headingFont};
          }

          button {
            white-space: nowrap;
            display: inline-block;
            border: 0;
          }

          .layout {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export const getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;
