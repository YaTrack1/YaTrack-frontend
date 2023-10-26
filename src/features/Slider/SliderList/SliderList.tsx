import styles from './SliderList.module.scss';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Paper, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';

interface SliderListProps {
  slides: string[] | undefined
}

function SliderList({ slides }: SliderListProps) {
  return (
    <div className={styles.list}>
      {slides?.map((slide) => (
        <Box className={styles.box}>
        <Paper id={slide} >
          <Typography variant='h2' component='h2' sx={{fontSize:'20px'}} className={styles.title}>Профессия</Typography>
          <Typography variant='h3' component='h3' sx={{fontSize:'20px'}} className={styles.info}>Период</Typography>
          <Typography variant='h3' component='h3' sx={{fontSize:'20px'}} className={styles.info}>Срок</Typography>
        </Paper>
        <Accordion>
        <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls='panel1a-content'
    id='panel1a-header'
  >
    <Typography>Основные Обязанности</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      <Typography variant='h3' component='h3' sx={{fontSize:'20px'}} className={styles.info}>Раз</Typography>
      <Typography variant='h3' component='h3' sx={{fontSize:'20px'}} className={styles.info}>Два</Typography>
      <Typography variant='h3' component='h3' sx={{fontSize:'20px'}} className={styles.info}>Три</Typography>
    </Typography>
  </AccordionDetails>
</Accordion>
        </Box>
      ))}
    </div>
  );
}

export default SliderList;
