import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from './badge'

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
}

export default meta
type Story = StoryObj<typeof Badge>

export const TeamMember: Story = {
  args: {
    status: 'invited',
  },
}
