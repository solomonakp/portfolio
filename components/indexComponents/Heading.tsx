import anime from 'animejs';
import React, { useEffect, useRef } from 'react';
import useScrollTrigger from '../hooks/useScrollTrigger';

interface HeadingProps {
  className: string;
}
const Heading: React.FC<HeadingProps> = ({ children, className }) => {
  const heading = useRef<HTMLHeadingElement>(null!);
  useEffect(() => {
    useScrollTrigger({
      trigger: heading.current,
      once: true,
      onEnter: () => {
        anime({
          targets: heading.current,
          duration: 1000,
          easing: 'easeOutExpo',
          translateY: [50, 0],
          opacity: [0, 1],
        });
      },
    });
  });
  return (
    <h2 ref={heading} className={className}>
      {children}
      <style jsx>
        {`
          h2 {
            opacity: 0;
          }
        `}
      </style>
    </h2>
  );
};

export default Heading;
