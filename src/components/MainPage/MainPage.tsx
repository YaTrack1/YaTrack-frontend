import { MainMenu } from '../MainMenu/MainMenu';
import { Box } from '@mui/material';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Typography } from '@mui/material';
import { ListItemText} from '@mui/material';
import Menu from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import {useState} from 'react';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

export const MainPage: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [isActiveBtn, setIsActiveBtn] = useState(false);
  const cardList=[{},{},{},{},{},{},{},{},{},{},{},{}];
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
  })
  return (
    <Box sx={{display:'flex', pr: '48px'}}>
      <MainMenu />
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexGrow: 1}}>
        <IconButton disableRipple sx={{mt:'30px', color: 'black'}}>
          <ArrowBackIosNewIcon sx={{ml: '20px', mr: '15px'}}/>
          <Typography variant='h4' component='div'>UX/UI дизайнер</Typography>
        </IconButton>
        <Menu component='nav' sx={{display: 'flex', ml: '24px', mt:'28px', gap: '40px'}} elevation={0}>
          <MenuCandidatesItem disableRipple disableGutters>
            <ListItemText><Typography variant='h5' component='div'>Подходящие кандидаты</Typography></ListItemText>
          </MenuCandidatesItem>
          <MenuCandidatesItem disableRipple disableGutters>
            <ListItemText><Typography variant='h5' component='div'>Избранное</Typography></ListItemText>
          </MenuCandidatesItem>
          <MenuCandidatesItem disableRipple disableGutters>
            <ListItemText><Typography variant='h5' component='div'>Приглашенные</Typography></ListItemText>
          </MenuCandidatesItem>
        </Menu>
        <Box sx={{width: '100%', display:'flex', justifyContent:'space-between', m: '20px 0 0 24px'}}>
          <Box sx={{display: 'flex', gap:'20px'}}>
            <ButtonClassYellow onClick={()=>setIsActiveBtn(!isActiveBtn)} disableRipple disableElevation >Активные</ButtonClassYellow>
            <Button sx={{border: '0',color: 'black', borderRadius: '12px', textTransform: 'none', fontSize: 16, backgroundColor: '#DDE0E4'}} disableRipple disableElevation>Максимальное совпадение</Button>
            <Button sx={{border: '0',color: 'black', borderRadius: '12px', textTransform: 'none', fontSize: 16, backgroundColor: '#DDE0E4'}} disableRipple disableElevation>Проявившие интерес</Button>
          </Box>
          <Button sx={{borderRadius: '6px', textTransform: 'none', fontSize: 16, mr: '24px'}} variant='outlined' disableRipple disableElevation>Выгрузить</Button>
        </Box>
        <Box sx={{ width: '100%', padding: '15px 0 0px 24px' }}>
          <Collapse in={open}>
            <Alert icon={false}
              action={
                <IconButton
                  color='inherit'
                  size='small'
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize='medium' />
                </IconButton>
              }
              sx={{fontSize: '20px', padding: '10px 20px', mb: 2, color: '#1A1B22', borderRadius: '12px', backgroundColor: '#ACCCFF', boxShadow: '0px 4px 6px 0px rgba(176, 190, 197, 0.30)'}}
            >
          Синим цветом подсвечены кандидаты, заинтересовавшиеся этой вакансией
            </Alert>
          </Collapse>
        </Box>
        <Grid container spacing={3} sx={{ml: '0px', mt: '0'}}>
          {cardList.map((i) => (
            <Grid item xs={2.35}>
              <Item>здесь будет карточка</Item>
            </Grid>))}
        </Grid>
      </Box>
    </Box>
  )
}