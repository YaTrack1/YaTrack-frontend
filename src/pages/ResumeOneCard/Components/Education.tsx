import {SectionWrapper} from '../../../components/shared/SectionWrapper/SectionWrapper';
import { Box } from '@mui/material';
import styles from '../ResumeOneCard.module.scss';
import React from 'react';
export const Education = () => {
  return (
    <SectionWrapper title='Образование'>
      <Box sx={{display:'flex', pr: '30px'}}>
        <div className={styles.education__wrapper}>
          <p className={styles.text}>Высшее</p>
          <p className={styles.text}>ВУЗ</p>
          <p className={styles.text}>2222-4444</p>
          <p className={styles.text}>блаблабла</p>
        </div>
        <div className={styles.education__type}>
          <p className={styles.text}>Дополнительное</p>
          <p className={styles.text}>Курсы</p>
          <p className={styles.text}>2222-4444</p>
          <p className={styles.text}>блаблабла</p>
        </div>
      </Box>
    </SectionWrapper>
  );
};
