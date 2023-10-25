import styles from './NotificationLayout.module.scss';

export interface NotificationLayoutProps {
  [key: string]: string;
}

export const NotificationLayout = ({ title, subtitle, imageSrc }: NotificationLayoutProps) => {

  return(
    <section className={styles.container}>
      <div className={styles.leftBlock}>
        <div className={styles.information}>
          <h2 className={styles.information_title}>{title}</h2>
          <p className={styles.information_subtitle} dangerouslySetInnerHTML={{ __html: subtitle }}></p>
        </div>
        {/* <button></button> <------ !! тут кнопка*/}
      </div>
      <div className={styles.rightBlock}>
        <img src={imageSrc} alt={title}/>
      </div>
    </section>
  );
};