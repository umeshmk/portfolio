import {BsChevronDoubleRight, BsChevronDoubleLeft} from 'react-icons/bs';
import styles from './styles.module.scss';

interface IProps {
  label: string;
  isLeft?: boolean;
}

export const Buttons = ({label, isLeft}: IProps) => {
  let icon = <BsChevronDoubleRight />;
  if (isLeft) icon = <BsChevronDoubleLeft />;

  return (
    <div className={styles.buttons} data-left={isLeft ? true : false}>
      <ul>
        <li>{label}</li>
        <li>&nbsp;</li>
        <li>&nbsp;</li>
        <li>
          <i>{icon}</i>
        </li>
      </ul>
    </div>
  );
};
