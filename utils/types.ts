export interface Category {
  id: number
  name: string
  slug: string
  created_at: Date
  updated_at: Date
}

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

export interface Large {
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

export interface Medium {
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

export interface Small {
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
  large: Large
  medium: Medium
  small: Small
}

export interface Picture {
  id: number
  name: string
  alternativeText?: any
  caption?: any
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

export interface Author {
  id: number
  name: string
  email: string
  created_at: Date
  updated_at: Date
  picture: Picture
}

export interface Image {
  id: number
  name: string
  alternativeText?: any
  caption?: any
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

export interface Post {
  id: number
  title: string
  description: string
  content: string
  slug: string
  category: Category
  author: Author
  published_at: Date
  created_at: Date
  updated_at: Date
  image: Image
  featured: boolean
}

export type Posts = Post[]

export interface SeoType {
  id: string
  metaTitle: string
  metaDescription: string
  shareImage?: Image
  siteName: string
}

export interface Hero {
  id: string
  title: string
}

export interface BlogSeo {
  id: string
  seo: SeoType
  hero: Hero
}

export interface PostSections {
  featuredPost: Post
  posts: Posts
}

export type BlogResponse = [Posts, BlogSeo]
