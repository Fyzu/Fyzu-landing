import styled from 'styled-components'

export interface IShurikenProps {
  size: string
  rotate?: number
}

const Shuriken = styled.img.attrs({
  src: '/images/shuriken.svg',
})<IShurikenProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  object-fit: contain;
  transform: rotate(${(props) => props.rotate || 0}deg);
`

export default Shuriken
