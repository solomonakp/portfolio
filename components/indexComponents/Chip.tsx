import React from 'react';
import useTheme from '../useTheme';

interface ChipProps {
  name: string;
}

const Chip: React.FC<ChipProps> = ({ name }) => {
  const {
    colors: { dark },
    border: { buttonBorder },
    radius: { chip },
  } = useTheme();
  return (
    <span>
      {name}
      <style jsx>{`
        span {
          white-space: nowrap;
          padding: 0.375em 0.5em;
          font-size: 14px;
          margin-bottom: 0.625rem;
          border-radius: ${chip};
          color: ${dark};
          border: ${buttonBorder};
          &:not(:last-of-type) {
            margin-right: 1rem;
          }
        }
      `}</style>
    </span>
  );
};

export default Chip;
