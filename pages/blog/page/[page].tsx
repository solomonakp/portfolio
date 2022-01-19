import React from 'react'
import {
  InferGetServerSidePropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next'
import FeaturedPostSection from '@blogComponents/FeaturedPostSection'
import { getLayout } from '@layout/Layout'
import PostsSection from '@blogComponents/PostsSection'
import { fetchAPI } from '@utils/functions'
import { BlogSeo, Posts } from '@utils/types'
import Seo from '@components/Seo'
import { createPostsSections } from '@utils/functions'
import { BlogProvider } from '@context/blog/blogContext'
import Pagination from '@components/layout/Pagination'
import NoPost from '@components/blogComponents/NoPost'

const Index = ({
  sections,
  blogPage,
  page,
  totalPosts,
  postPerPage,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  // const { seo } = blogPage

  const { featuredPost, posts } = sections

  if (!featuredPost && !posts) {
    return <NoPost height="100vh">No posts yet</NoPost>
  }

  return (
    <BlogProvider value={sections}>
      <div id="page" className="page-spacing">
        {/* <Seo {...seo} /> */}
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

//  post to be displayed per page
const postPerPage = 10

export const getStaticPaths: GetStaticPaths = async () => {
  // Run API calls in parallel
  const totalPosts: number = await fetchAPI('/articles/count')

  // finding the median of maxValue if there are total items else total pages = 1
  const totalPages = totalPosts ? Math.ceil(totalPosts / postPerPage) : 1
  // query Strapi to calculate the total page number

  const paths = []

  for (let index = 1; index <= totalPages; index++) {
    paths.push({ params: { page: index.toString() } })
  }

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { page } = context.params

  // convert page to number
  const currentPage = Number(page)

  //   start position to query data from
  const start = +page === 1 ? 0 : (+page - 1) * postPerPage

  // Run API calls in parallel
  const [blogPage, totalPosts, featuredPosts] = await Promise.all([
    fetchAPI<BlogSeo>('/homepage'),
    fetchAPI<number>('/articles/count'),
    fetchAPI<Posts>('/articles?featured=true&_limit=1&_sort=published_at:DESC'),
  ])

  // total post is  total post count  minus featured post
  const postsCount = totalPosts === 0 ? 0 : totalPosts - 1

  if (totalPosts === 0) {
    return {
      props: {
        blogPage,
        sections: {
          featuredPost: null,
          posts: null,
        },
        page: 0,
        totalPosts: 0,
        postPerPage,
      },
    }
  }

  const paginationData = {
    page: currentPage,
    totalPosts: postsCount,
    postPerPage,
  }

  // getting featured post
  const featuredPost = featuredPosts[0]

  // featching posts that do not include featured posts
  const posts = await fetchAPI<Posts>(
    `/articles?slug_ne=${
      featuredPost?.slug && null
    }&_limit=${postPerPage}&_start=${start}&_sort=published_at:DESC`
  )

  if (!featuredPost) {
    const sections = createPostsSections(posts, null)

    return {
      props: {
        sections,
        blogPage,
        ...paginationData,
      },
    }
  }

  if (posts.length === 0) {
    const sections = createPostsSections(null, featuredPost)

    return {
      props: {
        sections,
        blogPage,
        ...paginationData,
      },
      revalidate: 5,
    }
  }

  const sections = createPostsSections(posts, featuredPost)

  return {
    props: {
      sections,
      blogPage,
      ...paginationData,
    },
    revalidate: 5,
  }
}

Index.getLayout = getLayout

export default Index
