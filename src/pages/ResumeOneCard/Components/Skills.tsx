import {SectionWrapper} from '../../../components/shared/SectionWrapper/SectionWrapper';
import styles from '../ResumeOneCard.module.scss';
import React from 'react';
import { Button, Tooltip, styled } from '@mui/material';

export const Skills = () => {
  const skillList = [{skill: 'Figma', status: 20}, {skill: 'Figma', status: 80}, {skill: 'Figma', status: 70}, {skill: 'НавыкНавыкНавык', status: 20}, {skill: 'Figma', status: 70}, {skill: 'НавыкНавыкНавык', status: 20}];
  return (
    <SectionWrapper title='Навыки'>
      <div className={styles.skills__wrapper}>
        {skillList.map((i)=>(
          <Tooltip componentsProps={{
            tooltip: {
              sx: {
                bgcolor: '#ACCCFF',
                boxShadow: ' 0px 4px 6px 0px rgba(176, 190, 197, 0.30), 0px 8px 24px 0px rgba(176, 190, 197, 0.30)',
                borderRadius: '12px',
                color: 'black',
              },
            },
          }} title={`Прокачан более${i.status}%`} placement='bottom-end'>
            <Button disableRipple disableElevation sx={{'&:hover': {backgroundColor: '#ACCCFF', boxShadow: 'none'}, textTransform: 'none', color: 'black', ml: '12px',mb: '12px',borderRadius: '12px', backgroundColor: `${i.status>75 ? '#C2E5CE' : `${i.status>50 ? '#FFF9D3' : '#FFDDE5'}`}` }}>{i.skill}</Button>
          </Tooltip>
        ))}
      </div>
    </SectionWrapper>
  );
};
