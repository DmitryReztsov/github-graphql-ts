import styles from './styles.module.scss';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className={styles.rootLayout}>
      <h1 className={styles.title}>
        Repository search app
      </h1>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
