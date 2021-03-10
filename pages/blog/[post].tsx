import React from 'react';
import { getLayout } from '../../components/Layout/Layout';
import PostBodySection from '../../components/PostComponents/PostBodySection';
import PostDetailSection from '../../components/PostComponents/PostDetailSection';

interface Props {}

const Post = (props: Props) => {
  return (
    <div id='post-page' className='page-spacing'>
      <PostDetailSection />
      <PostBodySection />
    </div>
  );
};

Post.getLayout = getLayout;

export default Post;
