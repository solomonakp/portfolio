import Head from 'next/head'
import React from 'react'
import FeaturedPostSection from '@blogComponents/FeaturedPostSection'
import { getLayout } from '@layout/Layout'
import PostsSection from '@blogComponents/PostsSection'
import { fetchAPI } from '@utils/functions'
import { Posts } from '@utils/types'

const Index = ({ posts }: { posts: Posts }) => {
  console.log(posts, 'data from api')
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

export const getStaticProps = async () => {
  const posts = await fetchAPI('articles')

  return {
    props: {
      posts,
    },
    revalidate: 1,
  }
}

Index.getLayout = getLayout

export default Index
