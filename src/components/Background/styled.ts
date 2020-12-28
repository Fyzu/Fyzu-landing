import styled from 'styled-components'

export const Root = styled.figure`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  margin: 0;
  z-index: -1;
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;

  background-color: transparent;
  background-image: url('/images/background-texture.png');
  background-size: cover;
`

export const ColorMain = styled.div`
  background: linear-gradient(270deg, #023268 0%, #169aff 100%);
  z-index: -1;
  flex-grow: 1;
`

export const ColorGrey = styled.div`
  background-color: #1A1A1A;
  z-index: -1;
  flex-grow: 1;
`

export const ColorBlue = styled.div`
  background-color: #002D48;
  z-index: -1;
  flex-grow: 1;
`
