import Image from 'next/image';
import React from 'react';

interface Props {}

const FeaturedImage = (props: Props) => {
  return (
    <div className='col-12 col-md-6'>
      <div className='image-container'>
        <Image
          layout='responsive'
          objectFit='cover'
          objectPosition='center'
          width='500'
          height='350'
          src='/pictures/card.jpg'
        />
      </div>
    </div>
  );
};

export default FeaturedImage;
