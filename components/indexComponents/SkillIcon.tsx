import React from 'react';
import useTheme from '../useTheme';

interface SkillsProps {
  background: string;
  width?: string;
  height?: string;
}

const SkillIcon: React.FC<SkillsProps> = ({
  children,
  background,
  width = '100px',
  height = '100px',
}) => {
  const {
    media: { minXl, minLg, minMd },
  } = useTheme();
  return (
    <div className='d-flex justify-content-center align-items-center'>
      {children}
      <style jsx>{`
        div {
          white-space: nowrap;
          border-radius: 50%;
          width: ${width};
          height: ${height};
          background-color: ${background};
          &:nth-of-type(16) {
            @media (min-width: 375px) {
              grid-column: 1/4;
              justify-self: center;
            }
            @media (${minMd}) {
              grid-column: initial;
            }
          }
          &:nth-of-type(n + 15) {
            @media (${minLg}) {
              display: none !important;
            }
            @media (${minXl}) {
              display: flex !important;
            }
          }
        }
      `}</style>
    </div>
  );
};

export default SkillIcon;
