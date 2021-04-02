import anime from 'animejs';
import { time } from 'node:console';
import React, { useRef } from 'react';
import { Waypoint } from 'react-waypoint';
import useRunOnce from '../hooks/useRunOnce';
import useTheme from '../useTheme';
useTheme;
interface Props {}

const AboutText = (props: Props) => {
  const h2 = useRef<HTMLHeadingElement>(null!);
  const p = useRef<HTMLParagraphElement>(null!);
  const once = useRunOnce();
  const animation = () => {
    once(() => {
      const media = window.matchMedia('(max-width: 767.98px)');
      const timeLine = anime.timeline({
        easing: 'easeOutExpo',
        duration: 500,
      });
      timeLine
        .add({
          targets: h2.current,
          translateX: [200, 0],
          opacity: [0, 1],
        })
        .add(
          {
            targets: p.current,
            translateY: [200, 0],
            opacity: [0, 1],
          },
          '-=250'
        );
    });
  };
  const {
    media: { maxSm },
  } = useTheme();
  return (
    <div className='col-12 col-md-6 col-lg-5'>
      <Waypoint onEnter={animation}>
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
      </Waypoint>
      <style jsx>{`
        .col-12 {
          @media (${maxSm}) {
            margin: 0 auto;
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
