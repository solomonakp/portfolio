import React from 'react';
import { useSelector } from 'react-redux';

interface Theme {
  [key: string]: string | {} | ((param: string) => string);
}

const useTheme = () => {
  const theme: Theme = {
    fontFamily: {
      headingFont: 'Lufga',
      textfont: 'Work Sans',
    },
    colors: {
      primary: '#EF4E3C',
      secondary: '#4BB3FD',
      tertiary: '#FFFFFC', // based on state
      iconColor: 'B2B9CD', // based on state
      cardHover: '#1B2E43', // based on state
    },
    spacing: {
      sectionSpace: '11rem',
      blogCard: '7.188rem',
      blogCardSide: '5.25rem',
    },
    size: {
      mainHeading: '4rem',
      sectionHeading: '2.5rem',
      paragraph: '1rem',
      textHeading: '1.5rem',
    },
    border: {
      buttonBorder: '1px solid #B2B9CD',
    },
    radius: {
      button: '5px',
      card: '10px',
    },
    shadow: {
      contact: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    },
    effects: {
      stretch: 'scale(0.95)',
      buttonTransitionIn:
        'color 100ms ease-in, transform 80ms ease-in, background-color 100ms ease-in;',
      buttonTransitionOut:
        'color 100ms ease-out, transform 80ms ease-out,background-color 100ms ease-in',
      allIn: (duration) => {
        return `all ${duration}ms ease-in`;
      },
      allOut: (duration) => {
        return `all ${duration}ms ease-out`;
      },
    },
    breakPoints: {},
  };

  return theme;
};

export default useTheme;
