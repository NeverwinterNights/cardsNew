import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox } from './'

const meta = {
  argTypes: {
    label: [''],
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/CheckboxItem',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: { label: 'Click me' },
}
export const CheckboxControlled: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState(true)
    const onChange = (value: boolean) => {
      setValue(value)
    }

    return <Checkbox checked={value} onChange={onChange} />
  },
}
