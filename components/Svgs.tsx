import React, { SVGProps } from 'react';

export const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox='0 0 22 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      role='presentation'
      {...props}
    >
      <path
        d='M19.0796 4.78636C18.0385 3.62095 16.7566 3.30475 15.3445 3.55168C13.6971 3.83777 12.4068 5.42478 12.1992 7.38821C12.1272 8.05072 12.094 8.71925 12.0358 9.38477C11.7562 12.5889 9.48579 15.2871 6.57582 15.8382C5.975 15.9526 5.35479 15.9827 4.74013 15.9888C3.17854 16.0098 1.61696 15.9948 0 15.9948C0 10.7309 0 5.5633 0 0.212041C3.31975 0.449942 6.7724 -0.546831 9.68514 1.94059C9.09262 3.11804 8.53887 4.21419 7.96574 5.3525C6.98559 3.61492 5.43509 3.25657 3.60493 3.42822C3.60493 6.54502 3.60493 9.6317 3.60493 12.7304C5.73688 13.4742 7.87714 12.1462 8.34506 9.71602C8.49457 8.93607 8.50288 8.126 8.55548 7.32497C8.76314 4.17504 10.6597 1.46478 13.351 0.480056C16.2859 -0.592002 19.6333 0.181927 21.3333 2.29894C20.6079 3.10299 19.8797 3.90402 19.0796 4.78636Z'
        fill='#EF4E3C'
      />
      <path
        d='M12 13.9762C12.5209 12.8824 13.0343 11.8031 13.575 10.666C14.2099 11.7454 15.0805 12.5275 16.3107 12.6313C17.5087 12.7324 18.5232 12.3139 19.3392 11.2172C20.0188 12.0657 20.6711 12.8767 21.3333 13.702C19.5822 16.6255 14.2174 16.8044 12 13.9762Z'
        fill='#4BB3FD'
      />
    </svg>
  );
};

export const Sun: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      version='1.1'
      id='sun'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 300 300'
      role='presentation'
      width={24}
      height={24}
      {...props}
    >
      <g>
        <path d='M204.8,97.6a77.15,77.15,0,0,0-22.05-15.39A75,75,0,0,0,97.6,97.6a76,76,0,0,0,53.6,129.6,74.6,74.6,0,0,0,53.6-22.4,75.57,75.57,0,0,0,15.38-85.51A73.33,73.33,0,0,0,204.8,97.6Z' />
        <path d='M151.2,51.6a10.59,10.59,0,0,0,10.4-10.4V10.4a10.4,10.4,0,0,0-20.8,0V41.2A10.59,10.59,0,0,0,151.2,51.6Z' />
        <path d='M236.4,80.8l22-22A10.18,10.18,0,1,0,244,44.4l-22,22a10.14,10.14,0,0,0,0,14.4C225.6,84.8,232,84.8,236.4,80.8Z' />
        <path d='M292,140.8H261.2a10.4,10.4,0,1,0,0,20.8H292a10.4,10.4,0,0,0,0-20.8Z' />
        <path d='M236,221.6A10.18,10.18,0,0,0,221.6,236l22,22A10.18,10.18,0,1,0,258,243.6Z' />
        <path d='M151.2,250.8a10.59,10.59,0,0,0-10.4,10.4V292a10.4,10.4,0,0,0,20.8,0V261.2A10.59,10.59,0,0,0,151.2,250.8Z' />
        <path d='M66,221.6l-22,22A10.18,10.18,0,1,0,58.4,258l22-22a10.14,10.14,0,0,0,0-14.4C76.8,217.6,70.4,217.6,66,221.6Z' />
        <path d='M51.6,151.2a10.59,10.59,0,0,0-10.4-10.4H10.4a10.4,10.4,0,1,0,0,20.8H41.2A10.59,10.59,0,0,0,51.6,151.2Z' />
        <path d='M66,80.8A10.18,10.18,0,0,0,80.4,66.4l-22-22A10.18,10.18,0,0,0,44,58.8Z' />
      </g>
    </svg>
  );
};

export const Github: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      enableBackground='new 0 0 24 24'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      role='presentation'
      {...props}
    >
      <path d='m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z' />
    </svg>
  );
};

export const Linkedin: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      enableBackground='new 0 0 24 24'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      role='presentation'
    >
      <path d='m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z' />
      <path d='m.396 7.977h4.976v16.023h-4.976z' />
      <path d='m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z' />
    </svg>
  );
};

export const Twitter: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox='-21 -81 681.33464 681'
      xmlns='http://www.w3.org/2000/svg'
      role='presentation'
      {...props}
    >
      <path d='m200.964844 515.292969c241.050781 0 372.871094-199.703125 372.871094-372.871094 0-5.671875-.117188-11.320313-.371094-16.9375 25.585937-18.5 47.824218-41.585937 65.371094-67.863281-23.480469 10.441406-48.753907 17.460937-75.257813 20.636718 27.054687-16.230468 47.828125-41.894531 57.625-72.488281-25.320313 15.011719-53.363281 25.917969-83.214844 31.808594-23.914062-25.472656-57.964843-41.402344-95.664062-41.402344-72.367188 0-131.058594 58.6875-131.058594 131.03125 0 10.289063 1.152344 20.289063 3.398437 29.882813-108.917968-5.480469-205.503906-57.625-270.132812-136.921875-11.25 19.363281-17.742188 41.863281-17.742188 65.871093 0 45.460938 23.136719 85.605469 58.316407 109.082032-21.5-.660156-41.695313-6.5625-59.351563-16.386719-.019531.550781-.019531 1.085937-.019531 1.671875 0 63.46875 45.171875 116.460938 105.144531 128.46875-11.015625 2.996094-22.605468 4.609375-34.558594 4.609375-8.429687 0-16.648437-.828125-24.632812-2.363281 16.683594 52.070312 65.066406 89.960937 122.425781 91.023437-44.855469 35.15625-101.359375 56.097657-162.769531 56.097657-10.5625 0-21.003906-.605469-31.2617188-1.816407 57.9999998 37.175781 126.8710938 58.871094 200.8867188 58.871094' />
    </svg>
  );
};

