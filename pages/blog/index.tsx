import Head from 'next/head';
import React from 'react';
import FeaturedPostSection from '../../components/blogComponents/FeaturedPostSection';
import { getLayout } from '../../components/Layout/Layout';
import PostsSection from '../../components/blogComponents/PostsSection';

interface Props {}

const index = (props: Props) => {
  <Head>
    <title>Blog</title>
  </Head>;
  return (
    <div id='page' className='page-spacing'>
      <FeaturedPostSection />
      <PostsSection />
    </div>
  );
};

index.getLayout = getLayout;

export default index;
