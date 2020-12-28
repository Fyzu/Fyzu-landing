import React from 'react'
import { FyzuText, Logo, Root, Shuriken1 } from './styled'
import Background from '@/components/Background'

function MainBlock() {
  return (
    <Root>
      <Background />
      <Logo />
      <FyzuText />
      <Shuriken1 />
    </Root>
  )
}

export default MainBlock
