import React from 'react';
import { createRipples } from 'react-ripples';
import useTheme from '../useTheme';

type colors = 'primary' | 'secondary' | 'inherit' | 'light' | 'dark';

interface ButtonProps {
  outline?: boolean;
  size?: number;
  bgColor?: colors;
  radius?: number;
  id?: string;
}

const Ripples = createRipples();

const Button: React.FC<ButtonProps> = ({
  children,
  outline = false,
  size = 12,
  bgColor = '#EF4E3C',
  radius = 5,
  id,
  ...props
}) => {
  const {
    colors: { dark, primary, secondary, light, outLine, btnColor, lightColor },
    effects: { buttonTransitionIn, buttonTransitionOut },
  } = useTheme();
  return (
    <Ripples className='ripple'>
      <button {...props} id={id}>
        {children}
      </button>
      <style jsx>{`
        button {
          text-align: center;
          padding: 0.75em 1em;
          text-transform: uppercase;
          font-weight: 500;
          border-width: 1px;
          border-style: solid;
          transition: ${buttonTransitionIn};
          border-color: ${outline ? outLine : light};
          font-size: ${size + 'px'};
          border-radius: ${radius + 'px'};
          background-color: ${outline
            ? 'transparent'
            : bgColor === 'primary'
            ? primary
            : bgColor === 'secondary'
            ? secondary
            : bgColor === 'inherit'
            ? 'inherit'
            : bgColor === 'dark'
            ? dark
            : bgColor === 'light'
            ? light
            : bgColor};
          color: ${outline ? btnColor : lightColor};

          &:hover,
          &:focus {
            transition: ${buttonTransitionOut};
            background-color: ${outline ? primary : 'transparent'};
            border-color: ${outline ? light : outLine};
            color: ${outline ? lightColor : btnColor};
          }
        }
      `}</style>
    </Ripples>
  );
};

export default Button;
