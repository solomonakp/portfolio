import React from 'react'
import Image from 'next/image'
import background from 'public/pictures/imagebackground.png'

import me from 'public/pictures/me.png'

const LandingImage = () => {
  return (
    <div className="d-none d-lg-block col-12 col-md-6 col-lg-5 image-space">
      <div className="image-container">
        <Image
          className="back-image"
          layout="fill"
          src={background}
          objectFit="contain"
          objectPosition="top"
          alt=""
          priority={true}
          placeholder="blur"
        />
        <Image
          layout="responsive"
          src={me}
          width="444.985"
          height="444.985"
          alt="Chokor Solomon"
          priority={true}
          placeholder="blur"
        />
      </div>
      <style jsx>{`
        .image-container {
          width: 100%;
          height: 100%;
          position: 'relative';
          max-width: 445px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  )
}

export default LandingImage
