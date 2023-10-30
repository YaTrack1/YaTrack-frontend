import {useNavigate} from 'react-router-dom';
import { TextField, Button, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './SchemaLogin';
import { TFormValues } from './TypesLogin';
import styles from './LoginForm.scss';
import { useDispatch } from 'react-redux';
import { setIsLoggedIn } from '../../store/Auth';

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const form = useForm<TFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const { register, handleSubmit, formState } = form;
  const { errors, isDirty, isValid } = formState;

  const onSubmit = () => {
    navigate('/employer');
    dispatch(
      setIsLoggedIn({
        isLoggedIn: true,
      }),
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack spacing={2} width={392}>
        <TextField placeholder='Почта' type='email' {...register('email',
          {required: 'Email is required'},
        )}
        error={!!errors.email}
        helperText={errors.email?.message}/>
        <TextField placeholder='Пароль' type='password' {...register('password',
          {required: 'Password is required'},
        )}
        error={!!errors.password}
        helperText={errors.password?.message}/>
        <Button type='submit' variant='contained' className={styles.button} disabled={!isDirty || !isValid}>Войти</Button>
      </Stack>
    </form>
  );
};
