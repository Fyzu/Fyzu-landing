import styled from 'styled-components'
import Block from '@/components/Block'
import { rem } from '@/utils'

export const Root = styled(Block).attrs({ color: 'blue' })`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: ${rem(37)};
  padding-top: ${rem(60)};
  padding-left: ${rem(177)};
  padding-right: ${rem(181)};
  min-height: ${rem(900)};
`

export const BackgroundTexture = styled.div`
  position: absolute;
  top: ${rem(22)};
  left: ${rem(23)};
  width: ${rem(512)};
  height: ${rem(528)};

  background-image: url('/images/fyzu-texture.svg');
  background-size: contain;
  background-repeat: no-repeat;
`

export const Title = styled.h4`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: ${rem(52)};
  color: ${(props) => props.theme.color.white};
  margin: 0;
`

export const YouTubeIcon = styled.div`
  display: inline;
  height: ${rem(50)};
  width: ${rem(71)};
  background-image: url('/images/youtube.svg');
  background-size: contain;
  margin-left: ${rem(13)};
  margin-bottom: ${rem(3)};
`

export const Content = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: ${rem(629)};
  margin-top: ${rem(25)};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: ${rem(629)};
    background-color: #fff;
    z-index: -60;
  }
`

export const VideoWrapper = styled.div`
  flex-grow: 1;
  margin: ${rem(13)};
`

export const Video = styled.iframe.attrs({
  height: '100%',
  width: '100%',
  allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  allowfullscreen: true,
})`
  padding: ${rem(10)};
  border: none;
  background-color: #0b99f0;
`

export const Footer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: ${rem(25)};
  margin-left: ${rem(13)};
`
