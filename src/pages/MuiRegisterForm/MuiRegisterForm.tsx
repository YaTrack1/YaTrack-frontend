import { TextField, Button, Stack, Typography, Link } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TFormValues, TRegisterProps } from './TypesRegister';
import { schema } from './SchemaRegister';
import BasicSelect from '../../components/shared/MuiSelectButton/MuiSelectButton';
import { AuthorizationWrapper } from '../../components/shared/AuthorizationWrapper/AuthorizationWrapper';

export const MuiRegisterForm: React.FC<TRegisterProps> = ({role}) => {

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
    console.log(data);
  };
  return (
    <AuthorizationWrapper>
      <Stack spacing={2} width={392}>
        <Typography variant='h4'>Авторизация</Typography>
        <BasicSelect />
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
            <Button type='submit' variant='contained' color='primary' disabled={!isDirty || !isValid || (role === 'employee')}>Войти</Button>
          </Stack>
        </form>
        <Typography>Уже есть аккаунт? <Link href='/signin'>Войти</Link></Typography>
      </Stack>
    </AuthorizationWrapper>
  );
};
