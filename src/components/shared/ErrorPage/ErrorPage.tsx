import styles from './ErrorPage.module.scss';

export interface ErrorPageProps {
  [key: string]: string;
}

export const ErrorPage = ({ title, subtitle, imageSrc }: ErrorPageProps) => {

  return(
    <section className={styles.container}>
      <div className={styles.leftBlock}>
        <div className={styles.information}>
          <h2 className={styles.information_title}>{title}</h2>
          <p className={styles.information_subtitle}>{subtitle}</p>
        </div>
        {/* <button></button> <------ !! тут кнопка*/}
      </div>
      <div className={styles.rightBlock}>
        <img src={imageSrc} alt={title}/>
      </div>
    </section>
  );
};