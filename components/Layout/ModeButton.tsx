import React from 'react';
import { Sun } from '../Svgs';
import useTheme from '../useTheme';

interface ModeButtonProps {
  isOpen: boolean;
}

export const ModeButton: React.FC<ModeButtonProps> = ({ isOpen }) => {
  const {
    media: { maxMd },
  } = useTheme();

  return (
    <button id='nav-btn'>
      <Sun width={24} height={24} />
      <style jsx>{`
        button {
          margin-left: 5rem;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 32px;
          height: 32px;
          /* background-color: transparent; */
          @media (${maxMd}) {
            position: absolute;
            top: 60px;
            right: 20px;
          }
        }
      `}</style>
    </button>
  );
};
