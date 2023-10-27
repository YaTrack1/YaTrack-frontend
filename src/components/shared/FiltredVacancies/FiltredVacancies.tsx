import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { AlertModalPopup } from '../UI/AlertModalPopup/AlertModalPopup';
import { Card } from '../Card/Card';
import {useState, FC} from 'react';

const Item = styled(Paper)(() => ({
  height: '300px',
  borderRadius: '12px',
  boxShadow: '0px 4px 6px 0px rgba(176, 190, 197, 0.30)',
}));
export interface IFiltredVacanciesProps {
	vacanciesList: any;
	selectedValue: any;
}
export const FiltredVacancies: FC<IFiltredVacanciesProps> = ({vacanciesList, selectedValue}) => {
  const [activeBtn, setIsActiveBtn] = useState(false);
  return (
    <>
      <Box sx={{width: '100%', display:'flex', justifyContent:'space-between', m: '20px 0 0 24px'}}>
        <Box sx={{display: 'flex', gap:'20px'}}>
          <Button onClick={()=>{setIsActiveBtn(!activeBtn)}} sx={{border: '0',color: 'black', borderRadius: '12px', textTransform: 'none', fontSize: 16, backgroundColor: `${activeBtn ? '#FFF9D3' : '#DDE0E4'}`}} disableRipple disableElevation>{vacanciesList[1][0]}</Button>
          <Button onClick={()=>{setIsActiveBtn(!activeBtn)}} sx={{border: '0',color: 'black', borderRadius: '12px', textTransform: 'none', fontSize: 16, backgroundColor: '#DDE0E4'}} disableRipple disableElevation>{vacanciesList[1][1]}</Button>
          <Button sx={{border: '0',color: 'black', borderRadius: '12px', textTransform: 'none', fontSize: 16, backgroundColor: '#DDE0E4'}} disableRipple disableElevation>{vacanciesList[1][2]}</Button>
        </Box>
        <Button sx={{borderRadius: '6px', textTransform: 'none', fontSize: 16, mr: '24px'}} variant='outlined' disableRipple disableElevation>Выгрузить</Button>
      </Box>
      {selectedValue==='candidates' ? <AlertModalPopup /> : null}
      <Grid container spacing={3} sx={{ml: '0px', mt: '0'}}>
        {vacanciesList[0].map((i: any) => (
          <Grid item xs={2.35}>
            <Item><Card/></Item>
          </Grid>))}
      </Grid>
    </>
  )}

