import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/index';

interface Theme {
  fontFamily: {
    headingFont: string;
    textFont: string;
  };
  colors: {
    primary: string;
    secondary: string;
    dark: string;
    light: string;
    iconColor: string;
    cardHover: string;
    outLine: string;
    btnColor: string;
    lightColor: string;
    darkColor: string;
    hover: string;
  };
  spacing: {
    sectionSpace: string;
    blogCard: string;
    blogCardSide: string;
  };
  size: {
    mainHeading: string;
    sectionHeading: string;
    paragraph: string;
    textHeading: string;
    mobileMenu: string;
    resMainHeading: string;
    resSectionHeading: string;
  };
  border: {
    buttonBorder: string;
  };
  radius: {
    button: string;
    card: string;
  };
  shadow: {
    contact: string;
  };
  effects: {
    stretch: string;
    buttonTransitionIn: string;
    buttonTransitionOut: string;
    fillTrans: string;
    bgTrans: string;
    colorTrans: string;
    allIn: (duration: number) => string;
    allOut: (duration: number) => string;
  };
  media: {
    minSm: string;
    minMd: string;
    minLg: string;
    minXl: string;
    minXxL: string;
    maxXs: string;
    maxSm: string;
    maxMd: string;
    maxLg: string;
    maxXl: string;
  };
  // [key: string]: string | {} | ((param: string) => string);
}

const useTheme = () => {
  const isDark = useSelector((state: RootState) => state.ui.isDark);

  const theme: Theme = {
    fontFamily: {
      headingFont: 'Lufga',
      textFont: 'Work Sans',
    },
    colors: {
      primary: '#EF4E3C',
      secondary: isDark ? '#4BB3FD' : '#2630A3',
      light: isDark ? '#001524 ' : '#FFFFFC', // based on state
      iconColor: isDark ? '#B2B9CD' : '#616F94', // based on state
      cardHover: isDark ? '#1B2E43' : '#ECF1F4', // based on state
      dark: isDark ? '#FFFFFC' : '#001524 ',
      outLine: isDark ? '#616F94' : '#EF4E3C',
      btnColor: isDark ? '#FFFFFC' : '#EF4E3C',
      lightColor: '#FFFFFC',
      darkColor: '#001524',
      hover: isDark ? '#EF4E3C' : '#2630A3',
    },
    spacing: {
      sectionSpace: '9.375rem',
      blogCard: '7.188rem',
      blogCardSide: '5.25rem',
    },
    size: {
      mainHeading: '3.5rem',
      resMainHeading: 'calc(2.75rem + ((1vw - 0.2rem) * 1.0714))',
      resSectionHeading: 'calc(2rem + ((1vw - 0.2rem) * 0.7143))',
      sectionHeading: '2.5rem',
      paragraph: '1rem',
      textHeading: '1.5rem',
      mobileMenu: '2rem',
    },
    border: {
      buttonBorder: isDark ? '1px solid #B2B9CD' : '1px solid #EF4E3C',
    },
    radius: {
      button: '5px',
      card: '10px',
    },
    shadow: {
      contact: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    },
    effects: {
      bgTrans: 'background-color 0.1s ease-in-out',
      colorTrans: 'color 0.1s ease-in-out',
      fillTrans: 'fill 0.1s ease-in-out',
      stretch: 'scale(0.95)',
      buttonTransitionIn:
        'color 100ms ease-in, border-color 100ms ease-in, background-color 100ms ease-in;',
      buttonTransitionOut:
        'color 100ms ease-out, border-color 80ms ease-out,background-color 100ms ease-out',
      allIn: (duration: number): string => {
        return `all ${duration}ms ease-in`;
      },
      allOut: (duration: number): string => {
        return `all ${duration}ms ease-out`;
      },
    },
    media: {
      minSm: 'min-width: 576px',
      minMd: 'min-width: 768px',
      minLg: 'min-width: 992px',
      minXl: 'min-width: 1200px',
      minXxL: 'min-width: 1400px',
      maxXs: 'max-width: 575.98px',
      maxSm: 'max-width: 767.98px',
      maxMd: 'max-width: 991.98px',
      maxLg: 'max-width: 1199.98px',
      maxXl: 'max-width: 1399.98px',
    },
  };

  return theme;
};

export default useTheme;
