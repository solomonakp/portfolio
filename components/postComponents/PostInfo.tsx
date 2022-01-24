import Image from 'next/image'
import React from 'react'
import Avatar from '@blogComponents/Avatar'
import useTheme from '@hooks/useTheme'
import { toBase64, shimmer } from '@utils/functions'
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
    colors: { projectCardColor },
    size: { resSectionHeading },
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
        alt={`Image for Blog Post titled:${title}`}
        className="post-image"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(1074, 551, projectCardColor)
        )}`}
      />
      <h1 className="h2">{title}</h1>
      <Avatar image={avatar} date={date} author={author} />
      <style jsx>{`
        h1 {
          max-width: 750px;
          width: 100%;
          margin-bottom: 1.5rem;
          margin-top: 20px;
          font-size: ${resSectionHeading};
        }
        :global(.post-image) {
          border-radius: ${card};
        }
      `}</style>
    </div>
  )
}

export default PostInfo