export const Telephone: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      viewBox='0 0 384 384'
      xmlSpace='preserve'
      enableBackground='new 0 0 384 384;'
      role='presentation'
      {...props}
    >
      <g>
        <g>
          <path
            d='M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594
			c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448
			c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813
			C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z'
          />
        </g>
      </g>
    </svg>
  );
};

export const Html: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      role='presentation'
      {...props}
    >
      <path
        d='M4.46 28.802L1.892.001h28.216l-2.57 28.797L15.982 32z'
        fill='#e44d26'
      />
      <path d='M25.337 26.964l2.197-24.608H16v27.197z' fill='#f16529' />
      <path
        d='M15.988 5.888H7.142l.953 10.682H16v-3.532h-4.674l-.323-3.617H16V5.888zM16 22.2l-.015.004-3.934-1.062-.25-2.817H8.253l.495 5.546 7.236 2 .016-.005z'
        fill='#ebebeb'
      />
      <path
        d='M15.988 16.57h4.35l-.4 4.58-3.94 1.063v3.675l7.242-2.007.97-10.845H16zm8.764-9.734l.084-.948h-8.85V9.42h8.532l.07-.794z'
        fill='#fff'
      />
    </svg>
  );
};

export const Css: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 128 128'
      role='presentation'
      {...props}
    >
      <path
        fill='#1572B6'
        d='M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z'
      />
      <path
        fill='#33A9DC'
        d='M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z'
      />
      <path
        fill='#fff'
        d='M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z'
      />
      <path
        fill='#EBEBEB'
        d='M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z'
      />
      <path
        fill='#fff'
        d='M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z'
      />
      <path
        fill='#EBEBEB'
        d='M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z'
      />
    </svg>
  );
};

export const JavaScript: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox='0 0 256 256'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMinYMin meet'
      role='presentation'
      {...props}
    >
      <path d='M0 0h256v256H0V0z' fill='#F7DF1E' />
      <path d='M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574' />
    </svg>
  );
};

export const ReactLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox='175.7 78 490.6 436.9'
      xmlns='http://www.w3.org/2000/svg'
      role='presentation'
      {...props}
    >
      <g fill='#61dafb'>
        <path d='m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z' />
        <circle cx='420.9' cy='296.5' r='45.7' />
      </g>
    </svg>
  );
};

