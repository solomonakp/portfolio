import Image from 'next/image'
import React from 'react'
import Avatar from '@blogComponents/Avatar'

interface PostInfoProps {
  date?: string
  title?: string
  author?: string
  image?: string
  avatar?: string
}

const PostInfo: React.FC<PostInfoProps> = ({
  image = '/pictures/card.jpg',
  title = 'Why Software Developers should work with Software Agencies',
  author = 'Chokor Solomon',
  avatar = '/pictures/avatar.jpeg',
  date = 'Jun 28, 2020',
}) => {
  return (
    <div>
      <Image
        src={image}
        layout="intrinsic"
        width="1074"
        height="551"
        objectFit="cover"
        objectPosition="center"
        alt=""
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
      `}</style>
    </div>
  )
}

export default PostInfo
