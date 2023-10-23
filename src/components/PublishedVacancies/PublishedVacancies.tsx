import { MainMenu } from '../MainMenu/MainMenu';
import { Box, Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Card } from '@mui/material';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { SvgIcon } from '@mui/material';
import {ReactComponent as pencil} from '../../images/pencil.svg';
import {ReactComponent as trash} from '../../images/trash.svg';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

export const PublishedVacancies: React.FC = () => {
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
  const CreateVacancyBtn = styled(Button)({
    border: '1px solid #5A9BFF',
    color: 'white',
    borderRadius: '6px',
    textTransform: 'none',
    fontSize: 16,
    backgroundColor: '#5A9BFF',
    '&:hover': {
      backgroundColor: '#1D6BF3',
    },
    '&:disabled': {
      color: 'white',
      backgroundColor: '#B5B5B7',
    },
  })
  const SvgIconClass = styled(IconButton) ({
    padding:'4px',
    margin: '0 0 0 20px',
    width: '24px',
    '&:hover': {
      filter: 'sepia(1) hue-rotate(170deg) saturate(100)',
    },
  })
  const Boxstyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '654px',
    bgcolor: 'white',
    border: '0',
    boxShadow: '0px 4px 6px 0px rgba(176, 190, 197, 0.30)',
    borderRadius: '12px',
    p: 2,
  };
  const DeleteStyleButton = styled (Button)({
    border: '1px solid #1D6BF3',
    color: '#5A9BFF',
    borderRadius: '6px',
    textTransform: 'none',
    fontSize: 16,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#1D6BF3',
      color: 'white',
    },
    '&:disabled': {
      color: 'white',
      backgroundColor: '#B5B5B7',
    },
  })
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const listVacancies = [{jobtitle: 'UX/UI дизайнер (junirrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrror)', newresume: [1,2,3,4,5,6], id:1}, {jobtitle: 'UX/UI дизайнер (junior)', newresume: [1,2,3,4,5,6], id: 2}, {jobtitle: 'UX/UI дизайнер (junior)', newresume: [1,2,3,4,5,6], id: 3}, {jobtitle: 'UX/UI дизайнер (junior)', newresume: [1,2,3,4,5,6], id: 4}, {jobtitle: 'UX/UI дизайнер (junior)', newresume: [1,2,3,4,5,6], id: 5}, {jobtitle: 'UX/UI дизайнер (junior)', newresume: [1,2,3,4,5,6], id: 6}, {jobtitle: 'UX/UI дизайнер (junior)', newresume: [1,2,3,4,5,6], id: 7}];
  return (
    <Box sx={{display:'flex', pr: '30px'}}>
      <MainMenu/>
      <Box sx={{flexGrow: 1, mr: '20px', width: '100%'}}>
        <Box sx={{display: 'flex', justifyContent:'space-between', mt: '40px', width: '100%'}}>
          <Typography sx={{fontSize:'34px', ml: '24px'}} variant='h1' component='div'>Опубликованные вакансии</Typography>
          <CreateVacancyBtn>Создать новую вакансию</CreateVacancyBtn>
        </Box>
        <List sx={{mr:3, pt: '0'}}>
          {listVacancies.map((vacancy)=>(
            <ListItem key={vacancy.id} disablePadding disableGutters sx={{ml:'24px',mt: '40px'}}>
              <ClassCard >
                <Typography sx={{width: '708px', overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis'}} variant='h5' component='div'>{vacancy.jobtitle}</Typography>
                <Box>
                  <SvgIconClass disableRipple>
                    <SvgIcon component={pencil} ></SvgIcon>
                  </SvgIconClass>
                  <SvgIconClass disableRipple onClick={handleOpen}>
                    <SvgIcon component={trash}></SvgIcon>
                  </SvgIconClass>
                </Box>
                <Box sx={{flexGrow: 1, width:'auto', display: 'flex', justifyContent:'flex-end'}}>
                  <Typography sx={{borderRadius: '12px', padding: '8px', fontSize:'18px', textAlign:'right', backgroundColor: '#C2E5CE'}} variant='h4' component='div'>Есть новые кандидаты +{vacancy.newresume.length}</Typography>
                </Box>
              </ClassCard>
            </ListItem>

          ))}
        </List>
      </Box>
      <Modal sx={{backgroundColor: '#1A1B22 0.5'}}
        open={open}
        onClose={handleClose}
      >
        <Box sx={Boxstyle}>
          <Typography sx={{fontSize:'24px', textAlign: 'center'}} variant='h6' component='h2'>
          Вы действительно хотите удалить вакансию?
          </Typography>
          <Box sx={{display:'flex', justifyContent: 'space-between', gap: 2, mt: 2}}>
            <CreateVacancyBtn sx={{width: '100%'}} onClick={handleClose}>Отмена</CreateVacancyBtn>
            <DeleteStyleButton sx={{width: '100%'}}>Удалить</DeleteStyleButton>
          </Box>

        </Box>
      </Modal>
    </Box>
  )
}