import Image from 'next/image'
import React from 'react'
import useTheme from '@hooks/useTheme'
import working from 'public/pictures/working.jpg'

const AboutImage = () => {
  const {
    media: { maxSm },
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
