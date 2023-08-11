import { Invite, Role, TeamMember } from '@uo/types'

type Props<T> = {
  items: Array<T>
  role: Role
}
export const filterByRole = <T extends TeamMember | Invite>({ items, role }: Props<T>) =>
  items.filter((item) => item.role === role)
