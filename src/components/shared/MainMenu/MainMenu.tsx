import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import { Button } from '@mui/material';
import { useState } from 'react';
import { ProfileMenu } from '../ProfileMenu/ProfileMenu';
import { styled } from '@mui/material/styles';
import { CompanyCard } from '../CompanyCard/CompanyCard';
import {COMPANY_LIST} from '../../../utils/constants';

const drawerWidth = 252;
export const MainMenu : React.FC = () => {
  const [activeComoany, setStatusCompany] = useState(COMPANY_LIST[0].id);
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
    <Box position='relative' sx={{ display: 'flex'}}>
      <CssBaseline />
      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', backgroundColor: '#1A1B22', position: 'absolute', border: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}}
      >
        <Box position='relative' sx={{  overflow: 'auto', display:'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
          {COMPANY_LIST.map((i) => (
            <CompanyButton key={i.id} disableElevation disableRipple  onClick={()=>{setStatusCompany(i.id);}} sx={{backgroundColor: `${activeComoany===i.id ? 'white' : '#797981'}`}}>
              <CompanyCard card={i}/>
            </CompanyButton>
          ))}
        </Box>
        <ProfileMenu/>
      </Drawer>
    </Box>
  );
};
