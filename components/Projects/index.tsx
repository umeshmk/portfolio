import styles from './styles.module.scss';
import {githubRepos} from './data';
import {El} from '../Elements';

export const Projects = () => {
  const handleClickGoto = (repo: string) => {
    window?.open('https://github.com/umeshmk/' + repo, '_blank')?.focus();
  };

  return (
    <div className={styles.projects}>
      {githubRepos.map((v) => {
        return (
          <div
            className={styles.circleBox}
            key={v.name}
            onClick={() => handleClickGoto(v.repo)}>
            <El.Circle>
              <div className="item">{v.name}</div>
            </El.Circle>
          </div>
        );
      })}
    </div>
  );
};
