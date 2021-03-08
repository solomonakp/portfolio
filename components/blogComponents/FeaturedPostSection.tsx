import React from 'react';
import FeaturedPostContainer from './FeaturedPostContainer';

interface Props {}

const FeaturedPostSection = (props: Props) => {
  return (
    <section id='featured-section' className='section-space'>
      <FeaturedPostContainer />
    </section>
  );
};

export default FeaturedPostSection;
