import anime from 'animejs';
import React from 'react';
import { navRefs } from '../Layout/Navigation';
import { RootState } from '../../redux/reducers/index';
import { useSelector } from 'react-redux';

export type animationCallback = () => void;

const useNavAnimation = (elements: navRefs) => {
  const { isOpen } = useSelector((state: RootState) => state.ui);
  if (process.browser) {
    const animation = (cb?: animationCallback) => {
      const [circle, list, modeBtn, navigation] = elements;
      const timeLine = anime.timeline({
        easing: 'easeOutExpo',
      });
      const anchorList = list.querySelectorAll('a');

      anime.set(circle, {
        translateX: '100%',
        translateY: '-50%',
      });

      if (isOpen) {
        document.body.style.overflowY = 'initial';
        timeLine
          .add({
            targets: circle,
            duration: 1000,
            scale: 0,
          })
          .add({
            targets: navigation,
            translateY: '-100%',
            duration: 100,
          });
        timeLine.finished.then(() => {
          if (cb) {
            cb();
          }
        });
      } else {
        document.body.style.overflowY = 'hidden';
        timeLine
          .add({
            targets: navigation,
            duration: 0,
            translateY: '0%',
          })
          .add({
            targets: circle,
            duration: 1000,
            scale: 26,
          })
          .add(
            {
              targets: anchorList,
              opacity: [0, 1],
              translateX: ['-40px', '0'],
              duration: 200,
              delay: anime.stagger(100),
            },
            '-=800'
          )
          .add(
            {
              targets: modeBtn,
              opacity: [0, 1],
              translateX: ['-40px', '0'],
              duration: 200,
            },
            '-=400'
          );
      }
    };
    return animation;
  }
};
export default useNavAnimation;
