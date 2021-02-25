import React from 'react';
import useTheme from '../useTheme';

interface FloatingContainerProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}

const FloatingContainer: React.FC<FloatingContainerProps> = ({
  children,
  left,
  right,
  top,
  bottom,
}) => {
  const {
    colors: { iconColor, hover },
    effects: { fillTrans, colorTrans },
    media: { minLg },
  } = useTheme();
  return (
    <div className='d-none d-lg-block'>
      {children}
      <style jsx>{`
        div {
          width: 40px;
          z-index: 100;
          position: fixed;
          left: ${left ? left : 'initial'};
          right: ${right ? right : 'initial'};
          top: ${top ? top : 'initial'};
          bottom: ${bottom ? bottom : 'initial'};
          & :global(#floating-icons li:last-child) {
            margin-bottom: 35px;
          }
          & :global(li) {
            margin-bottom: 26px;
          }
          & :global(#floating-email) {
            color: ${iconColor};
            writing-mode: vertical-rl;
            transition: ${colorTrans};
          }
          &
            :global(#floating-email:hover, #floating-email:focus, #floating-email:active) {
            color: ${hover};
          }
          & :global(a:hover svg, a:active svg, a:focus svg) {
            fill: ${hover};
            transition: ${fillTrans};
          }
          &
            :global(#fixed-github, #fixed-linkedin, #fixed-twitter, #fixed-telephone) {
            transition: ${fillTrans};
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingContainer;
