import { MainMenu } from '../../components/shared/MainMenu/MainMenu';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, {useState} from 'react';
import {FiltredVacancies} from '../../components/shared/FiltredVacancies/FiltredVacancies';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {MENU_BTN, CARD_LIST, CARD_LIST_BUTTONS, LIKE_LIST_BUTTONS, LIKED_LIST, INVITED_LIST} from '../../utils/constants';

const CssButtonMenu = styled(Button) ({
  padding: '0',
  marginRight: '20px',
  color: '#797981',
  textTransform: 'none',
  fontSize: '24px',
  borderRadius: '0',
  '&:hover': {
    backgroundColor: 'white',
    boxShadow: 'none',
  },
});

export const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState(MENU_BTN[0].i);

  function listCandidates () {
    if (activeMenu === MENU_BTN[0].i) return [CARD_LIST, CARD_LIST_BUTTONS];
    if (activeMenu === MENU_BTN[1].i) return [LIKED_LIST, CARD_LIST_BUTTONS];
    else return [INVITED_LIST, LIKE_LIST_BUTTONS];
  }

  const handleClick = () => {
    navigate('/employer');
  };

  return (
    <Box sx={{display:'flex', pr: '48px'}}>
      <MainMenu />
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexGrow: 1}}>
        <Box sx={{display: 'flex', m:'40px 0 35px 24px'}}>
          <IconButton onClick={handleClick} disableRipple sx={{ color: 'black'}}>
            <ArrowBackIosNewIcon sx={{mr: '15px'}}/>
            <Typography variant='h4' component='div'>UX/UI дизайнер</Typography>
          </IconButton>
        </Box>
        <Box sx={{display: 'flex',ml: '24px'}}>
          <CssButtonMenu disableElevation disableRipple onClick={()=>{setActiveMenu(MENU_BTN[0].i);}} sx={{borderBottom: `${activeMenu===MENU_BTN[0].i ? '1px solid #1D6BF3' : 'white'}`, color: `${activeMenu===MENU_BTN[0].i ? 'black' : '#797981'}`}}>{MENU_BTN[0].menu}</CssButtonMenu>
          <CssButtonMenu disableElevation disableRipple onClick={()=>{setActiveMenu(MENU_BTN[1].i);}} sx={{borderBottom: `${activeMenu===MENU_BTN[1].i ? '1px solid #1D6BF3' : 'white'}`, color: `${activeMenu===MENU_BTN[1].i ? 'black' : '#797981'}`}}>{MENU_BTN[1].menu}</CssButtonMenu>
          <CssButtonMenu  disableElevation disableRipple onClick={()=>{setActiveMenu(MENU_BTN[2].i);}} sx={{borderBottom: `${activeMenu===MENU_BTN[2].i ? '1px solid #1D6BF3' : 'white'}`, color: `${activeMenu===MENU_BTN[2].i ? 'black' : '#797981'}`}}>{MENU_BTN[2].menu}</CssButtonMenu>
        </Box>
        <FiltredVacancies activeMenu={activeMenu} vacanciesList={listCandidates()}/>
      </Box>
    </Box>
  );
};
