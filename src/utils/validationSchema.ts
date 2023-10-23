import * as yup from 'yup';
import { EMAIL_REGEX, NAME_PATTERN } from './constants';

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Заполните это поле.')
    .matches(EMAIL_REGEX, 'Введите адрес почты вида Ivan@mail.ru'),
  fullName: yup
    .string()
    .required('Заполните это поле.')
    .min(2, 'Текст должен быть не короче 2 символов')
    .matches(NAME_PATTERN, 'Данное поле содержит недопустимые символы.'),
  password: yup
    .string()
    .required('Заполните это поле.')
    .min(8, 'Пароль должен быть не короче 8 символов'),
});