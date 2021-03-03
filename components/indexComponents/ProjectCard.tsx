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
  thumbnail = '/pictures/card.jpg',
  repository = '/',
  site = '/',
}) => {
  const {
    colors: { dark },
    size: { textHeading },
  } = useTheme();
  return (
    <div className='card'>
      <div className='front'>
        <Image layout='responsive' width='300' height='320' src={thumbnail} />
        <h3>{title}</h3>
        <ProjectLinks site={site} repository={repository} />
      </div>
      <div className='back'>
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
          h3,
          p {
            color: ${dark};
          }
          h3 {
            font-size: ${textHeading};
          }

          .front {
            h3 {
              margin: 1rem 0;
            }
          }

          .back {
            display: none;
            .text-box,
            .chips-container {
              margin-bottom: 1rem;
            }
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
