import React from 'react';

interface Props {
  lines: number;
  fontSize?: number;
  lineHeight?: number;
  className?: string;
  id?: string;
}

const Summary: React.FC<Props> = ({
  lines,
  fontSize = 16,
  lineHeight = 1.5,
  children,
  ...props
}) => {
  const toRems = fontSize % 1 === 0 ? fontSize / 16 : fontSize;

  return (
    <p {...props}>
      {children}
      <style jsx>{`
        p {
          overflow: hidden;
          max-width: 100%;
          -webkit-line-clamp: ${lines};
          display: -webkit-box;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          white-space: normal;
          font-size: ${toRems + 'rem'};
          height: ${lines * toRems * lineHeight + 'rem'};
        }
      `}</style>
    </p>
  );
};

export default Summary;
