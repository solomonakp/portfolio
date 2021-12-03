import React from 'react'
import { target } from '@utils/types'

interface IconLinkProps {
  href: string
  id?: string
  target?: target
}

const IconLink: React.FC<IconLinkProps> = ({
  href,
  id,
  target,
  children,
  ...props
}) => {
  return (
    <a href={href} id={id} {...props} target={target}>
      {children}
    </a>
  )
}

export default IconLink
