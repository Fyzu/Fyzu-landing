import styled from 'styled-components'

export const Root = styled.section`
  position: relative;
  display: flex;
  padding: 7.2rem 10rem 5.7rem;
`

export const HistoryWrapper = styled.ul`
  position: relative;
  margin: 0;
  padding: 0 0 1rem;
  
  &::after {
    content: '';
    position: absolute;
    width: 0.22rem;
    top: 0.4rem;
    left: 14.3rem;
    bottom: 0;
    background-color: #0B99F0;
  }
`

export const HistoryItem = styled.li<{ position: 'left' | 'right' }>`
  position: relative;
  list-style: none;
  margin-right: ${props => props.position === 'left' ? 16.2 : 0}rem;
  margin-left: ${props => props.position === 'right' ? 15.2 : 0}rem;
  width: ${props => props.position === 'left' ? 13.6 : 14.5}rem;
  text-align: ${props => props.position === 'left' ? 'right' : 'left'};
  margin-bottom: 1rem;
  
  &:last-of-type {
    margin-bottom: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    height: 0.22rem;
    width: 0.5rem;
    background-color: #0B99F0;
    left: ${props => props.position === 'left' ? '100%' : 'auto'};
    right: ${props => props.position === 'right' ? '100%' : 'auto'};
    margin-left: ${props => props.position === 'left' ? '0.25rem' : 'auto'};
    margin-right: ${props => props.position === 'right' ? '0.25rem' : 'auto'};
    top: 0.4rem;
  }
`

export const Title = styled.h4`
  font-size: 1rem;
  color: #0B90E1;
  margin: 0;
`

export const Description = styled.p`
  font-size: 0.72rem;
  letter-spacing: 0;
  color: #fff;
  margin: 0;
  margin-top: 0.44rem;
  
  b {
    color: #0B90E1;
  }
`