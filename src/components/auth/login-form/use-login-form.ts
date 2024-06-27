import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  email: z
    .string({
      required_error: 'Enter email',
    })
    .trim()
    .min(1, 'Enter email')
    .email('Invalid email address'),
  password: z.string().trim().min(4, 'Password must be at least 4 characters'),
  // rememberMe: z.boolean(),
  rememberMe: z.literal(true),
  // rememberMe: z.boolean().refine(val => val, {
  //   message: 'Value must be true',
  // }),
})

export type LoginFormType = z.infer<typeof schema>
export const useLoginForm = () => {
  return useForm<LoginFormType>({
    defaultValues: {
      email: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  })
}
