import * as React from 'react';
import { FC, ReactNode, useEffect } from 'react';
import { SvgIcon, Modal, Button, Box, Typography, IconButton, Collapse, Alert} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {ReactComponent as closeicon} from '../../../../images/close.svg';
import { styled } from '@mui/material/styles';
import {useState} from 'react';

export const AlertModalPopup: React.FC = () =>{
  const [open, setOpen] = useState(true);
  return (
    //изменяется падинг для алерта на странице с вакансиями <Box sx={{ width: '100%', padding: '15px 0 0px 24px' }}>
    <Box sx={{ width: '100%', padding: '15px 0 0 0' }}>
      <Collapse in={open}>
        <Alert icon={false}
          action={
            <IconButton
              color='inherit'
              size='small'
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize='medium' />
            </IconButton>
          }
          sx={{fontSize: '20px', padding: '10px 20px', mb: 2, color: '#1A1B22', borderRadius: '12px', backgroundColor: '#ACCCFF', boxShadow: '0px 4px 6px 0px rgba(176, 190, 197, 0.30)'}}
        >
          {/* Текст зависит от роута!!!!! */}
          Подсвеченные поля обязательные для заполнения
        </Alert>
      </Collapse>
    </Box>
  )
}