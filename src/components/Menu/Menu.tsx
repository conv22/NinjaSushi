import React from 'react';
import { useSelector } from 'react-redux';
import { MenuRow } from './MenuRow';
import classes from './Menu.module.scss';
import roll from '../../assets/101-1.png';
import { RootState } from '../../redux/reducers/RootReducer';

const Menu: React.FC = () => {
  const items = useSelector((state: RootState) => state.menu.items);
  return (
    <section className={classes.menu_container}>
      <MenuHeader />
      <MenuRow
        title={'Роллы'}
        items={items.filter(item => item.category === 'roll')}
      />
      <MenuRow
        title={'Суши'}
        items={items.filter(item => item.category === 'sushi')}
      />
      <MenuRow
        title={'Сеты'}
        items={items.filter(item => item.category === 'set')}
      />
      <MenuRow
        title={'Напитки'}
        items={items.filter(item => item.category === 'drink')}
      />
      <MenuRow
        title={'Соусы'}
        items={items.filter(item => item.category === 'sauces')}
      />
    </section>
  );
};

const MenuHeader: React.FC = () => {
  return (
    <div className={classes.menu_header}>
      <div className={classes.menu_header_title}>Топ позиции</div>
      <div className={classes.menu_header_small}>
        В ассортименте Ninja Sushi представлены роллы, суши, сеты и напитки на
        любой вкус. Мы рекомендуем обязательно попробовать топ позиции нашего
        меню!
      </div>
    </div>
  );
};
export { Menu };
