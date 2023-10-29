
import Typography from '@mui/material/Typography';
import { Box, CardContent } from '@mui/material';
import {FC} from 'react';
export interface ICompanyCard {
  card: any;
}

export const CompanyCard : FC<ICompanyCard> = ({card}) =>{
  return (
    <CardContent sx={{ textAlign: 'start', pl: '15px'}}>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <Typography variant='h3' sx={{ width: '164px', flexGrow: 1, fontSize: '20px', textTransform: 'none'}}>{card.name}</Typography>
        <Typography variant='h3' sx={{ wordBreak:'break-all', width: '164px', flexGrow: 1, fontSize: '20px', mt: '16px'}}>{card.INN}</Typography>
      </Box>
    </CardContent>
  )
}