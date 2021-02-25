import React from 'react';
import Button from '../Layout/Button';
import useTheme from '../useTheme';
interface Props {}

const LandingText = (props: Props) => {
  const {
    colors: { secondary, dark },
    size: { resMainHeading, mainHeading },
    media: { minXxL, maxSm },
    effects: { colorTrans },
  } = useTheme();
  return (
    <div className='col-12 col-md-6 '>
      <div className='landing-text d-flex flex-column justify-content-center'>
        <h1>Hire Freelancers With better reviews</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud ametnostrud amet.
        </p>
        <div className='d-flex'>
          <div className='contact-btn-container'>
            <Button>Contact me</Button>
          </div>
          <div className='download-btn-btn-container'>
            <Button outline={true}>Download Cv</Button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .landing-text {
          width: 100%;
          height: 100%;
          max-width: 540px;
          @media (${maxSm}) {
            margin: 0 auto;
          }
        }
        h1 {
          color: ${secondary};
          font-size: ${resMainHeading};
          letter-spacing: -0.02em;
          font-weight: 600;
          min-height: 0vw;
          margin-bottom: 1rem;
          transition: ${colorTrans};
          @media (${minXxL}) {
            font-size: ${mainHeading};
          }
        }
        p {
          margin-bottom: 1.5rem;
          color: ${dark};
        }
        .contact-btn-container {
          margin-right: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default LandingText;
