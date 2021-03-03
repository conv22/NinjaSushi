export const LOAD_MENU = 'LOAD_MENU';
export const SELECT_ITEM = 'SELECT_ITEM';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export type initialStateType = {
  menu: menuItem[] | null;
  selectedItem: menuItem | null;
  selectedCategory: menuItem[] | null;
  loading: boolean;
  error: null;
};
export type ingridientType = {
  id: string;
  image: string;
  title: string;
};

export type menuItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  weight: number;
  ingridients?: ingridientType[];
  category: string;
  image: string;
};

export type loadMenuType = {
  type: typeof LOAD_MENU;
  payload: menuItem[];
};

export type selectMenuItem = {
  type: typeof SELECT_ITEM;
  payload: menuItem;
};

export type selectMenuCategory = {
  type: typeof SELECT_CATEGORY;
  payload: menuItem[];
};
export type menuActionTypes =
  | selectMenuCategory
  | selectMenuItem
  | loadMenuType;
