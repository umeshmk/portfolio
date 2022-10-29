import {El} from '../Elements';
import {Slider} from '../Slider';
import styles from './styles.module.scss';

export const Home = () => {
  return (
    <div className={styles.home}>
      <Slider />
      <El.Frame type="horizontal" />
    </div>
  );
};
