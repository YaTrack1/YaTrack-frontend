import { NotificationLayout } from '../shared/NotificationLayout/NotificationLayout';
import image from '../../images/500_large chart.png';
import { BAD_GATEWAY_SUBTITLE, BAD_GATEWAY_TITLE } from '../../utils/constants';

export const BadGatewayPage = () => {
  return(
    <NotificationLayout
      title={BAD_GATEWAY_TITLE}
      subtitle={BAD_GATEWAY_SUBTITLE}
      imageSrc={image}
    />
  );
};
