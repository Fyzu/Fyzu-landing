import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import '@/globals/styles.css'
import { GlobalStyle } from '@/globals/styles'
import theme from '@/globals/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>Fyzu - Pro Apex Legends player</title>
        <meta
          name="description"
          content="Игрок профессиональной киберспортивной организации, кодер, контент криэйтор, спортсмен, велосипедист, баянист, ютубер, инстаграмм-блогер, профессиональный сборщик пк, медийная, узнаваемая личность и просто хороший человек"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
