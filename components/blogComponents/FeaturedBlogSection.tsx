import React from 'react';
import FeaturedBlogContainer from './FeaturedBlogContainer';

interface Props {}

const FeaturedBlogSection = (props: Props) => {
  return (
    <section id='featured-section' className='section-space'>
      <FeaturedBlogContainer />
    </section>
  );
};

export default FeaturedBlogSection;
