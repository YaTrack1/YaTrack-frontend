import { ErrorPage } from '../shared/ErrorPage/ErrorPage';
import image from '../../vendor/images/500_large chart.png';
import { BAD_GATEWAY_SUBTITLE, BAD_GATEWAY_TITLE } from '../../utils/constants';

export const BadGatewayPage = () => {
  return(
    <ErrorPage
      title={BAD_GATEWAY_TITLE}
      subtitle={BAD_GATEWAY_SUBTITLE}
      imageSrc={image}
    />
  );
};