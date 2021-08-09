import anime from 'animejs';
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import useScrollTrigger from '../hooks/useScrollTrigger';
import useTheme from '../useTheme';

interface Props {}

const AboutImage = (props: Props) => {
  const imageContainer = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    useScrollTrigger({
      trigger: imageContainer.current,
      once: true,
      onEnter: () => {
        anime({
          targets: imageContainer.current,
          duration: 1000,
          easing: 'easeOutExpo',
          opacity: {
            value: [0, 1],
            easing: 'linear',
          },
          translateY: [50, 0],
        });
      },
    });
  });

  const {
    media: { maxSm },
  } = useTheme();
  return (
    <div className='col-md-6 image-space'>
      <div className='left-container' ref={imageContainer}>
        <Image
          layout='intrinsic'
          width='540'
          height='426'
          src='/pictures/working.jpg'
          alt='Chokor Solomon'
        />
      </div>
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
