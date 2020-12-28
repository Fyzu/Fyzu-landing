import React from 'react'
import { Root, Image, ColorBlue, ColorGrey, ColorMain } from './styled'

interface IBackgroundProps {
  color?: 'blue' | 'grey' | 'main'
}

function Background({ color = 'main' }: IBackgroundProps) {
  return (
    <Root>
      <Image />
      {color === 'grey' && <ColorGrey />}
      {color === 'blue' && <ColorBlue />}
      {color === 'main' && (
        <>
          <ColorGrey />
          <ColorMain />
        </>
      )}
    </Root>
  )
}

export default Background
