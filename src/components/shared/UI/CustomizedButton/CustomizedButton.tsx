import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import {  FC } from 'react';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: '16px',
  padding: '0',
  lineHeight: 1,
  backgroundColor: '#5A9BFF',
  width: '278px',
  borderRadius: '6px',
  '&:hover': {
    backgroundColor: '#1D6BF3',
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: '#1D6BF3',
    boxShadow: 'none',
  },
  '&:focus': {
    backgroundColor: '##1D6BF3',
    boxShadow: 'none',
  },
  '&:disabled': {
    backgroundColor: '#B5B5B7',
    boxShadow: 'none',
  },
});
export interface ICustomizedButton{
  onClickBtn?: any;
  text: string;
}
export const CustomizedButton: FC<ICustomizedButton> = ({onClickBtn, text}) => {
  const location=useLocation();
  return (
    <BootstrapButton onClick = {onClickBtn} sx={{height: `${location.pathname==='/employer/resumes'? '40px': '50px'}}`}} type='submit' variant='contained' disableElevation={true}  disableRipple>{text}</BootstrapButton>
  );
};
