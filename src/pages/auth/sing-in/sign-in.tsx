import React from 'react'

import { LoginForm } from '@/components/auth/login-form/login-form'
import { LoginFormType } from '@/components/auth/login-form/use-login-form'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './sign-in.module.scss'

export const SignIn = React.memo(() => {
  const submit = (data: LoginFormType) => {
    console.log('data', data)
  }

  return (
    <div className={s.root}>
      <Card className={s.card}>
        <Typography variant={'h1'}>Sign In</Typography>
        <LoginForm onSubmitLogin={submit} />
      </Card>
    </div>
  )
})
