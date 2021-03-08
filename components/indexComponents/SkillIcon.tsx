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
    media: { minSm },
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
          transform: scale(0.75);
          @media (max-width: 400px) {
            &:nth-of-type(16) {
              display: none !important;
            }
          }
          @media (${minSm}) {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default SkillIcon;
