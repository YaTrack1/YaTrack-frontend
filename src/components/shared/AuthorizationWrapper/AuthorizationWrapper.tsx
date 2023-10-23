import { Stack } from '@mui/material';
import BasicSelect from '../MuiSelectButton/MuiSelectButton';
import styles from './AuthorizationWrapper.module.scss';
import { MuiLoginForm } from '../../MuiLoginForm/MuiLoginForm';
import { Link } from 'react-router-dom';

type TFormValues = {
  header: string
}
export function AuthorizationWrapper({ header }) {
  return(
    <div className={styles.authWrapper}>
    <Stack spacing={2} width={392}>
    <h1 className={styles.AuthorizationWrapper__header}>{header}</h1>
    <BasicSelect />
      <MuiLoginForm/>
    </Stack>
      <p className={styles.test}>Новый пользователь? <Link to='/'>Зарегистрироваться</Link></p>
    </div>
  )
}
