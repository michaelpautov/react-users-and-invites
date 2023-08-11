import { CardItemContainer } from '@uo/components/card-item/card-item.styled'
import { colors } from '@uo/themes'
import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 32px);
  border-radius: 16px;
  background: ${colors.alternativeBackground};
  box-shadow: 0 3px 24px 0 rgba(130, 139, 151, 0.06);
  padding: 0 16px;
  ${CardItemContainer} {
    border-bottom: 1px solid ${colors.border};
    &:last-child {
      border-bottom-width: 0;
    }
  }
`