export const Sass: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 384'
      role='presentation'
      {...props}
    >
      <path
        fill='#CF649A'
        d='M440.6 220.6c-17.9.101-33.4 4.4-46.4 10.801-4.8-9.5-9.6-17.801-10.399-24-.9-7.2-2-11.601-.9-20.2C384 178.6 389 166.4 389 165.4c-.101-.9-1.101-5.3-11.4-5.4s-19.2 2-20.2 4.7-3 8.9-4.3 15.3c-1.8 9.4-20.6 42.7-31.3 60.2-3.5-6.8-6.5-12.8-7.101-17.601-.899-7.199-2-11.6-.899-20.199 1.1-8.601 6.1-20.8 6.1-21.8-.1-.9-1.1-5.3-11.399-5.4-10.301-.1-19.2 2-20.2 4.7s-2.1 9.1-4.3 15.3C281.9 201.4 256.9 257 250.4 271.5c-3.3 7.4-6.199 13.3-8.3 17.3-2.1 4-.1.3-.3.7-1.8 3.4-2.8 5.3-2.8 5.3v.101c-1.4 2.5-2.9 4.899-3.601 4.899-.5 0-1.5-6.7.2-15.899 3.7-19.301 12.7-49.4 12.601-50.5 0-.5 1.699-5.801-5.801-8.5-7.3-2.7-9.899 1.8-10.5 1.8-.6 0-1.1 1.6-1.1 1.6s8.1-33.899-15.5-33.899c-14.8 0-35.2 16.1-45.3 30.8-6.4 3.5-20 10.899-34.4 18.8-5.5 3-11.2 6.2-16.6 9.1L117.9 251.9c-28.6-30.5-81.5-52.1-79.3-93.1.8-14.9 6-54.2 101.601-101.8 78.3-39 141-28.3 151.899-4.5 15.5 34-33.5 97.2-114.899 106.3-31 3.5-47.301-8.5-51.4-13-4.3-4.7-4.9-4.9-6.5-4-2.6 1.4-1 5.6 0 8.1 2.4 6.3 12.4 17.5 29.4 23.1 14.899 4.9 51.3 7.6 95.3-9.4 49.3-19.1 87.8-72.1 76.5-116.4-11.5-45.1-86.3-59.9-157-34.8C121.4 27.4 75.8 50.8 43 81.5 4 117.9-2.2 149.7.4 162.9c9.101 47.1 74 77.8 100 100.5-1.3.699-2.5 1.399-3.6 2-13 6.399-62.5 32.3-74.9 59.699-14 31 2.2 53.301 13 56.301 33.4 9.3 67.6-7.4 86.1-34.9 18.399-27.5 16.2-63.2 7.7-79.5l-.301-.6 10.2-6c6.601-3.9 13.101-7.5 18.8-10.601-3.199 8.7-5.5 19-6.699 34-1.4 17.601 5.8 40.4 15.3 49.4 4.2 3.899 9.2 4 12.3 4 11 0 16-9.101 21.5-20 6.8-13.3 12.8-28.7 12.8-28.7s-7.5 41.7 13 41.7c7.5 0 15-9.7 18.4-14.7v.1s.2-.3.6-1a36.13 36.13 0 0 0 1.2-1.899v-.2c3-5.2 9.7-17.1 19.7-36.8 12.899-25.4 25.3-57.2 25.3-57.2s1.2 7.8 4.9 20.6c2.199 7.601 6.999 15.9 10.699 24-3 4.2-4.8 6.601-4.8 6.601l.1.1c-2.399 3.2-5.1 6.601-7.899 10-10.2 12.2-22.4 26.101-24 30.101-1.9 4.699-1.5 8.199 2.2 11 2.7 2 7.5 2.399 12.6 2 9.2-.601 15.6-2.9 18.8-4.301 5-1.8 10.7-4.5 16.2-8.5 10-7.399 16.1-17.899 15.5-31.899-.3-7.7-2.8-15.3-5.9-22.5.9-1.3 1.801-2.601 2.7-4 15.8-23.101 28-48.5 28-48.5s1.2 7.8 4.9 20.6c1.899 6.5 5.7 13.601 9.1 20.601-14.8 12.1-24.1 26.1-27.3 35.3-5.9 17-1.3 24.7 7.4 26.5 3.899.8 9.5-1 13.699-2.8 5.2-1.7 11.5-4.601 17.301-8.9 10-7.4 19.6-17.7 19.1-31.6-.3-6.4-2-12.7-4.3-18.7 12.6-5.2 28.899-8.2 49.6-5.7 44.5 5.2 53.3 33 51.601 44.6-1.7 11.601-11 18-14.101 20-3.1 1.9-4.1 2.601-3.8 4 .4 2.101 1.8 2 4.5 1.601 3.7-.601 23.4-9.5 24.2-30.899 1.2-27.504-24.9-57.504-71.2-57.205zM97.4 336.3c-14.7 16.1-35.4 22.2-44.2 17-9.5-5.5-5.801-29.2 12.3-46.3 11-10.4 25.3-20 34.7-25.9 2.1-1.3 5.3-3.199 9.1-5.5.6-.399 1-.6 1-.6.7-.4 1.5-.9 2.3-1.4 6.7 24.4.3 45.8-15.2 62.7zm107.5-73.1c-5.1 12.5-15.9 44.6-22.4 42.8-5.601-1.5-9-25.8-1.101-49.8 4-12.101 12.5-26.5 17.5-32.101 8.101-9 16.9-12 19.101-8.3 2.6 4.801-9.9 39.601-13.1 47.401zm88.7 42.4c-2.2 1.101-4.2 1.9-5.1 1.301-.7-.4.899-1.9.899-1.9s11.1-11.9 15.5-17.4c2.5-3.199 5.5-6.899 8.7-11.1v1.2C313.6 292.1 299.8 301.7 293.6 305.6zm68.399-15.6c-1.6-1.2-1.399-4.9 4-16.5 2.101-4.6 6.9-12.3 15.2-19.6 1 3 1.601 5.899 1.5 8.6-.099 18-12.899 24.7-20.7 27.5z'
      />
    </svg>
  );
};

export const Bootstrap: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox='0 0 256 256'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMinYMin meet'
      role='presentation'
      {...props}
    >
      <path
        d='M0 222.991C0 241.223 14.779 256 33.009 256H222.99C241.223 256 256 241.221 256 222.991V33.01C256 14.777 241.221 0 222.991 0H33.01C14.777 0 0 14.779 0 33.009V222.99z'
        fill='#563D7C'
      />
      <path
        d='M106.158 113.238V76.985h31.911c3.04 0 5.97.253 8.792.76 2.822.506 5.319 1.41 7.49 2.713 2.17 1.303 3.907 3.112 5.21 5.427 1.302 2.316 1.954 5.283 1.954 8.9 0 6.513-1.954 11.217-5.862 14.111-3.907 2.895-8.9 4.342-14.979 4.342h-34.516zM72.075 50.5v155h75.112c6.947 0 13.713-.868 20.298-2.605 6.585-1.737 12.446-4.414 17.584-8.032 5.137-3.618 9.226-8.286 12.265-14.002 3.04-5.717 4.559-12.483 4.559-20.298 0-9.697-2.352-17.982-7.055-24.856-4.704-6.875-11.832-11.687-21.384-14.437 6.947-3.328 12.194-7.598 15.74-12.808 3.545-5.21 5.318-11.722 5.318-19.538 0-7.236-1.194-13.314-3.582-18.235-2.388-4.92-5.753-8.864-10.095-11.831-4.341-2.967-9.551-5.102-15.63-6.404-6.078-1.303-12.808-1.954-20.189-1.954H72.075zm34.083 128.515v-42.549h37.121c7.381 0 13.315 1.7 17.802 5.102 4.486 3.401 6.73 9.081 6.73 17.041 0 4.053-.688 7.381-2.063 9.986-1.375 2.605-3.22 4.668-5.536 6.187-2.315 1.52-4.993 2.605-8.032 3.257-3.04.65-6.223.976-9.552.976h-36.47z'
        fill='#FFF'
      />
    </svg>
  );
};

