import React from 'react';

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
          margin-right: 40px;
          margin-bottom: 50px;
        }
      `}</style>
    </div>
  );
};

export default SkillIcon;
