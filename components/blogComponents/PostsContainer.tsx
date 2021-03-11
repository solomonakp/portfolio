import React, { ReactElement } from 'react';
import Posts from './blogObject';
import PostDetails from './PostDetails';

interface Props {}

function PostsContainer({}: Props): ReactElement {
  return (
    <div className='container'>
      <div className='row'>
        {Posts.map((post, index) => (
          <PostDetails {...post} key={index} className='col-12 col-md-6' />
        ))}
      </div>
    </div>
  );
}

export default PostsContainer;
