import React, { useState, useEffect } from 'react';
import { ButtomBar } from './../ButtomBar/ButtomBar';
import first from '../../assets/slider/first.jpg';
import second from '../../assets/slider/second.png';
import third from '../../assets/slider/third.jpg';
import fourth from '../../assets/slider/fourth.jpg';
import classes from './Slider.module.scss';

const Slider: React.FC = () => {
  const [click, setClick] = useState(false);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      if (!click) {
        if (current === -300) {
          return setCurrent(0);
        }
        return setCurrent(current => current - 100);
      }
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, [click, current]);

  return (
    <div className={classes.slider_wrapper}>
      <div className={classes.slider}>
        <div className={classes.slides}>
          {SliderData.map(slide => {
            return <Slide slide={slide} key={slide.id} current={current} />;
          })}
        </div>
        <div className={classes.navigation} onClick={() => setClick(true)}>
          <Control current={current} action={0} setCurrent={setCurrent} />
          <Control current={current} action={-100} setCurrent={setCurrent} />
          <Control current={current} action={-200} setCurrent={setCurrent} />
          <Control current={current} action={-300} setCurrent={setCurrent} />
        </div>
      </div>
      <ButtomBar />
    </div>
  );
};

//Slide

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

// Controls

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

// Data
type SliderDataProps = {
  img: string;
  text: string;
  title: string;
  id: number;
  button: string;
};

const SliderData: SliderDataProps[] = [
  {
    id: 0,
    img: first,
    text:
      'Сколько в месяц тратит Таня Пренткович, советует ли заводить Хаски, что хочет успеть сделать до конца зимы?',
    title: '#ninjafam: Таня Пренткович',
    button: 'Читать',
  },
  {
    id: 1,
    img: second,
    text:
      'Многие до сих пор задаются вопросом: «А зачем нужны васаби, имбирь и соевый соус?»',
    title: '#ниндзябезтайн: выпуск 4',
    button: 'Читать',
  },
  {
    id: 2,
    img: third,
    text:
      'Любовь к суши, ниндзя и роботы. Нет, это не анонс нового сериала, но что-то не менее крутое.',
    title: 'Приложение для твоего смартфона!',
    button: 'Читать',
  },
  {
    id: 3,
    img: fourth,
    text: 'Заказывайте суши премиум-класса для всей компании домой и в офис!',
    title: 'Доставка суши для истинных ценителей',
    button: 'Сделать заказ',
  },
];

export { Slider };
