/// <reference types="next" />
/// <reference types="next/types/global" />

import 'styled-components'
import theme from '@/globals/theme'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
