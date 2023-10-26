import styles from '../ResumeOneCard.module.scss';
import React from 'react';
import {Card} from '../../../components/shared/Card/Card';
import { FC } from 'react';
import Slider from '../../../features/Slider/Slider';

export const Experience = () => {
  const experienceList = ['a', 'b', 'c', 'd', 'e', 'f']
  return (
    <div>
<Slider images={experienceList} />
    </div>
  );
};
