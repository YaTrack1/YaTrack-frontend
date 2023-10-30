import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import {MAIN_MENU_LIST} from '../../../utils/constants';

export const ProfileMenu : React.FC = () => {
  return (
    <Paper sx={{ width: 'inherit', maxWidth: '100%', position: 'relative', backgroundColor: '#1A1B22'}}>
      <MenuList sx={{ml: '35px', borderRight:'1px solid white'}}>
        {MAIN_MENU_LIST.map((i) =>(
          <MenuItem key={i.id} disableRipple>
            <ListItemText >
              <Typography sx={{color: 'white'}}>
                {i.title}
              </Typography>
            </ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
};
