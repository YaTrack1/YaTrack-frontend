import React from 'react';

import styles from './Card.module.scss';
// заглушки
import photo from '../../../vendor/images/candidate_photo_sample.png';
import stats from '../../../vendor/images/data_sample2.svg';
//--------------------------------------------------------------------

export const Card = () => {
  // заглушки
  const name = 'Сидорова Наталья';
  const title = 'Junior';
  const activity = 'Была(а) 1 час назад';
  const statsResults = '90';
  //--------------------------------------------------------------------

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <p className={styles.header_title}>{name}</p>
        <div>
          <img className={styles.header_img} src={photo} alt='Фото кандидата'/>
        </div>
      </div>
      <div className={styles.data}>
        <span className={styles.data_results}>{`${statsResults}%`}</span>
        <img src={stats} alt='Статистика' />
      </div>
      <div className={styles.footer}>
        <span className={styles.footer_title}>{title}</span>
        <span className={styles.footer_subtitle}>{activity}</span>
        <div className={styles.footer_buttons}>
          {/* !!! тут кнопки */}
        </div>
      </div>
    </section>
  );
};
