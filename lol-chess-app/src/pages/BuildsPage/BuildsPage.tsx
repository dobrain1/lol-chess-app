import { FC } from 'react';
import Header from '../../components/Header/Header.tsx';
import BuildsList from '../../components/BuildsList/BuildsList.tsx';
import styles from './buildsPage.module.scss';

const BuildsPage: FC = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <BuildsList />
      </div>
    </>
  );
};

export default BuildsPage;
