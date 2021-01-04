import React from 'react'
import { Root, Social } from './styled'

export interface ISocialButtonProps {
  social: Social
}

const URL_MAP = {
  vk: 'https://vk.com/thefyzu',
  instagram: 'https://instagram.com/thefyzu',
  twitter: 'https://twitter.com/TheFyzu',
  discord: 'https://discord.gg/FVgf472',
} as const

function SocialButton({ social }: ISocialButtonProps) {
  return <Root social={social} href={URL_MAP[social]} target="_blank" />
}

export default SocialButton
