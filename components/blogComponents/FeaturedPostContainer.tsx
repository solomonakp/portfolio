import React from 'react'
import { featuredObject } from '@blogComponents/blogObject'
import FeaturedPostDetails from '@blogComponents/FeaturedPostDetails'
import FeaturedImage from '@blogComponents/FeaturedImage'

interface Props {}

const FeaturedPostContainer = (props: Props) => {
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
