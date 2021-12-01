import Image from 'next/image'
import React from 'react'
import useTheme from '@hooks/useTheme'
import working from 'public/pictures/working.jpg'
import { toBase64, shimmer } from '@utils/functions'

const AboutImage = () => {
  const {
    media: { maxSm },
    colors: { projectCardColor },
    radius: { button },
  } = useTheme()
  return (
    <div className="col-md-6 image-space">
      <div className="left-container">
        <Image
          layout="intrinsic"
          width="1368"
          height="912"
          src={working}
          alt="Chokor Solomon"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(540, 426, projectCardColor)
          )}`}
          className="about-image"
        />
      </div>
      <style jsx>{`
        .col-md-6 {
          @media (${maxSm}) {
            order: 3;
          }
        }
        :global(.about-image) {
          border-radius: ${button};
        }
      `}</style>
    </div>
  )
}

export default AboutImage
