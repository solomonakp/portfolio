import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import ProjectLinks from './ProjectLinks'
import Chip from './Chip'
import useTheme from '../useTheme'
import Summary from '../layout/Summary'
import useScrollTrigger from '../hooks/useScrollTrigger'
import anime from 'animejs'

export interface ProjectCardProps {
  tags: string[]
  title: string
  description: string
  thumbnail: string
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
  const cardRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    const mediaLg = window.matchMedia('(min-width: 991.98px)')
    const mediaSm = window.matchMedia('(max-width: 575.98px)')
    useScrollTrigger({
      trigger: cardRef.current,
      onEnter: () => {
        anime({
          targets: mediaLg.matches ? '#project-section .card' : cardRef.current,
          delay: anime.stagger(100),
          duration: 1000,
          easing: 'easeOutExpo',
          translateY: [50, 0],
          opacity: [0, 1],
        })
      },
    })
  }, [])

  const {
    colors: { dark, cardHover },
    size: { textHeading, resTextHeading },
    radius: { card },
    media: { maxLg },
  } = useTheme()

  return (
    <div className="card" ref={cardRef}>
      <div className="front">
        <div className="image-container">
          <Image
            layout="intrinsic"
            width="320"
            height="340"
            src={thumbnail}
            className="thumbnail"
            alt="Project thumbnail"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
        <h3>{title}</h3>
        <ProjectLinks {...props} />
      </div>
      <div className="more">
        <div className="text-box">
          <h3>{title}</h3>
          <Summary lines={5}>{description}</Summary>
        </div>
        <div className="chips-container d-flex justify-content-start">
          {tags.map((name, index) => (
            <Chip name={name} key={index} />
          ))}
        </div>
        <ProjectLinks {...props} />
      </div>

      <div className="background"></div>
      <style jsx>{`
        .card {
          position: relative;
          width: 20rem;
          white-space: nowrap;
          margin-bottom: 4.125rem;
          @media (${maxLg}) {
            width: 15.625rem;
          }

          h3 {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 100%;
            font-size: ${textHeading};
            color: ${dark};
            @media (${maxLg}) {
              font-size: ${resTextHeading};
            }
          }

          .front {
            transition: 250ms;
            transform-origin: bottom;
            h3 {
              margin: 1rem 0 0.5rem 0;
            }
            .image-container {
              width: 100%;
            }

            :global(.thumbnail) {
              border-radius: ${card};
            }
            :global(.link-container),
            h3 {
              transition: opacity 100ms linear;
            }
          }

          .more {
            opacity: 0;
            position: absolute;
            top: 42%;
            left: 0;
            right: 0;
            opacity: 0;
            transform: scale(0);
            @media (${maxLg}) {
              top: 32%;
            }
            .text-box,
            .chips-container {
              margin-bottom: 0.75rem;
              text-overflow: ellipsis;
              white-space: normal;
              max-width: 100%;
            }
            .chips-container {
              overflow: hidden;
              max-height: 5.375rem;
            }
          }
          .background {
            position: absolute;
            opacity: 0;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            border-radius: ${card};
            background-color: ${cardHover};
            transform-origin: center;
            z-index: -10;
            transform: scale(0.2, 0.8);
            transition: transform 200ms cubic-bezier(0.49, 0.99, 0.78, 1.04),
              opacity 100ms linear;
          }

          &:hover {
            .front {
              transform-origin: top;
              transform: translateY(-30%) scale(0.85);
              :global(.link-container),
              h3 {
                opacity: 0;
              }
              @media (${maxLg}) {
                transform: translateY(-30%) scale(0.75);
              }
            }
            .more {
              opacity: 1;
              transform: scale(1);
              transition: transform 200ms ease, opacity 150ms linear;
            }
            .background {
              transform: scale(1.2);
              opacity: 1;
            }
          }
        }
      `}</style>
    </div>
  )
}

export default ProjectCard
