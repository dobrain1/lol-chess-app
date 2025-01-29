import styles from './builder.module.scss';
import Polygon from '../Polygon/Polygon.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';

const Builder = () => {
  const slots = useSelector((state: RootState) => state.championBuilder.slots);

  return (
    <div className={styles.builderWrap}>
      {slots.map((champion, index) => (
        <Polygon
          key={index}
          champion={champion}
          slotIndex={index}
          className={
            Math.floor(index / 7) % 2 === 0 ? styles.leftRaw : styles.rightRaw
          }
        />
      ))}
    </div>
  );
};

export default Builder;
