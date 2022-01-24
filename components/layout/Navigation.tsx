import React from 'react'
import useTheme from '@hooks/useTheme'
import ModeButton from '@layout/ModeButton'
import { toggleOpen } from '@context/ui/uiActions'
import { animationCallback } from '@hooks/useNavAnimation'
import { useRouter } from 'next/router'
import { Dispatch } from '@context/ui/uiTypes'
import { useUi } from '@context/ui/uiContext'
interface NavigationProps {
  open: boolean
  theme: boolean
  animation?: (cb?: animationCallback) => void
  dispatch: Dispatch
}
export type navRefs = [HTMLUListElement, HTMLButtonElement, HTMLDivElement] | []

interface Route {
  text: string
  route: string
}

const routes: Route[] = [
  { text: 'About', route: '#about-section' },
  { text: 'Projects', route: '#project-section' },
  { text: 'Blog', route: '/blog/page/1' },
]

const Navigation = React.forwardRef<any, NavigationProps>(function NavLinks(
  { theme, open, animation, dispatch },
  ref
) {
  const router = useRouter()

  const handleRouting = (e) => {
    e.preventDefault()

    // eslint-disable-next-line global-require
    const SmoothScroll = require('smooth-scroll')

    // get href
    const href = e.target.getAttribute('href')

    const media = window.matchMedia('(max-width: 991.98px)')

    const scrollTo = () => {
      const element = document.querySelector(href)

      const scroll = new SmoothScroll()

      const options = {
        header: 'header',
        speed: 500,
        speedAsDuration: true,
      }

      scroll.animateScroll(element, undefined, options)

      scroll.destroy()
    }

    const pushToSection = () => router.push(`/${href}`, `/${href}`)

    // check for media query below 991.98px
    if (media.matches) {
      // dispatch toggleOpen
      dispatch(toggleOpen())

      if (href === '/blog/page/1') {
        animation()
        router.push(href, href, { scroll: true })
        return
      }
      // if we are aren't on the root path
      if (router.pathname !== '/') {
        animation(pushToSection)
        return
      }

      // // animate
      animation(scrollTo)
      // scroll to document position
    } else {
      // false

      // if link clicked is the blog link
      if (href === '/blog/page/1') {
        router.push(href, href, { scroll: true })
        return
      }

      // if we are aren't on the root path
      if (router.pathname !== '/') {
        pushToSection()
        return
      }

      scrollTo()
    }
  }

  const {
    media: { maxMd, minLg },
    colors: { secondary, navOverlay, primary },
    size: { paragraph, mobileMenu },
    effects: { colorTrans },
  } = useTheme()

  const {} = useUi()

  return (
    <div
      className="d-flex justify-content-center align-items-center "
      id="navigation"
      ref={ref}
    >
      <ul className="d-lg-flex align-items-center" ref={ref}>
        {routes.map(({ text, route }, index) => {
          return (
            <li key={index}>
              <a
                href={route}
                onClick={handleRouting}
                onMouseEnter={() =>
                  text === 'Blog'
                    ? router.prefetch('/blog')
                    : router.prefetch('/')
                }
                data-item={text}
                role="link"
              >
                {text}
              </a>
            </li>
          )
        })}
      </ul>

      {theme ? <ModeButton isOpen={open} ref={ref} /> : null}

      <style jsx>
        {`
          #navigation {
            @media (${minLg}) {
              // transform: translateY(0%) !important;
            }
            @media (${maxMd}) {
              width: 100%;
              position: fixed;
              left: 0;
              right: 0;
              top: -95vh;
              bottom: 0;
              background: ${navOverlay};
              z-index: 10;
              transform: translateX(-100%);
            }
          }
          svg {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            z-index: -14;
            width: 100%;
            .circle {
              transform: translate(100%, -50%);
            }
          }

          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            @media (${maxMd}) {
              position: relative;
            }
          }
          li {
            margin-right: 4rem;
            @media (${maxMd}) {
              margin-right: 0;
            }
          }
          a:not(#nav-logo) {
            transition: ${colorTrans};
            color: ${secondary};
            font-size: ${paragraph};
            font-weight: 500;
            text-transformation: uppercase;
            position: relative;
            &::before {
              content: attr(data-item);
              transition: all 300ms ease-in-out;
              color: ${primary};
              position: absolute;
              font: inherit;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              width: 0;
              overflow: hidden;
              will-change: width;
            }

            &:hover,
            &:active,
            &:focus {
              &::before {
                width: 100%;
              }
            }
            @media (${minLg}) {
            }
            @media (${maxMd}) {
              font-size: ${mobileMenu};
              margin: 0 0 2rem 0;
            }
          }
        `}
      </style>
    </div>
  )
})

export default Navigation
