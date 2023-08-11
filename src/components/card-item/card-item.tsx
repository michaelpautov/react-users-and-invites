import { Badge } from '@uo/components/badge'
import { ChevronIcon } from '@uo/icons'
import { TeamCardItem } from '@uo/types'

import { CardItemContainer, CardTitle, RightContainer } from './card-item.styled'

interface Props extends TeamCardItem {}
export const CardItem = ({ title, status }: Props) => (
  <CardItemContainer>
    <CardTitle status={status}>{title}</CardTitle>
    <RightContainer>
      {status && <Badge status={status} />}
      <ChevronIcon />
    </RightContainer>
  </CardItemContainer>
)
