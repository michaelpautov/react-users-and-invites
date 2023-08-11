import type { Meta, StoryObj } from '@storybook/react'
import { AdminIcon, StandardUserIcon } from '@uo/icons'

import { CardTitle } from './card-title'

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CardTitle> = {
  title: 'Components/Card Title',
  component: CardTitle,
}

export default meta
type Story = StoryObj<typeof CardTitle>

export const Administrators: Story = {
  args: {
    title: 'Administrators',
    icon: <AdminIcon />,
  },
}

export const StandardUsers: Story = {
  args: {
    title: 'StandardUsers',
    icon: <StandardUserIcon />,
  },
}
