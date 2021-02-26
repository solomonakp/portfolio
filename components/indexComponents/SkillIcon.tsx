import React from 'react';

interface SkillsProps {
  background: string;
  width?: string;
  height?: string;
}

const SkillIcon: React.FC<SkillsProps> = ({
  children,
  background,
  width = '112px',
  height = '112px',
}) => {
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
        }
      `}</style>
    </div>
  );
};

export default SkillIcon;