export const FireBase: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      role='presentation'
      {...props}
    >
      <path
        d='M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z'
        fill='#ffa000'
      />
      <path d='M13.445 8.543l2.972 5.995-11.97 11.135z' fill='#f57f17' />
      <path
        d='M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z'
        fill='#ffca28'
      />
      <path
        d='M13.445 8.543l-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z'
        fill='#ffa000'
      />
    </svg>
  );
};

export const Git: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox='0 0 256 256'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMinYMin meet'
      role='presentation'
      {...props}
    >
      <path
        d='M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442l-76.64 76.635c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324'
        fill='#DE4C36'
      />
    </svg>
  );
};

export const Gulp: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 5105.4 5105.4'
      role='presentation'
      {...props}
    >
      <path className='st0' d='M0 0h5105.4v5105.4H0z' />
      <path
        className='st1'
        d='M1766.5 2586.7c-2.4 3.5-6.6 14.4-12.8 32.9-6.2 18.5-13.7 41.6-22.5 69.4-8.8 27.8-18.4 59-28.6 93.4-10.3 34.4-20.9 69.6-31.7 105.4-10.9 35.9-21.3 71-31.3 105.5-10 34.4-19 65.6-26.9 93.4-7.9 27.8-14.5 51.1-19.8 70-5.3 18.8-8.5 29.9-9.7 33.4-2.9 11.1-7.6 23.5-14.1 37.1-6.5 13.6-14.1 26.4-22.9 38.6-8.8 12.2-18.5 22.3-29.1 30.3-10.6 8-21.5 12-32.6 12-18.8 0-32.5-6.3-41-18.8s-12.8-35.5-12.8-68.9v-14.6c0-4.9.3-10.1.9-15.6.6-11.1 5-32 13.2-62.7 8.2-30.6 18.1-65.2 29.5-103.9s23.8-78.6 37-120.1c13.2-41.4 25.1-78.5 35.7-111.2-31.2 34.8-64.9 69.4-101.4 103.9-36.4 34.5-73.8 65.4-111.9 92.9-38.2 27.5-76.7 50-115.5 67.3-38.8 17.4-76.1 26.1-111.9 26.1-41.1 0-76.5-9.1-106.2-27.1-29.7-18.1-54.2-41.8-73.6-71s-33.8-62.3-43.2-99.2c-9.4-36.9-14.1-73.8-14.1-110.7v-13.6c0-4.2.3-8.3.9-12.5 3.5-66.8 13.1-135.4 28.6-205.7 15.6-70.3 36-140.3 61.3-209.8 25.3-69.6 54.5-137.6 87.7-204.1s69.3-129.3 108.4-188.4c39.1-59.1 80.6-113.6 124.7-163.4 44.1-49.8 89.3-92.6 135.7-128.4 46.4-35.8 93.3-63.8 140.6-84 47.3-20.2 94.2-30.3 140.6-30.3 53.5 0 105.2 14.6 155.1 43.8 49.9 29.2 96.6 76.6 140.1 142 10 14.6 16.3 29.4 18.9 44.4 2.6 15 4 29.1 4 42.3 0 31.3-7.5 56-22.5 74.1-15 18.1-32.8 27.1-53.3 27.1-18.8 0-36.3-9.9-52.4-29.8-16.2-19.8-34.2-48.2-54.2-85.1-18.8-33.4-39.5-57.6-62.1-72.6-22.6-15-47.2-22.4-73.6-22.4-41.1 0-85.1 17.1-131.8 51.2-46.7 34.1-93 79.2-138.8 135.2-45.8 56-89.8 120-131.8 192.1-42 72-79.2 145.8-111.5 221.3s-58 150-77.1 223.4c-19.1 73.4-28.6 139.4-28.6 197.9 0 19.5 1.3 39.5 4 60s7.6 39.2 15 55.9c7.3 16.7 17.3 30.5 30 41.2 12.6 10.8 28.6 16.2 48 16.2 21.7 0 46.4-7.3 74-21.9 27.6-14.6 56.3-33.7 85.9-57.4 29.7-23.7 59.5-50.5 89.5-80.4 30-29.9 57.9-60.2 83.7-90.8 25.8-30.6 48.8-60 68.7-88.2 20-28.2 35-52.7 44.9-73.6l82-245.3c10-26.4 23.1-45.2 39.2-56.4 16.2-11.1 32.8-16.7 49.8-16.7 8.2 0 16.4 1.4 24.7 4.2 8.2 2.8 15.6 7.1 22 13.1 6.5 5.9 11.6 13.6 15.4 23 3.8 9.4 5.7 20.4 5.7 32.9 0 33.4-2.9 64.7-8.8 94-5.9 29.3-13.4 57.8-22.5 85.6-9.1 27.8-19.2 55.9-30.4 84-11 28-21.9 57.4-32.4 88.1zM2877.9 2791.3c-25.9 34.8-56 68.7-90.3 101.8-34.4 33.1-69.8 62.5-106.2 88.2-36.4 25.7-72.3 46.4-107.5 62.1-35.3 15.7-67 23.5-95.2 23.5s-51.1-9.4-68.8-28.2c-17.6-18.8-26.4-50.8-26.4-96.1 0-32 4.7-69.3 14.1-111.7-15.3 27.2-34.4 54.7-57.3 82.5-22.9 27.8-49.1 53.2-78.5 76.2s-62.3 41.6-98.7 55.8c-36.4 14.3-76.1 21.4-119 21.4-19.4 0-38.1-2.4-56-7.3s-33.6-13.2-47.1-25-24.4-27.6-32.6-47.5c-8.2-19.8-12.3-44.7-12.3-74.6 0-.7 1.2-11.3 3.5-31.8s9.8-52.9 22.5-97.1c12.6-44.2 32.2-101.4 58.6-171.7 26.5-70.3 63.8-155.5 111.9-255.8 12.3-26.4 26.6-45.4 42.7-56.9 16.2-11.5 33.6-17.2 52.4-17.2 8.2 0 16.7 1.2 25.6 3.6 8.8 2.5 17 6.3 24.7 11.5 7.6 5.2 13.8 11.8 18.5 19.8 4.7 8 7.1 17.2 7.1 27.7 0 7-.9 13.6-2.7 19.8-2.9 11.9-9.2 27.3-19 46.5-9.7 19.2-21 41.1-33.9 65.8-12.9 24.7-26.6 51.3-41 79.9-14.4 28.5-27.8 58.1-40.1 88.7s-22.9 61.8-31.7 93.4c-8.8 31.7-13.8 62.5-15 92.4 0 12.5 2.9 24 8.8 34.5 5.9 10.4 15.6 15.7 29.1 15.7 38.2 0 74.6-12.5 109.3-37.6 34.7-25 66.7-56.2 96.1-93.4 29.4-37.2 56-77.2 79.8-120.1 23.8-42.8 43.7-81.9 59.5-117.4 11.2-23.7 21-49.1 29.5-76.2s17.8-52.2 27.8-75.2 21.4-42.1 34.4-57.4c12.9-15.3 29.1-23 48.5-23 21.1 0 37.9 8 50.2 24 12.3 16 18.5 35.2 18.5 57.4 0 12.5-3.9 29.8-11.9 51.7-8 21.9-17.9 47-30 75.2-12 28.2-25.1 58.3-39.2 90.3-14.1 32-27.2 64.6-39.2 97.6-12.1 33.1-22 65.4-30 97.1-7.9 31.7-11.9 61.1-11.9 88.2 0 25.1 12.9 37.6 38.8 37.6 18.2 0 40.8-6.3 67.9-18.8 27.1-12.5 55.4-30.1 85.1-52.7 29.7-22.6 59.3-49.2 89-79.9 29.7-30.6 56-63.7 78.9-99.2l8.7 141.9z'
      />
      <path
        className='st1'
        d='M2905.3 2739.1c-6.5 16-12.8 34.6-19 55.9-6.2 21.2-9.2 40.2-9.2 56.9 0 10.4 1.8 18.8 5.3 25.1 3.5 6.3 10.3 9.4 20.3 9.4 12.3 0 27.7-4.3 46.3-13.1 18.5-8.7 38.5-20.2 59.9-34.5 21.5-14.2 43.8-30.6 67-49.1 23.2-18.4 46.3-37.6 69.2-57.4 22.9-19.9 44.8-39.7 65.7-59.5 20.9-19.9 39.5-38.1 56-54.8 4.7-4.9 10.3-8.4 16.7-10.4 6.4-2.1 12-3.1 16.7-3.1 11.7 0 21.5 4.9 29.1 14.6 7.6 9.7 11.4 22.6 11.4 38.6 0 14.6-4.1 31-12.3 49.1-8.2 18.1-22.6 35.9-43.2 53.2-37.6 41.1-75.5 80-113.7 116.9-38.2 36.9-76.2 69.4-114.1 97.6-37.9 28.2-75.5 50.6-112.8 67.4-37.3 16.7-73.6 25-108.9 25-24.1 0-44.2-3.8-60.4-11.5-16.2-7.7-29.1-18.1-38.8-31.3-9.7-13.2-16.6-28.9-20.7-47-4.1-18.1-6.2-37.2-6.2-57.4 0-34.1 4.3-69.1 12.8-104.9 8.5-35.8 18.6-68.7 30.4-98.6 20.6-54.3 41.4-108.2 62.6-161.8 21.1-53.6 40.5-102.7 58.2-147.2l267-673.4c10.6-27.1 24.8-46.3 42.8-57.4 17.9-11.1 36-16.7 54.2-16.7 18.2 0 34.8 5.9 49.8 17.7 15 11.8 22.5 31 22.5 57.4 0 12.5-2.5 25.8-7.5 39.7-5 13.9-11.3 28.9-18.9 44.9-14.7 32.7-32.2 72.7-52.4 120-20.3 47.3-42 98.8-65.2 154.5-23.2 55.7-47 113.6-71.4 173.8-24.4 60.2-48.2 118.8-71.4 175.9-23.2 57.1-44.9 111.2-65.2 162.3-20.5 51.2-38 95.6-52.6 133.2z'
      />
      <path
        className='st1'
        d='M4154.2 2550.1c8.2-5.6 15.9-10.1 22.9-13.6 7-3.5 13.8-5.2 20.3-5.2 12.9 0 22.6 5.8 29.1 17.2 6.5 11.5 9.7 25.6 9.7 42.3 0 18.1-3.9 36.5-11.9 55.3-7.9 18.8-19.8 34.4-35.7 47-62.9 55.7-119 106.5-168.3 152.4-49.4 45.9-95.9 85.4-139.7 118.5-43.8 33.1-86.5 58.6-128.2 76.7-41.7 18.1-86.4 27.1-134 27.1-44.7 0-79.2-9.8-103.6-29.2-24.4-19.5-36.6-46.3-36.6-80.4v-7.8c0-2.4.3-5.4.9-8.9 2.3-20.9 11.5-44.9 27.3-72 15.9-27.1 35-55.3 57.3-84.6s46.1-58.8 71.4-88.7c25.3-29.9 48.6-58.3 70.1-85.1 21.4-26.8 39.2-51.3 53.3-73.6 14.1-22.3 21.2-40.3 21.2-54.3 0-8.4-3-15-8.8-19.8-5.9-4.9-15.6-7.3-29.1-7.3-23.5 0-47.7 6.1-72.7 18.3-25 12.2-49.7 28.5-74 49-24.4 20.5-48.2 44-71.4 70.5-23.2 26.5-44.9 53.9-65.2 82.5-20.3 28.6-38.8 57.2-55.5 86.1-16.7 28.9-31 55.5-42.7 79.9-3.5 7.7-8.5 18.5-15 32.4-6.5 13.9-13.5 29.6-21.1 47-7.7 17.4-15.7 35.3-24.3 53.7-8.5 18.5-16.3 35.9-23.3 52.2-7.1 16.4-13.4 30.9-19 43.9-5.6 12.9-9.6 21.7-11.9 26.6-3 6.3-7.8 18.1-14.6 35.5s-14.5 37.7-23.4 61.1c-8.8 23.3-18.1 47.8-27.7 73.6-9.7 25.8-18.8 50.1-27.3 73.1-8.5 23-16 43.1-22.5 60.5s-10.6 29.2-12.4 35.5c-5.9 18.1-12.8 35.1-20.7 51.2-7.9 16-17 30.1-27.3 42.3-10.3 12.2-22 21.9-35.3 29.2-13.2 7.3-28.1 10.9-44.5 10.9-21.2 0-38.6-5.1-52.5-15.1-13.8-10.1-20.7-29.4-20.7-57.9 0-13.9 1.8-28.2 5.3-42.8 3.5-14.6 8-29.1 13.2-43.3 5.3-14.3 10.7-28.2 16.3-41.7 5.6-13.6 10.7-26.6 15.4-39.2 31.7-69.6 64.1-139.4 97-209.3 32.9-70 64.5-139.2 94.7-207.8 30.3-68.5 58.3-135.9 84.2-202 25.8-66.1 47.3-129.5 64.3-190 4.7-12.5 11.2-30.3 19.4-53.3 8.2-23 17.6-45.6 28.2-67.9 10.6-22.3 22.5-41.6 35.7-57.9 13.2-16.4 27.5-24.5 42.7-24.5 23.5 0 40.5 5.4 51.1 16.2 10.6 10.8 15.9 26.6 15.9 47.5 0 4.2-.6 10.8-1.8 19.8-1.2 9-2.7 18.6-4.4 28.7-1.8 10.1-3.7 19.7-5.7 28.7-2.1 9-4 15.6-5.7 19.8 21.7-23.7 45.2-47.1 70.5-70.5 25.3-23.3 51.4-44.4 78.5-63.2 27-18.8 54.6-34.1 82.8-46 28.2-11.8 56.4-17.7 84.6-17.7 19.4 0 38.6 2.8 57.7 8.4 19.1 5.6 36.1 13.7 51.1 24.5s27.2 24.4 36.6 40.7c9.4 16.4 14.1 35.3 14.1 56.9 0 28.6-7.2 59-21.6 91.4-14.4 32.4-32.5 64.9-54.2 97.6-21.8 32.7-45.3 64.6-70.5 95.5-25.3 31-48.9 59.2-71 84.6-22 25.4-40.5 47-55.5 64.7-15 17.8-22.8 29.8-23.4 36 0 8.4 2.7 15.1 7.9 20.4s14.1 7.8 26.5 7.8c10 0 24.7-5.6 44.1-16.7 19.4-11.1 46.6-30.4 81.5-57.9s79.3-64.4 133.1-110.7c53.8-46.2 120.1-104.5 198.8-174.8z'
      />

      <style jsx>
        {`
          .st0 {
            fill: #cf4547;
          }
          .st1 {
            fill: #fff;
            stroke: #fff;
            stroke-width: 13.3857;
            stroke-miterlimit: 10;
          }
        `}
      </style>
    </svg>
  );
};

