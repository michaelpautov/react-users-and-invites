import { Invite, TeamCardItem, TeamMember } from '@uo/types'
import { useMemo } from 'react'

import { filterByRole } from '../utils'

export const useGetAdministrators = (
  teamMembers: TeamMember[],
  invites: Invite[],
): TeamCardItem[] =>
  useMemo(() => {
    const filteredTeamMembers = filterByRole({ items: teamMembers, role: 'Administrator' })
    const filteredInvites = filterByRole({ items: invites, role: 'Administrator' })
    return [
      ...filteredTeamMembers.map(({ user }) => ({ title: `${user.name} ${user.lastName}` })),
      ...filteredInvites.map(({ phone }) => ({ title: phone, status: 'invited' })),
    ]
  }, [teamMembers, invites])
