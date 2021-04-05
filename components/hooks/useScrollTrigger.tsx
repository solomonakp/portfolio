import React from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
interface Props {}

const useScrollTrigger = (options: {}) => {
  if (process.browser) {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      once: true,
      start: 'top 95%',
      ...options,
    });
  }
};

export default useScrollTrigger;
