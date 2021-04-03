import anime from 'animejs';
import Image from 'next/image';
import React, { useRef } from 'react';
import { Waypoint } from 'react-waypoint';
import useRunOnce from '../hooks/useRunOnce';
import useTheme from '../useTheme';

interface Props {}

const AboutImage = (props: Props) => {
  const imageContainer = useRef<HTMLDivElement>(null!);
  const once = useRunOnce();
  const {
    media: { maxSm },
  } = useTheme();
  const animation = () => {
    // once(() => {
    //   anime({
    //     targets: imageContainer.current,
    //     duration: 1000,
    //     easing: 'easeOutExpo',
    //     opacity: {
    //       value: [0, 1],
    //       easing: 'linear',
    //     },
    //     translateY: [400, 0],
    //   });
    // });
  };
  return (
    <div className='col-md-6 image-space'>
      <Waypoint onEnter={animation} bottomOffset='10%' topOffset='50%'>
        <div className='left-container' ref={imageContainer}>
          <Image
            layout='intrinsic'
            width='540'
            height='426'
            src='/pictures/working.jpg'
            alt='Chokor Solomon'
          />
        </div>
      </Waypoint>
      <style jsx>{`
        .left-container {
          opacity: 0;
        }
        .col-md-6 {
          @media (${maxSm}) {
            order: 3;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutImage;
