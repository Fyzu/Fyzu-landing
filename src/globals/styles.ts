import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`  
  html {
    font-size: ${(props) => props.theme.baseSize};
  }
  
  body {
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 1rem;
    line-height: 1;
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.grey};
  }
`
