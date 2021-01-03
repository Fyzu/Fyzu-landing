import React from 'react'
import MainBlock from '@/components/MainBlock'
import HistoryBlock from '@/components/HistoryBlock'
import YoutubeBlock from '@/components/YoutubeBlock'

import { Root } from './styled'

function HomePage() {
  return (
    <Root>
      <MainBlock />
      <HistoryBlock />
      <YoutubeBlock />
    </Root>
  )
}

export default HomePage
