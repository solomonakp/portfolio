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
    <button
      className='d-flex justify-content-center align-items-center'
      onClick={() => dispatch(toggleDark())}
    >
      <Sun width={24} height={24} />
      <style jsx>{`
        button {
          margin-left: 5rem;
          border-radius: 50%;
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
