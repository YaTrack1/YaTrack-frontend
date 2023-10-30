import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsLoggedIn } from '../../../store/Auth';
export const ProfileMenu : React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate('/signin');
    dispatch(
      setIsLoggedIn({
        isLoggedIn: false,
      }),
    );
  }
  return (
    <Paper sx={{ width: 'inherit', maxWidth: '100%', position: 'relative', backgroundColor: '#1A1B22'}}>
      <MenuList sx={{ml: '35px', borderRight:'1px solid white'}}>
          <MenuItem disableRipple>
            <ListItemText >
              <Typography sx={{color: 'white'}}>
                Личный кабинет
              </Typography>
            </ListItemText>
          </MenuItem>
          <MenuItem disableRipple>
        <ListItemText >
          <Typography sx={{color: 'white'}}>
            Настройки
          </Typography>
        </ListItemText>
      </MenuItem>
      <MenuItem disableRipple onClick={handleClick}>
        <ListItemText >
          <Typography sx={{color: 'white'}}>
            Выход
          </Typography>
        </ListItemText>
      </MenuItem>
      </MenuList>
    </Paper>
  );
};
