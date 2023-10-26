import { useEffect, useState } from 'react';
import styles from './Slider.module.scss';
import SliderList from './SliderList/SliderList';

interface SliderProps {
  images: string[]
}

function Slider({ images }: SliderProps) {
  const [slides, setSlides] = useState<string[]>();
  const [currentPos, setCurrentPos] = useState<number>(0);

  useEffect(() => {
    setSlides(images.slice(currentPos, currentPos + 4));
  }, [currentPos]);

  const changeSlides = (direction: number) => {
    setCurrentPos(currentPos + direction);
  };

  return (
    <div className={styles.slider}>
      <SliderList slides={slides} />

      <div className={styles.arrows}>
        {
          currentPos > 0
          && <button type='button' className={styles.arrows_prev} onClick={() => changeSlides(-1)}> </button>
        }
        {
          currentPos + 3 < images.length
          && <button type='button' className={styles.arrows_next} onClick={() => changeSlides(1)}> </button>
        }
      </div>
    </div>
  );
}

export default Slider;
