import React from 'react'

import { BackgroundTexture, Content, Root, Title, YouTubeIcon, Video, VideoWrapper } from './styled'

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
    </Root>
  )
}

export default YoutubeBlock
