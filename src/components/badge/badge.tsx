import { TeamCardItem } from '@uo/types'

import { BadgeContainer } from './badge.styled'

interface Props extends Pick<TeamCardItem, 'status'> {}
export const Badge = ({ status }: Props) => <BadgeContainer>{status}</BadgeContainer>
