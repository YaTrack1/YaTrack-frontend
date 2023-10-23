import React from 'react';
import { AuthForm } from '../shared/AuthForm/AuthForm';

export const Register = () => {
  return(
    <AuthForm
      title='Авторизация'
      formId='login'
      question='Новый пользователь?'
      navLinkTitle='Зарегестрироваться'
      ariaLabel='Авторизация'
      navLinkPath='' // Здесь вы должны передать значение для path
    />
  );
};