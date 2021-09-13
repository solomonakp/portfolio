import React from 'react'
import PostInfo from './PostInfo'

const PostDetailSection = () => {
  return (
    <section id="post-detail-section">
      <div className="container">
        <div className="row flex-column">
          <div className="col-12 col-md-10">
            <PostInfo />
          </div>
        </div>
      </div>
      <style jsx>{`
        section {
          margin-bottom: 5rem;
        }
      `}</style>
    </section>
  )
}

export default PostDetailSection
