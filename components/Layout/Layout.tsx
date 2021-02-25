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
    colors: { light, secondary },
    effects: { bgTrans, colorTrans, fillTrans },
    size: { sectionHeading },
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
            font-weight: 600;
            color: ${secondary};
            transition: ${colorTrans};
          }
          h3 {
            font-size: ${sectionHeading};
          }
        `}
      </style>
    </div>
  );
};

export const getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;
