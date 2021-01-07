import styled from 'styled-components'

export interface IShurikenProps {
  size: string
  rotate?: number
}

const Shuriken = styled.div<IShurikenProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-image: url('/images/shuriken.svg');
  background-size: contain;
  transform: rotate(${(props) => props.rotate || 0}deg);
`

export default Shuriken
