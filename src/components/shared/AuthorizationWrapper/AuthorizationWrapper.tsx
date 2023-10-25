import styles from './AuthorizationWrapper.module.scss';
import { ReactNode } from 'react';

interface IAuthorizationWrapper {
  children: ReactNode;
}
export function AuthorizationWrapper({children}: IAuthorizationWrapper) {

  return(
    <div className={styles.authWrapper}>
      {children}
    </div>
  );
}
