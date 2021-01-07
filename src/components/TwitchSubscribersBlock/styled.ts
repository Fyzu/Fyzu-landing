import styled from 'styled-components'
import Block from '@/components/Block'
import { rem } from '@/utils'

export const Root = styled(Block).attrs({ color: 'blue' })`
  display: flex;
  flex-direction: column;
  padding-left: ${rem(137)};
  padding-right: ${rem(133)};
  padding-top: ${rem(76)};
  padding-bottom: ${rem(119)};
`

export const Content = styled.div`
  height: ${rem(460)};
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
`

export const SliderItem = styled.div`
  outline: none;
`

export const User = styled.div`
  display: flex;
  align-items: center;
  outline: none;
  margin-top: ${rem(25)};
  margin-bottom: ${rem(25)};
  margin-left: ${rem(50)};
  margin-right: ${rem(50)};
`

export const UserAvatar = styled.img`
  width: ${rem(96)};
  height: ${rem(96)};
  border-radius: 50%;
  object-fit: cover;
  border: ${rem(4)} solid #0B99F0;
  background-color: #DDE4EA;
  box-shadow: 0 0 ${rem(9)} ${rem(3)} #1098EC;
  z-index: 1;
`

export const UserName = styled.div`
  flex-grow: 1;
  margin-left: ${rem(-50)};
  padding-left: ${rem(60)};
  padding-top: ${rem(16)};
  padding-bottom: ${rem(16)};
  font-size: ${rem(16)};
  line-height: 1.1;
  word-break: break-word;
  background-color: #0b96ec;
`

export const Header = styled.div`
  display: flex;
  margin-bottom: ${rem(26)};
  align-items: flex-end;
`

export const Title = styled.h4`
  display: flex;
  flex-direction: column;
  font-size: ${rem(48)};
  margin: 0 0 ${rem(5)};
`

export const Image = styled.div`
  height: ${rem(112)};
  width: ${rem(112)};
  margin-right: ${rem(11)};
  background-image: url('/images/fyzu-pog.png');
  background-size: contain;
`

export const SubTitle = styled.span`
  color: #0B99F0;
  font-size: ${rem(24)};
  line-height: 1;
  margin-top: ${rem(8)};
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${rem(43)};
`

export const Description = styled.p`
  margin: 0;
  font-size: ${rem(24)};
`

export const Heart = styled.div`
  display: inline;
  height: ${rem(22)};
  width: ${rem(24)};
  background-image: url('/images/heart.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: ${rem(11)};
`
