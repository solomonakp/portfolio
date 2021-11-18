import Image from 'next/image'
import React, { useRef } from 'react'
import ProjectLinks from '@indexComponents/ProjectLinks'
import Chip from '@indexComponents/Chip'
import useTheme from '@hooks/useTheme'
import Summary from '@layout/Summary'
import { toBase64, shimmer } from '@utils/functions'

export interface ProjectCardProps {
  tags: string[]
  title: string
  description: string
  thumbnail: StaticImageData
  repository: string
  site: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  thumbnail,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const {
    colors: {
      lightColor,
      projectCardColor,
      projectParagraphColor,
      projectCardHoverColor,
      projectLoaderColor,
    },
    size: { textHeading, resTextHeading },
    radius: { card },
    media: { maxLg, maxMd },
  } = useTheme()

  return (
    <div className="card" ref={cardRef} tabIndex={0}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="image-container">
              <Image
                layout="intrinsic"
                width="564"
                height="344"
                src={thumbnail}
                className="thumbnail"
                alt="Project thumbnail"
                objectFit="cover"
                objectPosition="top"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(564, 344, projectLoaderColor)
                )}`}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="">
              <div className="text-box">
                <h3>{title}</h3>
                <Summary lines={3}>{description}</Summary>
              </div>
              <div className="chips-container d-flex justify-content-start flex-wrap">
                {tags.map((name, index) => (
                  <Chip name={name} key={index} />
                ))}
              </div>
              <ProjectLinks {...props} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card {
          position: relative;
          width: 100%;
          white-space: nowrap;
          margin-bottom: 2rem;
          padding: 1.8rem 0.8rem 1.8rem 0;
          transition: all 150ms cubic-bezier(0.49, 0.99, 0.78, 1.04);
          background-color: ${projectCardColor};
          border-radius: ${card};
          @media (${maxMd}) {
            padding: 1.8rem 0;
          }
          .row {
            width: 100%;
            margin: 0;
          }

          &:hover,
          &:focus {
            transform: translate3d(0, -0.313rem, 0);
            background-color: ${projectCardHoverColor};
          }

          .image-container {
            width: 100%;
            @media (${maxMd}) {
              margin-bottom: 1rem;
            }
          }
          :global(.thumbnail) {
            border-radius: ${card};
          }
          :global(p) {
            color: ${projectParagraphColor};
          }
          h3 {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 100%;
            font-size: ${textHeading};
            color: ${lightColor};
            @media (${maxLg}) {
              font-size: ${resTextHeading};
            }
          }
          .chips-container {
            margin-bottom: 1.5rem;
            text-overflow: ellipsis;
            white-space: normal;
            max-width: 100%;
            overflow: hidden;
            max-height: 5.375rem;
          }
        }
      `}</style>
    </div>
  )
}

export default ProjectCard
