import React from 'react';
import { AuthForm } from '../shared/AuthForm/AuthForm';

export const Register = () => {
  return (
    <AuthForm
      title='Регистрация'
      formId='register'
      question='Уже есть аккаунт?'
      navLinkTitle='Войти'
      ariaLabel='Регистрация'
      navLinkPath='' // здесь передать значение для path
    />
  );
};
