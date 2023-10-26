import * as React from 'react';
import { FC, ReactNode } from 'react';
import {  Modal, Box, Typography } from '@mui/material';

interface IVacancyForm {
	children: ReactNode;
  open: boolean;
  onClose: any;
  step?: number;
}
const Boxstyle = {
  position: 'absolute',
  top: '0',
  left: '50%',
  transform: 'translate(-50%, -50px)',
  width: '660px',
  bgcolor: 'white',
  border: '0',
  boxShadow: '0px 4px 6px 0px rgba(176, 190, 197, 0.30)',
  borderRadius: '12px',
  margin: '10% auto 15px',
  p: '40px',
  overflowY: 'scroll',
};

export const ModalForForm: FC<IVacancyForm> = ({children, open, onClose, step}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        sx={{position: 'fixed', overflowY: 'scroll'}}
      >
        <Box sx={Boxstyle}>
          {/* для попап удаления убрать */}
          <Typography sx={{fontSize: '34px'}} variant='h2'>Создание вакансии</Typography>
          <Box sx={{display: 'flex', gap: '20px', mt: '40px'}}>
            <Typography sx={{fontSize: '18px', borderRadius: '12px', backgroundColor: `${step===1 ? '#FFCE92' : '#DDE0E4' }` , p: '8px'}} variant='h3'>Шаг 1</Typography>
            <Typography sx={{fontSize: '18px', borderRadius: '12px', backgroundColor: `${step!==1 ? '#FFCE92' : '#DDE0E4' }`, p: '8px'}} variant='h3'>Шаг 2</Typography>
          </Box>
          {children}
        </Box>
      </Modal>
    </div>
  );
};