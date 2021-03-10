import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import AboutSection from '../components/indexComponents/AboutSection';
import LandingSection from '../components/indexComponents/LandingSection';
import ProjectsSection from '../components/indexComponents/ProjectsSection';
import SkillSection from '../components/indexComponents/SkillSection';
import { FloatingContact } from '../components/Layout/FloatingContact';
import { getLayout } from '../components/Layout/Layout';
import FloatingEmail from '../components/Layout/FloatingEmail';
import useTheme from '../components/useTheme';

const Index = (props) => {
  const {
    media: { maxXs },
  } = useTheme();
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
      <style jsx global>
        {`
          h2 {
            @media (${maxXs}) {
              text-align: center;
            }
          }
        `}
      </style>
    </div>
  );
};
Index.title = 'main page';
Index.getLayout = getLayout;

export default Index;
