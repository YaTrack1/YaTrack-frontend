import styles from './Diargam.styles.scss'
export const Diagram = () => {

  const styleOne = {
    background: 'conic-gradient(30deg)',
  };

  return (
    <div className={styles.diagramWrapper}>
      <div style={styleOne} className={styles.circleOne}></div>
      <div className={styles.circleTwo}></div>
      <div className={styles.circleThree}></div>
      <div className={styles.circleFour}></div>
    </div>
  )
}
