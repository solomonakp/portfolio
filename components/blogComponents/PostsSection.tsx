import React from 'react'
import PostsContainer from '@blogComponents/PostsContainer'
import { useBlog } from '@context/blog/blogContext'
import { createPostsData } from '@utils/functions'

const PostsSection = () => {
  const { posts } = useBlog()

  const postData = createPostsData(posts)

  return (
    <section id="posts" className="section-space">
      <PostsContainer posts={postData} />
    </section>
  )
}

export default PostsSection
