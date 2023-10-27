import { Box, Checkbox } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { AlertModalPopup } from '../UI/AlertModalPopup/AlertModalPopup';
import { Card } from '../Card/Card';
import {useState, FC, useEffect} from 'react';
import{ FiltredSubMenu} from '../FiltredSubMenu/FiltredSubMenu';
export interface IFiltredVacanciesProps {
	vacanciesList: any;
	selectedValue: any;
 activeMenu: any;
}
export const FiltredVacancies: FC<IFiltredVacanciesProps> = ({vacanciesList, activeMenu}) => {
  const [subMenuActive, setSubMenuActive] = useState(['']);
  function handleFiltredSubBtnClick(data: string){
    const newarr = subMenuActive;
    if(!subMenuActive.includes(data)){
      newarr.push(data);
      setSubMenuActive(newarr);
    }
    else {
      const index = subMenuActive.indexOf(data);
      subMenuActive.splice(index,1);
      setSubMenuActive(subMenuActive);
    }
    console.log(subMenuActive);
  }
  useEffect(()=>{
    setSubMenuActive(['']);
  }, [activeMenu]);
  return (
    <>
      <Box sx={{width: '100%', display:'flex', justifyContent:'space-between', m: '20px 0 0 24px'}}>
        <Box sx={{display: 'flex', gap:'20px'}}>
          {vacanciesList[1].map((buttonInfo: any)=>(
            <FiltredSubMenu activeMenu={activeMenu}  handleFiltredSubBtnClick = {handleFiltredSubBtnClick} buttonInfo={buttonInfo}/>
          ))}
        </Box>
        <Button sx={{borderRadius: '6px', textTransform: 'none', fontSize: 16, mr: '24px'}} variant='outlined' disableRipple disableElevation>Выгрузить</Button>
      </Box>
      <Box sx={{paddingLeft: '15px', width: '100%'}}>{activeMenu===1 ? <AlertModalPopup/> : null}</Box>
      <Grid container spacing={3} sx={{ml: '0px', mt: '0'}}>
        {vacanciesList[0].map((i: any) => (
          <Grid item xs={2.35}>
            <Card/>
          </Grid>))}
      </Grid>
    </>
  );};

