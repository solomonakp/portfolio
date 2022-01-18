import { FC } from 'react'
import PostBody, { PostBodyProps } from '@postComponents/PostBody'

const PostBodySection: FC<PostBodyProps> = (props) => {
  return (
    <section id="post-body" className="section-space">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10">
            <PostBody {...props} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostBodySection
