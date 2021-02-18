import React from 'react';

interface LayoutProps {
  children: React.ReactChild;
}

export const Layout: React.FC = ({ children }: LayoutProps) => {
  return <div className='layout'></div>;
};
