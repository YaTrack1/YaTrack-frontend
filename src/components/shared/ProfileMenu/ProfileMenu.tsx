import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

export const ProfileMenu : React.FC = () => {
  return (
    <Paper sx={{ width: 'inherit', maxWidth: '100%', position: 'relative', backgroundColor: '#1A1B22'}}>
      <MenuList sx={{ml: '35px', borderRight:'1px solid white'}}>
        <MenuItem  disableRipple>
          <ListItemText sx={{color: 'white'}}>Личный Кабинет</ListItemText>
        </MenuItem>
        <MenuItem disableRipple>
          <ListItemText sx={{color: 'white'}}>Настройки</ListItemText>
        </MenuItem>
        <MenuItem disableRipple>
          <ListItemText sx={{color: 'white'}}>Выход</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};
