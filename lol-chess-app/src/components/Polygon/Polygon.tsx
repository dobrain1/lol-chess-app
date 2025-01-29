import React, { FC } from 'react';
import styles from './polygon.module.scss';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { emptySlot } from '../../slices/championBuilderSlice';
import ImagePolygon from '../ImagePolygon/ImagePolygon';
import ChampionType from '../../types/ChampionType';
import { AppDispatch } from '../../store/store.ts';
import { useDroppable } from '@dnd-kit/core';

interface PolygonProps {
  slotIndex: number;
  champion: ChampionType | null;
  className: string;
}

const Polygon: FC<PolygonProps> = ({ slotIndex, champion, className }) => {
  const dispatch: AppDispatch = useDispatch();

  const { setNodeRef, isOver } = useDroppable({
    id: slotIndex,
    data: champion as ChampionType,
  });

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(emptySlot(slotIndex));
  };

  return (
    <div
      ref={setNodeRef}
      className={cn(styles.slot, className)}
      onContextMenu={handleRightClick}
    >
      <ImagePolygon champion={champion} slotIndex={slotIndex} isOver={isOver} />
    </div>
  );
};

export default Polygon;
