import React from 'react';
import SkillsContainer from './SkillsContainer';

interface Props {}

const SkillSection = (props: Props) => {
  return (
    <section id='skill-section' className='section-space'>
      <div className='container'>
        <h2 className='section-heading-space'>Skills</h2>
        <SkillsContainer />
      </div>
    </section>
  );
};

export default SkillSection;
