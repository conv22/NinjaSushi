import { DocumentReference } from '@firebase/firestore-types';
export const LOAD_MENU = 'LOAD_MENU';

export type MenuState = {
  items: Item[] | [];
};

export type Item = {
  title: string;
  weight: number;
  ingridients?: DocumentReference['path'];
  price: number;
  category: string;
  image: string;
  description: string;
};

export type Ingridient = {
  title: string;
  image: string;
};

type LoadMenuAction = {
  type: typeof LOAD_MENU;
  payload: Item[];
};

export type MenuActionTypes = LoadMenuAction;
