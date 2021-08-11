import React from 'react'
import { getLayout } from '../../components/layout/Layout'
import PostBodySection from '../../components/PostComponents/PostBodySection'
import PostDetailSection from '../../components/PostComponents/PostDetailSection'
import ReadMoreSection from '../../components/PostComponents/ReadMoreSection'

interface Props {}

const Post = (props: Props) => {
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
