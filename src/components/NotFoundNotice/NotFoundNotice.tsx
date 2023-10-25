import { NotificationLayout } from '../shared/NotificationLayout/NotificationLayout';
import image from '../../images/404_large_chart.png';
import { NOT_FOUND_SUBTITLE, NOT_FOUND_TITLE } from '../../utils/constants';

export const NotFoundNotice = () => {
  return(
    <NotificationLayout
      title={NOT_FOUND_TITLE}
      subtitle={NOT_FOUND_SUBTITLE}
      imageSrc={image}
    />
  );
};
