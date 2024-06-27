import { Link } from 'react-router-dom'

import {
  RegisterFormType,
  useRegisterForm,
} from '@/components/auth/register-form/use-register-form'
import { ControlledInput } from '@/components/controlled'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './register-form.module.scss'

type Props = {
  onSubmitRegister: (values: RegisterFormType) => void
}

export const RegisterForm = ({ onSubmitRegister }: Props) => {
  const { control, handleSubmit } = useRegisterForm()

  // const { handleSubmit, register } = useForm<FormValues>()

  // const onSubmit = handleSubmit(data => {
  //   console.log(data)
  // })

  return (
    <form onSubmit={handleSubmit(onSubmitRegister)}>
      <ControlledInput control={control} label={'Email'} name={'email'} />
      <ControlledInput control={control} label={'Password'} name={'password'} />
      <ControlledInput control={control} label={'Confirm Password'} name={'confirm'} />
      <Typography
        as={'a'}
        className={s.recoverPasswordLink}
        // href={PATH.PASSWORD_RECOVERY}
        variant={'body2'}
      >
        Forgot Password?
      </Typography>
      <Button className={s.button} fullWidth type={'submit'}>
        <Typography variant={'subtitle2'}>Sign Up</Typography>
      </Button>
      <Typography className={s.caption} variant={'body2'}>
        Don&lsquo;t have an account?
      </Typography>
      <Typography as={Link} to={'/'} variant={'link1'}>
        Sign In
      </Typography>
    </form>
  )
}
