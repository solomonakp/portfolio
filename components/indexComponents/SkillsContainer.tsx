import React from 'react';
import SkillIcon from './SkillIcon';
import skills from './skillsObject';
import Index from '../../pages/index';

interface Props {}

const SkillsContainer = (props: Props) => {
  return (
    <div className='row'>
      {skills.map(({ backgroundColor, Icon, ...props }, index) => {
        return (
          <SkillIcon background={backgroundColor} key={index}>
            <Icon {...props} />
          </SkillIcon>
        );
      })}
      <style jsx>{``}</style>
    </div>
  );
};

export default SkillsContainer;
