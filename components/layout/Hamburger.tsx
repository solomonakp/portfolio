import React from 'react'
import { useDispatch } from 'react-redux'
import useTheme from '@hooks/useTheme'
import { toggleOpen } from '@redux/reducers/ui/uiActions'

interface HamburgerProps {
  isOpen: boolean
  animation?: () => void
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, animation }) => {
  const {
    colors: { dark },
  } = useTheme()
  const dispatch = useDispatch()

  const handleMenuToggle = () => {
    dispatch(toggleOpen())
    animation()
  }

  return (
    <button
      className="menu-btn d-flex d-lg-none justify-content-center align-items-center"
      type="button"
      aria-label="Menu"
      aria-controls="navigation"
      aria-expanded={isOpen}
      onClick={handleMenuToggle}
    >
      <span className="menu-box align-self-start">
        <span className="menu-inner"></span>
      </span>
      <style jsx>{`
        .menu-btn {
          cursor: pointer;
          transition-property: opacity, filter;
          transition-duration: 0.15s;
          transition-timing-function: linear;
          background-color: transparent;
          border: 0;
          margin: 0;
          overflow: visible;
          display: none;
          padding: 0;
          height: 42px;
          z-index: 11;
        }
        .menu-box {
          width: 30px;
          height: 34px;
          display: inline-block;
          position: relative;
        }

        .menu-inner {
          display: block;
          top: 50%;
          width: 100%;
          transition-duration: 0.22s;
          transform: ${isOpen ? 'rotate(225deg)' : 'initial'};
          transition-timing-function: ${isOpen
            ? 'cubic-bezier(0.215, 0.61, 0.355, 1)'
            : ' cubic-bezier(0.55, 0.055, 0.675, 0.19)'};
          &,
          &::before,
          &::after {
            height: 2px;
            border-radius: 2px;
            position: absolute;
            transition-property: transform, background-color;
            transition-duration: 0.15s;
            transition-timing-function: ease;
            background-color: ${dark};
          }

          &::before,
          &::after {
            content: '';
            display: block;
          }
          &::before {
            width: 60%;
            opacity: ${isOpen ? '0' : '1'};
            top: ${isOpen ? '0' : '-6px'};
            transition: ${isOpen
              ? ' top 0.1s ease-out, opacity 0.1s 0.12s ease-out'
              : 'top 0.1s 0.25s ease-in, opacity 0.1s ease-in'};
          }
          &::after {
            bottom: ${isOpen ? '0' : '-6px'};
            width: ${isOpen ? '100%' : '80%'};
            transform: ${isOpen ? 'rotate(-90deg)' : 'initial'};
            transition: ${isOpen
              ? 'bottom 0.1s ease-out,' +
                'transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1) '
              : 'bottom 0.1s 0.25s ease-in,' +
                'transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19),' +
                'width 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)'};
          }
        }
      `}</style>
    </button>
  )
}

export default Hamburger
