import {El} from '../Elements';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <El.Circle>
        <div className={styles.avatar}>&nbsp;</div>
      </El.Circle>

      <div className="heading1">Umesh Kadam</div>
      <div className="heading3">Frontend Developer (Typescript & React)</div>

      <El.Frame type="horizontal" />
    </header>
  );
};
