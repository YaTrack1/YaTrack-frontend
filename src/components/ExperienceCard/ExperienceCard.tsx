import { useState } from 'react';
import styles from './ExperienceCard.module.scss';

// interface ExperienceCardProps {
//   title: string;
//   period: string;
//   experince: string;
//   duties: string;
// }

export const ExperienceCard = () => {
  const [ isClicked, setIsClicked ] = useState(false);
  const containerClass = `${styles.container} ${isClicked && styles.containerLong}`;
  const hiddenBlockClass = `${styles.text} ${!isClicked && styles.hidden_block}`;
  const buttonClass = `${styles.arrow_down} ${isClicked && styles.arrow_up}`;

  const toggleButton = () => setIsClicked(!isClicked);

  // будущие пропсы, а сейчас заглушки
  const title = 'Графический дизайнер';
  const period = 'январь 2020 - январь 2022';
  const experince = '2 года';
  const duties: string = '1. Исследование и анализ целевой аудитории, конкурентов и отрасли. 2. Разработка концепций и идей для визуальных решений, включая логотипы, типографику, изображения, цвета, шаблоны и т.д. 3. Создание макетов и прототипов для печати и цифровых медиа.';

  return(
    <div className={containerClass}>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.subtitle_wrap}>
          <p className={styles.text}>{period}</p>
          <p className={styles.text}>{experince}</p>
        </div>
      </div>
      <div>
        <div className={styles.button_wrap}>
          <h3 className={styles.title}>Основные обязанности</h3>
          <button className={buttonClass} onClick={toggleButton}/>
        </div>
        <p className={hiddenBlockClass}>{duties}</p>
      </div>
    </div>
  );
};