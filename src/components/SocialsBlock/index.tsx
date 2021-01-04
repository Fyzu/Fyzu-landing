import React from 'react'
import { Root, Title, FyzuTextBackground, Content, Socials } from './styled'
import SocialButton from '@/components/SocialButton'

function SocialsBlock() {
  return (
    <Root>
      <Title>
        Так же, вы можете
        <br />
        найти меня тут
      </Title>

      <Content>
        <FyzuTextBackground />

        <Socials>
          <SocialButton social="vk" />
          <SocialButton social="instagram" />
          <SocialButton social="twitter" />
          <SocialButton social="discord" />
        </Socials>
      </Content>
    </Root>
  )
}

export default SocialsBlock
