import { db } from '../firebase';
import { Item } from '../redux/menu/types';

const api = {
  async getAllMenu(): Promise<Item[]> {
    let items: Array<Item> = [];
    await db
      .collection('menu')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let item = doc.data() as Item;
          item.id = doc.id;
          items.push(item);
        });
      });
    return items;
  },
  getItem(id: string): Promise<Item> {
    const itemRef = db.collection('menu').doc(id);
    return itemRef.get().then(doc => {
      let item = doc.data() as Item;
      item.id = doc.id;
      return item;
    });
  },
  async getCategory(title: string): Promise<Item[]> {
    let items: Array<Item> = [];
    return db
      .collection('menu')
      .where('category', '==', title)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let item = doc.data() as Item;
          item.id = doc.id;
          items.push(item);
        });
        return items;
      });
  },
};

export { api };
