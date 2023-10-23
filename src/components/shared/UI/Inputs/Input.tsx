import React from 'react';
import { InputProps } from './types';

import './Input.scss';

export const Input = ({ register, errors, placeholder, inputName }: InputProps) => {
  return (
    <div className='input-container'>
      <input
        className='input'
        placeholder={placeholder}
        {...register(inputName || '')}
      />
      {errors && inputName && errors[inputName] && (
        <p className='input__error-message'>{errors[inputName].message}</p>
      )}
    </div>
  );
};
