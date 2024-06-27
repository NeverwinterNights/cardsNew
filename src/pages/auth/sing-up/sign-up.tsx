import React from 'react'

import { RegisterForm } from '@/components/auth/register-form/register-form'
import { RegisterFormType } from '@/components/auth/register-form/use-register-form'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './sign-up.module.scss'

export const SignUp = React.memo(() => {
  const submit = (data: RegisterFormType) => {
    console.log('data', data)
  }

  return (
    <div className={s.root}>
      <Card className={s.card}>
        <Typography variant={'h1'}>Sign Up</Typography>
        <RegisterForm onSubmitRegister={submit} />
      </Card>
    </div>
  )
})
