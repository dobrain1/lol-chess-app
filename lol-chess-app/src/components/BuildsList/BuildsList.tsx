import BuildDataType from '../../types/BuildDataType.ts';
import { useEffect, useState } from 'react';
import BuildsListItem from '../BuildsListItem/BuildsListItem.tsx';
import styles from './buildsList.module.scss';
import { getBuilds } from '../../helper/getBuilds.ts';

const BuildsList = () => {
  const [builds, setBuilds] = useState<BuildDataType[]>([]);

  const deleteBuild = (id: number) => {
    const sortedBuilds: BuildDataType[] = builds.filter(
      (build: BuildDataType) => build.id !== id,
    );

    localStorage.setItem('buildData', JSON.stringify(sortedBuilds));
    setBuilds(sortedBuilds);
  };

  useEffect(() => {
    const builds: BuildDataType[] = getBuilds();
    setBuilds(builds);
  }, []);

  return (
    <div className={styles.container}>
      {builds.map((build: BuildDataType) => (
        <BuildsListItem
          key={build.id}
          deleteBuild={deleteBuild}
          buildData={build}
        />
      ))}
    </div>
  );
};

export default BuildsList;
