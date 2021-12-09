import React from 'react'
import FeaturedPostContainer from '@blogComponents/FeaturedPostContainer'
import { useBlog } from '@context/blog/blogContext'
const FeaturedPostSection = () => {
  const { featuredPost } = useBlog()

  console.log(featuredPost, 'featured Post')

  return (
    <section id="featured-section" className="section-space">
      {featuredPost ? <FeaturedPostContainer /> : <h1>No featured post yet</h1>}
    </section>
  )
}

export default FeaturedPostSection
