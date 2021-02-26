import React from 'react';
import SkillsContainer from './SkillsContainer';

interface Props {}

const SkillSection = (props: Props) => {
  return (
    <section id='skill-section' className='section-spacing'>
      <div className='container'>
        <h2>Skills</h2>
        <SkillsContainer />
      </div>
    </section>
  );
};

export default SkillSection;
