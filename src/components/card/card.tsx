import { CardItem } from '@uo/components/card-item'
import { TeamCardItem } from '@uo/types'

import { CardContainer } from './card.styled'

interface Props {
  items: TeamCardItem[]
}
export const Card = ({ items }: Props) => (
  <CardContainer>
    {items.map((item, i) => (
      <CardItem key={`${item.title}-${i}`} {...item} />
    ))}
  </CardContainer>
)