export const JestLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      enableBackground='new 0 0 398.3 439.9'
      viewBox='0 0 398.3 439.9'
      xmlns='http://www.w3.org/2000/svg'
      role='presentation'
      {...props}
    >
      <path
        d='m334.9 218.1c-.5.3-18.3-2.7-40.7-4.2-18.2-1.2-39.5-1.2-56.7 0-14 .9-32.4-6.1-34.6 2.3-8.2 31.4-26 58.7-48.5 79.9-17 16-36.4 28.1-57.4 35.6-25-12.8-36.8-41.4-26.2-66.4 8.4-19.9 18.3-41.7.1-46.7-13.2-3.6-20.5 9-25.5 22.5-9.7 25.9-28.2 52.7-33.5 84.5-5.6 33.5 0 69.1 29 89.3 67.6 46.8 140.9-29 218.2-48.1 28-6.9 58.8-5.8 83.5-20.1 18.5-10.7 30.8-28.5 34.2-48.5 5.6-32.2-11.1-64.1-41.9-80.1z'
        fill='#99425b'
        stroke='#fff'
        strokeWidth='20'
      />
      <path
        d='m202.9 216.2c-8.2 31.4-26 58.7-48.5 79.9-17 16-36.4 28.1-57.4 35.6-25-12.8-36.8-41.4-26.2-66.4 8.4-19.9 18.3-41.7.1-46.7-13.2-3.6-20.5 9-25.5 22.5-9.7 25.9-28.2 52.7-33.5 84.5-5.6 33.5 0 69.1 29 89.3 67.6 46.8 140.9-29 218.2-48.1 28-6.9 58.8-5.8 83.5-20.1 18.5-10.7 30.8-28.5 34.2-48.5 5.6-32.1-11.1-64.1-41.9-80'
        fill='none'
        stroke='#fff'
        strokeWidth='20'
      />
      <path d='m264.9 91.2 54.3 110.8 65.1-192h-239l65 191.6z' fill='#99425b' />
      <path
        d='m264.9 91.2 54.3 110.8 65.1-192h-239l65 191.6z'
        fill='none'
        stroke='#fff'
        strokeWidth='20'
      />
      <circle cx='199' cy='216.6' fill='#99425b' r='40.9' />
      <g stroke='#fff' strokeWidth='20'>
        <circle cx='199' cy='216.6' fill='none' r='40.9' />
        <circle cx='332.4' cy='216.6' fill='#99425b' r='40.9' />
        <circle cx='332.4' cy='216.6' fill='none' r='40.9' />
      </g>
      <circle cx='65.1' cy='216.9' fill='#99425b' r='40.9' />
      <circle
        cx='65.1'
        cy='216.9'
        fill='none'
        r='40.9'
        stroke='#fff'
        strokeWidth='20'
      />
    </svg>
  );
};

