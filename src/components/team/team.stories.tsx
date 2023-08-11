import type { Meta, StoryObj } from '@storybook/react'

import DB from '../../../db.json'
import { Team } from './team'

const meta: Meta<typeof Team> = {
  title: 'Pages/Team',
  component: Team,
  parameters: {
    mockData: [
      {
        url: 'http://localhost:4000/users',
        method: 'GET',
        status: 200,
        response: DB.users,
      },
      {
        url: 'http://localhost:4000/invites',
        method: 'GET',
        status: 200,
        response: DB.invites,
      },
    ],
  },
}

export default meta

type Story = StoryObj<typeof Team>

export const Index: Story = {}
