import React from 'react';
import FloatingContainer from './FloatingContainer';
import FloatList from './FloatingList';
import IconLink from './IconLink';

interface FloatingEmailProps {}

const FloatingEmail: React.FC<FloatingEmailProps> = () => {
  return (
    <FloatingContainer bottom='0px' right='71px'>
      <FloatList>
        <li>
          <IconLink href={'mailto:solomonakp@gmail.com'} id='floating-email'>
            solomonakp@gmail.com
          </IconLink>
        </li>
      </FloatList>
    </FloatingContainer>
  );
};

export default FloatingEmail;
