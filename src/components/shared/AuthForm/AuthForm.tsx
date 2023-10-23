import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormSet } from '../FormSet/FormSet';
import './AuthForm.scss';
import { Input } from '../UI/Inputs/Input';
import { useForm } from 'react-hook-form';
import { validationSchema } from '../../../utils/validationSchema';
import { NavLink } from 'react-router-dom';
import { AuthFormProps } from './types';

export const AuthForm = ({
  formId,
  title,
  question,
  navLinkTitle,
  ariaLabel,
  navLinkPath,
}: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({resolver: yupResolver(validationSchema)});

  return (
    <section className='auth-form'>
      <div className='auth-form__wrapper'>
        <h2>{title}</h2>
        <FormSet formId={formId} handleSubmit={handleSubmit} reset={reset}>
          <Input
            placeholder='Введите эл.почту'
            inputName='email'
            register={register}
            errors={errors}
          />
          <Input
            placeholder='ФИО'
            inputName='fullName'
            register={register}
            errors={errors}
          />
          <Input
            placeholder='Пароль'
            inputName='password'
            register={register}
            errors={errors}
          />
        </FormSet>
        <button style={{width: '50%'}} form={formId} type='submit'>
          здесь будет норм кнопка {/* !!! нужно заменить кнопку */}
        </button>
        <p className='auth-form__question'>
          {question }
          <NavLink
            className='auth-form__link'
            aria-label={ariaLabel}
            to={navLinkPath}
          >
            {navLinkTitle}
          </NavLink>
        </p>
      </div>
    </section>
  );
};
