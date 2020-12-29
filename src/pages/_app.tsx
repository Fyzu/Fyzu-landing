import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import '@/globals/styles.css'
import { GlobalStyle } from '@/globals/styles'
import theme from '@/globals/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
