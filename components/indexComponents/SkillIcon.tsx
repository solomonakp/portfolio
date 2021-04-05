import anime from 'animejs';
import React, { useEffect, useRef } from 'react';
import useScrollTrigger from '../hooks/useScrollTrigger';
import useTheme from '../useTheme';

interface SkillsProps {
  background: string;
  width?: string;
  height?: string;
}

const SkillIcon: React.FC<SkillsProps> = ({
  children,
  background,
  width = '100px',
  height = '100px',
}) => {
  const skillIcon = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const mediaLg = window.matchMedia('(min-width: 991.98px)');
    const mediaSm = window.matchMedia('(max-width: 575.98px)');
    useScrollTrigger({
      trigger: mediaLg.matches ? '#skill-section' : skillIcon.current,
      onEnter: () => {
        if (mediaSm.matches) {
          anime.set(skillIcon.current, {
            scale: 0.75,
          });
        } else {
          anime.set(skillIcon.current, {
            scale: 1,
          });
        }
        anime({
          targets: mediaLg.matches
            ? '#skill-section .skill-icon'
            : skillIcon.current,
          delay: anime.stagger(100),
          duration: 1000,
          easing: 'easeOutExpo',
          translateY: [50, 0],
          opacity: [0, 1],
        });
      },
    });
  }, []);

  const {
    media: { minSm },
  } = useTheme();
  return (
    <div
      className='d-flex justify-content-center align-items-center skill-icon'
      ref={skillIcon}
    >
      {children}
      <style jsx>{`
        div {
          white-space: nowrap;
          border-radius: 50%;
          width: ${width};
          height: ${height};
          background-color: ${background};
          transform: scale(0.75);
          opacity: 0;
          @media (max-width: 400px) {
            &:nth-of-type(16) {
              display: none !important;
            }
          }
          @media (${minSm}) {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default SkillIcon;
