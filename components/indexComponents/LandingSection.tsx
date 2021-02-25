import React from 'react';
import LandingImage from './LandingImage';
import LandingText from './LandingText';

interface Props {}

const LandingSection = (props: Props) => {
  return (
    <section id='landing-section' className='d-flex align-items-center'>
      <div className='container-lg'>
        <div className='row'>
          <LandingText />
          <div className='d-none d-lg-block col-1'></div>
          <LandingImage />
        </div>
      </div>
      <style jsx>{`
        #landing-section {
          min-height: 80vh;
        }
      `}</style>
    </section>
  );
};

export default LandingSection;
