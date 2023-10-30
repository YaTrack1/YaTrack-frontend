import { SectionWrapperType } from './types';
import styles from './SectionWrapper.module.scss';
export const SectionWrapper = ({ title, children }: SectionWrapperType) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.section__title}>{title}</h2>
      {children}
    </section>
  );
};
