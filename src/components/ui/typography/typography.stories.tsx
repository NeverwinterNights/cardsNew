import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['large', 'body1', 'body2', 'subtitle1', 'subtitle2', 'overline', 'link1', 'link2'],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    children: 'Large CheckboxItem',
    variant: 'large',
  },
}

export const Body1: Story = {
  args: {
    children: 'Body1',
    disabled: false,
    variant: 'body1',
  },
}

export const Body2: Story = {
  args: {
    children: 'Body2 CheckboxItem',
    variant: 'body2',
  },
}
export const Subtitle1: Story = {
  args: {
    children: 'Subtitle1 CheckboxItem',
    variant: 'subtitle1',
  },
}
export const Subtitle2: Story = {
  args: {
    children: 'Subtitle2 CheckboxItem',
    variant: 'subtitle2',
  },
}

export const Overline: Story = {
  args: {
    children: 'Overline CheckboxItem',
    variant: 'overline',
  },
}
export const Link1: Story = {
  args: {
    children: 'Link1 CheckboxItem',
    variant: 'link1',
  },
}
export const Link2: Story = {
  args: {
    children: 'Link2 CheckboxItem',
    variant: 'link2',
  },
}

export const AsH1: Story = {
  args: {
    as: 'h1',
    children: 'Looks like a H1',
  },
}
export const AsH2: Story = {
  args: {
    as: 'h2',
    children: 'Looks like a H2',
  },
}
export const AsH3: Story = {
  args: {
    as: 'h3',
    children: 'Looks like a H3',
  },
}
export const AsP: Story = {
  args: {
    as: 'p',
    children: 'Looks like a paragraph',
  },
}
