import type { Meta, StoryObj } from '@storybook/react'

import { CardItem } from './card-item'

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CardItem> = {
  title: 'Components/CardItem',
  component: CardItem,
}

export default meta
type Story = StoryObj<typeof CardItem>

export const TeamMember: Story = {
  args: {
    title: 'Joe Bloggs',
  },
}

export const Invite: Story = {
  args: {
    title: '+353 1234567',
    status: 'invited',
  },
}
