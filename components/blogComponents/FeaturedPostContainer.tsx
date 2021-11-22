import React from 'react'
import FeaturedPostDetails from '@blogComponents/FeaturedPostDetails'
import FeaturedImage from '@blogComponents/FeaturedImage'
import { useBlog } from '@context/blog/blogContext'
import { createFeaturedData } from '@utils/functions'
import Link from 'next/link'

const FeaturedPostContainer = () => {
  const { featuredPost } = useBlog()

  const {
    featuredObject: { slug, ...rest },
    featuredImageData,
  } = createFeaturedData(featuredPost)

  return (
    <Link as={`/blog/post/${slug}`} href="/blog/post/[slug]">
      <a className="container d-block">
        <div className="row">
          <FeaturedImage {...featuredImageData} />
          <FeaturedPostDetails {...rest} />
        </div>
      </a>
    </Link>
  )
}

export default FeaturedPostContainer
