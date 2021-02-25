import React from 'react';
import useTheme from '../useTheme';
import FooterIcons from './FooterIcons';

interface FooterProps {}

const Footer: React.FC = (props: FooterProps) => {
  const {
    size: { sectionHeading, textHeading },
    colors: { dark, primary },
    radius: { button },
  } = useTheme();

  return (
    <footer>
      <div className='container'>
        <h3>looking to build a team?</h3>
        <h5>
          Send a message and{' '}
          <a href='mailto:solomonakp@gmail.com'>let’s talk</a>
        </h5>
        <FooterIcons />
      </div>
      <style jsx>{`
        footer {
          text-align: center;
          padding-bottom: 5.625rem;
          margin-top: auto;
        }
        h3,
        h5 {
          color: ${dark};
        }
        h3 {
          margin-bottom: 1.5rem;
          font-size: ${sectionHeading};
        }
        h5 {
          margin-bottom: 3.75rem;
          font-size: ${textHeading};
        }
        a {
          position: relative;
          cursor: pointer;
          &:before {
            content: '';
            display: block;
            position: absolute;
            bottom: -4px;
            height: 3px;
            left: 0;
            right: 0;
            border-radius: ${button};
            background-color: ${primary};
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
