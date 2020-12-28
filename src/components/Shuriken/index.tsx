import styled from 'styled-components'

export interface IShurikenProps {
  rotate?: number
  size?: number
}

const Shuriken = styled.img.attrs({
  src: '/images/shuriken.svg',
})<IShurikenProps>`
  width: ${(props) => props.size}rem;
  height: ${(props) => props.size}rem;
  object-fit: contain;
  transform: rotate(${(props) => props.rotate || 0}deg);
`

export default Shuriken
