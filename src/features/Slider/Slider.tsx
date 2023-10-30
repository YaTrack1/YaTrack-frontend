import { useEffect, useState } from 'react';
import styles from './Slider.module.scss';
import { ExperienceCard } from '../../components/ExperienceCard/ExperienceCard';

interface ExperienceData {
  title: string;
  period: string;
  years: string;
  duties: string;
}

interface SliderProps {
  data: ExperienceData[]; // Изменено на тип ExperienceData[]
}

function Slider({ data }: SliderProps) {
  const [currentPos, setCurrentPos] = useState(0);
  const slidesPerPage = 4; // Количество отображаемых слайдов
  const maxPos = data.length - slidesPerPage; // Максимальная позиция
  const visibleSlides = data.slice(currentPos, currentPos + slidesPerPage);

  useEffect(() => {
    if (currentPos < 0) {
      setCurrentPos(0);
    }
    if (currentPos > maxPos) {
      setCurrentPos(maxPos);
    }
  }, [currentPos, maxPos]);

  const changeSlides = (direction: number) => {
    setCurrentPos(currentPos + direction);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.header_wrap}>
        <h2 className={styles.title}>Опыт работы</h2>
        <div className={styles.arrows}>
          {currentPos > 0 && (
            <button
              type='button'
              className={styles.arrows_prev}
              onClick={() => changeSlides(-1)}
            />
          )}
          {currentPos < maxPos && (
            <button
              type='button'
              className={styles.arrows_next}
              onClick={() => changeSlides(1)}
            />
          )}
        </div>
      </div>
      <div className={styles.container}>
        {visibleSlides.map((item: ExperienceData) => (
          <ExperienceCard
            key={item.title}
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
