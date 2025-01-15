import styles from './polygon.module.scss';
import cn from 'classnames';

interface ComponentProps {
  className: string;
  championIcon?: string;
}

const Polygon = ({ className, championIcon }: ComponentProps) => {
  return (
    <>
      <div className={cn(styles.slot, className)}>
        <div className={styles.polygon}>
          <div className={styles.innerPolygon}>
            <div
              style={{ backgroundImage: `url(${championIcon})` }}
              className={styles.imagePolygon}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Polygon;
