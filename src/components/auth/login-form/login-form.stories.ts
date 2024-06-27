import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from '@/components/auth/login-form/login-form'

const meta = {
  title: 'Auth/Sign in',
  component: LoginForm,
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmitLogin: data => console.info(data),
  },
}