export const MaterialUi: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox='0 0 600 476.30000000000007'
      xmlns='http://www.w3.org/2000/svg'
      role='presentation'
      {...props}
    >
      <path d='M0 259.8V0l225 129.9v86.6L75 129.9v173.2z' fill='#00b0ff' />
      <path
        d='M225 129.9L450 0v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z'
        fill='#0081cb'
      />
      <path d='M225 303.1v86.6l150 86.6v-86.6z' fill='#00b0ff' />
      <path
        d='M375 476.3l225-129.9V173.2l-75 43.3v86.6l-150 86.6zm150-346.4V43.3L600 0v86.6z'
        fill='#0081cb'
      />
    </svg>
  );
};

export const NextJs: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      role='presentation'
      viewBox='0 0 256 256'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMidYMid'
    >
      <g>
        <path
          d='M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z'
          fill='#000000'
        ></path>
      </g>
    </svg>
  );
};

export const Strapi: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox='.24262095 .26549587 243.32256626 243.58072911'
      xmlns='http://www.w3.org/2000/svg'
      role='presentation'
      {...props}
    >
      <g fill='#8e75ff' fillRule='evenodd'>
        <path d='m161.893 165.833v-78.73a5.077 5.077 0 0 0 -5.077-5.076h-78.638v-81.267h159.815a5.077 5.077 0 0 1 5.078 5.077v159.996z' />
        <path
          d='m78.178.76v81.267h-75.054a2.539 2.539 0 0 1 -1.796-4.333zm83.715 240.206v-75.133h81.178l-76.844 76.927a2.539 2.539 0 0 1 -4.334-1.794zm-83.715-158.939h81.176a2.539 2.539 0 0 1 2.539 2.538v81.268h-78.638a5.077 5.077 0 0 1 -5.077-5.077z'
          opacity='.405'
        />
      </g>
    </svg>
  );
};

