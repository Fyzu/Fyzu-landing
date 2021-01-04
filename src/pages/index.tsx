import React from 'react'
import styled from 'styled-components'

import MainBlock from '@/components/MainBlock'
import HistoryBlock from '@/components/HistoryBlock'
import YoutubeBlock from '@/components/YoutubeBlock'
import SocialsBlock from '@/components/SocialsBlock'

const Root = styled.main`
  display: flex;
  flex-direction: column;
`

function HomePage() {
  return (
    <Root>
      <MainBlock />
      <HistoryBlock />
      <YoutubeBlock />
      <SocialsBlock />
    </Root>
  )
}

export default HomePage
