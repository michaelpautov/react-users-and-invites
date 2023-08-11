import { colors } from '@uo/themes'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    padding: 20px;
    font-family: 'Inter',serif;
    color: ${colors.primary};
    background: ${colors.background};
  }
`
