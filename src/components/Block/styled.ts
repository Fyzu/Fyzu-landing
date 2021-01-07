import { styled } from '@linaria/react'
import { retina } from '@/utils'

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
  z-index: -1;
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

  background-color: transparent;
  background-size: cover;
  background-image: url('/images/background-texture@1x.png');
  
  ${retina(2)} {
    background-image: url('/images/background-texture@3x.png');
  }

  transform: ${(props) => (props.isMain ? 'rotate(180deg)' : 'none')};
  mix-blend-mode: ${(props) => (props.isMain ? 'soft-light' : 'initial')};
`

export const ColorMain = styled.div`
  background: linear-gradient(270deg, #023268 0%, #258ad8 100%);
  z-index: -1;
  flex-grow: 1;
`

export const ColorGrey = styled.div`
  background-color: #1a1a1a;
  z-index: -1;
  flex-grow: 1;
`

export const ColorBlue = styled.div`
  background-color: #002d48;
  z-index: -1;
  flex-grow: 1;
`
