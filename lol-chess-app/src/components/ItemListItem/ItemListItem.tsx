import styles from './itemListItem.module.scss';
import { FC } from 'react';
import ItemType from '../../types/ItemType.ts';
import { useDraggable } from '@dnd-kit/core';
import { Tooltip } from 'react-tooltip';

interface ComponentProps {
  item: ItemType;
}

const ItemListItem: FC<ComponentProps> = ({ item }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `item-${item.id}`,
    data: item,
  });

  return (
    <>
      <div
        className={styles.listItem}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        data-tooltip-id={item.name}
        style={{
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <img src={item.image} alt={item.name} />
      </div>
      <Tooltip
        id={item.name}
        style={{
          backgroundColor: '#107e2c',
          maxWidth: '400px',
        }}
        place="top"
      >
        <p style={{ color: 'blueviolet' }}>{item.name}</p>
        <p>{item.description}</p>
      </Tooltip>
    </>
  );
};

export default ItemListItem;
