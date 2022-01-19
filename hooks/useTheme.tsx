import useDarkMode from 'use-dark-mode'

interface Theme {
  fontFamily: {
    headingFont: string
    textFont: string
  }
  colors: {
    primary: string
    secondary: string
    dark: string
    light: string
    iconColor: string
    cardHover: string
    outLineColor: string
    btnColor: string
    lightColor: string
    darkColor: string
    hover: string
    navColor: string
    navOverlay: string
    projectCardColor: string
    projectParagraphColor: string
    projectCardHoverColor: string
    projectIconColor: string
    projectLoaderColor: string
    codeBlockColor: string
    modeButtonColor: string
  }
  spacing: {
    sectionSpace: string
    blogCard: string
    blogCardSide: string
    headingSpace: string
    resSectionSpace: string
  }
  size: {
    mainHeading: string
    sectionHeading: string
    paragraph: string
    textHeading: string
    mobileMenu: string
    resMainHeading: string
    resSectionHeading: string
    resTextHeading: string
  }
  border: {
    buttonBorder: string
    chipBorder: string
  }
  radius: {
    button: string
    card: string
    chip: string
    paginationRadius: string
  }
  shadow: {
    contact: string
  }
  effects: {
    stretch: string
    buttonTransitionIn: string
    buttonTransitionOut: string
    fillTrans: string
    bgTrans: string
    colorTrans: string
    allIn: (duration: number) => string
    allOut: (duration: number) => string
  }
  media: {
    minSm: string
    minMd: string
    minLg: string
    minXl: string
    minXxL: string
    maxXs: string
    maxSm: string
    maxMd: string
    maxLg: string
    maxXl: string
  }
  // [key: string]: string | {} | ((param: string) => string);
  isDark: boolean
  toggle: () => void
}

const useTheme = () => {
  const { value: isDark, toggle } = useDarkMode(false)

  const theme: Theme = {
    fontFamily: {
      headingFont: 'Lufga',
      textFont: 'Work Sans',
    },
    colors: {
      primary: '#CC4233',
      secondary: isDark ? '#4BB3FD' : '#2630A3',
      light: isDark ? '#001524' : '#FFFFFC', // based on state
      iconColor: isDark ? '#B2B9CD' : '#616F94', // based on state
      cardHover: isDark ? '#1B2E43' : '#ECF1F4', // based on state
      dark: isDark ? '#FFFFFC' : '#001524 ',
      outLineColor: isDark ? '#616F94' : '#CC4233',
      btnColor: isDark ? '#FFFFFC' : '#CC4233',
      lightColor: '#FFFFFC',
      darkColor: '#001524',
      hover: isDark ? '#CC4233' : '#2630A3',
      navColor: isDark ? 'rgba(0, 21, 36,0.5)' : 'rgba(255, 255, 252,0.5)',
      navOverlay: isDark ? '#00243d' : '#f4f3f1',
      projectCardColor: '#3B465A',
      projectCardHoverColor: '#5A6984',
      projectParagraphColor: '#E3ECFA',
      projectIconColor: '#B2B9CD',
      projectLoaderColor: '#7F90AE',
      codeBlockColor: '#000000',
      modeButtonColor: isDark ? '#3B465A' : 'f2f2f2',
    },
    spacing: {
      sectionSpace: '9.375rem',
      blogCard: '7.188rem',
      blogCardSide: '5.25rem',
      headingSpace: '2.5rem',
      resSectionSpace: '4.375rem',
    },
    size: {
      mainHeading: '3.5rem',
      resMainHeading: 'calc(2.75rem + ((1vw - 0.2rem) * 1.0714))',
      resSectionHeading: 'calc(2rem + ((1vw - 0.2rem) * 0.7143))',
      sectionHeading: '2.5rem',
      paragraph: '1rem',
      textHeading: '1.5rem',
      resTextHeading: '1.25rem',
      mobileMenu: '2rem',
    },
    border: {
      buttonBorder: isDark ? '1px solid #B2B9CD' : '1px solid #CC4233',
      chipBorder: '1px solid #B2B9CD',
    },
    radius: {
      button: '5px',
      card: '8px',
      chip: '8px',
      paginationRadius: '10px',
    },
    shadow: {
      contact: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    },
    effects: {
      bgTrans: 'background-color 0.3s ease-in-out',
      colorTrans: 'color 0.3s ease-in-out',
      fillTrans: 'fill 0.3s ease-in-out',
      stretch: 'scale(0.95)',
      buttonTransitionIn:
        'color 100ms ease-in, border-color 100ms ease-in, background-color 100ms ease-in;',
      buttonTransitionOut:
        'color 100ms ease-out, border-color 80ms ease-out,background-color 100ms ease-out',
      allIn: (duration: number): string => {
        return `all ${duration}ms ease-in`
      },
      allOut: (duration: number): string => {
        return `all ${duration}ms ease-out`
      },
    },
    media: {
      minSm: 'min-width: 576px',
      minMd: 'min-width: 768px',
      minLg: 'min-width: 992px',
      minXl: 'min-width: 1300px',
      minXxL: 'min-width: 1400px',
      maxXs: 'max-width: 575.98px',
      maxSm: 'max-width: 767.98px',
      maxMd: 'max-width: 991.98px',
      maxLg: 'max-width: 1299.98px',
      maxXl: 'max-width: 1399.98px',
    },
    isDark,
    toggle,
  }

  return theme
}

export default useTheme
