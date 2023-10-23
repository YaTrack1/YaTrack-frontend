import { FormEvent, ReactNode } from 'react';

export default interface AuthFormProps {
  formId: string;
  children: ReactNode;
  handleSubmit: any;
  reset: () => void;
  // onSubmit: (evt: FormEvent) => void;
};