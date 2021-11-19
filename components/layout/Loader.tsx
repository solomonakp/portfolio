import anime from 'animejs'
import React, { useRef, useEffect } from 'react'
import { toggleLoading } from '@context/ui/uiActions'
import { Dispatch } from '@context/ui/uiTypes'
interface LoaderProps {
  fixed?: boolean
  dispatch: Dispatch
}

const Loader: React.FC<LoaderProps> = ({ fixed, dispatch }) => {
  const loader = useRef<HTMLDivElement>(null)
  const primary = useRef<SVGPathElement>(null)
  const secondary = useRef<SVGPathElement>(null)

  useEffect(() => {
    anime.set(loader.current, {
      opacity: 1,
    })
    const timeline = anime.timeline({
      easing: 'easeInOutQuad',
      duration: 1500,
      direction: 'alternate',
      loop: 4,
    })
    timeline
      .add({
        targets: primary.current,
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add(
        {
          targets: secondary.current,
          strokeDashoffset: [anime.setDashoffset, 0],
          duration: 500,
          direction: 'normal',
        },
        '-=500'
      )
    timeline.finished.then(() => {
      dispatch(toggleLoading())
    })
  }, [])

  return (
    <div
      className="d-flex align-items-center justify-content-center "
      id="loader-container"
      ref={loader}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 385.44 277.65"
        role="presentation"
        aria-labelledby="title desc"
      >
        <title id="title">Dev Chuck`&apos;`s logo </title>
        <desc id="desc">
          An orange and blue log which forms the letter dc it is uses as a
          loader(placeholder) while the site is data is being prepared
        </desc>
        <path
          d="M158.15 63.72c-37.65-30-60.65-30.31-68.51-31.81C65.5 27.3 29.5 30.72 29.5 30.72v217.29l59-.29c4.09-.36 54 .28 79-43 17.18-29.76-2-91 35-133 39.45-44.79 116-60 158-13"
          fill="none"
          stroke="#CC4233"
          strokeMiterlimit="10"
          strokeWidth="59"
          ref={primary}
        />
        <path
          d="M213.34 213.18s27.16 34.12 72.16 34.83 78.47-34.83 78.47-34.83"
          fill="none"
          stroke="#4bb3fd"
          strokeMiterlimit="10"
          strokeWidth="59"
          ref={secondary}
        />
      </svg>
      <style jsx>
        {`
          #loader-container {
            width: 100%;
            white-space: nowrap;
            height: 100%;
            position: ${fixed ? 'fixed' : 'static'};
            left: ${fixed ? '0' : 'initial'};
            right: ${fixed ? '0' : 'initial'};
            top: ${fixed ? '0' : 'initial'};
            bottom: ${fixed ? '0' : 'initial'};
            background-color: inherit;
            opacity: 0;
            z-index: 10000;
            svg {
              height: auto;
              width: 150px;
              path {
                will-change: stroke-dashoffset;
              }
            }
          }
        `}
      </style>
    </div>
  )
}

export default Loader
