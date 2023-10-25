import { NotificationLayout } from '../shared/NotificationLayout/NotificationLayout';
import image from '../../images/large_chart_with_like.png';
import { NO_FAVORITES_NOTICE } from '../../utils/constants';

export const NoFavoritesNotice = () => {
  return(
    <NotificationLayout
      title={NO_FAVORITES_NOTICE.TITLE}
      subtitle={NO_FAVORITES_NOTICE.SUBTITLE}
      imageSrc={image}
    />
  );
};