export const VsCode: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox='-11.9 -2 1003.9 995.6'
      xmlns='http://www.w3.org/2000/svg'
      role='presentation'
      {...props}
    >
      <path
        d='m12.1 353.9s-24-17.3 4.8-40.4l67.1-60s19.2-20.2 39.5-2.6l619.2 468.8v224.8s-.3 35.3-45.6 31.4z'
        fill='#2489ca'
      />
      <path
        d='m171.7 498.8-159.6 145.1s-16.4 12.2 0 34l74.1 67.4s17.6 18.9 43.6-2.6l169.2-128.3z'
        fill='#1070b3'
      />
      <path
        d='m451.9 500 292.7-223.5-1.9-223.6s-12.5-48.8-54.2-23.4l-389.5 354.5z'
        fill='#0877b9'
      />
      <path
        d='m697.1 976.2c17 17.4 37.6 11.7 37.6 11.7l228.1-112.4c29.2-19.9 25.1-44.6 25.1-44.6v-671.2c0-29.5-30.2-39.7-30.2-39.7l-197.7-95.3c-43.2-26.7-71.5 4.8-71.5 4.8s36.4-26.2 54.2 23.4v887.5c0 6.1-1.3 12.1-3.9 17.5-5.2 10.5-16.5 20.3-43.6 16.2z'
        fill='#3c99d4'
      />
    </svg>
  );
};

