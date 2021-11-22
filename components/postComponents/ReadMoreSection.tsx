import { FC } from 'react'
import ReadMoreContainer from '@postComponents/ReadMoreContainer'
import { Posts } from '@utils/types'
import { createPostsData } from '@utils/functions'

interface ReadMoreSectionProps {
  posts: Posts
}

const ReadMoreSection: FC<ReadMoreSectionProps> = (props) => {
  const { posts } = props
  const postData = createPostsData(posts)

  return (
    <section id="read-more-section">
      <ReadMoreContainer posts={postData} />
    </section>
  )
}

export default ReadMoreSection
