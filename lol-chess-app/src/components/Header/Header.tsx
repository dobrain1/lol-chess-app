import styles from './header.module.scss';
import { useNavigate } from 'react-router';

const Header = () => {
  let navigate = useNavigate();

  return (
    <div className={styles.header}>
      <button className={styles.headerBtn} onClick={() => navigate(`/builds`)}>
        YOUR BUILDS
      </button>
      <button className={styles.headerBtn} onClick={() => navigate(`/`)}>
        BUILDER
      </button>
    </div>
  );
};

export default Header;
