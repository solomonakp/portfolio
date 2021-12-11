import React from 'react'
import PostsContainer from '@blogComponents/PostsContainer'
import { useBlog } from '@context/blog/blogContext'
import { createPostsData } from '@utils/functions'
import NoPost from './NoPost'

const PostsSection = () => {
  const { posts } = useBlog()

  const postData = posts && createPostsData(posts)

  if (!posts) {
    return <NoPost>No posts yet</NoPost>
  }

  return (
    <section id="posts" className="section-space">
      <PostsContainer posts={postData} />
    </section>
  )
}

export default PostsSection
