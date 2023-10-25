import styles from '../ResumeOneCard.module.scss';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import Slider from 'react-slick';
import {Card} from '../../../components/shared/Card/Card';
import { FC } from 'react';
export interface ICompilationsTwo {
	id?: number;
	title?: string;
	description?: string;
	experienceList?: any;
}
export const Experience: FC<ICompilationsTwo> = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const experienceList = [{},{}, {},{}, {},{}, {},{}, {},{}]
  return (
    <div>
      <div>your content</div>
      <div>your content</div>
      <div>your content</div>
    </div>
  );
};
