import React from 'react';
import classes from './Slider.module.scss';

type SlideProps = {
  slide: {
    img: string;
    text: string;
    button: string;
    title: string;
  };
  current: number;
};
const Slide: React.FC<SlideProps> = ({ current, slide }) => {
  return (
    <div
      className={classes.slide}
      style={{ transform: `translate(${current}%)` }}
    >
      <div className={classes.slide_title}>
        <h1 className={classes.h1}>{slide.title}</h1>
        <div className={classes.text}>
          {slide.text}
          <br /> <br />
          <a className={classes.button} role='button' href='/'>
            {slide.button}
          </a>
        </div>
      </div>
      <img src={slide.img} alt='' />
    </div>
  );
};

export default Slide;
