import anime from 'animejs';
import React from 'react';
import { navRefs } from '../Layout/Navigation';
import { RootState } from '../../redux/reducers/index';
import { useSelector } from 'react-redux';
import { time } from 'node:console';

const useNavAnimation = (elements: navRefs) => {
  const { isOpen } = useSelector((state: RootState) => state.ui);
  if (process.browser) {
    const animation = () => {
      const [circle, navigation] = elements;
      const timeLine = anime.timeline({
        easing: 'easeOutExpo',
      });

      document.body.style.overflowY = isOpen ? 'initial' : 'hidden';
      anime.set(circle, {
        translateX: '100%',
        translateY: '-50%',
      });

      if (isOpen) {
        timeLine
          .add({
            targets: circle,
            duration: 1000,
            easing: 'easeOutExpo',
            scale: 0,
          })
          .add({
            targets: navigation,
            easing: 'easeOutExpo',
            translateY: '-100%',
            duration: 100,
          });
      } else {
        timeLine
          .add({
            targets: navigation,
            duration: 0,
            easing: 'easeOutExpo',
            translateY: '0%',
          })
          .add({
            targets: circle,
            duration: 1000,
            easing: 'easeOutExpo',
            // r: 1300,
            scale: 26,
          });
      }
    };
    return animation;
  }
};
export default useNavAnimation;
