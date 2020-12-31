import styled from 'styled-components'
import Shuriken from '@/components/Shuriken'
import Block from '@/components/Block'

export const Root = styled(Block).attrs({ color: 'main' })`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50rem;
`

export const Logo = styled.img.attrs({
  src: '/images/logo.svg',
})`
  height: 35rem;
  width: 35rem;
  object-fit: contain;
`

export const FyzuText = styled.img.attrs({
  src: '/images/fyzu-text.svg',
})`
  position: absolute;
  right: 5.8rem;
  top: 5.4rem;
  height: 12rem;
  width: 18rem;
  object-fit: contain;
`

export const Shuriken1 = styled(Shuriken).attrs({
  size: 4.1,
  rotate: -30,
})`
  position: absolute;
  top: 6rem;
  left: 3.6rem;
`
