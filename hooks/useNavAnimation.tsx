import anime from 'animejs'
import { navRefs } from '@layout/Navigation'
import { useUi } from '@context/ui/uiContext'

export type animationCallback = () => void

const useNavAnimation = (elements: navRefs) => {
  const {
    state: { isOpen },
  } = useUi()
  if (process.browser) {
    const animation = (cb?: animationCallback) => {
      const [list, modeBtn, navigation] = elements

      const anchorList = list.querySelectorAll('a')

      const timeLine = anime.timeline({
        easing: 'cubicBezier(0.645, 0.045, 0.355, 1)',
      })

      if (isOpen) {
        document.body.style.overflowY = 'initial'
        timeLine
          .add({
            targets: modeBtn,
            opacity: [1, 0],
            translateY: ['0', '40px'],
            duration: 300,
          })
          .add(
            {
              targets: anchorList,
              opacity: [1, 0],
              translateY: ['0px', '40px'],
              delay: anime.stagger(100),
              duration: 300,
            },
            '-=100'
          )
          .add({
            targets: navigation,
            translateX: '-100%',
            easing: 'spring(2, 80, 50, 10)',
          })

        timeLine.finished.then(() => {
          if (cb) {
            cb()
          }
        })
      } else {
        document.body.style.overflowY = 'hidden'
        anime.set(navigation, {
          translateX: '-100%',
        })
        timeLine
          .add({
            targets: navigation,
            translateX: '0%',
            easing: 'spring(2, 80, 50, 7)',
          })
          .add(
            {
              targets: anchorList,
              opacity: [0, 1],
              translateY: ['40px', '0'],
              delay: anime.stagger(100),
              duration: 300,
            },
            '-=1000'
          )
          .add(
            {
              targets: modeBtn,
              opacity: [0, 1],
              translateY: ['40px', '0'],
              duration: 300,
            },
            '-=750'
          )
      }
    }
    return animation
  }
}
export default useNavAnimation
