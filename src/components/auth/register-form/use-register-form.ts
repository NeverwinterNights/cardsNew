import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z
  .object({
    confirm: z
      .string({
        required_error: 'Enter Password',
      })

      .trim()
      .min(4, 'Password must be at least 4 characters'),
    email: z
      .string({
        required_error: 'Enter email',
      })
      .trim()
      .min(1, 'Enter email')
      .email('Invalid email address'),
    password: z
      .string({
        required_error: 'Enter Password',
      })
      .trim()
      .min(4, 'Password must be at least 4 characters'),
  })
  .refine(data => data.password === data.confirm, {
    message: 'Passwords must match',
    path: ['confirm'],
  })

export type RegisterFormType = z.infer<typeof schema>
export const useRegisterForm = () => {
  return useForm<RegisterFormType>({
    defaultValues: {
      confirm: '',
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  })
}
