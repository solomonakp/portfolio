import Head from 'next/head'
import AboutSection from '../components/indexComponents/AboutSection'
import LandingSection from '../components/indexComponents/LandingSection'
import ProjectsSection from '../components/indexComponents/ProjectsSection'
import { FloatingContact } from '../components/layout/FloatingContact'
import { getLayout } from '../components/layout/Layout'
import FloatingEmail from '../components/layout/FloatingEmail'
import useTheme from '../components/useTheme'
import { useEffect } from 'react'
import anime from 'animejs'

const Index = () => {
  useEffect(() => {
    easeIn()
  }, [])

  const easeIn = () => {
    // rest position of scrollbar
    window.history.scrollRestoration = 'manual'

    anime.set('#layout', {
      visibility: 'visible',
    })

    // create an animation timeline
    const animation = anime.timeline({
      easing: 'easeOutExpo',
      duration: 500,
    })

    animation
      .add({
        targets: '#nav-logo',
        translateX: [-200, 0],
        delay: 500,
        opacity: [0, 1],
      })
      .add(
        {
          targets: '#navigation a',
          translateY: [-50, 0],
          delay: anime.stagger(100),
          opacity: [0, 1],
        },
        '-=250'
      )
      .add(
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
      .add(
        {
          targets: '#landing-section h1',
          opacity: [0, 1],
          translateY: [30, 0],
        },
        '-=250'
      )
      .add(
        {
          targets: '#landing-section p',
          opacity: [0, 1],
          translateY: [30, 0],
        },
        '-=250'
      )
      .add(
        {
          targets: '#landing-section .ripple',
          opacity: [0, 1],
          translateY: [30, 0],
          delay: anime.stagger(100),
        },
        '-=250'
      )
      .add(
        {
          targets: '#landing-section .image-container',

          easing: 'easeOutExpo',

          opacity: {
            value: [0, 1],
            easing: 'linear',
          },
          scale: [0, 1],
        },
        '-=250'
      )
      .add(
        {
          targets: '#floating-icons',
          opacity: [0, 1],
          translateY: [30, 0],
        },
        '-=250'
      )
      .add(
        {
          targets: '#floating-mail',
          opacity: [0, 1],
          translateY: [30, 0],
        },
        '-=500'
      )
  }

  const {
    media: { maxXs },
  } = useTheme()
  return (
    <div id="index-page" className="page">
      <Head>
        <title>Chokor Solomon</title>
      </Head>
      <FloatingContact />
      <LandingSection />
      <AboutSection />
      <ProjectsSection />
      <style jsx global>
        {`
          #layout {
            visibility: hidden;
          }
          #index-page {
            width: 100%;
          }
          h2 {
            @media (${maxXs}) {
              text-align: center;
            }
          }
        `}
      </style>
    </div>
  )
}
Index.title = 'main page'
Index.getLayout = getLayout

export default Index
