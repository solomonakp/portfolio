import { FC } from 'react'
import PostDetails from '@blogComponents/PostDetails'
import { PostDetailsProps } from '../blogComponents/PostDetails'

interface ReadMoreDetailsContainerProps {
  posts: PostDetailsProps[]
}

const ReadMoreContainer: FC<ReadMoreDetailsContainerProps> = (props) => {
  const { posts } = props

  return (
    <div className="container">
      <h2 className="section-heading-space">Read Next</h2>
      <div className="row">
        {posts.map((post) => (
          <PostDetails
            {...post}
            key={post.id}
            className="col-12 col-md-6 col-lg-4"
            imageHeight={330}
            imageWidth={391}
          />
        ))}
      </div>
    </div>
  )
}

export default ReadMoreContainer
