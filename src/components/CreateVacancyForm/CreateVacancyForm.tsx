import { CreateVacancyFormSteps } from '../shared/CreateVacancyFormSteps/CreateVacancyFormSteps';
import Typography from '@mui/material/Typography';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { FC, ReactNode, useEffect } from 'react';
interface IVacancyForm {
	children: ReactNode;
}
export const CreateVacancyForm: FC<IVacancyForm> = ({children}) => {
  interface ISignForm {
    jobtitle: string;
    specialization?: string;
    jobdescription?: string;
    responsibilities?: string;
    city?: string;
    conditions?: string;
    selectionssteps?: string;
  }
  const {handleSubmit} = useForm<ISignForm>();
  const onSubmit: SubmitHandler<ISignForm> = (data) => console.log(data);
  return(
    <>
  <Typography variant='h2'>Создание вакансии</Typography>
      <Typography variant='h3'>Шаг 1</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
          {children}
      </form>
    </>

  )}