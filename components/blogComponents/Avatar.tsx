import React from 'react'
import Image from 'next/image'
import { toBase64, shimmer } from '@utils/functions'
import useTheme from '@hooks/useTheme'
interface Props {
  author: string
  date: string
  image: string
  className?: string
  id?: string
}

const Avatar: React.FC<Props> = ({ author, date, image, ...props }) => {
  const {
    colors: { projectCardColor },
  } = useTheme()

  return (
    <div className="d-flex align-items-center" {...props}>
      <div className="avatar d-flex justify-content-center align-items-center">
        <Image
          src={image}
          width="60"
          height="60"
          objectFit="cover"
          objectPosition="center"
          layout="fixed"
          alt={`picture of ${author}`}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(60, 60, projectCardColor)
          )}`}
        />
      </div>
      <div className="avatar-text">
        <p className="name">{author}</p>
        <p className="label">{date}</p>
      </div>
      <style jsx>{`
        .avatar {
          border-radius: 50%;
          width: 60px;
          height: 60px;
          overflow: hidden;
          margin-right: 1rem;
        }
        p {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  )
}

export default Avatar
