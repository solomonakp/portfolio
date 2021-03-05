import React from 'react';
import useTheme from '../useTheme';

interface ChipProps {
  name: string;
}

const Chip: React.FC<ChipProps> = ({ name }) => {
  const {
    colors: { dark },
    border: { buttonBorder, chipBorder },
    radius: { chip },
  } = useTheme();
  return (
    <span>
      {name}
      <style jsx>{`
        span {
          display: inline-block;
          text-align: center;
          white-space: nowrap;
          padding: 0.35em 0.5em;
          font-size: 13px;
          margin-bottom: 0.625rem;
          border-radius: ${chip};
          min-height: 0vw;
          color: ${dark};
          border: ${chipBorder};
          &:not(:last-of-type) {
            margin-right: 0.75rem;
          }
        }
      `}</style>
    </span>
  );
};

export default Chip;
