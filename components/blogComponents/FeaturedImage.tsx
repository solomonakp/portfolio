import Image from 'next/image'
import React from 'react'
import useTheme from 'hooks/useTheme'

const FeaturedImage = (props) => {
  const {
    radius: { card },
  } = useTheme()
  return (
    <div className="col-12 col-md-7">
      <div className="image-container">
        <Image
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          width={500}
          height={350}
          src="/pictures/card.jpg"
          alt=""
        />
      </div>
      <style jsx>{`
        div {
          & :global(img) {
            border-radius: ${card};
          }
        }
      `}</style>
    </div>
  )
}

export default FeaturedImage
