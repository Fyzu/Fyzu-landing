import React from 'react'
import MainBlock from '@/components/MainBlock'
import HistoryBlock from '@/components/HistoryBlock'

import { Root } from './styled'

function HomePage() {
  return (
    <Root>
      <MainBlock />
      <HistoryBlock />
    </Root>
  )
}

export default HomePage
