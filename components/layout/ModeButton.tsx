import React, { useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useTheme from '@hooks/useTheme'
import { toggleDark } from '@redux/reducers/Ui/uiActions'
import { RootState } from '@redux/reducers/index'
import anime from 'animejs'

interface ModeButtonProps {
  isOpen: boolean
}

export const ModeButton = React.forwardRef<HTMLButtonElement, ModeButtonProps>(
  ({}, ref) => {
    const dispatch = useDispatch()

    const { isDark } = useSelector((state: RootState) => state.ui)

    // getting inital state for button store darkMode
    const [initialMode, setInitialMode] = useState<boolean | null>(null)

    useEffect(() => {
      if (isDark) {
        setInitialMode(true)
      } else {
        setInitialMode(false)
      }
    }, [])

    const sunTickGroup = useRef<SVGPathElement>(null)

    const sunCircle = useRef<SVGPathElement>(null)

    // initial path to render

    const moonPath =
      'M140 147C140 188.974 192.974 223 151 223C109.026 223 75 188.974 75 147C75 105.026 109.026 71 151 71C192.974 71 140 105.026 140 147Z'

    const sunPath =
      'M227 147C227 188.974 192.974 223 151 223C109.026 223 75 188.974 75 147C75 105.026 109.026 71 151 71C192.974 71 227 105.026 227 147Z'
    const moonTickScale = 0

    const sunTickScale = 1

    const moonScale = 1.5

    const sunScale = 1

    const moonRotate = '-40deg'

    const sunRotate = '0deg'

    const sunColor = '#FFC107'

    const moonColor = '#3686a0'

    const initialPath = initialMode ? sunPath : moonPath

    // set the initialMode here

    const toggleMode = () => {
      const sunTicks = sunTickGroup.current.children

      const circle = sunCircle.current

      const duration = 500

      const timeline = anime.timeline({
        easing: 'easeOutExpo',
      })

      if (isDark) {
        // set initial value to animate from
        anime.set(circle, {
          d: sunPath,
          scale: sunScale,
          rotate: sunRotate,
          fill: sunColor,
        })

        anime.set(sunTicks, {
          scale: sunTickScale,
        })

        timeline
          .add({
            targets: sunTicks,
            scale: moonTickScale,
            delay: anime.stagger(50),
            duration: duration,
          })

          .add(
            {
              targets: circle,
              d: moonPath,
              scale: moonScale,
              rotate: moonRotate,
              fill: moonColor,
              duration: duration,
            },
            '-=250'
          )
      } else {
        // set initial value to animate from
        anime.set(circle, {
          d: moonPath,
          scale: moonScale,
          rotate: moonRotate,
          fill: moonColor,
        })

        anime.set(sunTicks, {
          scale: moonTickScale,
        })

        timeline
          .add({
            targets: circle,
            d: sunPath,
            scale: sunScale,
            rotate: sunRotate,
            duration: duration,
            fill: sunColor,
          })
          .add(
            {
              targets: sunTicks,
              scale: sunTickScale,
              delay: anime.stagger(50),
              duration: duration,
            },
            '-=250'
          )
      }
      //  dispatch mode
      dispatch(toggleDark())
    }

    const {
      media: { maxMd, minLg },
    } = useTheme()

    return (
      <button
        className="d-flex justify-content-center align-items-center"
        role="button"
        onClick={toggleMode}
        ref={ref}
        title="website theme button"
        type="button"
      >
        <svg
          version="1.1"
          id="modeSvg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          role="presentation"
          width={50}
          height={50}
        >
          <path ref={sunCircle} d={initialPath} id="circle" />

          <g ref={sunTickGroup} fill="#FFD54F">
            <path d="M152.4 51.6C155.143 51.5512 157.76 50.4398 159.7 48.4999C161.64 46.56 162.751 43.943 162.8 41.2V10.4C162.8 7.64175 161.704 4.99647 159.754 3.04609C157.803 1.09571 155.158 0 152.4 0C149.642 0 146.996 1.09571 145.046 3.04609C143.096 4.99647 142 7.64175 142 10.4V41.2C142.049 43.943 143.16 46.56 145.1 48.4999C147.04 50.4398 149.657 51.5512 152.4 51.6Z" />
            <path d="M251.4 70.3823L273.4 48.3823C274.346 47.4368 275.096 46.3143 275.607 45.0789C276.119 43.8435 276.382 42.5195 276.382 41.1823C276.382 39.8452 276.119 38.5211 275.607 37.2857C275.096 36.0503 274.346 34.9279 273.4 33.9823C272.455 33.0368 271.332 32.2868 270.097 31.7751C268.861 31.2634 267.537 31 266.2 31C264.863 31 263.539 31.2634 262.303 31.7751C261.068 32.2868 259.946 33.0368 259 33.9823L237 55.9823C236.049 56.925 235.295 58.0465 234.78 59.2823C234.265 60.5181 234 61.8436 234 63.1823C234 64.521 234.265 65.8465 234.78 67.0823C235.295 68.3181 236.049 69.4396 237 70.3823C240.6 74.3823 247 74.3823 251.4 70.3823Z" />
            <path d="M291.2 137H260.4C257.642 137 254.996 138.096 253.046 140.046C251.096 141.996 250 144.642 250 147.4C250 150.158 251.096 152.803 253.046 154.754C254.996 156.704 257.642 157.8 260.4 157.8H291.2C293.958 157.8 296.603 156.704 298.554 154.754C300.504 152.803 301.6 150.158 301.6 147.4C301.6 144.642 300.504 141.996 298.554 140.046C296.603 138.096 293.958 137 291.2 137Z" />
            <path d="M251.382 233.982C249.473 232.073 246.883 231 244.182 231C241.482 231 238.892 232.073 236.982 233.982C235.073 235.892 234 238.482 234 241.182C234 243.883 235.073 246.473 236.982 248.382L258.982 270.382C259.928 271.328 261.05 272.078 262.286 272.59C263.521 273.101 264.845 273.365 266.182 273.365C267.52 273.365 268.844 273.101 270.079 272.59C271.314 272.078 272.437 271.328 273.382 270.382C274.328 269.437 275.078 268.314 275.59 267.079C276.101 265.844 276.365 264.52 276.365 263.182C276.365 261.845 276.101 260.521 275.59 259.286C275.078 258.05 274.328 256.928 273.382 255.982L251.382 233.982Z" />
            <path d="M152.4 242C149.657 242.049 147.04 243.16 145.1 245.1C143.16 247.04 142.049 249.657 142 252.4V283.2C142 285.958 143.096 288.604 145.046 290.554C146.996 292.504 149.642 293.6 152.4 293.6C155.158 293.6 157.803 292.504 159.754 290.554C161.704 288.604 162.8 285.958 162.8 283.2V252.4C162.751 249.657 161.64 247.04 159.7 245.1C157.76 243.16 155.143 242.049 152.4 242Z" />
            <path d="M50.9823 234L28.9823 256C27.0728 257.91 26 260.499 26 263.2C26 265.9 27.0728 268.49 28.9823 270.4C30.8919 272.31 33.4818 273.382 36.1823 273.382C38.8828 273.382 41.4727 272.31 43.3823 270.4L65.3823 248.4C66.3329 247.457 67.0874 246.336 67.6023 245.1C68.1172 243.864 68.3823 242.539 68.3823 241.2C68.3823 239.861 68.1172 238.536 67.6023 237.3C67.0874 236.064 66.3329 234.943 65.3823 234C61.7823 230 55.3823 230 50.9823 234Z" />
            <path d="M51.6 147.4C51.5512 144.657 50.4398 142.04 48.4999 140.1C46.56 138.16 43.943 137.049 41.2 137H10.4C7.64175 137 4.99647 138.096 3.04609 140.046C1.09571 141.996 0 144.642 0 147.4C0 150.158 1.09571 152.803 3.04609 154.754C4.99647 156.704 7.64175 157.8 10.4 157.8H41.2C43.943 157.751 46.56 156.64 48.4999 154.7C50.4398 152.76 51.5512 150.143 51.6 147.4Z" />
            <path d="M50.9823 70.3823C52.8919 72.2919 55.4818 73.3646 58.1823 73.3646C60.8828 73.3646 63.4727 72.2919 65.3823 70.3823C67.2919 68.4727 68.3646 65.8828 68.3646 63.1823C68.3646 60.4818 67.2919 57.8919 65.3823 55.9823L43.3823 33.9823C41.4727 32.0728 38.8828 31 36.1823 31C33.4818 31 30.8919 32.0728 28.9823 33.9823C27.0728 35.8919 26 38.4818 26 41.1823C26 43.8828 27.0728 46.4727 28.9823 48.3823L50.9823 70.3823Z" />
          </g>
        </svg>
        <style jsx>{`
          button {
            margin-left: 3.875rem;
            border-radius: 50%;
            width: 2.5rem;
            height: 2.5rem;
            background-color: transparent;
            @media (${maxMd}) {
              position: absolute;
              top: 1.25rem;
              right: 2%;
              width: 3.125rem;
              height: 3.125rem;
            }

            svg {
              @media (${maxMd}) {
                width: 2.5rem !important ;
                height: 2.5rem !important;
              }
            }
            #circle {
              fill: ${initialMode ? sunColor : moonColor};
              transform: scale(${initialMode ? sunScale : moonScale})
                rotate(${initialMode ? sunRotate : moonRotate});
              transform-origin: 50% 50%;
              will-change: d;
            }
            g {
              path {
                transform: scale(${initialMode ? sunTickScale : moonTickScale});
                transform-origin: 50% 50%;
                will-change: transform;
              }
            }
          }
        `}</style>
      </button>
    )
  }
)
