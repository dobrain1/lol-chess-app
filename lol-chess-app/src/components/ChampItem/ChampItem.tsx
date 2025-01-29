import styles from './champItem.module.scss';
import cn from 'classnames';
import ChampionType from '../../types/ChampionType.ts';
import { FC } from 'react';
import { useDraggable } from '@dnd-kit/core';

interface ComponentProps {
  champ: ChampionType;
}

const ChampItem: FC<ComponentProps> = ({ champ }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `list-${champ.id}`,
    data: champ,
  });
  return (
    <div
      className={styles.slot}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <div className={cn(styles.imgWrapper, styles[`cost${champ.price}`])}>
        <img src={champ.image} alt="" />
      </div>
      <p className={styles.champName}>
        {champ.name.length > 8
          ? `${champ.name.slice(0, 7).trim()}...`
          : champ.name}
      </p>
      <div className={cn(styles.champPrice, styles[`cost${champ.price}`])}>
        <span>${champ.price}</span>
      </div>
    </div>
  );
};

export default ChampItem;
