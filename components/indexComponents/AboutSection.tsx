import React from 'react';
import AboutImage from './AboutImage';
import AboutText from './AboutText';

interface Props {}

const AboutSection = (props: Props) => {
  return (
    <section id='about-section' className='section-space'>
      <div className='container'>
        <div className='row'>
          <AboutImage />
          <div className='d-none d-lg-block col-1'></div>
          <AboutText />
        </div>
      </div>
      <style jsx>{`
        #about-section {
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
