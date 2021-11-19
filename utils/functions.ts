import { Posts, Post, Image } from './types'
import dayjs from 'dayjs'

export function getStrapiURL(path = '') {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }${path}`
}

export const range = (from: number, to: number, step = 1) => {
  let i = from
  const range = []

  while (i <= to) {
    range.push(i)
    i += step
  }

  return range
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

export const createPostsSections = (posts: Posts, featuredPost: Post) => ({
  featuredPost: featuredPost,
  posts: posts,
})

export const createFeaturedData = (post: Post) => {
  const featuredObject = {
    slug: post.slug,
    title: post.title,
    description: post.description,
    image: getStrapiMedia(post.author.picture),
    author: post.author.name,
    date: dayjs(post.created_at).format('MMMM D, YYYY'),
  }
  const featuredImageData = {
    src: getStrapiMedia(post.image),
    alt: post.image.alternativeText,
    title: post.title,
  }

  return { featuredObject, featuredImageData }
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

export const shimmer = (w, h, color) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs id="g">
    <filter id="f1" x="0" y="0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="15" id="r" />
    </filter>
  </defs>
  <rect width="${w}" height="${h}" fill="${color}" filter="url(#f1)"/>
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="stdDeviation" values="0;50;0" dur="1s" repeatCount="indefinite"    calcMode="paced" /></svg>`

export const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)
