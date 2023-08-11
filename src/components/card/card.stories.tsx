import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './card'

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
}

export default meta
type Story = StoryObj<typeof Card>

export const TeamMember: Story = {
  args: {
    items: [
      { title: 'Joe Bloggs' },
      {
        title: 'Sarah Connors',
      },
    ],
  },
}

export const Invite: Story = {
  args: {
    items: [
      {
        title: 'Sarah Connors',
      },
      { title: 'Joe Bloggs', status: 'invited' },
    ],
  },
}
