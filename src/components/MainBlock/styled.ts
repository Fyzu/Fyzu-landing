import styled from 'styled-components'
import Shuriken from '@/components/Shuriken'

export const Root = styled.section`
  position: relative;
  width: 100%;
  min-height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img.attrs({
  src: '/images/logo.svg',
})`
  height: 34rem;
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
})`
  position: absolute;
  top: 6rem;
  left: 3.6rem;
`
