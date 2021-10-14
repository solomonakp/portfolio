import React from 'react'
import FeaturedPostDetails from '@blogComponents/FeaturedPostDetails'
import FeaturedImage from '@blogComponents/FeaturedImage'
import { useBlog } from '@context/blog/blogContext'
import { createFeaturedData } from '@utils/functions'
import Link from 'next/link'

const FeaturedPostContainer = () => {
  const { featuredPost } = useBlog()

  const {
    featuredImage,
    featuredObject: { slug, ...rest },
  } = createFeaturedData(featuredPost)

  return (
    <Link as={`/blog/${slug}`} href="/blog/[id]">
      <a className="container d-block">
        <div className="row">
          <FeaturedImage src={featuredImage} />
          <FeaturedPostDetails {...rest} />
        </div>
      </a>
    </Link>
  )
}

export default FeaturedPostContainer
