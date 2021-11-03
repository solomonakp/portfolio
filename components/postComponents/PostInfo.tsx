import Image from 'next/image'
import React from 'react'
import Avatar from '@blogComponents/Avatar'
import useTheme from '@hooks/useTheme'

export interface PostInfoProps {
  date?: string
  title?: string
  author?: string
  image?: string
  avatar?: string
}

const PostInfo: React.FC<PostInfoProps> = ({
  image,
  title,
  author,
  avatar,
  date,
}) => {
  const {
    radius: { card },
  } = useTheme()

  return (
    <div>
      <Image
        src={image}
        layout="intrinsic"
        width="1074"
        height="551"
        objectFit="cover"
        objectPosition="center"
        alt=" "
        className="post-image"
      />
      <h2 className="h2">{title}</h2>
      <Avatar image={avatar} date={date} author={author} />
      <style jsx>{`
        h2 {
          max-width: 750px;
          width: 100%;
          margin-bottom: 1.5rem;
          margin-top: 20px;
        }
        :global(.post-image) {
          border-radius: ${card};
        }
      `}</style>
    </div>
  )
}

export default PostInfo
