import styled, { css } from 'styled-components'

export const Root = styled.section`
  position: relative;
`

export const Background = styled.figure`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  margin: 0;
  // z-index: -1;
  display: flex;
  flex-direction: column;
`

export const BackgroundImage = styled.div<{ isMain: boolean }>`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  z-index: -50;

  ${(props) =>
    props.isMain &&
    css`
      // filter: invert(1%) sepia(1%) saturate(1%) hue-rotate(1deg) brightness(1000%) contrast(80%); // TODO: experiment
      transform: rotate(180deg);
      mix-blend-mode: soft-light;
    `}
`

const ColorBase = styled.div`
  position: relative;
  z-index: -100;
  flex-grow: 1;
`

export const ColorMain = styled(ColorBase)`
  background-image: linear-gradient(270deg, #023268 0%, #258ad8 100%);
`

export const ColorGrey = styled(ColorBase)`
  background-color: #1a1a1a;
`

export const ColorBlue = styled(ColorBase)`
  background-color: #002d48;
`
