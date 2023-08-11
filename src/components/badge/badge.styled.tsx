import { colors, typography } from '@uo/themes'
import styled from 'styled-components'

export const BadgeContainer = styled.div`
  ${typography.text};
  padding: 1px 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background: ${colors.primaryLight200};
  text-transform: capitalize;
`
