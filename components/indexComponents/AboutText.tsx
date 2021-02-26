import React from 'react';
import useTheme from '../useTheme';
useTheme;
interface Props {}

const AboutText = (props: Props) => {
  const {
    media: { maxSm },
  } = useTheme();
  return (
    <div className='col-12 col-md-6 col-lg-5'>
      <div className='about-text'>
        <h2>About Me</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam Amet minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <style jsx>{`
        .col-12 {
          @media (${maxSm}) {
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutText;
