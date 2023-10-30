import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SvgIcon from '@mui/material/SvgIcon';
import  { ReactComponent as logo}  from '../../images/logo.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate ('/employer');
  };
  return (
    <Box width='100%' position='relative' sx={{ flexGrow: 0, width: 1440, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <AppBar  position='relative'  sx={{ backgroundColor:'#1A1B22', width: 1440 }}>
        <Toolbar sx={{ width: 1440 }}>
          {isLoggedIn ? (<><IconButton><SvgIcon sx={{width: '45px', height: '45px', ml: '25px', mr: '70px'}} component={logo} inheritViewBox onClick={handleClick}></SvgIcon></IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1, color: 'white'}}>
           Иванова Анна
            </Typography>
            <IconButton sx={{mr: 2, filter: 'invert(1)'}} color='inherit'><NotificationsActiveOutlinedIcon/></IconButton></>) : (<IconButton><SvgIcon sx={{width: '45px', height: '45px', ml: '25px', mr: '70px'}} component={logo} inheritViewBox></SvgIcon></IconButton>)}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
