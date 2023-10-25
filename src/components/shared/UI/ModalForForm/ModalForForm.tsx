import * as React from 'react';
import { FC, ReactNode, useEffect } from 'react';
import { SvgIcon, Modal, Button, Box, Typography, IconButton} from '@mui/material';
import {ReactComponent as closeicon} from '../../../../images/close.svg';
import { styled } from '@mui/material/styles';
import styles from './ModalForForm.scss';

interface ISignForm {
  jobtitle: string;
  specialization?: string;
  jobdescription?: string;
  responsibilities?: string;
  city?: string;
  conditions?: string;
  selectionssteps?: string;
}
interface IVacancyForm {
	children: ReactNode;
  open: boolean;
  onClose: any;
}
const Boxstyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '660px',
  bgcolor: 'white',
  border: '0',
  boxShadow: '0px 4px 6px 0px rgba(176, 190, 197, 0.30)',
  borderRadius: '12px',
  p: '40px',
};

export const ModalForForm: FC<IVacancyForm> = ({children, open, onClose}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
      >
        <Box sx={Boxstyle}>
          {/* для попап удаления убрать */}
          <Typography sx={{fontSize: '34px'}} variant='h2'>Создание вакансии</Typography>
          <Box sx={{display: 'flex', gap: '20px', mt: '40px'}}>
            <Typography sx={{fontSize: '18px', borderRadius: '12px', backgroundColor: '#FFCE92', p: '8px'}} variant='h3'>Шаг 1</Typography>
            <Typography sx={{fontSize: '18px', borderRadius: '12px', backgroundColor: '#DDE0E4', p: '8px'}} variant='h3'>Шаг 2</Typography>
          </Box>
          {children}
        </Box>
      </Modal>
    </div>
  );
};