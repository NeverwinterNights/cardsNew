import type { Meta, StoryObj } from '@storybook/react'

import { ChangeEvent, useState } from 'react'

import { Input } from './'

const meta = {
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['text', 'password'],
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// export const MainInput: Story = {
//   args: {
//     value: 'Simple input',
//     label: 'Click here',
//     disabled: false,
//   },
// }
export const InputPassword: Story = {
  args: {
    disabled: false,
    label: 'Click here',
    type: 'password',
    value: '',
  },
  render: () => {
    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value)
    }

    return <Input onChange={onChange} type={'password'} value={value} />
  },
}

// export const InputSearch: Story = {
//   render: () => {
//     const [value, setValue] = useState('')
//     const onChange = (event: ChangeEvent<HTMLInputElement>) => {
//       setValue(event.currentTarget.value)
//     }
//
//     return <Input searchInput={true} onChange={onChange} value={value} />
//   },
//   args: {
//     value: '',
//     label: 'Click here',
//     type: 'text',
//     disabled: false,
//   },
// }
export const InputWithPlaceHolderAndSearch: Story = {
  args: {
    disabled: false,
    label: 'Click here',
    placeholder: 'Placeholder',
    searchInput: true,
    type: 'text',
    value: 'Simple input',
  },
  render: () => {
    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value)
    }
    const onClickClearInput = () => {
      setValue('')
    }

    return (
      <Input onChange={onChange} onClickClearInput={onClickClearInput} searchInput value={value} />
    )
  },
}
