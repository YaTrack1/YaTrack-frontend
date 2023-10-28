import * as React from 'react';
import { useState, FC } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Button, Typography, TextField, IconButton, SvgIcon, Box, InputLabel, Autocomplete, Grid, Paper } from '@mui/material';
import { ModalForForm } from '../UI/ModalForForm/ModalForForm';
import  styles from './CreateVacancyFormSteps.module.scss';
import { styled, alpha } from '@mui/material/styles';
import { AlertModalPopup } from '../UI/AlertModalPopup/AlertModalPopup';
import {ReactComponent as closeicon} from '../../../images/close.svg';
import {CustomizedButton} from '../UI/CustomizedButton/CustomizedButton';
interface ISignFormVacancyCreator {
  jobtitle: string;
  specialization: String;
  city?: string;
  jobdescription?: string;
  conditions?: string;
  selectionssteps?: string;
  schedule?: string;
  busy?: string;
  hardSkillListImport?: any;
  hardSkillListAdd?:any;
}
const SvgIconClass = styled(IconButton) ({
  padding:'0',
  margin: '0 0 0 20px',
  width: '24px',
  height: '24px',
  position: 'absolute',
  top: '48px',
  right: '40px',
  '&:hover': {
    filter: 'sepia(1) hue-rotate(170deg) saturate(100)',
  },
});
interface ICreateVacancyFormSteps {
	// isOpened: boolean;
	// setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  onClose: any;
  submitNewVacancy: any;
  // handleClick: any;
}
export const CreateVacancyFormSteps: FC<ICreateVacancyFormSteps> = ({open, onClose,  submitNewVacancy}) => {
  const [step, setStep] = useState<number>(1);
  const Item = styled(Paper)(({ theme }) => ({
    // с этими стилями надо разобраться в конце концов
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    width: '100%',
    color: theme.palette.text.secondary,
  }));
  const CustomInputLabels = styled(InputLabel)({
    fontSize: '13px',
    textAlign:'left',
    color: '#1A1B22',
  });
  const specializationOptions = ['Дизайн','Программирование', 'Менеджмент', 'Волшебник', 'Фулстак', 'Мать', 'Помогите', 'Как я здесь оказался'];
  const workSchedule = ['Удаленная работа',' Частичная занятость', 'Гибкий график','Сменный график'];
  const busyList =['Полная','Частичная', 'Стажировка', 'Волонтёрство'];
  const hardSkillListImport =['UX-исследования', 'Прототипирование', 'Анимация', 'Типографика', 'UI-kit'];
  const hardSkillListAdd=['lkj', ';lkjh', ';lkh', 'lkjhe', ';lkjhgfe', 'd', 'dd', 'ddddd', 'dsa'];
  const {handleSubmit, control} = useForm<ISignFormVacancyCreator>();
  const onSubmitFirstStep = (data: Object) => {
    setStep(2);
    console.log(data);
  };
  const onSubmitSecondStep =(data: Object)=>{
    submitNewVacancy(data);
    setStep(1);
    console.log(data);
  };
  const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#797981',
      },
      '&:hover fieldset': {
        borderColor: '#797981',
        boxShadow: '0px 4px 6px 0px rgba(176, 190, 197, 0.30)',
      },
      '&.Mui-focused fieldset': {
        border: '2px solid #5A9BFF',
        boxShadow: '0px 4px 6px 0px rgba(176, 190, 197, 0.30)',
      },
    },
  });
  const CssAutocomplete = styled(Autocomplete)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#797981',
      },
      '&:hover fieldset': {
        borderColor: '#797981',
        boxShadow: '0px 4px 6px 0px rgba(176, 190, 197, 0.30)',
      },
      '&.Mui-focused fieldset': {
        border: '2px solid #5A9BFF',
        boxShadow: '0px 4px 6px 0px rgba(176, 190, 197, 0.30)',
      },
    },
  });
  return (
    <>
      {step === 1 ? (
        <ModalForForm open={open} onClose={onClose}>
          <Typography sx={{fontSize: '34px'}} variant='h2'>Создание вакансии</Typography>
          <Box sx={{display: 'flex', gap: '20px', mt: '40px'}}>
            <Typography sx={{fontSize: '18px', borderRadius: '12px', backgroundColor: `${step===1 ? '#FFCE92' : '#DDE0E4' }` , p: '8px'}} variant='h3'>Шаг 1</Typography>
            <Typography sx={{fontSize: '18px', borderRadius: '12px', backgroundColor: `${step!==1 ? '#FFCE92' : '#DDE0E4' }`, p: '8px'}} variant='h3'>Шаг 2</Typography>
          </Box>
          <AlertModalPopup/>
          <form noValidate onSubmit={handleSubmit(onSubmitFirstStep)} >
            <Box sx={{ width: '100%' }}>
              <Grid sx={{padding:'0', margin: '0', width: '100%', rowGap: '4px'}} container>
                <Grid sx={{padding:'0'}} item xs={6}>
                  <Item sx={{boxShadow: '0', padding:'0 12px 0 0'}}>
                    <CustomInputLabels  shrink htmlFor='jobtitle'>Должность</CustomInputLabels>
                    <Controller
                      name='jobtitle'
                      rules ={{required: 'Заполните обязательное поле'}}
                      control={control}
                      render={({field, fieldState: {error}})=>{
                        const {onChange, value, ref} = field;
                        return (
                          <>
                            <CssTextField
                              inputRef={ref}
                              size='small'
                              fullWidth
                              sx={{backgroundColor: `${value?'white':'#FFF9D3'}` }}
                              id='jobtitle'
                              placeholder='Например, «UX/UI дизайнер»'
                              value={value || ''}
                              onChange ={(newValue)=>{
                                onChange(newValue ? newValue : null);
                              }}/>
                            <span style={{color: 'red', height: '16px', textAlign: 'left', width: '100%', display: 'block', fontSize: '11px'}}>{error ? error.message : null}</span>
                          </>
                        );}}/>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item sx={{boxShadow: '0', padding:'0 0 0 12px'}}>
                    <CustomInputLabels  shrink htmlFor='specialization'>Специализация</CustomInputLabels>
                    <Controller
                      rules ={{required: 'Заполните обязательное поле'}}
                      name='specialization'
                      control = {control}
                      render={({field, fieldState: {error}})=>{
                        const {onChange, value, ref} = field;
                        return (
                          <>
                            <CssAutocomplete
                              value={value ? specializationOptions.find((option)=>{
                                return value === option;
                              }) ?? null
                                : null}
                              onChange ={(event: any, newValue)=>{
                                onChange(newValue ? newValue : null);
                              }}
                              sx={{backgroundColor: `${value ?'white':'#FFF9D3'}` }}
                              size='small'
                              selectOnFocus
                              disablePortal
                              id='specialization'
                              options={specializationOptions}
                              fullWidth
                              renderInput={(params) => <TextField placeholder='Например, «Дизайн»' {...params} inputRef={ref}/>}
                            />
                            <span style={{color: 'red', height: '16px', textAlign: 'left', width: '100%', display: 'block', fontSize: '11px'}}>{error ? error.message : null}</span>
                          </>);
                      }}/>
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item sx={{boxShadow: '0', padding:'0'}}>
                    <CustomInputLabels shrink htmlFor='city'>Город</CustomInputLabels>
                    <Controller
                      name='city'
                      control={control}
                      render={({field})=>{
                        const {onChange, value} = field;
                        return (
                          <CssTextField
                            size='small'
                            fullWidth
                            id='city'
                            multiline
                            rows={1}
                            value={value || ''}
                            onChange ={(newValue)=>{
                              onChange(newValue ? newValue : null);
                            }}/>
                        );}}/>
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item sx={{boxShadow: '0', padding:'0',  mt: '16px'}}>
                    <CustomInputLabels shrink htmlFor='jobdescription'>Описание вакансии</CustomInputLabels>
                    <Controller
                      name='jobdescription'
                      control={control}
                      render={({field})=>{
                        const {onChange, value} = field;
                        return (
                          <CssTextField
                            size='small'
                            fullWidth
                            id='jobdescription'
                            multiline
                            rows={3}
                            value={value || ''}
                            onChange ={(newValue)=>{
                              onChange(newValue ? newValue : null);
                            }}/>
                        );}}/>
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item sx={{boxShadow: '0', padding:'0',  mt: '16px'}}>
                    <CustomInputLabels shrink htmlFor='conditions'>Обязанности и условия</CustomInputLabels>
                    <Controller
                      name='conditions'
                      control={control}
                      render={({field})=>{
                        const {onChange, value} = field;
                        return (
                          <CssTextField
                            size='small'
                            fullWidth
                            id='jconditions'
                            multiline
                            rows={3}
                            value={value || ''}
                            onChange ={(newValue)=>{
                              onChange(newValue ? newValue : null);
                            }}/>
                        );}}/>
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item sx={{boxShadow: '0', padding:'0',  mt: '16px'}}>
                    <CustomInputLabels shrink htmlFor='selectionssteps'>Этапы отбора</CustomInputLabels>
                    <Controller
                      name='selectionssteps'
                      control={control}
                      render={({field})=>{
                        const {onChange, value} = field;
                        return (
                          <CssTextField
                            size='small'
                            fullWidth
                            id='selectionssteps'
                            multiline
                            rows={3}
                            value={value || ''}
                            onChange ={(newValue)=>{
                              onChange(newValue ? newValue : null);
                            }}/>
                        );}}/>
                  </Item>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{display: 'flex', justifyContent:'space-between', margin: '40px 0'}}>
              <CustomizedButton/>
              <CustomizedButton/>
            </Box>
          </form>
          <SvgIconClass onClick={onClose} disableRipple><SvgIcon sx={{width: '100%', height: '100%'}} component={closeicon} inheritViewBox></SvgIcon></SvgIconClass>
        </ModalForForm>
      ): (
        <ModalForForm open={open} onClose={onClose} step={step}>
          <Typography sx={{fontSize: '34px'}} variant='h2'>Создание вакансии</Typography>
          <Box sx={{display: 'flex', gap: '20px', mt: '40px'}}>
            <Typography sx={{fontSize: '18px', borderRadius: '12px', backgroundColor: `${step===1 ? '#FFCE92' : '#DDE0E4' }` , p: '8px'}} variant='h3'>Шаг 1</Typography>
            <Typography sx={{fontSize: '18px', borderRadius: '12px', backgroundColor: `${step!==1 ? '#FFCE92' : '#DDE0E4' }`, p: '8px'}} variant='h3'>Шаг 2</Typography>
          </Box>
          <form noValidate onSubmit={handleSubmit(onSubmitSecondStep)}>
            <Box sx={{ width: '100%' }}>
              <Grid sx={{padding:'0', margin: '20px 0 0 0', width: '100%', rowGap: '4px'}} container>
                <Grid sx={{padding:'0'}} item xs={6}>
                  <Item sx={{boxShadow: '0', padding:'0 12px 0 0'}}>
                    <CustomInputLabels  shrink htmlFor='schedule'>График работы</CustomInputLabels>
                    <Controller
                      rules ={{required: 'Заполните обязательное поле'}}
                      name='schedule'
                      control = {control}
                      render={({field, fieldState: {error}})=>{
                        const {onChange, value, ref} = field;
                        return (
                          <>
                            <CssAutocomplete
                              sx={{backgroundColor: `${value ?'white':'#FFF9D3'}` }}
                              fullWidth
                              value={value ? workSchedule.find((option)=>{
                                return value === option;
                              }) ?? null
                                : null}
                              onChange ={(event: any, newValue)=>{
                                onChange(newValue ? newValue: null);
                              }}
                              size='small'
                              selectOnFocus
                              disablePortal
                              id='schedule'
                              options={workSchedule}
                              renderInput={(params) => <TextField placeholder='Например, «Удаленная работа»' {...params} inputRef={ref}/>}
                            />
                            <span style={{color: 'red', height: '16px', textAlign: 'left', width: '100%', display: 'block', fontSize: '11px'}}>{error ? error.message : null}</span>
                          </>);
                      }}/>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item sx={{boxShadow: '0', padding:'0 0 0 12px'}}>
                    <CustomInputLabels  shrink htmlFor='busy'>Специализация</CustomInputLabels>
                    <Controller
                      rules ={{required: 'Заполните обязательное поле'}}
                      name='busy'
                      control = {control}
                      render={({field, fieldState: {error}})=>{
                        const {onChange, value, ref} = field;
                        return (
                          <>
                            <CssAutocomplete
                              value={value ? busyList.find((option)=>{
                                return value === option;
                              }) ?? null
                                : null}
                              onChange ={(event: any, newValue)=>{
                                onChange(newValue ? newValue: null);
                              }}
                              size='small'
                              selectOnFocus
                              disablePortal
                              id='busy'
                              options={busyList}
                              fullWidth
                              sx={{backgroundColor: `${value ?'white':'#FFF9D3'}` }}
                              renderInput={(params) => <TextField placeholder='Например, «Полная»' {...params} inputRef={ref}/>}
                            />
                            <span style={{color: 'red', height: '16px', textAlign: 'left', width: '100%', display: 'block', fontSize: '11px'}}>{error ? error.message : null}</span>
                          </>);
                      }}/>
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item sx={{boxShadow: '0', padding:'0'}}>
                    <CustomInputLabels shrink htmlFor='hardSkillListImport'>Важные hard-скилы</CustomInputLabels>
                    <Controller
                      rules ={{required: 'Заполните обязательное поле'}}
                      name='hardSkillListImport'
                      control = {control}
                      render={({field, fieldState: {error}})=>{
                        const {onChange, value, ref} = field;
                        return (
                          <>
                            <Autocomplete
                              options={hardSkillListImport}
                              multiple
                              getOptionLabel={(option) => option}
                              value={value || []}
                              filterSelectedOptions
                              onChange ={(event: any, newValue)=>{
                                onChange(newValue.length<=3 ? newValue: [newValue[0], newValue[1], value[2]]);
                              }}
                              size='small'
                              selectOnFocus
                              disablePortal
                              id='hardSkillListImport'
                              sx={{ width: '100%', backgroundColor: '#FFF9D3' }}
                              renderInput={(params) => <TextField placeholder='Выберите 3 самых приоритетных скила' {...params} inputRef={ref}/>}
                            />
                            <span style={{color: 'red', height: '16px', textAlign: 'left', width: '100%', display: 'block', fontSize: '11px'}}>{error ? error.message : null}</span>
                          </>);
                      }}/>
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item sx={{boxShadow: '0', padding:'0'}}>
                    <CustomInputLabels shrink htmlFor='hardSkillListAdd'>Дополнительные hard-скилы</CustomInputLabels>
                    <Controller
                      name='hardSkillListAdd'
                      control = {control}
                      render={({field})=>{
                        const {onChange, value} = field;
                        return (
                          <>
                            <Autocomplete
                              options={hardSkillListAdd}
                              multiple
                              getOptionLabel={(option) => option}
                              value={value || []}
                              filterSelectedOptions
                              onChange ={(event: any, newValue)=>{
                                onChange(newValue.length<=8 ? newValue: [newValue[0], newValue[1],newValue[2], newValue[3], newValue[4], newValue[5], newValue[6], value[7]]);
                              }}
                              size='small'
                              selectOnFocus
                              disablePortal
                              id='hardSkillListAdd'
                              sx={{ width: '100%' }}
                              renderInput={(params) => <TextField placeholder='Выберите 8 дополнительных скилов' {...params}/>}
                            />
                          </>);
                      }}/>
                  </Item>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{display: 'flex', justifyContent:'space-between', margin: '40px 0'}}>
              <CustomizedButton/>
              <CustomizedButton />
            </Box>
          </form>
          <SvgIconClass onClick={onClose} disableRipple><SvgIcon sx={{width: '100%', height: '100%'}} component={closeicon} inheritViewBox></SvgIcon></SvgIconClass>
        </ModalForForm>
      )}
    </>
  );
};

// const onSubmitFirstStep: SubmitHandler<ISignUpFields> = () => {
//   const userEmail = getValues('email');
//   const userPassword = getValues('password');
//   dispatch(checkEmail(userEmail))
//     .unwrap()
//     .then(() => {
//       setUserData({
//         email: userEmail,
//         password: userPassword,
//         fav_genres: [],
//       });
//       setStep(step + 1);
//     })
//     .catch((err) => {
//       console.log(' dispatch(checkEmail(userEmail)) res', err);
//       setAuthError(true);
//     });
// };

// const onSubmitSecondStep = () => {
//   dispatch(signUpUser(userData))
//     .unwrap()
//     .then(() => {
//       setStep(step + 1);
//     })
//     .catch((err) => {
//       console.log(' dispatch(signUpUser(userData)) res', err);
//     });
// };