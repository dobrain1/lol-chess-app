import styles from './buildChampionItem.module.scss';
import { FC } from 'react';
import ChampionType from '../../types/ChampionType.ts';

interface ComponentProps {
  champion: ChampionType | null;
}

const BuildChampionItem: FC<ComponentProps> = ({ champion }) => {
  return (
    <div className={styles.imgContainer}>
      {champion && <img src={champion.image} alt="" />}
    </div>
  );
};

export default BuildChampionItem;
