import { NotificationLayout } from '../shared/NotificationLayout/NotificationLayout';
import image from '../../images/500_large chart.png';
import { BAD_GATEWAY } from '../../utils/constants';

export const BadGatewayPage = () => {
  return(
    <NotificationLayout
      title={BAD_GATEWAY.TITLE}
      subtitle={BAD_GATEWAY.SUBTITLE}
      imageSrc={image}
    />
  );
};
