import { Posts, Post, Image } from './types'
import dayjs from 'dayjs'

export function getStrapiURL(path = '') {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }${path}`
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path: string) {
  const requestUrl = getStrapiURL(path)
  const response = await fetch(requestUrl)
  const data = await response.json()
  return data
}

export function getStrapiMedia(media: Image) {
  const imageUrl = media.url.startsWith('/')
    ? getStrapiURL(media.url)
    : media.url
  return imageUrl
}

export const sortPosts = (posts: Posts) => {
  // sorts post from most recent to least recent
  return posts.slice().sort((a, b) => {
    const dateA = new Date(a.published_at)
    const dateB = new Date(b.published_at)

    return dateA < dateB ? 1 : -1
  })
}

export const getPostSections = (posts: Posts) => {
  // get featured  posts
  const featuredPosts = posts.filter((post) => {
    return post.featured
  })

  // get remaining posts
  const notFeaturedPosts = posts.filter((post) => {
    return post.featured !== true
  })

  //  sorting out featured posts to most recent posts
  const sortedFeaturedPosts = sortPosts(featuredPosts)

  // sorting out remaining posts
  const sortedNotFeaturedPosts = sortPosts(notFeaturedPosts)

  // get featured post object
  const featuredPost = sortedFeaturedPosts[0]

  return {
    featuredPost: featuredPost || null,
    posts: sortedNotFeaturedPosts,
  }
}

export const createFeaturedData = (post: Post) => {
  const featuredImage = getStrapiMedia(post.image)
  const featuredObject = {
    slug: post.slug,
    title: post.title,
    description: post.description,
    image: getStrapiMedia(post.author.picture),
    author: post.author.name,
    date: dayjs(post.created_at).format('MMMM D, YYYY'),
  }

  return { featuredObject, featuredImage }
}

export const createPostsData = (posts: Posts) => {
  const postsData = posts.map((post) => {
    const postData = {
      slug: post.slug,
      title: post.title,
      description: post.description,
      image: getStrapiMedia(post.image),
      tag: post.category.name,
      date: dayjs(post.created_at).format('MMMM D, YYYY'),
      id: post.id,
    }
    return postData
  })

  return postsData
}

export const formatPost = (post: Post) => {
  const postDetails = {
    date: dayjs(post.created_at).format('MMMM D, YYYY'),
    title: post.title,
    author: post.author.name,
    image: getStrapiMedia(post.image),
    avatar: getStrapiMedia(post.author.picture),
  }

  const seo = {
    metaTitle: post.title,
    metaDescription: post.description,
    shareImage: post.image,
    article: true,
  }

  return {
    postDetails,
    content: post.content,
    seo,
  }
}
