import { ErrorPage } from '../shared/ErrorPage/ErrorPage';
import image from '../../images/404_large_chart.png';
import { NOT_FOUND_SUBTITLE, NOT_FOUND_TITLE } from '../../utils/constants';

export const NotFoundPage = () => {
  return(
    <ErrorPage
      title={NOT_FOUND_TITLE}
      subtitle={NOT_FOUND_SUBTITLE}
      imageSrc={image}
    />
  );
};
