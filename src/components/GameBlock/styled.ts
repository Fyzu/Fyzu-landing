import styled from 'styled-components'
import Image from 'next/image'

import Block from '@/components/Block'
import { rem } from '@/utils'

export const Root = styled(Block).attrs({ color: 'grey' })`
  display: flex;
  flex-direction: column;
  padding: ${rem(136)};
`

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${rem(630)};
`

export const Background = styled(Image).attrs({
  src: '/images/game-background.jpg',
  layout: 'fill',
})`
  object-fit: cover;
  opacity: 0.3;
  filter: grayscale(1);
  z-index: -10;
`

export const Title = styled.h4`
  font-size: ${rem(36)};
  text-align: center;
`
