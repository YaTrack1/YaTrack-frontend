import { FormEvent, ReactNode } from 'react';

export default interface AuthFormProps {
  title: string;
  buttonText: string;
  question?: string;
  navLink: string;
  navLinkTitle: string;
  buttonLabel: string
  isValid: boolean;
  children: ReactNode;
  onSubmit: (evt: FormEvent) => void;
};