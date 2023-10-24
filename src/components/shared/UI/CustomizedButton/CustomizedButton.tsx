import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import { Stack } from '@mui/system';
import { useLocation } from 'react-router-dom';

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
export default function CustomizedButton() {
  const location=useLocation();
  return (
    <BootstrapButton sx={{height: `${location.pathname==='/employer/resumes'? '40px': '50px'}}`}} type='submit' variant='contained' disableElevation={true}  disableRipple>Текст</BootstrapButton>
  );
}