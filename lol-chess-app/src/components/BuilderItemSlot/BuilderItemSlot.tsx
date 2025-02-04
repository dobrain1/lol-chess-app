import styles from './builderItemSlot.module.scss';
import { FC } from 'react';
import ItemType from '../../types/ItemType.ts';

interface ComponentProps {
  item?: ItemType | null;
}

const BuilderItemSlot: FC<ComponentProps> = ({ item }) => {
  return (
    <div className={styles.itemSlot}>
      {item && <img src={item.image} alt="" />}
    </div>
  );
};

export default BuilderItemSlot;
