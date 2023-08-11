import { Card } from '@uo/components/card'
import { CardTitle } from '@uo/components/card-title'
import { useFetch } from '@uo/hooks'
import { AdminIcon, StandardUserIcon } from '@uo/icons'

import { useGetAdministrators, useGetStandardUsers } from './hooks'
import { Space } from './team.styled'

export const Team = () => {
  const { data: users, loading: usersLoading } = useFetch('users')
  const { data: invites, loading: invitesLoading } = useFetch('invites')

  const isLoading = usersLoading && invitesLoading

  const administrators = useGetAdministrators(users, invites)
  const standardUsers = useGetStandardUsers(users, invites)

  if (isLoading) {
    return null
  }

  return (
    <>
      <CardTitle title="Administrators" icon={<AdminIcon />} />
      <Card items={administrators} />
      <Space />
      <CardTitle key="users" title="Standard Users" icon={<StandardUserIcon />} />
      <Card items={standardUsers} />
    </>
  )
}
