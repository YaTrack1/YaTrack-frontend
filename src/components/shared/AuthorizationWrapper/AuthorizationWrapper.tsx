import styles from './AuthorizationWrapper.module.scss';
import { ReactNode } from 'react';
import { Link, Paper, Typography, Stack } from '@mui/material';
import BasicSelect from '../MuiSelectButton/MuiSelectButton';

interface IAuthorizationWrapper {
  children: ReactNode;
  header: string;
  text?: string;
  link?: string;
  linkText?: string;
}
export function AuthorizationWrapper({children, header, text, link, linkText}: IAuthorizationWrapper) {

  return(
    <div className={styles.authWrapper}>
      <Paper elevation={3} className={styles.authWrapper__frame}>
        <Stack spacing={2} width={392}>
          <Typography variant='h4' className={styles.authWrapper__title}>{header}</Typography>
          <BasicSelect />
          {children}
          <Typography className={styles.authWrapper__text}>{text} <Link className={styles.authWrapper__link} href={`/${link}`}>{linkText}</Link></Typography>
        </Stack>
      </Paper>
    </div>
  );
}
