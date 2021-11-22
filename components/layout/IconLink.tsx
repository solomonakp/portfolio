import React from 'react';

interface IconLinkProps {
  href: string;
  id?: string;
}

const IconLink: React.FC<IconLinkProps> = ({
  href,
  id,
  children,
  ...props
}) => {
  return (
    <a href={href} id={id} {...props}>
      {children}
    </a>
  );
};

export default IconLink;
