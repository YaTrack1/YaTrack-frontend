import { ReactNode } from 'react';
import styles from './NotificationLayout.module.scss';

export interface NotificationLayoutProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  children?: ReactNode;
}

export const NotificationLayout = ({ title, subtitle, imageSrc, children }: NotificationLayoutProps) => {

  return(
    <section className={styles.container}>
      <div className={styles.leftBlock}>
        <div className={styles.information}>
          <h2 className={styles.information_title}>{title}</h2>
          <p className={styles.information_subtitle} dangerouslySetInnerHTML={{ __html: subtitle }}></p>
        </div>
        {children}
      </div>
      <div className={styles.rightBlock}>
        <img src={imageSrc} alt={title}/>
      </div>
    </section>
  );
};