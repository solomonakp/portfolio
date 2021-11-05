import React from 'react'
import { GetStaticProps } from 'next'
import FeaturedPostSection from '@blogComponents/FeaturedPostSection'
import { getLayout } from '@layout/Layout'
import PostsSection from '@blogComponents/PostsSection'
import { fetchAPI } from '@utils/functions'
import { BlogSeo, BlogResponse, PostSections } from '@utils/types'
import Seo from '@components/Seo'
import { getPostSections } from '@utils/functions'
import { BlogProvider } from '@context/blog/blogContext'
// import { Post, Posts } from '@utils/types'

interface blogPageProps {
  sections: PostSections
  blogPage: BlogSeo
}

const Index = ({ sections, blogPage }: blogPageProps) => {
  const { seo } = blogPage

  console.log(sections, 'sections')

  return (
    <BlogProvider value={sections}>
      <div id="page" className="page-spacing">
        <Seo {...seo} />
        <FeaturedPostSection />
        <PostsSection />
      </div>
    </BlogProvider>
  )
}

export async function getStaticPaths() {
  // query Strapi to calculate the total page number

  const count = await fetchAPI('/articles/count')

  console.log(count, 'page count')

  return {
    paths: [
      { params: { page: '1' } },
      { params: { page: '2' } },
      { params: { page: '3' } },
    ],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async () => {
  // Run API calls in parallel
  const [posts, blogPage, totalPosts] = await Promise.all([
    fetchAPI('/articles'),
    fetchAPI('/homepage'),
    fetchAPI('/articles/count'),
  ])

  const sections = getPostSections(posts)

  console.log(totalPosts)

  return {
    props: {
      sections,
      blogPage,
      totalPosts: totalPosts,
    },
    revalidate: 1,
  }
}

Index.getLayout = getLayout

export default Index
