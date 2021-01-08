import React from 'react'
import { useInView } from 'react-intersection-observer'

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
  const [rootRef, isVisible] = useInView({ triggerOnce: true })

  return (
    <Root ref={rootRef}>
      <BackgroundTexture />
      <Title>
        Последний ролик <YouTubeIcon />
      </Title>
      <Content>
        <VideoWrapper>
          {isVisible && <Video src="https://www.youtube.com/embed?max-results=1&&rel=0&listType=user_uploads&list=TheFyzu" />}
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
