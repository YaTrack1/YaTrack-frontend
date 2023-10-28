import {SectionWrapper} from '../../../components/shared/SectionWrapper/SectionWrapper';
import { Box, Typography } from '@mui/material';
import styles from '../ResumeOneCard.module.scss';
import React from 'react';
import styled from '@emotion/styled';
const CssTypography = styled(Typography)({
  fontSize: '16px',
  marginBottom: '10px',
});
export const Education = () => {
  return (

    <Box sx={{width: '100%', p:'0 24px'}}>
      <Typography variant='h2' sx={{fontSize: '24px', mb: '23px'}}>Образование</Typography>
      <Box sx={{display: 'flex', width: '100%', gap: '10px'}}>
        <div className={styles.education__wrapper}>
          <Typography variant='h3' sx={{fontSize: '20px', mb: '10px'}}>Высшее</Typography>
          <CssTypography variant='h3'>Московский государственный технический университет имени Н. Э. Баумана</CssTypography>
          <CssTypography variant='h3'>2222-4444</CssTypography>
          <CssTypography variant='h3'>блаблабла</CssTypography>
        </div>
        <div className={styles.education__wrapper}>
          <Typography variant='h3'  sx={{fontSize: '20px', mb: '10px'}}>Дополнительное</Typography>
          <CssTypography variant='h3'>ВУЗ</CssTypography>
          <CssTypography variant='h3'>2222-4444</CssTypography>
          <CssTypography variant='h3'>блаблабла</CssTypography>
        </div>
      </Box>
    </Box>
  );
};
