import { BadgeContainer } from '@uo/components/badge/badge.styled'
import { colors, typography } from '@uo/themes'
import styled from 'styled-components'

export const CardItemContainer = styled.div`
  padding: 24px 0;
  display: flex;
`

export const RightContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  ${BadgeContainer} {
    margin-right: 16px;
  }
`

export const CardTitle = styled.p<{ status?: string }>`
  ${typography.text}
  color: ${(props) => (props.status ? colors.primaryLight100 : colors.primary)};
  margin: 0;
`
