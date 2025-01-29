import styles from './champList.module.scss';
import data from '../../../db/champions.json';
import ChampItem from '../ChampItem/ChampItem.tsx';
import ChampionType from '../../types/ChampionType.ts';

const ChampList = () => {
  return (
    <div className={styles.champContainer}>
      {data.map((champ: ChampionType) => (
        <ChampItem key={champ.id} champ={champ} />
      ))}
    </div>
  );
};

export default ChampList;
