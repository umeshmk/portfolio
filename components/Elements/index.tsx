import {ReactElement} from 'react';

interface IProps {
  children?: React.ReactNode;
}
// const H1 = (props: IProps) => {
//   return <h1>{props.children}</h1>;
// };

const Circle = (props: IProps) => {
  return <div className="circle">{props.children}</div>;
};

export const El = {
  Circle,
};
