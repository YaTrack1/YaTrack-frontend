import styles from '../ResumeOneCard.module.scss';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';

export const Experience = () => {
  return (
    <div className={styles.experience}>
      <h2 className={styles.title}>Опыт работы</h2>
      <div>
        <h2 className={styles.title}>Графический дизайнер</h2>
        <p className={styles.text}>111-222</p>
        <p className={styles.text}>2 года</p>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>Основные обязанности</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            1. Исследование и анализ целевой аудитории, конкурентов и отрасли.
            2. Разработка концепций и идей для визуальных решений, включая логотипы, типографику, изображения, цвета, шаблоны и т.д.
            3. Создание макетов и прототипов для печати и цифровых медиа.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>Основные обязанности</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              1. Исследование и анализ целевой аудитории, конкурентов и отрасли.
              2. Разработка концепций и идей для визуальных решений, включая логотипы, типографику, изображения, цвета, шаблоны и т.д.
              3. Создание макетов и прототипов для печати и цифровых медиа.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>Основные обязанности</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              1. Исследование и анализ целевой аудитории, конкурентов и отрасли.
              2. Разработка концепций и идей для визуальных решений, включая логотипы, типографику, изображения, цвета, шаблоны и т.д.
              3. Создание макетов и прототипов для печати и цифровых медиа.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>Основные обязанности</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              1. Исследование и анализ целевой аудитории, конкурентов и отрасли.
              2. Разработка концепций и идей для визуальных решений, включая логотипы, типографику, изображения, цвета, шаблоны и т.д.
              3. Создание макетов и прототипов для печати и цифровых медиа.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
