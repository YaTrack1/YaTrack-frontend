import * as React from 'react';
import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Typography,
  TextField,
  IconButton,
  SvgIcon,
  Box,
  InputLabel,
  Autocomplete,
  Grid,
  Paper,
} from '@mui/material';
import { ModalForForm } from '../UI/ModalForForm/ModalForForm';
import { styled } from '@mui/material/styles';
import { ReactComponent as closeicon } from '../../../images/close.svg';
import { CustomizedButton } from '../UI/CustomizedButton/CustomizedButton';
import { ISignFormVacancyCreator } from './TypesChangeVacancyForm';
import { ICreateVacancyFormSteps } from './TypesChangeVacancyForm';
import {
  WORK_SCHEDULE,
  BUSY_LIST,
  HARD_SKILL_LIST_IMPORTANT,
  HARD_LIST_SKILL_ADDITIONAL,
} from '../../../utils/constants';

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
const CustomInputLabels = styled(InputLabel)({
  fontSize: '13px',
  textAlign: 'left',
  color: '#1A1B22',
});
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  width: '100%',
  color: theme.palette.text.secondary,
}));
const SvgIconClass = styled(IconButton)({
  padding: '0',
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

export const ChangeVacancyForm: FC<ICreateVacancyFormSteps> = ({
  open,
  onClose,
  vacancyForRed,
}) => {
  const { handleSubmit, control } = useForm<ISignFormVacancyCreator>();
  const onSubmitRedForm = (data: Object) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  const specializationOptions = [
    'Дизайн',
    'Программирование',
    'Менеджмент',
    'Волшебник',
    'Фулстак',
    'Мать',
    'Помогите',
    'Как я здесь оказался',
  ];

  return (
    <ModalForForm open={open} onClose={onClose}>
      <Typography sx={{ fontSize: '34px', mb: '40px' }} variant='h2'>
        Редактирование вакансии
      </Typography>
      <form noValidate onSubmit={handleSubmit(onSubmitRedForm)}>
        <Box sx={{ width: '100%' }}>
          <Grid
            sx={{ padding: '0', margin: '0', width: '100%', rowGap: '4px' }}
            container
          >
            <Grid sx={{ padding: '0' }} item xs={6}>
              <Item sx={{ boxShadow: '0', padding: '0 12px 0 0' }}>
                <CustomInputLabels shrink htmlFor='jobtitle'>
                  Должность
                </CustomInputLabels>
                <Controller
                  name='jobtitle'
                  rules={{ required: 'Заполните обязательное поле' }}
                  control={control}
                  render={({ field, fieldState: { error } }) => {
                    const { onChange, value, ref } = field;
                    return (
                      <>
                        <CssTextField
                          inputRef={ref}
                          size='small'
                          fullWidth
                          sx={{
                            backgroundColor: `${value ? 'white' : '#FFF9D3'}`,
                          }}
                          id='jobtitle'
                          placeholder='Например, «UX/UI дизайнер»'
                          value={value || ''}
                          onChange={(newValue) => {
                            onChange(newValue ? newValue : null);
                          }}
                        />
                        <span
                          style={{
                            color: 'red',
                            height: '16px',
                            textAlign: 'left',
                            width: '100%',
                            display: 'block',
                            fontSize: '11px',
                          }}
                        >
                          {error ? error.message : null}
                        </span>
                      </>
                    );
                  }}
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item sx={{ boxShadow: '0', padding: '0 0 0 12px' }}>
                <CustomInputLabels shrink htmlFor='specialization'>
                  Специализация
                </CustomInputLabels>
                <Controller
                  rules={{ required: 'Заполните обязательное поле' }}
                  name='specialization'
                  control={control}
                  render={({ field, fieldState: { error } }) => {
                    const { onChange, value, ref } = field;
                    return (
                      <>
                        <CssAutocomplete
                          value={
                            value
                              ? specializationOptions.find((option) => {
                                  return value === option;
                                }) ?? null
                              : null
                          }
                          onChange={(event: any, newValue) => {
                            onChange(newValue ? newValue : null);
                          }}
                          sx={{
                            backgroundColor: `${value ? 'white' : '#FFF9D3'}`,
                          }}
                          size='small'
                          selectOnFocus
                          disablePortal
                          id='specialization'
                          options={specializationOptions}
                          fullWidth
                          renderInput={(params) => (
                            <TextField
                              placeholder='Например, «Дизайн»'
                              {...params}
                              inputRef={ref}
                            />
                          )}
                        />
                        <span
                          style={{
                            color: 'red',
                            height: '16px',
                            textAlign: 'left',
                            width: '100%',
                            display: 'block',
                            fontSize: '11px',
                          }}
                        >
                          {error ? error.message : null}
                        </span>
                      </>
                    );
                  }}
                />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item sx={{ boxShadow: '0', padding: '0' }}>
                <CustomInputLabels shrink htmlFor='city'>
                  Город
                </CustomInputLabels>
                <Controller
                  name='city'
                  control={control}
                  render={({ field }) => {
                    const { onChange, value } = field;
                    return (
                      <CssTextField
                        size='small'
                        fullWidth
                        id='city'
                        multiline
                        rows={1}
                        value={value || ''}
                        onChange={(newValue) => {
                          onChange(newValue ? newValue : null);
                        }}
                      />
                    );
                  }}
                />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item sx={{ boxShadow: '0', padding: '0', mt: '16px' }}>
                <CustomInputLabels shrink htmlFor='jobdescription'>
                  Описание вакансии
                </CustomInputLabels>
                <Controller
                  name='jobdescription'
                  control={control}
                  render={({ field }) => {
                    const { onChange, value } = field;
                    return (
                      <CssTextField
                        size='small'
                        fullWidth
                        id='jobdescription'
                        multiline
                        rows={3}
                        value={value || ''}
                        onChange={(newValue) => {
                          onChange(newValue ? newValue : null);
                        }}
                      />
                    );
                  }}
                />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item sx={{ boxShadow: '0', padding: '0', mt: '16px' }}>
                <CustomInputLabels shrink htmlFor='conditions'>
                  Обязанности и условия
                </CustomInputLabels>
                <Controller
                  name='conditions'
                  control={control}
                  render={({ field }) => {
                    const { onChange, value } = field;
                    return (
                      <CssTextField
                        size='small'
                        fullWidth
                        id='jconditions'
                        multiline
                        rows={3}
                        value={value || ''}
                        onChange={(newValue) => {
                          onChange(newValue ? newValue : null);
                        }}
                      />
                    );
                  }}
                />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item sx={{ boxShadow: '0', padding: '0', mt: '16px' }}>
                <CustomInputLabels shrink htmlFor='selectionssteps'>
                  Этапы отбора
                </CustomInputLabels>
                <Controller
                  name='selectionssteps'
                  control={control}
                  render={({ field }) => {
                    const { onChange, value } = field;
                    return (
                      <CssTextField
                        size='small'
                        fullWidth
                        id='selectionssteps'
                        multiline
                        rows={3}
                        value={value || ''}
                        onChange={(newValue) => {
                          onChange(newValue ? newValue : null);
                        }}
                      />
                    );
                  }}
                />
              </Item>
            </Grid>
          </Grid>
          <Grid
            sx={{
              padding: '0',
              margin: '20px 0 0 0',
              width: '100%',
              rowGap: '4px',
            }}
            container
          >
            <Grid sx={{ padding: '0' }} item xs={6}>
              <Item sx={{ boxShadow: '0', padding: '0 12px 0 0' }}>
                <CustomInputLabels shrink htmlFor='schedule'>
                  График работы
                </CustomInputLabels>
                <Controller
                  rules={{ required: 'Заполните обязательное поле' }}
                  name='schedule'
                  control={control}
                  render={({ field, fieldState: { error } }) => {
                    const { onChange, value, ref } = field;
                    return (
                      <>
                        <CssAutocomplete
                          sx={{
                            backgroundColor: `${value ? 'white' : '#FFF9D3'}`,
                          }}
                          fullWidth
                          value={
                            value
                              ? WORK_SCHEDULE.find((option: string) => {
                                  return value === option;
                                }) ?? null
                              : null
                          }
                          onChange={(event: any, newValue) => {
                            onChange(newValue ? newValue : null);
                          }}
                          size='small'
                          selectOnFocus
                          disablePortal
                          id='schedule'
                          options={WORK_SCHEDULE}
                          renderInput={(params) => (
                            <TextField
                              placeholder='Например, «Удаленная работа»'
                              {...params}
                              inputRef={ref}
                            />
                          )}
                        />
                        <span
                          style={{
                            color: 'red',
                            height: '16px',
                            textAlign: 'left',
                            width: '100%',
                            display: 'block',
                            fontSize: '11px',
                          }}
                        >
                          {error ? error.message : null}
                        </span>
                      </>
                    );
                  }}
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item sx={{ boxShadow: '0', padding: '0 0 0 12px' }}>
                <CustomInputLabels shrink htmlFor='busy'>
                  Специализация
                </CustomInputLabels>
                <Controller
                  rules={{ required: 'Заполните обязательное поле' }}
                  name='busy'
                  control={control}
                  render={({ field, fieldState: { error } }) => {
                    const { onChange, value, ref } = field;
                    return (
                      <>
                        <CssAutocomplete
                          value={
                            value
                              ? BUSY_LIST.find((option: string) => {
                                  return value === option;
                                }) ?? null
                              : null
                          }
                          onChange={(event: any, newValue) => {
                            onChange(newValue ? newValue : null);
                          }}
                          size='small'
                          selectOnFocus
                          disablePortal
                          id='busy'
                          options={BUSY_LIST}
                          fullWidth
                          sx={{
                            backgroundColor: `${value ? 'white' : '#FFF9D3'}`,
                          }}
                          renderInput={(params) => (
                            <TextField
                              placeholder='Например, «Полная»'
                              {...params}
                              inputRef={ref}
                            />
                          )}
                        />
                        <span
                          style={{
                            color: 'red',
                            height: '16px',
                            textAlign: 'left',
                            width: '100%',
                            display: 'block',
                            fontSize: '11px',
                          }}
                        >
                          {error ? error.message : null}
                        </span>
                      </>
                    );
                  }}
                />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item sx={{ boxShadow: '0', padding: '0' }}>
                <CustomInputLabels shrink htmlFor='hardSkillListImport'>
                  Важные hard-скилы
                </CustomInputLabels>
                <Controller
                  rules={{ required: 'Заполните обязательное поле' }}
                  name='hardSkillListImport'
                  control={control}
                  render={({ field, fieldState: { error } }) => {
                    const { onChange, value, ref } = field;
                    return (
                      <>
                        <Autocomplete
                          options={HARD_SKILL_LIST_IMPORTANT}
                          multiple
                          getOptionLabel={(option) => option}
                          value={value || []}
                          filterSelectedOptions
                          onChange={(event: any, newValue) => {
                            onChange(
                              newValue.length <= 3
                                ? newValue
                                : [newValue[0], newValue[1], value[2]]
                            );
                          }}
                          size='small'
                          selectOnFocus
                          disablePortal
                          id='hardSkillListImport'
                          sx={{ width: '100%', backgroundColor: '#FFF9D3' }}
                          renderInput={(params) => (
                            <TextField
                              placeholder='Выберите 3 самых приоритетных скила'
                              {...params}
                              inputRef={ref}
                            />
                          )}
                        />
                        <span
                          style={{
                            color: 'red',
                            height: '16px',
                            textAlign: 'left',
                            width: '100%',
                            display: 'block',
                            fontSize: '11px',
                          }}
                        >
                          {error ? error.message : null}
                        </span>
                      </>
                    );
                  }}
                />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item sx={{ boxShadow: '0', padding: '0' }}>
                <CustomInputLabels shrink htmlFor='hardSkillListAdd'>
                  Дополнительные hard-скилы
                </CustomInputLabels>
                <Controller
                  name='hardSkillListAdd'
                  control={control}
                  render={({ field }) => {
                    const { onChange, value } = field;
                    return (
                      <>
                        <Autocomplete
                          options={HARD_LIST_SKILL_ADDITIONAL}
                          multiple
                          getOptionLabel={(option) => option}
                          value={value || []}
                          filterSelectedOptions
                          onChange={(event: any, newValue) => {
                            onChange(
                              newValue.length <= 8
                                ? newValue
                                : [
                                    newValue[0],
                                    newValue[1],
                                    newValue[2],
                                    newValue[3],
                                    newValue[4],
                                    newValue[5],
                                    newValue[6],
                                    value[7],
                                  ]
                            );
                          }}
                          size='small'
                          selectOnFocus
                          disablePortal
                          id='hardSkillListAdd'
                          sx={{ width: '100%' }}
                          renderInput={(params) => (
                            <TextField
                              placeholder='Выберите 8 дополнительных скилов'
                              {...params}
                            />
                          )}
                        />
                      </>
                    );
                  }}
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '40px 0',
          }}
        >
          <CustomizedButton text='Сохранить' />
          <CustomizedButton text='Удалить' />
        </Box>
      </form>
      <SvgIconClass onClick={onClose} disableRipple>
        <SvgIcon
          sx={{ width: '100%', height: '100%' }}
          component={closeicon}
          inheritViewBox
        ></SvgIcon>
      </SvgIconClass>
    </ModalForForm>
  );
};
