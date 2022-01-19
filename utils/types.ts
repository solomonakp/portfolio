import { MDXRemoteSerializeResult } from 'next-mdx-remote'
export type target = '_blank' | '_parent' | '_self' | '_top '

export interface Thumbnail {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  path?: any
  url: string
}

export interface Formats {
  thumbnail: Thumbnail
}

export interface Author {
  id: number
  name: string
  email: string
  created_at: Date
  updated_at: Date
  picture: Image
}

export interface Image {
  id: number
  name: string
  alternativeText?: string
  caption?: string
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl?: any
  provider: string
  provider_metadata?: any
  created_at: Date
  updated_at: Date
}

export interface BasePost<T> {
  id: number
  title: string
  description: string
  content: T
  slug: string
  tags: string
  author: Author
  published_at: Date
  created_at: Date
  updated_at: Date
  image: Image
  featured: boolean
}

export type Post = BasePost<string>

export type MdxPost = BasePost<
  MDXRemoteSerializeResult<Record<string, unknown>>
>

export type Posts = Post[]

export interface SeoType {
  id?: string
  metaTitle: string
  metaDescription: string
  shareImage?: Image
  siteName?: string
}

export interface Hero {
  id: string
  title: string
}

export interface BlogSeo {
  id?: string
  seo: SeoType
  hero: Hero
}

export interface PostSections {
  featuredPost: Post
  posts: Posts
}

export type PostsCount = number

export type BlogResponse = [BlogSeo, PostsCount, Posts]
