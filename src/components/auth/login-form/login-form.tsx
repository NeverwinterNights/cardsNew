import { Link } from 'react-router-dom'

import { LoginFormType, useLoginForm } from '@/components/auth/login-form/use-login-form'
import { ControlledCheckbox, ControlledInput } from '@/components/controlled'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './login-form.module.scss'

type Props = {
  onSubmitLogin: (values: LoginFormType) => void
}

export const LoginForm = ({ onSubmitLogin }: Props) => {
  const { control, handleSubmit } = useLoginForm()

  // const { handleSubmit, register } = useForm<FormValues>()

  // const onSubmit = handleSubmit(data => {
  //   console.log(data)
  // })

  return (
    <form onSubmit={handleSubmit(onSubmitLogin)}>
      <ControlledInput control={control} label={'Email'} name={'email'} />
      <ControlledInput control={control} label={'Password'} name={'password'} />
      <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
      <Typography
        as={'a'}
        className={s.recoverPasswordLink}
        // href={PATH.PASSWORD_RECOVERY}
        variant={'body2'}
      >
        Forgot Password?
      </Typography>
      <Button className={s.button} fullWidth type={'submit'}>
        <Typography variant={'subtitle2'}>Sign In</Typography>
      </Button>
      <Typography className={s.caption} variant={'body2'}>
        Don&lsquo;t have an account?
      </Typography>
      <Typography as={Link} to={'/'} variant={'link1'}>
        Sign Up
      </Typography>
    </form>
  )
}
