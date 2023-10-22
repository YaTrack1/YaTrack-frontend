import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import { Stack } from '@mui/system';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 40,
  padding: '12px 12px 16px 12px',
  lineHeight: 1,
  backgroundColor: alpha('#000000', 0.8),
  fontFamily: 'Suisse Intl',
  width: '526px',
  borderRadius: '0',
  '&:hover': {
    backgroundColor: alpha('#000000', 0.6),
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: alpha('#000000', 0.4),
    boxShadow: 'none',
  },
  '&:focus': {
    backgroundColor: alpha('#000000', 0.4),
    boxShadow: 'none',
  },
});
export default function EntryButton() {

  return (
    <Stack spacing={2} direction='row'>
      <BootstrapButton variant='contained'>Вход</BootstrapButton>
    </Stack>
  );
}