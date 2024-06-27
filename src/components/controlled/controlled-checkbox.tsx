import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components/ui/checkbox'

type Props<T extends FieldValues> = Omit<CheckboxProps, 'onChange' | 'value'> &
  Omit<UseControllerProps<T>, 'defaultValues' | 'rules'>

export const ControlledCheckbox = <T extends FieldValues>({
  className,
  control,
  name,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, value, ...field },
    fieldState: { error },
  } = useController({
    control,
    name,
    shouldUnregister,
  })

  const handleChange = onChange as (value: boolean) => void

  return (
    <Checkbox
      {...rest}
      {...field}
      checked={value}
      className={className}
      errorMessage={error?.message}
      onChange={handleChange}
    />
  )
}
