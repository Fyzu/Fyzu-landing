import styled from 'styled-components'
import { rem } from '@/utils'

export const Root = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #0B99F0;
  font-size: ${rem(18)};
  line-height: 1;
  padding-top: ${rem(18)};
  padding-bottom: ${rem(19)};
  padding-left: ${rem(64)};
  padding-right: ${rem(64)};
  color: ${props => props.theme.color.white};
  text-decoration: none;
  transition: background 300ms, box-shadow 300ms;
  
  &:hover, &:active, &:focus {
    background-image: linear-gradient(270deg, #0B96EC 0%, #64BBF1 52.2%, #0B96EC 100%);
    box-shadow: 0 0 ${rem(9)} ${rem(3)} #1098EC;
  }
`
