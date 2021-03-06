import React from 'react';
import classes from './Slider.module.scss';
type ControlProps = {
  action: number;
  current: number;
  setCurrent(number: number): void;
};
const Control: React.FC<ControlProps> = ({ action, current, setCurrent }) => {
  return (
    <span
      className={
        current === action ? `${classes.dot} ${classes.active}` : classes.dot
      }
      onClick={() => setCurrent(action)}
    ></span>
  );
};

export default Control;