export const WebPack: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1200 1200'
      role='presentation'
      {...props}
    >
      <path fill='#fff' d='M600 0l530.3 300v600L600 1200 69.7 900V300z' />
      <path
        fill='#8ed6fb'
        d='M1035.6 879.3l-418.1 236.5V931.6L878 788.3l157.6 91zm28.6-25.9V358.8l-153 88.3V765l153 88.4zm-901.5 25.9l418.1 236.5V931.6L320.3 788.3l-157.6 91zm-28.6-25.9V358.8l153 88.3V765l-153 88.4zM152 326.8L580.8 84.2v178.1L306.1 413.4l-2.1 1.2-152-87.8zm894.3 0L617.5 84.2v178.1l274.7 151.1 2.1 1.2 152-87.8z'
      />
      <path
        fill='#1c78c0'
        d='m580.8 889.7l-257-141.3v-280l257 148.4v272.9m36.7 0l257-141.3v-280l-257 148.4v272.9m-276.3-453.7l258-141.9 258 141.9-258 149-258-149'
      />
    </svg>
  );
};

export const WordPress: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='8.399 8.4 51.2 51.2'
      role='presentation'
      {...props}
    >
      <path
        fill='#21759B'
        d='M34 59.6C19.813 59.6 8.293 48.293 8.4 34 8.507 19.707 19.28 8.4 34 8.4c14.721 0 25.6 11.52 25.6 25.6S48.187 59.6 34 59.6zm7.573-3.947l-7.253-19.52-6.827 19.947c5.014 1.174 8.427 1.493 14.08-.427zm-17.706-1.066l-10.88-29.76c-1.494 3.2-1.813 5.867-2.027 9.173.107 8.746 5.013 16.746 12.907 20.587zM56.934 34c.106-5.653-2.453-10.133-2.667-10.773.214 4.374-.427 6.613-1.173 9.067l-7.467 21.44C55.014 48.08 56.826 39.653 57.04 34h-.106zm-23.68-.96l-3.627-9.92-2.667-.213c-1.066-.747-.427-1.92.32-1.92 4.8.32 7.466.32 12.267 0 1.174 0 1.493 1.707.106 1.92l-2.56.213 8.319 24.533 3.946-13.44c.214-5.866-1.387-6.506-3.52-10.773-1.707-3.307.107-6.507 3.414-6.613-2.668-2.56-8.107-5.76-15.254-5.867s-14.72 3.52-19.2 10.347l7.894-.213c.96.427.533 1.813 0 1.92l-2.773.213 8.32 24.96 5.015-15.147z'
      />
    </svg>
  );
};

export const TypeScript: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' role='presentation' {...props}>
      <path
        d='M0 32v32h64.002V-.002H0zm51.577-2.55c1.625.406 2.865 1.128 4.003 2.306.59.63 1.463 1.778 1.534 2.052.02.08-2.763 1.95-4.45 2.997-.06.04-.305-.223-.58-.63-.823-1.2-1.686-1.717-3.007-1.808-1.94-.132-3.2.884-3.18 2.58 0 .498.07.792.274 1.2.427.884 1.22 1.412 3.708 2.49 4.582 1.97 6.542 3.27 7.76 5.12 1.36 2.062 1.666 5.354.742 7.802-1.016 2.662-3.535 4.47-7.08 5.07-1.097.193-3.698.163-4.876-.05-2.57-.457-5.008-1.727-6.512-3.393-.59-.65-1.737-2.347-1.666-2.47.03-.04.295-.203.59-.376l2.377-1.37 1.84-1.067.386.57c.538.823 1.717 1.95 2.428 2.326 2.042 1.077 4.846.924 6.227-.315.59-.538.833-1.097.833-1.92 0-.742-.09-1.067-.477-1.625-.498-.71-1.514-1.31-4.4-2.56-3.302-1.422-4.724-2.306-6.024-3.708-.752-.813-1.463-2.113-1.758-3.2-.244-.904-.305-3.17-.112-4.084.68-3.2 3.088-5.415 6.563-6.075 1.128-.213 3.75-.132 4.856.142zM36.552 32.12l.02 2.62h-8.33v23.67H22.35v-23.67h-8.33v-2.57l.07-2.64c.03-.04 5.1-.06 11.246-.05l11.185.03z'
        fill='#007acc'
      />
    </svg>
  );
};

export const MaxWindow: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      role='presentation'
      {...props}
    >
      <path
        d='M11.5 5.5H4C3.20435 5.5 2.44129 5.81607 1.87868 6.37868C1.31607 6.94129 1 7.70435 1 8.5V22C1 22.7957 1.31607 23.5587 1.87868 24.1213C2.44129 24.6839 3.20435 25 4 25H17.5C18.2956 25 19.0587 24.6839 19.6213 24.1213C20.1839 23.5587 20.5 22.7957 20.5 22V14.5M10 16L25 1M25 1H17.5M25 1L25 8.5'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
