import React from 'react';
import useTheme from '../useTheme';

interface FloatingListProps {
  id?: string;
}
const FloatingList: React.FC<FloatingListProps> = ({
  children,
  id,
  ...props
}) => {
  const {
    colors: { iconColor },
  } = useTheme();
  return (
    <ul {...props} id={id}>
      {children}
      <style jsx>{`
        ul {
          margin: 0;
          padding: 0;
          list-style-type: none;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          &:before {
            content: '';
            height: 80px;
            display: block;
            width: 1px;
            border-radius: 1px;
            order: 10;
            background-color: ${iconColor};
          }
        }
      `}</style>
    </ul>
  );
};

export default FloatingList;
