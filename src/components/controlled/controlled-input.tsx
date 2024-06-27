import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { Input, InputPropsType } from '@/components/ui/input'

type Props<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<InputPropsType, 'onChange' | 'value'>

export const ControlledInput = <T extends FieldValues>({
  className,
  control,
  name,
  ...rest
}: Props<T>) => {
  const {
    field: { value, ...field },
    fieldState: { error },
  } = useController({ control, name })

  return <Input className={className} error={error?.message} {...field} {...rest} />
}
