import React from 'react'
import PostBody from '@postComponents/PostBody'

const PostBodySection = () => {
  return (
    <section id="post-body" className="section-space">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10">
            <PostBody />
          </div>
        </div>
      </div>
      <style jsx>{`
        section {
        }
      `}</style>
    </section>
  )
}

export default PostBodySection
