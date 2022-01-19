import React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import FeaturedPostSection from '@blogComponents/FeaturedPostSection'
import { getLayout } from '@layout/Layout'
import PostsSection from '@blogComponents/PostsSection'
import { fetchAPI } from '@utils/functions'
import { BlogSeo, Posts } from '@utils/types'
import Seo from '@components/Seo'
import { createPostsSections } from '@utils/functions'
import { BlogProvider } from '@context/blog/blogContext'
import Pagination from '@components/layout/Pagination'
import '@styles/prism.css'

const Index = ({
  sections,
  blogPage,
  page,
  totalPosts,
  postPerPage,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { seo } = blogPage

  return (
    <BlogProvider value={sections}>
      <div id="page" className="page-spacing">
        <Seo {...seo} isMain />
        <FeaturedPostSection />
        <PostsSection />
      </div>
      <Pagination
        currentPage={page}
        totalItems={totalPosts}
        itemsPerPage={postPerPage}
        pageNeighbours={2}
      />
    </BlogProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { page = 1 },
}) => {
  //  post to be displayed per page
  const postPerPage = 10

  //   start position to query data from
  const start = +page === 1 ? 0 : (+page - 1) * postPerPage

  // Run API calls in parallel
  const [blogPage, totalPosts, featuredPosts] = await Promise.all([
    fetchAPI<BlogSeo>('/homepage'),
    fetchAPI<number>('/articles/count'),
    fetchAPI<Posts>('/articles?featured=true&_limit=1&_sort=published_at:DESC'),
  ])

  // getting featured post
  const featuredPost = featuredPosts[0]

  // featching posts that do not include featured posts
  const posts = await fetchAPI<Posts>(
    `/articles?slug_ne=${featuredPost.slug}&_limit=${postPerPage}&_start=${start}&_sort=published_at:DESC`
  )

  // format data for page component
  const sections = createPostsSections(posts, featuredPost)

  // total post is  total post count  minus featured post
  const postsCount = totalPosts - 1

  // convert page to number
  const currentPage = Number(page)

  return {
    props: {
      sections,
      blogPage,
      page: currentPage,
      totalPosts: postsCount,
      postPerPage,
    },
  }
}

Index.getLayout = getLayout

export default Index
