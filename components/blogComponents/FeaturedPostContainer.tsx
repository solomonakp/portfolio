import React from 'react'
import { featuredObject } from '@blogComponents/blogObject'
import FeaturedPostDetails from '@blogComponents/FeaturedPostDetails'
import FeaturedImage from '@blogComponents/FeaturedImage'

const FeaturedPostContainer = () => {
  return (
    <div className="container">
      <div className="row">
        <FeaturedImage />
        <FeaturedPostDetails {...featuredObject} />
      </div>
    </div>
  )
}

export default FeaturedPostContainer
