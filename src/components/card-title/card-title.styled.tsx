import { colors, typography } from '@uo/themes'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

export const Icon = styled.div`
  margin-top: 2px;
  margin-right: 4px;
`

export const Title = styled.p`
  ${typography.text};
  color: ${colors.primaryLight100};
  margin: 0;
`
