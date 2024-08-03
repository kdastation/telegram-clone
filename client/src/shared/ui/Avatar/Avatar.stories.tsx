import type { Meta, StoryObj } from '@storybook/react'

import { Flex } from '../Flex'
import { Heading } from '../Typography/Heading'
import { Avatar } from './Avatar'

const meta = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const AvatarDefault: Story = {
  args: {
    alt: 'Нет изображения',
    size: 6,
    radius: 'full',
  },
  parameters: {
    controls: { expanded: true },
  },
}

export const AvatarAll: Story = {
  args: {
    alt: 'Нет изображения',
  },
  argTypes: {
    alt: {
      control: { disable: true },
    },
    size: {
      control: { disable: true },
    },
    radius: {
      control: { disable: true },
    },
    imageClassName: {
      control: { disable: true },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
  render: (args) => (
    <Flex direction='column' gap={20}>
      <Flex direction='column' gap={12}>
        <Heading>Sizes</Heading>
        <Flex gap={12}>
          3: <Avatar {...args} size={3} />
          4: <Avatar {...args} size={4} />
          5: <Avatar {...args} size={5} />
          6: <Avatar {...args} size={6} />
        </Flex>
      </Flex>
      <Flex direction='column' gap={12}>
        <Heading>Radius</Heading>
        <Flex gap={12}>
          none: <Avatar {...args} size={3} radius='none' />
          full: <Avatar {...args} size={3} radius='full' />
        </Flex>
      </Flex>
    </Flex>
  ),
}
