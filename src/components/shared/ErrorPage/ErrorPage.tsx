import React from 'react';

import styles from './ErrorPage.module.scss';

export interface ErrorPageProps {
  [key: string]: string;
}

export const ErrorPage = ({ title, subtitle, imageSrc }: ErrorPageProps) => {

  return(
    <section className={styles.container}>
      <div className={styles}>
        <div className={styles.information}>
          <h2 className={styles.information_title}></h2>
          <p className={styles.information_subtitle}></p>
          {/* <button></button> <------ !! тут кнопка*/}
        </div>
      </div>
      <div className={styles}></div>
    </section>
  );
};