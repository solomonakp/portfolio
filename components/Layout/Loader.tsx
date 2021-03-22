import React, { useRef } from 'react';

interface LoaderProps {
  fixed?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ fixed }) => {
  return (
    <div className='d-flex align-items-center justify-content-center'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 385.44 277.65'>
        <path
          d='M158.15 63.72c-37.65-30-60.65-30.31-68.51-31.81C65.5 27.3 29.5 30.72 29.5 30.72v217.29l59-.29c4.09-.36 54 .28 79-43 17.18-29.76-2-91 35-133 39.45-44.79 116-60 158-13'
          fill='none'
          stroke='#EF4E3C'
          stroke-miterlimit='10'
          stroke-width='59'
        />
        <path
          d='M213.34 213.18s27.16 34.12 72.16 34.83 78.47-34.83 78.47-34.83'
          fill='none'
          stroke='#4bb3fd'
          stroke-miterlimit='10'
          stroke-width='59'
        />
      </svg>
      <style jsx>
        {`
          div {
            width: 100%;
            white-space: nowrap;
            height: 100%;
            min-height: 100vh;
            fixed: ${fixed ? '0' : 'initial'};
            left: ${fixed ? '0' : 'initial'};
            right: ${fixed ? '0' : 'initial'};
            top: ${fixed ? '0' : 'initial'};
            bottom: ${fixed ? '0' : 'initial'};

            svg {
              height: auto;
              width: 200px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
