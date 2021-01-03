import React from 'react'
import { Root, Background, BackgroundImage, ColorBlue, ColorGrey, ColorMain } from './styled'

interface IBlockProps {
  color?: 'blue' | 'grey' | 'main'
  className?: string
  children?: React.ReactNode
}

function Block({ color = 'main', className, children }: IBlockProps) {
  return (
    <Root className={className}>
      <Background>
        <BackgroundImage isMain={color === 'main'} />
        {color === 'grey' && <ColorGrey />}
        {color === 'blue' && <ColorBlue />}
        {color === 'main' && (
          <>
            <ColorGrey />
            <ColorMain />
          </>
        )}
      </Background>
      {children}
    </Root>
  )
}

export default Block