import styles from './itemList.module.scss';
import data from '../../../db/tft_items.json';
import ItemType from '../../types/ItemType.ts';
import ItemListItem from '../ItemListItem/ItemListItem.tsx';

const ItemList = () => {
  return (
    <div className={styles.itemList}>
      {data.map((item: ItemType) => (
        <ItemListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
