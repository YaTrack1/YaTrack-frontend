import Slider from '../../../features/Slider/Slider';
// массив заглушка !!
import { EXPERIENCE_DATA } from '../../../utils/hardcode';

export const Experience = () => {
  return (
    <div>
      <Slider data={EXPERIENCE_DATA} />
    </div>
  );
};
