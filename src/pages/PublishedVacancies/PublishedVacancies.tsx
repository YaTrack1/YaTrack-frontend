import { MainMenu } from '../../components/shared/MainMenu/MainMenu';
import { Box, Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { SvgIcon } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { CreateVacancyFormSteps } from '../../components/shared/CreateVacancyFormSteps/CreateVacancyFormSteps';
import { ModalForForm } from '../../components/shared/UI/ModalForForm/ModalForForm';
import { CardVacancy} from '../../components/shared/CardVacancy/CardVacancy';
import {ReactComponent as closeicon} from '../../images/close.svg';
import { ChangeVacancyForm } from '../../components/shared/ChangeVacancyForm/ChangeVacancyForm';
import {LIST_VACANCIES} from '../../utils/constants';

export const PublishedVacancies: React.FC = () => {

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
  });
  const SvgIconClass = styled(IconButton) ({
    padding:'0',
    margin: '0 0 0 20px',
    width: '24px',
    height: '24px',
    position: 'absolute',
    top: '20px',
    right: '20px',
    '&:hover': {
      filter: 'sepia(1) hue-rotate(170deg) saturate(100)',
    },
  });
  const DeleteStyleButton = styled (Button)({
    border: '2px solid #1D6BF3',
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
  });
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const handleOpenModalDelete = (data: any) => {
    setOpenModalDelete(true);
    setTitleModal(data);
  };

  const handleCloseModalDelete = () => setOpenModalDelete(false);
  const [openModalCreateVacancy, setOpenModalCreateVacancy] = useState(false);
  const handleOpenModalCreateVacancy = () => setOpenModalCreateVacancy(true);
  const handleCloseModalCreateVacancy = () => setOpenModalCreateVacancy(false);
  const handleCloseModalRedVacancy = () => setOpenRedForm(false);
  const [openRedForm, setOpenRedForm] = useState(false);
  const [vacancies, setVacanciesList] = useState(LIST_VACANCIES);
  const [vacancyForRed, setVacancyForRed] = useState({});
  function handleDeleteVacancy(titleModal: string){
    const newlist =  vacancies.filter((i)=>i.jobtitle!==titleModal);
    setVacanciesList(newlist);
    handleCloseModalDelete();
  }
  function handleRedVacancyOpen(data: any){
    vacancies.filter((i)=>i.jobtitle===data);
    console.log(vacancies.filter((i)=>i.jobtitle===data));
    setOpenRedForm(true);
  }
  function  submitNewVacancy(data: any){
    const newvac = {jobtitle: data.jobtitle, newresume: [1,2,3,4,5,6], id:10};
    vacancies.unshift(newvac);
    console.log(vacancies);
    setVacanciesList(vacancies);
    setOpenModalCreateVacancy(false);
  }
  return (
    <Box sx={{display:'flex', pr: '30px'}}>
      <MainMenu/>
      <Box sx={{flexGrow: 1, mr: '20px', width: '100%'}}>
        <Box sx={{display: 'flex', justifyContent:'space-between', mt: '40px', width: '100%'}}>
          <Typography sx={{fontSize:'34px', ml: '24px'}} variant='h1' component='div'>Опубликованные вакансии</Typography>
          <CreateVacancyBtn onClick={handleOpenModalCreateVacancy}>Создать новую вакансию</CreateVacancyBtn>
        </Box>
        <List sx={{mr:3, pt: '0'}}>
          {vacancies.map((vacancy)=>(
            <ListItem key={vacancy.id} disablePadding disableGutters sx={{ml:'24px',mt: '40px'}}>
              <CardVacancy  handleRedVacancyOpen={handleRedVacancyOpen} handleOpenModalDelete={handleOpenModalDelete} vacancy={vacancy}/>
            </ListItem>
          ))}
        </List>
      </Box>
      <ModalForForm  open={openModalDelete}
        onClose={handleCloseModalDelete}>
        <SvgIconClass onClick={handleCloseModalDelete} disableRipple><SvgIcon sx={{width: '100%', height: '100%'}} component={closeicon} inheritViewBox></SvgIcon></SvgIconClass>
        <Typography sx={{fontSize:'24px', textAlign: 'center', width: '600px'}} variant='h6' component='h2'>
              Вы действительно хотите удалить вакансию?
        </Typography>
        <Typography sx={{fontWeight: '600', overflow: 'hidden', fontSize:'24px', textAlign: 'center', width: '550px', margin: '0 auto', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}} variant='h6' component='h2'>{titleModal}</Typography>
        <Box sx={{display:'flex', justifyContent: 'space-between', gap: 2, mt: 2}}>
          <CreateVacancyBtn sx={{width: '100%'}} onClick={handleCloseModalDelete}>Отмена</CreateVacancyBtn>
          <DeleteStyleButton onClick={()=>handleDeleteVacancy(titleModal)} sx={{width: '100%'}}>Удалить</DeleteStyleButton>
        </Box></ModalForForm>
      <CreateVacancyFormSteps submitNewVacancy={submitNewVacancy} open={openModalCreateVacancy} onClose={handleCloseModalCreateVacancy}/>
      <ChangeVacancyForm open={openRedForm} vacancyForRed={vacancyForRed} onClose={handleCloseModalRedVacancy}/>
    </Box>
  );
};