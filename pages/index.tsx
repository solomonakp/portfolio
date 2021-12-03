import AboutSection from '@components/indexComponents/AboutSection'
import LandingSection from '@components/indexComponents/LandingSection'
import ProjectsSection from '@components/indexComponents/ProjectsSection'
import { FloatingContact } from '@components/layout/FloatingContact'
import { getLayout } from '@components/layout/Layout'
import { useEffect } from 'react'
import anime from 'animejs'
import { useMediaPredicate } from 'react-media-hook'
import useTheme from '@hooks/useTheme'
import Seo from '@components/Seo'
import { portfolioSeo } from '@utils/config'

const Index = () => {
  useEffect(() => {
    easeIn()
  }, [])

  const {
    media: { maxMd },
  } = useTheme()

  const isMobile = useMediaPredicate(`(${maxMd})`)

  const easeIn = () => {
    // rest position of scrollbar
    window.history.scrollRestoration = 'manual'

    anime.set('#layout', {
      visibility: 'visible',
    })

    // create an animation timeline
    let animation = anime.timeline({
      easing: 'cubicBezier(0.645, 0.045, 0.355, 1)',
      duration: 500,
    })

    animation = animation.add({
      targets: '#nav-logo',
      translateX: [-200, 0],
      delay: 500,
      opacity: [0, 1],
    })

    if (isMobile) {
      animation = animation.add(
        {
          targets: '.menu-btn',
          translateY: [-50, 0],
          delay: anime.stagger(100),
          opacity: [0, 1],
        },
        '-=250'
      )
    } else {
      animation = animation.add(
        {
          targets: '#navigation a',
          translateY: [-25, 0],
          delay: anime.stagger(100),
          opacity: [0, 1],
        },
        '-=250'
      )
    }

    if (isMobile === false) {
      animation = animation.add(
        {
          targets: '#navigation button',
          easing: 'easeOutExpo',
          opacity: {
            value: [0, 1],
            easing: 'linear',
          },
          scale: [0, 1],
        },
        '-=250'
      )
    }

    animation = animation
      .add(
        {
          targets: '#landing-section h1',
          opacity: [0, 1],
          translateY: [20, 0],
        },
        '-=250'
      )
      .add(
        {
          targets: '#landing-section p',
          opacity: [0, 1],
          translateY: [20, 0],
        },
        '-=250'
      )
      .add(
        {
          targets: '#landing-section .ripple',
          opacity: [0, 1],
          translateY: [20, 0],
          delay: anime.stagger(100),
        },
        '-=250'
      )

    if (isMobile === false) {
      animation
        .add(
          {
            targets: '#landing-section .image-container',
            opacity: [0, 1],
            translateY: [20, 0],
          },
          '-=250'
        )
        .add(
          {
            targets: '#floating-icons',
            opacity: [0, 1],
            translateY: [20, 0],
          },
          '-=250'
        )
    }
  }

  return (
    <div id="index-page" className="page">
      <Seo {...portfolioSeo} />
      <FloatingContact />
      <LandingSection />
      <AboutSection />
      <ProjectsSection />
      <style jsx global>
        {`
          #layout {
            visibility: hidden;
          }
          #nav-logo,
          #navigation a,
          #navigation button,
          #landing-section h1,
          #landing-section p,
          #landing-section .ripple,
          #landing-section .image-container,
          #floating-icons {
            will-change: opacity, transform;
          }
          #index-page {
            width: 100%;
          }
        `}
      </style>
    </div>
  )
}
Index.title = 'main page'
Index.getLayout = getLayout

export default Index
