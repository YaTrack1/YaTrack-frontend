import * as React from 'react';
import { useEffect, useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Button, Typography } from '@mui/material';
import { CreateVacancyForm } from '../CreateVacancyForm/CreateVacancyForm';
import TextField from '@mui/material/TextField';
import  styles from './CreateVacancyFormSteps.module.scss';
import { styled, alpha } from '@mui/material/styles';
interface ISignForm {
  jobtitle: string;
  specialization?: string;
  jobdescription?: string;
  responsibilities?: string;
  city?: string;
  conditions?: string;
  selectionssteps?: string;
}
const StyledButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 40,
})
export const CreateVacancyFormSteps: React.FC = () => {
  const {control} = useForm<ISignForm>();
  const [step, setStep] = useState<number>(2);
  const formTitle = (
    <Typography className={styles['create']} variant='h3'>Шаг {step}</Typography>
	 );
  const formButton = (
    <StyledButton type='submit' variant='contained' disableElevation={true}  disableRipple  onClick={() => {step===1?setStep(step + 1):setStep(2)}}>{step===1? 'Далее': 'Создать вакансию'}</StyledButton>
  );
  return (
    <>
      {step === 1 ? (
        <CreateVacancyForm>
          {formTitle}
          <Controller control={control} name='jobtitle' render={({field}) =>(
            <TextField label='Должность' variant='outlined' size='small' fullWidth={true} margin='normal' onChange={(e) => field.onChange(e)} value={field.value || ''}/>
          )} />
          <Controller control={control} name='specialization' render={({field}) =>(
            <TextField label='Специализация' variant='outlined' size='small' fullWidth={true} margin='normal' onChange={(e) => field.onChange(e)} value={field.value || ''}/>
          )} />
          <Controller control={control} name='jobdescription' render={({field}) =>(
            <TextField label='Описание вакансии' variant='outlined' size='small' fullWidth={true} margin='normal' onChange={(e) => field.onChange(e)} value={field.value || ''}/>
          )} />
          <Controller control={control} name='responsibilities' render={({field}) =>(
            <TextField label='Обязанности' variant='outlined' size='small' fullWidth={true} margin='normal' onChange={(e) => field.onChange(e)} value={field.value || ''}/>
          )} />
          <Controller control={control} name='city' render={({field}) =>(
            <TextField label='Город' variant='outlined' size='small' fullWidth={true} margin='normal' onChange={(e) => field.onChange(e)} value={field.value || ''}/>
          )} />
          <Controller control={control} name='conditions' render={({field}) =>(
            <TextField label='Условия' variant='outlined' size='small' fullWidth={true} margin='normal' onChange={(e) => field.onChange(e)} value={field.value || ''}/>
          )} />
          <Controller control={control} name='selectionssteps' render={({field}) =>(
            <TextField label='Этапы отбора' variant='outlined' size='small' fullWidth={true} margin='normal' onChange={(e) => field.onChange(e)} value={field.value || ''}/>
          )} />
          {formButton}

        </CreateVacancyForm>
      ): (
        <CreateVacancyForm>
          {formTitle}
          <Controller control={control} name='jobtitle' render={({field}) =>(
            <TextField label='Должность' variant='outlined' size='small' fullWidth={true} margin='normal' onChange={(e) => field.onChange(e)} value={field.value || ''}/>
          )} />
          <Controller control={control} name='specialization' render={({field}) =>(
            <TextField label='Специализация' variant='outlined' size='small' fullWidth={true} margin='normal' onChange={(e) => field.onChange(e)} value={field.value || ''}/>
          )} />
          <Controller control={control} name='jobdescription' render={({field}) =>(
            <TextField label='Описание вакансии' variant='outlined' size='small' fullWidth={true} margin='normal' onChange={(e) => field.onChange(e)} value={field.value || ''}/>
          )} />
          <Controller control={control} name='responsibilities' render={({field}) =>(
            <TextField label='Обязанности' variant='outlined' size='small' fullWidth={true} margin='normal' onChange={(e) => field.onChange(e)} value={field.value || ''}/>
          )} />
          <Controller control={control} name='city' render={({field}) =>(
            <TextField label='Город' variant='outlined' size='small' fullWidth={true} margin='normal' onChange={(e) => field.onChange(e)} value={field.value || ''}/>
          )} />
          <Controller control={control} name='conditions' render={({field}) =>(
            <TextField label='Условия' variant='outlined' size='small' fullWidth={true} margin='normal' onChange={(e) => field.onChange(e)} value={field.value || ''}/>
          )} />
          <Controller control={control} name='selectionssteps' render={({field}) =>(
            <TextField label='Этапы отбора' variant='outlined' size='small' fullWidth={true} margin='normal' onChange={(e) => field.onChange(e)} value={field.value || ''}/>
          )} />
          {formButton}
          <Button type='button' variant='contained' disableElevation={true}  disableRipple className={styles.button} onClick={() => setStep(step - 1)}>Назад</Button>

        </CreateVacancyForm>
      )}
    </>
  )
}

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