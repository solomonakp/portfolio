import React from 'react';
import LandingImage from './LandingImage';
import LandingText from './LandingText';
import useTheme from '../useTheme';

interface Props {}

const LandingSection = (props: Props) => {
  const {
    media: { maxSm },
  } = useTheme();
  return (
    <section id='landing-section' className='d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <LandingText />
          <div className='d-none d-lg-block col-1'></div>
          <LandingImage />
        </div>
      </div>
      <style jsx>{`
        #landing-section {
          min-height: 100vh;
          @media (${maxSm}) {
            margin: 6.25em 0;
          }
        }
      `}</style>
    </section>
  );
};

export default LandingSection;
