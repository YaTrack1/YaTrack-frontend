import { NotificationLayout } from '../shared/NotificationLayout/NotificationLayout';
import image from '../../images/no_candidate_locator.png';
import { NO_CANDIDATE_NOTICE } from '../../utils/constants';

export const NotFoundCandidateNotice = () => {
  return (
    <NotificationLayout
      title={NO_CANDIDATE_NOTICE.TITLE}
      subtitle={NO_CANDIDATE_NOTICE.SUBTITLE}
      imageSrc={image}
    />
  );
};
