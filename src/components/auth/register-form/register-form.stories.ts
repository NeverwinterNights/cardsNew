import type { Meta, StoryObj } from '@storybook/react'

import { RegisterForm } from '@/components/auth/register-form/register-form'

const meta = {
  title: 'Auth/RegisterForm',
  component: RegisterForm,
  tags: ['autodocs'],
} satisfies Meta<typeof RegisterForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmitRegister: data => console.info(data),
  },
}
