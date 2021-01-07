import styled from 'styled-components'
import Shuriken from '@/components/Shuriken'
import Block from '@/components/Block'
import { rem } from '@/utils'
import FyzuTextBase from '@/components/FyzuText'

export const Root = styled(Block).attrs({ color: 'main' })`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${rem(900)};
`

export const Logo = styled.img.attrs({
  src: '/images/logo.svg',
  alt: 'Fyzu logo',
})`
  height: ${rem(631)};
  width: ${rem(631)};
  object-fit: contain;
`

export const FyzuText = styled(FyzuTextBase)`
  position: absolute;
  right: ${rem(106)};
  top: ${rem(98)};
  height: ${rem(216)};
  width: ${rem(301)};
`

export const Shuriken1 = styled(Shuriken).attrs({
  size: rem(75),
  rotate: -30,
})`
  position: absolute;
  top: ${rem(107)};
  left: ${rem(66)};
`

export const Shuriken2 = styled(Shuriken).attrs({
  size: rem(22),
  rotate: -20,
})`
  position: absolute;
  top: ${rem(323)};
  left: ${rem(231)};
`

export const Shuriken3 = styled(Shuriken).attrs({
  size: rem(52),
  rotate: -10,
})`
  position: absolute;
  top: ${rem(82)};
  right: ${rem(105)};
`

export const Shuriken4 = styled(Shuriken).attrs({
  size: rem(65),
  rotate: -25,
})`
  position: absolute;
  bottom: ${rem(39)};
  right: ${rem(14)};
`

export const Shuriken5 = styled(Shuriken).attrs({
  size: rem(50),
  rotate: 0,
})`
  position: absolute;
  bottom: ${rem(330)};
  right: ${rem(280)};
`

export const Shuriken6 = styled(Shuriken).attrs({
  size: rem(44),
  rotate: 0,
})`
  position: absolute;
  bottom: ${rem(104)};
  right: ${rem(491)};
`

export const Shuriken7 = styled(Shuriken).attrs({
  size: rem(59),
  rotate: 0,
})`
  position: absolute;
  bottom: ${rem(251)};
  left: ${rem(112)};
`

export const Shuriken8 = styled(Shuriken).attrs({
  size: rem(26),
  rotate: 0,
})`
  position: absolute;
  top: ${rem(151)};
  left: ${rem(635)};
`

export const Hello = styled.div`
  position: absolute;
  width: ${rem(498)};
  height: ${rem(93)};
  bottom: ${rem(75)};
  left: ${rem(234)};
  background-image: url('/images/hello.svg');
  background-position: center;
  background-size: cover;
`
