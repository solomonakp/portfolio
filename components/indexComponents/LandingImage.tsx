import React from 'react';
import Image from 'next/image';
import useTheme from '../useTheme';

interface Props {}

const LandingImage = (props: Props) => {
  const {
    media: { maxSm },
  } = useTheme();
  return (
    <div className='col-12 col-md-6 col-lg-5'>
      <div className='image-container'>
        <Image
          className='back-image'
          layout='fill'
          src='/pictures/imagebackground.png'
          objectFit='scale-down'
          objectPosition='top'
        />
        <Image
          layout='responsive'
          src='/pictures/me.png'
          width='100%'
          height='auto'
          alt='Chokor Solomon'
        />
      </div>
      <style jsx>{`
        .col-12 {
          @media (${maxSm}) {
            margin-top: 5rem;
          }
        }
        .image-container {
          width: 100%;
          height: 100%;
          position: 'relative';
          max-width: 445px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default LandingImage;
