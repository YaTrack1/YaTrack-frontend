import * as React from 'react';
import { Box, IconButton, Collapse, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const AlertModalPopup: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  return (
    <Box sx={{ width: '100%', paddingTop: '20px' }}>
      <Collapse in={open}>
        <Alert
          icon={false}
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
          sx={{
            fontSize: '20px',
            padding: '10px 20px',
            mb: 2,
            color: '#1A1B22',
            borderRadius: '12px',
            backgroundColor: '#ACCCFF',
            boxShadow: '0px 4px 6px 0px rgba(176, 190, 197, 0.30)',
          }}
        >
          {location.pathname === '/employer/resumes'
            ? 'Синим цветом подсвечены кандидаты, заинтересовавшиеся этой вакансией'
            : 'Подсвеченные поля обязательные для заполнения'}
        </Alert>
      </Collapse>
    </Box>
  );
};
