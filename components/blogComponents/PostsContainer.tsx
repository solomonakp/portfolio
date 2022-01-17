import React, { FC } from 'react'

import PostDetails, { PostDetailsProps } from '@blogComponents/PostDetails'

interface PostsContainerProps {
  posts: PostDetailsProps[]
}

const PostsContainer: FC<PostsContainerProps> = ({ posts }) => {
  return (
    <div className="container">
      <div className="row">
        {posts.map((post) => (
          <PostDetails
            {...post}
            key={post.id}
            className="col-12 col-md-6 d-block"
          />
        ))}
      </div>
    </div>
  )
}

export default PostsContainer
