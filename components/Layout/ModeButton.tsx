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
      <svg
        version='1.1'
        id='sun'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 300 300'
        role='presentation'
        width={24}
        height={24}
      >
        <g>
          <path d='M204.8,97.6a77.15,77.15,0,0,0-22.05-15.39A75,75,0,0,0,97.6,97.6a76,76,0,0,0,53.6,129.6,74.6,74.6,0,0,0,53.6-22.4,75.57,75.57,0,0,0,15.38-85.51A73.33,73.33,0,0,0,204.8,97.6Z' />
          <path d='M151.2,51.6a10.59,10.59,0,0,0,10.4-10.4V10.4a10.4,10.4,0,0,0-20.8,0V41.2A10.59,10.59,0,0,0,151.2,51.6Z' />
          <path d='M236.4,80.8l22-22A10.18,10.18,0,1,0,244,44.4l-22,22a10.14,10.14,0,0,0,0,14.4C225.6,84.8,232,84.8,236.4,80.8Z' />
          <path d='M292,140.8H261.2a10.4,10.4,0,1,0,0,20.8H292a10.4,10.4,0,0,0,0-20.8Z' />
          <path d='M236,221.6A10.18,10.18,0,0,0,221.6,236l22,22A10.18,10.18,0,1,0,258,243.6Z' />
          <path d='M151.2,250.8a10.59,10.59,0,0,0-10.4,10.4V292a10.4,10.4,0,0,0,20.8,0V261.2A10.59,10.59,0,0,0,151.2,250.8Z' />
          <path d='M66,221.6l-22,22A10.18,10.18,0,1,0,58.4,258l22-22a10.14,10.14,0,0,0,0-14.4C76.8,217.6,70.4,217.6,66,221.6Z' />
          <path d='M51.6,151.2a10.59,10.59,0,0,0-10.4-10.4H10.4a10.4,10.4,0,1,0,0,20.8H41.2A10.59,10.59,0,0,0,51.6,151.2Z' />
          <path d='M66,80.8A10.18,10.18,0,0,0,80.4,66.4l-22-22A10.18,10.18,0,0,0,44,58.8Z' />
        </g>
      </svg>
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
