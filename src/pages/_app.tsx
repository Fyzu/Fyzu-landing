import '../styles/globals.css'
import React from 'react'

export interface IPageProps {}

export interface IAppProps {
  Component: React.FC<IPageProps>
  pageProps: IPageProps
}

function App({ Component, pageProps }: IAppProps) {
  return <Component {...pageProps} />
}

export default App
