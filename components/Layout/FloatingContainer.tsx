import React from 'react';
import useTheme from '../useTheme';

interface FloatingContainerProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  id?: string;
}

const FloatingContainer: React.FC<FloatingContainerProps> = ({
  children,
  left,
  right,
  top,
  bottom,
  id,
  ...props
}) => {
  const {
    colors: { iconColor, hover },
    effects: { fillTrans, colorTrans },
  } = useTheme();
  return (
    <div id={id} {...props}>
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
            transform: rotate(90deg);
            position: relative;
            top: -70px;
            transition: ${colorTrans};
            font-weight: 500;
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
        #left {
          @media (max-width: 1250px) {
            left: 8px;
          }
        }
        #right {
          @media (max-width: 1250px) {
            right: 8px;
          }
        }
        #left,
        #right {
          @media (max-width: 1050px) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingContainer;
