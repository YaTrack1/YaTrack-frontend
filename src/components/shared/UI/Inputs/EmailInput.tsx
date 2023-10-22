import React from 'react';

import './Input.scss';
import { InputProps } from './types';

const EMAIL_REGEX: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

export const EmailInput = ({
  title,
  label,
  register,
  errors,
  placeholder,
  defaultValue,
}: InputProps) => {

  return (
    <>
      <label className='label'>{label}</label>
      <input
        {...register('email', {
          required: 'Заполните это поле.',
          minLength: {
            value: 6,
            message: 'Минимум 6 символов',
          },
          maxLength: {
            value: 40,
            message: 'Электронная почта должна содержать не более 40 символов',
          },
          pattern: {
            value: EMAIL_REGEX,
            message: 'Введите адрес почты вида Ivan@mail.ru',
          },
        })}
        id={`${title}-input`}
        type='email'
        placeholder={placeholder}
        defaultValue={defaultValue}
        className='input'
        autoComplete='email'
      />
      <span className='error-message error-message_active'>
        {errors?.[title] && <div>{errors?.[title]?.message}</div>}
      </span>
    </>
  );
};
