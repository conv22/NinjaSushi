export const LOAD_MENU = 'LOAD_MENU';

export type MenuState = {
  items: Item[] | [];
};

export type Item = {
  title: string;
  weight: number;
  composition: Ingridient[];
  price: number;
  category: string;
};

export type Ingridient = {
  title: string;
};

type LoadMenuAction = {
  type: typeof LOAD_MENU;
  payload: Item[];
};

export type MenuActionTypes = LoadMenuAction;
