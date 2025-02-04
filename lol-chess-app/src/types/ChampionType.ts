import ItemType from './ItemType.ts';

export default interface champion {
  id: string;
  name: string;
  price: string;
  image: string;
  items?: [ItemType | null, ItemType | null, ItemType | null];
}
