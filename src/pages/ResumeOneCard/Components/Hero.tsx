import styles from '../ResumeOneCard.module.scss';
import { Avatar, Chip, Paper } from '@mui/material';
import photo from '../../../images/samples/candidate_photo_sample.png';
import stats from '../../../images/samples/data_sample2.svg';
import React from 'react';

export const Hero = () => {
  return (
<Paper>
      <div className={styles.personalInfo}>
        <h1>Катина Екатерина</h1>
        <p className={styles.info}>UX/UI дизайнер</p>
        <p className={styles.info}>Junior</p>
        <p className={styles.info}>25 лет (водолей)</p>
        <p className={styles.info}>Москва</p>
        <p className={styles.info}>Ищет удаленную работу</p>
        <p className={styles.info}>Ссылка на порфолио</p>
        <p className={styles.info}>Контакты</p>
      </div>
      <Avatar
        alt='Фото кандидата'
        src={photo}
        sx={{ width: 56, height: 56 }}
      />
      <div className={styles.infografics}>
        <img className={styles.stats} src={stats} alt='Статистика' />
      </div>
      <div className={styles.buttons}>
        <div>
          <button>Пригласить</button>
          <button>O</button>
        </div>
        <Chip label='Активный' />
        <Chip label='Подтвержденные навыки' />
      </div>
</Paper>
  );
};
