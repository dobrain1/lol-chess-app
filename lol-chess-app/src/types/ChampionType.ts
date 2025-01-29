import ItemType from './ItemType.ts';

export default interface champion {
  id: string;
  name: string;
  price: string;
  image: string;
  item?: ItemType;
}
