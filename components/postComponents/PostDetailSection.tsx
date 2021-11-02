import React, { FC } from 'react'
import PostInfo, { PostInfoProps } from '@postComponents/PostInfo'

const PostDetailSection: FC<PostInfoProps> = (props) => {
  return (
    <section id="post-detail-section">
      <div className="container">
        <div className="row flex-column">
          <div className="col-12 col-md-10">
            <PostInfo {...props} />
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
