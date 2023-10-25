import { MainMenu } from '../../components/shared/MainMenu/MainMenu';
import { Box } from '@mui/material';
import { IconButton, Typography, ListItemText } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Menu from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import {useState} from 'react';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import { AlertModalPopup } from '../../components/shared/UI/AlertModalPopup/AlertModalPopup';
import { Card } from '../../components/shared/Card/Card';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {FiltredVacancies} from '../../components/shared/FiltredVacancies/FiltredVacancies';

export const MainPage: React.FC = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(true);
  const [isActiveBtn, setIsActiveBtn] = useState(false);
  const cardList=[{},{},{},{},{},{},{},{},{},{},{},{}];
  const cardListButtons = ['Активные', 'Максимальное совпадение', 'Проявившие интерес'];
  const likelistButtons = ['Принято', 'Ожидание', 'Отказ']
  const likedList = [{},{},{}];
  const invitedList = [{},{}];
  const Item = styled(Paper)(() => ({
    height: '300px',
    borderRadius: '12px',
    boxShadow: '0px 4px 6px 0px rgba(176, 190, 197, 0.30)',
  }));
  const ButtonClassYellow = styled(Button) ({
    border: '0',
    color: 'black',
    borderRadius: '12px',
    textTransform: 'none',
    fontSize: 16,
    backgroundColor: `${isActiveBtn? '#DDE0E4' : '#FFF9D3'}`,
  });
  const MenuCandidatesItem = styled(MenuItem) ({
    borderBottom: '1px solid white',
    color: '#797981',
    '&:hover': {
      color: 'black',
      backgroundColor: 'white',
    },
    '&:active': {
      borderBottom: '1px solid #1D6BF3',
      color: 'black',
    },
    '&:focus': {
      borderBottom: '1px solid #1D6BF3',
      color: 'black',
    },
  });
  const CssButtonMenu = styled(Button) ({
    color: '#797981',
    textTransform: 'none',
    fontSize: '24px',
    '&:hover': {
      backgroundColor: 'white',
      boxShadow: 'none',
    },
  });
  const [selectedValue, setSelectedValue] = useState('candidates');

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue((event.target as HTMLInputElement).value);
  };
  function listCandidates () {
    if (selectedValue==='candidates')
      return [cardList, cardListButtons];
    if (selectedValue ==='liked')
      return [likedList, cardListButtons];
    else return [invitedList, likelistButtons];
  }
  return (
    <Box sx={{display:'flex', pr: '48px'}}>
      <MainMenu />
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexGrow: 1}}>
        <IconButton disableRipple sx={{mt:'30px', color: 'black'}}>
          <ArrowBackIosNewIcon sx={{ml: '20px', mr: '15px'}}/>
          <Typography variant='h4' component='div'>UX/UI дизайнер</Typography>
        </IconButton>
        <FormControl sx={{}}>
          <RadioGroup
            aria-labelledby='Меню кандидатов'
            defaultValue='candidates'
            name='radio-buttons-group'
            onChange={handleChangeRadio}
          >
            <Box sx={{display: 'flex', ml: '30px', mt:'28px', gap: '40px'}}>
              <FormControlLabel sx={{color: `${selectedValue==='candidates' ? 'black' : '#797981'}`, borderBottom: `${selectedValue==='candidates' ? '1px solid #1D6BF3' : '1px solid white'}`}} value='candidates' control={<Radio sx={{display: 'none'}}/>} label='Подходящие кандидаты'/>
              <FormControlLabel sx={{color: `${selectedValue==='liked' ? 'black' : '#797981'}`, borderBottom: `${selectedValue==='liked' ? '1px solid #1D6BF3' : '1px solid white'}`}} value='liked' control={<Radio sx={{display: 'none'}}/>} label='Избранные'  />
              <FormControlLabel sx={{color: `${selectedValue==='invited' ? 'black' : '#797981'}`, borderBottom: `${selectedValue==='invited' ? '1px solid #1D6BF3' : '1px solid white'}`}}  value='invited' control={<Radio sx={{display: 'none'}}/>} label='Приглашенные'/>
            </Box>
          </RadioGroup>
        </FormControl>
        <FiltredVacancies selectedValue={selectedValue} vacanciesList={listCandidates()}/>
      </Box>
    </Box>
  );
};
  );
};
