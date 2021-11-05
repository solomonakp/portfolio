import React from 'react'
import { GetServerSideProps } from 'next'
import FeaturedPostSection from '@blogComponents/FeaturedPostSection'
import { getLayout } from '@layout/Layout'
import PostsSection from '@blogComponents/PostsSection'
import { fetchAPI } from '@utils/functions'
import { BlogSeo, BlogResponse, PostSections } from '@utils/types'
import Seo from '@components/Seo'
import { getPostSections } from '@utils/functions'
import { BlogProvider } from '@context/blog/blogContext'
import { useRouter } from 'next/router'

interface blogPageProps {
  sections: PostSections
  blogPage: BlogSeo
  page: number
  totalPosts: number
  postPerPage: number
}

const Index = ({
  sections,
  blogPage,
  page,
  totalPosts,
  postPerPage,
}: blogPageProps) => {
  const { seo } = blogPage

  const router = useRouter()

  console.log(sections, 'sections')

  const lastPage = Math.ceil(totalPosts / postPerPage)

  return (
    <BlogProvider value={sections}>
      <div id="page" className="page-spacing">
        <Seo {...seo} />
        {/* <FeaturedPostSection /> */}
        <PostsSection />
      </div>
      <button
        onClick={() => router.push(`/blog?page=${page - 1}`)}
        disabled={page <= 1}
      >
        previous
      </button>
      <button
        onClick={() => router.push(`/blog?page=${page + 1}`)}
        disabled={page === lastPage}
      >
        Next
      </button>
    </BlogProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { page = 1 },
}) => {
  const postPerPage = 3
  const start = +page === 1 ? 0 : (+page - 1) * postPerPage

  // Run API calls in parallel
  const [posts, blogPage, totalPosts, featuredPosts]: BlogResponse =
    await Promise.all([
      fetchAPI(`/articles?_limit=${postPerPage}&_start=${start}`),
      fetchAPI('/homepage'),
      fetchAPI('/articles/count'),
      fetchAPI('/articles?featured=true'),
    ])

  console.log(featuredPosts, featuredPosts)
  const sections = getPostSections(posts)

  return {
    props: {
      sections,
      blogPage,
      page: +page,
      totalPosts,
      postPerPage,
    },
  }
}

Index.getLayout = getLayout

export default Index
