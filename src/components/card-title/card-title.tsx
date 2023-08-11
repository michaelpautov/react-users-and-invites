import { ReactNode } from 'react'

import { Container, Icon, Title } from './card-title.styled'

interface Props {
  title: string
  icon: ReactNode
}
export const CardTitle = ({ title, icon }: Props) => (
  <Container>
    <Icon>{icon}</Icon>
    <Title>{title}</Title>
  </Container>
)
