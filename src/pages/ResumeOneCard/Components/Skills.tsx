import {SectionWrapper} from '../../../components/shared/SectionWrapper/SectionWrapper';
import styles from '../ResumeOneCard.module.scss';
import React from 'react';
import { Button, Tooltip } from '@mui/material';
export const Skills = () => {
  return (
    <SectionWrapper title='Навыки'>
      <div className={styles.skills__wrapper}>
        <Tooltip title='Add' placement='bottom-end'>
          <Button>Figma</Button>
        </Tooltip>
        <Tooltip title='Add' placement='bottom-end'>
          <Button>Figma</Button>
        </Tooltip>
        <Tooltip title='Add' placement='bottom-end'>
          <Button>Figma</Button>
        </Tooltip>
      </div>
    </SectionWrapper>
  );
}
