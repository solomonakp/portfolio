import React from 'react';
import Heading from './Heading';
import SkillsContainer from './SkillsContainer';

interface Props {}

const SkillSection = (props: Props) => {
  return (
    <section id='skill-section' className='section-space'>
      <div className='container'>
        <Heading className='section-heading-space'>Skills</Heading>
        <SkillsContainer />
      </div>
    </section>
  );
};

export default SkillSection;
