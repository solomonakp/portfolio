import Image from 'next/image';
import React from 'react';
import IconLink from '../Layout/IconLink';
import { Git, Github, MaxWindow } from '../Svgs';
import ProjectLinks from './ProjectLinks';
import Chip from './Chip';
import useTheme from '../useTheme';

// remove the optional type when done and the defaults and use rest for repo ans site props
interface ProjectCardProps {
  tags?: string[];
  title?: string;
  description?: string;
  thumbnail?: string;
  repository?: string;
  site?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title = 'Portfolio site with Blog',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum at et nibh gravida ullamcorper mauris, arcu eget duis. Amet et tristique condimentum nisi, lectus....',
  tags = ['React', 'Firebase', 'Next.js', 'bootstrap'],
  thumbnail = '/pictures/project.jpg',
  repository = '/',
  site = '/',
}) => {
  const {
    colors: { dark, cardHover },
    size: { textHeading },
    radius: { card },
  } = useTheme();
  return (
    <div className='card'>
      <div className='front'>
        <div className='image-container'>
          <Image
            layout='intrinsic'
            width='320'
            height='340'
            src={thumbnail}
            className='thumbnail'
            alt='Project thumbnail'
            objectFit='cover'
            objectPosition='top'
          />
        </div>
        <h3>{title}</h3>
        <ProjectLinks site={site} repository={repository} />
      </div>
      <div className='more'>
        <div className='text-box'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className='chips-container'>
          {tags.map((name, index) => (
            <Chip name={name} key={index} />
          ))}
        </div>
        <ProjectLinks site={site} repository={repository} />
      </div>

      <div className='background'></div>
      <style jsx>{`
        .card {
          position: relative;
          width: 320px;
          h3,
          p {
            color: ${dark};
          }
          h3 {
            font-size: ${textHeading};
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
            position: absolute;
            bottom: 0;
            left: 0;
            opacity: 0;
            .text-box,
            .chips-container {
              margin-bottom: 1rem;
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
            }
            .more {
              opacity: 1;
            }
            .background {
              transform: scale(1.2, 1.2);
              opacity: 1;
            }
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
