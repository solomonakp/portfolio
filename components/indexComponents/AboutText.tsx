import anime from 'animejs';
import React, { useRef, useEffect } from 'react';
import useScrollTrigger from '../hooks/useScrollTrigger';
import useTheme from '../useTheme';

interface Props {}

const AboutText = (props: Props) => {
  const h2 = useRef<HTMLHeadingElement>(null!);
  const p = useRef<HTMLParagraphElement>(null!);

  useEffect(() => {
    useScrollTrigger({
      trigger: h2.current,

      onEnter: () => {
        const timeLine = anime.timeline({
          easing: 'easeOutExpo',
          duration: 1000,
        });
        timeLine
          .add({
            targets: h2.current,
            translateY: [50, 0],
            opacity: [0, 1],
          })
          .add(
            {
              targets: p.current,
              translateY: [50, 0],
              opacity: [0, 1],
            },
            '-=250'
          );
      },
    });
  }, []);

  const {
    media: { maxSm },
  } = useTheme();
  return (
    <div className='col-12 col-md-6 col-lg-5'>
      <div className='about-text'>
        <h2 ref={h2}>About Me</h2>
        <p ref={p}>
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
          .about-text {
            overflow: hidden;
          }

          h2,
          p {
            opacity: 0;
          }

          h2 {
            text-align: left !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutText;
