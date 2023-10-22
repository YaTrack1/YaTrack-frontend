import { UseFormRegister, FieldValues, DeepMap, FieldError } from 'react-hook-form';

export interface InputProps {
  title: string;
  register: UseFormRegister<FieldValues>;
  errors: DeepMap<FieldValues, FieldError>;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  autoComplete?: string;
}