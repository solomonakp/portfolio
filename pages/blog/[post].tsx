import React from 'react'
import { getLayout } from '@layout/Layout'
import PostBodySection from '@components/postComponents/PostBodySection'
import PostDetailSection from '@components/postComponents/PostDetailSection'
import ReadMoreSection from '@components/postComponents/ReadMoreSection'

const Post = () => {
  return (
    <div id="post-page" className="page-spacing">
      <PostDetailSection />
      <PostBodySection />
      <ReadMoreSection />
    </div>
  )
}

Post.getLayout = getLayout

export default Post
