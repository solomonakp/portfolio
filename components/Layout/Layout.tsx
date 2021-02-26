import React from 'react';
import Head from 'next/head';
import { Logo } from '../Svgs';
import useTheme from '../useTheme';
import Footer from './Footer';
import { Header } from './Header';
import FloatingEmail from './FloatingEmail';
import { FloatingContact } from './FloatingContact';

interface LayoutProps {
  children: React.ReactChild;
}

export const Layout: React.FC = ({ children }: LayoutProps) => {
  const {
    colors: { light, secondary, dark },
    effects: { bgTrans, colorTrans },
    size: { sectionHeading, mainHeading, resSectionHeading, resMainHeading },
    media: { maxSm, minXxL },
    spacing: { sectionSpace },
  } = useTheme();
  return (
    <div id='layout'>
      <Head>
        <link rel='icon' type='image/png' href='/favicon.png' />
      </Head>
      <Header theme={true} logo={<Logo width={55} height={43} />} />
      <main>{children}</main>
      <FloatingContact />
      <FloatingEmail />
      <Footer />
      <style jsx global>
        {`
          body {
            background-color: ${light};
            transition: ${bgTrans};
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            letter-spacing: -0.02em;
            font-weight: 600;
            color: ${secondary};
            transition: ${colorTrans};
            min-height: 0vw;
          }
          h1 {
            font-size: ${resMainHeading};
          }

          h2 {
            font-size: ${resSectionHeading};
          }
          p {
            color: ${dark};
            transition: ${colorTrans};
          }
          .left-container {
            width: 100%;
            height: 100%;
            max-width: 540px;
            @media (${maxSm}) {
              margin: 0 auto;
            }
          }
          @media (${minXxL}) {
            h1 {
              font-size: ${mainHeading};
            }
            h2 {
              font-size: ${sectionHeading};
            }
          }
          .section-space {
            margin-bottom: ${sectionSpace};
          }
          @media (${maxSm}) {
            .image-space {
              margin-top: 5rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export const getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;
