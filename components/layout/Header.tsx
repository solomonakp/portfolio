import React, { useRef, useState } from 'react'
import useTheme from '@hooks/useTheme'
import Hamburger from '@layout/Hamburger'
import Navigation, { navRefs } from '@layout/Navigation'
import useNavAnimation from '@hooks/useNavAnimation'
import Link from 'next/link'
import useDocumentScrollThrottled from '@hooks/useDocumentScrollThrottled'
import { useUi } from '@context/ui/uiContext'

interface HeaderProps {
  logo?: React.ReactElement
  theme?: boolean
}

export const Header: React.FC<HeaderProps> = ({ logo, theme }) => {
  const header = useRef<HTMLElement>(null)

  const navElements = useRef<navRefs>([])

  const navAnimation = useNavAnimation(navElements.current)

  const [hideHeader, setHideHeader] = useState(false)
  const [ShowShadow, setShowShadow] = useState(false)

  const MINIMUM_SCROLL = 74
  const TIMEOUT_DELAY = 400

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData

    const isScrolledDown = previousScrollTop < currentScrollTop

    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setShowShadow(currentScrollTop > 2)

    setTimeout(() => {
      setHideHeader(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  const setNavRefs = (el: never) => {
    if (el && !navElements.current.includes(el)) {
      navElements.current.push(el)
    }
  }

  const {
    state: { isOpen },
    dispatch,
  } = useUi()

  const {
    media: { minLg, maxMd },
    colors: { navColor, light },
  } = useTheme()
  return (
    <header ref={header}>
      <div className="container-fluid">
        <nav className="d-flex align-items-center">
          <Link href="/" scroll={true}>
            <a id="nav-logo" className="mr-auto">
              {logo}
            </a>
          </Link>

          <Hamburger
            isOpen={isOpen}
            animation={navAnimation}
            dispatch={dispatch}
          />
          <Navigation
            theme={theme}
            open={isOpen}
            ref={setNavRefs}
            animation={navAnimation}
            dispatch={dispatch}
          />
        </nav>
      </div>
      <style jsx>{`
        header {
          padding: 1rem 0;
          position: fixed;
          right: 0;
          left: 0;
          z-index: 10;
          height: 74px;
          transition: all ease-in-out 300ms;
          background-color: ${light};
          box-shadow: ${ShowShadow
            ? '0 2px 10px 0px rgba(0, 0, 0, 0.2)'
            : 'initial'};
          transform: ${hideHeader
            ? 'translate3d(0,-74px,0)'
            : 'translate3d(0,0px,0)'};

          @media (${maxMd}) {
            bottom: 0;
            transform: ${hideHeader
              ? 'translate3d(0,74px,0)'
              : 'translate3d(0,0px,0)'};
          }

          @media screen and (-webkit-min-device-pixel-ratio: 0) {
            background: ${navColor};
            backdrop-filter: blur(5px);
          }

          @-moz-document url-prefix() {
            & {
              background-color: ${light};
            }
          }
        }

        .container-fluid {
          @media (${minLg}) {
            padding: 0 2.5rem;
          }
        }

        #nav-logo {
          margin-right: auto;
          z-index: 11;
        }
      `}</style>
    </header>
  )
}
