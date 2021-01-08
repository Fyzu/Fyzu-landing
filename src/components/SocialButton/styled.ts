import styled from 'styled-components'
import { rem } from '@/utils'

export type Social = 'vk' | 'instagram' | 'twitter' | 'discord'

const COLOR_MAP = {
  vk: '#597DA3',
  instagram: '#E1306C',
  twitter: '#1FAEE9',
  discord: '#7289DA',
} as const

export const Root = styled.a<{ social: Social }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.color.white};
  height: ${rem(165)};
  width: ${rem(165)};
  border-radius: 25%;
  text-decoration: none;
  border: 3px solid ${(props) => COLOR_MAP[props.social]};

  background-image: url('/images/socials/${(props) => props.social}.svg');
  background-size: ${rem(90)};
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(17, 17, 17, 0.6);
  box-shadow: 0 0 ${rem(9)} ${rem(3)} ${(props) => COLOR_MAP[props.social]};

  &:hover,
  &:active,
  &:focus {
    background-color: ${(props) => COLOR_MAP[props.social]};
    box-shadow: none;
  }
`
