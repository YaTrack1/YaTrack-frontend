import styles from '../ResumeOneCard.module.scss';
import { Avatar, Chip, Paper, Box, Typography, Button} from '@mui/material';
import photo from '../../../images/samples/candidate_photo_sample.png';
import { Diagram } from '../../../components/Diagram/Diagram';
import React from 'react';
import LikeButton from '../../../components/shared/UI/LikeButton/LikeButton';
import { CustomizedButton } from '../../../components/shared/UI/CustomizedButton/CustomizedButton';

export const Hero = () => {
  return (
    <Paper className={styles.paper}>
      <Box className={styles.personalBox}>
        <Box className={styles.personalInfo}>
          <Typography variant='h1' component='h1' sx={{fontSize:'24px'}} className={styles.title}>Катина Екатерина</Typography>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '9px', p: '20px 0'}}>
            <Typography variant='h3' component='h3' sx={{fontSize:'20px'}} className={styles.info}>UX/UI дизайнер</Typography>
            <Typography variant='h3' component='h3' sx={{fontSize:'20px'}} className={styles.info}>Junior</Typography>
            <Typography variant='h3' component='h3' sx={{fontSize:'20px'}} className={styles.info}>25 лет (водолей)</Typography>
            <Typography variant='h3' component='h3' sx={{fontSize:'20px'}} className={styles.info}>Москва</Typography>
            <Typography variant='h3' component='h3' sx={{fontSize:'20px'}} className={styles.info}>Ищет удаленную работу</Typography>
            <Typography variant='h3' component='h3' sx={{fontSize:'20px'}} className={styles.info}>Ссылка на порфолио</Typography>
            <Typography variant='h3' component='h3' sx={{fontSize:'20px'}}  className={styles.info}>Контакты</Typography>
          </Box>
        </Box>
        <Box className={styles.photoBox}>
          <Avatar
            alt='Фото кандидата'
            src={photo}
            sx={{ width: '278px', height: '278px'}}
          />
          <div className={styles.infografics}>
            <Diagram kind='big'/>
          </div>
        </Box>
      </Box>
      <Box className={styles.buttons}>
        <Box className={styles.buttons__box}>
          <CustomizedButton text='Пригласить' />
          <LikeButton />
        </Box>
        <Box className={styles.buttons__label}>
          <Chip sx={{ fontSize: '18px',borderRadius: '12px', backgroundColor: '#CCC2ED'}} label='Активный' />
          <Chip sx={{ml:'20px',fontSize: '18px',borderRadius: '12px', backgroundColor: '#CCC2ED'}} label='Подтвержденные навыки' />
        </Box>
      </Box>
    </Paper>
  );
};
