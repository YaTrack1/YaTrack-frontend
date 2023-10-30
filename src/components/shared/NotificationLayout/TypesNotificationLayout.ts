import { ReactNode } from 'react';

export interface NotificationLayoutProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  children?: ReactNode;
}