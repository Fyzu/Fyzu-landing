import styled from 'styled-components'
import Block from '@/components/Block'
import { rem } from '@/utils'
import FyzuText from '@/components/FyzuText'
import Shuriken from '@/components/Shuriken'

export const Root = styled(Block).attrs({
  color: 'grey',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${rem(115)};
  padding-bottom: ${rem(138)};
`

export const Title = styled.h4`
  font-size: ${rem(40)};
  text-align: center;
  margin: 0;
`

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: ${rem(50)};
  width: 100%;
  height: ${rem(522)};
`

export const FyzuTextBackground = styled(FyzuText).attrs({
  fill: 'transparent',
  stroke: '#fff',
  strokeWidth: '1',
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 100%;
  width: 100%;
  z-index: -1;
`

export const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${rem(195 + 195 + 672)};
  margin-top: ${rem(112)};
`

export const ProPlayerCircle = styled.div`
  position: absolute;
  right: ${rem(140)};
  bottom: ${rem(50)};
  width: ${rem(226)};
  height: ${rem(226)};
  background-image: url('/images/pro-player-circle.svg');
  background-size: contain;
`

export const Shuriken1 = styled(Shuriken).attrs({
  size: rem(75),
  rotate: -30,
})`
  position: absolute;
  top: ${rem(218)};
  left: ${rem(121)};
`

export const Shuriken2 = styled(Shuriken).attrs({
  size: rem(45),
  rotate: 0,
})`
  position: absolute;
  bottom: ${rem(64)};
  right: ${rem(84)};
`

export const Shuriken3 = styled(Shuriken).attrs({
  size: rem(44),
  rotate: -35,
})`
  position: absolute;
  bottom: ${rem(127)};
  right: ${rem(491)};
`

export const Shuriken4 = styled(Shuriken).attrs({
  size: rem(58),
  rotate: 0,
})`
  position: absolute;
  bottom: ${rem(138)};
  left: ${rem(210)};
`

export const Shuriken5 = styled(Shuriken).attrs({
  size: rem(50),
  rotate: -15,
})`
  position: absolute;
  top: ${rem(241)};
  right: ${rem(333)};
`

export const Shuriken6 = styled(Shuriken).attrs({
  size: rem(22),
  rotate: -30,
})`
  position: absolute;
  top: ${rem(255)};
  left: ${rem(404)};
`
