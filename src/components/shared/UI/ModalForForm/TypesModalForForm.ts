import { ReactNode } from 'react';

export interface IVacancyForm {
	children: ReactNode;
  open: boolean;
  onClose: any;
  step?: number;
}