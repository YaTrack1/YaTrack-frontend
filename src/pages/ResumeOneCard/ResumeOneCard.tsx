import { Box, IconButton, Typography, Button } from '@mui/material';
import { MainMenu } from '../../components/shared/MainMenu/MainMenu';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import React from 'react';
import { Hero } from './Components/Hero';
import { About } from './Components/About';
import { Skills } from './Components/Skills';
import { Experience } from './Components/Experience';
import { Education } from './Components/Education';

export const ResumeOneCard = () => {
  return (
    <Box sx={{display:'flex', pr: '30px'}}>
      <MainMenu/>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexGrow: 1}}>
      <Box sx={{flexGrow: 1, mr: '20px', width: '100%'}}>
        <IconButton disableRipple sx={{mt:'30px', color: 'black'}}>
          <ArrowBackIosNewIcon sx={{ml: '20px', mr: '15px'}}/>
          <Typography variant='h4' component='div'>Резюме</Typography>
        </IconButton>
      <Button sx={{borderRadius: '6px', textTransform: 'none', fontSize: 16, mr: '24px', width: 'auto'}} variant='outlined' disableRipple disableElevation>Выгрузить в PDF</Button>
      </Box>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      </Box>
    </Box>
  );
};
