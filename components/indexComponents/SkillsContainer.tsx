import React from 'react';
import SkillIcon from './SkillIcon';
import skills from './skillsObject';
import Index from '../../pages/index';
import useTheme from '../useTheme';

interface Props {}

const SkillsContainer = (props: Props) => {
  const {
    media: { minXl, minLg, minMd, minSm },
  } = useTheme();
  return (
    <div className=''>
      {skills.map(({ backgroundColor, Icon, ...props }, index) => {
        return (
          <SkillIcon background={backgroundColor} key={index}>
            <Icon {...props} />
          </SkillIcon>
        );
      })}
      <style jsx>{`
        div {
          display: grid;
          grid-row-gap: 40px;
          grid-template-columns: repeat(3, 100px);
          grid-column-gap: calc((100% - 300px) / 3);
          justify-content: center;
          @media (max-width: 375px) {
            grid-template-columns: repeat(2, 100px);
            grid-column-gap: calc((100% - 200px) / 2);
          }
          @media (${minSm}) {
            grid-template-columns: repeat(3, 100px);
            grid-column-gap: calc((100% - 300px) / 2);
          }
          @media (${minMd}) {
            grid-template-columns: repeat(4, 100px);
            grid-column-gap: calc((100% - 400px) / 3);
          }
          @media (${minLg}) {
            grid-template-columns: repeat(7, 100px);
            grid-column-gap: calc((100% - 700px) / 6);
          }

          @media (${minXl}) {
            grid-template-columns: repeat(8, 100px);
            grid-column-gap: calc((100% - 800px) / 7);
          }
        }
      `}</style>
    </div>
  );
};

export default SkillsContainer;
