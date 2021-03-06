import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MenuRow from './MenuRow';
import classes from './Menu.module.scss';
import { RootState } from '../../redux/reducers/RootReducer';
import { loadMenuThunkAction } from '../../redux/menu/actions';

const Menu: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMenuThunkAction());
  }, [dispatch]);
  const items = useSelector((state: RootState) => state.menu.menu);

  if (items === null) {
    return <h1>hello</h1>;
  }

  return (
    <section className={classes.menu_container}>
      <MenuHeader />

      <MenuRow
        title={'Роллы'}
        url={'roll'}
        items={items.filter(item => item.category === 'roll')}
      />
      <MenuRow
        url={'sushi'}
        title={'Суши'}
        items={items.filter(item => item.category === 'sushi')}
      />
      <MenuRow
        url={'set'}
        title={'Сеты'}
        items={items.filter(item => item.category === 'set')}
      />
      <MenuRow
        url={'drink'}
        title={'Напитки'}
        items={items.filter(item => item.category === 'drink')}
      />
      <MenuRow
        url={'sauces'}
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
