import { ReactNode } from 'react';
export interface IAuthorizationWrapper {
  children: ReactNode;
  header: string;
  text?: string;
  link?: string;
  linkText?: string;
}
