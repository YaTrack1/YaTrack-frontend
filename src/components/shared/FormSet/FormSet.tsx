import React from 'react';

import './FormSet.scss';
import AuthFormProps from './types';

export const FormSet = ({ formId, children, handleSubmit, reset }: AuthFormProps) => {

  const handleDataSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <form id={formId} className='form-set' onSubmit={handleSubmit(handleDataSubmit)}>
      {children}
    </form>
  );
};
