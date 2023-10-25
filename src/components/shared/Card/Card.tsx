import React, { useState } from 'react';
import {Box} from '@mui/material';
import CustomizedButton from '../UI/CustomizedButton/CustomizedButton';
import LikeButton from '../UI/LikeButton/LikeButton';

import styles from './Card.module.scss';

// заглушки. эти данные будут приходит динамически с сервера позже
import photo from '../../../images/samples/candidate_photo_sample.png';
import stats from '../../../images/samples/data_sample2.svg';
import { useLocation, useNavigate } from 'react-router-dom';
const name = 'Сидорова Наталья';
const title = 'Junior';
const activity = 'Была(а) 1 час назад';
const number = '90';
const statsResults = `${number}%`;
//--------------------------------------------------------------------

export const Card = () => {
  const [ isVisited, setIsVisited ] = useState(false);
  const [ isCandidateInterest, setIsCandidateInterest ] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  //!! прописать роут для Приглашённые
  const invitedPath = pathname === '';

  const toggleCard = () => {
    setIsVisited(true);
    //!! прописать роут резюме
    navigate('');
  };

  return (
    <section
      className={`${styles.container} ${isCandidateInterest && styles.container_active}`}
      onClick={toggleCard}
    >
      <div className={styles.header}>
        <p className={styles.header_title}>{name}</p>
        <div>
          <img className={styles.header_img} src={photo} alt='Фото кандидата'/>
        </div>
      </div>
      <div className={styles.data}>
        <span className={styles.data_results}>{statsResults}</span>
        <img className={isVisited && styles.blackAndWhite} src={stats} alt='Статистика' />
      </div>
      <div className={styles.footer}>
        <span className={styles.footer_title}>{title}</span>
        <span className={styles.footer_subtitle}>{activity}</span>
        <div className={styles.footer_buttons}>
          {!invitedPath ?
            <Box sx={{display: 'flex', width: '100%', gap: '10px'}}>
              <CustomizedButton/>
              <LikeButton/>
            </Box>
            :
            //заглушка, серая зона реализации которой нет
            <div className={styles.footer_status}>{'Принято'}</div>
          }
        </div>
      </div>
    </section>
  );
};
