import React from 'react'
import Avatar from '@blogComponents/Avatar'
import useTheme from '@hooks/useTheme'
import Summary from '@layout/Summary'

export interface FeaturedPostDetailsProps {
  date: string
  title: string
  description: string
  author: string
  image: string
}

const FeaturedPostDetails: React.FC<FeaturedPostDetailsProps> = ({
  title,
  description,
  ...props
}) => {
  const {
    size: { textHeading },
    media: { maxSm },
  } = useTheme()
  return (
    <div className="col-12 col-md-5">
      <div className="area d-flex flex-column ">
        <h1>{title}</h1>
        <Summary className="description" lines={6}>
          {description}
        </Summary>
        <Avatar id="featured-avi" {...props} />
      </div>

      <style jsx>{`
        div {
          @media (${maxSm}) {
            margin-top: 1rem;
            margin-left: 0;
          }
          .area {
            width: 100%;
            height: 100%;
          }
          h1 {
            font-size: ${textHeading};
          }
          & :global(.description) {
            margin-bottom: 1.25rem;
            @media (${maxSm}) {
              margin-bottom: 0;
            }
          }
          & :global(#featured-avi) {
            margin-top: auto;
            @media (${maxSm}) {
            }
          }
        }
      `}</style>
    </div>
  )
}

export default FeaturedPostDetails
