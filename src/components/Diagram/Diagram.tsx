import styles from './Diargam.module.scss';

interface IDiagram {
  kind: string;
}

export const Diagram = ({ kind }: IDiagram) => {
  const rateOne = 1;
  const paintOne = 0.75 * rateOne * 100 + '%';
  const rateTwo = 0.8;
  const paintTwo = 0.75 * rateTwo * 100 + '%';
  const rateThree = 0.3;
  const paintThree = 0.75 * rateThree * 100 + '%';

  const total = ((rateOne + rateTwo + rateThree) / 3) * 100;

  const styleOne = {
    background: `conic-gradient(rgba(255, 206, 146, 1) 0 ${paintOne}, white ${paintOne} 100%)`,
  };
  const styleTwo = {
    background: `conic-gradient(rgba(127, 103, 210, 1) 0 ${paintTwo}, white ${paintTwo} 100%)`,
  };
  const styleThree = {
    background: `conic-gradient(rgba(135, 204, 158, 1) 0 ${paintThree}, white ${paintThree} 100%)`,
  };

  return (
    <div
      className={[styles['diagram'], styles[`diagram_kind_${kind}`]].join(' ')}
    >
      <div
        className={[
          styles['textWrapper'],
          styles[`textWrapper_kind_${kind}`],
        ].join(' ')}
      >
        <p className={[styles['text'], styles[`text_kind_${kind}`]].join(' ')}>
          Веб-конструкторы
        </p>
        <p className={[styles['text'], styles[`text_kind_${kind}`]].join(' ')}>
          Типографика
        </p>
        <p className={[styles['text'], styles[`text_kind_${kind}`]].join(' ')}>
          Анимация
        </p>
      </div>
      <div
        className={[
          styles['diagramWrapper'],
          styles[`diagramWrapper_kind_${kind}`],
        ].join(' ')}
      >
        <div
          className={[
            styles['circleOne'],
            styles[`circleOne_kind_${kind}`],
          ].join(' ')}
          style={styleOne}
        ></div>
        <div
          className={[
            styles['circleTwo'],
            styles[`circleTwo_kind_${kind}`],
          ].join(' ')}
          style={styleTwo}
        ></div>
        <div
          className={[
            styles['circleThree'],
            styles[`circleThree_kind_${kind}`],
          ].join(' ')}
          style={styleThree}
        ></div>
        <div
          className={[
            styles['circleFour'],
            styles[`circleFour_kind_${kind}`],
          ].join(' ')}
        >
          <h3
            className={[styles['total'], styles[`total_kind_${kind}`]].join(
              ' '
            )}
          >
            {total}%
          </h3>
        </div>
      </div>
    </div>
  );
};
