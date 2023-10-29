import { MainMenu } from '../../components/shared/MainMenu/MainMenu';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, {useState} from 'react';
import {FiltredVacancies} from '../../components/shared/FiltredVacancies/FiltredVacancies';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import styles from './MainPage.scss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

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
  const menuBtn = [{i: 1, menu: 'Подходящие кандидаты'}, {i:2, menu: 'Избранное'}, {i: 3, menu:'Приглашенные'}];
  const [activeMenu, setActiveMenu] = useState(menuBtn[0].i);
  const navigate = useNavigate();
  const cardList=[{},{},{},{},{},{},{},{},{},{},{},{}];
  const cardListButtons = [{submenu: 'Активные', color: '#FFF9D3'}, {submenu: 'Максимальное совпадение', color: ' rgba(255, 191, 253, 0.87)'} , {submenu: 'Проявившие интерес', color: '#ACCCFF'}];
  const likelistButtons = [{submenu: 'Принято', color: '#C2E5CE'}, {submenu: 'Отказ', color: '#FFDDE5'}, {submenu: 'Ожидание', color: '#FFF9D3'}];
  const likedList = [{},{},{}];
  const invitedList = [{},{}];

  function listCandidates () {
    if (activeMenu===menuBtn[0].i) return [cardList, cardListButtons];
    if (activeMenu===menuBtn[1].i) return [likedList, cardListButtons];
    else return [invitedList, likelistButtons];
  }

  const handleClick = () => {
    navigate('/employer')
  }

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
          <CssButtonMenu disableElevation disableRipple onClick={()=>{setActiveMenu(menuBtn[0].i);}} sx={{borderBottom: `${activeMenu===menuBtn[0].i ? '1px solid #1D6BF3' : 'white'}`, color: `${activeMenu===menuBtn[0].i ? 'black' : '#797981'}`}}>{menuBtn[0].menu}</CssButtonMenu>
          <CssButtonMenu disableElevation disableRipple onClick={()=>{setActiveMenu(menuBtn[1].i);}} sx={{borderBottom: `${activeMenu===menuBtn[1].i ? '1px solid #1D6BF3' : 'white'}`, color: `${activeMenu===menuBtn[1].i ? 'black' : '#797981'}`}}>{menuBtn[1].menu}</CssButtonMenu>
          <CssButtonMenu  disableElevation disableRipple onClick={()=>{setActiveMenu(menuBtn[2].i);}} sx={{borderBottom: `${activeMenu===menuBtn[2].i ? '1px solid #1D6BF3' : 'white'}`, color: `${activeMenu===menuBtn[2].i ? 'black' : '#797981'}`}}>{menuBtn[2].menu}</CssButtonMenu>
        </Box>
        <FiltredVacancies activeMenu={activeMenu} vacanciesList={listCandidates()}/>
      </Box>
    </Box>
  );
};
