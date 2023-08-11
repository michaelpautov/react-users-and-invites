import { Invite, TeamCardItem, TeamMember } from '@uo/types'
import { useMemo } from 'react'

import { filterByRole } from '../utils'

export const useGetStandardUsers = (teamMembers: TeamMember[], invites: Invite[]): TeamCardItem[] =>
  useMemo(() => {
    const filteredTeamMembers = filterByRole<TeamMember>({ items: teamMembers, role: 'Standard' })
    const filteredInvites = filterByRole<Invite>({ items: invites, role: 'Standard' })
    return [
      ...filteredTeamMembers.map(({ user }) => ({ title: `${user.name} ${user.lastName}` })),
      ...filteredInvites.map(({ phone }) => ({ title: phone, status: 'invited' })),
    ]
  }, [teamMembers, invites])
