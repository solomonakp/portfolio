import React from 'react';
import { featuredObject } from './blogObject';
import FeaturedBlogText from './FeaturedBlogText';
import FeaturedImage from './FeaturedImage';

interface Props {}

const FeaturedBlogContainer = (props: Props) => {
  return (
    <div className='container'>
      <div className='row'>
        <FeaturedImage />
        <FeaturedBlogText {...featuredObject} />
      </div>
    </div>
  );
};

export default FeaturedBlogContainer;
