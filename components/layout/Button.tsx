import React from 'react'
import useTheme from '@hooks/useTheme'
import { target } from '@utils/types'

type colors = 'primary' | 'secondary' | 'inherit' | 'light' | 'dark'

interface ButtonProps {
  outline?: boolean
  size?: number
  bgColor?: colors
  radius?: number
  id?: string
  className?: string
  target?: target
  href: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  outline = false,
  size = 16,
  bgColor = 'primary',
  radius = 5,
  id,
  className,

  ...props
}) => {
  const {
    colors: {
      dark,
      primary,
      secondary,
      light,
      outLineColor,
      btnColor,
      lightColor,
    },
    effects: { buttonTransitionOut },
    media: { maxSm },
  } = useTheme()

  return (
    <>
      {outline ? (
        <a
          id={id}
          className={`outlined ${className ? className : ''}`}
          {...props}
        >
          {children}
        </a>
      ) : (
        <a id={id} className={`normal ${className}`} {...props}>
          {children}
        </a>
      )}
      <style jsx>{`
        a {
          text-align: center;
          padding: 0.75em 1em;
          text-transform: uppercase;
          font-weight: 400;
          position: relative;
          overflow: hidden;
          font-size: ${size + 'px'};
          border-radius: ${radius + 'px'};
          color: ${outline ? btnColor : lightColor};
          @media (${maxSm}) {
            font-size: ${size - 2 + 'px'};
          }

          &::before {
            content: '';
            display: block;
            height: 105%;
            width: 105%;
            position: absolute;
            left: 0;
            top: 0;
            transition: 0.2s transform ease-out;
            will-change: transform;
            z-index: -1;
            perspective: 1500px;
            border-radius: ${radius + 'px'};
          }
        }
        .outlined {
          background-color: transparent;
          border-width: 1px;
          border-style: solid;
          border-color: ${outline ? outLineColor : light};
          transition: 0.2s transform ease-in-out;
          will-change: transform;
          z-index: 0;
          &:before {
            transform: translate(-100%, 0) rotate(10deg);
            transform-origin: top left;
            background-color: ${outLineColor};
          }

          &:hover,
          &:focus,
          &:active {
            transform: scale(1.05);
            will-change: transform;
            border: 1px solid transparent;
            color: ${outline ? lightColor : btnColor};
            &:before {
              transform: translate(0, 0);
            }
          }
        }
        .normal,
        .normal::before {
          background-color: ${bgColor === 'primary'
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
        }
        .normal {
          &::before {
            transform: translateX(-100%);
            filter: brightness(85%);
          }
          &:hover,
          &:focus,
          &:active {
            &::before {
              transform: translateX(0);
              transform-origin: left;
            }
            transition: ${buttonTransitionOut};
            border-color: ${outLineColor};
          }
        }
      `}</style>
    </>
  )
}

export default Button
