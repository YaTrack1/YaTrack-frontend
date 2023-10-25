import { ErrorPage } from '../../components/shared/ErrorPage/ErrorPage';
import image from '../../images/no_candidate_locator.png';
import { NO_CANDIDATE_SUBTITLE, NO_CANDIDATE_TITLE } from '../../utils/constants';

export const NotFoundPage = () => {
  return(
    <ErrorPage
      title={NO_CANDIDATE_TITLE}
      subtitle={NO_CANDIDATE_SUBTITLE}
      imageSrc={image}
    />
  );
};