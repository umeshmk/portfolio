import styles from './styles.module.scss';
import {githubRepos} from './data';
import {El} from '../Elements';

export const Projects = () => {
  return (
    <div className={styles.projects}>
      {githubRepos.map((v) => {
        return (
          <div className={styles.circleBox} key={v.name}>
            <El.Circle>
              <div className="item">{v.name}</div>
            </El.Circle>
          </div>
        );
      })}
    </div>
  );
};
