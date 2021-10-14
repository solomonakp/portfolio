import React from 'react'
import FeaturedPostSection from '@blogComponents/FeaturedPostSection'
import { getLayout } from '@layout/Layout'
import PostsSection from '@blogComponents/PostsSection'
import { fetchAPI } from '@utils/functions'
import { BlogSeo, BlogResponse, PostSections } from '@utils/types'
import Seo from '@components/Seo'
import { getPostSections } from '@utils/functions'
import { BlogProvider } from '@context/blog/blogContext'
import { GetStaticProps } from 'next'

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

export const getStaticProps: GetStaticProps = async () => {
  // Run API calls in parallel
  const [posts, blogPage]: BlogResponse = await Promise.all([
    fetchAPI('/articles'),
    fetchAPI('/homepage'),
  ])

  const sections = getPostSections(posts)

  return {
    props: {
      sections,
      blogPage,
    },
    revalidate: 1,
  }
}

Index.getLayout = getLayout

export default Index
