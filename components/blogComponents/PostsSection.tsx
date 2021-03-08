import React from 'react';
import PostsContainer from './PostsContainer';

interface Props {}

const PostsSection = (props: Props) => {
  return (
    <section id='posts' className='section-space'>
      <PostsContainer />
    </section>
  );
};

export default PostsSection;
