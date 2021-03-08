import React from 'react';
import { featuredObject } from './blogObject';
import FeaturedPostDetails from './FeaturedPostDetails';
import FeaturedImage from './FeaturedImage';

interface Props {}

const FeaturedPostContainer = (props: Props) => {
  return (
    <div className='container'>
      <div className='row'>
        <FeaturedImage />
        <FeaturedPostDetails {...featuredObject} />
      </div>
    </div>
  );
};

export default FeaturedPostContainer;
