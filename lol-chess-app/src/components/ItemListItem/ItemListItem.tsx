import styles from './itemListItem.module.scss';
import { FC } from 'react';
import ItemType from '../../types/ItemType.ts';
import { useDraggable } from '@dnd-kit/core';

interface ComponentProps {
  item: ItemType;
}

const ItemListItem: FC<ComponentProps> = ({ item }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `item-${item.id}`,
    data: item,
  });
  return (
    <div
      className={styles.listItem}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <img src={item.image} alt={item.name} />
    </div>
  );
};

export default ItemListItem;
