import { Outlet } from 'react-router-dom';
import Container from '../../components/Container/Container.tsx';

import styles from './styles.module.scss';

const RootLayout = () => {
  return (
    <div className={styles.rootLayout}>
      <Container>
        <h1 className={styles.title}>
          Repository search app
        </h1>
      </Container>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
