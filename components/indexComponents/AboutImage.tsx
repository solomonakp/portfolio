import Image from 'next/image'
import React from 'react'
import useTheme from '@hooks/useTheme'

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
          src="/pictures/working.jpg"
          alt="Chokor Solomon"
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
