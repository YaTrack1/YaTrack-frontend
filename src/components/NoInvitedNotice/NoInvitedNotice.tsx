import { NotificationLayout } from '../shared/NotificationLayout/NotificationLayout';
import image from '../../images/handshake_large_chart.png';
import { NO_INVITED_NOTICE } from '../../utils/constants';

export const NoInvitedNotice = () => {
  return(
    <NotificationLayout
      title={NO_INVITED_NOTICE.TITLE}
      subtitle={NO_INVITED_NOTICE.SUBTITLE}
      imageSrc={image}
    />
  );
};