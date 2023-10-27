import { Key, useEffect, useState } from 'react';
import styles from './Slider.module.scss';
import { ExperienceCard } from '../../components/ExperienceCard/ExperienceCard';

interface ExperienceData {
  title: string;
  period: string;
  years: string;
  duties: string;
}

interface SliderProps {
  data: any;
}

function Slider({ data }: SliderProps) {
  const [slides, setSlides] = useState<string[]>();
  const [currentPos, setCurrentPos] = useState<number>(0);

  useEffect(() => {
    setSlides(data.slice(currentPos, currentPos + 4));
  }, [currentPos]);

  const changeSlides = (direction: number) => {
    setCurrentPos(currentPos + direction);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.header_wrap}>
        <h2 className={styles.title}>Опыт работы</h2>
        <div className={styles.arrows}>
          {
            currentPos > 0
            && <button type='button' className={styles.arrows_prev} onClick={() => changeSlides(-1)}> </button>
          }
          {
            currentPos + 3 < data.length
            && <button type='button' className={styles.arrows_next} onClick={() => changeSlides(1)}> </button>
          }
        </div>
      </div>
      {/* рендер карточек с опытом */}
      <div className={styles.container}>
        {data.map((item: ExperienceData, index: Key | null | undefined) => (
          <ExperienceCard
            key={index}
            title={item.title}
            period={item.period}
            experince={item.years}
            duties={item.duties}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
