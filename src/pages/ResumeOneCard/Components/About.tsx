import { SectionWrapper } from '../../../components/shared/SectionWrapper/SectionWrapper';
import styles from '../ResumeOneCard.module.scss';
import React from 'react';
import { Box } from '@mui/material';
export const About = () => {
  return (
    <Box sx={{ width: '50%' }}>
      <SectionWrapper title='О себе'>
        <p className={styles.about__text}>
          Меня зовут Анна, и я являюсь графическим дизайнером с болеечем
          10-летним стажем работы в этой области. Моя карьера началасьс обучения
          на факультете графического дизайна в одном из ведущих вузов страны,
          где я получила фундаментальные знания и навыки,которые стали основой
          моего профессионального развития. За время своей работы я участвовала
          в создании множества проектов, включая разработку логотипов, рекламных
          материалов, корпоративных стилей, веб-сайтов и мобильных приложений.
        </p>
      </SectionWrapper>
    </Box>
  );
};
