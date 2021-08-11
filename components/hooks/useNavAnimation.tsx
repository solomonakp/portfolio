import anime from 'animejs'
import { navRefs } from '../layout/Navigation'
import { RootState } from '../../redux/reducers/index'
import { useSelector } from 'react-redux'

export type animationCallback = () => void

const useNavAnimation = (elements: navRefs) => {
  const { isOpen } = useSelector((state: RootState) => state.ui)
  if (process.browser) {
    const animation = (cb?: animationCallback) => {
      const [list, modeBtn, navigation] = elements

      const anchorList = list.querySelectorAll('a')

      const timeLine = anime.timeline({
        easing: 'easeOutExpo',
      })

      if (isOpen) {
        document.body.style.overflowY = 'initial'
        timeLine
          .add({
            targets: modeBtn,
            opacity: [1, 0],
            translateX: ['0', '-40px'],
            easing: 'spring(2, 60, 20, 10)',
          })
          .add(
            {
              targets: anchorList,
              opacity: {
                value: [1, 0],
                easing: 'linear',
                duration: 100,
              },
              translateX: ['0px', '-40px'],
              delay: anime.stagger(100),
              easing: 'spring(2, 60, 20, 10)',
            },
            '-=1500'
          )
          .add(
            {
              targets: navigation,
              translateX: '-100%',
              easing: 'spring(2, 80, 50, 10)',
            },
            '-=1500'
          )

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
            duration: 1000,
            easing: 'spring(2, 80, 50, 7)',
          })
          .add(
            {
              targets: anchorList,
              opacity: {
                value: [0, 1],
                easing: 'linear',
                duration: 100,
              },
              translateX: ['-40px', '0'],
              delay: anime.stagger(100),
              easing: 'spring(2, 60, 20, 10)',
            },
            '-=1000'
          )
          .add(
            {
              targets: modeBtn,
              opacity: [0, 1],
              translateX: ['-40px', '0'],
              easing: 'spring(2, 60, 20, 10)',
            },
            '-=1500'
          )
      }
    }
    return animation
  }
}
export default useNavAnimation
