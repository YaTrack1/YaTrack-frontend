import styles from '../ResumeOneCard.module.scss';
import React from 'react';

interface EducationData {
  title: string;
  years: string;
  grade: string;
}

interface EducationProps {
  data: {
    mainEdu: EducationData;
    additionalEdu: EducationData;
  };
}

export const Education = ({ data }: EducationProps) => {
  const { mainEdu, additionalEdu } = data;
  return (
    <section className={styles.education_container}>
      <h2 className={styles.education_title}>Образование</h2>
      <div className={styles.education_blocks_wrap}>
        <div className={styles.education_block}>
          <h3 className={styles.education_subtitle}>Высшее</h3>
          <p className={styles.education_text}>{mainEdu.title}</p>
          <p className={styles.education_text}>{mainEdu.years}</p>
          <p className={styles.education_text}>{mainEdu.grade}</p>
        </div>
        <div className={styles.education_block}>
          <h3 className={styles.education_subtitle}>Дополнительное</h3>
          <p className={styles.education_text}>{additionalEdu.title}</p>
          <p className={styles.education_text}>{additionalEdu.years}</p>
          <p className={styles.education_text}>{additionalEdu.grade}</p>
        </div>
      </div>
    </section>
  );
};
