import { TextField, Button, Stack} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const EMAIL_REGX = /^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

const schema = yup.object({
  email: yup.string().matches(EMAIL_REGX,'Введите адрес почты вида Ivan@mail.ru').required('Поле "почта" должно быть заполнено'),
  password: yup.string().min(8, 'Пароль должен содержать минимум 8 знаков').required('Поле "пароль" должно быть заполнено'),
});

type TFormValues = {
  email: string
  password: string
}
export const MuiLoginForm = () => {

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
  const onSubmit = (data: TFormValues) => {
    console.log(data);
  };
  return (
    <div>
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
          <Button type='submit' variant='contained' color='primary' disabled={!isDirty || !isValid}>Войти</Button>
        </Stack>
      </form>
    </div>
  );
};
