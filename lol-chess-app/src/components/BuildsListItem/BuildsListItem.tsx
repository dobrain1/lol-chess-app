import styles from './buildsListItem.module.scss';
import React, { FC } from 'react';
import ChampionType from '../../types/ChampionType.ts';
import BuildChampionItem from '../BuildChampionItem/BuildChampionItem.tsx';
import BuildDataType from '../../types/BuildDataType.ts';
import { useNavigate } from 'react-router';

interface ComponentProps {
  buildData: BuildDataType;
  deleteBuild: (id: number) => void;
}

const BuildsListItem: FC<ComponentProps> = ({ deleteBuild, buildData }) => {
  const removeBuild = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    deleteBuild(buildData.id);
  };
  let navigate = useNavigate();
  // @ts-ignore
  // @ts-ignore
  return (
    <div
      className={styles.list}
      onClick={() => navigate(`/builder/${buildData.id}`)}
    >
      <div className={styles.leftContainer}>
        {buildData.uniqueList.map((champion: ChampionType | null, index) => (
          <BuildChampionItem key={index} champion={champion} />
        ))}
      </div>
      <div className={styles.rightContainer}>
        <button onClick={(e) => removeBuild(e)}>Удалить</button>
      </div>
    </div>
  );
};

export default BuildsListItem;
