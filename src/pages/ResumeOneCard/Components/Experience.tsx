import styles from '../ResumeOneCard.module.scss';
import React from 'react';
import {Card} from '../../../components/shared/Card/Card';
import { FC } from 'react';
import Slider from '../../../features/Slider/Slider';
// массив заглушка !!
import { EXPERIENCE_DATA } from '../../../utils/hardcode';

export const Experience = () => {
  return (
    <div>
      <Slider data={EXPERIENCE_DATA} />
    </div>
  );
};
