import React from 'react'

import { Root } from './styled'

export interface IButtonProps {
  as?: any
  onClick?: () => void
  href?: string
  target?: string
  children: React.ReactNode
}

function Button({ children, as, ...props }: IButtonProps) {
  return (
    <Root as={as} {...props}>
      {children}
    </Root>
  )
}

export default Button
