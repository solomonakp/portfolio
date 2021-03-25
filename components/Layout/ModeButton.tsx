import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useTheme from '../useTheme';
import { toggleDark } from '../../redux/reducers/Ui/uiActions';
import { RootState } from '../../redux/reducers/index';
import anime from 'animejs';

interface ModeButtonProps {
  isOpen: boolean;
}

export const ModeButton: React.FC<ModeButtonProps> = ({ isOpen }) => {
  const sunTickGroup = useRef<SVGPathElement>(null!);
  const sunCircle = useRef<SVGPathElement>(null!);
  const { isDark } = useSelector((state: RootState) => state.ui);
  const {
    media: { maxMd },
  } = useTheme();
  const dispatch = useDispatch();

  const toggleMode = () => {
    const sunTicks = sunTickGroup.current.children;
    const circle = sunCircle.current;

    const timeline = anime.timeline({
      easing: 'easeInOutQuad',
      duration: 400,
      direction: 'normal',
    });
    if (isDark) {
      timeline.add({
        targets: sunTicks,
        opacity: 1,
        delay: anime.stagger(50),
      });
    } else {
      timeline
        .add({
          targets: sunTicks,
          opacity: 0,
          delay: anime.stagger(50),
        })
        .add({
          targets: circle,
          d: {
            value: [
              'M204.8,97.6a77.15,77.15,0,0,0-22.05-15.39A75,75,0,0,0,97.6,97.6a76,76,0,0,0,53.6,129.6,74.6,74.6,0,0,0,53.6-22.4,75.57,75.57,0,0,0,15.38-85.51A73.33,73.33,0,0,0,204.8,97.6Z',
              'M101.3,121c-19.5,0-37.5-8.2-50.3-20.9c-12.8-12.7-21-30.6-21-50c0-19.4,8.3-37.3,21-50c1.4-1.4-19.7,6.2-28.6,15.4C8.8,29.2,0,48.4,0,69.2s8.8,40,22.4,53.6C36,136.4,55.2,145.2,76,145.2s40-8.4,53.6-22.4c4-4,7.6-8.5,10.7-13.4C129.1,116.7,115.6,121,101.3,121z',
            ],
          },
        });
    }
    dispatch(toggleDark());
  };

  return (
    <button
      className='d-flex justify-content-center align-items-center'
      onClick={toggleMode}
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
        <path
          ref={sunCircle}
          d='M204.8,97.6a77.15,77.15,0,0,0-22.05-15.39A75,75,0,0,0,97.6,97.6a76,76,0,0,0,53.6,129.6,74.6,74.6,0,0,0,53.6-22.4,75.57,75.57,0,0,0,15.38-85.51A73.33,73.33,0,0,0,204.8,97.6Z'
        />
        <g ref={sunTickGroup}>
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
