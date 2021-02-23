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
    colors: { light },
    effects: { bgTrans },
  } = useTheme();
  return (
    <div id='layout'>
      <Head>
        <link rel='icon' type='image/png' href='/favicon.png' />
      </Head>
      <Header theme={true} logo={<Logo width={96} height={64} />} />
      {children}
      <FloatingContact />
      <FloatingEmail />
      <Footer />
      <style jsx global>
        {`
          body {
            background-color: ${light};
            transition: ${bgTrans};
          }
        `}
      </style>
    </div>
  );
};

export const getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;
