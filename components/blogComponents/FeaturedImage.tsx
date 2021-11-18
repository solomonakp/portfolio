import Image from 'next/image'
import { FC } from 'react'
import useTheme from '@hooks/useTheme'
import { toBase64, shimmer } from '@utils/functions'
interface FeaturedImageProps {
  src: string
}

const FeaturedImage: FC<FeaturedImageProps> = ({ src }) => {
  const {
    radius: { card },
    colors: { projectCardColor },
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
          src={src}
          alt=""
          priority
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(500, 350, projectCardColor)
          )}`}
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
