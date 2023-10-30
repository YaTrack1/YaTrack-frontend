import { TextField, Button, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TFormValues } from './TypesRegister';
import { schema } from './SchemaRegister';
import { useNavigate } from 'react-router-dom';
import styles from './RegisterForm.scss';
import { setIsLoggedIn } from '../../store/Auth';
import { useDispatch } from 'react-redux';

export const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useForm<TFormValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const { register, handleSubmit, formState } = form;
  const { errors, isDirty, isValid } = formState;
  const onSubmit = (data: TFormValues) => {
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
        <TextField placeholder='Фамилия Имя' type='text' {...register('name',
          {required: 'Name is required'},
        )}
        error={!!errors.name}
        helperText={errors.name?.message}/>
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
        <Button type='submit' variant='contained' color='primary' className={styles.button} disabled={!isDirty || !isValid}>Войти</Button>
      </Stack>
    </form>
  );
};
