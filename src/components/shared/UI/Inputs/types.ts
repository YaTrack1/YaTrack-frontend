import { FieldValues, DeepMap, FieldError } from 'react-hook-form';

export interface InputProps {
  register: any;
  errors?: DeepMap<FieldValues, FieldError>;
  inputName?: string;
  placeholder?: string;
}