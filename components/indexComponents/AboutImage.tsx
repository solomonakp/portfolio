import Image from 'next/image'
import React from 'react'
import useTheme from '@hooks/useTheme'
import working from 'public/pictures/working.jpg'
import { toBase64, shimmer } from '@utils/functions'

const AboutImage = () => {
  const {
    media: { maxSm },
    colors: { projectCardColor },
  } = useTheme()
  return (
    <div className="col-md-6 image-space">
      <div className="left-container">
        <Image
          layout="intrinsic"
          width="540"
          height="426"
          src={working}
          alt="Chokor Solomon"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(540, 426, projectCardColor)
          )}`}
        />
      </div>
      <style jsx>{`
        .col-md-6 {
          @media (${maxSm}) {
            order: 3;
          }
        }
      `}</style>
    </div>
  )
}

export default AboutImage
