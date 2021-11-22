import { useEffect } from 'react'

interface RevealProps {
  ref: string | HTMLElement | NodeListOf<Element>
  options?: scrollReveal.ScrollRevealObjectOptions
  duration?: number
}

const useReveal = (props: RevealProps) => {
  const { ref, options, duration } = props
  useEffect(() => {
    const ScrollReveal = require('scrollreveal').default
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay: 200,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    })
    sr.reveal(ref, options, duration)
    return () => {
      sr.destroy()
    }
  }, [])

  return null
}

export default useReveal
