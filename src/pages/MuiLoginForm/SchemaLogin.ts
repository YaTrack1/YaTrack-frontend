import * as yup from 'yup';
import { EMAIL_REGX } from '../../utils/constants';

export const schema = yup.object({
  email: yup.string().matches(EMAIL_REGX,'Введите адрес почты вида Ivan@mail.ru').required('Поле "почта" должно быть заполнено'),
  password: yup.string().min(8, 'Пароль должен содержать минимум 8 знаков').required('Поле "пароль" должно быть заполнено'),
});
