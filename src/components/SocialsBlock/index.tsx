import React from 'react'
import SocialButton from '@/components/SocialButton'

import { Root, Title, FyzuTextBackground, Content, Socials, ProPlayerCircle, Shuriken1, Shuriken2, Shuriken3, Shuriken4, Shuriken5, Shuriken6 } from './styled'

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

      <ProPlayerCircle />
      <Shuriken1 />
      <Shuriken2 />
      <Shuriken3 />
      <Shuriken4 />
      <Shuriken5 />
      <Shuriken6 />
    </Root>
  )
}

export default SocialsBlock
