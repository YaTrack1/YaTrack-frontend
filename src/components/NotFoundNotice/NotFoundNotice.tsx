import { NotificationLayout } from '../shared/NotificationLayout/NotificationLayout';
import image from '../../images/404_large_chart.png';
import { NOT_FOUND_NOTICE } from '../../utils/constants';

export const NotFoundNotice = () => {
  return (
    <NotificationLayout
      title={NOT_FOUND_NOTICE.TITLE}
      subtitle={NOT_FOUND_NOTICE.SUBTITLE}
      imageSrc={image}
    />
  );
};
