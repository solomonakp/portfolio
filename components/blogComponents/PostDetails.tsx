import React from 'react';
import Image from 'next/image';
import Summary from '../Layout/Summary';
import useTheme from '../useTheme';

export interface PostDetailsProps {
  title: string;
  description: string;
  date: string;
  tag: string;
  image: string;
}

const PostDetails: React.FC<PostDetailsProps> = ({
  title = 'Handling social media crisis is much easier than you think. There’s just a way to it',
  description = 'Anastasia Hawkings, a single mother of one who makes daily living from her active blog was once travelling through.',
  date = 'Jun 28, 2020',
  tag = 'Development',
  image = '/pictures/card.jpg',
}) => {
  const {
    radius: { card },
    colors: { primary },
    size: { textHeading, resTextHeading },
    media: { maxSm },
  } = useTheme();
  return (
    <div className='col-12 col-md-6'>
      <div className='post-tile'>
        <Image
          src={image}
          width='400'
          height='300'
          layout='responsive'
          objectPosition='center'
          objectFit='cover'
        />
        <p className='d-flex align-items-center'>
          <span className='tag'>{tag}</span>
          <span className='dot'></span>
          <span className='date'>{date}</span>
        </p>
        <h2>{title}</h2>
        <Summary lines={3}>{description}</Summary>
      </div>
      <style jsx>{`
        div {
          margin-bottom: 2.5rem;
          & :global(img) {
            border-radius: ${card};
          }
          p {
            margin-top: 1rem;
            font-weight: 500;
            .dot {
              margin: 0 0.5rem;
              width: 4px;
              height: 4px;
              border-radius: 50%;
              background-color: ${primary};
              display: inline-block;
            }
          }
          h2 {
            font-size: ${textHeading};
            text-align: left !important;
            @media (${maxSm}) {
              font-size: ${resTextHeading};
            }
          }
        }
      `}</style>
    </div>
  );
};

export default PostDetails;
