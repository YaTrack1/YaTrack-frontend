import React from 'react';
import { useForm } from 'react-hook-form';

import { AuthForm } from '../shared/AuthForm/AuthForm';
import { EmailInput } from '../shared/UI/Inputs/EmailInput';
import { TextInput } from '../shared/UI/Inputs/TextInput';
import { PasswordInput } from '../shared/UI/Inputs/PasswordInput';

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange'});

  const submitData = (data: any) => {
    console.log(data);
  };

  return (
    <AuthForm
      title={'Регистрация'}
      buttonText={'Зарегистрироваться'}
      buttonLabel={'Зарегистрироваться'}
      navLink={'/sign-in'}
      navLinkTitle={'Войти'}
      onSubmit={handleSubmit(submitData)}
      isValid={isValid}
    >
      <EmailInput
        title={'email'}
        placeholder={'Введите эл.почту'}
        register={register}
        errors={errors}
      />
      <TextInput
        title={'full-name'}
        placeholder={'ФИО'}
        register={register}
        errors={errors}
      />
      <TextInput
        title={'company'}
        placeholder={'Организация'}
        register={register}
        errors={errors}
      />
      <PasswordInput
        title={'password'}
        placeholder={'Пароль'}
        register={register}
        errors={errors}
      />
    </AuthForm>
  );
};
