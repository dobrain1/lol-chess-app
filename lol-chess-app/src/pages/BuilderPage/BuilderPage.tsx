import React, { useEffect } from 'react';
import Builder from '../../components/Builder/Builder';
import ChampList from '../../components/ChampList/ChampList';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { AppDispatch, RootState } from '../../store/store.ts';
import { useDispatch, useSelector } from 'react-redux';
import { emptySlot, fillSlot } from '../../slices/championBuilderSlice.ts';
import ChampionType from '../../types/ChampionType';
import styles from './builderPage.module.scss';

const BuilderPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const slot = useSelector((state: RootState) => state.championBuilder.slots);

  // const handleDragEnd = (event: DragEndEvent) => {
  //   const { active, over } = event;
  //
  //   if (!over || active.id === over.id) return; // Если нет назначения или перетаскивание в тот же слот
  //
  //   const activeData = active.data.current as {
  //     slotIndex: number;
  //     champion: ChampionType;
  //   };
  //   const overData = over.data.current as { slotIndex: number };
  //
  //   if (activeData && overData) {
  //     const { slotIndex: activeSlot, champion } = activeData;
  //     const overSlot = overData.slotIndex;
  //
  //     if (activeSlot !== overSlot) {
  //       // Перемещаем чемпиона
  //       dispatch(fillSlot({ slotIndex: overSlot, champion }));
  //       // Освобождаем предыдущий слот
  //       dispatch(emptySlot(activeSlot));
  //     }
  //   }
  // };

  useEffect(() => {
    console.log(slot);
  }, [slot]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    if (!over.data.current) {
      dispatch(
        fillSlot({
          slotIndex: over.id as number,
          champion: active.data.current as ChampionType,
        }),
      );
    }

    if (
      typeof active.id !== 'number' &&
      active.id?.includes('polygon') &&
      !over.data.current
    ) {
      const imgSlotIndex =
        +`${active.id[active.id.length - 2]}${active.id[active.id.length - 1]}`;
      dispatch(emptySlot(imgSlotIndex));
    }
  };

  const saveToLocStor = (): void => {
    console.log('saveToLocStor');
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Builder />
      <button onClick={saveToLocStor} className={styles.saveBtn}>
        Сохранить билд
      </button>
      <ChampList />
    </DndContext>
  );
};

export default BuilderPage;
