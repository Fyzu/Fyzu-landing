import React from 'react'
import Button from '@/components/Button'

import {
  BackgroundTexture,
  Content,
  Root,
  Title,
  YouTubeIcon,
  Video,
  VideoWrapper,
  Footer,
} from './styled'

function YoutubeBlock() {
  return (
    <Root>
      <BackgroundTexture />
      <Title>
        Последний ролик <YouTubeIcon />
      </Title>
      <Content>
        <VideoWrapper>
          <Video />
        </VideoWrapper>
      </Content>
      <Footer>
        <Button as="a" href="https://www.youtube.com/c/TheFyzu?sub_confirmation=1" target="_blank">
          Подписаться
        </Button>
      </Footer>
    </Root>
  )
}

export default YoutubeBlock
