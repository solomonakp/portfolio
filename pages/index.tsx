import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import AboutSection from '../components/indexComponents/AboutSection';
import LandingSection from '../components/indexComponents/LandingSection';
import ProjectsSection from '../components/indexComponents/ProjectsSection';
import SkillSection from '../components/indexComponents/SkillSection';
import { FloatingContact } from '../components/Layout/FloatingContact';
import { getLayout } from '../components/Layout/Layout';
import FloatingEmail from '../components/Layout/FloatingEmail';

const Index = (props) => {
  return (
    <div id='index-page'>
      <Head>
        <title>Chokor Solomon</title>
      </Head>
      <FloatingContact />
      <FloatingEmail />
      <LandingSection />
      <AboutSection />
      <SkillSection />
      <ProjectsSection />
    </div>
  );
};
Index.title = 'main page';
Index.getLayout = getLayout;

export default Index;
