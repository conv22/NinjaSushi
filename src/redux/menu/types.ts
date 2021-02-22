import { DocumentReference } from '@firebase/firestore-types';
export const LOAD_MENU = 'LOAD_MENU';
export const LOAD_ITEM = 'LOAD_ITEM';
export const LOAD_CATEGORY = 'LOAD_CATEGORY';

export type MenuState = {
  items: Item[] | [];
  selectedItem: Item | null;
  selectedCategory: Item[] | [];
};

export type Item = {
  title: string;
  weight: number;
  ingridients?: DocumentReference['path'];
  price: number;
  category: string;
  image: string;
  description: string;
  id: string;
};

export type Ingridient = {
  title: string;
  image: string;
};

type LoadMenuAction = {
  type: typeof LOAD_MENU;
  payload: Item[];
};
type LoadItemAction = {
  type: typeof LOAD_ITEM;
  payload: Item;
};

type LoadCategoryAction = {
  type: typeof LOAD_CATEGORY;
  payload: Item[];
};
export type MenuActionTypes =
  | LoadMenuAction
  | LoadItemAction
  | LoadCategoryAction;
