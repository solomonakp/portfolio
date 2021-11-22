import React, { useRef } from 'react'

interface HeadingProps {
  className?: string
  id?: string
}
const Heading: React.FC<HeadingProps> = ({ children, className, id }) => {
  const heading = useRef<HTMLHeadingElement>(null)

  return (
    <h2 ref={heading} className={className} id={id}>
      {children}
    </h2>
  )
}

export default Heading
