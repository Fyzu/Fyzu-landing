import styled from 'styled-components'
import Block from '@/components/Block'
import { rem } from '@/utils'

export const Root = styled(Block).attrs({ color: 'grey' })`
  display: flex;
  flex-direction: column;
  padding: ${rem(136)};
`

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${rem(630)};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.3;
    background-image: url('/images/game-background.jpg');
    background-size: cover;
    filter: grayscale(1);
    z-index: -1;
  }
`

export const Title = styled.h4`
  font-size: ${rem(36)};
  text-align: center;
`
