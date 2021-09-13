import React from 'react'
import { ReadMore } from '@blogComponents/blogObject'
import PostDetails from '@blogComponents/PostDetails'

const ReadMoreContainer = () => {
  return (
    <div className="container">
      <h2 className="section-heading-space">Read Next</h2>
      <div className="row">
        {ReadMore.map((post, index) => (
          <PostDetails
            {...post}
            key={index}
            className="col-12 col-md-6 col-lg-4"
            imageHeight={330}
            imageWidth={391}
          />
        ))}
      </div>
    </div>
  )
}

export default ReadMoreContainer
