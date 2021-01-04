import styled from 'styled-components'
import Block from '@/components/Block'
import { rem } from '@/utils'
import FyzuText from '@/components/FyzuText'

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
