import Head from 'next/head';
import React from 'react';
import FeaturedBlogSection from '../../components/blogComponents/FeaturedBlogSection';
import { getLayout } from '../../components/Layout/Layout';

interface Props {}

const index = (props: Props) => {
  <Head>
    <title>Blog</title>
  </Head>;
  return (
    <div id='page' className='page-spacing'>
      <FeaturedBlogSection />
    </div>
  );
};

index.getLayout = getLayout;

export default index;
