import * as React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Button } from '@mui/material';
import { CreateVacancyForm } from '../../CreateVacancyForm/CreateVacancyForm';
import TextField from '@mui/material/TextField';
import  styles from './CreateVacancyFormSteps.module.scss';

interface ISignForm {
  jobtitle: string;
  specialization?: string;
  jobdescription?: string;
  responsibilities?: string;
  city?: string;
  conditions?: string;
  selectionssteps?: string;
}

export const CreateVacancyFormSteps: React.FC = () => {
  const {control} = useForm<ISignForm>();
  const onSubmit: SubmitHandler<ISignForm> = (data) => console.log(styles);
  return (
    <CreateVacancyForm>

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
        <Button type='submit' variant='contained' disableElevation={true}  disableRipple className={styles.button} >Далее</Button>

    </CreateVacancyForm>
  )
}