import {ReactComponent as pencil} from '../../../images/pencil.svg';
import {ReactComponent as trash} from '../../../images/close.svg';
import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Card } from '@mui/material';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { SvgIcon } from '@mui/material';
import React, {useState, FC} from 'react';
import { useNavigate } from 'react-router-dom';

export interface ICardVacancyProps {
	vacancy: any;
  handleOpenModalDelete: any;
  handleRedVacancyOpen: any;
}
export const CardVacancy: FC<ICardVacancyProps> = ({vacancy, handleOpenModalDelete,  handleRedVacancyOpen}) => {
  const navigate = useNavigate()
  const ClassCard = styled(Card) ({
    alignItems: 'center',
    padding: '20px',
    display: 'flex',
    border: '1px solid white',
    width: 'inherit',
    borderRadius: '12px',
    boxShadow: '0px 4px 6px 0px rgba(176, 190, 197, 0.30)',
    cursor:'pointer',
    '&:hover': {
      border: '1px solid #B5B5B7',
    },
  });
  const SvgIconClass = styled(IconButton) ({
    padding:'4px',
    margin: '0 0 0 20px',
    width: '24px',
    '&:hover': {
      filter: 'sepia(1) hue-rotate(170deg) saturate(100)',
    },
  });
  const jobtitle = vacancy.jobtitle;
  function handleOpenModal (data: any, e: React.MouseEvent<HTMLButtonElement>){
    e.stopPropagation();
    handleOpenModalDelete(data);
  }
  function handleRedOpen(jobtitle: string, e: React.MouseEvent<HTMLButtonElement>){
    e.stopPropagation();
    handleRedVacancyOpen(jobtitle);
  }
  const handleClick = () => {
  navigate('resumes')
  }
  return (
    <ClassCard onClick={handleClick}>
      <Typography sx={{width: '708px', overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis'}} variant='h5' component='div'>{vacancy.jobtitle}</Typography>
      <Box>
        <SvgIconClass onClick={(e)=>handleRedOpen(jobtitle, e)} disableRipple>
          <SvgIcon component={pencil} ></SvgIcon>
        </SvgIconClass>
        <SvgIconClass disableRipple onClick={(e)=>handleOpenModal(jobtitle, e)}>
          <SvgIcon component={trash}></SvgIcon>
        </SvgIconClass>
      </Box>
      <Box sx={{flexGrow: 1, width:'auto', display: 'flex', justifyContent:'flex-end'}}>
        <Typography sx={{borderRadius: '12px', padding: '8px', fontSize:'18px', textAlign:'right', backgroundColor: '#C2E5CE'}} variant='h4' component='div'>Есть новые кандидаты +{vacancy.newresume.length}</Typography>
      </Box>
    </ClassCard>
  );
};
