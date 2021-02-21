import { Item } from '../menu/types';

export const CARD_ADD = 'CARD_ADD';
export const CARD_DELETE = 'CARD_DELETE';
export const CARD_CHANGE = 'CARD_CHANGE';

export type AddAction = {
  type: typeof CARD_ADD;
  payload: Item;
};
