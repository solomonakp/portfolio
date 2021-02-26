import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import AboutSection from '../components/indexComponents/AboutSection';
import LandingSection from '../components/indexComponents/LandingSection';
import { getLayout } from '../components/Layout/Layout';

const Index = (props) => {
  console.log(props);
  return (
    <div className='index-page'>
      <Head>
        <title>Chokor Solomon</title>
      </Head>
      <LandingSection />
      <AboutSection />
      <style jsx>{``}</style>
    </div>
  );
};

Index.getLayout = getLayout;

export default Index;
