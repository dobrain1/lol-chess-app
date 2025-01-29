import styles from './imagePolygon.module.scss';
import cn from 'classnames';
import ChampionType from '../../types/ChampionType.ts';
import { FC } from 'react';
import { useDraggable } from '@dnd-kit/core';

interface ComponentProps {
  champion: ChampionType | null;
  slotIndex: number;
  isOver: boolean;
}

const ImagePolygon: FC<ComponentProps> = ({
  champion,
  slotIndex,
  isOver = false,
}) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `polygon-${champion?.id}-0${slotIndex}` || 'polygon',
    data: champion || {},
    disabled: !champion,
  });
  return (
    <div className={styles.polygon} ref={setNodeRef}>
      <div
        style={{
          opacity: isDragging ? 0.5 : 1,
        }}
        className={cn(
          styles.innerPolygon,
          champion ? styles[`cost${champion.price}`] : styles.noChamp,
        )}
        {...attributes}
        {...listeners}
      >
        <div
          style={{
            backgroundImage: `url(${champion && champion.image})`,
            backgroundColor: isOver ? 'white' : 'mediumaquamarine',
          }}
          className={styles.imagePolygon}
        ></div>
      </div>
    </div>
  );
};

export default ImagePolygon;
