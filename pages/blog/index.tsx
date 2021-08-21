import Head from 'next/head'
import React from 'react'
import FeaturedPostSection from '../../components/blogComponents/FeaturedPostSection'
import { getLayout } from '../../components/layout/Layout'
import PostsSection from '../../components/blogComponents/PostsSection'

const index = () => {
  return (
    <div id="page" className="page-spacing">
      <Head>
        <title>Blog</title>
      </Head>
      <FeaturedPostSection />
      <PostsSection />
    </div>
  )
}

index.getLayout = getLayout

export default index
