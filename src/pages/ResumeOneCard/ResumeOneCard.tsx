import { Box, IconButton, Typography, Button } from '@mui/material';
import { MainMenu } from '../../components/shared/MainMenu/MainMenu';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import React from 'react';
import { Hero } from './Components/Hero';
import { About } from './Components/About';
import { Skills } from './Components/Skills';
import { Experience } from './Components/Experience';
import { Education } from './Components/Education';
import { EDUCATION_DATA } from '../../utils/hardcode';

export const ResumeOneCard = () => {
  return (
    <Box sx={{display:'flex'}}>
      <MainMenu/>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexGrow: 1}}>
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '30px', mb: '40px'}}>
          <IconButton disableRipple sx={{ color: 'black'}}>
            <ArrowBackIosNewIcon sx={{ml: '20px', mr: '15px'}}/>
            <Typography variant='h4' component='div'>Резюме</Typography>
          </IconButton>
          <Button sx={{borderRadius: '6px', textTransform: 'none', fontSize: 16, mr: '45px', width: 'auto', height: '40px'}} variant='outlined' disableRipple disableElevation>Выгрузить в PDF</Button>
        </Box>
        <Box sx={{width: '100%', p: '0 48px 0 24px'}}>
          <Hero />
        </Box>
        <Box sx={{display: 'flex', gap: '24px', m: '30px 48px 0 24px'}}>
          <About />
          <Skills />
        </Box>
        {/* здесь нужен слайдер */}
        <Experience />
        <Education data={EDUCATION_DATA}/>
      </Box>
    </Box>
  );
};
