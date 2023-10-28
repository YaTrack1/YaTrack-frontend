import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, CardContent } from '@mui/material';
import { useState } from 'react';
import { ProfileMenu } from '../ProfileMenu/ProfileMenu';
import { styled } from '@mui/material/styles';

const drawerWidth = 252;
export const MainMenu : React.FC = () => {
  const companyList = [{name: 'Компаddd', INN: 'ИНН 111111111', id: 1}, {name: 'Компssssssssssssssssания2', INN: 'ИНН 111111111', id: 2}, {name: 'Компания', INN: 'ИНН 111111111', id: 3}];
  const [activeComoany, setStatusCompany] = useState(companyList[0].id);
  const CompanyButton = styled(Button)({
    width: '204px',
    borderRadius: '12px 0px 0px 12px',
    marginBottom: '20px',
    backgroundColor: '#797981',
    color: 'white',
    pt: '2px',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#F1F6FF',
      boxShadow: 'none',
      color: 'white',
    },
    '&:active': {
      color: 'black',
      backgroundColor: 'white',
      boxShadow: 'none',
    },
    '&:focus': {
      color: 'black',
      backgroundColor: 'white',
      boxShadow: 'none',
    },
  });
  return (
    <Box position='static' sx={{ display: 'flex'}}>
      <CssBaseline />
      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', backgroundColor: '#1A1B22', borderRight: '1px solid white' },
        }}
      >
        <Box sx={{  overflow: 'auto', display:'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
          <Toolbar />
          {companyList.map((i) => (
            <CompanyButton key={i.id} disableElevation disableRipple  onClick={()=>{setStatusCompany(i.id);}} sx={{borderRight: '1px solid white', backgroundColor: `${activeComoany===i.id ? 'white' : '#797981'}`}}>
              <CardContent sx={{ textAlign: 'start', pl: '15px'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                  <Typography variant='h3' sx={{wordBreak:'break-all', width: '164px', flexGrow: 1, fontSize: '20px', textTransform: 'none'}}>{i.name}</Typography>
                  <Typography variant='h3' sx={{ wordBreak:'break-all', width: '164px', flexGrow: 1, fontSize: '20px', mt: '16px'}}>{i.INN}</Typography>
                </Box>
              </CardContent>
            </CompanyButton>
          ))}
        </Box>
        <ProfileMenu/>
      </Drawer>

    </Box>
  );
};