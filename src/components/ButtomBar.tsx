import React from 'react';
import buttomfirst from '../assets/slider/image1.svg';
import buttomsecond from '../assets/slider/image2.svg';
import buttomthird from '../assets/slider/image3.svg';
import buttomfourth from '../assets/slider/image4.svg';
import classes from './ButtomBar.module.scss';
const ButtomBar: React.FC = () => {
  return (
    <div className={classes.buttom_bar}>
      {ButtomBarData.map(item => {
        return (
          <ButtomBarItem img={item.img} text={item.text} title={item.title} />
        );
      })}
    </div>
  );
};

type ButtomBarItemProps = {
  img: string;
  text: string;
  title: string;
};

const ButtomBarItem: React.FC<ButtomBarItemProps> = ({ img, text, title }) => {
  return (
    <div className={classes.item}>
      <div className={classes.item_img}>
        <img src={img} alt='' />
      </div>
      <div className={classes.item_text}>
        <div className={classes.item_text__title}>{title}</div>
        <div className={classes.item_text__text}>{text}</div>
      </div>
    </div>
  );
};

// Data

const ButtomBarData: ButtomBarItemProps[] = [
  {
    img: buttomfirst,
    text: 'Мы гарантируем свежесть продуктов и не используем замороженную рыбу',
    title: 'Fresh made',
  },
  {
    img: buttomsecond,
    text:
      'Мы предлагаем как классические суши, так и авторские рецепты от шеф-повара',
    title: 'Рецепты от шеф-повара',
  },
  {
    img: buttomthird,
    text:
      'Мы не используем усилители вкуса. Все продукты закупаем у проверенных поставщиков',
    title: 'Качественные ингредиенты',
  },
  {
    img: buttomfourth,
    text:
      'Весь процесс приготовления проходит в соответствии со всеми санитарными нормами',
    title: 'Чистая кухня',
  },
];

export { ButtomBar };
