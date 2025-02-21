import Builder from '../../components/Builder/Builder';
import { FC, useEffect } from 'react';
import ChampList from '../../components/ChampList/ChampList';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { AppDispatch, RootState } from '../../store/store.ts';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  emptySlot,
  fillSlot,
  fullEmptySlot,
  fullFillSlot,
} from '../../slices/championBuilderSlice.ts';
import ChampionType from '../../types/ChampionType';
import styles from './builderPage.module.scss';
import ItemList from '../../components/ItemList/ItemList.tsx';
import ItemType from '../../types/ItemType.ts';
import { getTftCode } from '../../helper/getTftCode.ts';
import { getBuildData } from '../../helper/getBuildData.ts';
import Header from '../../components/Header/Header.tsx';
import { useParams } from 'react-router';
import { getBuilds } from '../../helper/getBuilds.ts';
import BuildDataType from '../../types/BuildDataType.ts';

const BuilderPage: FC = () => {
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const slot = useSelector((state: RootState) => state.championBuilder.slots);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    if (
      !over.data.current &&
      typeof active.id !== 'number' &&
      (active.id.includes('list') || active.id.includes('polygon'))
    ) {
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

    if (
      over.data.current &&
      typeof active.id !== 'number' &&
      active.id?.includes('item')
    ) {
      dispatch(
        addItem({
          slotIndex: over.id as number,
          item: active.data.current as ItemType,
        }),
      );
    }
  };

  const copyCode = async () => {
    const tftCode = getTftCode(slot);

    await navigator.clipboard.writeText(tftCode);

    alert('Код скопирован');
  };

  const saveToLocalStorage = () => {
    const buildData = getBuildData(slot);

    localStorage.setItem('buildData', JSON.stringify(buildData));

    alert(
      'Ваш сборка сохранёна. Все сохранённые сборки можно посмотреть на странице "YOUR BUILDS"',
    );
  };

  const { buildId } = useParams();

  const data = getBuilds();

  useEffect(() => {
    if (buildId) {
      const build: BuildDataType | undefined = data.find(
        (build: BuildDataType) => build.id === +buildId,
      );
      if (build) dispatch(fullFillSlot(build));
    } else {
      dispatch(fullEmptySlot());
    }
  }, [buildId]);

  return (
    <>
      <Header />
      <div className={styles.main}>
        <DndContext onDragEnd={handleDragEnd}>
          <div className={styles.contentContainer}>
            <div className={styles.builderContainer}>
              <Builder />
              <div className={styles.rightContainer}>
                <div className={styles.btnContainer}>
                  <button
                    onClick={saveToLocalStorage}
                    className={styles.saveBtn}
                  >
                    SAVE YOUR BUILD
                  </button>
                  <button className={styles.saveBtn} onClick={copyCode}>
                    COPY TEAM CODE
                  </button>
                </div>
                <ItemList />
              </div>
            </div>
            <ChampList />
          </div>
        </DndContext>
      </div>
      <div className={styles.footer}></div>
    </>
  );
};

export default BuilderPage;
