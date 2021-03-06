import React from 'react';
import Image from 'next/image';
import useTheme from '../useTheme';

interface Props {}

const LandingImage = () => {
  return (
    <div className='col-12 col-md-6 col-lg-5 image-space'>
      <div className='image-container'>
        <Image
          className='back-image'
          layout='fill'
          src='/pictures/imagebackground.png'
          objectFit='contain'
          objectPosition='top'
          alt=''
          priority={true}
        />
        <Image
          layout='responsive'
          src='/pictures/me.png'
          width='444.985'
          height='444.985'
          alt='Chokor Solomon'
          priority={true}
        />
      </div>
      <style jsx>{`
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
