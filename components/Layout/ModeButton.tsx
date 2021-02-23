import React from 'react';
import { useDispatch } from 'react-redux';
import { Sun } from '../Svgs';
import useTheme from '../useTheme';
import { toggleDark } from '../../redux/reducers/Ui/uiActions';

interface ModeButtonProps {
  isOpen: boolean;
}

export const ModeButton: React.FC<ModeButtonProps> = ({ isOpen }) => {
  const {
    media: { maxMd },
  } = useTheme();

  const dispatch = useDispatch();

  return (
    <button id='nav-btn' onClick={() => dispatch(toggleDark())}>
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
          margin-right: 1.2rem; /* background-color: transparent; */
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
