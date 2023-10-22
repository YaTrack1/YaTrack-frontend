import React from 'react';

import './AuthForm.scss';
import AuthFormProps from './types';

export const AuthForm = ({
  title,
  buttonText,
  question,
  isValid,
  children,
  onSubmit,
}: AuthFormProps) => {

  return (
    <div className='auth-form'>
      <div className='auth-form__container'>
        <div>
          <div className='auth-form__header'>
            <h2 className='auth-form__title'>{title}</h2>
          </div>
          <form className='auth-form__form' id='form__auth' onSubmit={onSubmit}>
            {children}
          </form>
        </div>
        <div>
          <button
            className={`auth-form__button ${!isValid && 'auth-form__button_inactive'}`}
            type='submit'
            form='form__auth'
            disabled={!isValid}
          >
            {buttonText}
          </button>
          <p className='auth-form__question'>
            {question}
          </p>
        </div>
      </div>
    </div>
  );
};
