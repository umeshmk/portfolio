import {ReactElement} from 'react';

interface CircleProps {
  children?: React.ReactNode;
}
const Circle = (props: CircleProps) => {
  return <div className="circle">{props.children}</div>;
};

interface FrameProps {
  type: 'vertical' | 'horizontal';
}
const Frame = ({type}: FrameProps) => {
  return (
    <div
      // style={{rotate: type === 'horizontal' ? '0deg' : '90deg'}}
      data-type={type}>
      <img
        src={
          type === 'horizontal' ? '/frame-horizontal.svg' : 'frame-vertical.svg'
        }
        alt="frame"
      />
    </div>
  );
};

export const El = {
  Circle,
  Frame,
};
