import React from 'react'
import FeaturedPostContainer from '@blogComponents/FeaturedPostContainer'
import { useBlog } from '@context/blog/blogContext'
import NoPost from './NoPost'
NoPost
const FeaturedPostSection = () => {
  const { featuredPost } = useBlog()

  if (!featuredPost) {
    return <NoPost>No featured post yet</NoPost>
  }

  return (
    <section id="featured-section" className="section-space">
      <FeaturedPostContainer />
    </section>
  )
}

export default FeaturedPostSection
