import { SectionWrapper } from '../../../components/shared/SectionWrapper/SectionWrapper';
import styles from '../ResumeOneCard.module.scss';
import React from 'react';
import { Button, Tooltip } from '@mui/material';

export const Skills = () => {
  const skillList = [
    { skill: 'Figma', status: 20 },
    { skill: 'CJM', status: 80 },
    { skill: 'Глубинное интервью', status: 70 },
    { skill: 'Adobe Photoshop', status: 20 },
    { skill: 'User Stories', status: 70 },
    { skill: 'A/B-тестирование', status: 20 },
  ];
  return (
    <SectionWrapper title='Навыки'>
      <div className={styles.skills__wrapper}>
        {skillList.map((i) => (
          <Tooltip
            key={i.skill}
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: '#ACCCFF',
                  boxShadow:
                    ' 0px 4px 6px 0px rgba(176, 190, 197, 0.30), 0px 8px 24px 0px rgba(176, 190, 197, 0.30)',
                  borderRadius: '12px',
                  color: 'black',
                },
              },
            }}
            title={`Прокачан более${i.status}%`}
            placement='bottom-end'
          >
            <Button
              disableRipple
              disableElevation
              sx={{
                '&:hover': { backgroundColor: '#ACCCFF', boxShadow: 'none' },
                textTransform: 'none',
                color: 'black',
                ml: '12px',
                mb: '12px',
                borderRadius: '12px',
                backgroundColor: `${
                  i.status > 75
                    ? '#C2E5CE'
                    : `${i.status > 50 ? '#FFF9D3' : '#FFDDE5'}`
                }`,
              }}
            >
              {i.skill}
            </Button>
          </Tooltip>
        ))}
      </div>
    </SectionWrapper>
  );
};
