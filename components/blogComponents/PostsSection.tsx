import React from 'react'
import PostsContainer from '@blogComponents/PostsContainer'
import { useBlog } from '@context/blog/blogContext'
import { createPostsData } from '@utils/functions'

const PostsSection = () => {
  const { posts } = useBlog()

  const postData = posts && createPostsData(posts)

  return (
    <section id="posts" className="section-space">
      {posts ? (
        <PostsContainer posts={postData} />
      ) : (
        <h1>No featured post yet</h1>
      )}
    </section>
  )
}

export default PostsSection
